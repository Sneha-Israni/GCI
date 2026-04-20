import { motion } from 'motion/react';
import { ReactNode } from 'react';
import svgPathsDetails from '../../imports/svg-gb7p4kg93f';

interface CollapsibleCardProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  onEdit?: () => void;
  children: ReactNode;
}

export function CollapsibleCard({ title, isExpanded, onToggle, onEdit, children }: CollapsibleCardProps) {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="overflow-clip rounded-[inherit] size-full">
        {/* Header Row */}
        <div className="h-[60px] relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[16px] py-0 relative size-full">
              <div className="h-[22.5px] relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
                  <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[22.5px] relative shrink-0 text-[#263238] text-[15px] text-center text-nowrap">
                    {title}
                  </p>
                </div>
              </div>
              <div className="h-[28px] relative shrink-0 w-[56px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                  {onEdit && (
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
                  )}
                  <button onClick={onToggle} className="flex items-center justify-center relative shrink-0">
                    <motion.div 
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-none"
                    >
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
                    </motion.div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Details Rows */}
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>
  );
}
