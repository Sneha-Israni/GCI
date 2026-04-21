import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, FileText, Trash2, Camera } from 'lucide-react';

import { LiveAudioVisualizer } from 'react-audio-visualize';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { useTranslation } from './hooks/useTranslation';
import svgPaths from '../imports/svg-5yg8uovt09';
import svgPathsNew from '../imports/svg-64a40gqobi';
import svgPathsEdit from '../imports/svg-srk443xpht';
import svgPathsDetails from '../imports/svg-gb7p4kg93f';
import svgPathsFatherName from '../imports/svg-chvwy7yb4s';
import svgPathsFatherNameNew from '../imports/svg-qqd4bel3as';
import imgMascot from 'figma:asset/9b8882faf2edb23d4f87beff823e8af6f285c81a.png';
import imgIcon from 'figma:asset/4561056eb3a95498ccc61589b35393e53cbe0b36.png';
import imgIcon1 from 'figma:asset/634d9a9aa5be837a7af4f48d24734b9635ccf11b.png';
import imgIcon2 from 'figma:asset/654cafdaff37628e5a90a6b6c655b3cd203070df.png';
import imgIcon3 from 'figma:asset/af2df1b399a73cc3cbf605b2095ff2561897a1d8.png';
import imgIcon4 from 'figma:asset/7f9d264012cc83a80f7cb5acd5b31d45d8965a5a.png';
import Mic from '../imports/Mic';
import FathersName from '../imports/FathersName';
import ProfessionalDetailsCard from '../imports/Container-684-514';
import { EditBanner, DetailsPage, EditBottomSheet, EditPolicyBottomSheet } from './components/DetailsComponents';
import { EditDocumentsBottomSheet } from './components/DocumentsComponents';
import { EditFamilyDetailsBottomSheet } from './components/FamilyDetailsComponents';
import { PlansList } from './components/PlanCards';
import { PaymentMethodSelector } from './components/PaymentMethodSelector';
import { DeclarationScreen } from './components/DeclarationScreen';
import { OTPVerification } from './components/OTPVerification';
import { SCRScreen } from './components/SCRScreen';
import { ReviewPersonalDetailsCard, EditPersonalDetailsBottomSheet, ReviewBankDetailsCard, EditBankDetailsBottomSheet } from './components/PersonalDetailsComponents';
import { ReviewProfessionalDetailsCard, EditProfessionalDetailsBottomSheet } from './components/ProfessionalDetailsComponents';
import ReviewProfessionalDetailsCardImport from '../imports/ReviewProfessionalDetailsCard';
import { ReviewHeightWeightCard, EditHeightWeightBottomSheet } from './components/HeightWeightComponents';
import { SubstanceConsumptionSelector, AssetDeclarationSelector } from './components/SubstanceAssetSelectors';
import { PremiumCalculatorSelector } from './components/PremiumCalculatorSelector';
import { SavedInfoCards } from './components/SavedInfoCards';
import { LoginScreen } from './components/LoginScreen';
import { IntroScreen } from './components/IntroScreen';
import { LanguageSelectionScreen } from './components/LanguageSelectionScreen';
import { ProgressStepper } from './components/ProgressStepper';
import { VoiceRecordingUI } from './components/VoiceRecordingUI';
import ProfessionalDetailsCardImport from '../imports/Container-682-328';

// Types
interface Message {
  id: string;
  content: string;
  sender: 'bot' | 'user';
  timestamp: Date;
  isProfessionalDetailsCard?: boolean;
  isBusinessCardUpload?: boolean; // Flag to differentiate business card upload from manual typing
  professionalData?: {
    designation?: string;
    employerName?: string;
    occupation?: string;
    industry: string;
    jobDuties: string;
    hazardousEnvironment: string;
  };
}

// Status Bar Component
function StatusBarIPhone() {
  return (
    <div className="absolute content-stretch flex flex-col h-[39px] items-start left-0 pb-0 pt-[21px] px-0 top-0 w-full z-50">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] py-0 relative w-full">
              <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                9:41
              </p>
            </div>
          </div>
        </div>
        <div className="h-[10px] shrink-0 w-[124px]" />
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] py-0 relative w-full">
              <div className="h-[12.226px] relative shrink-0 w-[19.2px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13">
                  <path clipRule="evenodd" d={svgPathsNew.p1e09e400} fill="black" fillRule="evenodd" />
                </svg>
              </div>
              <div className="h-[12.328px] relative shrink-0 w-[17.142px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
                  <path clipRule="evenodd" d={svgPathsNew.p18b35300} fill="black" fillRule="evenodd" />
                </svg>
              </div>
              <div className="h-[13px] relative shrink-0 w-[27.328px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 13">
                  <rect height="12" opacity="0.35" rx="3.8" stroke="black" width="24" x="0.5" y="0.5" />
                  <path d={svgPathsNew.p3bbd9700} fill="black" opacity="0.4" />
                  <rect fill="black" height="9" rx="2.5" width="21" x="2" y="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Home Indicator Component
function HomeIndicator() {
  return (
    <div className="absolute bottom-0 h-[27px] left-[5px] right-[5px]">
      <div className="absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 translate-x-[-50%] w-[144px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-black h-[5px] rounded-[100px] w-[144px]" />
        </div>
      </div>
    </div>
  );
}

// Bot Message Bubble
function BotMessage({ content }: { content: string }) {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex items-start gap-2 w-full px-4"
    >
      <div className="relative shrink-0 size-[48px]">
        <img alt="Mascot" className="size-full object-cover rounded-full" src={imgMascot} />
      </div>
      <div className="backdrop-blur-[0px] backdrop-filter bg-white relative rounded-[16px] max-w-[280px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.08)]">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit]">
          <div className="content-stretch flex items-center px-[12px] py-[16px] relative">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#191818] text-[16px]">
              {t(content)}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// User Message Bubble
function UserMessage({ content }: { content: string }) {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex items-start gap-2 w-full px-4 justify-end"
    >
      <div className="bg-[#c21b17] text-white relative rounded-[16px] max-w-[280px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.08)]">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit]">
          <div className="content-stretch flex items-center px-[12px] py-[16px] relative">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px]">
              {t(content)}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Professional Details Card Component (using Figma design)
interface ProfessionalDetailsCardPropsWrapper {
  industry: string;
  jobDuties: string;
  hazardousEnvironment: string;
  onEdit: () => void;
  onConfirm: () => void;
}

function ProfessionalDetailsCardWrapper({ industry, jobDuties, hazardousEnvironment, onEdit, onConfirm }: ProfessionalDetailsCardPropsWrapper) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="px-5 w-full"
    >
      <ProfessionalDetailsCard 
        industry={industry}
        jobDuties={jobDuties}
        hazardousEnvironment={hazardousEnvironment}
        onEdit={onEdit}
        onConfirm={onConfirm}
      />
    </motion.div>
  );
}

