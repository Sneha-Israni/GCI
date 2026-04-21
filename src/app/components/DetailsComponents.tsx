import { motion } from 'motion/react';
import { useState } from 'react';
import svgPathsEdit from '../../imports/svg-srk443xpht';
import svgPathsDetails from '../../imports/svg-gb7p4kg93f';
import svgPathsBanner from '../../imports/svg-lsdy45817n';
import { ReviewDocumentsCard } from './DocumentsComponents';
import { ReviewFamilyDetailsCard } from './FamilyDetailsComponents';
import { CollapsibleCard } from './CollapsibleCard';

interface EditBannerProps {
  onClick: () => void;
}

export function EditBanner({ onClick }: EditBannerProps) {
  return (
    <motion.button
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="absolute bg-[#c21b17] content-stretch flex h-[40px] items-center justify-between left-0 px-[16px] py-[10px] right-0 top-[58px] z-40"
    >
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
        <div className="content-stretch flex flex-col items-start pb-0 pt-[4px] px-[4px] relative rounded-[6px] shrink-0 size-[24px]">
          <div className="h-[16px] overflow-clip relative shrink-0 w-full">
            <div className="absolute inset-[8.33%_8.33%_8.34%_8.33%]">
              <div className="absolute inset-[-4.38%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                  <path d={svgPathsBanner.p140233b0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
          Edit Details
        </p>
      </div>
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ '--transform-inner-width': '0', '--transform-inner-height': '0' } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="relative size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d="M6 15L12 9L18 15" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

interface DetailsPageProps {
  userData: {
    age: string;
    gender: string;
    goal: string;
    goalAmount: string;
    policyType: string;
    riskTolerance: string;
    selectedPlan: string;
    riders: string;
    policyDuration: string;
    premiumPaymentTerm: string;
    premiumFrequency: string;
    employeeStatus: string;
    productOption: string;
    productCategory: string;
    deathBenefitMultiple: string;
    // Personal Details
    fullName?: string;
    dateOfBirth?: string;
    placeOfBirth?: string;
    nationality?: string;
    maritalStatus?: string;
    // Professional Details
    designation?: string;
    employerName?: string;
    industry?: string;
    occupation?: string;
    jobDuties?: string;
    hazardousEnvironment?: string;
    annualIncome?: string;
    // Family Details
    fatherFullName?: string;
    fatherDOB?: string;
    fatherVitalStatus?: string;
    fatherCauseOfDeath?: string;
    fatherAsNominee?: string;
    motherFullName?: string;
    motherDOB?: string;
    motherVitalStatus?: string;
    motherCauseOfDeath?: string;
    motherAsNominee?: string;
    nomineeName?: string;
    nomineeRelationship?: string;
    nomineeAge?: string;
    nomineeGender?: string;
    // Height/Weight
    height?: string;
    weight?: string;
    weightChange?: string;
    // Health Conditions
    healthConditions?: string[];
    healthConditionDetails?: Array<{
      condition: string;
      exactName: string;
      diagnosedDate: string;
      treatment: string;
      currentStatus: string;
    }>;
    // Substance Consumption
    substanceConsumption?: string[];
    // Asset Declaration
    assets?: string[];
    // Bank Details
    bankName?: string;
    accountNumber?: string;
    ifscCode?: string;
    branchName?: string;
    // Nominees
    nominees?: Array<{ fullName: string; relationship: string; percentage: number; dateOfBirth?: string }>;
    selectedNominees?: string[];
  };
  documents?: Record<string, File | null>;
  previewUrls?: Record<string, string>;
  onBack: () => void;
  onEdit: () => void;
  onEditPolicy: () => void;
  onEditDocuments?: () => void;
  onEditPersonalDetails?: () => void;
  onEditProfessionalDetails?: () => void;
  onEditFamilyDetails?: () => void;
  onEditHeightWeight?: () => void;
  onEditHealthQuestions?: () => void;
  onEditSubstances?: () => void;
  onEditAssets?: () => void;
  onEditBankDetails?: () => void;
  onEditNominees?: () => void;
}

export function DetailsPage({ userData, documents, previewUrls, onBack, onEdit, onEditPolicy, onEditDocuments, onEditPersonalDetails, onEditProfessionalDetails, onEditFamilyDetails, onEditHeightWeight, onEditHealthQuestions, onEditSubstances, onEditAssets, onEditBankDetails, onEditNominees }: DetailsPageProps) {
  // State to track which cards are expanded
  const [expandedCards, setExpandedCards] = useState<{
    onboarding: boolean;
    policy: boolean;
    documents: boolean;
    personal: boolean;
    professional: boolean;
    family: boolean;
    heightWeight: boolean;
    health: boolean;
    substances: boolean;
    assets: boolean;
    bank: boolean;
    nominee: boolean;
  }>({
    onboarding: true,
    policy: true,
    documents: true,
    personal: true,
    professional: true,
    family: true,
    heightWeight: true,
    health: true,
    substances: true,
    assets: true,
    bank: true,
    nominee: true,
  });

  const toggleCard = (cardName: keyof typeof expandedCards) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardName]: !prev[cardName]
    }));
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="absolute inset-0 bg-gradient-to-b from-[#ffe9e7] to-[#fffefe]"
    >
      {/* Header */}
      <div className="absolute content-stretch flex gap-[10px] items-center left-0 px-[20px] py-[10px] top-[65px] w-full">
        <button
          onClick={onBack}
          className="flex items-center justify-center relative shrink-0 size-[24px]"
          style={{ '--transform-inner-width': '0', '--transform-inner-height': '0' } as React.CSSProperties}
        >
          <div className="flex-none rotate-[270deg]">
            <div className="relative size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d="M6 15L12 9L18 15" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </button>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
          Your Details
        </p>
      </div>

      {/* Onboarding Details Card */}
      <div className="absolute content-stretch flex flex-col items-center left-[20px] overflow-y-auto right-[20px] top-[141px] bottom-[20px] gap-[16px] pb-[20px]">
        {/* Card 1: Onboarding Details — only show if at least one field is filled */}
        {(userData.age || userData.gender || userData.goal || userData.goalAmount) && (
        <CollapsibleCard
          title="Onboarding Details"
          isExpanded={expandedCards.onboarding}
          onToggle={() => toggleCard('onboarding')}
          onEdit={onEdit}
        >
          <div className="relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[0.5px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start pb-0 pt-[0.5px] px-[16px] relative w-full">
                {/* Age & Gender - Only show if both are filled */}
                {userData.age && userData.gender && (
                  <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                    <div className="h-[19.5px] relative shrink-0">
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                        Age & Gender
                      </p>
                    </div>
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                      {userData.age} & {userData.gender}
                    </p>
                  </div>
                )}
                
                {/* Goal - Only show if filled */}
                {userData.goal && (
                  <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                    <div className="h-[19.5px] relative shrink-0">
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                        Goal
                      </p>
                    </div>
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                      {userData.goal}
                    </p>
                  </div>
                )}
                
                {/* Goal Amount & Tenure - Only show if filled */}
                {userData.goalAmount && (
                  <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                    <div className="h-[19.5px] relative shrink-0">
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                        Goal Amount & Tenure
                      </p>
                    </div>
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                      {userData.goalAmount}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CollapsibleCard>
        )}

        {/* Card 2: Policy Details — only show if at least one policy field is filled */}
        {(userData.policyType || userData.riskTolerance || userData.selectedPlan || userData.riders || userData.policyDuration || userData.premiumPaymentTerm || userData.premiumFrequency || userData.employeeStatus || userData.productOption || userData.productCategory || userData.deathBenefitMultiple) && (
        <CollapsibleCard title="Policy Details" isExpanded={expandedCards.policy} onToggle={() => toggleCard('policy')} onEdit={onEditPolicy}>
                      <div className="relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[0.5px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col items-start pb-0 pt-[0.5px] px-[16px] relative w-full">
                            {/* Policy Type */}
                            {userData.policyType && (
                              <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    Policy Type
                                  </p>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                  {userData.policyType}
                                </p>
                              </div>
                            )}

                            {/* Risk Tolerance */}
                            {userData.riskTolerance && (
                              <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    Risk Tolerance
                                  </p>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                  {userData.riskTolerance}
                                </p>
                              </div>
                            )}

                            {/* Selected Plan */}
                            {userData.selectedPlan && (
                              <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    Selected Plan
                                  </p>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                  {userData.selectedPlan}
                                </p>
                              </div>
                            )}

                            {/* Riders */}
                            {userData.riders && (
                              <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    Riders
                                  </p>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                  {userData.riders}
                                </p>
                              </div>
                            )}

                            {/* Policy Duration */}
                            {userData.policyDuration && (
                              <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    Policy Duration
                                  </p>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                  {userData.policyDuration}
                                </p>
                              </div>
                            )}

                            {/* Premium Payment Term */}
                            {userData.premiumPaymentTerm && (
                              <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    Premium Payment Term
                                  </p>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                  {userData.premiumPaymentTerm}
                                </p>
                              </div>
                            )}

                            {/* Premium Frequency */}
                            {userData.premiumFrequency && (
                              <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    Premium Frequency
                                  </p>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                  {userData.premiumFrequency}
                                </p>
                              </div>
                            )}

                            {/* Employee Status */}
                            {userData.employeeStatus && (
                              <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    Employee Status
                                  </p>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                  {userData.employeeStatus}
                                </p>
                              </div>
                            )}

                            {/* Product Option */}
                            {userData.productOption && (
                              <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    Product Option
                                  </p>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                  {userData.productOption}
                                </p>
                              </div>
                            )}

                            {/* Product Category */}
                            {userData.productCategory && (
                              <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    Product Category
                                  </p>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                  {userData.productCategory}
                                </p>
                              </div>
                            )}

                            {/* Death Benefit Multiple */}
                            {userData.deathBenefitMultiple && (
                              <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    Death Benefit Multiple
                                  </p>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                  {userData.deathBenefitMultiple}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
        </CollapsibleCard>

        )}

        {/* Card 3: Documents */}
        {documents && previewUrls && (
          <ReviewDocumentsCard
            documents={documents}
            previewUrls={previewUrls}
            onEdit={onEditDocuments || (() => {})}
          />
        )}

        {/* Card 4: Personal Details — only show if user-filled fields exist (nationality is always hardcoded so excluded) */}
        {(userData.fullName || userData.dateOfBirth || userData.placeOfBirth || userData.maritalStatus) && (
          <CollapsibleCard title="Personal Details" isExpanded={expandedCards.personal} onToggle={() => toggleCard('personal')} onEdit={onEditPersonalDetails || (() => {})}>
                        <div className="relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[0.5px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
                          <div className="overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex flex-col items-start pb-0 pt-[0.5px] px-[16px] relative w-full">
                              {userData.fullName && (
                                <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                  <div className="h-[19.5px] relative shrink-0">
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                      Full Name
                                    </p>
                                  </div>
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                    {userData.fullName}
                                  </p>
                                </div>
                              )}
                              {userData.dateOfBirth && (
                                <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                  <div className="h-[19.5px] relative shrink-0">
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                      Date of Birth
                                    </p>
                                  </div>
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                    {userData.dateOfBirth}
                                  </p>
                                </div>
                              )}
                              {userData.placeOfBirth && (
                                <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                  <div className="h-[19.5px] relative shrink-0">
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                      Place of Birth
                                    </p>
                                  </div>
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                    {userData.placeOfBirth}
                                  </p>
                                </div>
                              )}
                              {userData.nationality && (
                                <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                  <div className="h-[19.5px] relative shrink-0">
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                      Nationality
                                    </p>
                                  </div>
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                    {userData.nationality}
                                  </p>
                                </div>
                              )}
                              {userData.maritalStatus && (
                                <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                  <div className="h-[19.5px] relative shrink-0">
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                      Marital Status
                                    </p>
                                  </div>
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                    {userData.maritalStatus}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
          </CollapsibleCard>
        )}

        {/* Card 5: Professional Details */}
        {(userData.designation || userData.employerName || userData.industry || userData.occupation || userData.jobDuties || userData.hazardousEnvironment || userData.annualIncome) && (
          <CollapsibleCard title="Professional Details" isExpanded={expandedCards.professional} onToggle={() => toggleCard('professional')} onEdit={onEditProfessionalDetails || (() => {})}>
                        <div className="relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[0.5px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
                          <div className="overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex flex-col items-start pb-0 pt-[0.5px] px-[16px] relative w-full">
                              {userData.designation && (
                                <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                  <div className="h-[19.5px] relative shrink-0">
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                      Designation
                                    </p>
                                  </div>
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                    {userData.designation}
                                  </p>
                                </div>
                              )}
                              {userData.employerName && (
                                <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                  <div className="h-[19.5px] relative shrink-0">
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                      Employer Name
                                    </p>
                                  </div>
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                    {userData.employerName}
                                  </p>
                                </div>
                              )}
                              {userData.industry && (
                                <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                  <div className="h-[19.5px] relative shrink-0">
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                      Industry
                                    </p>
                                  </div>
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                    {userData.industry}
                                  </p>
                                </div>
                              )}
                              {userData.occupation && (
                                <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                  <div className="h-[19.5px] relative shrink-0">
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                      Occupation
                                    </p>
                                  </div>
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                    {userData.occupation}
                                  </p>
                                </div>
                              )}
                              {userData.jobDuties && (
                                <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                  <div className="h-[19.5px] relative shrink-0">
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                      Job Duties
                                    </p>
                                  </div>
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                    {userData.jobDuties}
                                  </p>
                                </div>
                              )}
                              {userData.hazardousEnvironment && (
                                <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                  <div className="h-[19.5px] relative shrink-0">
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                      Hazardous Environment
                                    </p>
                                  </div>
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                    {userData.hazardousEnvironment}
                                  </p>
                                </div>
                              )}
                              {userData.annualIncome && (
                                <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                  <div className="h-[19.5px] relative shrink-0">
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                      Annual Income
                                    </p>
                                  </div>
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                    {userData.annualIncome}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
          </CollapsibleCard>
        )}

        {/* Card 6: Family Details */}
        <ReviewFamilyDetailsCard
          userData={userData}
          onEdit={onEditFamilyDetails || (() => {})}
        />

        {/* Card 7: Height/Weight */}
        {(userData.height || userData.weight || userData.weightChange) && (
          <CollapsibleCard title="Height & Weight" isExpanded={expandedCards.heightWeight} onToggle={() => toggleCard('heightWeight')} onEdit={onEditHeightWeight || (() => {})}>
                        <div className="relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[0.5px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
                          <div className="overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex flex-col items-start pb-0 pt-[0.5px] px-[16px] relative w-full">
                              {userData.height && (
                                <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                  <div className="h-[19.5px] relative shrink-0">
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                      Height
                                    </p>
                                  </div>
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                    {userData.height}
                                  </p>
                                </div>
                              )}
                              {userData.weight && (
                                <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                  <div className="h-[19.5px] relative shrink-0">
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                      Weight
                                    </p>
                                  </div>
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                    {userData.weight}
                                  </p>
                                </div>
                              )}
                              {userData.weightChange && (
                                <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                  <div className="h-[19.5px] relative shrink-0">
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                      Weight Change (&gt;5kg in 6 months)
                                    </p>
                                  </div>
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                    {userData.weightChange}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
          </CollapsibleCard>
        )}

        {/* Card 8: Health Conditions */}
        {(userData.healthConditions && userData.healthConditions.length > 0) && (
          <CollapsibleCard title="Health Conditions" isExpanded={expandedCards.health} onToggle={() => toggleCard('health')} onEdit={onEditHealthQuestions || (() => {})}>
                        <div className="relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[0.5px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
                          <div className="overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex flex-col items-start pb-0 pt-[0.5px] px-[16px] relative w-full">
                              <div className="content-stretch flex min-h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    Conditions
                                  </p>
                                </div>
                                <div className="flex flex-col gap-1 items-end">
                                  {userData.healthConditions.map((condition, index) => (
                                    <p key={index} className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic text-[#263238] text-[13px] text-right">
                                      {condition}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
          </CollapsibleCard>
        )}

        {/* Card 9: Substance Consumption */}
        {(userData.substanceConsumption && userData.substanceConsumption.length > 0) && (
          <CollapsibleCard title="Substance Consumption" isExpanded={expandedCards.substances} onToggle={() => toggleCard('substances')} onEdit={onEditSubstances || (() => {})}>
                        <div className="relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[0.5px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
                          <div className="overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex flex-col items-start pb-0 pt-[0.5px] px-[16px] relative w-full">
                              <div className="content-stretch flex min-h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    Substances
                                  </p>
                                </div>
                                <div className="flex flex-col gap-1 items-end">
                                  {userData.substanceConsumption.map((substance, index) => (
                                    <p key={index} className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic text-[#263238] text-[13px] text-right">
                                      {substance}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
          </CollapsibleCard>
        )}

        {/* Card 10: Assets */}
        {(userData.assets && userData.assets.length > 0) && (
          <CollapsibleCard title="Assets" isExpanded={expandedCards.assets} onToggle={() => toggleCard('assets')} onEdit={onEditAssets || (() => {})}>
                        <div className="relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[0.5px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
                          <div className="overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex flex-col items-start pb-0 pt-[0.5px] px-[16px] relative w-full">
                              <div className="content-stretch flex min-h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    Asset Types
                                  </p>
                                </div>
                                <div className="flex flex-col gap-1 items-end">
                                  {userData.assets.map((asset, index) => (
                                    <p key={index} className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic text-[#263238] text-[13px] text-right">
                                      {asset}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
          </CollapsibleCard>
        )}

        {/* Card 11: Bank Details */}
        {(userData.bankName || userData.accountNumber || userData.ifscCode || userData.branchName) && (
          <CollapsibleCard title="Bank Details" isExpanded={expandedCards.bank} onToggle={() => toggleCard('bank')} onEdit={onEditBankDetails || (() => {})}>
                        <div className="relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[0.5px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
                          <div className="overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex flex-col items-start pb-0 pt-[0.5px] px-[16px] relative w-full">
                              {userData.bankName && (
                                <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                  <div className="h-[19.5px] relative shrink-0">
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                      Bank Name
                                    </p>
                                  </div>
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                    {userData.bankName}
                                  </p>
                                </div>
                              )}
                              {userData.accountNumber && (
                                <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                  <div className="h-[19.5px] relative shrink-0">
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                      Account Number
                                    </p>
                                  </div>
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                    {userData.accountNumber}
                                  </p>
                                </div>
                              )}
                              {userData.ifscCode && (
                                <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                  <div className="h-[19.5px] relative shrink-0">
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                      IFSC Code
                                    </p>
                                  </div>
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                    {userData.ifscCode}
                                  </p>
                                </div>
                              )}
                              {userData.branchName && (
                                <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                  <div className="h-[19.5px] relative shrink-0">
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                      Branch Name
                                    </p>
                                  </div>
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                    {userData.branchName}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
          </CollapsibleCard>
        )}

        {/* Card 12: Nominee Details */}
        {(userData.nominees && userData.nominees.length > 0) && (
          <CollapsibleCard title="Nominee Details" isExpanded={expandedCards.nominee} onToggle={() => toggleCard('nominee')} onEdit={onEditNominees || (() => {})}>
            <div className="relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[0.5px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start pb-0 pt-[0.5px] px-[16px] relative w-full">
                  {userData.nominees.map((nominee, index) => (
                    <div key={index} className="content-stretch flex flex-col w-full pb-[8px] pt-[8px] border-b border-[rgba(0,0,0,0.05)] last:border-0">
                      <div className="content-stretch flex items-start justify-between w-full">
                        <p className="font-['Inter:Regular',sans-serif] font-normal text-[#666] text-[13px]">{nominee.relationship}</p>
                        <p className="font-['Inter:Medium',sans-serif] font-medium text-[#263238] text-[13px] text-right">{nominee.fullName}</p>
                      </div>
                      <div className="content-stretch flex items-start justify-between w-full mt-[4px]">
                        <p className="font-['Inter:Regular',sans-serif] font-normal text-[#666] text-[13px]">Share</p>
                        <p className="font-['Inter:Medium',sans-serif] font-medium text-[#263238] text-[13px] text-right">{nominee.percentage}%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CollapsibleCard>
        )}
      </div>
    </motion.div>
  );
}

interface BottomSheetProps {
  userData: {
    age: string;
    gender: string;
    goal: string;
    goalAmount: string;
    policyType: string;
    riskTolerance: string;
    selectedPlan: string;
    riders: string;
    policyDuration: string;
    premiumPaymentTerm: string;
    premiumFrequency: string;
    employeeStatus: string;
    productOption: string;
    productCategory: string;
    deathBenefitMultiple: string;
  };
  onClose: () => void;
  onSave: (data: any) => void;
  onConfirmChanges: (changes: string[]) => void;
}

export function EditBottomSheet({ userData, onClose, onSave, onConfirmChanges }: BottomSheetProps) {
  const [formData, setFormData] = React.useState(userData);

  const handleSave = () => {
    // Track what changed
    const changes: string[] = [];
    
    if (formData.age !== userData.age && formData.age) {
      changes.push(`age to ${formData.age}`);
    }
    if (formData.gender !== userData.gender && formData.gender) {
      changes.push(`gender to ${formData.gender}`);
    }
    if (formData.goal !== userData.goal && formData.goal) {
      changes.push(`goal to ${formData.goal}`);
    }
    if (formData.goalAmount !== userData.goalAmount && formData.goalAmount) {
      changes.push(`goal amount to ${formData.goalAmount}`);
    }
    
    onSave(formData);
    onConfirmChanges(changes);
    onClose();
  };

  const genderOptions = ['Male', 'Female', 'Other'];
  const goalOptions = [
    "Save for Kid's Education",
    'Retirement Planning',
    'Build Wealth',
    'Tax Saving',
    'Protect my Family'
  ];

  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute bg-[rgba(0,0,0,0.4)] h-full left-0 top-0 w-full z-50"
      />

      {/* Bottom Sheet */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="absolute bg-white bottom-0 content-stretch flex flex-col gap-[10px] items-center left-1/2 max-h-[90vh] overflow-y-auto px-0 py-[10px] rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] translate-x-[-50%] w-full z-50"
      >
        {/* Handle */}
        <div className="bg-[#d1d5dc] h-[5px] rounded-[1.67772e+07px] shrink-0 w-[36px]" />

        {/* Header */}
        <div className="h-[37px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col items-center justify-between pb-px pt-0 px-[20px] relative size-full">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-center text-nowrap tracking-[-0.3125px]">
                Edit Onboarding Details
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full">
          <div className="relative shrink-0 w-full">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start pb-0 pt-[24px] px-[20px] relative w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                    {/* Age Field */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[14px]">
                          Age
                        </p>
                      </div>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <input
                            type="text"
                            value={formData.age}
                            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                            className="absolute content-stretch flex h-[19.5px] items-center left-[12px] overflow-clip top-[14px] w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none"
                          />
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Gender Field */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[14px]">
                          Gender
                        </p>
                      </div>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <select
                            value={formData.gender}
                            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                            className="absolute content-stretch flex h-[47px] items-center left-[12px] overflow-clip top-0 w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none appearance-none"
                          >
                            <option value="">Select gender</option>
                            {genderOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                              <path d="M1 1.5L6 6.5L11 1.5" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Goal Field */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[14px]">
                          Goal
                        </p>
                      </div>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <select
                            value={formData.goal}
                            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                            className="absolute content-stretch flex h-[47px] items-center left-[12px] overflow-clip top-0 w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none appearance-none"
                          >
                            <option value="">Select goal</option>
                            {goalOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                              <path d="M1 1.5L6 6.5L11 1.5" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Goal Amount & Tenure Field */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[14px]">
                          Goal Amount & Tenure
                        </p>
                      </div>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <input
                            type="text"
                            value={formData.goalAmount}
                            onChange={(e) => setFormData({ ...formData, goalAmount: e.target.value })}
                            placeholder="e.g., 1 Cr in 20 years"
                            className="absolute content-stretch flex h-[19.5px] items-center left-[12px] overflow-clip top-[14px] w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none placeholder:text-[#999]"
                          />
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="bg-white relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
            <div className="size-full">
              <div className="content-stretch flex flex-col items-start pb-0 pt-[21px] px-[20px] relative w-full">
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                  <button
                    onClick={onClose}
                    className="basis-0 bg-white grow h-[50px] min-h-px min-w-px relative rounded-[12px] shrink-0 border border-[#d1d5dc]"
                  >
                    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic text-[#263238] text-[16px] text-center">
                      Cancel
                    </p>
                  </button>
                  <button
                    onClick={handleSave}
                    className="basis-0 bg-gradient-to-b from-[#c21b17] grow h-[50px] min-h-px min-w-px relative rounded-[12px] shrink-0 to-[#a11612]"
                  >
                    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic text-[16px] text-center text-white">
                      Save Changes
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

// Need React import for useState
import React from 'react';

// Edit Policy Bottom Sheet
interface EditPolicyBottomSheetProps {
  userData: {
    policyType: string;
    riskTolerance: string;
    selectedPlan: string;
    riders: string;
    policyDuration: string;
    premiumPaymentTerm: string;
    premiumFrequency: string;
    employeeStatus: string;
    productOption: string;
    productCategory: string;
    deathBenefitMultiple: string;
  };
  onClose: () => void;
  onSave: (data: any) => void;
  onConfirmChanges: (changes: string[]) => void;
}

export function EditPolicyBottomSheet({ userData, onClose, onSave, onConfirmChanges }: EditPolicyBottomSheetProps) {
  const [formData, setFormData] = React.useState(userData);

  const handleSave = () => {
    // Track what changed
    const changes: string[] = [];
    
    if (formData.policyType !== userData.policyType && formData.policyType) {
      changes.push(`policy type to ${formData.policyType}`);
    }
    if (formData.riskTolerance !== userData.riskTolerance && formData.riskTolerance) {
      changes.push(`risk tolerance to ${formData.riskTolerance}`);
    }
    if (formData.selectedPlan !== userData.selectedPlan && formData.selectedPlan) {
      changes.push(`selected plan to ${formData.selectedPlan}`);
    }
    if (formData.riders !== userData.riders && formData.riders) {
      changes.push(`riders to ${formData.riders}`);
    }
    if (formData.policyDuration !== userData.policyDuration && formData.policyDuration) {
      changes.push(`policy duration to ${formData.policyDuration}`);
    }
    if (formData.premiumPaymentTerm !== userData.premiumPaymentTerm && formData.premiumPaymentTerm) {
      changes.push(`premium payment term to ${formData.premiumPaymentTerm}`);
    }
    if (formData.premiumFrequency !== userData.premiumFrequency && formData.premiumFrequency) {
      changes.push(`premium frequency to ${formData.premiumFrequency}`);
    }
    if (formData.employeeStatus !== userData.employeeStatus && formData.employeeStatus) {
      changes.push(`employee status to ${formData.employeeStatus}`);
    }
    if (formData.productOption !== userData.productOption && formData.productOption) {
      changes.push(`product option to ${formData.productOption}`);
    }
    if (formData.productCategory !== userData.productCategory && formData.productCategory) {
      changes.push(`product category to ${formData.productCategory}`);
    }
    if (formData.deathBenefitMultiple !== userData.deathBenefitMultiple && formData.deathBenefitMultiple) {
      changes.push(`death benefit multiple to ${formData.deathBenefitMultiple}`);
    }
    
    onSave(formData);
    onConfirmChanges(changes);
    onClose();
  };

  const policyTypeOptions = ['Individual', 'HUF', 'MUP', 'Key-Man', 'Partnership', 'Employer-Employee'];
  const riskToleranceOptions = ['Low', 'Medium', 'High'];
  const planOptions = ['Elite Shield Plan', 'Premium Plus Plan', 'Secure Life Plan'];
  const riderOptions = ['Yes', 'No'];
  const policyDurationOptions = ['15 years', '20 years'];
  const premiumPaymentTermOptions = ['15 Years', '20 Years'];
  const premiumFrequencyOptions = ['Yearly', 'Half Yearly', 'Quarterly', 'Monthly'];
  const employeeStatusOptions = ['None', 'Staff'];
  const productOptionOptions = ['Option 1', 'Option 2'];
  const productCategoryOptions = ['Gold', 'Silver'];
  const deathBenefitMultipleOptions = ['5', '7', '10'];

  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute bg-[rgba(0,0,0,0.4)] h-full left-0 top-0 w-full z-50"
      />

      {/* Bottom Sheet - Continued in next part due to length */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="absolute bg-white bottom-0 content-stretch flex flex-col gap-[10px] items-center left-1/2 max-h-[90vh] overflow-y-auto px-0 py-[10px] rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] translate-x-[-50%] w-full z-50"
      >
        {/* Handle */}
        <div className="bg-[#d1d5dc] h-[5px] rounded-[1.67772e+07px] shrink-0 w-[36px]" />

        {/* Header */}
        <div className="h-[37px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col items-center justify-between pb-px pt-0 px-[20px] relative size-full">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-center text-nowrap tracking-[-0.3125px]">
                Edit Policy Details
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full">
          <div className="relative shrink-0 w-full">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start pb-0 pt-[24px] px-[20px] relative w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                    {/* Policy Type Field */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[14px]">
                          Policy Type
                        </p>
                      </div>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <select
                            value={formData.policyType}
                            onChange={(e) => setFormData({ ...formData, policyType: e.target.value })}
                            className="absolute content-stretch flex h-[47px] items-center left-[12px] overflow-clip top-0 w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none appearance-none"
                          >
                            <option value="">Select policy type</option>
                            {policyTypeOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                              <path d="M1 1.5L6 6.5L11 1.5" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Risk Tolerance Field */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[14px]">
                          Risk Tolerance
                        </p>
                      </div>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <select
                            value={formData.riskTolerance}
                            onChange={(e) => setFormData({ ...formData, riskTolerance: e.target.value })}
                            className="absolute content-stretch flex h-[47px] items-center left-[12px] overflow-clip top-0 w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none appearance-none"
                          >
                            <option value="">Select risk tolerance</option>
                            {riskToleranceOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                              <path d="M1 1.5L6 6.5L11 1.5" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Selected Plan Field */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[14px]">
                          Selected Plan
                        </p>
                      </div>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <select
                            value={formData.selectedPlan}
                            onChange={(e) => setFormData({ ...formData, selectedPlan: e.target.value })}
                            className="absolute content-stretch flex h-[47px] items-center left-[12px] overflow-clip top-0 w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none appearance-none"
                          >
                            <option value="">Select plan</option>
                            {planOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                              <path d="M1 1.5L6 6.5L11 1.5" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Riders Field */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[14px]">
                          Riders
                        </p>
                      </div>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <select
                            value={formData.riders}
                            onChange={(e) => setFormData({ ...formData, riders: e.target.value })}
                            className="absolute content-stretch flex h-[47px] items-center left-[12px] overflow-clip top-0 w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none appearance-none"
                          >
                            <option value="">Select riders</option>
                            {riderOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                              <path d="M1 1.5L6 6.5L11 1.5" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Policy Duration Field */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[14px]">
                          Policy Duration
                        </p>
                      </div>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <select
                            value={formData.policyDuration}
                            onChange={(e) => setFormData({ ...formData, policyDuration: e.target.value })}
                            className="absolute content-stretch flex h-[47px] items-center left-[12px] overflow-clip top-0 w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none appearance-none"
                          >
                            <option value="">Select policy duration</option>
                            {policyDurationOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                              <path d="M1 1.5L6 6.5L11 1.5" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Premium Payment Term Field */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[14px]">
                          Premium Payment Term
                        </p>
                      </div>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <select
                            value={formData.premiumPaymentTerm}
                            onChange={(e) => setFormData({ ...formData, premiumPaymentTerm: e.target.value })}
                            className="absolute content-stretch flex h-[47px] items-center left-[12px] overflow-clip top-0 w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none appearance-none"
                          >
                            <option value="">Select premium payment term</option>
                            {premiumPaymentTermOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                              <path d="M1 1.5L6 6.5L11 1.5" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Premium Frequency Field */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[14px]">
                          Premium Frequency
                        </p>
                      </div>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <select
                            value={formData.premiumFrequency}
                            onChange={(e) => setFormData({ ...formData, premiumFrequency: e.target.value })}
                            className="absolute content-stretch flex h-[47px] items-center left-[12px] overflow-clip top-0 w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none appearance-none"
                          >
                            <option value="">Select premium frequency</option>
                            {premiumFrequencyOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                              <path d="M1 1.5L6 6.5L11 1.5" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Employee Status Field */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[14px]">
                          Employee Status
                        </p>
                      </div>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <select
                            value={formData.employeeStatus}
                            onChange={(e) => setFormData({ ...formData, employeeStatus: e.target.value })}
                            className="absolute content-stretch flex h-[47px] items-center left-[12px] overflow-clip top-0 w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none appearance-none"
                          >
                            <option value="">Select employee status</option>
                            {employeeStatusOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                              <path d="M1 1.5L6 6.5L11 1.5" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Product Option Field */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[14px]">
                          Product Option
                        </p>
                      </div>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <select
                            value={formData.productOption}
                            onChange={(e) => setFormData({ ...formData, productOption: e.target.value })}
                            className="absolute content-stretch flex h-[47px] items-center left-[12px] overflow-clip top-0 w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none appearance-none"
                          >
                            <option value="">Select product option</option>
                            {productOptionOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                              <path d="M1 1.5L6 6.5L11 1.5" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Product Category Field */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[14px]">
                          Product Category
                        </p>
                      </div>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <select
                            value={formData.productCategory}
                            onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                            className="absolute content-stretch flex h-[47px] items-center left-[12px] overflow-clip top-0 w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none appearance-none"
                          >
                            <option value="">Select product category</option>
                            {productCategoryOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                              <path d="M1 1.5L6 6.5L11 1.5" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Death Benefit Multiple Field */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[14px]">
                          Death Benefit Multiple
                        </p>
                      </div>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <select
                            value={formData.deathBenefitMultiple}
                            onChange={(e) => setFormData({ ...formData, deathBenefitMultiple: e.target.value })}
                            className="absolute content-stretch flex h-[47px] items-center left-[12px] overflow-clip top-0 w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none appearance-none"
                          >
                            <option value="">Select death benefit multiple</option>
                            {deathBenefitMultipleOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                              <path d="M1 1.5L6 6.5L11 1.5" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="bg-white relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
            <div className="size-full">
              <div className="content-stretch flex flex-col items-start pb-0 pt-[21px] px-[20px] relative w-full">
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                  <button
                    onClick={onClose}
                    className="basis-0 bg-white grow h-[50px] min-h-px min-w-px relative rounded-[12px] shrink-0 border border-[#d1d5dc]"
                  >
                    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic text-[#263238] text-[16px] text-center">
                      Cancel
                    </p>
                  </button>
                  <button
                    onClick={handleSave}
                    className="basis-0 bg-gradient-to-b from-[#c21b17] grow h-[50px] min-h-px min-w-px relative rounded-[12px] shrink-0 to-[#a11612]"
                  >
                    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic text-[16px] text-center text-white">
                      Save Changes
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

// ─── Edit Health Conditions Bottom Sheet ────────────────────────────────────

export function EditHealthConditionsBottomSheet({
  healthConditions,
  onClose,
  onSave,
}: {
  healthConditions: string[];
  onClose: () => void;
  onSave: (conditions: string[]) => void;
}) {
  const [local, setLocal] = useState<string[]>(healthConditions);

  const conditions = [
    'Respiratory',
    'Digestive System',
    'Bone Disorder',
    'Heart Diseases',
    'Diabetes',
    'Thyroid/Hormonal Disorder',
    'Cancer/Tumor',
    "I don't have any disorders",
  ];

  const toggle = (c: string) => {
    if (c === "I don't have any disorders") {
      setLocal([c]);
    } else {
      setLocal(prev => {
        const without = prev.filter(x => x !== "I don't have any disorders");
        return without.includes(c) ? without.filter(x => x !== c) : [...without, c];
      });
    }
  };

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute bg-[rgba(0,0,0,0.4)] h-full left-0 top-0 w-full z-50" />
      <motion.div
        initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="absolute bg-white bottom-0 flex flex-col left-0 max-h-[85vh] overflow-y-auto pb-8 rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full z-50"
      >
        <div className="flex items-center justify-between px-[20px] pt-[16px] pb-[12px] border-b border-[#e5e7eb]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#101828]">Edit Health Conditions</p>
          <button onClick={onClose} className="text-[#666] text-[20px] leading-none">✕</button>
        </div>
        <div className="flex flex-col gap-3 px-5 pt-4">
          {conditions.map(c => {
            const isSelected = local.includes(c);
            const isNone = local.includes("I don't have any disorders");
            const isDisabled = !isSelected && ((isNone && c !== "I don't have any disorders") || (!isNone && c === "I don't have any disorders" && local.length > 0));
            return (
              <button
                key={c}
                onClick={() => !isDisabled && toggle(c)}
                disabled={isDisabled}
                className={`flex items-center gap-3 px-4 py-3 rounded-[14px] text-left transition-all ${isSelected ? 'bg-[#c21b17] text-white shadow-md' : isDisabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-[#c21b17] shadow-sm'} ${c === "I don't have any disorders" && !isSelected && !isDisabled ? 'border-2 border-green-500' : ''}`}
              >
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${isSelected ? 'border-white bg-white' : 'border-[#c21b17]'}`}>
                  {isSelected && <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1" stroke="#c21b17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
                <span className="font-['Inter:Medium',sans-serif] font-medium text-[15px]">{c}</span>
              </button>
            );
          })}
        </div>
        <div className="flex gap-3 px-5 pt-5">
          <button onClick={onClose} className="flex-1 h-[50px] rounded-[12px] border border-[#d1d5dc] font-['Inter:Bold',sans-serif] font-bold text-[16px] text-[#263238]">Cancel</button>
          <button onClick={() => { onSave(local); onClose(); }} className="flex-1 h-[50px] rounded-[12px] bg-gradient-to-b from-[#c21b17] to-[#a11612] font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white">Save Changes</button>
        </div>
      </motion.div>
    </>
  );
}

// ─── Edit Substances Bottom Sheet ───────────────────────────────────────────

export function EditSubstancesBottomSheet({
  substanceConsumption,
  onClose,
  onSave,
}: {
  substanceConsumption: string[];
  onClose: () => void;
  onSave: (substances: string[]) => void;
}) {
  const [local, setLocal] = useState<string[]>(substanceConsumption);

  const substances = [
    'Tobacco',
    'Alcohol',
    'Narcotics',
    "I don't consume any substances",
  ];

  const toggle = (s: string) => {
    if (s === "I don't consume any substances") {
      setLocal([s]);
    } else {
      setLocal(prev => {
        const without = prev.filter(x => x !== "I don't consume any substances");
        return without.includes(s) ? without.filter(x => x !== s) : [...without, s];
      });
    }
  };

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute bg-[rgba(0,0,0,0.4)] h-full left-0 top-0 w-full z-50" />
      <motion.div
        initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="absolute bg-white bottom-0 flex flex-col left-0 max-h-[85vh] overflow-y-auto pb-8 rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full z-50"
      >
        <div className="flex items-center justify-between px-[20px] pt-[16px] pb-[12px] border-b border-[#e5e7eb]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#101828]">Edit Substance Consumption</p>
          <button onClick={onClose} className="text-[#666] text-[20px] leading-none">✕</button>
        </div>
        <div className="flex flex-col gap-3 px-5 pt-4">
          {substances.map(s => {
            const isSelected = local.includes(s);
            const isNone = local.includes("I don't consume any substances");
            const isDisabled = !isSelected && ((isNone && s !== "I don't consume any substances") || (!isNone && s === "I don't consume any substances" && local.length > 0));
            return (
              <button
                key={s}
                onClick={() => !isDisabled && toggle(s)}
                disabled={isDisabled}
                className={`flex items-center gap-3 px-4 py-3 rounded-[14px] text-left transition-all ${isSelected ? 'bg-[#c21b17] text-white shadow-md' : isDisabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-[#c21b17] shadow-sm'} ${s === "I don't consume any substances" && !isSelected && !isDisabled ? 'border-2 border-green-500' : ''}`}
              >
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${isSelected ? 'border-white bg-white' : 'border-[#c21b17]'}`}>
                  {isSelected && <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1" stroke="#c21b17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
                <span className="font-['Inter:Medium',sans-serif] font-medium text-[15px]">{s}</span>
              </button>
            );
          })}
        </div>
        <div className="flex gap-3 px-5 pt-5">
          <button onClick={onClose} className="flex-1 h-[50px] rounded-[12px] border border-[#d1d5dc] font-['Inter:Bold',sans-serif] font-bold text-[16px] text-[#263238]">Cancel</button>
          <button onClick={() => { onSave(local); onClose(); }} className="flex-1 h-[50px] rounded-[12px] bg-gradient-to-b from-[#c21b17] to-[#a11612] font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white">Save Changes</button>
        </div>
      </motion.div>
    </>
  );
}

// ─── Edit Assets Bottom Sheet ────────────────────────────────────────────────

export function EditAssetsBottomSheet({
  assets,
  onClose,
  onSave,
}: {
  assets: string[];
  onClose: () => void;
  onSave: (assets: string[]) => void;
}) {
  const [local, setLocal] = useState<string[]>(assets);

  const assetOptions = [
    '2 wheeler',
    'Own house',
    'Small Car/Sedan/SUV',
    'Land',
    'Bank Deposits',
    'Home Loan',
    'Car/personal loan',
    'Pension Plan',
    'Life Insurance',
    'Health Insurance',
  ];

  const toggle = (a: string) => {
    setLocal(prev => prev.includes(a) ? prev.filter(x => x !== a) : [...prev, a]);
  };

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute bg-[rgba(0,0,0,0.4)] h-full left-0 top-0 w-full z-50" />
      <motion.div
        initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="absolute bg-white bottom-0 flex flex-col left-0 max-h-[85vh] overflow-y-auto pb-8 rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full z-50"
      >
        <div className="flex items-center justify-between px-[20px] pt-[16px] pb-[12px] border-b border-[#e5e7eb]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#101828]">Edit Assets</p>
          <button onClick={onClose} className="text-[#666] text-[20px] leading-none">✕</button>
        </div>
        <div className="flex flex-col gap-3 px-5 pt-4">
          {assetOptions.map(a => {
            const isSelected = local.includes(a);
            return (
              <button
                key={a}
                onClick={() => toggle(a)}
                className={`flex items-center gap-3 px-4 py-3 rounded-[14px] text-left transition-all ${isSelected ? 'bg-[#c21b17] text-white shadow-md' : 'bg-white text-[#c21b17] shadow-sm'}`}
              >
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${isSelected ? 'border-white bg-white' : 'border-[#c21b17]'}`}>
                  {isSelected && <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1" stroke="#c21b17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
                <span className="font-['Inter:Medium',sans-serif] font-medium text-[15px]">{a}</span>
              </button>
            );
          })}
        </div>
        <div className="flex gap-3 px-5 pt-5">
          <button onClick={onClose} className="flex-1 h-[50px] rounded-[12px] border border-[#d1d5dc] font-['Inter:Bold',sans-serif] font-bold text-[16px] text-[#263238]">Cancel</button>
          <button onClick={() => { onSave(local); onClose(); }} className="flex-1 h-[50px] rounded-[12px] bg-gradient-to-b from-[#c21b17] to-[#a11612] font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white">Save Changes</button>
        </div>
      </motion.div>
    </>
  );
}