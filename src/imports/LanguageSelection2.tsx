import svgPaths from "./svg-kmz5b1ptb4";
import imgMascot from "figma:asset/9b8882faf2edb23d4f87beff823e8af6f285c81a.png";

function Button() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[#c21b17] min-h-px min-w-px relative rounded-[12px] to-[#a11612]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[103px] py-[13px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-center text-white">Continue</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[56px] content-stretch flex items-center justify-center left-1/2 overflow-clip px-[20px] w-[428px]">
      <Button />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[20px] not-italic relative shrink-0 text-center w-full whitespace-pre-wrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#393737] text-[20px] w-full">Choose your preferred language</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#676565] text-[14px] w-full">Select your preferred language to continue.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-center left-[calc(50%+0.5px)] top-[119px] w-[349px]">
      <div className="relative shrink-0 size-[80px]" data-name="Mascot">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMascot} />
      </div>
      <Frame3 />
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
    <div className="absolute content-stretch flex flex-col h-[39px] items-start left-0 pt-[21px] top-0 w-[412px]" data-name="Status Bar - iPhone">
      <Frame />
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

function Group1() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <g id="Group">
            <path d={svgPaths.p1c70eaf0} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="2" />
            <path d="M7.00001 11L10 14L16 8.00001" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="Mask group">
      <Group />
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d="M0 0H24V24H0V0Z" fill="var(--fill-0, #C21B17)" id="Vector" />
      </svg>
    </div>
  );
}

function IconParkSolidCheckOne() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon-park-solid:check-one">
      <MaskGroup />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ebe5e5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21.318px] not-italic relative shrink-0 text-[#393737] text-[21.318px]">English</p>
          <IconParkSolidCheckOne />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8.527px] items-center leading-[21.318px] not-italic relative shrink-0 text-[21.318px]">
      <p className="font-['Inter:Light','Noto_Sans_Devanagari:Light',sans-serif] font-light relative shrink-0 text-black">हिंदी</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5d5a5a]">(Hindi)</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ebe5e5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8.527px] items-center leading-[21.318px] not-italic relative shrink-0 text-[21.318px]">
      <p className="font-['Inter:Light','Noto_Sans_Tamil:Light',sans-serif] font-light relative shrink-0 text-black">தமிழ்</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5d5a5a]">(Tamil)</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ebe5e5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8.527px] items-center leading-[21.318px] not-italic relative shrink-0 text-[21.318px]">
      <p className="font-['Inter:Light','Noto_Sans_Kannada:Light',sans-serif] font-light relative shrink-0 text-black">ಕನ್ನಡ</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5d5a5a]">(Kannada)</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ebe5e5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8.527px] items-center leading-[21.318px] not-italic relative shrink-0 text-[21.318px]">
      <p className="font-['Inter:Light','Noto_Sans_Malayalam:Light',sans-serif] font-light relative shrink-0 text-black">മലയാളം</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5d5a5a]">(Malyalam)</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ebe5e5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8.527px] items-center leading-[21.318px] not-italic relative shrink-0 text-[21.318px]">
      <p className="font-['Inter:Light','Noto_Sans_Telugu:Light',sans-serif] font-light relative shrink-0 text-black">తెలుగు</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5d5a5a]">(Telugu)</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ebe5e5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8.527px] items-center leading-[21.318px] not-italic relative shrink-0 text-[21.318px]">
      <p className="font-['Inter:Light','Noto_Sans_Bengali:Light',sans-serif] font-light relative shrink-0 text-black">বাংলা</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5d5a5a]">(Bengali)</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ebe5e5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8.527px] items-center leading-[21.318px] not-italic relative shrink-0 text-[21.318px]">
      <p className="font-['Inter:Light','Noto_Sans_Devanagari:Light',sans-serif] font-light relative shrink-0 text-black">मराठी</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5d5a5a]">(Marathi)</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ebe5e5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8.527px] items-center leading-[21.318px] not-italic relative shrink-0 text-[21.318px]">
      <p className="font-['Inter:Light','Noto_Sans_Gujarati:Light',sans-serif] font-light relative shrink-0 text-black">ગુજરાતી</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5d5a5a]">(Gujrati)</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ebe5e5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8.527px] items-center leading-[21.318px] not-italic relative shrink-0 text-[21.318px]">
      <p className="font-['Inter:Light','Noto_Sans_Gujarati:Light',sans-serif] font-light relative shrink-0 text-black">ગુજરાતી</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5d5a5a]">(Punjabi)</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ebe5e5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Frame23 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[20px] items-start left-1/2 top-[327px] w-[372px]">
      <Frame12 />
      <Frame13 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
    </div>
  );
}

export default function LanguageSelection() {
  return (
    <div className="relative size-full" data-name="Language selection 2" style={{ backgroundImage: "url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 428 1263\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(1.7948e-15 86.496 -29.311 5.2963e-15 214 631.5)\\'><stop stop-color=\\'rgba(255,233,231,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,254,254,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>\')" }}>
      <Frame1 />
      <Frame2 />
      <StatusBarIPhone />
      <HomeIndicator />
      <Frame14 />
    </div>
  );
}