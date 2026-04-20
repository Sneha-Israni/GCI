import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '../hooks/useTranslation';
import svgPaths from '../../imports/svg-kmz5b1ptb4';
import imgMascot from 'figma:asset/9b8882faf2edb23d4f87beff823e8af6f285c81a.png';
import IconParkSolidCheckOne from '../../imports/IconParkSolidCheckOne';

interface LanguageSelectionScreenProps {
  onContinue: (language: string) => void;
}

const languages = [
  { id: 'english', label: 'English', nativeLabel: null },
  { id: 'hindi', label: '(Hindi)', nativeLabel: 'हिंदी', font: 'Noto_Sans_Devanagari:Light' },
  { id: 'tamil', label: '(Tamil)', nativeLabel: 'தமிழ்', font: 'Noto_Sans_Tamil:Light' },
  { id: 'kannada', label: '(Kannada)', nativeLabel: 'ಕನ್ನಡ', font: 'Noto_Sans_Kannada:Light' },
  { id: 'malayalam', label: '(Malyalam)', nativeLabel: 'മലയാളം', font: 'Noto_Sans_Malayalam:Light' },
  { id: 'telugu', label: '(Telugu)', nativeLabel: 'తెలుగు', font: 'Noto_Sans_Telugu:Light' },
  { id: 'bengali', label: '(Bengali)', nativeLabel: 'বাংলা', font: 'Noto_Sans_Bengali:Light' },
  { id: 'marathi', label: '(Marathi)', nativeLabel: 'मराठी', font: 'Noto_Sans_Devanagari:Light' },
  { id: 'gujarati', label: '(Gujrati)', nativeLabel: 'ગુજરાતી', font: 'Noto_Sans_Gujarati:Light' },
  { id: 'punjabi', label: '(Punjabi)', nativeLabel: 'ਪੰਜਾਬੀ', font: 'Noto_Sans_Gujarati:Light' },
];

export function LanguageSelectionScreen({ onContinue }: LanguageSelectionScreenProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const { t } = useTranslation();

  const handleContinue = () => {
    onContinue(selectedLanguage);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0"
      style={{ 
        backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 428 1263\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"1\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(1.7948e-15 86.496 -29.311 5.2963e-15 214 631.5)\"><stop stop-color=\"rgba(255,233,231,1)\" offset=\"0\"/><stop stop-color=\"rgba(255,254,254,1)\" offset=\"1\"/></radialGradient></defs></svg>')" 
      }}
    >
      {/* Header Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute left-1/2 -translate-x-1/2 top-[119px] w-[349px] flex flex-col gap-[12px] items-center"
      >
        {/* Mascot Icon */}
        <div className="relative shrink-0 size-[80px]">
          <img 
            alt="Mascot" 
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
            src={imgMascot} 
          />
        </div>

        {/* Title and Description */}
        <div className="flex flex-col gap-[8px] items-start leading-[20px] text-center w-full whitespace-pre-wrap">
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[#393737] text-[20px] w-full">
            {t('Choose your preferred language')}
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#676565] text-[14px] w-full">
            {t('Select your preferred language to continue.')}
          </p>
        </div>
      </motion.div>

      {/* Language List */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute left-1/2 -translate-x-1/2 top-[327px] w-[372px] flex flex-col gap-[20px] items-start overflow-y-auto max-h-[450px]"
      >
        {languages.map((lang, index) => (
          <motion.button
            key={lang.id}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.05, duration: 0.3 }}
            onClick={() => setSelectedLanguage(lang.id)}
            className="bg-white relative rounded-[12px] shrink-0 w-full transition-all hover:shadow-md active:scale-98"
          >
            <div className={`absolute border ${selectedLanguage === lang.id ? 'border-[#a11612]' : 'border-[#ebe5e5]'} border-solid inset-0 pointer-events-none rounded-[12px] transition-colors`} />
            <div className="flex flex-row items-center size-full">
              <div className="flex items-center justify-between px-[24px] py-[16px] w-full">
                {lang.nativeLabel ? (
                  <div className="flex gap-[8.527px] items-center leading-[21.318px] text-[21.318px]">
                    <p className={`font-['Inter:Light','${lang.font}',sans-serif] font-light text-black`}>
                      {lang.nativeLabel}
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5d5a5a]">
                      {lang.label}
                    </p>
                  </div>
                ) : (
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21.318px] text-[#5d5a5a] text-[21.318px]">
                    {lang.label}
                  </p>
                )}
                
                {/* Checkmark for selected language */}
                {selectedLanguage === lang.id && (
                  <div className="overflow-clip relative shrink-0 size-[24px]">
                    <IconParkSolidCheckOne />
                  </div>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Continue Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute bottom-[56px] left-1/2 -translate-x-1/2 w-[428px] px-[24px] py-[0px]"
      >
        <button
          onClick={handleContinue}
          className="bg-gradient-to-b from-[#c21b17] to-[#a11612] rounded-[12px] w-full transition-all hover:shadow-lg active:scale-95"
        >
          <div className="flex items-center justify-center px-[103px] py-[13px] w-full">
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] text-[16px] text-center text-white">
              {t('Continue')}
            </p>
          </div>
        </button>
      </motion.div>

      {/* Home Indicator */}
      <div className="absolute bottom-0 h-[27px] left-[5px] right-[5px]">
        <div className="absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 -translate-x-1/2 w-[144px]">
          <div className="-scale-y-100 rotate-180">
            <div className="bg-black h-[5px] rounded-[100px] w-[144px]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}