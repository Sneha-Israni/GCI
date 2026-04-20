import React from 'react';
import { FileText, Trash2 } from 'lucide-react';
import svgPathsDetails from '../../imports/svg-gb7p4kg93f';

interface Document {
  type: string;
  file: File | null;
  previewUrl?: string;
}

interface ReviewDocumentsCardProps {
  documents: Record<string, File | null>;
  previewUrls: Record<string, string>;
  onEdit: () => void;
}

export function ReviewDocumentsCard({ documents, previewUrls, onEdit }: ReviewDocumentsCardProps) {
  const documentTypes = ['aadhaar_front', 'aadhaar_back', 'pan', 'full_photo'];
  const documentLabels: Record<string, string> = {
    aadhaar_front: 'Aadhaar Card (Front)',
    aadhaar_back: 'Aadhaar Card (Back)',
    pan: 'PAN Card',
    full_photo: 'Full Length Photo'
  };

  const hasDocuments = Object.values(documents).some(doc => doc !== null);

  if (!hasDocuments) {
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
                              Documents
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
                  {/* Documents List */}
                  <div className="relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[0.5px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col items-start pb-[8px] pt-[0.5px] px-[16px] relative w-full gap-[8px]">
                        {documentTypes.map((type) => {
                          if (!documents[type]) return null;
                          return (
                            <div key={type} className="content-stretch flex items-center justify-between pb-[8px] pt-[8px] px-0 relative shrink-0 w-full">
                              <div className="flex items-center gap-[12px]">
                                {previewUrls[type] ? (
                                  <img 
                                    src={previewUrls[type]} 
                                    alt={documentLabels[type]}
                                    className="w-[40px] h-[40px] object-cover rounded-[8px]"
                                  />
                                ) : (
                                  <div className="w-[40px] h-[40px] bg-gray-100 rounded-[8px] flex items-center justify-center">
                                    <FileText className="w-[20px] h-[20px] text-gray-400" />
                                  </div>
                                )}
                                <div>
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic text-[#263238] text-[13px]">
                                    {documentLabels[type]}
                                  </p>
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic text-[#666] text-[11px]">
                                    {documents[type]?.name || 'Uploaded'}
                                  </p>
                                </div>
                              </div>
                              <div className="w-[16px] h-[16px] rounded-full bg-green-500 flex items-center justify-center">
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            </div>
                          );
                        })}
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

interface EditDocumentsBottomSheetProps {
  documents: Record<string, File | null>;
  previewUrls: Record<string, string>;
  onClose: () => void;
  onSave: (documents: Record<string, File | null>, previewUrls: Record<string, string>) => void;
}

export function EditDocumentsBottomSheet({ documents, previewUrls, onClose, onSave }: EditDocumentsBottomSheetProps) {
  const [localDocuments, setLocalDocuments] = React.useState(documents);
  const [localPreviewUrls, setLocalPreviewUrls] = React.useState(previewUrls);
  const fileInputRefs = React.useRef<Record<string, HTMLInputElement | null>>({});

  const documentTypes = [
    { key: 'aadhaar_front', label: 'Aadhaar Card (Front)' },
    { key: 'aadhaar_back', label: 'Aadhaar Card (Back)' },
    { key: 'pan', label: 'PAN Card' },
    { key: 'full_photo', label: 'Full Length Photo' }
  ];

  const handleFileSelect = (docType: string, file: File | null) => {
    if (file) {
      const url = URL.createObjectURL(file);
      setLocalDocuments(prev => ({ ...prev, [docType]: file }));
      setLocalPreviewUrls(prev => ({ ...prev, [docType]: url }));
    }
  };

  const handleRemoveDocument = (docType: string) => {
    if (localPreviewUrls[docType]) {
      URL.revokeObjectURL(localPreviewUrls[docType]);
    }
    setLocalDocuments(prev => ({ ...prev, [docType]: null }));
    setLocalPreviewUrls(prev => {
      const newUrls = { ...prev };
      delete newUrls[docType];
      return newUrls;
    });
  };

  const handleSave = () => {
    onSave(localDocuments, localPreviewUrls);
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
            Edit Documents
          </h3>
        </div>

        {/* Content */}
        <div className="px-[20px] py-[20px] flex flex-col gap-[20px]">
          {documentTypes.map(({ key, label }) => (
            <div key={key} className="flex flex-col gap-[8px]">
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#263238]">
                {label}
              </p>
              {localDocuments[key] ? (
                <div className="relative">
                  {localPreviewUrls[key] && (
                    <img 
                      src={localPreviewUrls[key]} 
                      alt={label}
                      className="w-full h-[160px] object-cover rounded-[12px]"
                    />
                  )}
                  <button
                    onClick={() => handleRemoveDocument(key)}
                    className="absolute top-[8px] right-[8px] bg-red-500 rounded-full p-[8px] hover:bg-red-600 transition-colors"
                  >
                    <Trash2 className="w-[16px] h-[16px] text-white" />
                  </button>
                  <p className="mt-[8px] font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#666]">
                    {localDocuments[key]?.name}
                  </p>
                </div>
              ) : (
                <button
                  onClick={() => fileInputRefs.current[key]?.click()}
                  className="w-full h-[120px] border-2 border-dashed border-gray-300 rounded-[12px] flex flex-col items-center justify-center gap-[8px] hover:border-[#c21b17] transition-colors"
                >
                  <FileText className="w-[32px] h-[32px] text-gray-400" />
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#666]">
                    Tap to upload
                  </p>
                </button>
              )}
              <input
                ref={el => fileInputRefs.current[key] = el}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    handleFileSelect(key, e.target.files[0]);
                  }
                }}
              />
            </div>
          ))}
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
