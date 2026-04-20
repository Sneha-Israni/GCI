import React, { useEffect, useRef } from 'react';
import { useTranslation } from '../contexts/LanguageContext';

interface ProgressStepperProps {
  currentStep: number;
  totalSteps: number;
  stepTitle: string;
  className?: string;
}

export function ProgressStepper({ currentStep, totalSteps, stepTitle }: ProgressStepperProps) {
  const { t } = useTranslation();
  const progressPercentage = (currentStep / totalSteps) * 100;
  const displayPercentage = Math.max(5, Math.round(progressPercentage / 5) * 5);
  const renderCount = useRef(0);
  renderCount.current++;

  // Debug logging
  console.log(`📊 ProgressStepper RENDER #${renderCount.current} - currentStep: ${currentStep}, totalSteps: ${totalSteps}, stepTitle: ${stepTitle}, progress: ${progressPercentage}%`);

  useEffect(() => {
    console.log(`✅ ProgressStepper MOUNTED/UPDATED - currentStep is now: ${currentStep}`);
  }, [currentStep]);

  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[396px]">
      {/* Progress Details */}
      <div className="content-stretch flex items-center relative shrink-0">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#545659] text-[12px]">
          {displayPercentage}%, {t(stepTitle)}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="bg-[#e6dcdb] content-stretch flex flex-col h-[6px] items-start relative rounded-[37px] shrink-0 w-full">
        <div
          className="bg-gradient-to-r from-[#cc1b17] h-[6px] relative rounded-[37px] shrink-0 to-[#8e1613] transition-all duration-300 ease-out"
          style={{ width: `${Math.max(0, Math.min(100, progressPercentage))}%` }}
        >
          <div className="size-full" />
        </div>
      </div>
    </div>
  );
}