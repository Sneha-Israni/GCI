import { motion } from 'motion/react';
import { useState } from 'react';

interface DeclarationScreenProps {
  onSubmit: (place: string) => void;
  applicationNumber: string;
}

export function DeclarationScreen({ onSubmit, applicationNumber }: DeclarationScreenProps) {
  const [agreed, setAgreed] = useState(false);
  const [place, setPlace] = useState('');

  const handleSubmit = () => {
    if (agreed && place.trim()) {
      onSubmit(place.trim());
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="px-5 w-full mb-4 max-h-[calc(100vh-300px)] overflow-y-auto"
    >
      {/* Application Number Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="bg-white rounded-[12px] p-4 mb-4 shadow-sm border border-gray-200"
      >
        <p className="text-xs text-gray-600 mb-1">Application No.</p>
        <p className="text-base font-['Arial:Bold',sans-serif]">{applicationNumber}</p>
      </motion.div>

      {/* Declaration Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="mb-4"
      >
        <h3 className="font-['Arial:Bold',sans-serif] text-[18px] mb-4">Declaration</h3>

        {/* Know what you are buying */}
        <div className="mb-4">
          <h4 className="font-['Arial:Bold',sans-serif] text-[15px] mb-3">Know what you are buying</h4>
          <div className="space-y-2.5">
            {[
              'I understand that this is a Life insurance/Pension product.',
              'I understand that General Central Insurance Company Limited will issue the policy post a verification call only.',
              'I understand that I will not receive any gift, cash, travel/gift vouchers, gold coin or any other benefit apart from what is stated in product brochure for purchasing this product.',
              'I understand that this is a Regular premium policy',
              'I understand that it is not a Fixed deposit, loan or Government bond.',
              'I understand that this is a Traditional plan'
            ].map((item, index) => (
              <div key={index} className="flex gap-2 text-[13px] text-gray-800">
                <span className="text-gray-600 font-medium">{index + 1}.</span>
                <p className="flex-1 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-300 my-4" />

        {/* General declaration */}
        <div className="mb-4">
          <h4 className="font-['Arial:Bold',sans-serif] text-[15px] mb-3">General declaration</h4>
          <div className="bg-gray-100 rounded-[12px] p-3 space-y-2.5">
            <div className="flex gap-2 text-[12px] text-gray-800 leading-relaxed">
              <span className="text-gray-600 font-medium">1.</span>
              <p className="flex-1">I / We declare that I / We will notify in writing any change in information pertaining to the Person to be insured / proposer as provided in the proposal form immediately on occurrence of such change prior to commencement of risk or issuance of policy whichever is earlier.</p>
            </div>
            <div className="flex gap-2 text-[12px] text-gray-800 leading-relaxed">
              <span className="text-gray-600 font-medium">2.</span>
              <p className="flex-1">Any person making default in complying with the provisions of this section shall be liable for a penalty which may extend to ten lakh rupees.</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-300 my-4" />

        {/* Fraud and misrepresentation */}
        <div className="mb-4">
          <h4 className="font-['Arial:Bold',sans-serif] text-[15px] mb-3">Fraud and misrepresentation</h4>
          <div className="bg-gray-100 rounded-[12px] p-3 space-y-2.5">
            <div className="flex gap-2 text-[12px] text-gray-800 leading-relaxed">
              <span className="text-gray-600 font-medium">1.</span>
              <p className="flex-1">No Policy of Life Insurance shall be called in question on any ground whatsoever after the expiry of 3 years from the date of the policy i.e. from the date of issuance of the policy or the date of commencement of risk or the date of revival of the policy or the date of the rider to the policy, whichever is later</p>
            </div>
            <div className="flex gap-2 text-[12px] text-gray-800 leading-relaxed">
              <span className="text-gray-600 font-medium">2.</span>
              <p className="flex-1">A policy of Life Insurance may be called in question at any time within 3 years from the date of issuance of the policy or the date of commencement of risk or the date of revival of the policy or the date of the rider to the policy, whichever is later, on the ground of fraud.</p>
            </div>
          </div>
        </div>

        {/* Agreement Checkbox */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="bg-[#f7faff] rounded-[12px] p-3 mb-4 border border-gray-200"
        >
          <button
            onClick={() => setAgreed(!agreed)}
            className="flex items-start gap-3 w-full text-left"
          >
            <div className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
              agreed ? 'bg-[#c21b17] border-[#c21b17]' : 'bg-white border-gray-300'
            }`}>
              {agreed && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </div>
            <p className="font-medium text-[13px] text-gray-800 leading-relaxed flex-1">
              I have understood and agree to the above mentioned terms and conditions of the Proposal Form
            </p>
          </button>
        </motion.div>

        {/* Place Input */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="mb-4"
        >
          <label className="block text-sm text-gray-700 mb-2">Place *</label>
          <input
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            placeholder="Enter place name"
            className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:outline-none focus:border-[#c21b17] text-[15px] transition-colors"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.4 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmit}
          disabled={!agreed || !place.trim()}
          className={`w-full py-4 rounded-[12px] font-['Inter:Semibold',sans-serif] font-semibold text-[15px] transition-all shadow-md ${
            agreed && place.trim()
              ? 'bg-gradient-to-r from-[#c21b17] to-[#a01613] text-white hover:shadow-lg'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Submit Details
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
