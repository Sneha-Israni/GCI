import { useState, useRef } from 'react';
import { motion } from 'motion/react';

interface SCRScreenProps {
  agentName?: string;
  onSubmit: (answers: SCRAnswers) => void;
}

export interface SCRAnswers {
  metInPerson: boolean | null;
  explainedSuitability: boolean | null;
  knowsAgentYears: string;
  knowsAgentMonths: string;
  knowsAgentDays: string;
  isRelated: boolean | null;
  foundDiscrepancy: boolean | null;
  riskAssociated: boolean | null;
  confirmedIncome: boolean | null;
  ensuredDisclosures: boolean | null;
  agentDetails: {
    channelPartner: string;
    nameAndCode: string;
    designation: string;
    branchName: string;
    date: string;
    place: string;
  };
}

export function SCRScreen({ agentName = 'Girish Mane', onSubmit }: SCRScreenProps) {
  const [answers, setAnswers] = useState<SCRAnswers>({
    metInPerson: null,
    explainedSuitability: null,
    knowsAgentYears: '',
    knowsAgentMonths: '',
    knowsAgentDays: '',
    isRelated: null,
    foundDiscrepancy: null,
    riskAssociated: null,
    confirmedIncome: null,
    ensuredDisclosures: null,
    agentDetails: {
      channelPartner: 'TIED',
      nameAndCode: 'MOHD Aadil Khan 70037500',
      designation: 'Standard Advisor',
      branchName: 'Bhopal - BM UNIT 1_AGENCY',
      date: '29 Dec 2025',
      place: '',
    },
  });

  const [allYesEnabled, setAllYesEnabled] = useState(false);
  const [discrepancyDetails, setDiscrepancyDetails] = useState<string>('');
  const [riskDetails, setRiskDetails] = useState<string>('');
  const [incomeDetails, setIncomeDetails] = useState<string>('');
  const [discrepancyError, setDiscrepancyError] = useState(false);
  const [riskError, setRiskError] = useState(false);
  const [incomeError, setIncomeError] = useState(false);

  const discrepancyRef = useRef<HTMLTextAreaElement>(null);
  const riskRef = useRef<HTMLTextAreaElement>(null);
  const incomeRef = useRef<HTMLTextAreaElement>(null);

  const handleAllYesToggle = (enabled: boolean) => {
    setAllYesEnabled(enabled);
    if (enabled) {
      setAnswers({
        ...answers,
        metInPerson: true,
        explainedSuitability: true,
        isRelated: true,
        foundDiscrepancy: true,
        riskAssociated: true,
        confirmedIncome: true,
        ensuredDisclosures: true,
      });
    } else {
      setAnswers({
        ...answers,
        metInPerson: null,
        explainedSuitability: null,
        isRelated: null,
        foundDiscrepancy: null,
        riskAssociated: null,
        confirmedIncome: null,
        ensuredDisclosures: null,
      });
      setDiscrepancyDetails('');
      setRiskDetails('');
      setIncomeDetails('');
      setDiscrepancyError(false);
      setRiskError(false);
      setIncomeError(false);
    }
  };

  const isFormValid = () => {
    return (
      answers.metInPerson !== null &&
      answers.explainedSuitability !== null &&
      (answers.knowsAgentYears || answers.knowsAgentMonths || answers.knowsAgentDays) &&
      answers.isRelated !== null &&
      answers.foundDiscrepancy !== null &&
      answers.riskAssociated !== null &&
      answers.confirmedIncome !== null &&
      answers.ensuredDisclosures !== null &&
      answers.agentDetails.place.trim() !== ''
    );
  };

  const handleSubmit = () => {
    const detailsValid =
      (!answers.foundDiscrepancy || discrepancyDetails.trim() !== '') &&
      (!answers.riskAssociated || riskDetails.trim() !== '') &&
      (!answers.confirmedIncome || incomeDetails.trim() !== '');
    if (!detailsValid) {
      if (answers.foundDiscrepancy && discrepancyDetails.trim() === '') setDiscrepancyError(true);
      if (answers.riskAssociated && riskDetails.trim() === '') setRiskError(true);
      if (answers.confirmedIncome && incomeDetails.trim() === '') setIncomeError(true);
      if (answers.foundDiscrepancy && discrepancyDetails.trim() === '') {
        discrepancyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (answers.riskAssociated && riskDetails.trim() === '') {
        riskRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (answers.confirmedIncome && incomeDetails.trim() === '') {
        incomeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    if (isFormValid()) {
      onSubmit(answers);
    }
  };

  const YesNoButtons = ({ 
    value, 
    onChange 
  }: { 
    value: boolean | null; 
    onChange: (val: boolean) => void 
  }) => (
    <div className="flex gap-2 w-full">
      <button
        onClick={() => onChange(true)}
        className={`flex-1 h-14 rounded-xl border border-gray-200 transition-all ${
          value === true 
            ? 'bg-[#c21b17] text-white border-[#c21b17]' 
            : 'bg-white text-gray-600'
        }`}
      >
        Yes
      </button>
      <button
        onClick={() => onChange(false)}
        className={`flex-1 h-14 rounded-xl border border-gray-200 transition-all ${
          value === false 
            ? 'bg-[#c21b17] text-white border-[#c21b17]' 
            : 'bg-white text-gray-600'
        }`}
      >
        No
      </button>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="px-5 w-full mb-4"
    >
      <div className="space-y-3">
        {/* All Yes Toggle */}
        <div className="bg-[#fff7f7] rounded-2xl border border-[#c21b17] p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-[#c21b17]">Quick Fill: All Yes</p>
              <p className="text-xs text-gray-600 mt-1">Auto-select "Yes" for all questions</p>
            </div>
            <button
              onClick={() => handleAllYesToggle(!allYesEnabled)}
              className={`relative w-14 h-8 rounded-full transition-all ${
                allYesEnabled ? 'bg-[#c21b17]' : 'bg-gray-300'
              }`}
            >
              <motion.div
                animate={{ x: allYesEnabled ? 24 : 2 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
              />
            </button>
          </div>
        </div>

        {/* Question 1 */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
          <p className="text-sm mb-3">
            Did you meet {agentName} in person at the time of Application? <span className="text-[#c21b17]">*</span>
          </p>
          <YesNoButtons 
            value={answers.metInPerson} 
            onChange={(val) => setAnswers({ ...answers, metInPerson: val })} 
          />
        </div>

        {/* Question 2 */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
          <p className="text-sm mb-3">
            Have you assessed and explained the suitability of the plan to {agentName} as per his/her need? <span className="text-[#c21b17]">*</span>
          </p>
          <YesNoButtons 
            value={answers.explainedSuitability} 
            onChange={(val) => setAnswers({ ...answers, explainedSuitability: val })} 
          />
        </div>

        {/* Question 3 */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
          <p className="text-sm mb-3">
            Is {agentName} related to you? <span className="text-[#c21b17]">*</span>
          </p>
          <YesNoButtons 
            value={answers.isRelated} 
            onChange={(val) => setAnswers({ ...answers, isRelated: val })} 
          />
        </div>

        {/* Question 4 */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
          <p className="text-sm mb-3">
            Do you find any discrepancy in Age / Income per annum through salary or business or other sources / Occupation / Current and historical health (physical &/or mental) / Habits / Avocational activities / Resident status of {agentName} vis-à-vis details provided in proposal form? If yes, please provide details. <span className="text-[#c21b17]">*</span>
          </p>
          <YesNoButtons 
            value={answers.foundDiscrepancy} 
            onChange={(val) => setAnswers({ ...answers, foundDiscrepancy: val })} 
          />
          {answers.foundDiscrepancy === true && (
            <div className="mt-2">
              <p className="text-sm mb-1">
                Please provide details
                <span className="text-red-500"> *</span>
              </p>
              <textarea
                ref={discrepancyRef}
                className={`w-full border rounded-lg p-2 text-sm min-h-[60px] ${
                  discrepancyError ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Please provide details..."
                value={discrepancyDetails}
                onChange={(e) => { setDiscrepancyDetails(e.target.value); setDiscrepancyError(false); }}
              />
              {discrepancyError && (
                <p className="text-red-500 text-xs mt-1">Please provide details to continue</p>
              )}
            </div>
          )}
        </div>

        {/* Question 5 */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
          <p className="text-sm mb-3">
            Is there any risk associated with {agentName} with respect to his / her occupation / financial / social position that could affect the risk adversely in the insurance proposal? If yes, please provide details. <span className="text-[#c21b17]">*</span>
          </p>
          <YesNoButtons 
            value={answers.riskAssociated} 
            onChange={(val) => setAnswers({ ...answers, riskAssociated: val })} 
          />
          {answers.riskAssociated === true && (
            <div className="mt-2">
              <p className="text-sm mb-1">
                Please provide details
                <span className="text-red-500"> *</span>
              </p>
              <textarea
                ref={riskRef}
                className={`w-full border rounded-lg p-2 text-sm min-h-[60px] ${
                  riskError ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Please provide details..."
                value={riskDetails}
                onChange={(e) => { setRiskDetails(e.target.value); setRiskError(false); }}
              />
              {riskError && (
                <p className="text-red-500 text-xs mt-1">Please provide details to continue</p>
              )}
            </div>
          )}
        </div>

        {/* Question 6 */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
          <p className="text-sm mb-3">
            Were you able to confirm income details through ITR / Form 16 / Pay Slip / Balance Sheet / P&L / Other documents? If yes, please provide details. <span className="text-[#c21b17]">*</span>
          </p>
          <YesNoButtons 
            value={answers.confirmedIncome} 
            onChange={(val) => setAnswers({ ...answers, confirmedIncome: val })} 
          />
          {answers.confirmedIncome === true && (
            <div className="mt-2">
              <p className="text-sm mb-1">
                Please provide details
                <span className="text-red-500"> *</span>
              </p>
              <textarea
                ref={incomeRef}
                className={`w-full border rounded-lg p-2 text-sm min-h-[60px] ${
                  incomeError ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Please provide details..."
                value={incomeDetails}
                onChange={(e) => { setIncomeDetails(e.target.value); setIncomeError(false); }}
              />
              {incomeError && (
                <p className="text-red-500 text-xs mt-1">Please provide details to continue</p>
              )}
            </div>
          )}
        </div>

        {/* Question 7 */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
          <p className="text-sm mb-3">
            I have ensured that all health/lifestyle/financial disclosures have been accurately captured in the application form post extensive discussion with the applicant and that the applicant has been explained the possible consequences of non disclosure. <span className="text-[#c21b17]">*</span>
          </p>
          <YesNoButtons 
            value={answers.ensuredDisclosures} 
            onChange={(val) => setAnswers({ ...answers, ensuredDisclosures: val })} 
          />
        </div>

        {/* Question 8 */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
          <p className="text-sm mb-3">
            How long have you known {agentName}? <span className="text-[#c21b17]">*</span>
          </p>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Years"
              value={answers.knowsAgentYears}
              onChange={(e) => setAnswers({ ...answers, knowsAgentYears: e.target.value })}
              className="w-[104px] h-12 px-3 rounded-lg border border-gray-200 text-sm"
              min="0"
            />
            <input
              type="number"
              placeholder="Months"
              value={answers.knowsAgentMonths}
              onChange={(e) => setAnswers({ ...answers, knowsAgentMonths: e.target.value })}
              className="w-[104px] h-12 px-3 rounded-lg border border-gray-200 text-sm"
              min="0"
              max="11"
            />
            <input
              type="number"
              placeholder="Days"
              value={answers.knowsAgentDays}
              onChange={(e) => setAnswers({ ...answers, knowsAgentDays: e.target.value })}
              className="w-[104px] h-12 px-3 rounded-lg border border-gray-200 text-sm"
              min="0"
              max="30"
            />
          </div>
        </div>

        {/* Agent Details */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
          <p className="text-sm font-bold mb-3 text-[#1a1a1a]">
            Agent Details<span className="text-[#c21b17]">*</span>
          </p>

          <div className="space-y-3">
            <div>
              <label className="text-xs text-[#737373] font-medium block mb-1">Channel Partner</label>
              <div className="w-full h-[47px] px-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-gray-100 text-sm text-gray-500 flex items-center cursor-not-allowed">
                {answers.agentDetails.channelPartner}
              </div>
            </div>

            <div>
              <label className="text-xs text-[#737373] font-medium block mb-1">Name and Code of Advisor Name</label>
              <div className="w-full h-[47px] px-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-gray-100 text-sm text-gray-500 flex items-center cursor-not-allowed">
                {answers.agentDetails.nameAndCode}
              </div>
            </div>

            <div>
              <label className="text-xs text-[#737373] font-medium block mb-1">Designation</label>
              <div className="w-full h-[47px] px-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-gray-100 text-sm text-gray-500 flex items-center cursor-not-allowed">
                {answers.agentDetails.designation}
              </div>
            </div>

            <div>
              <label className="text-xs text-[#737373] font-medium block mb-1">Branch Name</label>
              <div className="w-full h-[47px] px-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-gray-100 text-sm text-gray-500 flex items-center cursor-not-allowed">
                {answers.agentDetails.branchName}
              </div>
            </div>

            <div>
              <label className="text-xs text-[#737373] font-medium block mb-1">Date</label>
              <div className="w-full h-[47px] px-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-gray-100 text-sm text-gray-500 flex items-center cursor-not-allowed">
                {answers.agentDetails.date}
              </div>
            </div>

            <div>
              <label className="text-xs text-[#737373] font-medium block mb-1">
                Place <span className="text-[#c21b17]">*</span>
              </label>
              <input
                type="text"
                value={answers.agentDetails.place}
                onChange={(e) => setAnswers({ 
                  ...answers, 
                  agentDetails: { ...answers.agentDetails, place: e.target.value } 
                })}
                className="w-full h-[47px] px-3 rounded-lg border border-[rgba(0,0,0,0.1)] text-sm text-[#263238] placeholder:text-[#a3a3a3]"
                placeholder="Enter place"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!isFormValid()}
          className={`w-full h-14 rounded-xl transition-all ${
            isFormValid()
              ? 'bg-[#c21b17] text-white shadow-lg'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Submit Details
        </button>
      </div>
    </motion.div>
  );
}