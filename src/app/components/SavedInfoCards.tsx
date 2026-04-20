import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Edit2, Check, X, ChevronDown, ChevronUp } from 'lucide-react';
import svgPathsBanner from '../../imports/svg-740brh66g4';

interface SavedInfoCardsProps {
  userData: any;
  onUpdateField: (category: string, field: string, value: any) => void;
  currentStep: number;
  onEditBannerClick?: () => void;
}

interface CardFieldProps {
  label: string;
  value: string;
  category: string;
  field: string;
  onUpdate: (category: string, field: string, value: any) => void;
  type?: 'text' | 'date' | 'select';
  options?: string[];
}

function CardField({ label, value, category, field, onUpdate, type = 'text', options = [] }: CardFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const handleSave = () => {
    onUpdate(category, field, editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
      <div className="flex-1">
        <p className="text-[12px] text-gray-500 mb-1">{label}</p>
        {isEditing ? (
          type === 'select' ? (
            <select
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="w-full text-[14px] text-gray-900 border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#c21b17]"
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="w-full text-[14px] text-gray-900 border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#c21b17]"
              autoFocus
            />
          )
        ) : (
          <p className="text-[14px] text-gray-900">{value || 'Not provided'}</p>
        )}
      </div>
      <div className="flex items-center gap-2 ml-3">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="p-1.5 rounded-full hover:bg-green-50 transition-colors"
            >
              <Check className="w-4 h-4 text-green-600" />
            </button>
            <button
              onClick={handleCancel}
              className="p-1.5 rounded-full hover:bg-red-50 transition-colors"
            >
              <X className="w-4 h-4 text-red-600" />
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="p-1.5 rounded-full hover:bg-gray-50 transition-colors"
          >
            <Edit2 className="w-4 h-4 text-gray-600" />
          </button>
        )}
      </div>
    </div>
  );
}

interface InfoCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

