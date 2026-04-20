import svgPaths from "./svg-5myp4i2yse";

function Button() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c21b17] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[103px] py-[13px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#c21b17] text-[16px] text-center">Resend Code</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
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

function Button1() {
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
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[3px] top-[326px] w-[412px]">
      <Frame8 />
      <Frame1 />
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
    <div className="absolute content-stretch flex flex-col h-[39px] items-start left-[3px] pt-[21px] top-0 w-[412px]" data-name="Status Bar - iPhone">
      <Frame />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute bottom-0 h-[27px] left-[8px] right-[2px]" data-name="Home Indicator">
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

function Button2() {
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
      <Button2 />
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
    <div className="bg-[#fef3f2] relative rounded-[10px] shrink-0 size-[42px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[22px] left-1/2 not-italic text-[16px] text-black text-center top-[calc(50%-11px)]">1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#fef3f2] relative rounded-[10px] shrink-0 size-[42px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[22px] left-1/2 not-italic text-[16px] text-black text-center top-[calc(50%-11px)]">2</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#fef3f2] relative rounded-[10px] shrink-0 size-[42px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[22px] left-[calc(50%+0.5px)] not-italic text-[16px] text-black text-center top-[calc(50%-11px)]">3</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#fef3f2] relative rounded-[10px] shrink-0 size-[42px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[22px] left-[calc(50%+0.5px)] not-italic text-[16px] text-black text-center top-[calc(50%-11px)]">4</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#fef3f2] relative rounded-[10px] shrink-0 size-[42px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[22px] left-1/2 not-italic text-[16px] text-black text-center top-[calc(50%-11px)]">5</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#fef3f2] relative rounded-[10px] shrink-0 size-[42px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[22px] left-[calc(50%+0.5px)] not-italic text-[16px] text-black text-center top-[calc(50%-11px)]">6</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame5 />
      <Frame6 />
      <Frame9 />
      <Frame10 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-center left-[53px] top-[119px] w-[312px]">
      <Frame4 />
      <Frame7 />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center not-italic p-[16px] relative text-black text-center w-full whitespace-pre-wrap">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-[17px] tracking-[-0.408px] w-full" style={{ fontFeatureSettings: "\'case\'" }}>{`Verified! `}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[13px] tracking-[-0.078px] w-full">Your Mobile Number is verified successfully.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(60,60,67,0.36)] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function AlertItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="_Alert-item">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[11px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#007aff] text-[17px] text-center tracking-[-0.408px]" style={{ fontFeatureSettings: "\'case\'" }}>
            <p className="leading-[22px] whitespace-pre-wrap">Continue</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Alert() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[11px] bg-[rgba(242,242,242,0.8)] content-stretch flex flex-col items-start left-[calc(50%+0.5px)] rounded-[14px] top-[calc(50%+0.5px)] w-[273px]" data-name="Alert">
      <Content />
      <AlertItem />
    </div>
  );
}

export default function Login() {
  return (
    <div className="relative size-full" data-name="Login/6" style={{ backgroundImage: "url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 412 917\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(1.7277e-15 62.8 -28.215 3.8454e-15 206 458.5)\\'><stop stop-color=\\'rgba(255,233,231,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,254,254,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>\')" }}>
      <Frame11 />
      <StatusBarIPhone />
      <HomeIndicator />
      <Frame14 />
      <div className="absolute bg-[rgba(0,0,0,0.4)] h-[917px] left-0 top-0 w-[410px]" />
      <Alert />
    </div>
  );
}