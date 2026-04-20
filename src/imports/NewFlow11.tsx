import svgPaths from "./svg-uv2j9hv8ol";
import imgMascot from "figma:asset/9b8882faf2edb23d4f87beff823e8af6f285c81a.png";

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

function Frame1() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[10px] h-[104px] items-start left-1/2 translate-x-[-50%] w-[428px]">
      <ResponseArea />
      <HomeIndicator />
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
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#191818] text-[16px] w-[298px]">{`Nice! I've picked a few plans that fit your income.`}</p>
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

function Frame2() {
  return (
    <div className="absolute content-stretch flex items-start left-1/2 px-[12px] py-0 top-[71px] translate-x-[-50%] w-[428px]">
      <div className="relative shrink-0 size-[60px]" data-name="Mascot">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMascot} />
      </div>
      <ContentArea />
    </div>
  );
}

function PlanCard() {
  return <div className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid h-[203.6px] left-0 rounded-[16px] top-0 w-[332.8px]" data-name="PlanCard" />;
}

function PlanCard1() {
  return (
    <div className="absolute content-stretch flex h-[19.2px] items-start left-[16px] top-[16px] w-[300.8px]" data-name="PlanCard">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[16px]">Assured Education Plan</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-13.64%_-9.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10">
            <path d={svgPaths.pb78d1c0} id="Vector" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4px] size-[16px] top-[0.4px]" data-name="CheckIcon">
      <Icon1 />
    </div>
  );
}

function BenefitItem() {
  return (
    <div className="absolute content-stretch flex h-[16.8px] items-start left-[28px] top-0 w-[272.8px]" data-name="BenefitItem">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#536b76] text-[14px] text-nowrap">Guaranteed education fund for children</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[16.8px] left-0 top-0 w-[300.8px]" data-name="Container">
      <CheckIcon />
      <BenefitItem />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-13.64%_-9.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10">
            <path d={svgPaths.pb78d1c0} id="Vector" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CheckIcon1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4px] size-[16px] top-[0.4px]" data-name="CheckIcon">
      <Icon2 />
    </div>
  );
}

function BenefitItem1() {
  return (
    <div className="absolute content-stretch flex h-[16.8px] items-start left-[28px] top-0 w-[272.8px]" data-name="BenefitItem">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#536b76] text-[14px]">Tax benefits under Section 80C</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[16.8px] left-0 top-[28.8px] w-[300.8px]" data-name="Container">
      <CheckIcon1 />
      <BenefitItem1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-13.64%_-9.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10">
            <path d={svgPaths.pb78d1c0} id="Vector" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CheckIcon2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4px] size-[16px] top-[0.4px]" data-name="CheckIcon">
      <Icon3 />
    </div>
  );
}

function BenefitItem2() {
  return (
    <div className="absolute content-stretch flex h-[16.8px] items-start left-[28px] top-0 w-[272.8px]" data-name="BenefitItem">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#536b76] text-[14px]">Flexible premium payment options</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[16.8px] left-0 top-[57.6px] w-[300.8px]" data-name="Container">
      <CheckIcon2 />
      <BenefitItem2 />
    </div>
  );
}

