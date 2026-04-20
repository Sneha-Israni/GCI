import React from 'react';
import { motion } from 'motion/react';
import svgPaths from '../../imports/svg-ae8re9nb5w';

// Review Height Weight Card
interface ReviewHeightWeightProps {
  userData: {
    height: string;
    weight: string;
  };
  onEdit: () => void;
  onConfirm: () => void;
}

export function ReviewHeightWeightCard({ userData, onEdit, onConfirm }: ReviewHeightWeightProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="px-5 w-full mb-4"
      >
        {/* Card */}
        <div className="bg-white relative rounded-[16px] w-full shadow-[0px_2px_8px_rgba(0,0,0,0.08)]">
          <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#263238]">
                Physical Measurements
              </h3>
              <button
                onClick={onEdit}
                className="text-[#c21b17] font-['Inter:Medium',sans-serif] font-medium text-[14px]"
              >
                Edit
              </button>
            </div>

            {/* AI Detection Banner */}
            <div className="bg-[#f0f9ff] relative rounded-[8px] h-[30px] w-full flex items-center mb-4">
              <div className="absolute left-[10px] size-[16px] top-[7px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p1ea4e200} fill="#0A70FF" />
                </svg>
              </div>
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[32px] text-[#0a70ff] text-[12px] top-[6px]">
                Auto detected
              </p>
            </div>

            {/* Details Grid */}
            <div className="space-y-3">
              {/* Height */}
              <div className="flex justify-between items-start">
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#666] flex-1">
                  Height
                </p>
                <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#263238] text-right flex-1">
                  {userData.height}
                </p>
              </div>

              {/* Weight */}
              <div className="flex justify-between items-start">
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#666] flex-1">
                  Weight
                </p>
                <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#263238] text-right flex-1">
                  {userData.weight}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Confirm Button */}
      <div className="px-5 w-full">
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          whileTap={{ scale: 0.98 }}
          onClick={onConfirm}
          className="bg-gradient-to-b from-[#c21b17] to-[#a11612] w-full h-[50px] rounded-[14px] shadow-[0px_4px_12px_rgba(194,27,23,0.3)]"
        >
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white">
            Looks Good!
          </p>
        </motion.button>
      </div>
    </>
  );
}

// Edit Height Weight Bottom Sheet
interface EditHeightWeightBottomSheetProps {
  userData: {
    height: string;
    weight: string;
  };
  onClose: () => void;
  onSave: (data: any) => void;
}

export function EditHeightWeightBottomSheet({ userData, onClose, onSave }: EditHeightWeightBottomSheetProps) {
  const [formData, setFormData] = React.useState(userData);

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

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
                Edit Physical Measurements
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
                    {/* Height */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[14px]">
                        Height
                      </p>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <input
                            type="text"
                            value={formData.height}
                            onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                            placeholder="e.g., 175 cm or 5'9&quot;"
                            className="absolute content-stretch flex h-[19.5px] items-center left-[12px] overflow-clip top-[14px] w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none placeholder:text-[#999]"
                          />
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Weight */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[14px]">
                        Weight
                      </p>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <input
                            type="text"
                            value={formData.weight}
                            onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                            placeholder="e.g., 70 kg or 154 lbs"
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