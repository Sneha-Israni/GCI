import React from 'react';
import { motion } from 'motion/react';

// Review Personal Details Card
interface ReviewPersonalDetailsProps {
  userData: {
    fullName: string;
    fatherName: string;
    communicationAddress: string;
    permanentAddress: string;
    pincode: string;
    gender: string;
    dateOfBirth: string;
    countryOfBirth: string;
    nationality: string;
  };
  onEdit: () => void;
  onConfirm: () => void;
}

export function ReviewPersonalDetailsCard({ userData, onEdit, onConfirm }: ReviewPersonalDetailsProps) {
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
              Personal Details
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
            {/* Full Name */}
            {userData.fullName && (
            <div className="flex justify-between items-start">
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#666] flex-1">
                Full Name
              </p>
              <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#263238] text-right flex-1">
                {userData.fullName}
              </p>
            </div>
            )}

            {/* Father's Name */}
            {userData.fatherName && (
            <div className="flex justify-between items-start">
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#666] flex-1">
                Father's Name
              </p>
              <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#263238] text-right flex-1">
                {userData.fatherName}
              </p>
            </div>
            )}

            {/* Communication Address */}
            {userData.communicationAddress && (
            <div className="flex justify-between items-start">
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#666] flex-1">
                Communication Address
              </p>
              <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#263238] text-right flex-1">
                {userData.communicationAddress}
              </p>
            </div>
            )}

            {/* Permanent Address */}
            {userData.permanentAddress && (
            <div className="flex justify-between items-start">
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#666] flex-1">
                Permanent Address
              </p>
              <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#263238] text-right flex-1">
                {userData.permanentAddress}
              </p>
            </div>
            )}

            {/* Pincode */}
            {userData.pincode && (
            <div className="flex justify-between items-start">
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#666] flex-1">
                Pincode
              </p>
              <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#263238] text-right flex-1">
                {userData.pincode}
              </p>
            </div>
            )}

            {/* Gender */}
            {userData.gender && (
            <div className="flex justify-between items-start">
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#666] flex-1">
                Gender
              </p>
              <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#263238] text-right flex-1">
                {userData.gender.charAt(0).toUpperCase() + userData.gender.slice(1).toLowerCase()}
              </p>
            </div>
            )}

            {/* Date of Birth */}
            {userData.dateOfBirth && (
            <div className="flex justify-between items-start">
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#666] flex-1">
                Date of Birth
              </p>
              <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#263238] text-right flex-1">
                {userData.dateOfBirth}
              </p>
            </div>
            )}

            {/* Country of Birth */}
            {userData.countryOfBirth && (
            <div className="flex justify-between items-start">
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#666] flex-1">
                Country of Birth
              </p>
              <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#263238] text-right flex-1">
                {userData.countryOfBirth}
              </p>
            </div>
            )}

            {/* Nationality */}
            {userData.nationality && (
            <div className="flex justify-between items-start">
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#666] flex-1">
                Nationality
              </p>
              <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#263238] text-right flex-1">
                {userData.nationality}
              </p>
            </div>
            )}
          </div>
        </div>
      </div>

      {/* Confirm Button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        whileTap={{ scale: 0.98 }}
        onClick={onConfirm}
        className="bg-gradient-to-b from-[#c21b17] to-[#a11612] w-full h-[50px] rounded-[14px] mt-4 shadow-[0px_4px_12px_rgba(194,27,23,0.3)]"
      >
        <p className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white">
          Looks Good!
        </p>
      </motion.button>
    </motion.div>
  );
}

// Edit Personal Details Bottom Sheet
interface EditPersonalDetailsBottomSheetProps {
  userData: {
    fullName: string;
    fatherName: string;
    communicationAddress: string;
    permanentAddress: string;
    pincode: string;
    gender: string;
    dateOfBirth: string;
    countryOfBirth: string;
    nationality: string;
  };
  onClose: () => void;
  onSave: (data: any) => void;
}

export function EditPersonalDetailsBottomSheet({ userData, onClose, onSave }: EditPersonalDetailsBottomSheetProps) {
  const [formData, setFormData] = React.useState(userData);
  const [sameAsCommunication, setSameAsCommunication] = React.useState(
    userData.permanentAddress === userData.communicationAddress
  );

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const handleCommunicationAddressChange = (value: string) => {
    setFormData({ ...formData, communicationAddress: value });
    if (sameAsCommunication) {
      setFormData({ ...formData, communicationAddress: value, permanentAddress: value });
    }
  };

  const handleSameAsToggle = () => {
    const newValue = !sameAsCommunication;
    setSameAsCommunication(newValue);
    if (newValue) {
      setFormData({ ...formData, permanentAddress: formData.communicationAddress });
    }
  };

  const genderOptions = ['Male', 'Female', 'Other'];
  const countryOptions = ['India', 'USA', 'UK', 'Canada', 'Australia'];
  const nationalityOptions = ['Indian', 'American', 'British', 'Canadian', 'Australian'];

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
                Edit Personal Details
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
                    {/* Full Name */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[14px]">
                        Full Name
                      </p>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="absolute content-stretch flex h-[19.5px] items-center left-[12px] overflow-clip top-[14px] w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none"
                          />
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Father's Name */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[14px]">
                        Father's Name
                      </p>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <input
                            type="text"
                            value={formData.fatherName}
                            onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                            className="absolute content-stretch flex h-[19.5px] items-center left-[12px] overflow-clip top-[14px] w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none"
                          />
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Communication Address */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[14px]">
                        Communication Address
                      </p>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="min-h-[70px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <textarea
                            value={formData.communicationAddress}
                            onChange={(e) => handleCommunicationAddressChange(e.target.value)}
                            rows={3}
                            className="absolute left-[12px] top-[12px] w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[16px] text-black bg-transparent outline-none resize-none"
                          />
                        </div>
                        <div className="absolute min-h-[70px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Same as Communication Address Checkbox */}
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="sameAddress"
                        checked={sameAsCommunication}
                        onChange={handleSameAsToggle}
                        className="w-4 h-4 accent-[#c21b17]"
                      />
                      <label htmlFor="sameAddress" className="font-['Inter:Regular',sans-serif] text-[14px] text-[#263238]">
                        Same as Communication Address
                      </label>
                    </div>

                    {/* Permanent Address */}
                    {!sameAsCommunication && (
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[14px]">
                          Permanent Address
                        </p>
                        <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                          <div className="min-h-[70px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                            <textarea
                              value={formData.permanentAddress}
                              onChange={(e) => setFormData({ ...formData, permanentAddress: e.target.value })}
                              rows={3}
                              className="absolute left-[12px] top-[12px] w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[16px] text-black bg-transparent outline-none resize-none"
                            />
                          </div>
                          <div className="absolute min-h-[70px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                        </div>
                      </div>
                    )}

                    {/* Pincode */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[14px]">
                        Pincode
                      </p>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <input
                            type="text"
                            value={formData.pincode}
                            onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                            className="absolute content-stretch flex h-[19.5px] items-center left-[12px] overflow-clip top-[14px] w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none"
                          />
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Gender */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[14px]">
                        Gender
                      </p>
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

                    {/* Date of Birth */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[14px]">
                        Date of Birth
                      </p>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <input
                            type="text"
                            value={formData.dateOfBirth}
                            onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                            placeholder="DD/MM/YYYY"
                            className="absolute content-stretch flex h-[19.5px] items-center left-[12px] overflow-clip top-[14px] w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none placeholder:text-[#999]"
                          />
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Country of Birth */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[14px]">
                        Country of Birth
                      </p>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <select
                            value={formData.countryOfBirth}
                            onChange={(e) => setFormData({ ...formData, countryOfBirth: e.target.value })}
                            className="absolute content-stretch flex h-[47px] items-center left-[12px] overflow-clip top-0 w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none appearance-none"
                          >
                            <option value="">Select country</option>
                            {countryOptions.map((option) => (
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

                    {/* Nationality */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[14px]">
                        Nationality
                      </p>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <select
                            value={formData.nationality}
                            onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                            className="absolute content-stretch flex h-[47px] items-center left-[12px] overflow-clip top-0 w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none appearance-none"
                          >
                            <option value="">Select nationality</option>
                            {nationalityOptions.map((option) => (
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

// Review Bank Details Card
interface ReviewBankDetailsProps {
  userData: {
    bankName: string;
    accountNumber: string;
    ifscCode: string;
    branchName: string;
  };
  onEdit: () => void;
  onConfirm: () => void;
}

export function ReviewBankDetailsCard({ userData, onEdit, onConfirm }: ReviewBankDetailsProps) {
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
              Bank Details
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
            {/* Bank Name */}
            <div className="flex justify-between items-start">
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#666] flex-1">
                Bank Name
              </p>
              <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#263238] text-right flex-1">
                {userData.bankName}
              </p>
            </div>

            {/* Account Number */}
            <div className="flex justify-between items-start">
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#666] flex-1">
                Account Number
              </p>
              <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#263238] text-right flex-1">
                {userData.accountNumber}
              </p>
            </div>

            {/* IFSC Code */}
            <div className="flex justify-between items-start">
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#666] flex-1">
                IFSC Code
              </p>
              <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#263238] text-right flex-1">
                {userData.ifscCode}
              </p>
            </div>

            {/* Branch Name */}
            <div className="flex justify-between items-start">
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#666] flex-1">
                Branch Name
              </p>
              <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#263238] text-right flex-1">
                {userData.branchName}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Confirm Button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        whileTap={{ scale: 0.98 }}
        onClick={onConfirm}
        className="bg-gradient-to-b from-[#c21b17] to-[#a11612] w-full h-[50px] rounded-[14px] mt-4 shadow-[0px_4px_12px_rgba(194,27,23,0.3)]"
      >
        <p className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white">
          Looks Good!
        </p>
      </motion.button>
    </motion.div>
  );
}

// Edit Bank Details Bottom Sheet
interface EditBankDetailsBottomSheetProps {
  userData: {
    bankName: string;
    accountNumber: string;
    ifscCode: string;
    branchName: string;
  };
  onClose: () => void;
  onSave: (data: any) => void;
}

export function EditBankDetailsBottomSheet({ userData, onClose, onSave }: EditBankDetailsBottomSheetProps) {
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
                Edit Bank Details
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
                    {/* Bank Name */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[14px]">
                        Bank Name
                      </p>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <input
                            type="text"
                            value={formData.bankName}
                            onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                            className="absolute content-stretch flex h-[19.5px] items-center left-[12px] overflow-clip top-[14px] w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none"
                          />
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Account Number */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[14px]">
                        Account Number
                      </p>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <input
                            type="text"
                            value={formData.accountNumber}
                            onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                            className="absolute content-stretch flex h-[19.5px] items-center left-[12px] overflow-clip top-[14px] w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none"
                          />
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* IFSC Code */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[14px]">
                        IFSC Code
                      </p>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <input
                            type="text"
                            value={formData.ifscCode}
                            onChange={(e) => setFormData({ ...formData, ifscCode: e.target.value })}
                            className="absolute content-stretch flex h-[19.5px] items-center left-[12px] overflow-clip top-[14px] w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none"
                          />
                        </div>
                        <div className="absolute h-[48px] left-0 rounded-[12px] top-[-0.5px] w-full border border-[#e5e7eb] pointer-events-none" />
                      </div>
                    </div>

                    {/* Branch Name */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[14px]">
                        Branch Name
                      </p>
                      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                        <div className="h-[47px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                          <input
                            type="text"
                            value={formData.branchName}
                            onChange={(e) => setFormData({ ...formData, branchName: e.target.value })}
                            className="absolute content-stretch flex h-[19.5px] items-center left-[12px] overflow-clip top-[14px] w-[calc(100%-24px)] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black bg-transparent outline-none"
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