function PlanCard2() {
  return (
    <div className="absolute h-[74.4px] left-[16px] top-[51.2px] w-[300.8px]" data-name="PlanCard">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[14.2px] size-[16px] top-[11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return <div className="absolute border-[#c21b17] border-[0.8px] border-solid h-[38px] left-0 rounded-[8px] top-0 w-[144.4px]" data-name="Container" />;
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[36.2px] top-[10px] w-[94px]" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#c21b17] text-[14px] text-center text-nowrap">Plan at glance</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#ffe9e7] h-[38px] left-0 rounded-[8px] top-0 w-[144.4px]" data-name="Button">
      <Icon4 />
      <Container3 />
      <Paragraph />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[23.69px] size-[16px] top-[11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, #263238)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_2" stroke="var(--stroke-0, #263238)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19411800} id="Vector_3" stroke="var(--stroke-0, #263238)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return <div className="absolute border-[0.8px] border-[rgba(0,0,0,0.2)] border-solid h-[38px] left-0 rounded-[8px] top-0 w-[144.4px]" data-name="Container" />;
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[45.69px] top-[10px] w-[75.025px]" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#263238] text-[14px] text-center text-nowrap">e-brochure</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white h-[38px] left-[156.4px] rounded-[8px] top-0 w-[144.4px]" data-name="Button">
      <Icon5 />
      <Container4 />
      <Paragraph1 />
    </div>
  );
}

function PlanCard3() {
  return (
    <div className="absolute h-[38px] left-[16px] top-[149.6px] w-[300.8px]" data-name="PlanCard">
      <Button />
      <Button1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-white h-[203.6px] left-[20px] rounded-[16px] top-0 w-[332.8px]" data-name="Container">
      <PlanCard />
      <PlanCard1 />
      <PlanCard2 />
      <PlanCard3 />
    </div>
  );
}

function PlanCard4() {
  return <div className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid h-[203.6px] left-0 rounded-[16px] top-0 w-[332.8px]" data-name="PlanCard" />;
}

function PlanCard5() {
  return (
    <div className="absolute content-stretch flex h-[19.2px] items-start left-[16px] top-[16px] w-[300.8px]" data-name="PlanCard">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[16px]">Future Secure Investment</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-13.64%_-9.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10">
            <path d={svgPaths.pb78d1c0} id="Vector" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CheckIcon3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4px] size-[16px] top-[0.4px]" data-name="CheckIcon">
      <Icon6 />
    </div>
  );
}

function BenefitItem3() {
  return (
    <div className="absolute content-stretch flex h-[16.8px] items-start left-[28px] top-0 w-[272.8px]" data-name="BenefitItem">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#536b76] text-[14px]">{`Dual benefit of protection & savings`}</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[16.8px] left-0 top-0 w-[300.8px]" data-name="Container">
      <CheckIcon3 />
      <BenefitItem3 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-13.64%_-9.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10">
            <path d={svgPaths.pb78d1c0} id="Vector" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CheckIcon4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4px] size-[16px] top-[0.4px]" data-name="CheckIcon">
      <Icon7 />
    </div>
  );
}

function BenefitItem4() {
  return (
    <div className="absolute content-stretch flex h-[16.8px] items-start left-[28px] top-0 w-[272.8px]" data-name="BenefitItem">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#536b76] text-[14px]">Market-linked returns potential</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[16.8px] left-0 top-[28.8px] w-[300.8px]" data-name="Container">
      <CheckIcon4 />
      <BenefitItem4 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-13.64%_-9.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10">
            <path d={svgPaths.pb78d1c0} id="Vector" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CheckIcon5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4px] size-[16px] top-[0.4px]" data-name="CheckIcon">
      <Icon8 />
    </div>
  );
}

function BenefitItem5() {
  return (
    <div className="absolute content-stretch flex h-[16.8px] items-start left-[28px] top-0 w-[272.8px]" data-name="BenefitItem">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#536b76] text-[14px]">Partial withdrawal facility</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[16.8px] left-0 top-[57.6px] w-[300.8px]" data-name="Container">
      <CheckIcon5 />
      <BenefitItem5 />
    </div>
  );
}

function PlanCard6() {
  return (
    <div className="absolute h-[74.4px] left-[16px] top-[51.2px] w-[300.8px]" data-name="PlanCard">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[14.2px] size-[16px] top-[11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return <div className="absolute border-[#c21b17] border-[0.8px] border-solid h-[38px] left-0 rounded-[8px] top-0 w-[144.4px]" data-name="Container" />;
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[36.2px] top-[10px] w-[94px]" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#c21b17] text-[14px] text-center text-nowrap">Plan at glance</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#ffe9e7] h-[38px] left-0 rounded-[8px] top-0 w-[144.4px]" data-name="Button">
      <Icon9 />
      <Container9 />
      <Paragraph2 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[23.69px] size-[16px] top-[11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, #263238)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_2" stroke="var(--stroke-0, #263238)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19411800} id="Vector_3" stroke="var(--stroke-0, #263238)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return <div className="absolute border-[0.8px] border-[rgba(0,0,0,0.2)] border-solid h-[38px] left-0 rounded-[8px] top-0 w-[144.4px]" data-name="Container" />;
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[45.69px] top-[10px] w-[75.025px]" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#263238] text-[14px] text-center text-nowrap">e-brochure</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white h-[38px] left-[156.4px] rounded-[8px] top-0 w-[144.4px]" data-name="Button">
      <Icon10 />
      <Container10 />
      <Paragraph3 />
    </div>
  );
}

function PlanCard7() {
  return (
    <div className="absolute h-[38px] left-[16px] top-[149.6px] w-[300.8px]" data-name="PlanCard">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-white h-[203.6px] left-[20px] rounded-[16px] top-[219.6px] w-[332.8px]" data-name="Container">
      <PlanCard4 />
      <PlanCard5 />
      <PlanCard6 />
      <PlanCard7 />
    </div>
  );
}

function PlanCard8() {
  return <div className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid h-[203.6px] left-0 rounded-[16px] top-0 w-[332.8px]" data-name="PlanCard" />;
}

function PlanCard9() {
  return (
    <div className="absolute content-stretch flex h-[19.2px] items-start left-[16px] top-[16px] w-[300.8px]" data-name="PlanCard">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[16px]">Education Protection</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-13.64%_-9.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10">
            <path d={svgPaths.pb78d1c0} id="Vector" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CheckIcon6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4px] size-[16px] top-[0.4px]" data-name="CheckIcon">
      <Icon11 />
    </div>
  );
}

function BenefitItem6() {
  return (
    <div className="absolute content-stretch flex h-[16.8px] items-start left-[28px] top-0 w-[272.8px]" data-name="BenefitItem">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#536b76] text-[14px]">Premium waiver on critical illness</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[16.8px] left-0 top-0 w-[300.8px]" data-name="Container">
      <CheckIcon6 />
      <BenefitItem6 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-13.64%_-9.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10">
            <path d={svgPaths.pb78d1c0} id="Vector" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CheckIcon7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4px] size-[16px] top-[0.4px]" data-name="CheckIcon">
      <Icon12 />
    </div>
  );
}

