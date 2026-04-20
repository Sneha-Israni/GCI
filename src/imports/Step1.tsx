import svgPaths from "./svg-cnn34156k0";
import imgMascot from "figma:asset/9b8882faf2edb23d4f87beff823e8af6f285c81a.png";

function Paperclip() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="paperclip">
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
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[16px] text-black">{`Type your response `}</p>
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
        <div className="content-stretch flex items-center justify-center px-[16px] relative w-full">
          <Field />
        </div>
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute bottom-0 h-[27px] left-[5px] right-[5px]" data-name="Home Indicator">
      <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-black h-[5px] rounded-[100px] w-[144px]" data-name="Home Indicator" />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col gap-[10px] h-[104px] items-start left-1/2 w-[428px]">
      <ResponseArea />
      <HomeIndicator />
    </div>
  );
}

function Time() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[17px] text-black text-center">9:41</p>
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
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
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] relative w-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
            </svg>
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
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[39px] items-start left-1/2 pt-[21px] top-0 w-[412px]" data-name="Status Bar - iPhone">
      <Frame />
    </div>
  );
}

function TextContent() {
  return (
    <div className="backdrop-blur-[0px] bg-white flex-[1_0_0] min-h-px min-w-px mr-[-8px] relative rounded-[16px]" data-name="Text content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[16px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#191818] text-[16px] w-[298px] whitespace-pre-wrap">To personalise your plan, I’ll need your age and gender.</p>
        </div>
      </div>
    </div>
  );
}

function ContentArea() {
  return (
    <div className="content-stretch flex items-center pr-[8px] relative shadow-[0px_2px_2px_0px_rgba(0,0,0,0.08)] shrink-0 w-[333px]" data-name="Content Area">
      <div className="flex items-center justify-center mr-[-8px] relative shrink-0 size-[19px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21.59375" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="relative size-[19px]" data-name="Tip">
            <div className="absolute bottom-1/4 left-[10.54%] right-[10.54%] top-[5.26%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9934 13.25">
                <path d={svgPaths.p375adf00} data-figma-bg-blur-radius="32.4" fill="var(--fill-0, white)" id="Tip" stroke="var(--stroke-0, white)" />
                <defs>
                  <clipPath id="bgblur_0_627_201_clip_path" transform="translate(32.4 32.4)">
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
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex items-start px-[12px] relative w-full">
        <div className="relative shrink-0 size-[60px]" data-name="Mascot">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMascot} />
        </div>
        <ContentArea />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_627_191)" id="Icon">
          <path d={svgPaths.p2e00b00} id="Vector" stroke="var(--stroke-0, #0A70FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M15 2.25V5.25" id="Vector_2" stroke="var(--stroke-0, #0A70FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M16.5 3.75H13.5" id="Vector_3" stroke="var(--stroke-0, #0A70FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3 12.75V14.25" id="Vector_4" stroke="var(--stroke-0, #0A70FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3.75 13.5H2.25" id="Vector_5" stroke="var(--stroke-0, #0A70FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_627_191">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ExampleResponseHeader() {
  return (
    <div className="flex-[1_0_0] h-[19.5px] min-h-px min-w-px relative" data-name="Example response header">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#0a70ff] text-[13px] top-[0.4px]">Example Response:</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-start relative shrink-0 w-full">
      <Icon1 />
      <ExampleResponseHeader />
    </div>
  );
}

function Description() {
  return (
    <div className="h-[13px] relative shrink-0 w-full" data-name="Description">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#0a70ff] text-[12px] top-[-0.4px] w-[298px] whitespace-pre-wrap">I’m 29 and female.</p>
    </div>
  );
}

function Description1() {
  return (
    <div className="h-[13px] relative shrink-0 w-full" data-name="Description">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#0a70ff] text-[12px] top-[-0.4px] w-[298px] whitespace-pre-wrap">30, male.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col h-[13px] items-start relative shrink-0 w-full">
      <Description1 />
    </div>
  );
}

function Frame5() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-full" />;
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[66px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Description />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#f7faff] content-stretch flex flex-col h-[96px] items-start p-[16px] relative rounded-[16px] shrink-0 w-[372px]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#0a70ff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Frame3 />
    </div>
  );
}

function ExampleContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Example Content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 top-[192px] w-[428px]">
      <Frame7 />
      <ExampleContent />
    </div>
  );
}

function ProgressDetails() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Progress Details">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#545659] text-[12px]">Step 1/30, Let’s get started 🚀</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-gradient-to-r from-[#cc1b17] h-[6px] relative rounded-[37px] shrink-0 to-[#8e1613] w-[20px]">
      <div className="size-full" />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="bg-[#e6dcdb] content-stretch flex flex-col h-[6px] items-start relative rounded-[37px] shrink-0 w-full" data-name="Progress Bar">
      <Frame8 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[396px]">
      <ProgressDetails />
      <ProgressBar />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-4.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4999 14.4997">
            <path d={svgPaths.p140233b0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] px-[4px] relative rounded-[6px] shrink-0 size-[24px]" data-name="Button">
      <Icon2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Button />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white">Edit Details</p>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="relative size-[24px]" data-name="arrow down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow down">
          <path d="M6 15L12 9L18 15" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#c21b17] h-[40px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative size-full">
          <Frame6 />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21.59375" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <ArrowDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-center left-0 top-[67px] w-[428px]">
      <Frame11 />
      <Frame1 />
    </div>
  );
}

export default function Step() {
  return (
    <div className="bg-[#fbf7f6] relative size-full" data-name="Step 1">
      <Frame9 />
      <StatusBarIPhone />
      <Frame10 />
      <Frame12 />
    </div>
  );
}