// Father's Name Info Card Component
function FatherNameInfoCard({ fatherName }: { fatherName: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="px-5 w-full"
    >
      <div className="bg-gradient-to-b border-[#ffe5b4] border-[0.8px] border-solid from-[#fff9e6] relative rounded-[12px] p-3 to-white h-[50px]">
        <div className="absolute left-[12px] size-[16px] top-[12px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g clipPath="url(#clip0_306_267_father)">
              <path d={svgPathsFatherNameNew.p319d7580} stroke="#FFA726" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M13.3333 2V4.66667" stroke="#FFA726" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M14.6667 3.33333H12" stroke="#FFA726" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M2.66667 11.3333V12.6667" stroke="#FFA726" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M3.33333 12H2" stroke="#FFA726" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </g>
            <defs>
              <clipPath id="clip0_306_267_father">
                <rect fill="white" height="16" width="16" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="absolute left-[36px] top-[10px] right-[12px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#666] text-[12px]">
            {`We've fetched your Father's name: ${fatherName} from your PAN Card.`}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Thinking Indicator Component (ChatGPT-style)
const ThinkingIndicator = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex items-start gap-2 w-full px-4"
    >
      <div className="relative shrink-0 size-[48px]">
        <img alt="Mascot" className="size-full object-cover rounded-full" src={imgMascot} />
      </div>
      <div className="backdrop-blur-[0px] backdrop-filter bg-white relative rounded-[16px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.08)]">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit]">
          <div className="content-stretch flex items-center gap-1 px-[16px] py-[20px] relative">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-[8px] h-[8px] rounded-full bg-[#c21b17]"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ThinkingIndicator.displayName = 'ThinkingIndicator';

// Example Response Card
function ExampleResponse({ text }: { text?: string }) {
  const { t } = useTranslation();
  
  const defaultExamples = (
    <>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic text-[#0a70ff] text-[12px]">
        {t("I'm 29 and female.")}
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic text-[#0a70ff] text-[12px]">
        {t("30, male.")}
      </p>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="px-5 w-full"
    >
      <div className="bg-[#f7faff] content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] w-full shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
        <div aria-hidden="true" className="absolute border-[#0a70ff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="content-stretch flex flex-col gap-[10px] items-start relative w-full">
          <div className="content-stretch flex gap-[8px] h-[20px] items-start relative shrink-0 w-full">
            <div className="relative shrink-0 size-[18px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <g clipPath="url(#clip0_1_99)">
                  <path d={svgPathsNew.p2e00b00} stroke="#0A70FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M15 2.25V5.25" stroke="#0A70FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M16.5 3.75H13.5" stroke="#0A70FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M3 12.75V14.25" stroke="#0A70FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M3.75 13.5H2.25" stroke="#0A70FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </g>
                <defs>
                  <clipPath id="clip0_1_99">
                    <rect fill="white" height="18" width="18" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic text-[#0a70ff] text-[13px]">
              {t('Example Response:')}
            </p>
          </div>
          {text ? (
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic text-[#0a70ff] text-[12px]">
              {t(text)}
            </p>
          ) : (
            defaultExamples
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Suggestion Buttons
function SuggestionButtons({ onSelect }: { onSelect: (option: string) => void }) {
  const suggestions = [
    { icon: imgIcon, label: "Save for Kid's Education" },
    { icon: imgIcon1, label: 'Retirement Planning' },
    { icon: imgIcon2, label: 'Build Wealth' },
    { icon: imgIcon3, label: 'Tax Saving' },
    { icon: imgIcon4, label: 'Protect my Family' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="px-5 w-full flex flex-col gap-[10px]"
    >
      {suggestions.map((suggestion, index) => (
        <motion.button
          key={suggestion.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(suggestion.label)}
          className="bg-[#fff7f7] content-stretch flex gap-[10px] items-center justify-start p-[10px] relative rounded-[14px] w-full"
        >
          <div aria-hidden="true" className="absolute border border-[#c21b17] border-solid inset-0 pointer-events-none rounded-[14px]" />
          <div className="relative shrink-0 size-[24px]">
            <img alt="" className="size-full object-cover" src={suggestion.icon} />
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#c21b17] text-[16px] text-left">
            {suggestion.label}
          </p>
        </motion.button>
      ))}
    </motion.div>
  );
}

// Policy Type Selection Buttons
function PolicyTypeButtons({ onSelect }: { onSelect: (option: string) => void }) {
  const policyTypes = [
    'Individual',
    'HUF',
    'MUP',
    'Key-Man',
    'Partnership',
    'Employer-Employee',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="px-5 w-full flex flex-col gap-[10px]"
    >
      {policyTypes.map((type, index) => (
        <motion.button
          key={type}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(type)}
          className="bg-[#fff7f7] content-stretch flex gap-[10px] items-center justify-start p-[12px] relative rounded-[14px] w-full"
        >
          <div aria-hidden="true" className="absolute border border-[#c21b17] border-solid inset-0 pointer-events-none rounded-[14px]" />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#c21b17] text-[16px] text-left">
            {type}
          </p>
        </motion.button>
      ))}
    </motion.div>
  );
}

// Risk Tolerance Selection Buttons
function RiskToleranceButtons({ onSelect }: { onSelect: (option: string) => void }) {
  const riskTolerances = [
    'Low',
    'Medium',
    'High',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="px-5 w-full flex flex-col gap-[10px]"
    >
      {riskTolerances.map((type, index) => (
        <motion.button
          key={type}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(type)}
          className="bg-[#fff7f7] content-stretch flex gap-[10px] items-center justify-start p-[12px] relative rounded-[14px] w-full"
        >
          <div aria-hidden="true" className="absolute border border-[#c21b17] border-solid inset-0 pointer-events-none rounded-[14px]" />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#c21b17] text-[16px] text-left">
            {type}
          </p>
        </motion.button>
      ))}
    </motion.div>
  );
}

// Yes/No Selection Buttons
function YesNoButtons({ onSelect }: { onSelect: (option: string) => void }) {
  const options = ['Yes', 'No'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="px-5 w-full flex flex-col gap-[10px]"
    >
      {options.map((option, index) => (
        <motion.button
          key={option}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(option)}
          className="bg-[#fff7f7] content-stretch flex gap-[10px] items-center justify-start p-[12px] relative rounded-[14px] w-full"
        >
          <div aria-hidden="true" className="absolute border border-[#c21b17] border-solid inset-0 pointer-events-none rounded-[14px]" />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#c21b17] text-[16px] text-left">
            {option}
          </p>
        </motion.button>
      ))}
    </motion.div>
  );
}

// Alive/Deceased Selection Buttons
function VitalStatusButtons({ onSelect }: { onSelect: (option: string) => void }) {
  const options = ['Alive', 'Deceased'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="px-5 w-full flex flex-col gap-[10px]"
    >
      {options.map((option, index) => (
        <motion.button
          key={option}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(option)}
          className="bg-[#fff7f7] content-stretch flex gap-[10px] items-center justify-start p-[12px] relative rounded-[14px] w-full"
        >
          <div aria-hidden="true" className="absolute border border-[#c21b17] border-solid inset-0 pointer-events-none rounded-[14px]" />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#c21b17] text-[16px] text-left">
            {option}
          </p>
        </motion.button>
      ))}
    </motion.div>
  );
}

// Nominee Selection Buttons (Father, Mother, Other)
function NomineeSelectionButtons({ onSelect, userData }: { onSelect: (option: string) => void, userData: any }) {
  // Filter out deceased parents from options
  const allOptions = ['Father', 'Mother', 'Other'];
  const options = allOptions.filter(option => {
    if (option === 'Father' && userData.fatherVitalStatus === 'Deceased') {
      return false;
    }
    if (option === 'Mother' && userData.motherVitalStatus === 'Deceased') {
      return false;
    }
    return true;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="px-5 w-full flex flex-col gap-[10px]"
    >
      {options.map((option, index) => (
        <motion.button
          key={option}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(option)}
          className="bg-[#fff7f7] content-stretch flex gap-[10px] items-center justify-start p-[12px] relative rounded-[14px] w-full"
        >
          <div aria-hidden="true" className="absolute border border-[#c21b17] border-solid inset-0 pointer-events-none rounded-[14px]" />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#c21b17] text-[16px] text-left">
            {option}
          </p>
        </motion.button>
      ))}
    </motion.div>
  );
}

// Multi-Select Nominee Buttons (Father, Mother, Other, or combination)
function MultiSelectNomineeButtons({ onConfirm, userData }: { onConfirm: (selected: string[]) => void, userData: any }) {
  const { t } = useTranslation();
  const [selectedNominees, setSelectedNominees] = React.useState<string[]>([]);
  
  // Filter out deceased parents from options, always include "Other"
  const allOptions = ['Father', 'Mother', 'Other'];
  const options = allOptions.filter(option => {
    if (option === 'Father' && userData.fatherVitalStatus === 'Deceased') {
      return false;
    }
    if (option === 'Mother' && userData.motherVitalStatus === 'Deceased') {
      return false;
    }
    return true;
  });

  const toggleNominee = (option: string) => {
    setSelectedNominees(prev => {
      if (prev.includes(option)) {
        return prev.filter(item => item !== option);
      } else {
        return [...prev, option];
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="px-5 w-full flex flex-col gap-[10px]"
    >
      {options.map((option, index) => {
        const isSelected = selectedNominees.includes(option);
        return (
          <motion.button
            key={option}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => toggleNominee(option)}
            className={`content-stretch flex gap-[10px] items-center justify-start p-[12px] relative rounded-[14px] w-full transition-colors ${
              isSelected ? 'bg-[#c21b17]' : 'bg-[#fff7f7]'
            }`}
          >
            <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[14px] ${
              isSelected ? 'border-[#c21b17]' : 'border-[#c21b17]'
            }`} />
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
              isSelected ? 'bg-white border-white' : 'bg-white border-[#c21b17]'
            }`}>
              {isSelected && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7L5.5 10.5L12 4" stroke="#c21b17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[16px] text-left ${
              isSelected ? 'text-white' : 'text-[#c21b17]'
            }`}>
              {t(option)}
            </p>
          </motion.button>
        );
      })}
      
      {selectedNominees.length > 0 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onConfirm(selectedNominees)}
          className="bg-[#c21b17] content-stretch flex gap-[10px] items-center justify-center p-[14px] relative rounded-[14px] w-full mt-2"
        >
          <p className="font-['Inter:SemiBold',sans-serif] font-semibold leading-[normal] not-italic text-white text-[16px] text-center">
            {t(`Continue with ${selectedNominees.length} nominee${selectedNominees.length > 1 ? 's' : ''}`)}
          </p>
        </motion.button>
      )}
    </motion.div>
  );
}

// Nominee Share Editor Component (for multiple nominees)
function NomineeShareEditor({ 
  nominees, 
  onConfirm 
}: { 
  nominees: string[], 
  onConfirm: (shares: Record<string, number>) => void 
}) {
  const [shares, setShares] = React.useState<Record<string, number>>(() => {
    // Auto-divide equally
    const equalShare = Math.floor(100 / nominees.length);
    const remainder = 100 - (equalShare * nominees.length);
    
    const initialShares: Record<string, number> = {};
    nominees.forEach((nominee, index) => {
      initialShares[nominee] = equalShare + (index === nominees.length - 1 ? remainder : 0);
    });
    return initialShares;
  });

  const handleShareChange = (nominee: string, value: string) => {
    const numValue = parseInt(value) || 0;
    if (numValue >= 0 && numValue <= 100) {
      setShares(prev => {
        const newShares = { ...prev };
        newShares[nominee] = numValue;

        // Calculate remaining percentage to distribute
        const remaining = 100 - numValue;

        // Get other nominees (excluding the one being edited)
        const otherNominees = nominees.filter(n => n !== nominee);

        if (otherNominees.length > 0) {
          // Distribute remaining percentage equally among other nominees
          const equalShare = Math.floor(remaining / otherNominees.length);
          const remainder = remaining - (equalShare * otherNominees.length);

          otherNominees.forEach((n, index) => {
            // Give remainder to the last nominee to ensure total is exactly 100
            newShares[n] = equalShare + (index === otherNominees.length - 1 ? remainder : 0);
          });
        }

        return newShares;
      });
    }
  };

  const totalPercentage = Object.values(shares).reduce((sum, val) => sum + val, 0);
  const isValid = totalPercentage === 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="px-5 w-full"
    >
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start pb-[0.8px] pt-[16.8px] px-[16.8px] relative rounded-[16px] border-[0.8px] border-[rgba(194,27,23,0.2)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]">
        {/* Title */}
        <div className="h-[21px] relative shrink-0 w-full">
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#666] text-[14px] top-[0.4px]">
            Edit Share Percentages
          </p>
        </div>

        {/* Nominee List */}
        <div className="content-stretch flex flex-col gap-[12px] relative shrink-0 w-full">
          {nominees.map((nominee, index) => (
            <div key={nominee} className="h-[38.6px] relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                {/* Nominee Name */}
                <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-black top-[-0.4px]">
                      {nominee}
                    </p>
                  </div>
                </div>

                {/* Input and % */}
                <div className="h-[38.6px] relative shrink-0 w-[83.6px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                    {/* Number Input */}
                    <div className="h-[38.6px] relative rounded-[10px] shrink-0 w-[64px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={shares[nominee]}
                          onChange={(e) => handleShareChange(nominee, e.target.value)}
                          className="w-full font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic text-[#0a0a0a] text-[14px] text-center bg-transparent border-none outline-none"
                        />
                      </div>
                      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(194,27,23,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                    </div>

                    {/* % Symbol */}
                    <div className="h-[21px] relative shrink-0 w-[11.6px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#666] text-[14px] top-[-0.4px]">
                          %
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Section */}
        <div className="content-stretch flex items-center justify-between pt-[8px] relative shrink-0 w-full border-t-[0.8px] border-[rgba(194,27,23,0.2)]">
          <p className="font-['Arial:Bold',sans-serif] leading-[21px] not-italic text-[14px] text-black">
            Total
          </p>
          <p className={`font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic text-[16px] ${
            isValid ? 'text-[#016828]' : 'text-red-600'
          }`}>
            {totalPercentage}%
          </p>
        </div>

        {/* Error Message */}
        {!isValid && (
          <p className="text-red-600 text-[12px] font-['Inter:Regular',sans-serif]">
            Total must equal 100%
          </p>
        )}

        {/* Confirm Button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => onConfirm(shares)}
          disabled={!isValid}
          className={`h-[45px] flex items-center justify-center rounded-[12px] shrink-0 w-full transition-all mb-[12px] ${
            isValid 
              ? 'bg-[#c21b17]' 
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          <p className="font-['Arial:Bold',sans-serif] leading-[21px] not-italic text-[14px] text-white">
            Confirm Shares
          </p>
        </motion.button>
      </div>
    </motion.div>
  );
}

// Policy Duration Selection Buttons
function PolicyDurationButtons({ onSelect }: { onSelect: (duration: string) => void }) {
  const durations = ['15 years', '20 years'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="px-5 w-full flex flex-col gap-[10px]"
    >
      {durations.map((duration, index) => (
        <motion.button
          key={duration}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(duration)}
          className="bg-[#fff7f7] content-stretch flex gap-[10px] items-center justify-start p-[12px] relative rounded-[14px] w-full"
        >
          <div aria-hidden="true" className="absolute border border-[#c21b17] border-solid inset-0 pointer-events-none rounded-[14px]" />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#c21b17] text-[16px] text-left">
            {duration}
          </p>
        </motion.button>
      ))}
    </motion.div>
  );
}

// Premium Payment Term Selection Buttons
function PremiumPaymentButtons({ onSelect }: { onSelect: (term: string) => void }) {
  const terms = ['15 Years', '20 Years'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="px-5 w-full flex flex-col gap-[10px]"
    >
      {terms.map((term, index) => (
        <motion.button
          key={term}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(term)}
          className="bg-[#fff7f7] content-stretch flex gap-[10px] items-center justify-start p-[12px] relative rounded-[14px] w-full"
        >
          <div aria-hidden="true" className="absolute border border-[#c21b17] border-solid inset-0 pointer-events-none rounded-[14px]" />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#c21b17] text-[16px] text-left">
            {term}
          </p>
        </motion.button>
      ))}
    </motion.div>
  );
}

// Premium Frequency Selection Buttons
function PremiumFrequencyButtons({ onSelect }: { onSelect: (frequency: string) => void }) {
  const frequencies = ['Yearly', 'Half Yearly', 'Quarterly', 'Monthly'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="px-5 w-full flex flex-col gap-[10px]"
    >
      {frequencies.map((frequency, index) => (
        <motion.button
          key={frequency}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(frequency)}
          className="bg-[#fff7f7] content-stretch flex gap-[10px] items-center justify-start p-[12px] relative rounded-[14px] w-full"
        >
          <div aria-hidden="true" className="absolute border border-[#c21b17] border-solid inset-0 pointer-events-none rounded-[14px]" />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#c21b17] text-[16px] text-left">
            {frequency}
          </p>
        </motion.button>
      ))}
    </motion.div>
  );
}

// Professional Details Continue Button
function ProfessionalDetailsContinueButton({ onClick }: { onClick: () => void }) {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="px-5 w-full"
    >
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className="w-full bg-[#c21b17] text-white py-4 rounded-[14px] font-semibold text-[16px] shadow-lg hover:bg-[#a01612] transition-colors"
      >
        {t('Continue')}
      </motion.button>
    </motion.div>
  );
}

// Employee Status Selection Buttons
function EmployeeStatusButtons({ onSelect }: { onSelect: (status: string) => void }) {
  const statuses = ['None', 'Staff'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="px-5 w-full flex flex-col gap-[10px]"
    >
      {statuses.map((status, index) => (
        <motion.button
          key={status}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(status)}
          className="bg-[#fff7f7] content-stretch flex gap-[10px] items-center justify-start p-[12px] relative rounded-[14px] w-full"
        >
          <div aria-hidden="true" className="absolute border border-[#c21b17] border-solid inset-0 pointer-events-none rounded-[14px]" />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#c21b17] text-[16px] text-left">
            {status}
          </p>
        </motion.button>
      ))}
    </motion.div>
  );
}

// Product Option Selection Buttons
function ProductOptionButtons({ onSelect }: { onSelect: (option: string) => void }) {
  const options = ['Option 1', 'Option 2'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="px-5 w-full flex flex-col gap-[10px]"
    >
      {options.map((option, index) => (
        <motion.button
          key={option}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(option)}
          className="bg-[#fff7f7] content-stretch flex gap-[10px] items-center justify-start p-[12px] relative rounded-[14px] w-full"
        >
          <div aria-hidden="true" className="absolute border border-[#c21b17] border-solid inset-0 pointer-events-none rounded-[14px]" />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#c21b17] text-[16px] text-left">
            {option}
          </p>
        </motion.button>
      ))}
    </motion.div>
  );
}

// Product Category Selection Buttons
function ProductCategoryButtons({ onSelect }: { onSelect: (category: string) => void }) {
  const categories = ['Gold', 'Silver'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="px-5 w-full flex flex-col gap-[10px]"
    >
      {categories.map((category, index) => (
        <motion.button
          key={category}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(category)}
          className="bg-[#fff7f7] content-stretch flex gap-[10px] items-center justify-start p-[12px] relative rounded-[14px] w-full"
        >
          <div aria-hidden="true" className="absolute border border-[#c21b17] border-solid inset-0 pointer-events-none rounded-[14px]" />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#c21b17] text-[16px] text-left">
            {category}
          </p>
        </motion.button>
      ))}
    </motion.div>
  );
}

// Death Benefit Multiple Selection Buttons
function DeathBenefitButtons({ onSelect }: { onSelect: (multiple: string) => void }) {
  const multiples = ['5', '7', '10'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="px-5 w-full flex flex-col gap-[10px]"
    >
      {multiples.map((multiple, index) => (
        <motion.button
          key={multiple}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(multiple)}
          className="bg-[#fff7f7] content-stretch flex gap-[10px] items-center justify-start p-[12px] relative rounded-[14px] w-full"
        >
          <div aria-hidden="true" className="absolute border border-[#c21b17] border-solid inset-0 pointer-events-none rounded-[14px]" />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#c21b17] text-[16px] text-left">
            {multiple}
          </p>
        </motion.button>
      ))}
    </motion.div>
  );
}

// PLVC Type Buttons
function PLVCButtons({ onSelect }: { onSelect: (plvcType: string) => void }) {
  const options = ['PLVC without Voice', 'PLVC with Voice'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex flex-col gap-3 px-5 w-full mb-4"
    >
      {options.map((option, index) => (
        <motion.button
          key={option}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(option)}
          className="bg-white hover:bg-[#fff7f7] transition-colors relative flex items-center justify-center px-6 py-4 rounded-[14px] shadow-sm"
        >
          <div aria-hidden="true" className="absolute border border-[#c21b17] border-solid inset-0 pointer-events-none rounded-[14px]" />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#c21b17] text-[16px] text-left">
            {option}
          </p>
        </motion.button>
      ))}
    </motion.div>
  );
}

// KYC Method Buttons
function KYCButtons({ onSelect }: { onSelect: (kycMethod: string) => void }) {
  const options = ['Digilocker', 'Physical KYC'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex flex-col gap-3 px-5 w-full mb-4"
    >
      {options.map((option, index) => (
        <motion.button
          key={option}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(option)}
          className="bg-white hover:bg-[#fff7f7] transition-colors relative flex items-center justify-center px-6 py-4 rounded-[14px] shadow-sm"
        >
          <div aria-hidden="true" className="absolute border border-[#c21b17] border-solid inset-0 pointer-events-none rounded-[14px]" />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#c21b17] text-[16px] text-left">
            {option}
          </p>
        </motion.button>
      ))}
    </motion.div>
  );
}

// Bank Details Method Buttons
function BankDetailsMethodButtons({ onSelect }: { onSelect: (method: 'cheque' | 'manual') => void }) {
  const options = [
    { label: 'I have the cheque with me', value: 'cheque' as const },
    { label: 'I want to Fill Manually', value: 'manual' as const }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex flex-col gap-3 px-5 w-full mb-4"
    >
      {options.map((option, index) => (
        <motion.button
          key={option.value}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(option.value)}
          className="bg-white hover:bg-[#fff7f7] transition-colors relative flex items-center justify-center px-6 py-4 rounded-[14px] shadow-sm"
        >
          <div aria-hidden="true" className="absolute border border-[#c21b17] border-solid inset-0 pointer-events-none rounded-[14px]" />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#c21b17] text-[16px] text-left">
            {option.label}
          </p>
        </motion.button>
      ))}
    </motion.div>
  );
}

/**  CORRUPTED CODE SECTION - ENTIRE BLOCK COMMENTED OUT - DO NOT PARSE
This entire block from here to line 752 is commented out and should be ignored by the parser.
The real HealthConditionsSelector implementation starts at line 754.

SKIP - IGNORE - DO NOT PARSE

// Health Conditions Multi-Select Component  
function HealthConditionsSelector_CORRUPTED_IGNORE({ 
  SKIP_CORRUPTED_PARAMETERS
    SKIP_JSX
      REMOVED PREMIUM SUMMARY CARD COMMENT
      ALL CORRUPTED JSX HAS BEEN REMOVED
  );
}
*/

// Health Conditions Multi-Select Component
function HealthConditionsSelector({ 
  selectedConditions, 
  onToggle, 
  onConfirm 
}: { 
  selectedConditions: string[];
  onToggle: (condition: string, autoConfirm?: boolean) => void;
  onConfirm: () => void;
}) {
  const { t } = useTranslation();
  const conditions = [
    'Respiratory',
    'Digestive System',
    'Bone Disorder',
    'Heart Diseases',
    'Diabetes',
    'Thyroid/Hormonal Disorder',
    'Cancer/Tumor',
    "I don't have any disorders"
  ];

  const isNoneSelected = selectedConditions.includes("I don't have any disorders");
  const hasSelections = selectedConditions.length > 0;

  const handleClick = (condition: string) => {
    // If clicking "I don't have any disorders", pass auto-confirm flag
    if (condition === "I don't have any disorders") {
      onToggle(condition, true); // Pass true for auto-confirm
    } else {
      onToggle(condition, false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex flex-col gap-3 px-5 w-full mb-4"
    >
      {conditions.map((condition, index) => {
        const isSelected = selectedConditions.includes(condition);
        const isDisabled = !isSelected && (
          (isNoneSelected && condition !== "I don't have any disorders") ||
          (!isNoneSelected && condition === "I don't have any disorders" && selectedConditions.length > 0)
        );

        return (
          <motion.button
            key={condition}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.05, duration: 0.3 }}
            whileTap={{ scale: isDisabled ? 1 : 0.98 }}
            onClick={() => !isDisabled && handleClick(condition)}
            disabled={isDisabled}
            className={`relative flex items-center justify-between px-4 py-3 rounded-[14px] transition-all ${
              isSelected 
                ? 'bg-[#c21b17] text-white shadow-md' 
                : isDisabled
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white hover:bg-[#fff7f7] text-[#c21b17] shadow-sm'
            } ${
              condition === "I don't have any disorders" && !isSelected && !isDisabled
                ? 'border-2 border-green-500'
                : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                isSelected 
                  ? 'border-white bg-white' 
                  : condition === "I don't have any disorders" && !isDisabled
                  ? 'border-black'
                  : 'border-[#c21b17]'
              }`}>
                {isSelected && (
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5L4.5 8.5L11 1" stroke="#c21b17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[15px] text-left ${
                condition === "I don't have any disorders" && !isSelected && !isDisabled
                  ? 'text-black'
                  : ''
              }`}>
                {t(condition)}
              </p>
            </div>
          </motion.button>
        );
      })}
      
      {/* Confirm Button - only show when NOT "I don't have any disorders" */}
      {hasSelections && !isNoneSelected && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          whileTap={{ scale: 0.95 }}
          onClick={onConfirm}
          className="mt-2 bg-[#c21b17] text-white px-6 py-3 rounded-[14px] font-medium shadow-lg"
        >
          {t('Confirm Selection')}
        </motion.button>
      )}
    </motion.div>
  );
}

// Declarations Selector Component
function DeclarationsSelector({ 
  declarations,
  onUpdate,
  onConfirm 
}: { 
  declarations: {
    electronicDocuments: boolean | null;
    legalProceedings: boolean | null;
    politicalAssociation: boolean | null;
    physicalCopy: boolean | null;
    pendingInsurance: boolean | null;
    fatcaTaxResident: boolean | null;
  };
  onUpdate: (field: string, value: boolean) => void;
  onConfirm: () => void;
}) {
  const { t } = useTranslation();
  const [allNoEnabled, setAllNoEnabled] = React.useState(false);

  const handleAllNoToggle = (enabled: boolean) => {
    setAllNoEnabled(enabled);
    if (enabled) {
      // Set all to false (No)
      Object.keys(declarations).forEach(key => {
        onUpdate(key, false);
      });
    } else {
      // Clear all selections
      Object.keys(declarations).forEach(key => {
        onUpdate(key, null as any);
      });
    }
  };

  const questions = [
    {
      id: 'electronicDocuments',
      number: 1,
      text: 'Receive policy documents electronically via Insurance Repository?',
    },
    {
      id: 'legalProceedings',
      number: 2,
      text: 'Have you been involved in any criminal/civil legal proceedings in India or abroad?',
    },
    {
      id: 'politicalAssociation',
      number: 3,
      text: 'Are you or your family members associated with political parties, politicians, or senior government positions?',
    },
    {
      id: 'physicalCopy',
      number: 4,
      text: 'Need a physical copy of the policy document?',
    },
    {
      id: 'pendingInsurance',
      number: 5,
      text: 'Do you have any pending, existing, or previously declined life/health insurance proposals or policies?',
    },
    {
      id: 'fatcaTaxResident',
      number: 6,
      text: 'FATCA: Are you a tax resident in any jurisdiction outside India?',
    },
  ];

  const allAnswered = Object.values(declarations).every(value => value !== null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex flex-col gap-3 px-5 w-full mb-4"
    >
      {/* All No Toggle */}
      <div className="bg-[#fff7f7] rounded-2xl border border-[#c21b17] p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-[#c21b17]">{t('Quick Fill: All No')}</p>
            <p className="text-xs text-gray-600 mt-1">{t('Auto-select "No" for all questions')}</p>
          </div>
          <button
            onClick={() => handleAllNoToggle(!allNoEnabled)}
            className={`relative w-14 h-8 rounded-full transition-all ${
              allNoEnabled ? 'bg-[#c21b17]' : 'bg-gray-300'
            }`}
          >
            <motion.div
              animate={{ x: allNoEnabled ? 24 : 2 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
            />
          </button>
        </div>
      </div>

      {questions.map((question, index) => {
        const value = declarations[question.id as keyof typeof declarations];
        
        return (
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
            className="bg-white rounded-[16px] shadow-md p-4"
          >
            {/* Question */}
            <div className="flex gap-3 mb-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#c21b17] flex items-center justify-center">
                <span className="text-white text-sm font-bold">{question.number}</span>
              </div>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#263238] leading-[20px]">
                {t(question.text)}
              </p>
            </div>

            {/* Yes/No Options */}
            <div className="flex gap-3 pl-9">
              <button
                onClick={() => onUpdate(question.id, true)}
                className={`flex-1 py-2.5 px-4 rounded-[10px] border-2 transition-all ${
                  value === true
                    ? 'bg-[#c21b17] border-[#c21b17] text-white shadow-md'
                    : 'bg-white border-gray-200 text-[#666] hover:border-[#c21b17]'
                }`}
              >
                <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px]">
                  {t('Yes')}
                </span>
              </button>
              <button
                onClick={() => onUpdate(question.id, false)}
                className={`flex-1 py-2.5 px-4 rounded-[10px] border-2 transition-all ${
                  value === false
                    ? 'bg-[#c21b17] border-[#c21b17] text-white shadow-md'
                    : 'bg-white border-gray-200 text-[#666] hover:border-[#c21b17]'
                }`}
              >
                <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px]">
                  {t('No')}
                </span>
              </button>
            </div>
          </motion.div>
        );
      })}

      {/* Confirm Button */}
      {allAnswered && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          whileTap={{ scale: 0.95 }}
          onClick={onConfirm}
          className="bg-gradient-to-b from-[#c21b17] to-[#a11612] w-full h-[50px] rounded-[14px] mt-2 shadow-[0px_4px_12px_rgba(194,27,23,0.3)]"
        >
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white">
            {t('Submit Declarations')}
          </p>
        </motion.button>
      )}
    </motion.div>
  );
}

// Extraction Animation Overlay — shown inside upload cards while data is being extracted
function ExtractionOverlay() {
  const dots = [0, 1, 2, 3];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mt-2 flex items-center gap-2 px-1"
    >
      {/* Subtle scan icon */}
      <div className="relative flex-shrink-0 w-4 h-4">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7V5a2 2 0 0 1 2-2h2" />
          <path d="M17 3h2a2 2 0 0 1 2 2v2" />
          <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
          <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
          <motion.line
            x1="3" y1="12" x2="21" y2="12"
            stroke="#9ca3af"
            strokeWidth="2"
            animate={{ y1: [7, 17, 7], y2: [7, 17, 7] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>

      {/* Text + dots */}
      <div className="flex items-center gap-1">
        <p className="text-[12px] text-gray-400">Extracting information</p>
        <div className="flex items-end gap-[3px] pb-[1px]">
          {dots.map((i) => (
            <motion.span
              key={i}
              className="block w-[3px] h-[3px] rounded-full bg-gray-400"
              animate={{ opacity: [0.2, 0.8, 0.2], y: [0, -2, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                delay: i * 0.25,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Document Upload Component
function DocumentUpload({ 
  documents,
  onUpload,
  onComplete,
  onSkip,
  isProcessingAadhaar = false,
  isAddressProofAadhaar = null,
}: { 
  documents: string[];
  onUpload: (docType: string, file: File) => void;
  onComplete: () => void;
  onSkip?: () => void;
  isProcessingAadhaar?: boolean;
  isAddressProofAadhaar?: boolean | null;
}) {
  const { t } = useTranslation();
  const [uploadedDocs, setUploadedDocs] = React.useState<Record<string, File | null>>({});
  const [previewUrls, setPreviewUrls] = React.useState<Record<string, string>>({});
  const [addressesSame, setAddressesSame] = React.useState(true);
  const fileInputRefs = React.useRef<Record<string, HTMLInputElement | null>>({});

  const handleFileSelect = (docType: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onUpload(docType, file);
      setUploadedDocs(prev => ({ ...prev, [docType]: file }));
      
      // Create preview URL for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrls(prev => ({ ...prev, [docType]: reader.result as string }));
        };
        reader.readAsDataURL(file);
      } else {
        // For PDFs, we'll show a PDF icon
        setPreviewUrls(prev => ({ ...prev, [docType]: 'pdf' }));
      }
    }
    // Reset the input value to allow re-uploading the same file
    event.target.value = '';
  };

  const handleRemoveFile = (docType: string) => {
    setUploadedDocs(prev => ({ ...prev, [docType]: null }));
    setPreviewUrls(prev => {
      const newPreviews = { ...prev };
      delete newPreviews[docType];
      return newPreviews;
    });
  };

  let displayedDocuments = documents.filter(doc => doc === 'PAN Card' || doc === 'Age Proof' || doc === 'Address Proof Document' || doc === 'Cheque' || doc === 'Business Card');
  
  // Add Permanent Address Proof Document if addresses are not the same
  if (!addressesSame && displayedDocuments.includes('Address Proof Document')) {
    const addressIndex = displayedDocuments.indexOf('Address Proof Document');
    displayedDocuments = [
      ...displayedDocuments.slice(0, addressIndex + 1),
      'Permanent Address Proof Document',
      ...displayedDocuments.slice(addressIndex + 1)
    ];
  }
  
  console.log('DocumentUpload render:', { 
    isAddressProofAadhaar, 
    hasAddressProofUploaded: !!uploadedDocs['Address Proof Document'],
    displayedDocuments 
  });
  
  const allDocsUploaded = displayedDocuments.every(doc => uploadedDocs[doc]);
  const hasAnyUpload = Object.values(uploadedDocs).some(doc => doc !== null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="px-5 w-full mb-4"
    >
      <div className="bg-white rounded-[20px] shadow-lg p-5 space-y-4">
        {displayedDocuments.map((docType, index) => (
          <motion.div
            key={docType}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
            className="border border-gray-200 rounded-[14px] p-4 space-y-3"
          >
            {/* Document Title */}
            <div>
              <p className="font-semibold text-gray-900 text-[15px]">
                {t(docType === 'PAN Card' ? 'Tax Identification Document' : docType === 'Age Proof' ? 'Age Proof (Aadhaar / Govt ID)' : docType)}
              </p>
              {docType === 'PAN Card' && (
                <p className="text-xs text-gray-600 mt-1">
                  {t('Recommended: PAN Card, Form 60')}
                </p>
              )}
              {docType === 'Age Proof' && (
                <p className="text-xs text-gray-600 mt-1">
                  {t('Recommended: Aadhaar Card, Passport, Driving Licence')}
                </p>
              )}
              {(docType === 'Address Proof Document' || docType === 'Permanent Address Proof Document') && (
                <p className="text-xs text-gray-600 mt-1">
                  {t('Recommended: Aadhaar, Driving License')}
                </p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                {t('Supported: PNG, JPG & PDF')}
              </p>
            </div>

            {/* Address toggle - only show for Address Proof Document */}
            {docType === 'Address Proof Document' && (
              <div className="flex items-center justify-between pt-2">
                <span className="text-sm text-gray-700">
                  {t('Communication & Permanent address are same')}
                </span>
                <button
                  onClick={() => setAddressesSame(!addressesSame)}
                  className={`relative w-14 h-7 rounded-full transition-all ${
                    addressesSame ? 'bg-[#c21b17]' : 'bg-gray-300'
                  }`}
                >
                  <motion.div
                    animate={{ x: addressesSame ? 20 : 4 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
                  />
                </button>
              </div>
            )}

            {/* File input - hidden */}
            <input
              ref={el => fileInputRefs.current[docType] = el}
              type="file"
              accept="image/png,image/jpeg,image/jpg,.pdf"
              onChange={(e) => handleFileSelect(docType, e)}
              className="hidden"
            />
            
            {/* File preview - shown after upload */}
            {uploadedDocs[docType] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-3"
              >
                <div className="relative bg-gray-50 rounded-[10px] p-3 flex items-center gap-3">
                  {/* Thumbnail */}
                  <div className="w-16 h-16 rounded-[8px] overflow-hidden bg-gray-200 flex items-center justify-center flex-shrink-0">
                    {previewUrls[docType] === 'pdf' ? (
                      <FileText className="w-8 h-8 text-[#c21b17]" />
                    ) : (
                      <img 
                        src={previewUrls[docType]} 
                        alt={docType}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  
                  {/* File info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">
                      {uploadedDocs[docType]?.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(uploadedDocs[docType]!.size / 1024).toFixed(1)} KB
                    </p>
                  </div>

                  {/* Remove button */}
                  {!isProcessingAadhaar && (
                    <button
                      onClick={() => handleRemoveFile(docType)}
                      className="flex-shrink-0 p-2 hover:bg-red-50 rounded-full transition-colors"
                    >
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </button>
                  )}
                </div>

                {/* Extraction animation — shown while document is being processed */}
                {isProcessingAadhaar && <ExtractionOverlay />}
              </motion.div>
            )}
            
            {/* Choose File button - hide after upload */}
            {!uploadedDocs[docType] && (
              <>
                <button
                  onClick={() => fileInputRefs.current[docType]?.click()}
                  className="w-full py-3 rounded-[10px] text-sm font-semibold transition-colors bg-white text-[#c21b17] border-2 border-[#c21b17] hover:bg-red-50"
                >
                  {t('Choose File')}
                </button>
                
                {/* OR divider */}
                <div className="flex items-center gap-3 my-3">
                  <div className="h-px flex-1 bg-gray-300" />
                  <span className="text-xs text-gray-500 font-medium">{t('OR')}</span>
                  <div className="h-px flex-1 bg-gray-300" />
                </div>
                
                {/* Take Photo ghost button */}
                <button
                  onClick={() => fileInputRefs.current[docType]?.click()}
                  className="w-full py-3 rounded-[10px] text-sm font-semibold transition-colors bg-transparent text-[#c21b17] hover:bg-red-50 flex items-center justify-center gap-2"
                >
                  <Camera className="w-4 h-4" />
                  {t('Take Photo')}
                </button>
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Continue button - show when at least one file is uploaded */}
      {hasAnyUpload && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onComplete}
          className="w-full mt-4 py-4 bg-[#c21b17] text-white rounded-[14px] font-semibold text-[16px] hover:bg-[#a01713] transition-colors"
        >
          {t('Continue')}
        </motion.button>
      )}
    </motion.div>
  );
}

// Full-Length Photo Upload Component
function FullLengthPhotoUpload({ 
  onUpload,
  onComplete,
  onSkip
}: { 
  onUpload: (file: File) => void;
  onComplete: () => void;
  onSkip?: () => void;
}) {
  const { t } = useTranslation();
  const [uploadedPhoto, setUploadedPhoto] = React.useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = React.useState<string>('');
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onUpload(file);
      setUploadedPhoto(file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
    // Reset the input value
    event.target.value = '';
  };

  const handleRemovePhoto = () => {
    setUploadedPhoto(null);
    setPreviewUrl('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="px-5 w-full mb-4"
    >
      <div className="bg-white rounded-[20px] shadow-lg p-5">
        <div className="mb-4">
          <p className="font-medium text-gray-800 mb-1">{t('Full-Length Photo')}</p>
          <p className="text-xs text-gray-500">{t('Supported: PNG, JPG & PDF')}</p>
          <p className="text-xs text-gray-600 mt-2">
            {t('Please ensure the photo shows your full body clearly for accurate assessment.')}
          </p>
        </div>

        {/* Photo preview */}
        {uploadedPhoto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4"
          >
            <div className="relative bg-gray-50 rounded-[14px] overflow-hidden">
              {/* Image preview */}
              <div className="w-full h-64 flex items-center justify-center bg-gray-200">
                <img 
                  src={previewUrl} 
                  alt="Full length photo"
                  className="max-w-full max-h-64 object-contain"
                />
              </div>
              
              {/* File info overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {uploadedPhoto.name}
                    </p>
                    <p className="text-xs opacity-90">
                      {(uploadedPhoto.size / 1024).toFixed(1)} KB
                    </p>
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={handleRemovePhoto}
                    className="ml-3 flex-shrink-0 p-2 bg-red-500 hover:bg-red-600 rounded-full transition-colors"
                  >
                    <Trash2 className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/jpg,.pdf"
          onChange={handleFileSelect}
          className="hidden"
        />
        
        <button
          onClick={() => fileInputRef.current?.click()}
          className={`w-full py-3 rounded-[10px] text-sm font-medium transition-colors mb-3 ${
            uploadedPhoto
              ? 'bg-gray-50 text-gray-700 border border-gray-300 hover:bg-gray-100'
              : 'bg-[#fff7f7] text-[#c21b17] border border-[#c21b17] hover:bg-[#ffe5e5]'
          }`}
        >
          {uploadedPhoto ? 'Change Photo' : 'Choose Photo'}
        </button>
        
        {/* Take Photo ghost button - only show when no photo is uploaded */}
        {!uploadedPhoto && (
          <>
            {/* OR divider */}
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px flex-1 bg-gray-300" />
              <span className="text-xs text-gray-500 font-medium">OR</span>
              <div className="h-px flex-1 bg-gray-300" />
            </div>
            
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full py-3 rounded-[10px] text-sm font-medium transition-colors mb-3 bg-transparent text-[#c21b17] hover:bg-red-50 flex items-center justify-center gap-2"
            >
              <Camera className="w-4 h-4" />
              Take Photo
            </button>
          </>
        )}

        {uploadedPhoto && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.98 }}
            onClick={onComplete}
            className="w-full bg-[#c21b17] text-white py-4 rounded-[14px] font-semibold text-[16px] shadow-lg hover:bg-[#a01612] transition-colors"
          >
            {t('Continue')}
          </motion.button>
        )}

        {/* Skip button - show when photo is not uploaded */}
        {!uploadedPhoto && onSkip && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.98 }}
            onClick={onSkip}
            className="w-full text-gray-500 py-2 text-[14px] hover:text-gray-700 transition-colors mt-2 underline"
          >
            {t('Skip for Now')}
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}

// Policy Summary Card
function PolicySummaryCard({ 
  userData, 
  onGenerateBI 
}: { 
  userData: any; 
  onGenerateBI: () => void;
}) {
  const { t } = useTranslation();
  // Mock calculation for sum assured and premium
  const deathBenefitMultiple = parseInt(userData.deathBenefitMultiple || '5');
  const displayPremium = 50000; // Fixed premium amount
  const sumAssured = displayPremium * deathBenefitMultiple;
  
  // Get frequency text
  let frequencyText = 'Monthly';
  
  if (userData.premiumFrequency === 'Yearly') {
    frequencyText = 'Yearly';
  } else if (userData.premiumFrequency === 'Half Yearly') {
    frequencyText = 'Half Yearly';
  } else if (userData.premiumFrequency === 'Quarterly') {
    frequencyText = 'Quarterly';
  } else if (userData.premiumFrequency === 'Monthly') {
    frequencyText = 'Monthly';
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="px-5 w-full mb-4"
    >
      <div className="bg-white rounded-[20px] shadow-lg overflow-hidden">
        {/* Sum Assured - Highlighted Section */}
        <div className="bg-gradient-to-r from-[#c21b17] to-[#e63946] p-6 text-white">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="text-center"
          >
            <p className="text-sm opacity-90 mb-1">{t('Total Sum Assured')}</p>
            <p className="text-4xl font-bold mb-1">₹{sumAssured.toLocaleString('en-IN')}</p>
            <p className="text-xs opacity-80">{t(`${deathBenefitMultiple}x Death Benefit Multiple`)}</p>
          </motion.div>
        </div>

        {/* Premium Details */}
        <div className="p-5 bg-[#fff7f7] border-b border-[#ffe6e6]">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600 mb-1">Premium Amount</p>
              <p className="text-2xl font-bold text-[#c21b17]">₹{displayPremium.toLocaleString('en-IN')}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600 mb-1">Frequency</p>
              <p className="text-lg font-semibold text-[#c21b17]">{frequencyText}</p>
            </div>
          </div>
        </div>

        {/* Policy Details */}
        <div className="p-5 space-y-3">
          <h3 className="font-semibold text-gray-800 mb-3">Policy Details</h3>
          
          <div className="grid grid-cols-2 gap-3 text-sm">
            {userData.age && userData.gender && (
              <div>
                <p className="text-gray-500">Age & Gender</p>
                <p className="font-medium text-gray-800">{userData.age}, {userData.gender}</p>
              </div>
            )}
            
            {userData.selectedPlan && (
              <div>
                <p className="text-gray-500">Selected Plan</p>
                <p className="font-medium text-gray-800">{userData.selectedPlan}</p>
              </div>
            )}
            
            {userData.policyDuration && (
              <div>
                <p className="text-gray-500">Policy Duration</p>
                <p className="font-medium text-gray-800">{userData.policyDuration}</p>
              </div>
            )}
            
            {userData.premiumPaymentTerm && (
              <div>
                <p className="text-gray-500">Payment Term</p>
                <p className="font-medium text-gray-800">{userData.premiumPaymentTerm}</p>
              </div>
            )}
            
            {userData.policyType && (
              <div>
                <p className="text-gray-500">Policy Type</p>
                <p className="font-medium text-gray-800">{userData.policyType}</p>
              </div>
            )}
            
            {userData.riskTolerance && (
              <div>
                <p className="text-gray-500">Risk Tolerance</p>
                <p className="font-medium text-gray-800">{userData.riskTolerance}</p>
              </div>
            )}
            
            {userData.productCategory && (
              <div>
                <p className="text-gray-500">Product Category</p>
                <p className="font-medium text-gray-800">{userData.productCategory}</p>
              </div>
            )}
            
            {userData.productOption && (
              <div>
                <p className="text-gray-500">Product Option</p>
                <p className="font-medium text-gray-800">{userData.productOption}</p>
              </div>
            )}
            
            {userData.employeeStatus && (
              <div>
                <p className="text-gray-500">Employee Status</p>
                <p className="font-medium text-gray-800">{userData.employeeStatus}</p>
              </div>
            )}
          </div>
        </div>

        {/* Generate BI Button */}
        <div className="p-5 pt-3">
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={onGenerateBI}
            className="w-full bg-[#c21b17] text-white py-4 rounded-[14px] font-semibold text-[16px] shadow-lg hover:bg-[#a01612] transition-colors"
          >
            {t('Generate BI')}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

// Wrap the main component with LanguageProvider
export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

function InsuranceOnboardingApp({ onLanguageChange }: { onLanguageChange: (lang: string) => void }) {
  const { t } = useTranslation();
  // Login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showIntroScreen, setShowIntroScreen] = useState(false);
  const [showLanguageSelection, setShowLanguageSelection] = useState(false);
  const [userMobileNumber, setUserMobileNumber] = useState('');
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "To personalise your plan, I'll need your age and gender.",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const inputValueRef = React.useRef(''); // Add ref to track current input
  const [isListening, setIsListening] = React.useState(false);
  const [isPressHoldRecording, setIsPressHoldRecording] = React.useState(false);
  const isPressHoldRecordingRef = React.useRef(false); // Add ref to track recording state
  const [autoSendText, setAutoSendText] = React.useState<string | null>(null); // Track text to auto-send
  const [isThinking, setIsThinking] = useState(false);
  const [interimTranscript, setInterimTranscript] = useState('');
  const interimTranscriptRef = React.useRef(''); // Add ref to track interim transcript
  const [audioLevel, setAudioLevel] = useState(0);
  const [isVoiceSupported, setIsVoiceSupported] = React.useState(true);
  const recognitionRef = React.useRef<any>(null);
  const audioContextRef = React.useRef<AudioContext | null>(null);
  const analyserRef = React.useRef<AnalyserNode | null>(null);
  const animationFrameRef = React.useRef<number | null>(null);
  const mediaStreamRef = React.useRef<MediaStream | null>(null);
  const restartTimeoutRef = React.useRef<number | null>(null);
  const silenceTimeoutRef = React.useRef<number | null>(null);
  const isManualStopRef = React.useRef(false);
  const shouldAutoSendRef = React.useRef(false); // Track if we should auto-send when recording stops
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [exampleText, setExampleText] = useState('');
  const messageIdCounterRef = useRef(0);

  // Helper function to generate unique message IDs
  const generateUniqueId = () => {
    messageIdCounterRef.current += 1;
    return `${Date.now()}-${messageIdCounterRef.current}`;
  };

  // User data tracking
  const [userData, setUserData] = useState({
    mobileNumber: '',
    age: '29',
    gender: 'Male',
    goal: '',
    goalAmount: '',
    policyType: '',
    riskTolerance: '',
    selectedPlan: '',
    riders: '',
    policyDuration: '',
    premiumPaymentTerm: '',
    premiumFrequency: '',
    employeeStatus: '',
    productOption: '',
    productCategory: '',
    deathBenefitMultiple: '',
    plvcType: '',
    kycMethod: '',
    documents: {} as Record<string, File>,
    fullLengthPhoto: null as File | null,
    // Personal details from documents (blank — filled by OCR extraction)
    fullName: '',
    fatherName: '',
    communicationAddress: '',
    permanentAddress: '',
    pincode: '',
    dateOfBirth: '',
    // Hardcoded defaults — not extracted from documents
    countryOfBirth: 'India',
    nationality: 'Indian',
    // Professional details
    industry: '',
    occupation: '',
    designation: '',
    jobDuties: '',
    employerName: '',
    annualIncome: '',
    hazardousEnvironment: '',
    businessCard: null as File | null,
    // Family details
    fatherDOB: '',
    fatherVitalStatus: '',
    fatherAgeAtDeath: '',
    fatherCauseOfDeath: '',
    fatherAsNominee: '',
    motherFullName: '',
    motherDOB: '',
    motherVitalStatus: '',
    motherAgeAtDeath: '',
    motherCauseOfDeath: '',
    motherAsNominee: '',
    // Nominee details
    selectedNominees: [] as string[],
    nomineeShares: 100,
    nominees: [] as Array<{
      fullName: string;
      dateOfBirth: string;
      relationship: string;
      percentage: number;
      contactNumber?: string;
    }>,
    // Physical measurements from full-length photo
    height: '',
    weight: '',
    aiEstimatedHeight: 0,
    aiEstimatedWeight: 0,
    weightChange: '', // Weight gain/loss > 5kg in last 6 months
    // Health conditions
    healthConditions: [] as string[],
    healthConditionDetails: [] as Array<{
      condition: string;
      exactName: string;
      diagnosedDate: string;
      treatment: string;
      currentStatus: string;
    }>,
    // Substance consumption
    substanceConsumption: [] as string[],
    // Asset declaration
    assets: [] as string[],
    // Bank details
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    branchName: '',
  });

  // View tracking
  const [currentView, setCurrentView] = useState<'chat' | 'details'>('chat');
  const [showEditSheet, setShowEditSheet] = useState(false);
  const [showEditPolicySheet, setShowEditPolicySheet] = useState(false);
  const [showEditDocumentsSheet, setShowEditDocumentsSheet] = useState(false);
  const [showEditFamilyDetailsSheet, setShowEditFamilyDetailsSheet] = useState(false);
  const [showEditBanner, setShowEditBanner] = useState(false);
  const [showPolicySummary, setShowPolicySummary] = useState(false);
  const [showPersonalDetailsReview, setShowPersonalDetailsReview] = useState(false);
  const [showEditPersonalDetailsSheet, setShowEditPersonalDetailsSheet] = useState(false);
  const [showProfessionalDetailsReview, setShowProfessionalDetailsReview] = useState(false);
  const [showEditProfessionalDetailsSheet, setShowEditProfessionalDetailsSheet] = useState(false);
  const [showHeightWeightReview, setShowHeightWeightReview] = useState(false);
  const [isAnalysingPhoto, setIsAnalysingPhoto] = useState(false);
  const [showNomineeShareEditor, setShowNomineeShareEditor] = useState(false);
  const [nomineeListForEditor, setNomineeListForEditor] = useState<string[]>([]);
  const [showEditHeightWeightSheet, setShowEditHeightWeightSheet] = useState(false);
  const [showBankDetailsReview, setShowBankDetailsReview] = useState(false);
  const [showEditBankDetailsSheet, setShowEditBankDetailsSheet] = useState(false);
  
  // Testing controls visibility
  const [showTestingControls, setShowTestingControls] = useState(true);
  
  // Step tracking for conversation flow
  const [currentStep, setCurrentStep] = useState(1);
  const [displayStep, setDisplayStep] = useState(1);
  
  // Aadhaar processing state
  const [isProcessingAadhaar, setIsProcessingAadhaar] = useState(false);
  // Track which step-1 fields have been explicitly captured by the user (not just defaults)
  const [step1AgeCaptured, setStep1AgeCaptured] = useState(false);
  const [step1GenderCaptured, setStep1GenderCaptured] = useState(false);
  // Refs mirror the above — used inside handleSendMessage where React state is stale within the same render
  const step1AgeCapturedRef = useRef(false);
  const step1GenderCapturedRef = useRef(false);
  // Step 3 cross-turn memory refs (amount and timeframe captured across multiple turns)
  const step3AmountRef = useRef<string | null>(null);
  const step3TimeframeRef = useRef<string | null>(null);
  // Holds real-time extracted fields from uploaded documents for in-card preview
  const [documentExtractedData, setDocumentExtractedData] = useState<Record<string, string | null> | null>(null);
  const [showAadhaarSuccessToast, setShowAadhaarSuccessToast] = useState(false);
  const [showSaveToast, setShowSaveToast] = useState(false);

  const triggerSaveToast = () => {
    setShowSaveToast(true);
    setTimeout(() => setShowSaveToast(false), 3000);
  };
  const [isAddressProofAadhaar, setIsAddressProofAadhaar] = useState<boolean | null>(null);
  
  // Cheque processing state
  const [isProcessingCheque, setIsProcessingCheque] = useState(false);
  const [isProcessingBusinessCard, setIsProcessingBusinessCard] = useState(false);

  // Business card extraction state
  const [hasExtractedBusinessCard, setHasExtractedBusinessCard] = useState(false);
  const [showProfessionalDetailsContinue, setShowProfessionalDetailsContinue] = useState(false);
  const [tempProfessionalData, setTempProfessionalData] = useState<{
    industry: string;
    jobDuties: string;
    hazardousEnvironment: string;
  } | null>(null);

  // Health conditions state
  const [selectedHealthConditions, setSelectedHealthConditions] = useState<string[]>([]);
  const [healthConditionDetails, setHealthConditionDetails] = useState<Array<{
    condition: string;
    exactName: string;
    diagnosedDate: string;
    treatment: string;
    currentStatus: string;
  }>>([]);
  const [currentConditionBeingDetailed, setCurrentConditionBeingDetailed] = useState(0);

  // Documents state for details page
  const [uploadedDocs, setUploadedDocs] = useState<Record<string, File | null>>({});
  const [docPreviewUrls, setDocPreviewUrls] = useState<Record<string, string>>({});

  // Substance consumption state
  const [selectedSubstances, setSelectedSubstances] = useState<string[]>([]);

  // Asset declaration state
  const [selectedAssets, setSelectedAssets] = useState<string[]>([]);

  // Bank details state
  const [bankDetailsMethod, setBankDetailsMethod] = useState<'cheque' | 'manual' | null>(null);

  // Declarations state
  const [declarations, setDeclarations] = useState({
    electronicDocuments: null as boolean | null,
    legalProceedings: null as boolean | null,
    politicalAssociation: null as boolean | null,
    physicalCopy: null as boolean | null,
    pendingInsurance: null as boolean | null,
    fatcaTaxResident: null as boolean | null,
  });

  // Payment state
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [renewalMode, setRenewalMode] = useState<string | null>(null);
  
  // Declaration and OTP state
  const [declarationPlace, setDeclarationPlace] = useState<string | null>(null);
  const [otpVerified, setOtpVerified] = useState(false);

  // Update field handler for SavedInfoCards
  const handleUpdateField = (category: string, field: string, value: any) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Login handler
  const handleLoginSuccess = (mobileNumber: string) => {
    setUserMobileNumber(mobileNumber);
    setShowIntroScreen(true);
    // Store mobile number in userData as well
    setUserData((prev) => ({
      ...prev,
      mobileNumber: mobileNumber,
    }));
  };

  // Handle Get Started from intro screen
  const handleGetStarted = () => {
    setShowIntroScreen(false);
    setShowLanguageSelection(true);
  };

  // Handle language selection continue
  const handleLanguageContinue = (language: string) => {
    onLanguageChange(language); // Set language in context
    setShowLanguageSelection(false);
    setIsLoggedIn(true);
  };

  // Helper function to convert internal step number to display step number
  const getDisplayStep = (internalStep: number): number => {
    // For decimal steps, round down to the base step
    const roundedStep = Math.floor(internalStep);

    // Comprehensive mapping from internal step numbers to user-facing sequential steps (1-31)
    const stepMapping: { [key: number]: number } = {
      // Initial questions (Steps 1-9)
      1: 1,   // Age & Gender
      2: 2,   // Goal
      3: 3,   // Goal Amount
      4: 4,   // Policy Type
      5: 5,   // Risk Tolerance
      6: 6,   // Plans Selection
      7: 7,   // Riders
      8: 8,   // Policy Duration
      9: 9,   // Premium Summary
      // Steps 10-15 are not used in the flow
      16: 10, // PLVC
      17: 11, // KYC Method
      18: 12, // Document Upload (Physical KYC)
      19: 13, // Document Upload (Digilocker)
      20: 14, // Full-Length Photo
      21: 15, // Personal Details Review
      22: 16, // Professional Details (includes 22.5 business card upload)
      23: 17, // Annual Income
      24: 18, // Father Details (includes 24.5 vital status)
      25: 18, // Father death details (if deceased)
      26: 19, // Mother Details (includes 26.5 vital status)
      27: 19, // Mother death details (if deceased)
      28: 20, // Nominee Details (includes 28.1, 28.2)
      29: 21, // Height/Weight
      30: 22, // Weight Change
      31: 23, // Health Conditions (includes 31.1 exact name, 31.2 treatment)
      32: 24, // Substance Consumption
      33: 25, // Asset Declaration
      34: 26, // Bank Details (includes 34.1 cheque upload, 34.2 manual entry)
      35: 27, // Declarations
      36: 28, // Payment Method
      37: 29, // Declaration Place
      38: 30, // OTP Verification
      39: 31, // SCR (Self Customer Review)
    };

    const displayStep = stepMapping[roundedStep];

    // Debug logging
    console.log(`🔍 getDisplayStep - Internal: ${internalStep}, Rounded: ${roundedStep}, Display: ${displayStep}`);

    // If not found in mapping, try to calculate based on proximity
    if (displayStep === undefined) {
      console.warn(`Step ${internalStep} not found in mapping, defaulting to step 1`);
      return 1;
    }

    return displayStep;
  };

  // Helper function to get step title for progress stepper
  const getStepTitle = (step: number): string => {
    // Convert internal step to display step first
    const displayStep = getDisplayStep(step);
    
    // Step-specific messages from 1 to 31
    const stepMessages: { [key: number]: string } = {
      1: "Let's get started 🚀",
      2: "You're off to a great start.",
      3: "Everything's moving smoothly.",
      4: "Nice progress so far.",
      5: "That's a solid start 👍",
      6: "Making steady progress.",
      7: "You're doing really well.",
      8: "Keep going — you're on track.",
      9: "Building great momentum.",
      10: "Almost one-third complete.",
      11: "One-third done ✔",
      12: "Great pace so far.",
      13: "You're moving ahead confidently.",
      14: "Almost halfway there.",
      15: "Just one more to the halfway mark.",
      16: "You're halfway there 🎉",
      17: "Past the halfway mark!",
      18: "More than halfway done 👏",
      19: "You're making excellent progress.",
      20: "The finish line is getting closer.",
      21: "Two-thirds complete ✔",
      22: "You're in the final stretch.",
      23: "Just a few more steps to go.",
      24: "Almost there — stay with me.",
      25: "Wrapping up the key details.",
      26: "Nearly complete 🎯",
      27: "Final steps ahead.",
      28: "You're very close now.",
      29: "Just two more to go.",
      30: "One last step after this!",
      31: "All set — let's finish this ✔🎉"
    };
    
    return stepMessages[displayStep] || "Complete";
  };

  // Update display step whenever current step changes
  useEffect(() => {
    const newDisplayStep = getDisplayStep(currentStep);
    console.log(`🔄 useEffect: currentStep changed to ${currentStep}, updating displayStep to ${newDisplayStep}`);
    setDisplayStep(newDisplayStep);
  }, [currentStep]);

  // Testing: Step navigation
  const jumpToStep = (step: number) => {
    setIsListening(false);
    setInputValue('');
    setInterimTranscript('');
    stopAudioMonitoring();
    setShowPolicySummary(false);

    switch (step) {
      case 1: // Initial step
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setExampleText('');
        break;

      case 2: // After first answer - show goal selection
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29, female',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'What are you hoping to achieve with this insurance?',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setExampleText('');
        break;

      case 3: // After goal selection - show specific question
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29, female',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'What are you hoping to achieve with this insurance?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: "Save for Kid's Education",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '5',
            content: "Great! How much are you planning to save for your kid's education & by when?",
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setExampleText('I am planning to save 1 cr in 20 years');
        break;

      case 4: // After goal amount - show policy type selection
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29, female',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'What are you hoping to achieve with this insurance?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: "Save for Kid's Education",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '5',
            content: "Great! How much are you planning to save for your kid's education & by when?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '6',
            content: 'I am planning to save 1 cr in 20 years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '7',
            content: 'What type of policy are you looking for?',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setExampleText('');
        break;

      case 5: // After policy type - show risk tolerance selection
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29, female',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'What are you hoping to achieve with this insurance?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: "Save for Kid's Education",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '5',
            content: "Great! How much are you planning to save for your kid's education & by when?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '6',
            content: 'I am planning to save 1 cr in 20 years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '7',
            content: 'What type of policy are you looking for?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '8',
            content: 'Individual',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '9',
            content: 'How much risk are you comfortable with?',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setExampleText('');
        break;

      case 6: // After risk tolerance - show plan selection
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29, female',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'What are you hoping to achieve with this insurance?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: "Save for Kid's Education",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '5',
            content: "Great! How much are you planning to save for your kid's education & by when?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '6',
            content: 'I am planning to save 1 cr in 20 years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '7',
            content: 'What type of policy are you looking for?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '8',
            content: 'Individual',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '9',
            content: 'How much risk are you comfortable with?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '10',
            content: 'Medium',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '11',
            content: "Nice! I've picked a few plans that fit your income.",
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setExampleText('');
        break;

      case 7: // After plan selection - show rider question
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29, female',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'What are you hoping to achieve with this insurance?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: "Save for Kid's Education",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '5',
            content: "Great! How much are you planning to save for your kid's education & by when?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '6',
            content: 'I am planning to save 1 cr in 20 years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '7',
            content: 'What type of policy are you looking for?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '8',
            content: 'Individual',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '9',
            content: 'How much risk are you comfortable with?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '10',
            content: 'Medium',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '11',
            content: "Nice! I've picked a few plans that fit your income.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '12',
            content: "I'd like to go with Assured Education Plan",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '13',
            content: 'Riders add extra benefits to your plan. Would you like to explore and add them?',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setExampleText('');
        break;

      case 8: // After rider selection - show policy duration question
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29, female',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'What are you hoping to achieve with this insurance?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: "Save for Kid's Education",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '5',
            content: "Great! How much are you planning to save for your kid's education & by when?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '6',
            content: 'I am planning to save 1 cr in 20 years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '7',
            content: 'What type of policy are you looking for?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '8',
            content: 'Individual',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '9',
            content: 'How much risk are you comfortable with?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '10',
            content: 'Medium',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '11',
            content: "Nice! I've picked a few plans that fit your income.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '12',
            content: "I'd like to go with Assured Education Plan",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '13',
            content: 'Riders add extra benefits to your plan. Would you like to explore and add them?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '14',
            content: 'No',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '15',
            content: "No problem! We can always add riders later. Let's proceed with the plan details.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '16',
            content: "Let's calculate the premium now. Please fill in the following details:",
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setExampleText('');
        break;

      case 9: // After policy duration - show premium payment question
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29, female',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'What are you hoping to achieve with this insurance?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: "Save for Kid's Education",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '5',
            content: "Great! How much are you planning to save for your kid's education & by when?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '6',
            content: 'I am planning to save 1 cr in 20 years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '7',
            content: 'What type of policy are you looking for?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '8',
            content: 'Individual',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '9',
            content: 'How much risk are you comfortable with?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '10',
            content: 'Medium',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '11',
            content: "Nice! I've picked a few plans that fit your income.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '12',
            content: "I'd like to go with Assured Education Plan",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '13',
            content: 'Riders add extra benefits to your plan. Would you like to explore and add them?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '14',
            content: 'No',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '15',
            content: "No problem! We can always add riders later. Let's proceed with the plan details.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '16',
            content: "Great, let's move ahead. How many years would you like this policy to stay active?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '17',
            content: '20 years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '18',
            content: 'For how many years would you like to pay premiums?',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setExampleText('');
        break;

      case 10: // After premium payment term - show frequency question
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29, female',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'What are you hoping to achieve with this insurance?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: "Save for Kid's Education",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '5',
            content: "Great! How much are you planning to save for your kid's education & by when?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '6',
            content: 'I am planning to save 1 cr in 20 years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '7',
            content: 'What type of policy are you looking for?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '8',
            content: 'Individual',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '9',
            content: 'How much risk are you comfortable with?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '10',
            content: 'Medium',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '11',
            content: "Nice! I've picked a few plans that fit your income.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '12',
            content: "I'd like to go with Assured Education Plan",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '13',
            content: 'Riders add extra benefits to your plan. Would you like to explore and add them?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '14',
            content: 'No',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '15',
            content: "No problem! We can always add riders later. Let's proceed with the plan details.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '16',
            content: "Great, let's move ahead. How many years would you like this policy to stay active?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '17',
            content: '20 years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '18',
            content: 'For how many years would you like to pay premiums?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '19',
            content: '15 Years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '20',
            content: 'How often would you like to pay your premium?',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setExampleText('');
        break;

      case 11: // After premium frequency - show employee status question
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29, female',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'What are you hoping to achieve with this insurance?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: "Save for Kid's Education",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '5',
            content: "Great! How much are you planning to save for your kid's education & by when?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '6',
            content: 'I am planning to save 1 cr in 20 years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '7',
            content: 'What type of policy are you looking for?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '8',
            content: 'Individual',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '9',
            content: 'How much risk are you comfortable with?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '10',
            content: 'Medium',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '11',
            content: "Nice! I've picked a few plans that fit your income.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '12',
            content: "I'd like to go with Assured Education Plan",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '13',
            content: 'Riders add extra benefits to your plan. Would you like to explore and add them?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '14',
            content: 'No',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '15',
            content: "No problem! We can always add riders later. Let's proceed with the plan details.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '16',
            content: "Great, let's move ahead. How many years would you like this policy to stay active?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '17',
            content: '20 years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '18',
            content: 'For how many years would you like to pay premiums?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '19',
            content: '15 Years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '20',
            content: 'How often would you like to pay your premium?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '21',
            content: 'Yearly',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '22',
            content: 'Are you an employee of the company or related group?',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setExampleText('');
        break;

      case 12: // After employee status - show product option question
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29, female',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'What are you hoping to achieve with this insurance?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: "Save for Kid's Education",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '5',
            content: "Great! How much are you planning to save for your kid's education & by when?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '6',
            content: 'I am planning to save 1 cr in 20 years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '7',
            content: 'What type of policy are you looking for?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '8',
            content: 'Individual',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '9',
            content: 'How much risk are you comfortable with?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '10',
            content: 'Medium',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '11',
            content: "Nice! I've picked a few plans that fit your income.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '12',
            content: "I'd like to go with Assured Education Plan",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '13',
            content: 'Riders add extra benefits to your plan. Would you like to explore and add them?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '14',
            content: 'No',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '15',
            content: "No problem! We can always add riders later. Let's proceed with the plan details.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '16',
            content: "Great, let's move ahead. How many years would you like this policy to stay active?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '17',
            content: '20 years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '18',
            content: 'For how many years would you like to pay premiums?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '19',
            content: '15 Years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '20',
            content: 'How often would you like to pay your premium?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '21',
            content: 'Yearly',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '22',
            content: 'Are you an employee of the company or related group?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '23',
            content: 'None',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '24',
            content: 'Which product option would you like to go with?',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setExampleText('');
        break;

      case 13: // After product option - show product category question
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29, female',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'What are you hoping to achieve with this insurance?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: "Save for Kid's Education",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '5',
            content: "Great! How much are you planning to save for your kid's education & by when?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '6',
            content: 'I am planning to save 1 cr in 20 years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '7',
            content: 'What type of policy are you looking for?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '8',
            content: 'Individual',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '9',
            content: 'How much risk are you comfortable with?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '10',
            content: 'Medium',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '11',
            content: "Nice! I've picked a few plans that fit your income.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '12',
            content: "I'd like to go with Assured Education Plan",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '13',
            content: 'Riders add extra benefits to your plan. Would you like to explore and add them?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '14',
            content: 'No',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '15',
            content: "No problem! We can always add riders later. Let's proceed with the plan details.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '16',
            content: "Great, let's move ahead. How many years would you like this policy to stay active?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '17',
            content: '20 years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '18',
            content: 'For how many years would you like to pay premiums?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '19',
            content: '15 Years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '20',
            content: 'How often would you like to pay your premium?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '21',
            content: 'Yearly',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '22',
            content: 'Are you an employee of the company or related group?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '23',
            content: 'None',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '24',
            content: 'Which product option would you like to go with?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '25',
            content: 'Option 1',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '26',
            content: 'Choose the product category that fits your needs.',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setExampleText('');
        break;

      case 14: // After product category - show death benefit question
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29, female',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'What are you hoping to achieve with this insurance?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: "Save for Kid's Education",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '5',
            content: "Great! How much are you planning to save for your kid's education & by when?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '6',
            content: 'I am planning to save 1 cr in 20 years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '7',
            content: 'What type of policy are you looking for?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '8',
            content: 'Individual',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '9',
            content: 'How much risk are you comfortable with?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '10',
            content: 'Medium',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '11',
            content: "Nice! I've picked a few plans that fit your income.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '12',
            content: "I'd like to go with Assured Education Plan",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '13',
            content: 'Riders add extra benefits to your plan. Would you like to explore and add them?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '14',
            content: 'No',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '15',
            content: "No problem! We can always add riders later. Let's proceed with the plan details.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '16',
            content: "Great, let's move ahead. How many years would you like this policy to stay active?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '17',
            content: '20 years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '18',
            content: 'For how many years would you like to pay premiums?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '19',
            content: '15 Years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '20',
            content: 'How often would you like to pay your premium?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '21',
            content: 'Yearly',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '22',
            content: 'Are you an employee of the company or related group?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '23',
            content: 'None',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '24',
            content: 'Which product option would you like to go with?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '25',
            content: 'Option 1',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '26',
            content: 'Choose the product category that fits your needs.',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '27',
            content: 'Gold',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '28',
            content: 'Choose your death benefit multiple.',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setExampleText('');
        break;

      case 15: // After death benefit - show policy summary
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29, female',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'What are you hoping to achieve with this insurance?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: "Save for Kid's Education",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '5',
            content: "Great! How much are you planning to save for your kid's education & by when?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '6',
            content: 'I am planning to save 1 cr in 20 years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '7',
            content: 'What type of policy are you looking for?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '8',
            content: 'Individual',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '9',
            content: 'How much risk are you comfortable with?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '10',
            content: 'Medium',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '11',
            content: "Nice! I've picked a few plans that fit your income.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '12',
            content: "I'd like to go with Assured Education Plan",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '13',
            content: 'Riders add extra benefits to your plan. Would you like to explore and add them?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '14',
            content: 'No',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '15',
            content: "No problem! We can always add riders later. Let's proceed with the plan details.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '16',
            content: "Great, let's move ahead. How many years would you like this policy to stay active?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '17',
            content: '20 years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '18',
            content: 'For how many years would you like to pay premiums?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '19',
            content: '15 Years',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '20',
            content: 'How often would you like to pay your premium?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '21',
            content: 'Yearly',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '22',
            content: 'Are you an employee of the company or related group?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '23',
            content: 'None',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '24',
            content: 'Which product option would you like to go with?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '25',
            content: 'Option 1',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '26',
            content: 'Choose the product category that fits your needs.',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '27',
            content: 'Gold',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '28',
            content: 'Choose your death benefit multiple.',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '29',
            content: '10',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '30',
            content: "Here's a summary of your policy details:",
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData({
          age: '29',
          gender: 'Male',
          goal: "Save for Kid's Education",
          goalAmount: '1 cr in 20 years',
          policyType: 'Individual',
          riskTolerance: 'Medium',
          selectedPlan: 'Assured Education Plan',
          riders: 'No',
          policyDuration: '20 years',
          premiumPaymentTerm: '15 Years',
          premiumFrequency: 'Yearly',
          employeeStatus: 'None',
          productOption: 'Option 1',
          productCategory: 'Gold',
          deathBenefitMultiple: '10',
        });
        setShowPolicySummary(true);
        setExampleText('');
        break;

      case 16: // After Generate BI - PLVC Type selection
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29, female',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'What are you hoping to achieve with this insurance?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: "Save for Kid's Education",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '29',
            content: '10',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '30',
            content: "Here's a summary of your policy details:",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '31',
            content: 'Generate BI',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '32',
            content: 'Congratulations! BI has been generated successfully & sent to the customer.',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '33',
            content: 'Select PLVC Type',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData({
          age: '29',
          gender: 'Male',
          goal: "Save for Kid's Education",
          goalAmount: '1 cr in 20 years',
          policyType: 'Individual',
          riskTolerance: 'Medium',
          selectedPlan: 'Assured Education Plan',
          riders: 'No',
          policyDuration: '20 years',
          premiumPaymentTerm: '15 Years',
          premiumFrequency: 'Yearly',
          employeeStatus: 'None',
          productOption: 'Option 1',
          productCategory: 'Gold',
          deathBenefitMultiple: '10',
          plvcType: '',
          kycMethod: '',
          documents: {},
          fullLengthPhoto: null,
        });
        setExampleText('');
        break;

      case 17: // After PLVC - KYC selection
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '31',
            content: 'Generate BI',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '32',
            content: 'Congratulations! BI has been generated successfully & sent to the customer.',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '33',
            content: 'Select PLVC Type',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '34',
            content: 'PLVC with Voice',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '35',
            content: 'Congratulations! Application No. L10007864 successfully generated.',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '36',
            content: 'How would you like to complete your KYC verification?',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData({
          age: '29',
          gender: 'Male',
          goal: "Save for Kid's Education",
          goalAmount: '1 cr in 20 years',
          policyType: 'Individual',
          riskTolerance: 'Medium',
          selectedPlan: 'Assured Education Plan',
          riders: 'No',
          policyDuration: '20 years',
          premiumPaymentTerm: '15 Years',
          premiumFrequency: 'Yearly',
          employeeStatus: 'None',
          productOption: 'Option 1',
          productCategory: 'Gold',
          deathBenefitMultiple: '10',
          plvcType: 'PLVC with Voice',
          kycMethod: '',
          documents: {},
          fullLengthPhoto: null,
        });
        setExampleText('');
        break;

      case 18: // After KYC - Document Upload (Physical KYC)
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '34',
            content: 'PLVC with Voice',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '35',
            content: 'Congratulations! Application No. L10007864 successfully generated.',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '36',
            content: 'How would you like to complete your KYC verification?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '37',
            content: 'Physical KYC',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '38',
            content: 'Please upload the following documents for verification. Make sure to upload your latest documents:',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData({
          age: '29',
          gender: 'Male',
          goal: "Save for Kid's Education",
          goalAmount: '1 cr in 20 years',
          policyType: 'Individual',
          riskTolerance: 'Medium',
          selectedPlan: 'Assured Education Plan',
          riders: 'No',
          policyDuration: '20 years',
          premiumPaymentTerm: '15 Years',
          premiumFrequency: 'Yearly',
          employeeStatus: 'None',
          productOption: 'Option 1',
          productCategory: 'Gold',
          deathBenefitMultiple: '10',
          plvcType: 'PLVC with Voice',
          kycMethod: 'Physical KYC',
          documents: {},
          fullLengthPhoto: null,
        });
        setExampleText('');
        break;

      case 19: // After KYC - Document Upload (Digilocker)
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '34',
            content: 'PLVC with Voice',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '35',
            content: 'Congratulations! Application No. L10007864 successfully generated.',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '36',
            content: 'How would you like to complete your KYC verification?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '37',
            content: 'Digilocker',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '38',
            content: 'Great! Digilocker KYC verification successful. Please upload your PAN Card for final verification.',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData({
          age: '29',
          gender: 'Male',
          goal: "Save for Kid's Education",
          goalAmount: '1 cr in 20 years',
          policyType: 'Individual',
          riskTolerance: 'Medium',
          selectedPlan: 'Assured Education Plan',
          riders: 'No',
          policyDuration: '20 years',
          premiumPaymentTerm: '15 Years',
          premiumFrequency: 'Yearly',
          employeeStatus: 'None',
          productOption: 'Option 1',
          productCategory: 'Gold',
          deathBenefitMultiple: '10',
          plvcType: 'PLVC with Voice',
          kycMethod: 'Digilocker',
          documents: {},
          fullLengthPhoto: null,
          // Personal details from documents
          fullName: 'Rajesh Kumar Sharma',
          fatherName: 'Suresh Kumar Sharma',
          communicationAddress: '401, Sunrise Apartments, MG Road, Bangalore',
          permanentAddress: '401, Sunrise Apartments, MG Road, Bangalore',
          pincode: '560001',
          dateOfBirth: '15/03/1994',
          countryOfBirth: 'India',
          nationality: 'Indian',
        });
        setExampleText('');
        break;

      case 20: // After Documents - Full-length Photo Upload
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '37',
            content: 'Physical KYC',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '38',
            content: 'Please upload the following documents for verification:',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '39',
            content: 'All documents uploaded',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '40',
            content: 'Please upload a full-length photo for identity verification and health assessment.',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData({
          age: '29',
          gender: 'Male',
          goal: "Save for Kid's Education",
          goalAmount: '1 cr in 20 years',
          policyType: 'Individual',
          riskTolerance: 'Medium',
          selectedPlan: 'Assured Education Plan',
          riders: 'No',
          policyDuration: '20 years',
          premiumPaymentTerm: '15 Years',
          premiumFrequency: 'Yearly',
          employeeStatus: 'None',
          productOption: 'Option 1',
          productCategory: 'Gold',
          deathBenefitMultiple: '10',
          plvcType: 'PLVC with Voice',
          kycMethod: 'Physical KYC',
          documents: {},
          fullLengthPhoto: null,
          // Personal details blank — will be filled by document extraction
          fullName: '',
          fatherName: '',
          communicationAddress: '',
          permanentAddress: '',
          pincode: '',
          dateOfBirth: '',
          countryOfBirth: 'India',
          nationality: 'Indian',
        });
        setExampleText('');
        break;

      case 21: // Personal Details Review
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '37',
            content: 'Physical KYC',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '38',
            content: 'Please upload the following documents for verification:',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '39',
            content: 'All documents uploaded',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '40',
            content: 'Please upload a full-length photo for identity verification and health assessment.',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '41',
            content: 'Photo uploaded',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '42',
            content: "Ta-da! I've filled these in from your documents. Review them once?",
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData({
          age: '29',
          gender: 'Male',
          goal: "Save for Kid's Education",
          goalAmount: '1 cr in 20 years',
          policyType: 'Individual',
          riskTolerance: 'Medium',
          selectedPlan: 'Assured Education Plan',
          riders: 'No',
          policyDuration: '20 years',
          premiumPaymentTerm: '15 Years',
          premiumFrequency: 'Yearly',
          employeeStatus: 'None',
          productOption: 'Option 1',
          productCategory: 'Gold',
          deathBenefitMultiple: '10',
          plvcType: 'PLVC with Voice',
          kycMethod: 'Physical KYC',
          documents: {},
          fullLengthPhoto: null,
          // Personal details from documents
          fullName: 'Rajesh Kumar Sharma',
          fatherName: 'Suresh Kumar Sharma',
          communicationAddress: '401, Sunrise Apartments, MG Road, Bangalore',
          permanentAddress: '401, Sunrise Apartments, MG Road, Bangalore',
          pincode: '560001',
          dateOfBirth: '15/03/1994',
          countryOfBirth: 'India',
          nationality: 'Indian',
        });
        setCurrentStep(21);
        setShowPersonalDetailsReview(true);
        setExampleText('');
        break;

      case 22: // Professional Details - type OR upload business card
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '41',
            content: 'Photo uploaded',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '42',
            content: "Ta-da! I've filled these in from your documents. Review them once?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '43',
            content: 'Confirmed',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '44',
            content: "Let's get to know your employer name, designation & occupation",
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData({
          age: '29',
          gender: 'Male',
          goal: "Save for Kid's Education",
          goalAmount: '1 cr in 20 years',
          policyType: 'Individual',
          riskTolerance: 'Medium',
          selectedPlan: 'Assured Education Plan',
          riders: 'No',
          policyDuration: '20 years',
          premiumPaymentTerm: '15 Years',
          premiumFrequency: 'Yearly',
          employeeStatus: 'None',
          productOption: 'Option 1',
          productCategory: 'Gold',
          deathBenefitMultiple: '10',
          plvcType: 'PLVC with Voice',
          kycMethod: 'Physical KYC',
          documents: {},
          fullLengthPhoto: null,
          fullName: 'Rajesh Kumar Sharma',
          fatherName: 'Suresh Kumar Sharma',
          communicationAddress: '401, Sunrise Apartments, MG Road, Bangalore',
          permanentAddress: '401, Sunrise Apartments, MG Road, Bangalore',
          pincode: '560001',
          dateOfBirth: '15/03/1994',
          countryOfBirth: 'India',
          nationality: 'Indian',
          // Professional details
          employerName: '',
          designation: '',
          occupation: '',
          industry: '',
          jobDuties: '',
          hazardousEnvironment: '',
          annualIncome: '',
        });
        setCurrentStep(22);
        setShowProfessionalDetailsReview(false);
        setHasExtractedBusinessCard(false);
        setShowProfessionalDetailsContinue(false);
        setExampleText('TCS, Software Engineer, Salaried');
        break;

      case 23: // Annual Income
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '41',
            content: 'Photo uploaded',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '42',
            content: "Ta-da! I've filled these in from your documents. Review them once?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '43',
            content: 'Confirmed',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '44',
            content: "Let's get to know your employer name, designation & occupation",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '45',
            content: 'TCS, Software Engineer, Salaried',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '45a',
            content: "Perfect! I'll analyze your role and auto-fill your industry and work details.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '45b',
            content: 'Confirmed',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '45c',
            content: 'Would you like to upload your business card? This helps us verify your professional details.',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '45d',
            content: 'Skip business card upload',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '46',
            content: 'No problem! What is your annual income (in lakhs)?',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData({
          age: '29',
          gender: 'Male',
          goal: "Save for Kid's Education",
          goalAmount: '1 cr in 20 years',
          policyType: 'Individual',
          riskTolerance: 'Medium',
          selectedPlan: 'Assured Education Plan',
          riders: 'No',
          policyDuration: '20 years',
          premiumPaymentTerm: '15 Years',
          premiumFrequency: 'Yearly',
          employeeStatus: 'None',
          productOption: 'Option 1',
          productCategory: 'Gold',
          deathBenefitMultiple: '10',
          plvcType: 'PLVC with Voice',
          kycMethod: 'Physical KYC',
          documents: {},
          fullLengthPhoto: null,
          fullName: 'Rajesh Kumar Sharma',
          fatherName: 'Suresh Kumar Sharma',
          communicationAddress: '401, Sunrise Apartments, MG Road, Bangalore',
          permanentAddress: '401, Sunrise Apartments, MG Road, Bangalore',
          pincode: '560001',
          dateOfBirth: '15/03/1994',
          countryOfBirth: 'India',
          nationality: 'Indian',
          // Professional details
          employerName: 'TCS',
          designation: 'Software Engineer',
          occupation: 'Salaried',
          industry: 'Information Technology',
          jobDuties: 'Designing and developing software applications',
          hazardousEnvironment: 'No',
          annualIncome: '',
        });
        setCurrentStep(23);
        setExampleText('₹15 lakhs per year');
        break;

      case 24: // Father's Details
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '41',
            content: 'Photo uploaded',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '42',
            content: "Ta-da! I've filled these in from your documents. Review them once?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '43',
            content: 'Confirmed',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '44',
            content: "Let's get to know your employer name, designation & occupation",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '45',
            content: 'TCS, Software Engineer, Salaried',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '45a',
            content: "Perfect! I'll analyze your role and auto-fill your industry and work details.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '45b',
            content: 'Confirmed',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '45c',
            content: 'Would you like to upload your business card? This helps us verify your professional details.',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '45d',
            content: 'Skip business card upload',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '46',
            content: 'No problem! What is your annual income (in lakhs)?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '47',
            content: '15',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '48',
            content: "Thank you! Now, please mention your father's date of birth (DD/MM/YYYY).",
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData({
          age: '29',
          gender: 'Male',
          goal: "Save for Kid's Education",
          goalAmount: '1 cr in 20 years',
          policyType: 'Individual',
          riskTolerance: 'Medium',
          selectedPlan: 'Assured Education Plan',
          riders: 'No',
          policyDuration: '20 years',
          premiumPaymentTerm: '15 Years',
          premiumFrequency: 'Yearly',
          employeeStatus: 'None',
          productOption: 'Option 1',
          productCategory: 'Gold',
          deathBenefitMultiple: '10',
          plvcType: 'PLVC with Voice',
          kycMethod: 'Physical KYC',
          documents: {},
          fullLengthPhoto: null,
          fullName: 'Rajesh Kumar Sharma',
          fatherName: 'Suresh Kumar Sharma',
          communicationAddress: '401, Sunrise Apartments, MG Road, Bangalore',
          permanentAddress: '401, Sunrise Apartments, MG Road, Bangalore',
          pincode: '560001',
          dateOfBirth: '15/03/1994',
          countryOfBirth: 'India',
          nationality: 'Indian',
          employerName: 'TCS',
          designation: 'Software Engineer',
          occupation: 'Salaried',
          industry: 'Information Technology',
          jobDuties: 'Designing and developing software applications',
          hazardousEnvironment: 'No',
          annualIncome: '₹15 lakhs per year',
          fatherDOB: '',
          fatherVitalStatus: '',
          fatherAgeAtDeath: '',
          fatherCauseOfDeath: '',
          fatherAsNominee: '',
          motherFullName: '',
          motherDOB: '',
          motherVitalStatus: '',
          motherAgeAtDeath: '',
          motherCauseOfDeath: '',
          motherAsNominee: '',
        });
        setCurrentStep(23);
        setExampleText('His DOB is 15/03/1962');
        break;

      case 25: // Father Nominee (Alive scenario)
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '49',
            content: "Thank you! Now, please mention your father's date of birth (DD/MM/YYYY).",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '50',
            content: 'His DOB is 15/03/1962',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '51',
            content: 'Would you like to add him as a nominee?',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData({
          age: '29',
          gender: 'Male',
          goal: "Save for Kid's Education",
          goalAmount: '1 cr in 20 years',
          policyType: 'Individual',
          riskTolerance: 'Medium',
          selectedPlan: 'Assured Education Plan',
          riders: 'No',
          policyDuration: '20 years',
          premiumPaymentTerm: '15 Years',
          premiumFrequency: 'Yearly',
          employeeStatus: 'None',
          productOption: 'Option 1',
          productCategory: 'Gold',
          deathBenefitMultiple: '10',
          plvcType: 'PLVC with Voice',
          kycMethod: 'Physical KYC',
          documents: {},
          fullLengthPhoto: null,
          fullName: 'Rajesh Kumar Sharma',
          fatherName: 'Suresh Kumar Sharma',
          communicationAddress: '401, Sunrise Apartments, MG Road, Bangalore',
          permanentAddress: '401, Sunrise Apartments, MG Road, Bangalore',
          pincode: '560001',
          dateOfBirth: '15/03/1994',
          countryOfBirth: 'India',
          nationality: 'Indian',
          jobTitle: 'Senior Software Engineer',
          companyName: 'TCS',
          industry: 'Information Technology',
          occupationType: 'Non-Manual',
          jobDuties: 'Designing and developing software applications, code reviews, mentoring junior developers',
          hazardousEnvironment: 'No',
          annualIncome: '₹15 lakhs per year',
          fatherDOB: '15/03/1960',
          fatherVitalStatus: 'Alive',
          fatherCauseOfDeath: '',
          fatherAsNominee: '',
          fatherFullName: 'Ramesh Kumar',
          motherFullName: '',
          motherDOB: '',
          motherVitalStatus: '',
          motherCauseOfDeath: '',
          motherAsNominee: '',
        });
        setCurrentStep(24);
        setExampleText('');
        break;

      case 26: // Mother's Details
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '51',
            content: 'Would you like to add him as a nominee?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '52',
            content: 'Yes, please',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '53',
            content: "Now, please mention your mother's full name, date of birth (DD/MM/YYYY), and vital status.",
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData({
          age: '29',
          gender: 'Male',
          goal: "Save for Kid's Education",
          goalAmount: '1 cr in 20 years',
          policyType: 'Individual',
          riskTolerance: 'Medium',
          selectedPlan: 'Assured Education Plan',
          riders: 'No',
          policyDuration: '20 years',
          premiumPaymentTerm: '15 Years',
          premiumFrequency: 'Yearly',
          employeeStatus: 'None',
          productOption: 'Option 1',
          productCategory: 'Gold',
          deathBenefitMultiple: '10',
          plvcType: 'PLVC with Voice',
          kycMethod: 'Physical KYC',
          documents: {},
          fullLengthPhoto: null,
          fullName: 'Rajesh Kumar Sharma',
          fatherName: 'Suresh Kumar Sharma',
          communicationAddress: '401, Sunrise Apartments, MG Road, Bangalore',
          permanentAddress: '401, Sunrise Apartments, MG Road, Bangalore',
          pincode: '560001',
          dateOfBirth: '15/03/1994',
          countryOfBirth: 'India',
          nationality: 'Indian',
          jobTitle: 'Senior Software Engineer',
          companyName: 'TCS',
          industry: 'Information Technology',
          occupationType: 'Non-Manual',
          jobDuties: 'Designing and developing software applications, code reviews, mentoring junior developers',
          hazardousEnvironment: 'No',
          annualIncome: '₹15 lakhs per year',
          fatherDOB: '15/03/1960',
          fatherVitalStatus: 'Alive',
          fatherCauseOfDeath: '',
          fatherAsNominee: 'Yes, please',
          motherFullName: '',
          motherDOB: '',
          motherVitalStatus: '',
          motherCauseOfDeath: '',
          motherAsNominee: '',
        });
        setCurrentStep(25);
        setExampleText('Sunita Devi Sharma, 20/06/1965, alive');
        break;

      case 27: // Mother Nominee (Alive scenario)
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '53',
            content: "Now, please mention your mother's full name, date of birth (DD/MM/YYYY), and vital status.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '54',
            content: 'Sunita Devi Sharma, 20/06/1965, alive',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '55',
            content: 'Would you like to add her as a nominee?',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData({
          age: '29',
          gender: 'Male',
          goal: "Save for Kid's Education",
          goalAmount: '1 cr in 20 years',
          policyType: 'Individual',
          riskTolerance: 'Medium',
          selectedPlan: 'Assured Education Plan',
          riders: 'No',
          policyDuration: '20 years',
          premiumPaymentTerm: '15 Years',
          premiumFrequency: 'Yearly',
          employeeStatus: 'None',
          productOption: 'Option 1',
          productCategory: 'Gold',
          deathBenefitMultiple: '10',
          plvcType: 'PLVC with Voice',
          kycMethod: 'Physical KYC',
          documents: {},
          fullLengthPhoto: null,
          fullName: 'Rajesh Kumar Sharma',
          fatherName: 'Suresh Kumar Sharma',
          communicationAddress: '401, Sunrise Apartments, MG Road, Bangalore',
          permanentAddress: '401, Sunrise Apartments, MG Road, Bangalore',
          pincode: '560001',
          dateOfBirth: '15/03/1994',
          countryOfBirth: 'India',
          nationality: 'Indian',
          jobTitle: 'Senior Software Engineer',
          companyName: 'TCS',
          industry: 'Information Technology',
          occupationType: 'Non-Manual',
          jobDuties: 'Designing and developing software applications, code reviews, mentoring junior developers',
          hazardousEnvironment: 'No',
          annualIncome: '₹15 lakhs per year',
          fatherDOB: '15/03/1960',
          fatherVitalStatus: 'Alive',
          fatherCauseOfDeath: '',
          fatherAsNominee: 'Yes, please',
          motherFullName: 'Sunita Devi Sharma',
          motherDOB: '20/06/1965',
          motherVitalStatus: 'Alive',
          motherCauseOfDeath: '',
          motherAsNominee: '',
        });
        setCurrentStep(26);
        setExampleText('Yes, please');
        break;

      case 28: // Nominee Selection
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '56',
            content: "Who would you like to add as your nominee?",
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData({
          age: '29',
          gender: 'Male',
          goal: "Save for Kid's Education",
          goalAmount: '1 cr in 20 years',
          policyType: 'Individual',
          riskTolerance: 'Medium',
          selectedPlan: 'Assured Education Plan',
          riders: 'No',
          policyDuration: '20 years',
          premiumPaymentTerm: '15 Years',
          premiumFrequency: 'Yearly',
          employeeStatus: 'None',
          productOption: 'Option 1',
          productCategory: 'Gold',
          deathBenefitMultiple: '10',
          plvcType: 'PLVC with Voice',
          kycMethod: 'Physical KYC',
          documents: {},
          fullLengthPhoto: null,
          fullName: 'Rajesh Kumar Sharma',
          fatherName: 'Suresh Kumar Sharma',
          communicationAddress: '401, Sunrise Apartments, MG Road, Bangalore',
          permanentAddress: '401, Sunrise Apartments, MG Road, Bangalore',
          dateOfBirth: '15/01/1995',
          occupation: 'Software Engineer',
          annualIncome: '₹12,00,000',
          fatherDOB: '15/03/1960',
          fatherVitalStatus: 'Alive',
          fatherAsNominee: 'No',
          motherFullName: 'Sunita Devi Sharma',
          motherDOB: '20/06/1965',
          motherVitalStatus: 'Alive',
          motherAsNominee: 'No',
          nominees: [],
        });
        setCurrentStep(28);
        setExampleText('Priya Sharma, 20/08/1992, Spouse, 100%, 9876543210');
        break;

      case 29: // Height and Weight confirmation
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29, female',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'What are you hoping to achieve with this insurance?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: "Save for Kid's Education",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '5',
            content: "From your full-length photograph, I have analysed the height and weight, are these measurements correct?",
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData((prev) => ({
          ...prev,
          height: '175 cm',
          weight: '70 kg',
        }));
        setShowHeightWeightReview(true);
        setExampleText('');
        break;

      case 30: // Weight change question
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29, female',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'What are you hoping to achieve with this insurance?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: "Save for Kid's Education",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '5',
            content: "From your full-length photograph, I have analysed the height and weight, are these measurements correct?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '6',
            content: "Confirmed",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '7',
            content: "Have you gained or lost more than 5kgs in the last 6 months?",
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData((prev) => ({
          ...prev,
          height: '175 cm',
          weight: '70 kg',
        }));
        setShowHeightWeightReview(false);
        setExampleText('');
        break;

      case 31: // Health conditions question
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29, female',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'What are you hoping to achieve with this insurance?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: "Save for Kid's Education",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '5',
            content: "From your full-length photograph, I have analysed the height and weight, are these measurements correct?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '6',
            content: "Confirmed",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '7',
            content: "Have you gained or lost more than 5kgs in the last 6 months?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '8',
            content: "No",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '9',
            content: "Do you have any existing health conditions? Select any that apply.",
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData((prev) => ({
          ...prev,
          height: '175 cm',
          weight: '70 kg',
          weightChange: 'No',
        }));
        setSelectedHealthConditions([]);
        setShowHeightWeightReview(false);
        setExampleText('');
        break;

      case 32: // Substance consumption question
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29, female',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'What are you hoping to achieve with this insurance?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: "Save for Kid's Education",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '5',
            content: "From your full-length photograph, I have analysed the height and weight, are these measurements correct?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '6',
            content: "Confirmed",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '7',
            content: "Have you gained or lost more than 5kgs in the last 6 months?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '8',
            content: "No",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '9',
            content: "Do you have any existing health conditions? Select any that apply.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '10',
            content: "I don't have any disorders",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '11',
            content: "Do you consume any of the following substances? Select any that apply.",
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData((prev) => ({
          ...prev,
          height: '175 cm',
          weight: '70 kg',
          weightChange: 'No',
          healthConditions: ["I don't have any disorders"],
        }));
        setSelectedHealthConditions([]);
        setSelectedSubstances([]);
        setShowHeightWeightReview(false);
        setExampleText('');
        break;

      case 33: // Asset declaration question
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29, female',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'What are you hoping to achieve with this insurance?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: "Save for Kid's Education",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '5',
            content: "From your full-length photograph, I have analysed the height and weight, are these measurements correct?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '6',
            content: "Confirmed",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '7',
            content: "Have you gained or lost more than 5kgs in the last 6 months?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '8',
            content: "No",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '9',
            content: "Do you have any existing health conditions? Select any that apply.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '10',
            content: "I don't have any disorders",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '11',
            content: "Do you consume any of the following substances? Select any that apply.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '12',
            content: "I don't consume any substances",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '13',
            content: "Based on your annual income, I've pre-filled some assets you might own. Please review and edit as needed to indicate which of the following assets or products you already have.",
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData((prev) => ({
          ...prev,
          height: '175 cm',
          weight: '70 kg',
          weightChange: 'No',
          healthConditions: ["I don't have any disorders"],
          substanceConsumption: ["I don't consume any substances"],
        }));
        setSelectedHealthConditions([]);
        setSelectedSubstances([]);
        // Auto-suggest assets based on annual income
        const autoAssets = getAutoSuggestedAssets(userData.annualIncome);
        setSelectedAssets(autoAssets);
        setShowHeightWeightReview(false);
        setExampleText('');
        break;

      case 34: // Bank details step
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29 & Male',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'What are you hoping to achieve with this insurance?',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: 'Financial Security for my Family',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '5',
            content: "From your full-length photograph, I have analysed the height and weight, are these measurements correct?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '6',
            content: "Confirmed",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '7',
            content: "Have you gained or lost more than 5kgs in the last 6 months?",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '8',
            content: "No",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '9',
            content: "Do you have any existing health conditions? Select any that apply.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '10',
            content: "I don't have any disorders",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '11',
            content: "Do you consume any of the following substances? Select any that apply.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '12',
            content: "I don't consume any substances",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '13',
            content: "Based on your annual income, I've pre-filled some assets you might own. Please review and edit as needed to indicate which of the following assets or products you already have.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '14',
            content: "None",
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '15',
            content: "Let's get your bank details now. Do you have a cheque handy to auto-fill information or would you like to fill things manually?",
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData((prev) => ({
          ...prev,
          height: '175 cm',
          weight: '70 kg',
          weightChange: 'No',
          healthConditions: ["I don't have any disorders"],
          substanceConsumption: ["I don't consume any substances"],
          assets: [],
        }));
        setSelectedHealthConditions([]);
        setSelectedSubstances([]);
        setSelectedAssets([]);
        setBankDetailsMethod(null);
        setShowHeightWeightReview(false);
        setExampleText('');
        break;

      case 35: // Declarations step
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29 & Male',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'Just a few declarations to complete your application.',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData((prev) => ({
          ...prev,
          age: '29',
          gender: 'Male',
          bankName: 'HDFC Bank',
          accountNumber: '50100123456789',
          ifscCode: 'HDFC0001234',
          branchName: 'MG Road Bangalore',
        }));
        setDeclarations({
          electronicDocuments: null,
          legalProceedings: null,
          politicalAssociation: null,
          physicalCopy: null,
          pendingInsurance: null,
          fatcaTaxResident: null,
        });
        setExampleText('');
        break;

      case 36: // Payment method selection step
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29 & Male',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'Just a few declarations to complete your application.',
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: 'Declarations submitted',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '5',
            content: 'Please select your preferred payment method to complete the purchase.',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData((prev) => ({
          ...prev,
          age: '29',
          gender: 'Male',
          deathBenefitMultiple: '5',
        }));
        setPaymentMethod(null);
        setRenewalMode(null);
        setExampleText('');
        break;

      case 37: // Declaration screen (terms agreement)
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29 & Male',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'Payment: Credit Card, Renewal: Annual',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: 'Perfect! Your payment method has been set to Credit Card and renewal method to Annual. Now, please review and acknowledge the following declarations.',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData((prev) => ({
          ...prev,
          age: '29',
          gender: 'Male',
        }));
        setPaymentMethod('Credit Card');
        setRenewalMode('Annual');
        setDeclarationPlace(null);
        setCurrentStep(37);
        setExampleText('');
        break;

      case 38: // OTP verification screen
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29 & Male',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'Terms accepted and place entered.',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: 'Great! Now please verify your identity by entering the OTP sent to your registered mobile number.',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData((prev) => ({
          ...prev,
          age: '29',
          gender: 'Male',
        }));
        setDeclarationPlace('Mumbai');
        setOtpVerified(false);
        setCurrentStep(38);
        setExampleText('');
        break;

      case 39: // SCR screen
        setMessages([
          {
            id: '1',
            content: "To personalise your plan, I'll need your age and gender.",
            sender: 'bot',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: '29 & Male',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '3',
            content: 'OTP Verified Successfully',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: '4',
            content: 'Please answer these questions about your interaction with the agent.',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setUserData((prev) => ({
          ...prev,
          age: '29',
          gender: 'Male',
        }));
        setOtpVerified(true);
        setCurrentStep(39);
        setExampleText('');
        break;

      default:
        break;
    }
    
    // Update current step for button highlighting
    setCurrentStep(step);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Cleanup audio monitoring when component unmounts or isListening changes
  useEffect(() => {
    if (isListening) {
      startAudioMonitoring();
    } else {
      stopAudioMonitoring();
    }
    
    return () => {
      stopAudioMonitoring();
    };
  }, [isListening]);

  // Keep refs in sync with state
  React.useEffect(() => {
    inputValueRef.current = inputValue;
  }, [inputValue]);

  React.useEffect(() => {
    interimTranscriptRef.current = interimTranscript;
  }, [interimTranscript]);

  // Auto-send when autoSendText is set (from voice recording release)
  React.useEffect(() => {
    if (autoSendText && autoSendText.trim()) {
      console.log('🚀 Auto-send effect triggered with text:', autoSendText);
      console.log('📝 Current inputValue:', inputValue);
      console.log('📝 Current inputValueRef:', inputValueRef.current);
      
      // Call handleSendMessage with the captured text
      console.log('📤 Calling handleSendMessage with:', autoSendText);
      handleSendMessage(autoSendText);
      setAutoSendText(null); // Reset
    } else if (autoSendText) {
      console.log('⚠️ Auto-send text is empty, not sending');
      setAutoSendText(null); // Reset anyway
    }
  }, [autoSendText]);

  // Initialize speech recognition
  React.useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      setIsVoiceSupported(true);
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        console.log('Speech recognition started');
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        let interim = '';
        let final = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            final += transcript;
          } else {
            interim += transcript;
          }
        }

        console.log('Voice recognition result - Final:', final, 'Interim:', interim);

        if (final) {
          setInputValue((prev) => {
            const newValue = prev + (prev ? ' ' : '') + final;
            console.log('Updated inputValue:', newValue);
            // IMPORTANT: Also update the ref immediately for onend to use
            inputValueRef.current = newValue;
            return newValue;
          });
          setInterimTranscript('');
          // Reset silence timeout when we get speech
          if (silenceTimeoutRef.current) {
            window.clearTimeout(silenceTimeoutRef.current);
            silenceTimeoutRef.current = null;
          }
        } else {
          setInterimTranscript(interim);
          // Also update interim ref immediately
          interimTranscriptRef.current = interim;
        }
      };

      recognition.onerror = (event: any) => {
        console.log('Speech recognition error:', event.error);
        
        // Don't show errors for aborted sessions (user stopped intentionally)
        if (event.error === 'aborted' || isManualStopRef.current) {
          return;
        }
        
        // Handle specific errors
        if (event.error === 'no-speech') {
          // Automatically restart after brief silence
          if (!isManualStopRef.current && isListening) {
            restartTimeoutRef.current = window.setTimeout(() => {
              try {
                recognition.start();
              } catch (e) {
                console.log('Could not restart after no-speech');
              }
            }, 100);
          }
        } else if (event.error === 'audio-capture') {
          console.error('Microphone access error');
          setIsListening(false);
        } else if (event.error === 'not-allowed') {
          console.error('Microphone permission denied');
          setIsListening(false);
        } else {
          // For other errors, try to restart
          if (!isManualStopRef.current && isListening) {
            restartTimeoutRef.current = window.setTimeout(() => {
              try {
                recognition.start();
              } catch (e) {
                console.log('Could not restart after error');
              }
            }, 100);
          }
        }
      };

      recognition.onend = () => {
        console.log('Speech recognition ended, shouldAutoSend:', shouldAutoSendRef.current);
        
        // Check if we should auto-send the captured text
        if (shouldAutoSendRef.current) {
          shouldAutoSendRef.current = false; // Reset flag
          
          // Get the captured text from refs
          const textFromInput = inputValueRef.current.trim();
          const textFromInterim = interimTranscriptRef.current.trim();
          const finalText = textFromInput || textFromInterim;
          
          console.log('Auto-send triggered with text:', finalText);
          
          if (finalText) {
            // Trigger auto-send via state change
            setAutoSendText(finalText);
          }
          
          // Clean up UI state (don't clear inputValue yet - let handleSendMessage do it)
          setInterimTranscript('');
          setIsListening(false);
          stopAudioMonitoring();
          return;
        }
        
        // If we didn't manually stop, restart recognition
        if (!isManualStopRef.current && isListening) {
          try {
            recognition.start();
          } catch (e) {
            console.log('Recognition already started or error:', e);
          }
        } else {
          setIsListening(false);
          setInterimTranscript('');
        }
      };

      recognitionRef.current = recognition;
    } else {
      console.warn('Speech recognition not supported in this environment');
      setIsVoiceSupported(false);
    }

    return () => {
      if (recognitionRef.current) {
        isManualStopRef.current = true;
        try {
          recognitionRef.current.stop();
        } catch (e) {
          // Ignore errors on cleanup
        }
      }
      if (restartTimeoutRef.current) {
        window.clearTimeout(restartTimeoutRef.current);
      }
      if (silenceTimeoutRef.current) {
        window.clearTimeout(silenceTimeoutRef.current);
      }
    };
  }, []);

  // Auto-populate assets when asset declaration question appears
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage?.content === "Based on your annual income, I've pre-filled some assets you might own. Please review and edit as needed to indicate which of the following assets or products you already have." && 
        lastMessage?.sender === 'bot') {
      // Auto-suggest assets based on annual income (only if not already populated)
      const autoAssets = getAutoSuggestedAssets(userData.annualIncome);
      if (autoAssets.length > 0 && selectedAssets.length === 0) {
        setSelectedAssets(autoAssets);
      }
    }
  }, [messages]);

  // Removed old handleMicClick - only press-and-hold voice recording is supported

  const startAudioMonitoring = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      const source = audioContextRef.current.createMediaStreamSource(stream);
      source.connect(analyserRef.current);
      analyserRef.current.fftSize = 512;
      analyserRef.current.smoothingTimeConstant = 0.8;
      
      const bufferLength = analyserRef.current.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      
      const updateAudioLevel = () => {
        if (!analyserRef.current) return;
        
        analyserRef.current.getByteFrequencyData(dataArray);
        
        // Focus on the speech frequency range (85Hz - 255Hz for male, 165Hz - 255Hz for female)
        // Using frequencies from index 10 to 80 (roughly 0-4000Hz which covers human voice)
        const voiceData = dataArray.slice(10, 80);
        const average = voiceData.reduce((a, b) => a + b) / voiceData.length;
        
        // Normalize and amplify for better visual response
        let normalizedLevel = (average / 255) * 2.5;
        normalizedLevel = Math.min(1, normalizedLevel);
        
        setAudioLevel(normalizedLevel);
        
        if (isListening) {
          animationFrameRef.current = requestAnimationFrame(updateAudioLevel);
        }
      };
      
      updateAudioLevel();
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };
  
  const stopAudioMonitoring = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    analyserRef.current = null;
    setAudioLevel(0);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  };

  const handleClose = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    stopAudioMonitoring();
    setIsListening(false);
    setInputValue('');
    setInterimTranscript('');
  };

  // Auto-timeout for listening mode (30 seconds)
  React.useEffect(() => {
    let timeoutId: number;
    if (isListening && !isPressHoldRecording) {
      timeoutId = window.setTimeout(() => {
        console.log('Listening timeout - auto-closing');
        handleClose();
      }, 30000); // 30 second timeout
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isListening, isPressHoldRecording]);

  // Press-and-hold voice recording handlers
  const pressHoldTimerRef = React.useRef<number | null>(null);
  const pressHoldActivatedRef = React.useRef(false);

  const handleMicPressStart = (e: React.MouseEvent | React.TouchEvent) => {
    console.log('Press start');
    e.preventDefault(); // Prevent default to avoid conflicts
    pressHoldActivatedRef.current = false;
    
    // Trigger haptic feedback on press start
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
    
    // Add global event listeners for release
    const handleGlobalMouseUp = (e: MouseEvent) => {
      console.log('Global mouse up detected', e);
      handleMicPressEnd();
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
    
    const handleGlobalTouchEnd = (e: TouchEvent) => {
      console.log('Global touch end detected', e);
      handleMicPressEnd();
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
    
    console.log('Adding global listeners for mouse/touch release');
    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('touchend', handleGlobalTouchEnd);
    
    // Start press-and-hold timer
    pressHoldTimerRef.current = window.setTimeout(() => {
      console.log('Press-hold activated');
      pressHoldActivatedRef.current = true;
      isPressHoldRecordingRef.current = true; // Set ref
      setIsPressHoldRecording(true);
      console.log('isPressHoldRecordingRef set to:', isPressHoldRecordingRef.current);
      
      // Clear any existing input before starting new recording
      setInputValue('');
      setInterimTranscript('');
      
      // Trigger stronger haptic feedback when entering recording mode
      if (navigator.vibrate) {
        navigator.vibrate(30);
      }
      
      // Start voice recognition
      if (recognitionRef.current) {
        isManualStopRef.current = false;
        if (!isListening) {
          try {
            console.log('Starting voice recognition for press-hold');
            recognitionRef.current.start();
            setIsListening(true);
            startAudioMonitoring();
          } catch (e) {
            console.log('Error starting recognition:', e);
          }
        } else {
          console.log('Voice recognition already active - restarting');
          // Stop and restart to ensure clean state
          try {
            recognitionRef.current.stop();
            setTimeout(() => {
              try {
                recognitionRef.current.start();
                setIsListening(true);
                startAudioMonitoring();
              } catch (e) {
                console.log('Error restarting recognition:', e);
              }
            }, 100);
          } catch (e) {
            console.log('Error stopping for restart:', e);
          }
        }
      } else {
        console.log('Recognition ref not available');
      }
    }, 300); // 300ms delay before activating press-and-hold mode
  };

  const handleMicPressEnd = () => {
    console.log('Press end, pressHoldActivated:', pressHoldActivatedRef.current, 'isPressHoldRecordingRef:', isPressHoldRecordingRef.current);
    
    // Clear the press-and-hold timer if it hasn't fired yet
    if (pressHoldTimerRef.current) {
      window.clearTimeout(pressHoldTimerRef.current);
      pressHoldTimerRef.current = null;
    }

    // If we're in press-and-hold recording mode, stop recording and process
    if (isPressHoldRecordingRef.current) {
      console.log('Stopping press-hold recording');
      isPressHoldRecordingRef.current = false; // Clear ref immediately
      setIsPressHoldRecording(false);
      
      // Set flag to auto-send when recognition ends
      shouldAutoSendRef.current = true;
      
      // Stop voice recognition (this will trigger onend which will auto-send)
      if (recognitionRef.current && isListening) {
        isManualStopRef.current = true;
        try {
          console.log('Stopping recognition, will auto-send on end');
          recognitionRef.current.stop();
        } catch (e) {
          console.log('Error stopping recognition:', e);
          // If stop fails, reset flag and clean up
          shouldAutoSendRef.current = false;
          setIsListening(false);
          setInterimTranscript('');
          stopAudioMonitoring();
        }
      } else {
        // No recognition running, just clean up
        shouldAutoSendRef.current = false;
        setIsListening(false);
        setInterimTranscript('');
        stopAudioMonitoring();
      }
    }
  };

  const handleMicButtonClick = () => {
    console.log('Click fired, pressHoldActivated:', pressHoldActivatedRef.current, 'isPressHoldRecording:', isPressHoldRecording);
    
    // Only handle click if press-and-hold wasn't activated
    if (!pressHoldActivatedRef.current && !isPressHoldRecording) {
      console.log('Handling click - inputValue:', inputValue);
      if (inputValue.trim()) {
        handleSendMessage();
      }
      // Removed old handleMicClick() - only press-and-hold is supported now
    } else {
      console.log('Ignoring click because press-hold was activated');
    }
    
    // Reset flag after handling
    setTimeout(() => {
      pressHoldActivatedRef.current = false;
    }, 100);
  };

  const handleVoiceRecordingCancel = () => {
    setIsPressHoldRecording(false);
    
    // Stop voice recognition without sending
    if (recognitionRef.current && isListening) {
      isManualStopRef.current = true;
      try {
        recognitionRef.current.stop();
      } catch (e) {
        console.log('Error stopping recognition:', e);
      }
      setIsListening(false);
      setInputValue('');
      setInterimTranscript('');
      stopAudioMonitoring();
    }
  };

  // Client-side fallback parser when Supabase Edge Function is unavailable
  const parseWithClientSideFallback = (userInput: string, step: number): any => {
    console.log('Using client-side fallback parser for step:', step);
    
    switch (step) {
      case 1: { // Age and gender — regex fallback when OpenAI is unavailable
        const lower = userInput.toLowerCase();
        const ageMatch = userInput.match(/\b(\d{1,3})\b/);
        const age = ageMatch ? parseInt(ageMatch[1]) : null;
        let gender: string | null = null;
        if (/\b(female|woman|girl|f\b)/i.test(lower)) gender = 'Female';
        else if (/\b(male|man|boy|m\b)/i.test(lower)) gender = 'Male';
        return { age: (age && age > 0 && age < 120) ? age : null, gender };
      }

      case 3: { // Goal amount and timeframe — regex fallback when OpenAI is unavailable
        const lower = userInput.toLowerCase();
        // Extract amount — handles crore/lakh/lac/lakhs/cr/k patterns
        let amount: string | null = null;
        const croreMatch = lower.match(/(\d+(?:\.\d+)?)\s*(?:cr(?:ore)?s?)/);
        const lakhMatch = lower.match(/(\d+(?:\.\d+)?)\s*(?:lakh(?:s)?|lac(?:s)?)/);
        const plainNumMatch = userInput.match(/\b(\d{4,})\b/); // bare number >= 4 digits e.g. 100000
        if (croreMatch) amount = `${croreMatch[1]} crore`;
        else if (lakhMatch) amount = `${lakhMatch[1]} lakhs`;
        else if (plainNumMatch) amount = plainNumMatch[1];

        // Extract timeframe — handles "15 years", "15 yrs", "in 15", bare number 1-50
        let timeframe: string | null = null;
        const yearsMatch = lower.match(/(\d+)\s*(?:years?|yrs?)/);
        const inYearsMatch = lower.match(/(?:in|within|over)\s+(\d+)/);
        const decadeMatch = lower.match(/\ba\s+decade\b/);
        if (yearsMatch) timeframe = `${yearsMatch[1]} years`;
        else if (inYearsMatch) timeframe = `${inYearsMatch[1]} years`;
        else if (decadeMatch) timeframe = '10 years';

        return { amount, timeframe };
      }
      case 18: // Professional details (employer, designation, occupation)
        return parseProfessionalDetails(userInput);
      
      case 22: // Father's DOB and vital status only
        return parseFatherDOBAndStatus(userInput);
      
      case 23: // Yes/No responses
        return parseYesNoResponse(userInput);
      
      case 24: // Father or Mother's full name, DOB and vital status
        return parseParentFullDetails(userInput);
      
      case 25: // Age at death and cause of death
        return parseAgeAtDeathAndCause(userInput);
      
      case 26: // Nominee details
        return parseNomineeDetails(userInput);
      
      case 27: // Nominee percentage, DOB, contact
        return parseNomineePercentageDetails(userInput);
      
      case 31: // Illness name and diagnosis date
        return parseIllnessDetails(userInput);
      
      case 32: // Treatment and current status
        return parseTreatmentDetails(userInput);
      
      case 34: // Bank details
        return parseBankDetails(userInput);
      
      default:
        return null;
    }
  };

  // Parse Yes/No responses
  const parseYesNoResponse = (input: string): any => {
    const lowerInput = input.toLowerCase().trim();
    
    if (lowerInput.includes('yes') || lowerInput.includes('yeah') || 
        lowerInput.includes('sure') || lowerInput.includes('ok') || 
        lowerInput === 'y') {
      return { wantsNominee: true };
    } else if (lowerInput.includes('no') || lowerInput.includes('nah') || 
               lowerInput.includes('nope') || lowerInput === 'n') {
      return { wantsNominee: false };
    }
    
    return null;
  };

  // Parse illness details (name and diagnosis date)
  const parseIllnessDetails = (input: string): any => {
    const dobRegex = /(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/;
    const dobMatch = input.match(dobRegex);
    
    if (!dobMatch) return null;
    
    const diagnosedDate = `${dobMatch[1].padStart(2, '0')}/${dobMatch[2].padStart(2, '0')}/${dobMatch[3]}`;
    
    // Extract illness name - everything before the date
    let exactName = input.replace(dobRegex, '').trim();
    // Remove common prefixes
    exactName = exactName.replace(/^(i have|i had|diagnosed with|suffering from|condition:|illness:)/i, '').trim();
    // Remove trailing commas and "on"
    exactName = exactName.replace(/,?\s*(on|in|at|diagnosed)\s*$/i, '').trim();
    
    return {
      exactName: exactName || null,
      diagnosedDate
    };
  };

  // Parse treatment details
  const parseTreatmentDetails = (input: string): any => {
    const lowerInput = input.toLowerCase();
    
    // Extract treatment
    let treatment = input;
    const treatmentPrefixes = /^(treatment:|i am taking|taking|medication:|currently on|on)/i;
    treatment = treatment.replace(treatmentPrefixes, '').trim();
    
    // Extract current status
    let currentStatus = 'ongoing';
    if (lowerInput.includes('cured') || lowerInput.includes('recovered') || lowerInput.includes('healed')) {
      currentStatus = 'cured';
      treatment = treatment.replace(/(,?\s*(cured|recovered|healed|now cured|now recovered))$/i, '').trim();
    } else if (lowerInput.includes('ongoing') || lowerInput.includes('continuing') || lowerInput.includes('still treating')) {
      currentStatus = 'ongoing';
      treatment = treatment.replace(/(,?\s*(ongoing|continuing|still treating|under treatment))$/i, '').trim();
    }
    
    return {
      treatment: treatment || null,
      currentStatus
    };
  };

  // Parse bank details
  const parseBankDetails = (input: string): any => {
    // Extract account number (9-18 digits)
    const accountRegex = /(?:account|acc|a\/c)?\s*(?:number|no|#)?\s*:?\s*(\d{9,18})/i;
    const accountMatch = input.match(accountRegex);
    
    // Extract IFSC code
    const ifscRegex = /(?:ifsc|ifsc code)?\s*:?\s*([A-Z]{4}0[A-Z0-9]{6})/i;
    const ifscMatch = input.match(ifscRegex);
    
    // Extract bank name
    const bankNameRegex = /(?:bank|bank name)?\s*:?\s*((?:HDFC|ICICI|SBI|Axis|Kotak|PNB|Bank of Baroda|Canara|Union|IndusInd|Yes|IDBI|Federal|RBL|Standard Chartered|Citi|HSBC)[^\d,]*)/i;
    const bankNameMatch = input.match(bankNameRegex);
    
    // Extract branch name - look for "branch" keyword or extract from IFSC or remaining text
    let branchName = null;
    const branchRegex = /(?:branch|branch name)?\s*:?\s*([A-Za-z\s]+?)(?:,|$|\d)/i;
    const branchMatch = input.match(branchRegex);
    if (branchMatch) {
      branchName = branchMatch[1].trim();
    }
    
    if (!accountMatch || !ifscMatch || !bankNameMatch) return null;
    
    return {
      accountNumber: accountMatch[1],
      ifscCode: ifscMatch[1].toUpperCase(),
      bankName: bankNameMatch[1].trim(),
      branchName: branchName || 'Main Branch'
    };
  };

  // Parse professional details (employer, designation, occupation)
  const parseProfessionalDetails = (input: string): any => {
    // Expected format: "TCS, Software Engineer, Salaried" or "Self-employed, Interior Designing, Business"
    
    // Split by comma
    const parts = input.split(',').map(p => p.trim());
    
    if (parts.length < 2) return null;
    
    // First part is employer name or self-employed
    const employerName = parts[0];
    
    // Second part is designation
    const designation = parts[1] || '';
    
    // Third part is occupation type (Salaried, Business, Self-Employed, etc.)
    let occupation = parts[2] || 'Salaried';
    
    // Normalize occupation
    const lowerOccupation = occupation.toLowerCase();
    if (lowerOccupation.includes('salary') || lowerOccupation.includes('salaried') || lowerOccupation.includes('employed')) {
      occupation = 'Salaried';
    } else if (lowerOccupation.includes('business') || lowerOccupation.includes('owner')) {
      occupation = 'Business';
    } else if (lowerOccupation.includes('self') || lowerOccupation.includes('freelance')) {
      occupation = 'Self-Employed';
    }
    
    // Infer industry and job duties based on designation
    const lowerDesignation = designation.toLowerCase();
    let industry = 'General';
    let jobDuties = 'Performing job-related duties';
    let hazardousEnvironment = 'No';
    
    console.log('Parsing professional details:', { employerName, designation, lowerDesignation, occupation });
    
    // UX Designer (specific case)
    if (lowerDesignation.includes('ux designer') || (lowerDesignation.includes('ux') && lowerDesignation.includes('design'))) {
      industry = 'Information Technology';
      jobDuties = 'research user needs and design intuitive, user-centered experiences that solve real problems and meet business goals.';
      console.log('Matched UX Designer case');
    }
    // IT/Software
    else if (lowerDesignation.includes('software') || lowerDesignation.includes('developer') || 
        lowerDesignation.includes('engineer') && (lowerDesignation.includes('software') || lowerDesignation.includes('it')) ||
        lowerDesignation.includes('programmer') || lowerDesignation.includes('tech lead')) {
      industry = 'Information Technology';
      jobDuties = 'Designing and developing software applications, code reviews, mentoring junior developers';
    }
    // Support/Customer Service
    else if (lowerDesignation.includes('support') || lowerDesignation.includes('customer service')) {
      industry = 'Information Technology';
      jobDuties = 'Providing technical support, troubleshooting issues, assisting customers';
    }
    // Engineering (non-IT)
    else if (lowerDesignation.includes('engineer') && !lowerDesignation.includes('software')) {
      industry = 'Engineering';
      jobDuties = 'Engineering design, project planning, technical analysis';
    }
    // Finance/Banking
    else if (lowerDesignation.includes('accountant') || lowerDesignation.includes('finance') || 
             lowerDesignation.includes('banker') || lowerDesignation.includes('analyst')) {
      industry = 'Finance & Banking';
      jobDuties = 'Financial analysis, reporting, account management';
    }
    // Healthcare
    else if (lowerDesignation.includes('doctor') || lowerDesignation.includes('nurse') || 
             lowerDesignation.includes('physician') || lowerDesignation.includes('medical')) {
      industry = 'Healthcare';
      jobDuties = 'Patient care, medical diagnosis, treatment planning';
    }
    // Education
    else if (lowerDesignation.includes('teacher') || lowerDesignation.includes('professor') || 
             lowerDesignation.includes('educator') || lowerDesignation.includes('instructor')) {
      industry = 'Education';
      jobDuties = 'Teaching, curriculum development, student assessment';
    }
    // Design/Creative
    else if (lowerDesignation.includes('design') || lowerDesignation.includes('creative') || 
             lowerDesignation.includes('artist')) {
      industry = 'Design & Creative Services';
      jobDuties = 'Creative design, client presentations, project execution';
    }
    // Sales/Marketing
    else if (lowerDesignation.includes('sales') || lowerDesignation.includes('marketing') || 
             lowerDesignation.includes('business development')) {
      industry = 'Sales & Marketing';
      jobDuties = 'Client acquisition, market research, sales strategy';
    }
    // Construction/Manufacturing (potentially hazardous)
    else if (lowerDesignation.includes('construction') || lowerDesignation.includes('factory') || 
             lowerDesignation.includes('plant') || lowerDesignation.includes('mining')) {
      industry = 'Construction & Manufacturing';
      jobDuties = 'Site management, production oversight, quality control';
      hazardousEnvironment = 'Yes';
    }
    
    const result = {
      employerName,
      designation,
      occupation,
      industry,
      jobDuties,
      hazardousEnvironment
    };
    
    console.log('Professional details parsed result:', result);
    
    return result;
  };

  // Parse father's DOB and vital status (no name)
  const parseFatherDOBAndStatus = (input: string): any => {
    const dobRegex = /(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/;
    const dobMatch = input.match(dobRegex);
    
    if (!dobMatch) return null;
    
    const dateOfBirth = `${dobMatch[1].padStart(2, '0')}/${dobMatch[2].padStart(2, '0')}/${dobMatch[3]}`;
    
    // Check vital status
    const lowerInput = input.toLowerCase();
    let vitalStatus = 'alive'; // default
    
    if (lowerInput.includes('deceased') || lowerInput.includes('passed away') || 
        lowerInput.includes('dead') || lowerInput.includes('no more') ||
        lowerInput.includes('died') || lowerInput.includes('not alive')) {
      vitalStatus = 'deceased';
    } else if (lowerInput.includes('alive') || lowerInput.includes('living') || 
               lowerInput.includes('still here') || lowerInput.includes('yes')) {
      vitalStatus = 'alive';
    }
    
    return { dateOfBirth, vitalStatus };
  };

  // Parse parent's full details (name, DOB, vital status)
  const parseParentFullDetails = (input: string): any => {
    const dobRegex = /(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/;
    const dobMatch = input.match(dobRegex);
    
    if (!dobMatch) return null;
    
    const dateOfBirth = `${dobMatch[1].padStart(2, '0')}/${dobMatch[2].padStart(2, '0')}/${dobMatch[3]}`;
    
    // Extract name - look for patterns like "father/mother is Name" or just the name before DOB
    let name = null;
    const namePatterns = [
      /(?:father|mother|dad|mom|his name|her name)\s+(?:is|was|:)?\s*([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/i,
      /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)/  // Match capitalized names
    ];
    
    for (const pattern of namePatterns) {
      const nameMatch = input.match(pattern);
      if (nameMatch && nameMatch[1]) {
        name = nameMatch[1].trim();
        break;
      }
    }
    
    // Check vital status
    const lowerInput = input.toLowerCase();
    let vitalStatus = 'alive'; // default
    
    if (lowerInput.includes('deceased') || lowerInput.includes('passed away') || 
        lowerInput.includes('dead') || lowerInput.includes('no more') ||
        lowerInput.includes('died') || lowerInput.includes('not alive')) {
      vitalStatus = 'deceased';
    } else if (lowerInput.includes('alive') || lowerInput.includes('living') || 
               lowerInput.includes('still here')) {
      vitalStatus = 'alive';
    }
    
    return { name, dateOfBirth, vitalStatus };
  };

  // Parse age at death and cause of death
  const parseAgeAtDeathAndCause = (input: string): any => {
    const lowerInput = input.toLowerCase();
    
    // Try to extract age (patterns like "65", "was 65", "he was 65", etc.)
    const agePatterns = [
      /(?:was|age|aged|at)\s*(\d{1,3})/i,
      /(\d{1,3})\s*(?:years|year|yrs|yr)/i,
      /^(\d{1,3})/,  // Just a number at the start
    ];
    
    let ageAtDeath = null;
    for (const pattern of agePatterns) {
      const ageMatch = input.match(pattern);
      if (ageMatch && ageMatch[1]) {
        const age = parseInt(ageMatch[1]);
        if (age > 0 && age < 150) {  // Reasonable age range
          ageAtDeath = ageMatch[1];
          break;
        }
      }
    }
    
    // Extract cause of death - everything after age, or after common separators
    let causeOfDeath = null;
    if (ageAtDeath) {
      // Remove the age part and extract the rest as cause
      const ageRegex = new RegExp(`(?:was|age|aged|at)?\\s*${ageAtDeath}\\s*(?:years|year|yrs|yr)?[,\\s]*`, 'i');
      causeOfDeath = input.replace(ageRegex, '').trim();
    } else {
      // If no age found, try to extract cause from common patterns
      const causePatterns = [
        /(?:cause|due to|from|of)\s*:?\s*(.+)/i,
        /,\s*(.+)/,  // After a comma
      ];
      
      for (const pattern of causePatterns) {
        const causeMatch = input.match(pattern);
        if (causeMatch && causeMatch[1]) {
          causeOfDeath = causeMatch[1].trim();
          break;
        }
      }
    }
    
    // Clean up cause of death
    if (causeOfDeath) {
      causeOfDeath = causeOfDeath.replace(/^(and|,|\.|;)\s*/i, '').trim();
    }
    
    return { ageAtDeath, causeOfDeath };
  };

  // Parse nominee details (for "Other" nominee)
  const parseNomineeDetails = (input: string): any => {
    const dobRegex = /(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/;
    const dobMatch = input.match(dobRegex);
    
    const percentageRegex = /(\d+)%/;
    const percentageMatch = input.match(percentageRegex);
    
    const phoneRegex = /(\d{10})/;
    const phoneMatch = input.match(phoneRegex);
    
    // Extract name (first capitalized sequence before DOB)
    const nameRegex = /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/;
    const nameMatch = input.match(nameRegex);
    
    // Extract relationship
    const relationshipRegex = /(?:relationship|relation)?\s*:?\s*(spouse|wife|husband|son|daughter|brother|sister|friend|partner)/i;
    const relationshipMatch = input.match(relationshipRegex);
    
    return {
      fullName: nameMatch ? nameMatch[1] : null,
      dateOfBirth: dobMatch ? `${dobMatch[1].padStart(2, '0')}/${dobMatch[2].padStart(2, '0')}/${dobMatch[3]}` : null,
      relationship: relationshipMatch ? relationshipMatch[1].charAt(0).toUpperCase() + relationshipMatch[1].slice(1).toLowerCase() : null,
      percentage: percentageMatch ? parseInt(percentageMatch[1]) : 100,
      contactNumber: phoneMatch ? phoneMatch[1] : null
    };
  };

  // Parse nominee percentage, DOB, contact (for parent nominees)
  const parseNomineePercentageDetails = (input: string): any => {
    const dobRegex = /(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/;
    const dobMatch = input.match(dobRegex);
    
    const percentageRegex = /(\d+)%/;
    const percentageMatch = input.match(percentageRegex);
    
    const phoneRegex = /(\d{10})/;
    const phoneMatch = input.match(phoneRegex);
    
    if (!percentageMatch && !dobMatch && !phoneMatch) return null;
    
    return {
      dateOfBirth: dobMatch ? `${dobMatch[1].padStart(2, '0')}/${dobMatch[2].padStart(2, '0')}/${dobMatch[3]}` : null,
      percentage: percentageMatch ? parseInt(percentageMatch[1]) : null,
      contactNumber: phoneMatch ? phoneMatch[1] : null
    };
  };

  // OpenAI-powered parsing function for natural language inputs
  const parseWithOpenAI = async (userInput: string, step: number): Promise<any> => {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    if (!apiKey) {
      console.warn('⚠️ OpenAI API key not configured, using regex fallback');
      return parseWithClientSideFallback(userInput, step);
    }

    console.log(`🤖 parseWithOpenAI called — step: ${step}, input: "${userInput}"`);

    const stepPrompts: Record<number, string> = {
      1: `You are an intelligent form assistant. Extract the user's age and gender from their free-form message. The user may write naturally without any specific format or punctuation. Examples: "I am 35 years old and I am male", "28 female", "thirty five, male", "35 & Male". Return JSON: {"age": <number or null>, "gender": <"Male"|"Female"|null>}.`,

      18: `You are an intelligent form assistant. Extract professional details from the user's free-form message. The user may write naturally, with or without commas or labels. Examples: "I work at TCS as a Software Engineer", "I'm a salaried employee at Infosys working as a manager", "Self employed doctor at Apollo". Rules: (1) Infer occupation type (Salaried/Self-Employed/Business) from context. (2) Always infer industry from the designation or company name — e.g. "UX Designer" → "Technology", "Doctor at Apollo" → "Healthcare", "CA" → "Finance". (3) Always infer jobDuties from the designation — e.g. "UX Designer" → "Designing user interfaces and experiences", "Software Engineer" → "Software development and engineering". (4) hazardousEnvironment is "Yes" only for jobs like mining, construction, military, firefighting — default to "No". (5) Only use null for employerName or designation if truly absent. Return JSON: {"employerName": "...", "designation": "...", "occupation": "Salaried"|"Self-Employed"|"Business", "industry": "...", "jobDuties": "...", "hazardousEnvironment": "Yes"|"No"}.`,

      22: `You are an intelligent form assistant. Extract a date of birth from the user's free-form message. Accept any format and convert to DD/MM/YYYY. Examples: "15th March 1960", "15/03/1960", "March 15 1960", "DOB is 15-03-1960". Return JSON: {"dateOfBirth": "DD/MM/YYYY" or null}.`,

      23: `You are an intelligent form assistant. Determine whether the user's message expresses a yes or no. Accept any natural affirmation or negation. Return JSON: {"wantsNominee": true|false|null}. true = yes/sure/ok/yeah/affirmative, false = no/nope/nah/negative, null = completely unclear.`,

      24: `You are an intelligent form assistant. Extract a person's full name and date of birth from the user's free-form message. The user may not use commas. Examples: "My father is Ramesh Kumar and his DOB is 15th March 1960", "Ramesh Kumar born 15/03/1960", "father name Ramesh Kumar dob 15-3-1960". Return JSON: {"name": "..." or null, "dateOfBirth": "DD/MM/YYYY" or null}.`,

      25: `You are an intelligent form assistant. Extract age at death and cause of death from the user's free-form message. Examples: "He was 65 heart attack", "died at 70 due to cancer", "65 years old natural causes". Return JSON: {"ageAtDeath": <number or null>, "causeOfDeath": "..." or null}.`,

      26: `You are an intelligent form assistant. Extract nominee details from the user's free-form message. The user may write naturally without commas. Examples: "Priya Sharma born 20th August 1992 she is my spouse her number is 9876543210", "Priya Sharma 20/08/1992 spouse 100% 9876543210". Infer relationship and percentage if mentioned. Return JSON: {"fullName": "...", "dateOfBirth": "DD/MM/YYYY", "relationship": "...", "percentage": <number or null>, "contactNumber": "<10-digit number or null>"}. Use null for missing fields.`,

      27: `You are an intelligent form assistant. Extract share percentage, date of birth, and a 10-digit contact number from the user's free-form message. The user may not use commas. Examples: "100 percent 15/03/1965 9876543210", "50% DOB 20 June 1965 contact 9876543210". Return JSON: {"percentage": <number or null>, "dateOfBirth": "DD/MM/YYYY" or null, "contactNumber": "<10-digit number or null>"}.`,

      31: `You are an intelligent form assistant. Extract the exact illness name and its diagnosis date from the user's free-form message. Examples: "I have asthma diagnosed in January 2020", "Type 2 diabetes found in March 2019", "Asthma 01/01/2020". Convert the date to DD/MM/YYYY. Return JSON: {"exactName": "..." or null, "diagnosedDate": "DD/MM/YYYY" or null}.`,

      32: `You are an intelligent form assistant. Extract current treatment and current health status from the user's free-form message. Examples: "I take a daily inhaler and my condition is well controlled", "on medication condition stable", "no treatment currently feeling fine". Return JSON: {"treatment": "..." or null, "currentStatus": "..." or null}.`,

      3: `You are an intelligent form assistant helping with an Indian insurance onboarding form. Extract two values from the user's message:
1. "amount" — a financial savings target. Accept any Indian format: "1 cr", "1 crore", "50 lakh", "50 lakhs", "1,00,000", "100000", "a crore", "half a crore". Normalise to a readable string like "1 crore" or "50 lakhs".
2. "timeframe" — a time period. Accept: "15", "15 years", "15 yrs", "in 15 years", "within 15 years", "a decade" (=10 years), "in 2 years". Normalise to "<number> years" e.g. "15 years".
Order does not matter — "15 years 1 cr" is valid.
Return ONLY JSON: {"amount": "<normalised string or null>", "timeframe": "<normalised string or null>"}.`,

      34: `You are an intelligent form assistant. Extract bank details from the user's free-form message. The user may write naturally without commas or labels. Examples: "HDFC Bank account 50100123456789 IFSC HDFC0001234 MG Road Bangalore branch", "my bank is SBI account number 12345678 IFSC SBIN0001234 branch Koramangala". Return JSON: {"bankName": "..." or null, "accountNumber": "..." or null, "ifscCode": "..." or null, "branchName": "..." or null}.`,

      23: `You are an intelligent form assistant. Extract the annual income amount from the user's free-form message. The user may write in any format. Examples: "15 lakhs per year", "₹15 lakhs", "around 15", "my income is 15 lakh", "fifteen lakhs". Always return the numeric value in lakhs as a plain number string (e.g. "15"). If they say crore, convert to lakhs (1 crore = 100 lakhs). Return JSON: {"annualIncome": "<number as string>" or null}.`,
    };

    const systemPrompt = stepPrompts[step];
    if (!systemPrompt) {
      return parseWithClientSideFallback(userInput, step);
    }

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userInput },
          ],
          response_format: { type: 'json_object' },
          temperature: 0,
          max_tokens: 250,
        }),
      });

      if (!response.ok) {
        console.error('OpenAI API error:', response.status, response.statusText);
        return parseWithClientSideFallback(userInput, step);
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;
      if (!content) return parseWithClientSideFallback(userInput, step);

      console.log(`🤖 OpenAI parsed step ${step}:`, content);
      return JSON.parse(content);
    } catch (error) {
      console.error('OpenAI parse error:', error);
      return parseWithClientSideFallback(userInput, step);
    }
  };

  const handleSendMessage = async (overrideInput?: string) => {
    const messageText = overrideInput || inputValue;
    if (!messageText.trim()) return;

    // Stop listening and audio monitoring
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      stopAudioMonitoring();
    }

    // Clear example text immediately
    setExampleText('');

    // Add user message (only if not already added by button handler)
    if (!overrideInput) {
      const userMessage: Message = {
        id: generateUniqueId(),
        content: messageText,
        sender: 'user',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
    }
    
    // Show thinking indicator
    setIsThinking(true);
    
    // Parse age and gender from first message
    if (currentStep === 1) {
      // Use OpenAI to understand natural language age & gender input
      const parsed = await parseWithOpenAI(messageText, 1);

      const age = parsed?.age ? String(parsed.age) : null;
      const gender = parsed?.gender || null;

      // Save whatever was understood — update both state and refs
      // Refs update synchronously so subsequent logic in this same call sees the new values
      if (age) {
        setUserData((prev) => ({ ...prev, age }));
        setStep1AgeCaptured(true);
        step1AgeCapturedRef.current = true;
      }
      if (gender) {
        setUserData((prev) => ({ ...prev, gender }));
        setStep1GenderCaptured(true);
        step1GenderCapturedRef.current = true;
      }

      // Resolve using refs (synchronous) + the local parsed values
      // userData is stale within this render, so we use the local variable if just parsed,
      // or userData if it was captured in a *previous* turn (ref will be true)
      const resolvedAge = age || (step1AgeCapturedRef.current && !age ? userData.age : null);
      const resolvedGender = gender || (step1GenderCapturedRef.current && !gender ? userData.gender : null);

      console.log(`📊 Step 1 resolve — age: ${age}, gender: ${gender}, resolvedAge: ${resolvedAge}, resolvedGender: ${resolvedGender}, ageRef: ${step1AgeCapturedRef.current}, genderRef: ${step1GenderCapturedRef.current}`);

      if (!resolvedAge && !resolvedGender) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "I couldn't quite catch your age and gender. Could you please share both? For example: \"28, Male\" or \"I am 35 years old, Female\".",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
        }, 1000);
        return;
      }

      if (resolvedAge && !resolvedGender) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: `Got it, you're ${resolvedAge} years old! And what is your gender?`,
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
        }, 1000);
        return;
      }

      if (!resolvedAge && resolvedGender) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: `Got it, your gender is ${resolvedGender}! And how old are you?`,
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
        }, 1000);
        return;
      }

      // Both resolved — save final values and move on
      setUserData((prev) => ({
        ...prev,
        age: String(resolvedAge),
        gender: resolvedGender,
      }));
      setStep1AgeCaptured(false);
      setStep1GenderCaptured(false);
      step1AgeCapturedRef.current = false;
      step1GenderCapturedRef.current = false;

      // Update step progress
      setCurrentStep(2); // Moving to Goal selection

      // Show edit banner after first step is completed
      setTimeout(() => {
        setShowEditBanner(true);
      }, 1500);

      // Bot response for step 2
      setTimeout(() => {
        setIsThinking(false);
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: 'What are you hoping to achieve with this insurance?',
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 1000);
    }
    // After goal amount is provided (step 3), ask about policy type
    else if (currentStep === 3 || (messages.length >= 5 && messages[messages.length - 1].sender === 'bot' &&
             (messages[messages.length - 1].content.includes('much') ||
              messages[messages.length - 1].content.includes('target') ||
              messages[messages.length - 1].content.includes('goal') ||
              messages[messages.length - 1].content.includes('coverage') ||
              messages[messages.length - 1].content.includes('by when') ||
              messages[messages.length - 1].content.includes('timeframe') ||
              messages[messages.length - 1].content.includes('how many years') ||
              messages[messages.length - 1].content.includes('save by then')))) {
      // Use OpenAI to extract amount and timeframe
      const parsedGoal = await parseWithOpenAI(messageText, 3);

      // Update refs synchronously with whatever was just parsed
      if (parsedGoal?.amount) step3AmountRef.current = parsedGoal.amount;
      if (parsedGoal?.timeframe) step3TimeframeRef.current = parsedGoal.timeframe;

      // Resolve: use just-parsed value OR what was captured in a prior turn (stored in ref)
      const resolvedAmount = step3AmountRef.current;
      const resolvedTimeframe = step3TimeframeRef.current;

      console.log(`📊 Step 3 resolve — amount: ${parsedGoal?.amount}, timeframe: ${parsedGoal?.timeframe}, resolvedAmount: ${resolvedAmount}, resolvedTimeframe: ${resolvedTimeframe}`);

      if (!resolvedAmount && !resolvedTimeframe) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "I didn't quite catch that. Could you share the amount and timeframe? For example: 1 crore in 15 years",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('1 crore in 15 years');
        }, 1000);
        return;
      }

      if (resolvedAmount && !resolvedTimeframe) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: `Got it, ₹${resolvedAmount}. In how many years do you want to achieve this?`,
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('15 years');
        }, 1000);
        return;
      }

      if (!resolvedAmount && resolvedTimeframe) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: `Got it, ${resolvedTimeframe}. What is the amount you want to save by then?`,
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('1 crore');
        }, 1000);
        return;
      }

      // Both resolved — reset refs and proceed
      step3AmountRef.current = null;
      step3TimeframeRef.current = null;

      setUserData((prev) => {
        const p = { ...prev } as any;
        delete p._pendingGoalAmount;
        delete p._pendingGoalTimeframe;
        return { ...p, goalAmount: `${resolvedAmount} in ${resolvedTimeframe}` };
      });

      // Update step progress
      setCurrentStep(4); // Moving to Policy Type

      setExampleText('');

      // Bot response for step 4 - policy type
      setTimeout(() => {
        setIsThinking(false);
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: 'What type of policy are you looking for?',
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 1000);
    }
    // Step 22: Professional details input (employer, designation, occupation)
    else if (currentStep === 22) {
      // Parse professional details from user input
      const parsedDetails = await parseWithOpenAI(messageText, 18);

      // Save whatever was extracted
      if (parsedDetails) {
        setUserData((prev) => ({
          ...prev,
          ...(parsedDetails.employerName && { employerName: parsedDetails.employerName }),
          ...(parsedDetails.designation && { designation: parsedDetails.designation }),
          ...(parsedDetails.occupation && { occupation: parsedDetails.occupation }),
          ...(parsedDetails.industry && { industry: parsedDetails.industry }),
          ...(parsedDetails.jobDuties && { jobDuties: parsedDetails.jobDuties }),
          ...(parsedDetails.hazardousEnvironment && { hazardousEnvironment: parsedDetails.hazardousEnvironment }),
        }));
      }

      const resolvedEmployer = parsedDetails?.employerName || userData.employerName;
      const resolvedDesignation = parsedDetails?.designation || userData.designation;

      if (!resolvedEmployer && !resolvedDesignation) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "I couldn't quite catch that. Could you tell me where you work and what your role is?",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('TCS, Software Engineer, Salaried');
        }, 1000);
        return;
      }

      if (resolvedEmployer && !resolvedDesignation) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: `Got it, you work at ${resolvedEmployer}! What is your designation or job title?`,
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('Software Engineer');
        }, 1000);
        return;
      }

      if (!resolvedEmployer && resolvedDesignation) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: `Got it, you are a ${resolvedDesignation}! Which company or organisation do you work at?`,
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('TCS');
        }, 1000);
        return;
      }

      // Both resolved — merge final values
      const finalDetails = {
        ...parsedDetails,
        employerName: resolvedEmployer,
        designation: resolvedDesignation,
        occupation: parsedDetails?.occupation || userData.occupation,
        industry: parsedDetails?.industry || userData.industry,
        jobDuties: parsedDetails?.jobDuties || userData.jobDuties,
        hazardousEnvironment: parsedDetails?.hazardousEnvironment || userData.hazardousEnvironment,
      };
      parsedDetails && Object.assign(parsedDetails, finalDetails);

      if (!parsedDetails) {
        // Should not happen, but guard
        return;
      }
      
      // Update userData with professional details
      setUserData((prev) => ({
        ...prev,
        employerName: parsedDetails.employerName,
        designation: parsedDetails.designation,
        occupation: parsedDetails.occupation,
        industry: parsedDetails.industry,
        jobDuties: parsedDetails.jobDuties,
        hazardousEnvironment: parsedDetails.hazardousEnvironment,
      }));
      
      // Show professional details card with extracted info
      setTimeout(() => {
        setIsThinking(false);
        const professionalDetailsMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: 'Professional details analyzed',
          sender: 'bot',
          timestamp: new Date(),
          isProfessionalDetailsCard: true,
          professionalData: {
            designation: parsedDetails.designation,
            employerName: parsedDetails.employerName,
            occupation: parsedDetails.occupation,
            industry: parsedDetails.industry,
            jobDuties: parsedDetails.jobDuties,
            hazardousEnvironment: parsedDetails.hazardousEnvironment,
          },
        };
        setMessages((prev) => [...prev, professionalDetailsMessage]);
        setExampleText('');
      }, 1000);
    }
    // Step 22.5: Business card upload step - if user types instead of uploading, skip to annual income
    else if (currentStep === 22.5) {
      setCurrentStep(23);
      
      setTimeout(() => {
        setIsThinking(false);
        const incomeMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: 'No problem! What is your annual income (in lakhs)?',
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, incomeMessage]);
        setExampleText('15');
      }, 1000);
    }
    // Step 23: Annual income input (after professional details confirmation)
    else if (currentStep === 23 && messages[messages.length - 1].content.includes('annual income')) {
      const parsed = await parseWithOpenAI(messageText, 23);
      const annualIncome = parsed?.annualIncome;

      if (!annualIncome) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "I couldn't catch that. Could you share your annual income in lakhs? For example: \"15 lakhs\".",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('₹15 lakhs per year');
        }, 1000);
        return;
      }

      setUserData((prev) => ({
        ...prev,
        annualIncome,
      }));

      setCurrentStep(24);
      
      // Ask for father's details - include name if not already extracted from documents
      const hasFatherName = userData.fatherName && userData.fatherName.trim() !== '';
      
      setTimeout(() => {
        setIsThinking(false);
        const fatherMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: hasFatherName 
            ? "Thank you! Now, please mention your father's date of birth (DD/MM/YYYY)."
            : "Thank you! Now, please mention your father's full name and date of birth (DD/MM/YYYY).",
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, fatherMessage]);
        setExampleText(hasFatherName 
          ? 'His DOB is 15/03/1960'
          : 'My father is Ramesh Kumar, his DOB is 15/03/1960');
      }, 1000);
    }
    // Step 24: Father's DOB (was step 22, now step 24)
    else if (currentStep === 24) {
      // Check if we already have father's name from previous step
      const hasFatherName = userData.fatherName && userData.fatherName.trim() !== '';

      // Use appropriate OpenAI parser based on whether we have the name
      const parsedDetails = await parseWithOpenAI(messageText, hasFatherName ? 22 : 24);

      const hasName = parsedDetails && parsedDetails.name;
      const hasDOB = parsedDetails && parsedDetails.dateOfBirth;

      // Case 1: Only name provided, missing DOB (and we didn't have name from documents)
      if (!hasFatherName && hasName && !hasDOB) {
        setUserData((prev) => ({
          ...prev,
          fatherFullName: parsedDetails.name,
        }));
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "Got it! Now, what is your father's date of birth (DD/MM/YYYY)?",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('15/03/1960');
        }, 1000);
        return;
      }

      // Case 2: Only DOB provided, missing name (and we didn't have name from documents)
      if (!hasFatherName && hasDOB && !hasName) {
        setUserData((prev) => ({
          ...prev,
          fatherDOB: parsedDetails.dateOfBirth,
        }));
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "Thank you! What is your father's full name?",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('Ramesh Kumar Sharma');
        }, 1000);
        return;
      }

      // Case 3: Neither provided or parsing failed
      if (!hasDOB) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: hasFatherName
              ? "I couldn't quite catch that. Please mention your father's date of birth (DD/MM/YYYY)."
              : "I couldn't quite catch all the details. Please mention your father's full name and date of birth (DD/MM/YYYY).",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText(hasFatherName
            ? 'His DOB is 15/03/1960'
            : 'My father is Ramesh Kumar, his DOB is 15/03/1960');
        }, 1000);
        return;
      }

      // Case 4: Have DOB (and either have name from parsing or from documents)
      const fatherFullName = parsedDetails.name || userData.fatherName || '';

      setUserData((prev) => ({
        ...prev,
        fatherFullName: fatherFullName,
        fatherDOB: parsedDetails.dateOfBirth,
      }));

      // Now ask for vital status with one-tap options
      setCurrentStep(24.5);
      setTimeout(() => {
        setIsThinking(false);
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: 'What is your father\'s vital status?',
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setExampleText('');
      }, 1000);
    }
    // Step 24: Follow-up when user provided only name, now providing DOB
    else if (currentStep === 24 && messages[messages.length - 1].content === "Got it! Now, what is your father's date of birth (DD/MM/YYYY)?") {
      const parsedDetails = await parseWithOpenAI(messageText, 22);

      if (parsedDetails && parsedDetails.dateOfBirth) {
        setUserData((prev) => ({
          ...prev,
          fatherDOB: parsedDetails.dateOfBirth,
        }));

        // Now ask for vital status
        setCurrentStep(24.5);
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: 'What is your father\'s vital status?',
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('');
        }, 1000);
      } else {
        // Failed to parse DOB, ask again
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "I couldn't catch the date of birth. Please provide it in DD/MM/YYYY format.",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('15/03/1960');
        }, 1000);
      }
    }
    // Step 24: Follow-up when user provided only DOB, now providing name
    else if (currentStep === 24 && messages[messages.length - 1].content === "Thank you! What is your father's full name?") {
      const parsedDetails = await parseWithOpenAI(messageText, 24);

      if (parsedDetails && parsedDetails.name) {
        setUserData((prev) => ({
          ...prev,
          fatherFullName: parsedDetails.name,
        }));

        // Now ask for vital status
        setCurrentStep(24.5);
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: 'What is your father\'s vital status?',
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('');
        }, 1000);
      } else {
        // Failed to parse name, ask again
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "I couldn't catch the name. Please provide your father's full name.",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('Ramesh Kumar Sharma');
        }, 1000);
      }
    }
    // Step 24.5: Father's vital status (with one-tap options)
    else if (currentStep === 24.5) {
      const vitalStatus = messageText.toLowerCase();
      const isAlive = vitalStatus.includes('alive');
      
      setUserData((prev) => ({
        ...prev,
        fatherVitalStatus: isAlive ? 'Alive' : 'Deceased',
      }));
      
      // If father is deceased, ask for age at death and cause of death
      if (!isAlive) {
        setCurrentStep(25);
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: 'What was the age at death and cause of death?',
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('He was 65, heart attack');
        }, 1000);
        return;
      }
      
      // If father is alive, go directly to mother's details
      setCurrentStep(26);
      setTimeout(() => {
        setIsThinking(false);
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "Now, please mention your mother's full name and date of birth (DD/MM/YYYY).",
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setExampleText('My mother is Sunita Devi Sharma, her DOB is 20/06/1965');
      }, 1000);
    }
    // Step 25: Father age at death and cause of death (only if deceased)
    else if (currentStep === 25) {
      // Parse age at death and cause of death
      const parsedDeathDetails = await parseWithOpenAI(messageText, 25);

      const ageAtDeath = parsedDeathDetails?.ageAtDeath || userData.fatherAgeAtDeath;
      const causeOfDeath = parsedDeathDetails?.causeOfDeath || userData.fatherCauseOfDeath;

      // Save whatever was understood
      if (parsedDeathDetails?.ageAtDeath) setUserData((prev) => ({ ...prev, fatherAgeAtDeath: parsedDeathDetails.ageAtDeath }));
      if (parsedDeathDetails?.causeOfDeath) setUserData((prev) => ({ ...prev, fatherCauseOfDeath: parsedDeathDetails.causeOfDeath }));

      if (!ageAtDeath && !causeOfDeath) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "I couldn't quite catch that. Could you tell me the age at death and cause of death?",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('He was 65, heart attack');
        }, 1000);
        return;
      }

      if (ageAtDeath && !causeOfDeath) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: `Got it, he was ${ageAtDeath} years old. What was the cause of death?`,
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('Heart attack');
        }, 1000);
        return;
      }

      if (!ageAtDeath && causeOfDeath) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: `Understood, ${causeOfDeath}. At what age did he pass away?`,
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('65');
        }, 1000);
        return;
      }
      
      // Store age at death and cause of death
      setUserData((prev) => ({
        ...prev,
        fatherAgeAtDeath: ageAtDeath,
        fatherCauseOfDeath: causeOfDeath,
      }));
      
      // Move to mother's details
      setCurrentStep(26);
      setTimeout(() => {
        setIsThinking(false);
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "Now, please mention your mother's full name and date of birth (DD/MM/YYYY).",
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setExampleText('My mother is Sunita Devi Sharma, her DOB is 20/06/1965');
      }, 1000);
    }
    // Step 26: Mother's full name and DOB
    else if (currentStep === 26 && messages[messages.length - 1].content === "Now, please mention your mother's full name and date of birth (DD/MM/YYYY).") {
      // Use OpenAI parsing to extract name and DOB
      const parsedDetails = await parseWithOpenAI(messageText, 24);

      const hasName = parsedDetails && parsedDetails.name;
      const hasDOB = parsedDetails && parsedDetails.dateOfBirth;

      // Case 1: Only name provided, missing DOB
      if (hasName && !hasDOB) {
        setUserData((prev) => ({
          ...prev,
          motherFullName: parsedDetails.name,
        }));
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "Got it! Now, what is your mother's date of birth (DD/MM/YYYY)?",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('20/06/1965');
        }, 1000);
        return;
      }

      // Case 2: Only DOB provided, missing name
      if (hasDOB && !hasName) {
        setUserData((prev) => ({
          ...prev,
          motherDOB: parsedDetails.dateOfBirth,
        }));
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "Thank you! What is your mother's full name?",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('Sunita Devi Sharma');
        }, 1000);
        return;
      }

      // Case 3: Neither provided
      if (!hasName && !hasDOB) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "I couldn't quite catch that. Please mention your mother's full name and date of birth (DD/MM/YYYY).",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('My mother is Sunita Devi Sharma, her DOB is 20/06/1965');
        }, 1000);
        return;
      }

      // Case 4: Both provided - proceed to vital status
      setUserData((prev) => ({
        ...prev,
        motherFullName: parsedDetails.name,
        motherDOB: parsedDetails.dateOfBirth,
      }));

      // Now ask for vital status with one-tap options
      setCurrentStep(26.5);
      setTimeout(() => {
        setIsThinking(false);
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: 'What is your mother\'s vital status?',
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setExampleText('');
      }, 1000);
    }
    // Step 26: Follow-up when user provided only name, now providing DOB
    else if (currentStep === 26 && messages[messages.length - 1].content === "Got it! Now, what is your mother's date of birth (DD/MM/YYYY)?") {
      const parsedDetails = await parseWithOpenAI(messageText, 24);

      if (parsedDetails && parsedDetails.dateOfBirth) {
        setUserData((prev) => ({
          ...prev,
          motherDOB: parsedDetails.dateOfBirth,
        }));

        // Now ask for vital status
        setCurrentStep(26.5);
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: 'What is your mother\'s vital status?',
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('');
        }, 1000);
      } else {
        // Failed to parse DOB, ask again
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "I couldn't catch the date of birth. Please provide it in DD/MM/YYYY format.",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('20/06/1965');
        }, 1000);
      }
    }
    // Step 26: Follow-up when user provided only DOB, now providing name
    else if (currentStep === 26 && messages[messages.length - 1].content === "Thank you! What is your mother's full name?") {
      const parsedDetails = await parseWithOpenAI(messageText, 24);

      if (parsedDetails && parsedDetails.name) {
        setUserData((prev) => ({
          ...prev,
          motherFullName: parsedDetails.name,
        }));

        // Now ask for vital status
        setCurrentStep(26.5);
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: 'What is your mother\'s vital status?',
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('');
        }, 1000);
      } else {
        // Failed to parse name, ask again
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "I couldn't catch the name. Please provide your mother's full name.",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('Sunita Devi Sharma');
        }, 1000);
      }
    }
    // Step 26.5: Mother's vital status (with one-tap options)
    else if (currentStep === 26.5) {
      const vitalStatus = messageText.toLowerCase();
      const isAlive = vitalStatus.includes('alive');
      
      setUserData((prev) => ({
        ...prev,
        motherVitalStatus: isAlive ? 'Alive' : 'Deceased',
      }));
      
      // If mother is deceased, ask for age at death and cause of death
      if (!isAlive) {
        setCurrentStep(27);
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: 'What was the age at death and cause of death?',
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('She was 68, natural causes');
        }, 1000);
        return;
      }
      
      // If mother is alive, ask who they want to add as nominee
      setCurrentStep(28);
      setTimeout(() => {
        setIsThinking(false);
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "Who would you like to add as your nominee?",
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setExampleText('');
      }, 1000);
    }
    // Step 27: Mother age at death and cause of death (only if deceased)
    else if (currentStep === 27) {
      // Parse age at death and cause of death
      const parsedDeathDetails = await parseWithOpenAI(messageText, 25);

      const ageAtDeath = parsedDeathDetails?.ageAtDeath || userData.motherAgeAtDeath;
      const causeOfDeath = parsedDeathDetails?.causeOfDeath || userData.motherCauseOfDeath;

      // Save whatever was understood
      if (parsedDeathDetails?.ageAtDeath) setUserData((prev) => ({ ...prev, motherAgeAtDeath: parsedDeathDetails.ageAtDeath }));
      if (parsedDeathDetails?.causeOfDeath) setUserData((prev) => ({ ...prev, motherCauseOfDeath: parsedDeathDetails.causeOfDeath }));

      if (!ageAtDeath && !causeOfDeath) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "I couldn't quite catch that. Could you tell me the age at death and cause of death?",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('She was 68, natural causes');
        }, 1000);
        return;
      }

      if (ageAtDeath && !causeOfDeath) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: `Got it, she was ${ageAtDeath} years old. What was the cause of death?`,
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('Natural causes');
        }, 1000);
        return;
      }

      if (!ageAtDeath && causeOfDeath) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: `Understood, ${causeOfDeath}. At what age did she pass away?`,
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('68');
        }, 1000);
        return;
      }
      
      // Store age at death and cause of death
      setUserData((prev) => ({
        ...prev,
        motherAgeAtDeath: ageAtDeath,
        motherCauseOfDeath: causeOfDeath,
      }));
      
      // Move to Step 28: Ask who they want to add as nominee
      setCurrentStep(28);
      
      setTimeout(() => {
        setIsThinking(false);
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "Who would you like to add as your nominee?",
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setExampleText('');
      }, 1000);
    }
    // Step 28.1: Collect additional info for Father/Mother nominee (share %, DOB, contact)
    else if (currentStep === 28.1) {
      // Parse the response for percentage, DOB, and contact number
      // NOTE: Edge Function needs to handle step 27 to parse: percentage, dateOfBirth, contactNumber
      const parsedDetails = await parseWithOpenAI(messageText, 27); // New parser for nominee additional info

      // Build on previously saved partial data
      const resolvedPct = parsedDetails?.percentage ?? (userData as any)._pendingNomineePct ?? null;
      const resolvedDOB = parsedDetails?.dateOfBirth ?? (userData as any)._pendingNomineeDOB ?? null;
      const resolvedContact = parsedDetails?.contactNumber ?? (userData as any)._pendingNomineeContact ?? null;

      // Persist partial values for follow-up
      if (parsedDetails?.percentage) setUserData((prev) => ({ ...prev, _pendingNomineePct: parsedDetails.percentage } as any));
      if (parsedDetails?.dateOfBirth) setUserData((prev) => ({ ...prev, _pendingNomineeDOB: parsedDetails.dateOfBirth } as any));
      if (parsedDetails?.contactNumber) setUserData((prev) => ({ ...prev, _pendingNomineeContact: parsedDetails.contactNumber } as any));

      const missing28_1 = [
        !resolvedPct && 'share percentage (e.g. 100%)',
        !resolvedDOB && 'date of birth (DD/MM/YYYY)',
        !resolvedContact && '10-digit contact number',
      ].filter(Boolean);

      if (missing28_1.length > 0) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: `Got it! Could you also share your ${missing28_1.join(' and ')}?`,
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText(missing28_1.length === 3 ? '100%, 15/03/1965, 9876543210' : '');
        }, 1000);
        return;
      }

      // All collected — clear pending
      setUserData((prev) => { const p = { ...prev } as any; delete p._pendingNomineePct; delete p._pendingNomineeDOB; delete p._pendingNomineeContact; return p; });
      if (!parsedDetails) return;
      parsedDetails.percentage = resolvedPct;
      parsedDetails.dateOfBirth = resolvedDOB;
      parsedDetails.contactNumber = resolvedContact;
      
      // Determine nominee name and relationship based on selection
      const nomineeName = userData.nomineeType === 'Father' ? userData.fatherFullName : userData.motherFullName;
      const nomineeRelationship = userData.nomineeType === 'Father' ? 'Father' : 'Mother';
      
      // Calculate total percentage allocated (including the new nominee)
      const totalPercentage = (userData.nominees || []).reduce((sum, n) => sum + n.percentage, 0) + parsedDetails.percentage;
      
      // Add nominee to the list
      setUserData((prev) => ({
        ...prev,
        nominees: [...(prev.nominees || []), {
          fullName: nomineeName,
          dateOfBirth: parsedDetails.dateOfBirth,
          relationship: nomineeRelationship,
          percentage: parsedDetails.percentage,
          contactNumber: parsedDetails.contactNumber,
        }],
      }));
      
      // If percentage is 100%, we're done with nominees
      if (totalPercentage >= 100) {
        setCurrentStep(30); // Step 22 in UI (Weight Change) — H/W already confirmed in Step 14
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: 'Have you gained or lost more than 5kgs in the last 6 months?',
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
        }, 1000);
      } else {
        // Ask if they want to add another nominee
        setCurrentStep(28.5); // Intermediate step for additional nominee question
        setTimeout(() => {
          setIsThinking(false);
          const remainingPercentage = 100 - totalPercentage;
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: `You've allocated ${totalPercentage}% so far. Would you like to add another nominee for the remaining ${remainingPercentage}%?`,
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('');
        }, 1000);
      }
    }
    // Step 28.2: Nominee details collection for "Other" (full details)
    else if (currentStep === 28.2) {
      // Check if we came from Step 28.4 (mixed selection) or single "Other" selection
      const selectedNominees = userData.selectedNominees || [];
      const isSingleOtherNominee = selectedNominees.length === 1 && selectedNominees[0] === 'Other';
      const comingFromMixedSelection = selectedNominees.includes('Other') && selectedNominees.length > 1;
      
      // Use OpenAI parsing to extract nominee details
      const parsedDetails = await parseWithOpenAI(messageText, 26);
      
      // Build on previously saved partial nominee data
      const rName = parsedDetails?.fullName ?? (userData as any)._pendingOtherNomineeName ?? null;
      const rDOB = parsedDetails?.dateOfBirth ?? (userData as any)._pendingOtherNomineeDOB ?? null;
      const rRel = parsedDetails?.relationship ?? (userData as any)._pendingOtherNomineeRel ?? null;
      const rPct28_2 = parsedDetails?.percentage ?? (userData as any)._pendingOtherNomineePct ?? null;
      const rContact28_2 = parsedDetails?.contactNumber ?? (userData as any)._pendingOtherNomineeContact ?? null;

      // Persist partial values
      if (parsedDetails?.fullName) setUserData((prev) => ({ ...prev, _pendingOtherNomineeName: parsedDetails.fullName } as any));
      if (parsedDetails?.dateOfBirth) setUserData((prev) => ({ ...prev, _pendingOtherNomineeDOB: parsedDetails.dateOfBirth } as any));
      if (parsedDetails?.relationship) setUserData((prev) => ({ ...prev, _pendingOtherNomineeRel: parsedDetails.relationship } as any));
      if (parsedDetails?.percentage) setUserData((prev) => ({ ...prev, _pendingOtherNomineePct: parsedDetails.percentage } as any));
      if (parsedDetails?.contactNumber) setUserData((prev) => ({ ...prev, _pendingOtherNomineeContact: parsedDetails.contactNumber } as any));

      // Determine missing fields
      const needsPct28_2 = !(isSingleOtherNominee || comingFromMixedSelection) && !rPct28_2;
      const missing28_2 = [
        !rName && 'full name',
        !rDOB && 'date of birth (DD/MM/YYYY)',
        !rRel && 'relationship',
        needsPct28_2 && 'share percentage',
        !rContact28_2 && '10-digit contact number',
      ].filter(Boolean);

      if (missing28_2.length > 0) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: `Got it! Could you also share the nominee's ${missing28_2.join(', ')}?`,
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('');
        }, 1000);
        return;
      }

      // All collected — patch parsedDetails and clear pending
      if (!parsedDetails) return;
      parsedDetails.fullName = rName;
      parsedDetails.dateOfBirth = rDOB;
      parsedDetails.relationship = rRel;
      parsedDetails.percentage = rPct28_2;
      parsedDetails.contactNumber = rContact28_2;
      setUserData((prev) => {
        const p = { ...prev } as any;
        delete p._pendingOtherNomineeName; delete p._pendingOtherNomineeDOB; delete p._pendingOtherNomineeRel;
        delete p._pendingOtherNomineePct; delete p._pendingOtherNomineeContact;
        return p;
      });
      
      // Calculate percentage based on context
      let nomineePercentage = parsedDetails.percentage;
      if (isSingleOtherNominee) {
        // Single "Other" nominee gets 100%
        nomineePercentage = 100;
      } else if (comingFromMixedSelection) {
        const parentNominees = selectedNominees.filter(n => n !== 'Other');
        // Use the share from nomineeShares if available (from share editor)
        nomineePercentage = userData.nomineeShares?.['Other'] || (parentNominees.length === 1 ? 50 : 33.34);
      }
      
      // Calculate total percentage allocated (including the new nominee)
      const totalPercentage = (userData.nominees || []).reduce((sum, n) => sum + n.percentage, 0) + nomineePercentage;
      
      // Add nominee to the list
      setUserData((prev) => ({
        ...prev,
        nominees: [...(prev.nominees || []), {
          fullName: parsedDetails.fullName,
          dateOfBirth: parsedDetails.dateOfBirth,
          relationship: parsedDetails.relationship,
          percentage: nomineePercentage,
          contactNumber: parsedDetails.contactNumber,
        }],
      }));
      
      // If percentage is 100%, we're done with nominees
      if (totalPercentage >= 100) {
        setCurrentStep(30); // Step 22 in UI (Weight Change) — H/W already confirmed in Step 14
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: 'Have you gained or lost more than 5kgs in the last 6 months?',
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
        }, 1000);
      } else {
        // Ask if they want to add another nominee
        setCurrentStep(28.5); // Intermediate step for additional nominee question
        setTimeout(() => {
          setIsThinking(false);
          const remainingPercentage = 100 - totalPercentage;
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: `You've allocated ${totalPercentage}% so far. Would you like to add another nominee for the remaining ${remainingPercentage}%?`,
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('');
        }, 1000);
      }
    }
    // Step 28.3: Collect contact information for multi-selected nominees
    else if (currentStep === 28.3) {
      const selectedNominees = userData.selectedNominees || [];
      const nomineeShares = userData.nomineeShares || {}; // Get shares from editor
      
      if (selectedNominees.length === 1) {
        // Single nominee - extract 10-digit number from anywhere in the message
        const match = messageText.match(/\b\d{10}\b/);
        const contactNumber = match ? match[0] : '';
        
        if (!contactNumber) {
          setTimeout(() => {
            setIsThinking(false);
            const botMessage: Message = {
              id: (Date.now() + 1).toString(),
              content: "Please provide a valid 10-digit contact number.",
              sender: 'bot',
              timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMessage]);
            setExampleText('9876543210');
          }, 1000);
          return;
        }
        
        const nomineeName = selectedNominees[0] === 'Father' ? userData.fatherFullName : userData.motherFullName;
        const nomineeDOB = selectedNominees[0] === 'Father' ? userData.fatherDOB : userData.motherDOB;
        
        setUserData((prev) => ({
          ...prev,
          nominees: [{
            fullName: nomineeName,
            dateOfBirth: nomineeDOB,
            relationship: selectedNominees[0],
            percentage: 100,
            contactNumber: contactNumber,
          }],
        }));
      } else {
        // Multiple nominees - extract all 10-digit numbers regardless of separator
        const contacts = (messageText.match(/\b\d{10}\b/g) || []);
        
        if (contacts.length !== selectedNominees.length) {
          setTimeout(() => {
            setIsThinking(false);
            const botMessage: Message = {
              id: (Date.now() + 1).toString(),
              content: `Please provide ${selectedNominees.length} valid 10-digit contact number${selectedNominees.length > 1 ? 's' : ''}, one for each nominee.`,
              sender: 'bot',
              timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMessage]);
            setExampleText('9876543210 9876543211');
          }, 1000);
          return;
        }
        
        const nominees = selectedNominees.map((nominee, index) => ({
          fullName: nominee === 'Father' ? userData.fatherFullName : userData.motherFullName,
          dateOfBirth: nominee === 'Father' ? userData.fatherDOB : userData.motherDOB,
          relationship: nominee,
          percentage: nomineeShares[nominee] || 50, // Use share from editor or default to 50
          contactNumber: contacts[index],
        }));
        
        setUserData((prev) => ({
          ...prev,
          nominees: nominees,
        }));
      }
      
      // Move to next step (weight change) — H/W already confirmed in Step 14
      setCurrentStep(30);
      setTimeout(() => {
        setIsThinking(false);
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: 'Have you gained or lost more than 5kgs in the last 6 months?',
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 1000);
    }
    // Step 28.4: Collect contact info for parents when "Other" is also selected
    else if (currentStep === 28.4) {
      const selectedNominees = userData.selectedNominees || [];
      const parentNominees = selectedNominees.filter(n => n !== 'Other');
      const sharePercentage = userData.nomineeShares || 50;
      
      const nomineeShares = userData.nomineeShares || {}; // Get shares from editor
      
      if (parentNominees.length === 1) {
        // Single parent + Other - extract 10-digit number from anywhere in the message
        const match = messageText.match(/\b\d{10}\b/);
        const contactNumber = match ? match[0] : '';
        
        if (!contactNumber) {
          setTimeout(() => {
            setIsThinking(false);
            const botMessage: Message = {
              id: (Date.now() + 1).toString(),
              content: "Please provide a valid 10-digit contact number.",
              sender: 'bot',
              timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMessage]);
            setExampleText('9876543210');
          }, 1000);
          return;
        }
        
        const nomineeName = parentNominees[0] === 'Father' ? userData.fatherFullName : userData.motherFullName;
        const nomineeDOB = parentNominees[0] === 'Father' ? userData.fatherDOB : userData.motherDOB;
        
        // Store parent nominee temporarily (use share from editor or default 50)
        setUserData((prev) => ({
          ...prev,
          nominees: [{
            fullName: nomineeName,
            dateOfBirth: nomineeDOB,
            relationship: parentNominees[0],
            percentage: nomineeShares[parentNominees[0]] || 50,
            contactNumber: contactNumber,
          }],
        }));
      } else {
        // Both parents + Other - extract two 10-digit numbers regardless of separator
        const contacts = (messageText.match(/\b\d{10}\b/g) || []);
        
        if (contacts.length !== 2) {
          setTimeout(() => {
            setIsThinking(false);
            const botMessage: Message = {
              id: (Date.now() + 1).toString(),
              content: "Please provide both 10-digit contact numbers, one for each nominee.",
              sender: 'bot',
              timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMessage]);
            setExampleText('9876543210 9876543211');
          }, 1000);
          return;
        }
        
        const nominees = parentNominees.map((nominee, index) => ({
          fullName: nominee === 'Father' ? userData.fatherFullName : userData.motherFullName,
          dateOfBirth: nominee === 'Father' ? userData.fatherDOB : userData.motherDOB,
          relationship: nominee,
          percentage: nomineeShares[nominee] || 33.33, // Use share from editor or default
          contactNumber: contacts[index],
        }));
        
        setUserData((prev) => ({
          ...prev,
          nominees: nominees,
        }));
      }
      
      // Now ask for "Other" nominee details
      setCurrentStep(28.2);
      setTimeout(() => {
        setIsThinking(false);
        const remainingPercentage = nomineeShares['Other'] || (parentNominees.length === 1 ? 50 : 33.34);
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: `Great! Now, please provide details for your other nominee (${remainingPercentage}% share): their full name & date of birth (DD/MM/YYYY), relationship with you, and contact number.`,
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setExampleText('Priya Sharma, 20/08/1992, Spouse, 9876543210');
      }, 1000);
    }
    // Step 28.5: Ask if they want to add another nominee (only if percentage < 100)
    else if (currentStep === 28.5) {
      // Parse yes/no response using OpenAI
      const nomineeResponse = await parseWithOpenAI(messageText, 23); // Reuse yes/no parser
      
      if (nomineeResponse === null || nomineeResponse.wantsNominee === undefined) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "Sorry, I didn't quite catch that. Would you like to add another nominee? Please say yes or no.",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
        }, 1000);
        return;
      }
      
      if (nomineeResponse.wantsNominee) {
        // Ask who they want to add as next nominee
        setCurrentStep(28);
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "Who would you like to add as your nominee?",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('');
        }, 1000);
      } else {
        // Done with nominees, move to height/weight confirmation
        setCurrentStep(29);
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "From your full-length photograph, I have analysed the height and weight, are these measurements correct?",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setShowHeightWeightReview(true);
        }, 1000);
      }
    }
    // Step 31.1: Collect illness name and diagnosis date for current condition
    else if (currentStep === 31.1) {
      const parsedDetails = await parseWithOpenAI(messageText, 31);

      const resolvedIllnessName = parsedDetails?.exactName ?? (userData as any)._pendingIllnessName ?? null;
      const resolvedDiagDate = parsedDetails?.diagnosedDate ?? (userData as any)._pendingDiagDate ?? null;

      if (parsedDetails?.exactName) setUserData((prev) => ({ ...prev, _pendingIllnessName: parsedDetails.exactName } as any));
      if (parsedDetails?.diagnosedDate) setUserData((prev) => ({ ...prev, _pendingDiagDate: parsedDetails.diagnosedDate } as any));

      if (!resolvedIllnessName && !resolvedDiagDate) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "Sorry, I didn't catch that. Could you share the name of the illness and when it was diagnosed?",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('Asthma, diagnosed in January 2020');
        }, 1000);
        return;
      }

      if (resolvedIllnessName && !resolvedDiagDate) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: `Got it, ${resolvedIllnessName}! When was it first diagnosed? (DD/MM/YYYY)`,
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('01/01/2020');
        }, 1000);
        return;
      }

      if (!resolvedIllnessName && resolvedDiagDate) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: `Got it, diagnosed in ${resolvedDiagDate}. What is the exact name of the illness?`,
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('Asthma');
        }, 1000);
        return;
      }

      // Clear pending
      setUserData((prev) => { const p = { ...prev } as any; delete p._pendingIllnessName; delete p._pendingDiagDate; return p; });
      if (!parsedDetails) return;
      parsedDetails.exactName = resolvedIllnessName;
      parsedDetails.diagnosedDate = resolvedDiagDate;

      // Store partial details
      const newDetail = {
        condition: selectedHealthConditions[currentConditionBeingDetailed],
        exactName: parsedDetails.exactName,
        diagnosedDate: parsedDetails.diagnosedDate,
        treatment: '',
        currentStatus: '',
      };

      setHealthConditionDetails((prev) => [...prev, newDetail]);
      setCurrentStep(31.2);

      setTimeout(() => {
        setIsThinking(false);
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: 'What treatment are you currently taking and how is your condition now?',
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setExampleText('Taking daily inhaler, condition is well-controlled');
      }, 1000);
    }
    // Step 31.2: Collect treatment and current status
    else if (currentStep === 31.2) {
      const parsedDetails = await parseWithOpenAI(messageText, 32);

      const resolvedTreatment = parsedDetails?.treatment ?? (userData as any)._pendingTreatment ?? null;
      const resolvedStatus = parsedDetails?.currentStatus ?? (userData as any)._pendingHealthStatus ?? null;

      if (parsedDetails?.treatment) setUserData((prev) => ({ ...prev, _pendingTreatment: parsedDetails.treatment } as any));
      if (parsedDetails?.currentStatus) setUserData((prev) => ({ ...prev, _pendingHealthStatus: parsedDetails.currentStatus } as any));

      if (!resolvedTreatment && !resolvedStatus) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "Sorry, I didn't catch that. Could you tell me what treatment you're on and how your condition is now?",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('Taking daily inhaler, condition is well-controlled');
        }, 1000);
        return;
      }

      if (resolvedTreatment && !resolvedStatus) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: `Got it! And how is your condition currently — is it well-controlled, stable, or ongoing?`,
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('Well-controlled');
        }, 1000);
        return;
      }

      if (!resolvedTreatment && resolvedStatus) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: `Understood. What treatment or medication are you currently taking for this?`,
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('Daily inhaler');
        }, 1000);
        return;
      }

      setUserData((prev) => { const p = { ...prev } as any; delete p._pendingTreatment; delete p._pendingHealthStatus; return p; });
      if (!parsedDetails) return;
      parsedDetails.treatment = resolvedTreatment;
      parsedDetails.currentStatus = resolvedStatus;

      // Update the last added detail with treatment and status
      setHealthConditionDetails((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          treatment: parsedDetails.treatment,
          currentStatus: parsedDetails.currentStatus,
        };
        return updated;
      });

      // Check if there are more conditions to ask about
      const nextIndex = currentConditionBeingDetailed + 1;
      if (nextIndex < selectedHealthConditions.length) {
        setCurrentConditionBeingDetailed(nextIndex);
        setCurrentStep(31.1);
        
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: `Now let's talk about ${selectedHealthConditions[nextIndex]}. Please share the exact name of the illness and when it was diagnosed?`,
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('Type 2 Diabetes, diagnosed in March 2019');
        }, 1000);
      } else {
        // All conditions detailed, save to userData and move to substance consumption
        setUserData((prev) => ({
          ...prev,
          healthConditionDetails: healthConditionDetails,
        }));
        
        setCurrentStep(32);
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: 'Do you consume any of the following substances? Select any that apply.',
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
        }, 1000);
      }
    }
    // Step 34.2: Manual bank details entry
    else if (currentStep === 34.2) {
      const parsedBankDetails = await parseWithOpenAI(messageText, 34);

      // Resolve fields — merge new parse with previously saved partials
      const resolvedBank = parsedBankDetails?.bankName || userData.bankName || null;
      const resolvedAccount = parsedBankDetails?.accountNumber || userData.accountNumber || null;
      const resolvedIFSC = parsedBankDetails?.ifscCode || userData.ifscCode || null;
      const resolvedBranch = parsedBankDetails?.branchName || userData.branchName || null;

      // Save whatever was understood so far
      if (resolvedBank) setUserData((prev) => ({ ...prev, bankName: resolvedBank }));
      if (resolvedAccount) setUserData((prev) => ({ ...prev, accountNumber: resolvedAccount }));
      if (resolvedIFSC) setUserData((prev) => ({ ...prev, ifscCode: resolvedIFSC }));
      if (resolvedBranch) setUserData((prev) => ({ ...prev, branchName: resolvedBranch }));

      const missingBank = [
        !resolvedBank && 'Bank Name',
        !resolvedAccount && 'Account Number',
        !resolvedIFSC && 'IFSC Code',
        !resolvedBranch && 'Branch Name',
      ].filter(Boolean);

      if (missingBank.length > 0) {
        setTimeout(() => {
          setIsThinking(false);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: `Got it! Could you also share your ${missingBank.join(', ')}?`,
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('');
        }, 1000);
        return;
      }

      // Store bank details and show review card
      setUserData((prev) => ({
        ...prev,
        bankName: resolvedBank!,
        accountNumber: resolvedAccount!,
        ifscCode: resolvedIFSC!,
        branchName: resolvedBranch!,
      }));

      // Show review card
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "Please review your bank details once?",
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setShowBankDetailsReview(true);
      }, 1000);
      
      setIsThinking(false);
    }
    
    // Only clear input if not using override (i.e., when typing, not button clicks)
    if (!overrideInput) {
      setInputValue('');
    }
    setIsListening(false);
    setInterimTranscript('');
    stopAudioMonitoring();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionSelect = (option: string) => {
    // Add user message with selected option
    const userMessage: Message = {
      id: generateUniqueId(),
      content: option,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Save goal to user data
    setUserData((prev) => ({
      ...prev,
      goal: option,
    }));

    // Update step progress
    setCurrentStep(3); // Moving to Goal Amount

    // Determine follow-up question based on selection
    let followUpQuestion = '';
    let exampleResponse = '';

    switch (option) {
      case "Save for Kid's Education":
        followUpQuestion = "Great! How much are you planning to save for your kid's education & by when?";
        exampleResponse = "I am planning to save 1 cr in 20 years";
        break;
      case 'Retirement Planning':
        followUpQuestion = "Excellent! What's your target retirement corpus and when do you plan to retire?";
        exampleResponse = "I want to save 2 cr and retire at 60";
        break;
      case 'Build Wealth':
        followUpQuestion = "Great choice! What's your wealth building goal and timeline?";
        exampleResponse = "I want to build 50 lakhs in 10 years";
        break;
      case 'Tax Saving':
        followUpQuestion = "Smart thinking! How much are you looking to save in taxes annually?";
        exampleResponse = "I want to save around 1.5 lakhs per year";
        break;
      case 'Protect my Family':
        followUpQuestion = "That's thoughtful! What coverage amount are you considering for your family?";
        exampleResponse = "I need a cover of 1 cr for my family";
        break;
      default:
        followUpQuestion = "Great! Tell me more about your goals.";
        exampleResponse = "I want to achieve financial security";
    }

    // Simulate bot response with follow-up question
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: followUpQuestion,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setExampleText(exampleResponse);
    }, 1000);
  };

  const handlePolicyTypeSelect = (option: string) => {
    // Add user message with selected policy type
    const userMessage: Message = {
      id: generateUniqueId(),
      content: option,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Save policy type to user data
    setUserData((prev) => ({
      ...prev,
      policyType: option,
    }));

    // Update step progress
    setCurrentStep(5); // Moving to Risk Tolerance

    // Bot response asking about risk tolerance
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'How much risk are you comfortable with?',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleRiskToleranceSelect = (option: string) => {
    // Add user message with selected risk tolerance
    const userMessage: Message = {
      id: generateUniqueId(),
      content: option,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Save risk tolerance to user data
    setUserData((prev) => ({
      ...prev,
      riskTolerance: option,
    }));

    // Update step progress
    setCurrentStep(6); // Moving to Plans Selection

    // Bot response showing available plans
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Nice! I've picked a few plans that fit your income.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handlePlanSelection = (planName: string) => {
    // Add user message with selected plan
    const userMessage: Message = {
      id: generateUniqueId(),
      content: `I'd like to go with ${planName}`,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Save selected plan to user data
    setUserData((prev) => ({
      ...prev,
      selectedPlan: planName,
    }));

    // Update step progress
    setCurrentStep(7); // Moving to Riders

    // Bot response asking about riders
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Riders add extra benefits to your plan. Would you like to explore and add them?',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setExampleText('');
    }, 1000);
  };

  const handleVitalStatusSelection = (option: string) => {
    // Add user message with vital status choice
    const userMessage: Message = {
      id: generateUniqueId(),
      content: option,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    
    // Trigger the message handler with the selected option
    handleSendMessage(option);
  };

  const handleMotherVitalStatusSelection = (option: string) => {
    // Add user message with vital status choice
    const userMessage: Message = {
      id: generateUniqueId(),
      content: option,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    
    // Trigger the message handler with the selected option
    handleSendMessage(option);
  };

  const handleRiderSelection = (option: string) => {
    // Add user message with Yes/No choice
    const userMessage: Message = {
      id: generateUniqueId(),
      content: option,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    
    // Bot response based on choice, then ask about policy duration
    setTimeout(() => {
      let botResponse = '';
      if (option === 'Yes') {
        botResponse = 'Great! Let me show you the available riders for your plan.';
      } else {
        botResponse = "No problem! We can always add riders later. Let's proceed with the plan details.";
      }
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      
      // Ask about policy details with combined form
      setTimeout(() => {
        const durationMessage: Message = {
          id: (Date.now() + 2).toString(),
          content: "Let's calculate the premium now. Please fill in the following details:",
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, durationMessage]);
        setExampleText('');
        setCurrentStep(8);
      }, 1000);
    }, 1000);
  };

  const handleFatherNomineeSelect = (option: string) => {
    // Add user message with Yes/No choice
    const userMessage: Message = {
      id: generateUniqueId(),
      content: option,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    
    // Save father nominee choice
    setUserData((prev) => ({
      ...prev,
      fatherAsNominee: option,
    }));

    setCurrentStep(26);
    setExampleText('');
    
    // Ask for mother's details
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Now, please mention your mother's full name, date of birth (DD/MM/YYYY), and vital status.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setExampleText('My mother is Sunita Devi Sharma, she\'s 58 and still alive');
    }, 1000);
  };

  const handleMotherNomineeSelect = (option: string) => {
    // Add user message with Yes/No choice
    const userMessage: Message = {
      id: generateUniqueId(),
      content: option,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    
    // Save mother nominee choice
    setUserData((prev) => ({
      ...prev,
      motherAsNominee: option,
    }));

    setCurrentStep(28);
    
    // Next step message - ask who should be nominee
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Who would you like to add as your nominee?",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setExampleText('');
    }, 1000);
  };

  const handleNomineeSelect = (option: string) => {
    // Add user message with selected nominee type
    const userMessage: Message = {
      id: generateUniqueId(),
      content: option,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    
    // Save nominee type selection
    setUserData((prev) => ({
      ...prev,
      nomineeType: option,
    }));

    if (option === 'Father') {
      // Use father's details from Step 18/24
      setCurrentStep(28.1); // New step for additional nominee info (share, DOB, contact)
      
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: `Great! Please provide your father's share percentage, date of birth (DD/MM/YYYY), and contact number.`,
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setExampleText('100%, 15/03/1965, 9876543210');
      }, 1000);
    } else if (option === 'Mother') {
      // Use mother's details from Step 20/26
      setCurrentStep(28.1); // New step for additional nominee info (share, DOB, contact)
      
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: `Great! Please provide your mother's share percentage, date of birth (DD/MM/YYYY), and contact number.`,
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setExampleText('100%, 20/08/1970, 9876543210');
      }, 1000);
    } else if (option === 'Other') {
      // Continue with current flow - ask for full nominee details
      setCurrentStep(28.2); // Step for full nominee details
      
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "Great! Share your nominee's basic details: their full name & date of birth (DD/MM/YYYY), relationship with you, percentage & contact number.",
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setExampleText('Priya Sharma, 20/08/1992, Spouse, 100%, 9876543210');
      }, 1000);
    }
  };

  const handleMultiNomineeSelect = (selectedNominees: string[]) => {
    // Add user message showing selected nominees
    const userMessage: Message = {
      id: generateUniqueId(),
      content: selectedNominees.join(' and '),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    
    // Check if "Other" is included
    const hasOther = selectedNominees.includes('Other');
    const parentNominees = selectedNominees.filter(n => n !== 'Other');
    
    // Save selected nominees
    setUserData((prev) => ({
      ...prev,
      selectedNominees: selectedNominees,
    }));

    // SINGLE NOMINEE LOGIC - Auto-set 100%
    if (selectedNominees.length === 1) {
      // If only "Other" is selected, ask for full details with auto 100%
      if (hasOther) {
        setCurrentStep(28.2); // Step for full nominee details
        
        // Auto-set 100% for single "Other" nominee
        setUserData((prev) => ({
          ...prev,
          nomineeShares: { 'Other': 100 },
        }));
        
        setTimeout(() => {
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "Great! Share your nominee's basic details: their full name & date of birth (DD/MM/YYYY), relationship with you, and contact number (no need for percentage, it's automatically 100%).",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setExampleText('Priya Sharma, 20/08/1992, Spouse, 9876543210');
        }, 1000);
        return;
      }
      
      // Single parent nominee - auto-set 100% and ask for contact
      const nominee = selectedNominees[0].toLowerCase();
      setUserData((prev) => ({
        ...prev,
        nomineeShares: { [selectedNominees[0]]: 100 },
      }));
      
      setCurrentStep(28.3);
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: `Great! Your ${nominee} will receive 100% of the sum assured. Now, please provide your ${nominee}'s contact number.`,
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setExampleText('9876543210');
      }, 1000);
      return;
    }

    // MULTIPLE NOMINEES LOGIC - Show share editor with auto-divided percentages
    
    // Set nominee list for the share editor
    setNomineeListForEditor(selectedNominees);
    
    // Show share editor and bot message
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `Perfect! I've divided the shares equally among your ${selectedNominees.length} nominees. You can review and edit the percentages below if needed.`,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setShowNomineeShareEditor(true);
      setExampleText('');
    }, 1000);
  };

  // Handle nominee share confirmation from editor
  const handleNomineeShareConfirm = (shares: Record<string, number>) => {
    setShowNomineeShareEditor(false);
    
    // Save the shares
    setUserData((prev) => ({
      ...prev,
      nomineeShares: shares,
    }));
    
    const selectedNominees = userData.selectedNominees || [];
    const hasOther = selectedNominees.includes('Other');
    const parentNominees = selectedNominees.filter((n: string) => n !== 'Other');
    
    // Add user confirmation message
    const sharesList = Object.entries(shares)
      .map(([nominee, percentage]) => `${nominee}: ${percentage}%`)
      .join(', ');
    
    const userMessage: Message = {
      id: generateUniqueId(),
      content: `Confirmed shares: ${sharesList}`,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    
    // If "Other" is included with parents, ask for parent contact first
    if (hasOther && parentNominees.length > 0) {
      setCurrentStep(28.4);
      
      setTimeout(() => {
        let content = '';
        if (parentNominees.length === 1) {
          const parent = parentNominees[0].toLowerCase();
          content = `Great! Now, please provide your ${parent}'s contact number.`;
        } else {
          content = `Great! Now, please provide their contact numbers (Father's number, Mother's number).`;
        }
        
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: content,
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        
        if (parentNominees.length === 1) {
          setExampleText('9876543210');
        } else {
          setExampleText('9876543210, 9876543211');
        }
      }, 1000);
      return;
    }
    
    // Only parents selected - collect contact information
    setCurrentStep(28.3);
    
    setTimeout(() => {
      let content = '';
      if (parentNominees.length === 1) {
        const nominee = parentNominees[0].toLowerCase();
        content = `Great! Now, please provide your ${nominee}'s contact number.`;
      } else {
        content = `Perfect! Now, please provide their contact numbers (Father's number, Mother's number).`;
      }
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: content,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      
      if (parentNominees.length === 1) {
        setExampleText('9876543210');
      } else {
        setExampleText('9876543210, 9876543211');
      }
    }, 1000);
  };

  const handlePolicyDurationSelect = (duration: string) => {
    // Add user message with selected duration
    const userMessage: Message = {
      id: generateUniqueId(),
      content: duration,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    
    // Save policy duration to user data
    setUserData((prev) => ({
      ...prev,
      policyDuration: duration,
    }));

    // Ask about premium payment term directly
    setTimeout(() => {
      const premiumMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'For how many years would you like to pay premiums?',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, premiumMessage]);
      setExampleText('');
    }, 1000);
  };

  const handlePremiumPaymentSelect = (term: string) => {
    // Add user message with selected payment term
    const userMessage: Message = {
      id: generateUniqueId(),
      content: term,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    
    // Save premium payment term to user data
    setUserData((prev) => ({
      ...prev,
      premiumPaymentTerm: term,
    }));

    // Ask about premium payment frequency
    setTimeout(() => {
      const frequencyMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'How often would you like to pay your premium?',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, frequencyMessage]);
      setExampleText('');
    }, 1000);
  };

  const handlePremiumFrequencySelect = (frequency: string) => {
    // Add user message with selected frequency
    const userMessage: Message = {
      id: generateUniqueId(),
      content: frequency,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    
    // Save premium payment frequency to user data
    setUserData((prev) => ({
      ...prev,
      premiumFrequency: frequency,
    }));

    // Ask about employee status
    setTimeout(() => {
      const employeeMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Are you an employee of the company or related group?',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, employeeMessage]);
      setExampleText('');
    }, 1000);
  };

  const handleEmployeeStatusSelect = (status: string) => {
    // Add user message with selected status
    const userMessage: Message = {
      id: generateUniqueId(),
      content: status,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    
    // Save employee status to user data
    setUserData((prev) => ({
      ...prev,
      employeeStatus: status,
    }));

    // Ask about product option
    setTimeout(() => {
      const productOptionMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Which product option would you like to go with?',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, productOptionMessage]);
      setExampleText('');
    }, 1000);
  };

  const handleProductOptionSelect = (option: string) => {
    // Add user message with selected option
    const userMessage: Message = {
      id: generateUniqueId(),
      content: option,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    
    // Save product option to user data
    setUserData((prev) => ({
      ...prev,
      productOption: option,
    }));

    // Ask about product category
    setTimeout(() => {
      const categoryMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Choose the product category that fits your needs.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, categoryMessage]);
      setExampleText('');
    }, 1000);
  };

  const handleProductCategorySelect = (category: string) => {
    // Add user message with selected category
    const userMessage: Message = {
      id: generateUniqueId(),
      content: category,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    
    // Save product category to user data
    setUserData((prev) => ({
      ...prev,
      productCategory: category,
    }));

    // Ask about death benefit multiple
    setTimeout(() => {
      const benefitMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Choose your death benefit multiple.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, benefitMessage]);
      setExampleText('');
    }, 1000);
  };

  const handleDeathBenefitSelect = (multiple: string) => {
    // Add user message with selected multiple
    const userMessage: Message = {
      id: generateUniqueId(),
      content: multiple,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    
    // Save death benefit multiple to user data
    setUserData((prev) => ({
      ...prev,
      deathBenefitMultiple: multiple,
    }));

    // Show policy summary
    setTimeout(() => {
      const summaryMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Here's a summary of your policy details:",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, summaryMessage]);
      setShowPolicySummary(true);
      setExampleText('');
    }, 1000);
  };

  // Combined Premium Calculator Handler
  const handlePremiumCalculatorUpdate = (field: string, value: string) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePremiumCalculatorConfirm = () => {
    // Add user message with all selections
    const userMessage: Message = {
      id: generateUniqueId(),
      content: `Policy Term: ${userData.policyDuration}, Premium Payment: ${userData.premiumPaymentTerm}, Frequency: ${userData.premiumFrequency}, Employee: ${userData.employeeStatus}, Product: ${userData.productOption}, Category: ${userData.productCategory}, Death Benefit: ${userData.deathBenefitMultiple}x`,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setCurrentStep(9);

    // Show policy summary
    setTimeout(() => {
      const summaryMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Here's a summary of your policy details:",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, summaryMessage]);
      setShowPolicySummary(true);
      setExampleText('');
    }, 1000);
  };

  const handleGenerateBI = () => {
    // Add user action message
    const userMessage: Message = {
      id: generateUniqueId(),
      content: 'Generate BI',
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setShowPolicySummary(false);
    setCurrentStep(16); // Step 10 in UI (PLVC)

    // Bot success message
    setTimeout(() => {
      const successMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Congratulations! BI has been generated successfully & sent to the customer.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, successMessage]);
    }, 1000);

    // Ask for PLVC Type
    setTimeout(() => {
      const plvcMessage: Message = {
        id: (Date.now() + 2).toString(),
        content: 'Select PLVC Type',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, plvcMessage]);
      setExampleText('');
    }, 2000);
  };

  const handlePLVCSelect = (plvcType: string) => {
    // Add user message with selected PLVC type
    const userMessage: Message = {
      id: Date.now().toString(),
      content: plvcType,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setCurrentStep(17); // Step 11 in UI (KYC)
    
    // Save PLVC type to user data
    setUserData((prev) => ({
      ...prev,
      plvcType: plvcType,
    }));

    // Bot success message with application number
    setTimeout(() => {
      const appMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Congratulations! Application No. L10007864 successfully generated.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, appMessage]);
    }, 1000);

    // Ask for KYC method
    setTimeout(() => {
      const kycMessage: Message = {
        id: (Date.now() + 2).toString(),
        content: 'How would you like to complete your KYC verification?',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, kycMessage]);
      setExampleText('');
    }, 2000);
  };

  const handleKYCSelect = (kycMethod: string) => {
    // Add user message with selected KYC method
    const userMessage: Message = {
      id: Date.now().toString(),
      content: kycMethod,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Save KYC method to user data
    setUserData((prev) => ({
      ...prev,
      kycMethod: kycMethod,
    }));

    // Update step based on KYC method selected
    if (kycMethod === 'Physical KYC') {
      setCurrentStep(18); // Step 12 in UI (Docs Physical)
    } else {
      setCurrentStep(19); // Step 13 in UI (Docs Digilocker)
    }

    // Ask for document upload
    setTimeout(() => {
      let docMessage: Message;
      if (kycMethod === 'Physical KYC') {
        docMessage = {
          id: (Date.now() + 1).toString(),
          content: 'Please upload the following documents for verification. Make sure to upload your latest documents:',
          sender: 'bot',
          timestamp: new Date(),
        };
      } else {
        // Digilocker
        docMessage = {
          id: (Date.now() + 1).toString(),
          content: 'Great! Digilocker KYC verification successful. Please upload your PAN Card for final verification.',
          sender: 'bot',
          timestamp: new Date(),
        };
      }
      setMessages((prev) => [...prev, docMessage]);
      setExampleText('');
    }, 1000);
  };

  const handleDocumentUpload = async (docType: string, file: File) => {
    setUserData((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        [docType]: file,
      },
    }));

    // Helper function to parse father's name from full name
    const parseFatherName = (fullName: string): string | null => {
      // For names like "Zehan Jahidhusain Modan", extract "Jahidhusain Modan"
      const nameParts = fullName.trim().split(/\s+/);
      if (nameParts.length >= 3) {
        // Remove first name, keep middle and last name
        return nameParts.slice(1).join(' ');
      }
      return null;
    };

    // If it's an Age Proof (Aadhaar card), Address Proof Document, or PAN Card, extract information using OpenAI Vision
    if (docType === 'Age Proof' || docType === 'Address Proof Document' || docType === 'PAN Card') {
      const mimeType = file.type || 'image/jpeg';
      const supportedImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];

      if (!supportedImageTypes.includes(mimeType)) {
        console.warn(`⚠️ Unsupported file type for extraction: ${mimeType}. Only JPEG, PNG, WEBP are supported. Skipping extraction.`);
        setUserData((prev) => ({
          ...prev,
          documents: { ...prev.documents, [docType]: file },
        }));
        return;
      }

      setIsProcessingAadhaar(true);
      console.log(`🔍 Starting extraction for ${docType}, file: ${file.name}, type: ${mimeType}`);

      try {
        const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
        if (!apiKey) {
          console.error('❌ VITE_OPENAI_API_KEY is not set');
          return;
        }

        // Convert file to base64
        const toBase64 = (f: File): Promise<string> =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              const result = reader.result as string;
              resolve(result.split(',')[1]);
            };
            reader.onerror = reject;
            reader.readAsDataURL(f);
          });

        const base64 = await toBase64(file);
        // Use image/jpeg as fallback for image/jpg since OpenAI expects standard MIME types
        const normalizedMime = mimeType === 'image/jpg' ? 'image/jpeg' : mimeType;

        // Single unified prompt — extracts all fields from any Indian ID document (Aadhaar, driving licence, voter ID, etc.)
        const systemPrompt = `You are an expert OCR system for Indian government identity documents (Aadhaar card, PAN card, Voter ID, Driving Licence, Passport, etc.).

Carefully read ALL text visible in this document image and extract the following fields:

- fullName: The document holder's own full name (ignore S/O, D/O, W/O prefixes — those belong to fatherName)
- fatherName: Name appearing after S/O (Son of), D/O (Daughter of), W/O (Wife of), or C/O (Care of)
- dateOfBirth: Date of birth in DD/MM/YYYY format. May be labelled "DOB", "Date of Birth", or "Year of Birth"
- communicationAddress: Complete address — include flat/house number, building, street, area, city, state
- pincode: The 6-digit numerical PIN code (may appear at end of address or separately)

Rules:
- Return ONLY a JSON object with exactly these 5 keys: fullName, fatherName, dateOfBirth, communicationAddress, pincode
- If a field is not visible or not present, use null
- Do NOT include gender, nationality, Aadhaar number, or any other field
- Do NOT wrap the JSON in markdown code blocks`;

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: 'gpt-4o',
            messages: [
              {
                role: 'user',
                content: [
                  { type: 'text', text: systemPrompt },
                  {
                    type: 'image_url',
                    image_url: {
                      url: `data:${normalizedMime};base64,${base64}`,
                      detail: 'high',
                    },
                  },
                ],
              },
            ],
            response_format: { type: 'json_object' },
            max_tokens: 600,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const rawContent = data.choices?.[0]?.message?.content || '{}';
          console.log(`📄 Raw API response for ${docType}:`, rawContent);
          let extracted: Record<string, string | null> = {};
          try {
            extracted = JSON.parse(rawContent);
          } catch (parseErr) {
            console.error('❌ Failed to parse extraction JSON:', parseErr, rawContent);
          }
          console.log(`✅ Parsed extraction for ${docType}:`, extracted);

          // Resolve with fallback key names in case model uses variations
          const resolvedName = extracted.fullName || extracted.name || extracted.holderName || null;
          const resolvedFatherName = extracted.fatherName || extracted.father_name || extracted.fathersName || extracted.guardianName || null;
          const resolvedDOB = extracted.dateOfBirth || extracted.dob || extracted.date_of_birth || extracted.DateOfBirth || null;
          const resolvedAddress = extracted.communicationAddress || extracted.address || extracted.Address || null;
          const resolvedPincode = extracted.pincode || extracted.pin || extracted.postalCode || extracted.postal_code || null;

          console.log(`🔑 Resolved fields — name: ${resolvedName}, father: ${resolvedFatherName}, dob: ${resolvedDOB}, address: ${resolvedAddress}, pincode: ${resolvedPincode}`);

          setUserData((prev) => ({
            ...prev,
            ...(resolvedName && { fullName: resolvedName }),
            ...(resolvedDOB && { dateOfBirth: resolvedDOB }),
            // Only set fatherName from PAN if Aadhaar hasn't already populated it
            ...(resolvedFatherName && !prev.fatherName && { fatherName: resolvedFatherName }),
            ...(resolvedAddress && {
              communicationAddress: resolvedAddress,
              permanentAddress: resolvedAddress,
            }),
            ...(resolvedPincode && { pincode: String(resolvedPincode) }),
            // nationality and countryOfBirth are always hardcoded — never overwritten
            // gender is always from step 1 — never overwritten
          }));
          setDocumentExtractedData(extracted);
        } else {
          const errText = await response.text();
          console.error(`❌ OpenAI Vision API error ${response.status}:`, errText);
        }
      } catch (err) {
        console.error('Document extraction error:', err);
      } finally {
        setIsProcessingAadhaar(false);
      }
    }
  };

  const handleDocumentUploadComplete = () => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: 'All documents uploaded',
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setCurrentStep(20); // Step 14 in UI (Full Photo)

    // Ask for full-length photo
    setTimeout(() => {
      const photoMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Please upload a full-length photo for identity verification and health assessment.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, photoMessage]);
      setExampleText('');
    }, 1000);
  };

  const handleDocumentUploadSkip = () => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: 'Skip document upload for now',
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setCurrentStep(20); // Step 14 in UI (Full Photo)

    // Continue to full-length photo
    setTimeout(() => {
      const photoMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'No problem! You can upload your documents later. For now, please upload a full-length photo for identity verification and health assessment.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, photoMessage]);
      setExampleText('');
    }, 1000);
  };

  const handleFullLengthPhotoUpload = (file: File) => {
    setUserData((prev) => ({
      ...prev,
      fullLengthPhoto: file,
    }));
  };

  const handleFullLengthPhotoComplete = async () => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: 'Photo uploaded',
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setCurrentStep(21);

    // Show analysis message and start thinking animation
    const analysingMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: 'Analysing your photo, please wait...',
      sender: 'bot',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, analysingMessage]);
    setIsThinking(true);
    setIsAnalysingPhoto(true);

    // Analyse photo with OpenAI Vision to estimate height and weight
    const photoFile = userData.fullLengthPhoto;
    if (photoFile) {
      try {
        const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
        if (apiKey) {
          const toBase64 = (f: File): Promise<string> =>
            new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onloadend = () => {
                const result = reader.result as string;
                resolve(result.split(',')[1]);
              };
              reader.onerror = reject;
              reader.readAsDataURL(f);
            });

          const base64 = await toBase64(photoFile);
          const mimeType = photoFile.type === 'image/jpg' ? 'image/jpeg' : photoFile.type;

          const photoPrompt = `This is a full-body photograph of a person. Estimate their physical measurements based on body proportions and visible build.
Return ONLY a valid JSON object, no explanation, no markdown, no backticks:
{
  "height_cm": [single number],
  "weight_kg": [single number],
  "confidence": "low" or "medium" or "high"
}`;

          const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model: 'gpt-4o',
              messages: [
                {
                  role: 'user',
                  content: [
                    { type: 'text', text: photoPrompt },
                    {
                      type: 'image_url',
                      image_url: {
                        url: `data:${mimeType};base64,${base64}`,
                        detail: 'high',
                      },
                    },
                  ],
                },
              ],
              max_tokens: 100,
            }),
          });

          if (response.ok) {
            const data = await response.json();
            const rawContent = (data.choices?.[0]?.message?.content || '').replace(/```json|```/g, '').trim();
            console.log('📏 Full-length photo AI response:', rawContent);
            try {
              const parsed = JSON.parse(rawContent);
              const heightNum = Number(parsed.height_cm) || 165;
              const weightNum = Number(parsed.weight_kg) || 65;
              setUserData((prev) => ({
                ...prev,
                height: `${heightNum} cm`,
                weight: `${weightNum} kg`,
                aiEstimatedHeight: heightNum,
                aiEstimatedWeight: weightNum,
              }));
            } catch {
              // Parsing failed — use fallback
              setUserData((prev) => ({
                ...prev,
                height: '165 cm',
                weight: '65 kg',
                aiEstimatedHeight: 165,
                aiEstimatedWeight: 65,
              }));
            }
          }
        }
      } catch (err) {
        console.error('Photo analysis error:', err);
        // Fallback on any error
        setUserData((prev) => ({
          ...prev,
          height: '165 cm',
          weight: '65 kg',
          aiEstimatedHeight: 165,
          aiEstimatedWeight: 65,
        }));
      }
    }

    // Stop animation
    setIsThinking(false);
    setIsAnalysingPhoto(false);

    // Show Height/Weight card immediately after analysis
    setTimeout(() => {
      const hwMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'From your full-length photograph, I have analysed the height and weight, are these measurements correct?',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, hwMessage]);
      setShowHeightWeightReview(true);
    }, 500);
  };

  const handleFullLengthPhotoSkip = () => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: 'Skip photo upload for now',
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setCurrentStep(21); // Step 15 in UI (Personal Details)

    // Continue to personal details review
    setTimeout(() => {
      const reviewMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "No problem! You can upload your photo later. Let's review your personal details now.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, reviewMessage]);
      setShowPersonalDetailsReview(true);
    }, 1000);
  };

  const handlePersonalDetailsConfirm = async () => {
    setShowPersonalDetailsReview(false);
    setCurrentStep(22);
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: 'Confirmed',
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    
    // Ask user to manually provide professional details (no LinkedIn search)
    setTimeout(() => {
      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Let's get to know your employer name, designation & occupation",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, fallbackMessage]);
      setExampleText('TCS, Software Engineer, Salaried');
    }, 1000);
  };

  const handleProfessionalDetailsEdit = () => {
    setShowEditProfessionalDetailsSheet(true);
  };

  const handleProfessionalDetailsEditSave = (updatedData: {
    designation: string;
    employerName: string;
    industry: string;
    occupation: string;
    jobDuties: string;
    hazardousEnvironment: string;
    annualIncome?: string;
  }) => {
    console.log('💾 Saving professional details:', updatedData);

    // Update userData state
    setUserData((prev) => {
      const updated = {
        ...prev,
        ...updatedData,
      };
      console.log('✅ Updated userData:', updated);
      return updated;
    });

    // Also update any messages with professionalData so the cards reflect the changes
    setMessages((prev) =>
      prev.map((msg) =>
        msg.isProfessionalDetailsCard && msg.professionalData
          ? {
              ...msg,
              professionalData: {
                ...msg.professionalData,
                ...updatedData,
              },
            }
          : msg
      )
    );
    triggerSaveToast();
  };

  const handleProfessionalDetailsConfirm = () => {
    setShowProfessionalDetailsReview(false);
    setCurrentStep(22.5); // Intermediate step for business card upload
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: 'Confirmed',
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    
    // Ask for business card upload
    setTimeout(() => {
      const businessCardMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Would you like to upload your business card? This helps us verify your professional details.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, businessCardMessage]);
      setExampleText('');
    }, 1000);
  };

  const handleBusinessCardUpload = async (docType: string, file: File) => {
    // Show extraction animation
    setIsProcessingBusinessCard(true);

    // Mock data extracted from business card
    const mockProfessionalData = {
      industry: 'Information Technology',
      jobDuties: 'Software development\nCode reviews and testing\nTeam collaboration and project planning',
      hazardousEnvironment: 'No'
    };

    setUserData((prev) => ({
      ...prev,
      businessCard: file,
      industry: mockProfessionalData.industry,
      jobDuties: mockProfessionalData.jobDuties,
      hazardousEnvironment: mockProfessionalData.hazardousEnvironment,
    }));

    // Store professional data temporarily (extraction happens in background)
    setTempProfessionalData(mockProfessionalData);

    // Hide extraction animation after simulated processing
    setTimeout(() => {
      setIsProcessingBusinessCard(false);
    }, 1800);
    
    // Don't show any message yet - let DocumentUpload's Continue button handle it
  };

  const handleProfessionalDetailsContinue = () => {
    // Hide Continue button and show professional details card
    setShowProfessionalDetailsContinue(false);
    
    if (tempProfessionalData) {
      setTimeout(() => {
        const professionalDetailsMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: 'Professional details card',
          sender: 'bot',
          timestamp: new Date(),
          isProfessionalDetailsCard: true,
          isBusinessCardUpload: true, // This is from business card upload
          professionalData: tempProfessionalData,
        };
        setMessages((prev) => [...prev, professionalDetailsMessage]);
      }, 300);
    }
  };

  const handleBusinessCardProfessionalDetailsEdit = () => {
    setShowEditProfessionalDetailsSheet(true);
  };

  const handleBusinessCardProfessionalDetailsEditSave = (updatedData: {
    designation: string;
    employerName: string;
    industry: string;
    occupation: string;
    jobDuties: string;
    hazardousEnvironment: string;
    annualIncome?: string;
  }) => {
    console.log('💾 Saving business card professional details:', updatedData);

    // Update userData state
    setUserData((prev) => ({
      ...prev,
      ...updatedData,
    }));

    // Update the message's professionalData so the card reflects the changes
    setMessages((prev) =>
      prev.map((msg) =>
        msg.isProfessionalDetailsCard && msg.professionalData
          ? {
              ...msg,
              professionalData: {
                ...msg.professionalData,
                ...updatedData,
              },
            }
          : msg
      )
    );
  };

  const handleBusinessCardProfessionalDetailsConfirm = () => {
    // User confirms the extracted professional details from business card or typed input
    const userMessage: Message = {
      id: Date.now().toString(),
      content: 'Professional details confirmed',
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // If coming from manual typing (step 22), skip business card upload and go directly to annual income
    if (currentStep === 22) {
      setCurrentStep(23); // Skip to annual income step

      // Ask for annual income
      setTimeout(() => {
        const incomeMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: 'Perfect! One more thing - what is your annual income (in lakhs)?',
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, incomeMessage]);
        setExampleText('15');
      }, 1000);
    } else {
      // If coming from business card upload (step 22.5), go to annual income
      setCurrentStep(23);
      setHasExtractedBusinessCard(false); // Reset to show example responses again

      // Ask for annual income
      setTimeout(() => {
        const incomeMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: 'Perfect! One more thing - what is your annual income (in lakhs)?',
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, incomeMessage]);
        setExampleText('15');
      }, 1000);
    }
  };

  const handleBusinessCardComplete = () => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: 'Business card uploaded',
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setCurrentStep(22.5); // Mark that we're in business card upload flow
    setHasExtractedBusinessCard(true); // Hide example responses after extraction

    // Show bot message informing about auto-fill
    setTimeout(() => {
      const infoMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Perfect! I'll analyze your role and auto-fill your industry and work details",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, infoMessage]);

      // Then show the professional details card
      if (tempProfessionalData) {
        setTimeout(() => {
          const professionalDetailsMessage: Message = {
            id: (Date.now() + 2).toString(),
            content: 'Professional details card',
            sender: 'bot',
            timestamp: new Date(),
            isProfessionalDetailsCard: true,
            isBusinessCardUpload: true, // This is from business card upload
            professionalData: tempProfessionalData,
          };
          setMessages((prev) => [...prev, professionalDetailsMessage]);
        }, 800);
      }
    }, 500);
  };

  const handleBusinessCardSkip = () => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: 'Skip business card upload',
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setCurrentStep(23);

    // Ask for annual income
    setTimeout(() => {
      const incomeMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'No problem! What is your annual income (in lakhs)?',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, incomeMessage]);
      setExampleText('15');
    }, 1000);
  };

  const handleHeightWeightConfirm = () => {
    setShowHeightWeightReview(false);

    const userMessage: Message = {
      id: Date.now().toString(),
      content: 'Confirmed',
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    if (currentStep === 21) {
      // Coming from Step 14 (photo upload path) — show Personal Details next
      setTimeout(() => {
        const reviewMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "Ta-da! I've filled these in from your documents. Review them once?",
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, reviewMessage]);
        setShowPersonalDetailsReview(true);
      }, 1000);
    } else {
      // Coming from Step 21 (nominees path) — go to Weight Change
      setCurrentStep(30);
      setTimeout(() => {
        const nextMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: 'Have you gained or lost more than 5kgs in the last 6 months?',
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, nextMessage]);
      }, 1000);
    }
  };

  const handleHeightWeightSave = (updatedData: {
    height: string;
    weight: string;
  }) => {
    setUserData((prev) => ({
      ...prev,
      ...updatedData,
    }));
  };

  const handleWeightChangeSelect = (option: string) => {
    setUserData((prev) => ({ ...prev, weightChange: option }));

    const userMessage: Message = {
      id: Date.now().toString(),
      content: option,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    setCurrentStep(31); // Step 23 in UI (Health Conditions)

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Do you have any existing health conditions? Select any that apply.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleHealthConditionToggle = (condition: string, autoConfirm: boolean = false) => {
    setSelectedHealthConditions((prev) => {
      const newSelection = (() => {
        // If selecting "I don't have any disorders", clear all other selections
        if (condition === "I don't have any disorders") {
          return prev.includes(condition) ? [] : [condition];
        }
        
        // If selecting a disorder, remove "I don't have any disorders" if present
        const withoutNone = prev.filter(c => c !== "I don't have any disorders");
        
        // Toggle the selected condition
        if (withoutNone.includes(condition)) {
          return withoutNone.filter(c => c !== condition);
        } else {
          return [...withoutNone, condition];
        }
      })();

      // If auto-confirm is true and we have a selection, immediately confirm
      if (autoConfirm && newSelection.length > 0) {
        // Use setTimeout to ensure state update happens first
        setTimeout(() => {
          handleHealthConditionsConfirmWithSelection(newSelection);
        }, 0);
      }

      return newSelection;
    });
  };

  const handleHealthConditionsConfirmWithSelection = (selection: string[]) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: selection.join(', '),
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    setUserData((prev) => ({
      ...prev,
      healthConditions: selection,
    }));

    // Clear selection after saving to userData
    setSelectedHealthConditions([]);

    // If user has no disorders, move to substance consumption question
    if (selection.includes("I don't have any disorders")) {
      setSelectedSubstances([]); // Clear substances selection for fresh start
      setCurrentStep(32); // Step 24 in UI (Substances)
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: 'Do you consume any of the following substances? Select any that apply.',
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 1000);
    } else {
      // Start asking for details of first condition
      setCurrentConditionBeingDetailed(0);
      setCurrentStep(31.1); // Sub-step for collecting details
      
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: `Let's get more details about ${selection[0]}. Please share the exact name of the illness and when it was diagnosed?`,
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setExampleText('Asthma, diagnosed in January 2020');
      }, 1000);
    }
  };

  const handleHealthConditionsConfirm = () => {
    handleHealthConditionsConfirmWithSelection(selectedHealthConditions);
  };

  const handleSubstanceToggle = (substance: string, autoConfirm: boolean = false) => {
    setSelectedSubstances((prev) => {
      const newSelection = (() => {
        // If selecting "I don't consume any substances", clear all other selections
        if (substance === "I don't consume any substances") {
          return prev.includes(substance) ? [] : [substance];
        }
        
        // If selecting a substance, remove "I don't consume any substances" if present
        const withoutNone = prev.filter(s => s !== "I don't consume any substances");
        
        // Toggle the selected substance
        if (withoutNone.includes(substance)) {
          return withoutNone.filter(s => s !== substance);
        } else {
          return [...withoutNone, substance];
        }
      })();

      // If auto-confirm is true and we have a selection, immediately confirm
      if (autoConfirm && newSelection.length > 0) {
        setTimeout(() => {
          handleSubstanceConsumptionConfirmWithSelection(newSelection);
        }, 0);
      }

      return newSelection;
    });
  };

  const handleSubstanceConsumptionConfirmWithSelection = (selection: string[]) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: selection.join(', '),
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    setUserData((prev) => ({
      ...prev,
      substanceConsumption: selection,
    }));

    // Clear selection after saving to userData
    setSelectedSubstances([]);

    // Move to asset declaration step
    setCurrentStep(33); // Step 25 in UI (Assets)

    // Auto-suggest assets based on annual income
    const autoSuggestedAssets = getAutoSuggestedAssets(userData.annualIncome);
    setSelectedAssets(autoSuggestedAssets);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Based on your annual income, I've pre-filled some assets you might own. Please review and edit as needed to indicate which of the following assets or products you already have.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleSubstanceConsumptionConfirm = () => {
    handleSubstanceConsumptionConfirmWithSelection(selectedSubstances);
  };

  // Helper function to auto-suggest assets based on annual income
  const getAutoSuggestedAssets = (annualIncome: string): string[] => {
    // Extract numeric value from income string (e.g., "₹15 lakhs per year" -> 15)
    const incomeMatch = annualIncome.match(/(\d+(?:\.\d+)?)/);
    if (!incomeMatch) return [];
    
    const incomeLPA = parseFloat(incomeMatch[1]);
    const suggestedAssets: string[] = [];
    
    // Income-based asset suggestions
    if (incomeLPA >= 3) {
      suggestedAssets.push('2 wheeler');
      suggestedAssets.push('Bank Deposits');
    }
    
    if (incomeLPA >= 5) {
      suggestedAssets.push('Health Insurance');
    }
    
    if (incomeLPA >= 8) {
      suggestedAssets.push('Small Car/Sedan/SUV');
      suggestedAssets.push('Life Insurance');
    }
    
    if (incomeLPA >= 12) {
      suggestedAssets.push('Home Loan');
    }
    
    if (incomeLPA >= 15) {
      suggestedAssets.push('Pension Plan');
    }
    
    if (incomeLPA >= 20) {
      suggestedAssets.push('Own house');
    }
    
    if (incomeLPA >= 25) {
      suggestedAssets.push('Land');
    }
    
    return suggestedAssets;
  };

  const handleAssetToggle = (asset: string) => {
    setSelectedAssets((prev) => {
      // Toggle the selected asset
      if (prev.includes(asset)) {
        return prev.filter(a => a !== asset);
      } else {
        return [...prev, asset];
      }
    });
  };

  const handleAssetDeclarationConfirm = () => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: selectedAssets.length > 0 ? selectedAssets.join(', ') : 'None',
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    setUserData((prev) => ({
      ...prev,
      assets: selectedAssets,
    }));

    // Clear selection after saving
    setSelectedAssets([]);

    // Move to bank details step
    setCurrentStep(34); // Step 26 in UI (Bank Details)
    setBankDetailsMethod(null); // Reset bank details method
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Let's get your bank details now. Do you have a cheque handy to auto-fill information or would you like to fill things manually?",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleBankDetailsMethodSelect = (method: 'cheque' | 'manual') => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: method === 'cheque' ? 'I have the cheque with me' : 'I want to Fill Manually',
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    setBankDetailsMethod(method);

    if (method === 'cheque') {
      // Show cheque upload
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: 'Great! Please upload a photo of your cheque. Make sure all details are clearly visible.',
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setCurrentStep(34.1); // Sub-step for cheque photo
      }, 800);
    } else {
      // Manual entry
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: 'Please provide your bank details including Bank Name, Account Number, IFSC Code, and Branch Name.',
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setExampleText('HDFC Bank, Account: 50100123456789, IFSC: HDFC0001234, Branch: MG Road Bangalore');
        setCurrentStep(34.2); // Sub-step for manual entry
      }, 800);
    }
  };

  const handleChequeUpload = async (docType: string, file: File) => {
    // Store the cheque file
    setUserData((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        'Cheque': file,
      },
    }));

    // Show processing indicator
    setIsProcessingCheque(true);

    // Simulate processing delay for better UX
    setTimeout(() => {
      // Extract mock bank details from cheque
      const extractedBankDetails = {
        bankName: 'HDFC Bank',
        accountNumber: '50100123456789',
        ifscCode: 'HDFC0001234',
        branchName: 'MG Road, Bangalore',
      };

      // Update user data with extracted bank details
      setUserData((prev) => ({
        ...prev,
        bankName: extractedBankDetails.bankName,
        accountNumber: extractedBankDetails.accountNumber,
        ifscCode: extractedBankDetails.ifscCode,
        branchName: extractedBankDetails.branchName,
      }));

      console.log('Cheque uploaded and bank details extracted successfully.');
      setIsProcessingCheque(false);
    }, 1500);
  };

  const handleChequeUploadComplete = () => {
    // Add user message for cheque upload
    const userMessage: Message = {
      id: Date.now().toString(),
      content: 'Cheque uploaded',
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // After cheque upload, always show the review screen with extracted bank details
    // The extraction happens in handleChequeUpload and should be complete by the time this runs
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I've extracted your bank details from the cheque. Please review them once?",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setShowBankDetailsReview(true);
    }, 1800); // Wait slightly longer than the extraction delay to ensure it's complete
  };

  const handleBankDetailsConfirm = (bankDetails: {
    bankName: string;
    accountNumber: string;
    ifscCode: string;
    branchName: string;
  }) => {
    setUserData((prev) => ({
      ...prev,
      ...bankDetails,
    }));

    // Show confirmation message
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `Perfect! I've recorded your bank details:\n\nBank: ${bankDetails.bankName}\nAccount: ${bankDetails.accountNumber}\nIFSC: ${bankDetails.ifscCode}\nBranch: ${bankDetails.branchName}\n\nThank you for completing the onboarding process!`,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      
      // Move to declarations after a delay
      setTimeout(() => {
        const declarationsMessage: Message = {
          id: (Date.now() + 2).toString(),
          content: 'Just a few declarations to complete your application.',
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, declarationsMessage]);
        setCurrentStep(35); // Move to declarations step
      }, 1500);
    }, 1000);
  };

  const handleBankDetailsReviewConfirm = () => {
    setShowBankDetailsReview(false);
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: 'Confirmed',
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Show declarations step
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Just a few declarations to complete your application.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setCurrentStep(35); // Move to declarations step
    }, 1000);
  };

  const handleBankDetailsEdit = () => {
    setShowEditBankDetailsSheet(true);
  };

  const handleBankDetailsSave = (updatedData: {
    bankName: string;
    accountNumber: string;
    ifscCode: string;
    branchName: string;
  }) => {
    setUserData((prev) => ({
      ...prev,
      ...updatedData,
    }));
  };

  const handleFamilyDetailsSave = (updatedData: Partial<typeof userData>) => {
    setUserData((prev) => ({
      ...prev,
      ...updatedData,
    }));
  };

  const handleDeclarationUpdate = (field: string, value: boolean) => {
    setDeclarations((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDeclarationsConfirm = () => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: 'Declarations submitted',
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Show payment step
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Please select your preferred payment method to complete the purchase.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setCurrentStep(36); // Move to payment step
    }, 1000);
  };

  const handlePaymentMethodSelect = (paymentMethod: string, renewalMode: string) => {
    setPaymentMethod(paymentMethod);
    setRenewalMode(renewalMode);
    
    const paymentLabels: Record<string, string> = {
      'online': 'Online (Email Link)',
      'cash-branch': 'Cash Paid at Branch Office',
      'cheque': 'Cheque',
      'direct-transfer': 'Direct Transfer',
      'demand-draft': 'Demand Draft',
      'fund-transfer': 'Fund Transfer (NEFT/RTGS/IMPS)',
      'nach-digital': 'NACH - Digital (Auto Debit)',
      'nach-physical': 'NACH - Physical (Auto Debit)',
      'bim-asba': 'BIM-ASBA',
    };

    const userMessage: Message = {
      id: Date.now().toString(),
      content: `Payment: ${paymentLabels[paymentMethod]}, Renewal: ${paymentLabels[renewalMode]}`,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Show declaration step
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `Perfect! Your payment method has been set to ${paymentLabels[paymentMethod]} and renewal method to ${paymentLabels[renewalMode]}. Now, please review and acknowledge the following declarations.`,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setCurrentStep(37); // Step 29 in UI (Declaration Place)
    }, 1000);
  };

  const handleDeclarationSubmit = (place: string) => {
    setDeclarationPlace(place);
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: `Declaration submitted from ${place}`,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Show OTP verification step
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Great! Now please verify your identity by entering the OTP sent to your registered mobile number.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setCurrentStep(38); // Step 30 in UI (OTP)
    }, 1000);
  };

  const handleOTPVerification = (otp: string) => {
    setOtpVerified(true);
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: 'OTP Verified Successfully',
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Show SCR screen
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Please answer these questions about your interaction with the agent.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setCurrentStep(39); // Move to SCR step
    }, 1000);
  };

  const handleSCRSubmit = (answers: any) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: 'SCR Details Submitted',
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Show final completion message
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: '🎉 Congratulations! Your insurance application has been submitted successfully. You will receive a confirmation email shortly.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setCurrentStep(40); // Move to final completion step
    }, 1000);
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-100 p-4 gap-8">
      {/* Toggle Testing Controls Button */}
      <button
        onClick={() => setShowTestingControls(!showTestingControls)}
        className="fixed top-4 left-4 z-50 bg-[#c21b17] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#a01613] transition-colors text-sm font-medium"
      >
        {showTestingControls ? 'Hide' : 'Show'} Testing Controls
      </button>

      {/* Testing Navigation Panel */}
      {showTestingControls && (
        <div className="bg-white rounded-lg shadow-lg p-6 w-[200px] max-h-[90vh] overflow-y-auto fixed top-16 left-4 z-40">
        <div className="flex flex-col gap-3">
          <div className="mb-2">
            <h3 className="font-semibold text-gray-800 text-sm mb-1">Testing Controls</h3>
            <p className="text-xs text-gray-500">Jump to any step</p>
          </div>
          <button
            onClick={() => {
              setIsLoggedIn(false);
              setShowIntroScreen(false);
              setShowLanguageSelection(false);
            }}
            className={`${!isLoggedIn && !showIntroScreen && !showLanguageSelection ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Login Screen
          </button>
          <button
            onClick={() => {
              setIsLoggedIn(false);
              setShowIntroScreen(true);
              setShowLanguageSelection(false);
            }}
            className={`${showIntroScreen ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Intro Screen
          </button>
          <button
            onClick={() => {
              setIsLoggedIn(false);
              setShowIntroScreen(false);
              setShowLanguageSelection(true);
            }}
            className={`${showLanguageSelection ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Language Selection
          </button>
          <button
            onClick={() => jumpToStep(1)}
            className={`${currentStep === 1 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 1: Age/Gender
          </button>
          <button
            onClick={() => jumpToStep(2)}
            className={`${currentStep === 2 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 2: Goal Selection
          </button>
          <button
            onClick={() => jumpToStep(3)}
            className={`${currentStep === 3 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 3: Goal Details
          </button>
          <button
            onClick={() => jumpToStep(4)}
            className={`${currentStep === 4 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 4: Policy Type
          </button>
          <button
            onClick={() => jumpToStep(5)}
            className={`${currentStep === 5 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 5: Risk Tolerance
          </button>
          <button
            onClick={() => jumpToStep(6)}
            className={`${currentStep === 6 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 6: Plans Selection
          </button>
          <button
            onClick={() => jumpToStep(7)}
            className={`${currentStep === 7 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 7: Riders
          </button>
          <button
            onClick={() => jumpToStep(8)}
            className={`${currentStep === 8 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 8: Premium Calculator
          </button>
          <button
            onClick={() => jumpToStep(9)}
            className={`${currentStep === 9 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 9: Summary
          </button>
          <button
            onClick={() => jumpToStep(16)}
            className={`${currentStep === 16 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 10: PLVC
          </button>
          <button
            onClick={() => jumpToStep(17)}
            className={`${currentStep === 17 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 11: KYC
          </button>
          <button
            onClick={() => jumpToStep(18)}
            className={`${currentStep === 18 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 12: Docs (Physical)
          </button>
          <button
            onClick={() => jumpToStep(19)}
            className={`${currentStep === 19 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 13: Docs (Digi)
          </button>
          <button
            onClick={() => jumpToStep(20)}
            className={`${currentStep === 20 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 14: Full Photo
          </button>
          <button
            onClick={() => jumpToStep(21)}
            className={`${currentStep === 21 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 15: Personal Details
          </button>
          <button
            onClick={() => jumpToStep(22)}
            className={`${currentStep === 22 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 16: Professional Details
          </button>
          <button
            onClick={() => jumpToStep(23)}
            className={`${currentStep === 23 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 17: Annual Income
          </button>
          <button
            onClick={() => jumpToStep(24)}
            className={`${currentStep === 24 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 18: Father Details
          </button>
          <button
            onClick={() => jumpToStep(26)}
            className={`${currentStep === 26 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 19: Mother Details
          </button>
          <button
            onClick={() => jumpToStep(28)}
            className={`${currentStep === 28 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 20: Nominee Details
          </button>
          <button
            onClick={() => jumpToStep(29)}
            className={`${currentStep === 29 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 21: Height/Weight
          </button>
          <button
            onClick={() => jumpToStep(30)}
            className={`${currentStep === 30 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 22: Weight Change
          </button>
          <button
            onClick={() => jumpToStep(31)}
            className={`${currentStep === 31 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 23: Health Conditions
          </button>
          <button
            onClick={() => jumpToStep(32)}
            className={`${currentStep === 32 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 24: Substances
          </button>
          <button
            onClick={() => jumpToStep(33)}
            className={`${currentStep === 33 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 25: Assets
          </button>
          <button
            onClick={() => jumpToStep(34)}
            className={`${currentStep === 34 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 26: Bank Details
          </button>
          <button
            onClick={() => jumpToStep(35)}
            className={`${currentStep === 35 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 27: Declarations
          </button>
          <button
            onClick={() => jumpToStep(36)}
            className={`${currentStep === 36 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 28: Payment
          </button>
          <button
            onClick={() => jumpToStep(37)}
            className={`${currentStep === 37 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 29: Declaration
          </button>
          <button
            onClick={() => jumpToStep(38)}
            className={`${currentStep === 38 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 30: OTP
          </button>
          <button
            onClick={() => jumpToStep(39)}
            className={`${currentStep === 39 ? 'bg-[#c21b17] text-white ring-2 ring-[#c21b17] ring-offset-2' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-4 py-2 rounded text-sm transition-all`}
          >
            Step 31: SCR
          </button>
        </div>
      </div>
      )}

      {/* iPhone Mockup */}
      <div className="relative w-[428px] h-[926px] bg-black rounded-[60px] shadow-2xl overflow-hidden">
        {/* Screen */}
        <div className="absolute inset-[12px] bg-gradient-to-b from-[#ffe9e7] to-[#fffefe] rounded-[48px] overflow-hidden">
          <StatusBarIPhone />

          {/* Show Login Screen if not logged in */}
          {!isLoggedIn && !showIntroScreen && !showLanguageSelection ? (
            <>
              <LoginScreen onLoginSuccess={handleLoginSuccess} />
              <HomeIndicator />
            </>
          ) : showIntroScreen ? (
            <IntroScreen onGetStarted={handleGetStarted} />
          ) : showLanguageSelection ? (
            <LanguageSelectionScreen onContinue={handleLanguageContinue} />
          ) : (
            <>
              {/* Progress Stepper — only show on the main chat/onboarding flow */}
              {currentView === 'chat' && (
              <div className="absolute left-1/2 -translate-x-1/2 top-[67px] z-40">
                <ProgressStepper
                  key={`step-${displayStep}`}
                  currentStep={displayStep}
                  totalSteps={31}
                  stepTitle={getStepTitle(currentStep)}
                  className="w-[396px]"
                />
              </div>
              )}

              {/* Voice Not Supported Banner */}
              {!isVoiceSupported && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-0 top-[115px] w-full z-40 px-4"
                >
                  <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 text-center">
                    <p className="text-xs text-amber-800">
                      🎤 Voice input requires HTTPS. Please use the <strong>published link</strong> for full voice functionality.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Edit Details Banner - Show from step 2 onwards */}
              {currentStep >= 2 && currentView === 'chat' && (
                <div className="absolute left-0 top-[65px] w-full z-40">
                  <EditBanner onClick={() => setCurrentView('details')} />
                </div>
              )}

              {/* Messages Container */}
              <div className={`absolute ${currentStep >= 2 ? 'top-[165px]' : 'top-[135px]'} bottom-[104px] left-0 right-0 overflow-y-auto px-2`}>
            <div className="flex flex-col gap-4 py-4">
              <AnimatePresence mode="popLayout">
                {messages.map((message) => (
                  <div key={message.id}>
                    {message.isProfessionalDetailsCard && message.professionalData ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="px-5 w-full"
                      >
                        {message.isBusinessCardUpload ? (
                          <ReviewProfessionalDetailsCard
                            userData={{
                              designation: message.professionalData.designation || '',
                              employerName: message.professionalData.employerName || '',
                              industry: message.professionalData.industry,
                              occupation: message.professionalData.occupation || '',
                              jobDuties: message.professionalData.jobDuties,
                              hazardousEnvironment: message.professionalData.hazardousEnvironment,
                            }}
                            onEdit={handleBusinessCardProfessionalDetailsEdit}
                            onConfirm={handleBusinessCardProfessionalDetailsConfirm}
                          />
                        ) : (
                          <ReviewProfessionalDetailsCard
                            userData={{
                              designation: message.professionalData.designation || '',
                              employerName: message.professionalData.employerName || '',
                              industry: message.professionalData.industry,
                              occupation: message.professionalData.occupation || '',
                              jobDuties: message.professionalData.jobDuties,
                              hazardousEnvironment: message.professionalData.hazardousEnvironment,
                            }}
                            onEdit={handleBusinessCardProfessionalDetailsEdit}
                            onConfirm={handleBusinessCardProfessionalDetailsConfirm}
                          />
                        )}
                      </motion.div>
                    ) : message.sender === 'bot' ? (
                      <BotMessage content={message.content} />
                    ) : (
                      <UserMessage content={message.content} />
                    )}
                  </div>
                ))}
                {isThinking && <ThinkingIndicator />}
              </AnimatePresence>

              {/* Show examples only initially and not after business card extraction */}
              {messages.length === 1 && !hasExtractedBusinessCard && <ExampleResponse />}
              
              {/* Show Professional Details Continue button */}
              {showProfessionalDetailsContinue && (
                <ProfessionalDetailsContinueButton onClick={handleProfessionalDetailsContinue} />
              )}
              
              {/* Show suggestion buttons for goal selection */}
              {messages[messages.length - 1]?.sender === 'bot' && messages[messages.length - 1]?.content === 'What are you hoping to achieve with this insurance?' && (
                <SuggestionButtons onSelect={handleSuggestionSelect} />
              )}
              
              {/* Show policy type buttons */}
              {messages.length >= 7 && messages[messages.length - 1].content === 'What type of policy are you looking for?' && (
                <PolicyTypeButtons onSelect={handlePolicyTypeSelect} />
              )}
              
              {/* Show risk tolerance buttons */}
              {messages.length >= 9 && messages[messages.length - 1].content === 'How much risk are you comfortable with?' && (
                <RiskToleranceButtons onSelect={handleRiskToleranceSelect} />
              )}
              
              {/* Show plan cards */}
              {messages.length >= 11 && messages[messages.length - 1].content === "Nice! I've picked a few plans that fit your income." && (
                <PlansList onPlanPicked={handlePlanSelection} />
              )}
              
              {/* Show rider Yes/No buttons */}
              {messages.length >= 13 && messages[messages.length - 1].content === 'Riders add extra benefits to your plan. Would you like to explore and add them?' && (
                <YesNoButtons onSelect={handleRiderSelection} />
              )}
              
              {/* Show nominee multi-selection buttons */}
              {messages[messages.length - 1]?.content === 'Who would you like to add as your nominee?' && (
                <MultiSelectNomineeButtons onConfirm={handleMultiNomineeSelect} userData={userData} />
              )}
              
              {/* Show nominee share editor for multiple nominees */}
              {showNomineeShareEditor && (
                <NomineeShareEditor 
                  nominees={nomineeListForEditor} 
                  onConfirm={handleNomineeShareConfirm} 
                />
              )}
              
              {/* Show combined premium calculator */}
              {messages.length >= 15 && messages[messages.length - 1].content === "Let's calculate the premium now. Please fill in the following details:" && (
                <PremiumCalculatorSelector
                  values={{
                    policyDuration: userData.policyDuration,
                    premiumPaymentTerm: userData.premiumPaymentTerm,
                    premiumFrequency: userData.premiumFrequency,
                    employeeStatus: userData.employeeStatus,
                    productOption: userData.productOption,
                    productCategory: userData.productCategory,
                    deathBenefitMultiple: userData.deathBenefitMultiple,
                  }}
                  onUpdate={handlePremiumCalculatorUpdate}
                  onConfirm={handlePremiumCalculatorConfirm}
                />
              )}
              
              {/* Show policy summary card */}
              {showPolicySummary && (
                <PolicySummaryCard userData={userData} onGenerateBI={handleGenerateBI} />
              )}
              
              {/* Show PLVC buttons */}
              {messages[messages.length - 1]?.content === 'Select PLVC Type' && (
                <PLVCButtons onSelect={handlePLVCSelect} />
              )}
              
              {/* Show KYC buttons */}
              {messages[messages.length - 1]?.content === 'How would you like to complete your KYC verification?' && (
                <KYCButtons onSelect={handleKYCSelect} />
              )}
              
              {/* Show document upload for Physical KYC */}
              {userData.kycMethod === 'Physical KYC' && 
               messages[messages.length - 1]?.content === 'Please upload the following documents for verification. Make sure to upload your latest documents:' && (
                <DocumentUpload 
                  documents={['PAN Card', 'Address Proof Document']}
                  onUpload={handleDocumentUpload}
                  onComplete={handleDocumentUploadComplete}
                  onSkip={handleDocumentUploadSkip}
                  isProcessingAadhaar={isProcessingAadhaar}
                  isAddressProofAadhaar={isAddressProofAadhaar}
                />
              )}
              
              {/* Show document upload for Digilocker (PAN only) */}
              {userData.kycMethod === 'Digilocker' && 
               messages[messages.length - 1]?.content === 'Great! Digilocker KYC verification successful. Please upload your PAN Card for final verification.' && (
                <DocumentUpload 
                  documents={['PAN Card']}
                  onUpload={handleDocumentUpload}
                  onComplete={handleDocumentUploadComplete}
                  onSkip={handleDocumentUploadSkip}
                  isProcessingAadhaar={isProcessingAadhaar}
                  isAddressProofAadhaar={isAddressProofAadhaar}
                />
              )}
              
              {/* Show full-length photo upload */}
              {(messages[messages.length - 1]?.content === 'Please upload a full-length photo for identity verification and health assessment.' || 
                messages[messages.length - 1]?.content === 'No problem! You can upload your documents later. For now, please upload a full-length photo for identity verification and health assessment.') && (
                <FullLengthPhotoUpload 
                  onUpload={handleFullLengthPhotoUpload}
                  onComplete={handleFullLengthPhotoComplete}
                  onSkip={handleFullLengthPhotoSkip}
                />
              )}
              
              {/* Show personal details review */}
              {showPersonalDetailsReview && (
                <ReviewPersonalDetailsCard
                  userData={userData}
                  onEdit={() => setShowEditPersonalDetailsSheet(true)}
                  onConfirm={handlePersonalDetailsConfirm}
                />
              )}
              
              {/* Show professional details review */}
              {showProfessionalDetailsReview && messages[messages.length - 1]?.content === "Perfect! I'll analyze your role and auto-fill your industry and work details." && (
                <ReviewProfessionalDetailsCard
                  userData={userData}
                  onEdit={handleProfessionalDetailsEdit}
                  onConfirm={handleProfessionalDetailsConfirm}
                />
              )}
              
              {/* Show height/weight review */}
              {showHeightWeightReview && messages[messages.length - 1]?.content === "From your full-length photograph, I have analysed the height and weight, are these measurements correct?" && (
                <ReviewHeightWeightCard
                  userData={userData}
                  onEdit={() => setShowEditHeightWeightSheet(true)}
                  onConfirm={handleHeightWeightConfirm}
                />
              )}
              
              {/* Show bank details review */}
              {showBankDetailsReview && (messages[messages.length - 1]?.content === "I've extracted your bank details from the cheque. Please review them once?" || messages[messages.length - 1]?.content === "Please review your bank details once?") && (
                <ReviewBankDetailsCard
                  userData={userData}
                  onEdit={handleBankDetailsEdit}
                  onConfirm={handleBankDetailsReviewConfirm}
                />
              )}
              
              {/* Show Father's Name Info Card */}
              {currentStep === 24 && (messages[messages.length - 1]?.content === "Thank you! Now, please mention your father's date of birth (DD/MM/YYYY)." || messages[messages.length - 1]?.content === "Thank you! Now, please mention your father's full name and date of birth (DD/MM/YYYY).") && userData.fatherName && (
                <FatherNameInfoCard fatherName={userData.fatherName} />
              )}
              
              {/* Show vital status buttons for father */}
              {currentStep === 24.5 && messages[messages.length - 1]?.content === "What is your father's vital status?" && (
                <VitalStatusButtons onSelect={handleVitalStatusSelection} />
              )}
              
              {/* Show vital status buttons for mother */}
              {currentStep === 26.5 && messages[messages.length - 1]?.content === "What is your mother's vital status?" && (
                <VitalStatusButtons onSelect={handleMotherVitalStatusSelection} />
              )}
              
              {/* Show declarations selector */}
              {messages[messages.length - 1]?.content === 'Just a few declarations to complete your application.' && (
                <DeclarationsSelector
                  declarations={declarations}
                  onUpdate={handleDeclarationUpdate}
                  onConfirm={handleDeclarationsConfirm}
                />
              )}
              
              {/* Show payment method selector */}
              {messages[messages.length - 1]?.content === 'Please select your preferred payment method to complete the purchase.' && (
                <PaymentMethodSelector
                  onSelect={handlePaymentMethodSelect}
                  sumAssured={50000 * parseInt(userData.deathBenefitMultiple || '5')}
                  premium={50000}
                  bankDetails={{
                    bankName: userData.bankName,
                    accountNumber: userData.accountNumber,
                    ifscCode: userData.ifscCode,
                    branchName: userData.branchName,
                  }}
                  payorName={userData.fullName}
                />
              )}
              
              {/* Show declaration screen */}
              {messages[messages.length - 1]?.content.includes('Now, please review and acknowledge the following declarations') && (
                <DeclarationScreen
                  onSubmit={handleDeclarationSubmit}
                  applicationNumber="L10007864"
                />
              )}
              
              {/* Show OTP verification */}
              {messages[messages.length - 1]?.content === 'Great! Now please verify your identity by entering the OTP sent to your registered mobile number.' && (
                <OTPVerification
                  onVerify={handleOTPVerification}
                  expectedOTP="1111"
                />
              )}
              
              {/* Show SCR screen */}
              {messages[messages.length - 1]?.content === 'Please answer these questions about your interaction with the agent.' && (
                <SCRScreen
                  agentName="Girish Mane"
                  onSubmit={handleSCRSubmit}
                />
              )}
              
              {/* Show weight change Yes/No buttons */}
              {messages[messages.length - 1]?.content === 'Have you gained or lost more than 5kgs in the last 6 months?' && (
                <YesNoButtons onSelect={handleWeightChangeSelect} />
              )}
              
              {/* Show health conditions selector */}
              {messages[messages.length - 1]?.content === 'Do you have any existing health conditions? Select any that apply.' && (
                <HealthConditionsSelector
                  selectedConditions={selectedHealthConditions}
                  onToggle={handleHealthConditionToggle}
                  onConfirm={handleHealthConditionsConfirm}
                />
              )}
              
              {/* Show substance consumption selector */}
              {messages[messages.length - 1]?.content === 'Do you consume any of the following substances? Select any that apply.' && (
                <SubstanceConsumptionSelector
                  selectedSubstances={selectedSubstances}
                  onToggle={handleSubstanceToggle}
                  onConfirm={handleSubstanceConsumptionConfirm}
                />
              )}
              
              {/* Show asset declaration selector */}
              {messages[messages.length - 1]?.content === "Based on your annual income, I've pre-filled some assets you might own. Please review and edit as needed to indicate which of the following assets or products you already have." && (
                <AssetDeclarationSelector
                  selectedAssets={selectedAssets}
                  onToggle={handleAssetToggle}
                  onConfirm={handleAssetDeclarationConfirm}
                />
              )}
              
              {/* Show bank details method buttons */}
              {messages[messages.length - 1]?.content === "Let's get your bank details now. Do you have a cheque handy to auto-fill information or would you like to fill things manually?" && (
                <BankDetailsMethodButtons onSelect={handleBankDetailsMethodSelect} />
              )}
              
              {/* Show cheque upload */}
              {messages[messages.length - 1]?.content === 'Great! Please upload a photo of your cheque. Make sure all details are clearly visible.' && (
                <DocumentUpload 
                  documents={['Cheque']}
                  onUpload={handleChequeUpload}
                  onComplete={handleChequeUploadComplete}
                  isProcessingAadhaar={isProcessingCheque}
                />
              )}
              
              {/* Show dynamic examples for follow-up questions */}
              {messages.length > 3 && exampleText && !hasExtractedBusinessCard && (
                <ExampleResponse 
                  text={exampleText}
                />
              )}

              {/* Show upload business card divider */}
              {messages[messages.length - 1]?.content === "Let's get to know your employer name, designation & occupation" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="px-5 w-full"
                >
                  <div className="flex items-center gap-2 w-full">
                    <div className="h-px flex-1 bg-[#070b1433]" />
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic text-[11px] text-[#070b1499]">
                      or upload business card below
                    </p>
                    <div className="h-px flex-1 bg-[#070b1433]" />
                  </div>
                </motion.div>
              )}

              {/* Show business card upload - as an alternative to typing professional details */}
              {messages[messages.length - 1]?.content === "Let's get to know your employer name, designation & occupation" && (
                <DocumentUpload
                  documents={['Business Card']}
                  onUpload={handleBusinessCardUpload}
                  onComplete={handleBusinessCardComplete}
                  onSkip={handleBusinessCardSkip}
                  isProcessingAadhaar={isProcessingBusinessCard}
                  isAddressProofAadhaar={false}
                />
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="absolute bottom-[24px] content-stretch flex flex-col gap-[10px] items-start left-1/2 translate-x-[-50%] w-full">
            {isPressHoldRecording ? (
              <VoiceRecordingUI 
                onCancel={handleVoiceRecordingCancel}
                isRecording={isListening}
                transcript={inputValue}
                interimTranscript={interimTranscript}
              />
            ) : (
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-center px-[16px] py-0 relative w-full">
                    <motion.div
                      layout
                      className="bg-white relative shrink-0 w-full max-w-[393px]"
                      animate={{
                        borderRadius: isListening ? 20 : 100,
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <motion.div
                        layout
                        className="content-stretch flex items-center overflow-clip relative w-full"
                        animate={{
                          height: 54,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          paddingLeft: 11,
                          paddingRight: 11,
                          paddingTop: 7,
                          paddingBottom: 7,
                          borderRadius: 100,
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        {/* Compact Input Mode - Only Mode Available */}
                        <div
                          className="flex-1 flex items-center gap-[13px]"
                        >
                          <div className="relative shrink-0 size-[24px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                              <path d={svgPaths.pb1ab5e8} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            </svg>
                          </div>
                          <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder={t('Type your response')}
                            autoFocus
                            tabIndex={0}
                            className="flex-1 bg-transparent outline-none font-['Inter:Light',sans-serif] font-light text-[16px] text-black placeholder:text-gray-400"
                          />
                        </div>

                        {/* Mic/Send Button - Press & Hold Only */}
                        <motion.button
                          layout
                          whileTap={{ scale: 0.95 }}
                          onClick={handleMicButtonClick}
                          onMouseDown={handleMicPressStart}
                          onMouseUp={handleMicPressEnd}
                          onMouseLeave={handleMicPressEnd}
                          onTouchStart={handleMicPressStart}
                          onTouchEnd={handleMicPressEnd}
                          onTouchCancel={handleMicPressEnd}
                          title={!isVoiceSupported ? 'Voice input requires HTTPS. Please use the published link.' : inputValue.trim() ? 'Send message' : 'Press & hold mic to speak, release to send'}
                          className="overflow-clip relative rounded-[100px] shrink-0 size-[40px] flex items-center justify-center bg-[#c21b17]"
                          style={
                            {
                              '--fill-0': 'white',
                              '--stroke-0': 'white',
                            } as React.CSSProperties
                          }
                        >
                          <div className="size-[20px]">
                            {inputValue.trim() ? (
                              <div className="relative size-full">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21">
                                  <path d={svgPathsNew.p228c500} fill="white" />
                                </svg>
                              </div>
                            ) : (
                              <Mic />
                            )}
                          </div>
                        </motion.button>
                    </motion.div>
                    <motion.div
                      aria-hidden="true"
                      className="absolute border border-[#ffe6e5] border-solid inset-0 pointer-events-none"
                      animate={{
                        borderRadius: isListening ? 20 : 100,
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            )}
          </div>

          {/* Home Indicator */}
          <HomeIndicator />

          {/* Details Page */}
          <AnimatePresence>
            {currentView === 'details' && (
              <DetailsPage
                userData={userData}
                documents={uploadedDocs}
                previewUrls={docPreviewUrls}
                onBack={() => setCurrentView('chat')}
                onEdit={() => setShowEditSheet(true)}
                onEditPolicy={() => setShowEditPolicySheet(true)}
                onEditDocuments={() => setShowEditDocumentsSheet(true)}
                onEditPersonalDetails={() => setShowEditPersonalDetailsSheet(true)}
                onEditProfessionalDetails={() => setShowEditProfessionalDetailsSheet(true)}
                onEditFamilyDetails={() => setShowEditFamilyDetailsSheet(true)}
                onEditHeightWeight={() => setShowEditHeightWeightSheet(true)}
              />
            )}
          </AnimatePresence>

          {/* Edit Bottom Sheet */}
          <AnimatePresence>
            {showEditSheet && (
              <EditBottomSheet
                userData={userData}
                onClose={() => setShowEditSheet(false)}
                onSave={(newData) => setUserData(newData)}
                onConfirmChanges={() => { triggerSaveToast(); }}
              />
            )}
          </AnimatePresence>

          {/* Edit Policy Bottom Sheet */}
          <AnimatePresence>
            {showEditPolicySheet && (
              <EditPolicyBottomSheet
                userData={userData}
                onClose={() => setShowEditPolicySheet(false)}
                onSave={(newData) => setUserData({ ...userData, ...newData })}
                onConfirmChanges={() => { triggerSaveToast(); }}
              />
            )}
          </AnimatePresence>

          {/* Edit Personal Details Bottom Sheet */}
          <AnimatePresence>
            {showEditPersonalDetailsSheet && (
              <EditPersonalDetailsBottomSheet
                userData={userData}
                onClose={() => setShowEditPersonalDetailsSheet(false)}
                onSave={(newData) => {
                  setUserData((prev) => ({ ...prev, ...newData }));
                  triggerSaveToast();
                }}
              />
            )}
          </AnimatePresence>
          
          {/* Edit Professional Details Bottom Sheet */}
          <AnimatePresence>
            {showEditProfessionalDetailsSheet && (
              <EditProfessionalDetailsBottomSheet
                userData={userData}
                onClose={() => setShowEditProfessionalDetailsSheet(false)}
                onSave={handleProfessionalDetailsEditSave}
              />
            )}
          </AnimatePresence>
          
          {/* Edit Height/Weight Bottom Sheet */}
          <AnimatePresence>
            {showEditHeightWeightSheet && (
              <EditHeightWeightBottomSheet
                userData={userData}
                aiEstimatedHeight={userData.aiEstimatedHeight}
                aiEstimatedWeight={userData.aiEstimatedWeight}
                onClose={() => setShowEditHeightWeightSheet(false)}
                onSave={(newData) => { handleHeightWeightSave(newData); triggerSaveToast(); }}
              />
            )}
          </AnimatePresence>
          
          {/* Edit Bank Details Bottom Sheet */}
          <AnimatePresence>
            {showEditBankDetailsSheet && (
              <EditBankDetailsBottomSheet
                userData={userData}
                onClose={() => setShowEditBankDetailsSheet(false)}
                onSave={handleBankDetailsSave}
              />
            )}
          </AnimatePresence>

          {/* Edit Documents Bottom Sheet */}
          <AnimatePresence>
            {showEditDocumentsSheet && (
              <EditDocumentsBottomSheet
                documents={uploadedDocs}
                previewUrls={docPreviewUrls}
                onUpload={(docType, file) => {
                  setUploadedDocs(prev => ({ ...prev, [docType]: file }));
                  if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setDocPreviewUrls(prev => ({ ...prev, [docType]: reader.result as string }));
                    };
                    reader.readAsDataURL(file);
                  } else {
                    setDocPreviewUrls(prev => ({ ...prev, [docType]: 'pdf' }));
                  }
                }}
                onRemove={(docType) => {
                  setUploadedDocs(prev => ({ ...prev, [docType]: null }));
                  setDocPreviewUrls(prev => {
                    const newPreviews = { ...prev };
                    delete newPreviews[docType];
                    return newPreviews;
                  });
                }}
                onClose={() => setShowEditDocumentsSheet(false)}
              />
            )}
          </AnimatePresence>

          {/* Edit Family Details Bottom Sheet */}
          <AnimatePresence>
            {showEditFamilyDetailsSheet && (
              <EditFamilyDetailsBottomSheet
                userData={userData}
                onClose={() => setShowEditFamilyDetailsSheet(false)}
                onSave={handleFamilyDetailsSave}
              />
            )}
          </AnimatePresence>
          
          {/* Document Extraction Success Toast */}
          <AnimatePresence>
            {showAadhaarSuccessToast && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-[14px] shadow-lg z-50 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="font-medium text-sm">Document details extracted successfully!</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Save Changes Toast */}
          <AnimatePresence>
            {showSaveToast && (
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.3 }}
                className="absolute top-[70px] left-1/2 -translate-x-1/2 bg-[#1a7a3c] text-white px-6 py-3 rounded-[14px] shadow-lg z-[60] flex items-center gap-2 whitespace-nowrap"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="font-medium text-sm">Changes saved successfully</p>
              </motion.div>
            )}
          </AnimatePresence>
          </>
          )}
        </div>

        {/* iPhone Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[180px] h-[30px] bg-black rounded-b-[20px] z-50" />
      </div>
    </div>
  );
}

function AppContent() {
  const { setSelectedLanguage: setContextLanguage } = useLanguage();
  
  return <InsuranceOnboardingApp onLanguageChange={setContextLanguage} />;
}