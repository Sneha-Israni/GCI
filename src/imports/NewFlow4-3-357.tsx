import svgPaths from "./svg-64a40gqobi";
import imgMascot from "figma:asset/9b8882faf2edb23d4f87beff823e8af6f285c81a.png";

function Information() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center leading-[normal] not-italic relative shrink-0 text-[16px] text-center w-[335px]" data-name="Information">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8e8e8e] w-full">Hi, I am listening. Try Saying...</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-black w-full">“I am 24 and male”</p>
    </div>
  );
}

function IconamoonCloseFill() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="iconamoon:close-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="iconamoon:close-fill">
          <path clipRule="evenodd" d={svgPaths.p2796b00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
      <div className="bg-[#3b3a3a] h-[16px] rounded-[12px] shrink-0 w-[6px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[15.31%_15.3%_0.78%_11.33%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21">
        <g id="Group">
          <g id="Vector"></g>
          <path d={svgPaths.p228c500} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteSendFill() {
  return (
    <div className="absolute left-[8px] overflow-clip size-[24px] top-[8px]" data-name="mingcute:send-fill">
      <Group />
    </div>
  );
}

function Send() {
  return (
    <div className="bg-[#c21b17] overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="Send">
      <MingcuteSendFill />
    </div>
  );
}

function IconText() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon+ Text">
      <IconamoonCloseFill />
      <Frame6 />
      <Send />
    </div>
  );
}

function Field() {
  return (
    <div className="absolute bg-white h-[168px] left-[calc(50%+0.5px)] rounded-[20px] top-[719px] translate-x-[-50%] w-[393px]" data-name="Field">
      <div className="content-stretch flex flex-col items-center justify-between overflow-clip px-[11px] py-[14px] relative rounded-[inherit] size-full">
        <Information />
        <IconText />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffe6e5] border-solid inset-0 pointer-events-none rounded-[20px]" />
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

function TextContent() {
  return (
    <div className="backdrop-blur-[0px] backdrop-filter basis-0 bg-white grow min-h-px min-w-px mr-[-8px] relative rounded-[16px] shrink-0" data-name="Text content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[16px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#191818] text-[16px] w-[298px]">To personalise your plan, I’ll need your age and gender.</p>
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

function Frame5() {
  return (
    <div className="absolute content-stretch flex items-start left-1/2 px-[12px] py-0 top-[85px] translate-x-[-50%] w-[428px]">
      <div className="relative shrink-0 size-[60px]" data-name="Mascot">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMascot} />
      </div>
      <ContentArea />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_99)" id="Icon">
          <path d={svgPaths.p2e00b00} id="Vector" stroke="var(--stroke-0, #0A70FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M15 2.25V5.25" id="Vector_2" stroke="var(--stroke-0, #0A70FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M16.5 3.75H13.5" id="Vector_3" stroke="var(--stroke-0, #0A70FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3 12.75V14.25" id="Vector_4" stroke="var(--stroke-0, #0A70FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3.75 13.5H2.25" id="Vector_5" stroke="var(--stroke-0, #0A70FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_99">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ExampleResponseHeader() {
  return (
    <div className="basis-0 grow h-[19.5px] min-h-px min-w-px relative shrink-0" data-name="Example response header">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#0a70ff] text-[13px] text-nowrap top-[0.4px]">Example Response:</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-start relative shrink-0 w-full">
      <Icon />
      <ExampleResponseHeader />
    </div>
  );
}

function Description() {
  return (
    <div className="h-[13px] relative shrink-0 w-full" data-name="Description">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#0a70ff] text-[12px] top-[-0.4px] w-[298px]">I’m 29 and female.</p>
    </div>
  );
}

function Description1() {
  return (
    <div className="h-[13px] relative shrink-0 w-full" data-name="Description">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#0a70ff] text-[12px] top-[-0.4px] w-[298px]">30, male.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col h-[13px] items-start relative shrink-0 w-full">
      <Description1 />
    </div>
  );
}

function Frame4() {
  return <div className="basis-0 grow min-h-px min-w-px shrink-0 w-full" />;
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[66px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Description />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#f7faff] content-stretch flex flex-col h-[96px] items-start p-[16px] relative rounded-[16px] shrink-0 w-[372px]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#0a70ff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Frame2 />
    </div>
  );
}

function ExampleContent() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-1/2 px-[20px] py-0 top-[171px] translate-x-[-50%] w-[428px]" data-name="Example Content">
      <Content />
    </div>
  );
}

export default function NewFlow() {
  return (
    <div className="bg-gradient-to-b from-[#ffe9e7] relative size-full to-[#fffefe]" data-name="New flow/4">
      <Field />
      <HomeIndicator />
      <StatusBarIPhone />
      <Frame5 />
      <ExampleContent />
    </div>
  );
}