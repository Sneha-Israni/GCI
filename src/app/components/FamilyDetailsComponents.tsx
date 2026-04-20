import React from 'react';
import svgPathsDetails from '../../imports/svg-gb7p4kg93f';

interface FamilyDetailsData {
  fatherFullName?: string;
  fatherDOB?: string;
  fatherVitalStatus?: string;
  fatherCauseOfDeath?: string;
  fatherAsNominee?: string;
  motherFullName?: string;
  motherDOB?: string;
  motherVitalStatus?: string;
  motherCauseOfDeath?: string;
  motherAsNominee?: string;
  nomineeName?: string;
  nomineeRelationship?: string;
  nomineeAge?: string;
  nomineeGender?: string;
}

interface ReviewFamilyDetailsCardProps {
  userData: FamilyDetailsData;
  onEdit: () => void;
}

export function ReviewFamilyDetailsCard({ userData, onEdit }: ReviewFamilyDetailsCardProps) {
  const hasFatherInfo = userData.fatherFullName || userData.fatherDOB;
  const hasMotherInfo = userData.motherFullName || userData.motherDOB;
  const hasNomineeInfo = userData.nomineeName;

  if (!hasFatherInfo && !hasMotherInfo && !hasNomineeInfo) {
    return null;
  }

  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-0 py-0 relative w-full">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
            <div className="bg-white relative rounded-[16px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[0.5px] relative w-full">
                  {/* Header Row */}
                  <div className="h-[60px] relative shrink-0 w-full">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center justify-between px-[16px] py-0 relative size-full">
                        <div className="h-[22.5px] relative shrink-0">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
                            <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[22.5px] relative shrink-0 text-[#263238] text-[15px] text-center text-nowrap">
                              Family Details
                            </p>
                          </div>
                        </div>
                        <div className="h-[28px] relative shrink-0 w-[56px]">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                            <button onClick={onEdit} className="basis-0 grow h-[28px] min-h-px min-w-px relative rounded-[8px] shrink-0">
                              <div className="size-full">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[6px] px-[6px] relative size-full">
                                  <div className="h-[16px] overflow-clip relative shrink-0 w-full">
                                    <div className="absolute inset-[8.33%_8.33%_8.34%_8.33%]">
                                      <div className="absolute inset-[-5%]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                                          <path d={svgPathsDetails.p4290a20} stroke="#C21B17" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </button>
                            <div className="flex items-center justify-center relative shrink-0">
                              <div className="flex-none rotate-[180deg]">
                                <div className="relative size-[20px]">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                    <div className="h-[20px] overflow-clip relative shrink-0 w-full">
                                      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
                                        <div className="absolute inset-[-8.33%_-16.67%]">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
                                            <path d={svgPathsDetails.p324d0480} stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Details Rows */}
                  <div className="relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[0.5px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col items-start pb-0 pt-[0.5px] px-[16px] relative w-full">
                        {/* Father Details Section */}
                        {hasFatherInfo && (
                          <>
                            <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                              <div className="h-[19.5px] relative shrink-0">
                                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic text-[#263238] text-[13px] text-nowrap">
                                  Father's Details
                                </p>
                              </div>
                            </div>
                            {userData.fatherFullName && (
                              <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    Full Name
                                  </p>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                  {userData.fatherFullName}
                                </p>
                              </div>
                            )}
                            {userData.fatherDOB && (
                              <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    DOB & Status
                                  </p>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                  {userData.fatherDOB}, {userData.fatherVitalStatus}
                                </p>
                              </div>
                            )}
                            {userData.fatherVitalStatus === 'Deceased' && userData.fatherCauseOfDeath && (
                              <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    Cause of Death
                                  </p>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                  {userData.fatherCauseOfDeath}
                                </p>
                              </div>
                            )}
                            {userData.fatherVitalStatus === 'Alive' && userData.fatherAsNominee && (
                              <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    As Nominee
                                  </p>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                  {userData.fatherAsNominee}
                                </p>
                              </div>
                            )}
                          </>
                        )}

                        {/* Mother Details Section */}
                        {hasMotherInfo && (
                          <>
                            <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                              <div className="h-[19.5px] relative shrink-0">
                                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic text-[#263238] text-[13px] text-nowrap">
                                  Mother's Details
                                </p>
                              </div>
                            </div>
                            {userData.motherFullName && (
                              <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    Full Name
                                  </p>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                  {userData.motherFullName}
                                </p>
                              </div>
                            )}
                            {userData.motherDOB && (
                              <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    DOB & Status
                                  </p>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                  {userData.motherDOB}, {userData.motherVitalStatus}
                                </p>
                              </div>
                            )}
                            {userData.motherVitalStatus === 'Deceased' && userData.motherCauseOfDeath && (
                              <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    Cause of Death
                                  </p>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                  {userData.motherCauseOfDeath}
                                </p>
                              </div>
                            )}
                            {userData.motherVitalStatus === 'Alive' && userData.motherAsNominee && (
                              <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    As Nominee
                                  </p>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                  {userData.motherAsNominee}
                                </p>
                              </div>
                            )}
                          </>
                        )}

                        {/* Nominee Details Section */}
                        {hasNomineeInfo && (
                          <>
                            <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                              <div className="h-[19.5px] relative shrink-0">
                                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic text-[#263238] text-[13px] text-nowrap">
                                  Nominee Details
                                </p>
                              </div>
                            </div>
                            {userData.nomineeName && (
                              <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    Name
                                  </p>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                  {userData.nomineeName}
                                </p>
                              </div>
                            )}
                            {userData.nomineeRelationship && (
                              <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    Relationship
                                  </p>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                  {userData.nomineeRelationship}
                                </p>
                              </div>
                            )}
                            {userData.nomineeAge && userData.nomineeGender && (
                              <div className="content-stretch flex h-[35.5px] items-start justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                                <div className="h-[19.5px] relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#666] text-[13px] text-nowrap">
                                    Age & Gender
                                  </p>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#263238] text-[13px] text-nowrap text-right">
                                  {userData.nomineeAge} yrs, {userData.nomineeGender}
                                </p>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface EditFamilyDetailsBottomSheetProps {
  userData: FamilyDetailsData;
  onClose: () => void;
  onSave: (data: FamilyDetailsData) => void;
}

export function EditFamilyDetailsBottomSheet({ userData, onClose, onSave }: EditFamilyDetailsBottomSheetProps) {
  const [formData, setFormData] = React.useState(userData);

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      {/* Bottom Sheet */}
      <div className="relative bg-white rounded-t-[24px] w-full max-w-[428px] max-h-[80vh] overflow-y-auto">
        {/* Handle */}
        <div className="flex justify-center pt-[12px] pb-[8px]">
          <div className="w-[40px] h-[4px] bg-gray-300 rounded-full" />
        </div>

        {/* Header */}
        <div className="px-[20px] py-[16px] border-b border-gray-200">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#263238]">
            Edit Family Details
          </h3>
        </div>

        {/* Content */}
        <div className="px-[20px] py-[20px] flex flex-col gap-[24px]">
          {/* Father Section */}
          <div className="flex flex-col gap-[16px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#263238]">
              Father's Details
            </p>
            
            {/* Father Full Name */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#263238]">
                Full Name
              </label>
              <input
                type="text"
                value={formData.fatherFullName || ''}
                onChange={(e) => setFormData({ ...formData, fatherFullName: e.target.value })}
                className="h-[48px] px-[16px] rounded-[12px] border border-gray-300 font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black outline-none focus:border-[#c21b17]"
                placeholder="Enter father's full name"
              />
            </div>

            {/* Father DOB */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#263238]">
                Date of Birth
              </label>
              <input
                type="text"
                value={formData.fatherDOB || ''}
                onChange={(e) => setFormData({ ...formData, fatherDOB: e.target.value })}
                className="h-[48px] px-[16px] rounded-[12px] border border-gray-300 font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black outline-none focus:border-[#c21b17]"
                placeholder="DD/MM/YYYY"
              />
            </div>

            {/* Father Vital Status */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#263238]">
                Vital Status
              </label>
              <select
                value={formData.fatherVitalStatus || ''}
                onChange={(e) => setFormData({ ...formData, fatherVitalStatus: e.target.value })}
                className="h-[48px] px-[16px] rounded-[12px] border border-gray-300 font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black outline-none focus:border-[#c21b17] bg-white"
              >
                <option value="">Select status</option>
                <option value="Alive">Alive</option>
                <option value="Deceased">Deceased</option>
              </select>
            </div>

            {/* Conditional: If Deceased, show cause of death */}
            {formData.fatherVitalStatus === 'Deceased' && (
              <div className="flex flex-col gap-[8px]">
                <label className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#263238]">
                  Cause of Death
                </label>
                <input
                  type="text"
                  value={formData.fatherCauseOfDeath || ''}
                  onChange={(e) => setFormData({ ...formData, fatherCauseOfDeath: e.target.value })}
                  className="h-[48px] px-[16px] rounded-[12px] border border-gray-300 font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black outline-none focus:border-[#c21b17]"
                  placeholder="Enter cause of death"
                />
              </div>
            )}

            {/* Conditional: If Alive, show nominee option */}
            {formData.fatherVitalStatus === 'Alive' && (
              <div className="flex flex-col gap-[8px]">
                <label className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#263238]">
                  As Nominee
                </label>
                <select
                  value={formData.fatherAsNominee || ''}
                  onChange={(e) => setFormData({ ...formData, fatherAsNominee: e.target.value })}
                  className="h-[48px] px-[16px] rounded-[12px] border border-gray-300 font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black outline-none focus:border-[#c21b17] bg-white"
                >
                  <option value="">Select option</option>
                  <option value="Yes, please">Yes, please</option>
                  <option value="No">No</option>
                </select>
              </div>
            )}
          </div>

          {/* Mother Section */}
          <div className="flex flex-col gap-[16px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#263238]">
              Mother's Details
            </p>
            
            {/* Mother Full Name */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#263238]">
                Full Name
              </label>
              <input
                type="text"
                value={formData.motherFullName || ''}
                onChange={(e) => setFormData({ ...formData, motherFullName: e.target.value })}
                className="h-[48px] px-[16px] rounded-[12px] border border-gray-300 font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black outline-none focus:border-[#c21b17]"
                placeholder="Enter mother's full name"
              />
            </div>

            {/* Mother DOB */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#263238]">
                Date of Birth
              </label>
              <input
                type="text"
                value={formData.motherDOB || ''}
                onChange={(e) => setFormData({ ...formData, motherDOB: e.target.value })}
                className="h-[48px] px-[16px] rounded-[12px] border border-gray-300 font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black outline-none focus:border-[#c21b17]"
                placeholder="DD/MM/YYYY"
              />
            </div>

            {/* Mother Vital Status */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#263238]">
                Vital Status
              </label>
              <select
                value={formData.motherVitalStatus || ''}
                onChange={(e) => setFormData({ ...formData, motherVitalStatus: e.target.value })}
                className="h-[48px] px-[16px] rounded-[12px] border border-gray-300 font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black outline-none focus:border-[#c21b17] bg-white"
              >
                <option value="">Select status</option>
                <option value="Alive">Alive</option>
                <option value="Deceased">Deceased</option>
              </select>
            </div>

            {/* Conditional: If Deceased, show cause of death */}
            {formData.motherVitalStatus === 'Deceased' && (
              <div className="flex flex-col gap-[8px]">
                <label className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#263238]">
                  Cause of Death
                </label>
                <input
                  type="text"
                  value={formData.motherCauseOfDeath || ''}
                  onChange={(e) => setFormData({ ...formData, motherCauseOfDeath: e.target.value })}
                  className="h-[48px] px-[16px] rounded-[12px] border border-gray-300 font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black outline-none focus:border-[#c21b17]"
                  placeholder="Enter cause of death"
                />
              </div>
            )}

            {/* Conditional: If Alive, show nominee option */}
            {formData.motherVitalStatus === 'Alive' && (
              <div className="flex flex-col gap-[8px]">
                <label className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#263238]">
                  As Nominee
                </label>
                <select
                  value={formData.motherAsNominee || ''}
                  onChange={(e) => setFormData({ ...formData, motherAsNominee: e.target.value })}
                  className="h-[48px] px-[16px] rounded-[12px] border border-gray-300 font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black outline-none focus:border-[#c21b17] bg-white"
                >
                  <option value="">Select option</option>
                  <option value="Yes, please">Yes, please</option>
                  <option value="No">No</option>
                </select>
              </div>
            )}
          </div>

          {/* Nominee Section */}
          <div className="flex flex-col gap-[16px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#263238]">
              Nominee Details
            </p>
            
            {/* Nominee Name */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#263238]">
                Name
              </label>
              <input
                type="text"
                value={formData.nomineeName || ''}
                onChange={(e) => setFormData({ ...formData, nomineeName: e.target.value })}
                className="h-[48px] px-[16px] rounded-[12px] border border-gray-300 font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black outline-none focus:border-[#c21b17]"
                placeholder="Enter nominee name"
              />
            </div>

            {/* Nominee Relationship */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#263238]">
                Relationship
              </label>
              <select
                value={formData.nomineeRelationship || ''}
                onChange={(e) => setFormData({ ...formData, nomineeRelationship: e.target.value })}
                className="h-[48px] px-[16px] rounded-[12px] border border-gray-300 font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black outline-none focus:border-[#c21b17] bg-white"
              >
                <option value="">Select relationship</option>
                <option value="Spouse">Spouse</option>
                <option value="Son">Son</option>
                <option value="Daughter">Daughter</option>
                <option value="Brother">Brother</option>
                <option value="Sister">Sister</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Nominee Age */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#263238]">
                Age
              </label>
              <input
                type="number"
                value={formData.nomineeAge || ''}
                onChange={(e) => setFormData({ ...formData, nomineeAge: e.target.value })}
                className="h-[48px] px-[16px] rounded-[12px] border border-gray-300 font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black outline-none focus:border-[#c21b17]"
                placeholder="Enter age"
              />
            </div>

            {/* Nominee Gender */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#263238]">
                Gender
              </label>
              <select
                value={formData.nomineeGender || ''}
                onChange={(e) => setFormData({ ...formData, nomineeGender: e.target.value })}
                className="h-[48px] px-[16px] rounded-[12px] border border-gray-300 font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black outline-none focus:border-[#c21b17] bg-white"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-[20px] py-[16px] border-t border-gray-200 flex gap-[12px]">
          <button
            onClick={onClose}
            className="flex-1 h-[48px] rounded-[12px] bg-gray-200 font-['Inter:Medium',sans-serif] font-medium text-[16px] text-[#263238]"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 h-[48px] rounded-[12px] bg-[#c21b17] font-['Inter:Medium',sans-serif] font-medium text-[16px] text-white"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
