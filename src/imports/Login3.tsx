import svgPaths from "./svg-bxwubusjyj";

function Frame14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[22px] not-italic relative shrink-0 text-[12px] text-center">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-black">Didn’t receive a code ?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#7f7f7f]">Resend in 20s</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[#c21b17] min-h-px min-w-px relative rounded-[12px] to-[#a11612]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[103px] py-[13px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-center text-white">Verify</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] relative w-full">
          <Button />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-center left-0 top-[318px] w-[412px]">
      <Frame14 />
      <Frame11 />
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

function Icon() {
  return (
    <div className="h-[8px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-4.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24994 7.24985">
            <path d={svgPaths.p6f2eef0} id="Vector" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.583333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] px-[2px] relative rounded-[3px] shrink-0 size-[12px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#fef3f2] content-stretch flex gap-[4px] items-center pl-[6px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#fecdca] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#b42318] text-[12px] text-center" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        Edit
      </p>
      <Button1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#263238] text-[14px] text-center w-[109px] whitespace-pre-wrap">+91 9191919191</p>
      <Badge />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#615f5f] text-[14px] text-center w-full whitespace-pre-wrap">We’ve sent a 6 digit code to</p>
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-center w-full whitespace-pre-wrap">Enter Verification Code</p>
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[42px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[42px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[42px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[42px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[42px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[42px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame5 />
      <Frame6 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-center left-[50px] top-[119px] w-[312px]">
      <Frame4 />
      <Frame7 />
    </div>
  );
}

export default function Login() {
  return (
    <div className="relative size-full" data-name="Login/3" style={{ backgroundImage: "url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 412 917\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(1.7277e-15 62.8 -28.215 3.8454e-15 206 458.5)\\'><stop stop-color=\\'rgba(255,233,231,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,254,254,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>\')" }}>
      <Frame15 />
      <StatusBarIPhone />
      <HomeIndicator />
      <Frame13 />
    </div>
  );
}