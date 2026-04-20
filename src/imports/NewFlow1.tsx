import svgPaths from "./svg-3403gdp9ug";
import imgMascot from "figma:asset/9b8882faf2edb23d4f87beff823e8af6f285c81a.png";
import imgIcon from "figma:asset/4561056eb3a95498ccc61589b35393e53cbe0b36.png";
import imgIcon1 from "figma:asset/634d9a9aa5be837a7af4f48d24734b9635ccf11b.png";
import imgIcon2 from "figma:asset/654cafdaff37628e5a90a6b6c655b3cd203070df.png";
import imgIcon3 from "figma:asset/af2df1b399a73cc3cbf605b2095ff2561897a1d8.png";
import imgIcon4 from "figma:asset/7f9d264012cc83a80f7cb5acd5b31d45d8965a5a.png";

function Paperclip() {
  return (
    <div className="absolute left-1/2 size-[18px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="paperclip">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="paperclip">
          <path d={svgPaths.pb1ab5e8} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <Paperclip />
    </div>
  );
}

function IconText() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0" data-name="Icon+ Text">
      <Icon />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap">{`Type your response `}</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%_20.83%_12.5%_20.83%]" data-name="Group">
      <div className="absolute inset-[0_-7.14%_-5.26%_-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
          <g id="Group">
            <path d={svgPaths.p17188b80} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p11bfc93e} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Mic() {
  return (
    <div className="absolute left-[8px] overflow-clip size-[24px] top-[8px]" data-name="Mic">
      <Group />
    </div>
  );
}

function Send() {
  return (
    <div className="bg-[#c21b17] overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="Send">
      <Mic />
    </div>
  );
}

function Field() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 w-[393px]" data-name="Field">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[11px] py-[7px] relative rounded-[inherit] w-full">
        <IconText />
        <Send />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffe6e5] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function ResponseArea() {
  return (
    <div className="relative shrink-0 w-full" data-name="Response Area">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-0 relative w-full">
          <Field />
        </div>
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute bottom-0 h-[27px] left-[5px] right-[5px]" data-name="Home Indicator">
      <div className="absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 translate-x-[-50%] w-[144px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-black h-[5px] rounded-[100px] w-[144px]" data-name="Home Indicator" />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[10px] h-[104px] items-start left-1/2 translate-x-[-50%] w-[428px]">
      <ResponseArea />
      <HomeIndicator />
    </div>
  );
}

function TextContent() {
  return (
    <div className="backdrop-blur-[0px] backdrop-filter basis-0 bg-white grow min-h-px min-w-px mr-[-8px] relative rounded-[16px] shrink-0" data-name="Text content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[16px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#191818] text-[16px] w-[298px]">What are you hoping to achieve with this insurance ?</p>
        </div>
      </div>
    </div>
  );
}

function ContentArea() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[8px] py-0 relative shadow-[0px_2px_2px_0px_rgba(0,0,0,0.08)] shrink-0 w-[333px]" data-name="Content Area">
      <div className="flex items-center justify-center mr-[-8px] relative shrink-0 size-[19px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="relative size-[19px]" data-name="Tip">
            <div className="absolute bottom-1/4 left-[10.54%] right-[10.54%] top-[5.26%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
                <path d={svgPaths.p375adf00} data-figma-bg-blur-radius="32.4" fill="var(--fill-0, white)" id="Tip" stroke="var(--stroke-0, white)" />
                <defs>
                  <clipPath id="bgblur_0_1_15_clip_path" transform="translate(32.4 32.4)">
                    <path d={svgPaths.p375adf00} />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <TextContent />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex items-start left-1/2 px-[12px] py-0 top-[72px] translate-x-[-50%] w-[428px]">
      <div className="relative shrink-0 size-[60px]" data-name="Mascot">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMascot} />
      </div>
      <ContentArea />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#fff7f7] content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[14px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#c21b17] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIcon} />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#c21b17] text-[16px] text-nowrap">Save for Kid’s Education</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#fff7f7] content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[14px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#c21b17] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIcon1} />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#c21b17] text-[16px] text-nowrap">Retirement Planning</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#fff7f7] content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[14px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#c21b17] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIcon2} />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#c21b17] text-[16px] text-nowrap">Build Wealth</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#fff7f7] content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[14px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#c21b17] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIcon3} />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#c21b17] text-[16px] text-nowrap">Tax Saving</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#fff7f7] content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[14px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#c21b17] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIcon4} />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#c21b17] text-[16px] text-nowrap">Protect my Family</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Recommendations() {
  return (
    <div className="absolute content-stretch flex items-start justify-end left-1/2 overflow-clip px-[20px] py-0 top-[154px] translate-x-[-50%] w-[428px]" data-name="Recommendations">
      <Frame6 />
    </div>
  );
}

function Time() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] py-0 relative w-full">
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer() {
  return <div className="h-[10px] shrink-0 w-[124px]" data-name="Dynamic Island spacer" />;
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] py-0 relative w-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13">
                <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
              </svg>
            </div>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
                <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
              </svg>
            </div>
          </div>
          <Battery />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

function StatusBarIPhone() {
  return (
    <div className="absolute content-stretch flex flex-col h-[39px] items-start left-0 pb-0 pt-[21px] px-0 top-0 w-[412px]" data-name="Status Bar - iPhone">
      <Frame />
    </div>
  );
}

export default function NewFlow() {
  return (
    <div className="bg-gradient-to-b from-[#ffe9e7] relative size-full to-[#fffefe]" data-name="New flow/1">
      <Frame8 />
      <Frame7 />
      <Recommendations />
      <StatusBarIPhone />
    </div>
  );
}