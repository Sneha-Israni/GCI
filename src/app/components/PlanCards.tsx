import React, { useState } from 'react';
import { motion } from 'motion/react';
import svgPaths from '../../imports/svg-uv2j9hv8ol';

interface PlanCardProps {
  title: string;
  benefits: string[];
  onPlanClick: () => void;
  onBrochureClick: () => void;
  onPickPlan: () => void;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}

function CheckIcon() {
  return (
    <div className="shrink-0 size-[16px]">
      <div className="h-[16px] overflow-clip relative shrink-0 w-full">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
          <div className="absolute inset-[-13.64%_-9.37%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10">
              <path d={svgPaths.pb78d1c0} stroke="#C21B17" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlanCard({ title, benefits, onPlanClick, onBrochureClick, onPickPlan, index, isSelected, onSelect }: PlanCardProps) {
  return (
    <motion.div
      onClick={onSelect}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: isSelected ? 1.02 : 1,
        boxShadow: isSelected ? '0 8px 16px rgba(194, 27, 23, 0.2)' : '0 1px 3px rgba(0, 0, 0, 0.1)',
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ delay: 0.6 + index * 0.15, duration: 0.4 }}
      className={`relative bg-white rounded-[16px] p-4 border-2 w-full text-left cursor-pointer ${
        isSelected ? 'border-[#c21b17]' : 'border-transparent'
      }`}
    >
      {/* Selection Indicator */}
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, type: 'spring' }}
          className="absolute top-3 right-3 bg-[#c21b17] rounded-full size-[24px] flex items-center justify-center"
        >
          <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
            <path d="M2 7L5.5 10.5L12 3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      )}

      {/* Title */}
      <h3 className="font-['Inter:Medium',sans-serif] font-medium text-[#263238] text-[16px] mb-4 pr-8">
        {title}
      </h3>

      {/* Benefits */}
      <div className="flex flex-col gap-[12px] mb-4">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="flex items-start gap-[12px]">
            <CheckIcon />
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[#536b76] text-[14px] leading-[1.2]">
              {benefit}
            </p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-[8px] mt-4">
        <div className="flex gap-[8px]">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPlanClick();
            }}
            className="bg-[#ffe9e7] border border-[#c21b17] rounded-[8px] h-[38px] flex-1 flex items-center justify-center gap-1 hover:bg-[#ffd9d6] transition-colors"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path d={svgPaths.p19416e00} stroke="#C21B17" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p3e059a80} stroke="#C21B17" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M6.66667 6H5.33333" stroke="#C21B17" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M10.6667 8.66667H5.33333" stroke="#C21B17" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M10.6667 11.3333H5.33333" stroke="#C21B17" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
            <span className="font-['Inter:Medium',sans-serif] font-medium text-[#c21b17] text-[13px]">
              View Plan
            </span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onBrochureClick();
            }}
            className="bg-white border border-[rgba(0,0,0,0.2)] rounded-[8px] h-[38px] flex-1 flex items-center justify-center gap-1 hover:bg-gray-50 transition-colors"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path d="M8 10V2" stroke="#263238" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p23ad1400} stroke="#263238" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p19411800} stroke="#263238" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
            <span className="font-['Inter:Medium',sans-serif] font-medium text-[#263238] text-[13px]">
              Brochure
            </span>
          </button>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onPickPlan();
          }}
          className="bg-[#c21b17] border border-[#c21b17] rounded-[8px] h-[44px] w-full flex items-center justify-center gap-2 hover:bg-[#b01612] transition-colors"
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
            <path d="M3 9L7 13L15 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-['Inter:Medium',sans-serif] font-medium text-white text-[15px]">
            Pick this plan
          </span>
        </button>
      </div>
    </motion.div>
  );
}

export function PlansList({ onPlanPicked }: { onPlanPicked?: (planName: string) => void }) {
  const plans = [
    {
      title: 'Assured Education Plan',
      benefits: [
        'Guaranteed education fund for children',
        'Tax benefits under Section 80C',
        'Flexible premium payment options',
      ],
    },
    {
      title: 'Future Secure Investment',
      benefits: [
        'Dual benefit of protection & savings',
        'Market-linked returns potential',
        'Partial withdrawal facility',
      ],
    },
    {
      title: 'Education Protection',
      benefits: [
        'Premium waiver on critical illness',
        'Annual bonus accumulation',
        'Scholarship benefit for milestones',
      ],
    },
    {
      title: 'Educare Insurance',
      benefits: [
        'Comprehensive family floater cover',
        'Cashless treatment at network hospitals',
        'No claim bonus benefits',
      ],
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanClick = (title: string) => {
    console.log('Plan at glance clicked:', title);
    // Handle plan details view
  };

  const handleBrochureClick = (title: string) => {
    console.log('e-brochure clicked:', title);
    // Handle brochure download
  };

  const handleSelect = (title: string) => {
    setSelectedPlan(title);
  };

  const handlePickPlan = (title: string) => {
    setSelectedPlan(title);
    if (onPlanPicked) {
      onPlanPicked(title);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="px-5 w-full flex flex-col gap-[16px]"
    >
      {plans.map((plan, index) => (
        <PlanCard
          key={plan.title}
          title={plan.title}
          benefits={plan.benefits}
          onPlanClick={() => handlePlanClick(plan.title)}
          onBrochureClick={() => handleBrochureClick(plan.title)}
          onPickPlan={() => handlePickPlan(plan.title)}
          index={index}
          isSelected={selectedPlan === plan.title}
          onSelect={() => handleSelect(plan.title)}
        />
      ))}
    </motion.div>
  );
}