function BenefitItem7() {
  return (
    <div className="absolute content-stretch flex h-[16.8px] items-start left-[28px] top-0 w-[272.8px]" data-name="BenefitItem">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#536b76] text-[14px]">Annual bonus accumulation</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[16.8px] left-0 top-[28.8px] w-[300.8px]" data-name="Container">
      <CheckIcon7 />
      <BenefitItem7 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-13.64%_-9.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10">
            <path d={svgPaths.pb78d1c0} id="Vector" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CheckIcon8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4px] size-[16px] top-[0.4px]" data-name="CheckIcon">
      <Icon13 />
    </div>
  );
}

function BenefitItem8() {
  return (
    <div className="absolute content-stretch flex h-[16.8px] items-start left-[28px] top-0 w-[272.8px]" data-name="BenefitItem">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#536b76] text-[14px]">Scholarship benefit for milestones</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[16.8px] left-0 top-[57.6px] w-[300.8px]" data-name="Container">
      <CheckIcon8 />
      <BenefitItem8 />
    </div>
  );
}

function PlanCard10() {
  return (
    <div className="absolute h-[74.4px] left-[16px] top-[51.2px] w-[300.8px]" data-name="PlanCard">
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[14.2px] size-[16px] top-[11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return <div className="absolute border-[#c21b17] border-[0.8px] border-solid h-[38px] left-0 rounded-[8px] top-0 w-[144.4px]" data-name="Container" />;
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[36.2px] top-[10px] w-[94px]" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#c21b17] text-[14px] text-center text-nowrap">Plan at glance</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#ffe9e7] h-[38px] left-0 rounded-[8px] top-0 w-[144.4px]" data-name="Button">
      <Icon14 />
      <Container15 />
      <Paragraph4 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[23.69px] size-[16px] top-[11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, #263238)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_2" stroke="var(--stroke-0, #263238)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19411800} id="Vector_3" stroke="var(--stroke-0, #263238)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return <div className="absolute border-[0.8px] border-[rgba(0,0,0,0.2)] border-solid h-[38px] left-0 rounded-[8px] top-0 w-[144.4px]" data-name="Container" />;
}

function Paragraph5() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[45.69px] top-[10px] w-[75.025px]" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#263238] text-[14px] text-center text-nowrap">e-brochure</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white h-[38px] left-[156.4px] rounded-[8px] top-0 w-[144.4px]" data-name="Button">
      <Icon15 />
      <Container16 />
      <Paragraph5 />
    </div>
  );
}

function PlanCard11() {
  return (
    <div className="absolute h-[38px] left-[16px] top-[149.6px] w-[300.8px]" data-name="PlanCard">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-white h-[203.6px] left-[20px] rounded-[16px] top-[439.2px] w-[332.8px]" data-name="Container">
      <PlanCard8 />
      <PlanCard9 />
      <PlanCard10 />
      <PlanCard11 />
    </div>
  );
}

function PlanCard12() {
  return <div className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid h-[203.6px] left-0 rounded-[16px] top-0 w-[332.8px]" data-name="PlanCard" />;
}

function PlanCard13() {
  return (
    <div className="absolute content-stretch flex h-[19.2px] items-start left-[16px] top-[16px] w-[300.8px]" data-name="PlanCard">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[16px]">Educare Insurance</p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-13.64%_-9.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10">
            <path d={svgPaths.pb78d1c0} id="Vector" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CheckIcon9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4px] size-[16px] top-[0.4px]" data-name="CheckIcon">
      <Icon16 />
    </div>
  );
}

