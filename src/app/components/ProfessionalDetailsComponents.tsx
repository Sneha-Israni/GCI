import React, { useState } from 'react';
import { motion } from 'motion/react';

// Review Professional Details Card
interface ReviewProfessionalDetailsProps {
  userData: {
    designation: string;
    employerName: string;
    industry: string;
    occupation: string;
    jobDuties: string;
    hazardousEnvironment: string;
    annualIncome?: string;
  };
  onEdit: () => void;
  onConfirm: () => void;
}

export function ReviewProfessionalDetailsCard({ userData, onEdit, onConfirm }: ReviewProfessionalDetailsProps) {
  return (
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
              Professional Details
            </h3>
            <button
              onClick={onEdit}
              className="text-[#c21b17] font-['Inter:Medium',sans-serif] font-medium text-[14px]"
            >
              Edit
            </button>
          </div>

          {/* Details Grid */}
          <div className="space-y-3">
            {/* Employer Name */}
            <div className="flex justify-between items-start">
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#666] flex-1">
                Employer Name
              </p>
              <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#263238] text-right flex-1">
                {userData.employerName}
              </p>
            </div>

            {/* Designation */}
            <div className="flex justify-between items-start">
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#666] flex-1">
                Designation
              </p>
              <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#263238] text-right flex-1">
                {userData.designation}
              </p>
            </div>

            {/* Occupation */}
            <div className="flex justify-between items-start">
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#666] flex-1">
                Occupation
              </p>
              <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#263238] text-right flex-1">
                {userData.occupation}
              </p>
            </div>

            {/* Industry — Auto-filled */}
            <div className="flex justify-between items-start">
              <div className="flex-1 flex flex-col gap-[2px]">
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#666]">Industry</p>
                <span className="text-[10px] font-['Inter:Medium',sans-serif] text-[#1A7F3C] bg-[#E6F4EA] px-[6px] py-[1px] rounded-full w-fit">Auto-filled</span>
              </div>
              <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#263238] text-right flex-1">
                {userData.industry}
              </p>
            </div>

            {/* Job Duties — Auto-filled */}
            <div className="flex justify-between items-start">
              <div className="flex-1 flex flex-col gap-[2px]">
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#666]">Job Duties</p>
                <span className="text-[10px] font-['Inter:Medium',sans-serif] text-[#1A7F3C] bg-[#E6F4EA] px-[6px] py-[1px] rounded-full w-fit">Auto-filled</span>
              </div>
              <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#263238] text-right flex-1 whitespace-pre-wrap">
                {userData.jobDuties}
              </p>
            </div>

            {/* Hazardous Environment — Auto-filled */}
            <div className="flex justify-between items-start">
              <div className="flex-1 flex flex-col gap-[2px]">
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#666]">Hazardous Environment</p>
                <span className="text-[10px] font-['Inter:Medium',sans-serif] text-[#1A7F3C] bg-[#E6F4EA] px-[6px] py-[1px] rounded-full w-fit">Auto-filled</span>
              </div>
              <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#263238] text-right flex-1">
                {userData.hazardousEnvironment}
              </p>
            </div>

            {/* Annual Income */}
            {userData.annualIncome && (
              <div className="flex justify-between items-start">
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#666] flex-1">
                  Annual Income
                </p>
                <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#263238] text-right flex-1">
                  ₹{userData.annualIncome} lakhs
                </p>
              </div>
            )}
          </div>

          {/* Confirm Button */}
          <button
            onClick={onConfirm}
            className="w-full bg-[#c21b17] text-white rounded-[12px] py-3 mt-4 font-['Inter:Medium',sans-serif] font-medium text-[15px] hover:bg-[#a01613] transition-colors"
          >
            Confirm Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// Edit Professional Details Bottom Sheet
interface EditProfessionalDetailsBottomSheetProps {
  userData: {
    designation: string;
    employerName: string;
    industry: string;
    occupation: string;
    jobDuties: string;
    hazardousEnvironment: string;
    annualIncome?: string;
  };
  onClose: () => void;
  onSave: (updatedData: {
    designation: string;
    employerName: string;
    industry: string;
    occupation: string;
    jobDuties: string;
    hazardousEnvironment: string;
    annualIncome?: string;
  }) => void;
}

export function EditProfessionalDetailsBottomSheet({ userData, onClose, onSave }: EditProfessionalDetailsBottomSheetProps) {
  const [formData, setFormData] = useState({
    designation: userData.designation || '',
    employerName: userData.employerName || '',
    industry: userData.industry || '',
    occupation: userData.occupation || '',
    jobDuties: userData.jobDuties || '',
    hazardousEnvironment: userData.hazardousEnvironment || '',
    annualIncome: userData.annualIncome || '',
  });

  const handleSave = () => {
    console.log('🔵 Edit sheet handleSave called with formData:', formData);
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
                Edit Professional Details
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
                    {/* Designation */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[14px]">
                        Designation
                      </p>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <input
                            type="text"
                            value={formData.designation}
                            onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                            className="absolute content-stretch flex h-[19.5px] items-center left-[12px] overflow-clip top-[14px] w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none"
                          />
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Employer Name */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[14px]">
                        Employer Name
                      </p>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <input
                            type="text"
                            value={formData.employerName}
                            onChange={(e) => setFormData({ ...formData, employerName: e.target.value })}
                            className="absolute content-stretch flex h-[19.5px] items-center left-[12px] overflow-clip top-[14px] w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none"
                          />
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Industry */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[14px]">
                        Industry
                      </p>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <input
                            type="text"
                            value={formData.industry}
                            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                            className="absolute content-stretch flex h-[19.5px] items-center left-[12px] overflow-clip top-[14px] w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none"
                          />
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Occupation */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[14px]">
                        Current Occupation
                      </p>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <select
                            value={formData.occupation}
                            onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                            className="absolute content-stretch flex h-[19.5px] items-center left-[12px] overflow-clip top-[14px] w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none"
                          >
                            <option value="Salaried">Salaried</option>
                            <option value="Self-Employed">Self-Employed</option>
                            <option value="Business Owner">Business Owner</option>
                            <option value="Freelancer">Freelancer</option>
                          </select>
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Job Duties */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[14px]">
                        Brief Description of Job Duties
                      </p>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="min-h-[70px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <textarea
                            value={formData.jobDuties}
                            onChange={(e) => setFormData({ ...formData, jobDuties: e.target.value })}
                            rows={3}
                            className="absolute left-[12px] top-[12px] w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[16px] text-black bg-transparent outline-none resize-none"
                          />
                        </div>
                        <div className="absolute min-h-[70px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Hazardous Environment */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[14px]">
                        Works in Hazardous Environment
                      </p>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <select
                            value={formData.hazardousEnvironment}
                            onChange={(e) => setFormData({ ...formData, hazardousEnvironment: e.target.value })}
                            className="absolute content-stretch flex h-[19.5px] items-center left-[12px] overflow-clip top-[14px] w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none"
                          >
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                          </select>
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Annual Income */}
                    {formData.annualIncome && (
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[14px]">
                          Annual Income
                        </p>
                        <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                          <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                            <input
                              type="text"
                              value={formData.annualIncome}
                              onChange={(e) => setFormData({ ...formData, annualIncome: e.target.value })}
                              className="absolute content-stretch flex h-[19.5px] items-center left-[12px] overflow-clip top-[14px] w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none"
                            />
                          </div>
                          <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="content-stretch flex flex-col gap-[8px] items-start pb-[40px] pt-0 px-[20px] relative shrink-0 w-full">
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleSave}
              className="bg-[#c21b17] content-stretch flex flex-col gap-[10px] h-[49px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full"
            >
              <p className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white">
                Save Changes
              </p>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="bg-[#f5f5f5] content-stretch flex flex-col gap-[10px] h-[49px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full"
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-[#666]">
                Cancel
              </p>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}