function InfoCard({ title, icon, children, defaultExpanded = true }: InfoCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-[12px] shadow-sm border border-gray-200 overflow-hidden"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#fff5f5] flex items-center justify-center">
            {icon}
          </div>
          <h3 className="text-[16px] font-medium text-gray-900">{title}</h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function SavedInfoCards({ userData, onUpdateField, currentStep, onEditBannerClick }: SavedInfoCardsProps) {
  const shouldShowPersonalDetails = currentStep >= 11; // After document upload
  const shouldShowProfessionalDetails = currentStep >= 14; // After professional details
  const shouldShowFatherDetails = currentStep >= 18; // After father details
  const shouldShowMotherDetails = currentStep >= 19; // After mother details
  const shouldShowNomineeDetails = currentStep >= 20; // After nominee selection
  const shouldShowHeightWeight = currentStep >= 23; // After full-length photo
  const shouldShowBankDetails = currentStep >= 26; // After bank details

  if (currentStep < 11) {
    return null; // Don't show cards until user has uploaded documents
  }

  return (
    <div className="w-full h-full overflow-y-auto bg-gray-50 relative">
      {/* Edit Banner */}
      {onEditBannerClick && (
        <motion.button
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={onEditBannerClick}
          className="sticky bg-[#c21b17] content-stretch flex h-[40px] items-center justify-between left-0 px-[16px] py-[10px] right-0 top-0 z-50 w-full"
        >
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <div className="content-stretch flex flex-col items-start pb-0 pt-[4px] px-[4px] relative rounded-[6px] shrink-0 size-[24px]">
              <div className="h-[16px] overflow-clip relative shrink-0 w-full">
                <div className="absolute inset-[8.33%_8.33%_8.34%_8.33%]">
                  <div className="absolute inset-[-4.38%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                      <path d={svgPathsBanner.p140233b0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
              Edit Details
            </p>
          </div>
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ '--transform-inner-width': '0', '--transform-inner-height': '0' } as React.CSSProperties}>
            <div className="flex-none rotate-[90deg]">
              <div className="relative size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d="M6 15L12 9L18 15" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </motion.button>
      )}
      
      <div className={`px-4 ${onEditBannerClick ? 'pt-6 pb-6' : 'py-6'}`}>
        <h2 className="text-[20px] font-semibold text-gray-900 mb-6">Your Information</h2>
        
        <div className="space-y-4">
          {/* Personal Details Card */}
          {shouldShowPersonalDetails && (
            <InfoCard
              title="Personal Details"
              icon={
                <svg className="w-5 h-5 text-[#c21b17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
            >
              <div className="space-y-1">
                <CardField
                  label="Full Name"
                  value={userData.fullName}
                  category="personal"
                  field="fullName"
                  onUpdate={onUpdateField}
                />
                <CardField
                  label="Date of Birth"
                  value={userData.dateOfBirth}
                  category="personal"
                  field="dateOfBirth"
                  onUpdate={onUpdateField}
                  type="text"
                />
                <CardField
                  label="Age"
                  value={userData.age}
                  category="personal"
                  field="age"
                  onUpdate={onUpdateField}
                />
                <CardField
                  label="Gender"
                  value={userData.gender}
                  category="personal"
                  field="gender"
                  onUpdate={onUpdateField}
                  type="select"
                  options={['Male', 'Female', 'Other']}
                />
                <CardField
                  label="Nationality"
                  value={userData.nationality}
                  category="personal"
                  field="nationality"
                  onUpdate={onUpdateField}
                />
                <CardField
                  label="Country of Birth"
                  value={userData.countryOfBirth}
                  category="personal"
                  field="countryOfBirth"
                  onUpdate={onUpdateField}
                />
              </div>
            </InfoCard>
          )}

          {/* Address Details Card */}
          {shouldShowPersonalDetails && (
            <InfoCard
              title="Address Details"
              icon={
                <svg className="w-5 h-5 text-[#c21b17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            >
              <div className="space-y-1">
                <CardField
                  label="Communication Address"
                  value={userData.communicationAddress}
                  category="address"
                  field="communicationAddress"
                  onUpdate={onUpdateField}
                />
                <CardField
                  label="Permanent Address"
                  value={userData.permanentAddress}
                  category="address"
                  field="permanentAddress"
                  onUpdate={onUpdateField}
                />
                <CardField
                  label="Pincode"
                  value={userData.pincode}
                  category="address"
                  field="pincode"
                  onUpdate={onUpdateField}
                />
              </div>
            </InfoCard>
          )}

          {/* Professional Details Card */}
          {shouldShowProfessionalDetails && (
            <InfoCard
              title="Professional Details"
              icon={
                <svg className="w-5 h-5 text-[#c21b17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            >
              <div className="space-y-1">
                {userData.industry && (
                  <CardField
                    label="Industry"
                    value={userData.industry}
                    category="professional"
                    field="industry"
                    onUpdate={onUpdateField}
                  />
                )}
                {userData.occupation && (
                  <CardField
                    label="Occupation"
                    value={userData.occupation}
                    category="professional"
                    field="occupation"
                    onUpdate={onUpdateField}
                  />
                )}
                {userData.designation && (
                  <CardField
                    label="Designation"
                    value={userData.designation}
                    category="professional"
                    field="designation"
                    onUpdate={onUpdateField}
                  />
                )}
                {userData.employerName && (
                  <CardField
                    label="Employer Name"
                    value={userData.employerName}
                    category="professional"
                    field="employerName"
                    onUpdate={onUpdateField}
                  />
                )}
                {userData.annualIncome && (
                  <CardField
                    label="Annual Income"
                    value={userData.annualIncome}
                    category="professional"
                    field="annualIncome"
                    onUpdate={onUpdateField}
                  />
                )}
              </div>
            </InfoCard>
          )}

          {/* Father Details Card */}
          {shouldShowFatherDetails && userData.fatherName && (
            <InfoCard
              title="Father's Details"
              icon={
                <svg className="w-5 h-5 text-[#c21b17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
            >
              <div className="space-y-1">
                <CardField
                  label="Father's Name"
                  value={userData.fatherName}
                  category="family"
                  field="fatherName"
                  onUpdate={onUpdateField}
                />
                {userData.fatherDOB && (
                  <CardField
                    label="Date of Birth"
                    value={userData.fatherDOB}
                    category="family"
                    field="fatherDOB"
                    onUpdate={onUpdateField}
                    type="text"
                  />
                )}
                {userData.fatherVitalStatus && (
                  <CardField
                    label="Vital Status"
                    value={userData.fatherVitalStatus}
                    category="family"
                    field="fatherVitalStatus"
                    onUpdate={onUpdateField}
                    type="select"
                    options={['Alive', 'Deceased']}
                  />
                )}
              </div>
            </InfoCard>
          )}

          {/* Mother Details Card */}
          {shouldShowMotherDetails && userData.motherFullName && (
            <InfoCard
              title="Mother's Details"
              icon={
                <svg className="w-5 h-5 text-[#c21b17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
            >
              <div className="space-y-1">
                <CardField
                  label="Mother's Name"
                  value={userData.motherFullName}
                  category="family"
                  field="motherFullName"
                  onUpdate={onUpdateField}
                />
                {userData.motherDOB && (
                  <CardField
                    label="Date of Birth"
                    value={userData.motherDOB}
                    category="family"
                    field="motherDOB"
                    onUpdate={onUpdateField}
                    type="text"
                  />
                )}
                {userData.motherVitalStatus && (
                  <CardField
                    label="Vital Status"
                    value={userData.motherVitalStatus}
                    category="family"
                    field="motherVitalStatus"
                    onUpdate={onUpdateField}
                    type="select"
                    options={['Alive', 'Deceased']}
                  />
                )}
              </div>
            </InfoCard>
          )}

          {/* Nominee Details Card */}
          {shouldShowNomineeDetails && userData.nominees && userData.nominees.length > 0 && (
            <InfoCard
              title="Nominee Details"
              icon={
                <svg className="w-5 h-5 text-[#c21b17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
            >
              <div className="space-y-3">
                {userData.nominees.map((nominee: any, index: number) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-[12px] text-gray-500 mb-2">Nominee {index + 1}</p>
                    <p className="text-[14px] font-medium text-gray-900">{nominee.fullName}</p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-[13px] text-gray-600">{nominee.relationship}</p>
                      <p className="text-[13px] font-medium text-[#c21b17]">{nominee.percentage}%</p>
                    </div>
                    {nominee.dateOfBirth && (
                      <p className="text-[12px] text-gray-500 mt-1">DOB: {nominee.dateOfBirth}</p>
                    )}
                  </div>
                ))}
              </div>
            </InfoCard>
          )}

          {/* Physical Measurements Card */}
          {shouldShowHeightWeight && (
            <InfoCard
              title="Physical Measurements"
              icon={
                <svg className="w-5 h-5 text-[#c21b17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
            >
              <div className="space-y-1">
                <CardField
                  label="Height"
                  value={userData.height}
                  category="physical"
                  field="height"
                  onUpdate={onUpdateField}
                />
                <CardField
                  label="Weight"
                  value={userData.weight}
                  category="physical"
                  field="weight"
                  onUpdate={onUpdateField}
                />
              </div>
            </InfoCard>
          )}

          {/* Bank Details Card */}
          {shouldShowBankDetails && userData.bankName && (
            <InfoCard
              title="Bank Details"
              icon={
                <svg className="w-5 h-5 text-[#c21b17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              }
            >
              <div className="space-y-1">
                <CardField
                  label="Bank Name"
                  value={userData.bankName}
                  category="bank"
                  field="bankName"
                  onUpdate={onUpdateField}
                />
                <CardField
                  label="Account Number"
                  value={userData.accountNumber}
                  category="bank"
                  field="accountNumber"
                  onUpdate={onUpdateField}
                />
                <CardField
                  label="IFSC Code"
                  value={userData.ifscCode}
                  category="bank"
                  field="ifscCode"
                  onUpdate={onUpdateField}
                />
                {userData.branchName && (
                  <CardField
                    label="Branch Name"
                    value={userData.branchName}
                    category="bank"
                    field="branchName"
                    onUpdate={onUpdateField}
                  />
                )}
              </div>
            </InfoCard>
          )}

          {/* Policy Details Card (if selected) */}
          {userData.selectedPlan && (
            <InfoCard
              title="Policy Details"
              icon={
                <svg className="w-5 h-5 text-[#c21b17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
            >
              <div className="space-y-1">
                {userData.selectedPlan && (
                  <CardField
                    label="Selected Plan"
                    value={userData.selectedPlan}
                    category="policy"
                    field="selectedPlan"
                    onUpdate={onUpdateField}
                  />
                )}
                {userData.policyDuration && (
                  <CardField
                    label="Policy Duration"
                    value={userData.policyDuration}
                    category="policy"
                    field="policyDuration"
                    onUpdate={onUpdateField}
                  />
                )}
                {userData.premiumPaymentTerm && (
                  <CardField
                    label="Premium Payment Term"
                    value={userData.premiumPaymentTerm}
                    category="policy"
                    field="premiumPaymentTerm"
                    onUpdate={onUpdateField}
                  />
                )}
                {userData.premiumFrequency && (
                  <CardField
                    label="Premium Frequency"
                    value={userData.premiumFrequency}
                    category="policy"
                    field="premiumFrequency"
                    onUpdate={onUpdateField}
                  />
                )}
              </div>
            </InfoCard>
          )}
        </div>
      </div>
    </div>
  );
}