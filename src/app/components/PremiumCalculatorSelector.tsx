import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface PremiumCalculatorSelectorProps {
  values: {
    policyDuration: string;
    premiumPaymentTerm: string;
    premiumFrequency: string;
    employeeStatus: string;
    productOption: string;
    productCategory: string;
    deathBenefitMultiple: string;
  };
  onUpdate: (field: string, value: string) => void;
  onConfirm: () => void;
}

export function PremiumCalculatorSelector({
  values,
  onUpdate,
  onConfirm
}: PremiumCalculatorSelectorProps) {
  const allFieldsFilled = 
    values.policyDuration &&
    values.premiumPaymentTerm &&
    values.premiumFrequency &&
    values.employeeStatus &&
    values.productOption &&
    values.productCategory &&
    values.deathBenefitMultiple;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full px-4 pb-4"
    >
      <div className="bg-white rounded-2xl p-5 space-y-5">
        {/* Policy Term */}
        <div className="space-y-3">
          <label className="block font-medium text-[#263238]">
            Policy Term
          </label>
          <div className="flex gap-3">
            {['15 years', '20 years'].map((option) => (
              <button
                key={option}
                onClick={() => onUpdate('policyDuration', option)}
                className={`px-4 py-2 rounded-full border transition-all ${
                  values.policyDuration === option
                    ? 'bg-[#c21b17] text-white border-[#c21b17]'
                    : 'bg-white text-[#263238] border-gray-300 hover:border-[#c21b17]'
                }`}
              >
                {option.replace(' years', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Premium Policy Term */}
        <div className="space-y-3">
          <label className="block font-medium text-[#263238]">
            Premium Policy Term
          </label>
          <div className="flex gap-3">
            {['15 Years', '20 Years'].map((option) => (
              <button
                key={option}
                onClick={() => onUpdate('premiumPaymentTerm', option)}
                className={`px-4 py-2 rounded-full border transition-all ${
                  values.premiumPaymentTerm === option
                    ? 'bg-[#c21b17] text-white border-[#c21b17]'
                    : 'bg-white text-[#263238] border-gray-300 hover:border-[#c21b17]'
                }`}
              >
                {option.replace(' Years', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Premium Frequency */}
        <div className="space-y-3">
          <label className="block font-medium text-[#263238]">
            Premium Frequency
          </label>
          <div className="flex flex-wrap gap-2">
            {['Yearly', 'Half Yearly', 'Quarterly', 'Monthly'].map((option) => (
              <button
                key={option}
                onClick={() => onUpdate('premiumFrequency', option)}
                className={`px-4 py-2 rounded-full border transition-all ${
                  values.premiumFrequency === option
                    ? 'bg-[#c21b17] text-white border-[#c21b17]'
                    : 'bg-white text-[#263238] border-gray-300 hover:border-[#c21b17]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-b from-[#fff9e6] to-white border border-[#ffe5b4] rounded-xl p-3 flex items-start gap-2">
          <Sparkles className="size-4 text-[#FFA726] shrink-0 mt-0.5" />
          <p className="text-[#455a64]">
            90% of the Users pick Yearly Premium Frequency for Discounts
          </p>
        </div>

        {/* Employee Status */}
        <div className="space-y-3">
          <label className="block font-medium text-[#263238]">
            Are you an employee of Company & Promoter Group companies including their Subsidiaries and Associates?
          </label>
          <div className="flex gap-3">
            {['None', 'Staff'].map((option) => (
              <button
                key={option}
                onClick={() => onUpdate('employeeStatus', option)}
                className={`px-4 py-2 rounded-full border transition-all ${
                  values.employeeStatus === option
                    ? 'bg-[#c21b17] text-white border-[#c21b17]'
                    : 'bg-white text-[#263238] border-gray-300 hover:border-[#c21b17]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Product Option */}
        <div className="space-y-3">
          <label className="block font-medium text-[#263238]">
            Product Option
          </label>
          <div className="flex gap-3">
            {['Option 1', 'Option 2'].map((option) => (
              <button
                key={option}
                onClick={() => onUpdate('productOption', option)}
                className={`px-4 py-2 rounded-full border transition-all ${
                  values.productOption === option
                    ? 'bg-[#c21b17] text-white border-[#c21b17]'
                    : 'bg-white text-[#263238] border-gray-300 hover:border-[#c21b17]'
                }`}
              >
                {option.replace('Option ', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Product Category */}
        <div className="space-y-3">
          <label className="block font-medium text-[#263238]">
            Product Category
          </label>
          <div className="flex gap-3">
            {['Gold', 'Silver'].map((option) => (
              <button
                key={option}
                onClick={() => onUpdate('productCategory', option)}
                className={`px-4 py-2 rounded-full border transition-all ${
                  values.productCategory === option
                    ? 'bg-[#c21b17] text-white border-[#c21b17]'
                    : 'bg-white text-[#263238] border-gray-300 hover:border-[#c21b17]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Death Benefit Multiple */}
        <div className="space-y-3">
          <label className="block font-medium text-[#263238]">
            Death Benefit Multiple
          </label>
          <div className="flex gap-3">
            {['5', '7', '10'].map((option) => (
              <button
                key={option}
                onClick={() => onUpdate('deathBenefitMultiple', option)}
                className={`px-4 py-2 rounded-full border transition-all ${
                  values.deathBenefitMultiple === option
                    ? 'bg-[#c21b17] text-white border-[#c21b17]'
                    : 'bg-white text-[#263238] border-gray-300 hover:border-[#c21b17]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        {allFieldsFilled && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={onConfirm}
            className="w-full bg-[#c21b17] text-white py-3 rounded-full font-medium hover:bg-[#a01612] transition-colors"
          >
            Continue
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
