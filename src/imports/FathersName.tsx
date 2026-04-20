import svgPaths from "./svg-chvwy7yb4s";

function Icon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_306_267)" id="Icon">
          <path d={svgPaths.p319d7580} id="Vector" stroke="var(--stroke-0, #FFA726)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 2V4.66667" id="Vector_2" stroke="var(--stroke-0, #FFA726)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 3.33333H12" id="Vector_3" stroke="var(--stroke-0, #FFA726)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2.66667 11.3333V12.6667" id="Vector_4" stroke="var(--stroke-0, #FFA726)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M3.33333 12H2" id="Vector_5" stroke="var(--stroke-0, #FFA726)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_306_267">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PlanCard() {
  return (
    <div className="absolute h-[30.4px] left-[36px] top-[10px] w-[298.4px]" data-name="PlanCard2">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[0.2px] not-italic text-[#666] text-[12px] top-[0.2px] w-[311px]">{`We’ve fetched your Father’s name: Prakash Sharma from your PAN Card. `}</p>
    </div>
  );
}

export default function FathersName() {
  return (
    <div className="bg-gradient-to-b border-[#ffe5b4] border-[0.8px] border-solid from-[#fff9e6] relative rounded-[12px] size-full to-white" data-name="Father\'s name">
      <Icon />
      <PlanCard />
    </div>
  );
}