function BenefitItem9() {
  return (
    <div className="absolute content-stretch flex h-[16.8px] items-start left-[28px] top-0 w-[272.8px]" data-name="BenefitItem">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#536b76] text-[14px]">Comprehensive family floater cover</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[16.8px] left-0 top-0 w-[300.8px]" data-name="Container">
      <CheckIcon9 />
      <BenefitItem9 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-13.64%_-9.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10">
            <path d={svgPaths.pb78d1c0} id="Vector" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CheckIcon10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4px] size-[16px] top-[0.4px]" data-name="CheckIcon">
      <Icon17 />
    </div>
  );
}

function BenefitItem10() {
  return (
    <div className="absolute content-stretch flex h-[16.8px] items-start left-[28px] top-0 w-[272.8px]" data-name="BenefitItem">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#536b76] text-[14px] text-nowrap">Cashless treatment at network hospitals</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[16.8px] left-0 top-[28.8px] w-[300.8px]" data-name="Container">
      <CheckIcon10 />
      <BenefitItem10 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-13.64%_-9.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10">
            <path d={svgPaths.pb78d1c0} id="Vector" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CheckIcon11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4px] size-[16px] top-[0.4px]" data-name="CheckIcon">
      <Icon18 />
    </div>
  );
}

function BenefitItem11() {
  return (
    <div className="absolute content-stretch flex h-[16.8px] items-start left-[28px] top-0 w-[272.8px]" data-name="BenefitItem">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#536b76] text-[14px]">No claim bonus benefits</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[16.8px] left-0 top-[57.6px] w-[300.8px]" data-name="Container">
      <CheckIcon11 />
      <BenefitItem11 />
    </div>
  );
}

function PlanCard14() {
  return (
    <div className="absolute h-[74.4px] left-[16px] top-[51.2px] w-[300.8px]" data-name="PlanCard">
      <Container18 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-[14.2px] size-[16px] top-[11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #C21B17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return <div className="absolute border-[#c21b17] border-[0.8px] border-solid h-[38px] left-0 rounded-[8px] top-0 w-[144.4px]" data-name="Container" />;
}

function Paragraph6() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[36.2px] top-[10px] w-[94px]" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#c21b17] text-[14px] text-center text-nowrap">Plan at glance</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#ffe9e7] h-[38px] left-0 rounded-[8px] top-0 w-[144.4px]" data-name="Button">
      <Icon19 />
      <Container21 />
      <Paragraph6 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-[23.69px] size-[16px] top-[11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, #263238)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_2" stroke="var(--stroke-0, #263238)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19411800} id="Vector_3" stroke="var(--stroke-0, #263238)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return <div className="absolute border-[0.8px] border-[rgba(0,0,0,0.2)] border-solid h-[38px] left-0 rounded-[8px] top-0 w-[144.4px]" data-name="Container" />;
}

function Paragraph7() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[45.69px] top-[10px] w-[75.025px]" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#263238] text-[14px] text-center text-nowrap">e-brochure</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white h-[38px] left-[156.4px] rounded-[8px] top-0 w-[144.4px]" data-name="Button">
      <Icon20 />
      <Container22 />
      <Paragraph7 />
    </div>
  );
}

function PlanCard15() {
  return (
    <div className="absolute h-[38px] left-[16px] top-[149.6px] w-[300.8px]" data-name="PlanCard">
      <Button6 />
      <Button7 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-white h-[203.6px] left-[20px] rounded-[16px] top-[658.8px] w-[332.8px]" data-name="Container">
      <PlanCard12 />
      <PlanCard13 />
      <PlanCard14 />
      <PlanCard15 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[862.4px] relative shrink-0 w-[372.8px]" data-name="Container">
      <Container5 />
      <Container11 />
      <Container17 />
      <Container23 />
    </div>
  );
}

function PlansScrollArea() {
  return (
    <div className="absolute content-stretch flex items-center left-1/2 overflow-clip px-[7px] py-0 top-[157px] translate-x-[-50%]" data-name="PlansScrollArea">
      <Container24 />
    </div>
  );
}

export default function NewFlow() {
  return (
    <div className="bg-gradient-to-b from-[#ffe9e7] relative size-full to-[#fffefe]" data-name="New flow/11">
      <Frame1 />
      <StatusBarIPhone />
      <Frame2 />
      <PlansScrollArea />
    </div>
  );
}