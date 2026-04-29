import { motion } from 'motion/react';
import { useTranslation } from '../contexts/LanguageContext';

// Substance Consumption Multi-Select Component
export function SubstanceConsumptionSelector({ 
  selectedSubstances, 
  onToggle, 
  onConfirm 
}: { 
  selectedSubstances: string[];
  onToggle: (substance: string, autoConfirm?: boolean) => void;
  onConfirm: () => void;
}) {
  const { t } = useTranslation();
  const substances = [
    'Tobacco',
    'Alcohol',
    'Narcotics',
    'Stopped',
    "I don't consume any substances"
  ];

  const isNoneSelected = selectedSubstances.includes("I don't consume any substances");
  const hasSelections = selectedSubstances.length > 0;

  const handleClick = (substance: string) => {
    // If clicking "I don't consume any substances", pass auto-confirm flag
    if (substance === "I don't consume any substances") {
      onToggle(substance, true); // Pass true for auto-confirm
    } else {
      onToggle(substance, false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex flex-col gap-3 px-5 w-full mb-4"
    >
      {substances.map((substance, index) => {
        const isSelected = selectedSubstances.includes(substance);
        const isDisabled = !isSelected && (
          (isNoneSelected && substance !== "I don't consume any substances")
        );

        return (
          <motion.button
            key={substance}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.05, duration: 0.3 }}
            whileTap={{ scale: isDisabled ? 1 : 0.98 }}
            onClick={() => !isDisabled && handleClick(substance)}
            disabled={isDisabled}
            className={`relative flex items-center justify-between px-4 py-3 rounded-[14px] transition-all ${
              isSelected 
                ? 'bg-[#c21b17] text-white shadow-md' 
                : isDisabled
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white hover:bg-[#fff7f7] text-[#c21b17] shadow-sm'
            } ${
              substance === "I don't consume any substances" && !isSelected && !isDisabled
                ? 'border-2 border-green-500'
                : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                isSelected 
                  ? 'border-white bg-white' 
                  : substance === "I don't consume any substances" && !isDisabled
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
                substance === "I don't consume any substances" && !isSelected && !isDisabled
                  ? 'text-black'
                  : ''
              }`}>
                {t(substance)}
              </p>
            </div>
          </motion.button>
        );
      })}
      
      {/* Confirm Button - only show when NOT "I don't consume any substances" */}
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

// Asset Declaration Multi-Select Component
export function AssetDeclarationSelector({ 
  selectedAssets, 
  onToggle, 
  onConfirm 
}: { 
  selectedAssets: string[];
  onToggle: (asset: string) => void;
  onConfirm: () => void;
}) {
  const { t } = useTranslation();
  const assets = [
    '2 wheeler',
    'Own house',
    'Small Car/Sedan/SUV',
    'Land',
    'Bank Deposits',
    'Home Loan',
    'Car/personal loan',
    'Pension Plan',
    'Life Insurance',
    'Health Insurance'
  ];

  const hasSelections = selectedAssets.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex flex-col gap-3 px-5 w-full mb-4"
    >
      {assets.map((asset, index) => {
        const isSelected = selectedAssets.includes(asset);

        return (
          <motion.button
            key={asset}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.04, duration: 0.3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onToggle(asset)}
            className={`relative flex items-center justify-between px-4 py-3 rounded-[14px] transition-all ${
              isSelected 
                ? 'bg-[#c21b17] text-white shadow-md' 
                : 'bg-white hover:bg-[#fff7f7] text-[#c21b17] shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                isSelected ? 'border-white bg-white' : 'border-[#c21b17]'
              }`}>
                {isSelected && (
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5L4.5 8.5L11 1" stroke="#c21b17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[15px] text-left`}>
                {t(asset)}
              </p>
            </div>
          </motion.button>
        );
      })}
      
      {/* Confirm Button */}
      {hasSelections && (
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