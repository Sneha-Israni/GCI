import svgPaths from "./svg-4efa51uxyj";
import imgMascot from "figma:asset/9b8882faf2edb23d4f87beff823e8af6f285c81a.png";

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
    <div className="absolute bottom-0 content-stretch flex flex-col h-[27px] items-start left-1/2 translate-x-[-50%] w-[428px]">
      <HomeIndicator />
    </div>
  );
}

function Time() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] py-0 relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[17px] text-black text-center text-nowrap">9:41</p>
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
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] py-0 relative w-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
                <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
              </svg>
            </div>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
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
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#191818] text-[16px] w-[298px]">Please answer these questions about your interaction with the Customer</p>
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
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9934 13.25">
                <path d={svgPaths.p375adf00} data-figma-bg-blur-radius="32.4" fill="var(--fill-0, white)" id="Tip" stroke="var(--stroke-0, white)" />
                <defs>
                  <clipPath id="bgblur_0_112_610_clip_path" transform="translate(32.4 32.4)">
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
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex items-start px-[12px] py-0 relative w-full">
          <div className="relative shrink-0 size-[60px]" data-name="Mascot">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMascot} />
          </div>
          <ContentArea />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[71px] w-[428px]">
      <Frame2 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[24px] left-[78px] top-[16px] w-[234px]" data-name="Text">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-[116px] not-italic text-[#a3a3a3] text-[16px] text-center text-nowrap top-[-0.64px] translate-x-[-50%]">Submit Details</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#e5e5e5] h-[56px] left-[calc(50%+4px)] rounded-[12px] shadow-[0px_4px_12px_0px_rgba(194,27,23,0.25)] top-[2229px] translate-x-[-50%] w-[388px]" data-name="Button">
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[16.523px] items-start left-[109px] top-[22.82px] w-[5.459px]" data-name="Text">
      <p className="font-['Arial:Bold',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#c21b17] text-[14px] text-nowrap">*</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[42px] items-end left-0 px-[89px] py-[2px] top-[-0.82px] w-[330px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#1a1a1a] text-[14px] top-0 w-[330px]">Did you meet Girish Mane in person at the time of Application ?</p>
      <Text1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[41.973px] relative shrink-0 w-full" data-name="Paragraph">
      <Frame8 />
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 content-stretch flex grow h-[16px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[#737373] text-[16px] text-center text-nowrap">Yes</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-white grow h-[56px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[68px] py-[20px] relative size-full">
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-[162px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <Button1 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 content-stretch flex grow h-[16px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[#737373] text-[16px] text-center text-nowrap">No</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 bg-white grow h-[56px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[68px] py-[20px] relative size-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-[162px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <Button2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[7.985px] h-[56.375px] items-start pl-0 pr-[-0.018px] py-0 relative shrink-0 w-full" data-name="Container">
      <Frame4 />
      <Frame6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white h-[145px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
          <Paragraph />
          <Container />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[333px]">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[#1a1a1a] text-[14px]">
        <span>{`Have you assessed and explained the suitability of the plan to Girish Mane as per his/her need ? `}</span>
        <span className="text-[#c21b17]">*</span>
      </p>
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 content-stretch flex grow h-[16px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[#737373] text-[16px] text-center text-nowrap">Yes</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 bg-white grow h-[56px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[68px] py-[20px] relative size-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-[162px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <Button3 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 content-stretch flex grow h-[16px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[#737373] text-[16px] text-center text-nowrap">No</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 bg-white grow h-[56px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[68px] py-[20px] relative size-full">
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-[162px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <Button4 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[7.985px] h-[56.375px] items-start pl-0 pr-[-0.018px] py-0 relative shrink-0 w-full" data-name="Container">
      <Frame5 />
      <Frame15 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white h-[145px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
          <Frame10 />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container3 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[333px]">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[#1a1a1a] text-[14px]">
        <span>{`How long have you known Girish Mane ? `}</span>
        <span className="text-[#c21b17]">*</span>
      </p>
    </div>
  );
}

function NumberInput() {
  return (
    <div className="h-[47.321px] relative rounded-[8px] shrink-0 w-[105.097px]" data-name="Number Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] text-nowrap">Years</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function NumberInput1() {
  return (
    <div className="h-[47.321px] relative rounded-[8px] shrink-0 w-[105.097px]" data-name="Number Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] text-nowrap">Months</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function NumberInput2() {
  return (
    <div className="h-[47.321px] relative rounded-[8px] shrink-0 w-[105.097px]" data-name="Number Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] text-nowrap">Days</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[7.985px] h-[47.321px] items-start relative shrink-0 w-full" data-name="Container">
      <NumberInput />
      <NumberInput1 />
      <NumberInput2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
          <Frame18 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container5 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col h-[112px] items-start relative shrink-0 w-full">
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[333px]">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[#1a1a1a] text-[14px]">
        <span>{`Is Girish Mane related to you? `}</span>
        <span className="text-[#c21b17]">*</span>
      </p>
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 content-stretch flex grow h-[16px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[#737373] text-[16px] text-center text-nowrap">Yes</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="basis-0 bg-white grow h-[56px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[68px] py-[20px] relative size-full">
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 w-[162px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <Button5 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="basis-0 content-stretch flex grow h-[16px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[#737373] text-[16px] text-center text-nowrap">No</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="basis-0 bg-white grow h-[56px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[68px] py-[20px] relative size-full">
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-[162px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <Button6 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[7.985px] h-[56.375px] items-start pl-0 pr-[-0.018px] py-0 relative shrink-0 w-full" data-name="Container">
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
          <Frame20 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container7 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col h-[122px] items-start relative shrink-0 w-full">
      <Frame23 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[333px]">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[#1a1a1a] text-[14px]">
        <span>{`Do you find any discrepancy in Age / Income per annum through salary or business or other sources / Occupation / Current and historical health (physical &/or mental) / Habits / Avocational activities / Resident status of Girish Mane vis-à-vis details provided in proposal form? If yes, please, provide details? `}</span>
        <span className="text-[#c21b17]">*</span>
      </p>
    </div>
  );
}

function Text8() {
  return (
    <div className="basis-0 content-stretch flex grow h-[16px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[#737373] text-[16px] text-center text-nowrap">Yes</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="basis-0 bg-white grow h-[56px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[68px] py-[20px] relative size-full">
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 w-[162px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <Button7 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="basis-0 content-stretch flex grow h-[16px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[#737373] text-[16px] text-center text-nowrap">No</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="basis-0 bg-white grow h-[56px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[68px] py-[20px] relative size-full">
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="relative shrink-0 w-[162px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <Button8 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[7.985px] h-[56.375px] items-start pl-0 pr-[-0.018px] py-0 relative shrink-0 w-full" data-name="Container">
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
          <Frame24 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container9 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[333px]">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1a1a1a] text-[14px]">
        <span>{`Is there any risk associated with Girish Mane with respect to his / her occupation / financial / social position that could affect the risk adversely in the insurance proposal? If yes, please. provide details: `}</span>
        <span className="text-[#c21b17]">*</span>
      </p>
    </div>
  );
}

function Text10() {
  return (
    <div className="basis-0 content-stretch flex grow h-[16px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[#737373] text-[16px] text-center text-nowrap">Yes</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="basis-0 bg-white grow h-[56px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[68px] py-[20px] relative size-full">
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 w-[162px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <Button9 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="basis-0 content-stretch flex grow h-[16px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[#737373] text-[16px] text-center text-nowrap">No</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="basis-0 bg-white grow h-[56px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[68px] py-[20px] relative size-full">
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="relative shrink-0 w-[162px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <Button10 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[7.985px] h-[56.375px] items-start pl-0 pr-[-0.018px] py-0 relative shrink-0 w-full" data-name="Container">
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
          <Frame28 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container11 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[333px]">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1a1a1a] text-[14px]">
        <span>{`Were you able to confirm income details through ITR / Form 16 / Pay Slip / Balance Sheet / P&L / Other documents? If yes, please. provide details: `}</span>
        <span className="text-[#c21b17]">*</span>
      </p>
    </div>
  );
}

function Text12() {
  return (
    <div className="basis-0 content-stretch flex grow h-[16px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[#737373] text-[16px] text-center text-nowrap">Yes</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="basis-0 bg-white grow h-[56px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[68px] py-[20px] relative size-full">
          <Text12 />
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative shrink-0 w-[162px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <Button11 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="basis-0 content-stretch flex grow h-[16px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[#737373] text-[16px] text-center text-nowrap">No</p>
    </div>
  );
}

function Button12() {
  return (
    <div className="basis-0 bg-white grow h-[56px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[68px] py-[20px] relative size-full">
          <Text13 />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="relative shrink-0 w-[162px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <Button12 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[7.985px] h-[56.375px] items-start pl-0 pr-[-0.018px] py-0 relative shrink-0 w-full" data-name="Container">
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
          <Frame32 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container13 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[333px]">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1a1a1a] text-[14px]">
        <span>{`I have ensured that all health/lifestyle/financial disclosures have been accurately captured in the application form post extensive discussion with the applicant and that the applicant has been explained the possible consequences of non disclosure. `}</span>
        <span className="text-[#c21b17]">*</span>
      </p>
    </div>
  );
}

function Text14() {
  return (
    <div className="basis-0 content-stretch flex grow h-[16px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[#737373] text-[16px] text-center text-nowrap">Yes</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="basis-0 bg-white grow h-[56px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[68px] py-[20px] relative size-full">
          <Text14 />
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="relative shrink-0 w-[162px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <Button13 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="basis-0 content-stretch flex grow h-[16px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[#737373] text-[16px] text-center text-nowrap">No</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="basis-0 bg-white grow h-[56px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[68px] py-[20px] relative size-full">
          <Text15 />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="relative shrink-0 w-[162px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <Button14 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[7.985px] h-[56.375px] items-start pl-0 pr-[-0.018px] py-0 relative shrink-0 w-full" data-name="Container">
      <Frame37 />
      <Frame38 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
          <Frame36 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container15 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[122px] items-start relative shrink-0 w-full">
      <Frame27 />
      <Frame31 />
      <Frame35 />
      <Frame39 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[1457px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame17 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute content-stretch flex h-[16.523px] items-start left-[93.35px] top-[1.18px] w-[5.459px]" data-name="Text">
      <p className="font-['Arial:Bold',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#c21b17] text-[14px] text-nowrap">*</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[21px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[-0.82px]">Agent Details</p>
      <Text16 />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[18px] relative shrink-0 w-[332px]" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#737373] text-[12px] text-nowrap top-[0.18px]">Channel Partner</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[47.321px] relative rounded-[8px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#263238] text-[14px] text-nowrap">TIED</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[69px] relative shrink-0 w-[332px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Label />
        <TextInput />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[17.999px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#737373] text-[12px] text-nowrap top-[0.18px]">Name and Code of Advisor Name</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="h-[47.321px] relative rounded-[8px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#263238] text-[14px] text-nowrap">MOHD Aadil Khan 70037500</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[69px] relative shrink-0 w-[332px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Label1 />
        <TextInput1 />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[17.999px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#737373] text-[12px] text-nowrap top-[0.18px]">Designation</p>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="h-[47.321px] relative rounded-[8px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#263238] text-[14px] text-nowrap">Standard Advisor</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[69px] relative shrink-0 w-[332px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Label2 />
        <TextInput2 />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[17.999px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#737373] text-[12px] text-nowrap top-[0.18px]">Branch Name</p>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="h-[47.321px] relative rounded-[8px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#263238] text-[14px] text-nowrap">Bhopal - BM UNIT 1_AGENCY</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[69px] relative shrink-0 w-[332px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Label3 />
        <TextInput3 />
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[17.999px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#737373] text-[12px] text-nowrap top-[0.18px]">Date</p>
    </div>
  );
}

function TextInput4() {
  return (
    <div className="h-[47.321px] relative rounded-[8px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#263238] text-[14px] text-nowrap">29 Dec 2025</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[69px] relative shrink-0 w-[332px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Label4 />
        <TextInput4 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute content-stretch flex h-[14.163px] items-start left-[34.28px] top-[1.18px] w-[6.012px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#c21b17] text-[12px] text-nowrap">*</p>
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[17.999px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#737373] text-[12px] text-nowrap top-[0.18px]">Place</p>
      <Text17 />
    </div>
  );
}

function TextInput5() {
  return (
    <div className="h-[47.321px] relative rounded-[8px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] text-nowrap">Enter place</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[69px] relative shrink-0 w-[332px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Label5 />
        <TextInput5 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[475px] items-start relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white h-[543px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
          <Paragraph1 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[32px] top-[173px] w-[365px]">
      <Frame40 />
      <Container23 />
    </div>
  );
}

export default function Scr() {
  return (
    <div className="bg-gradient-to-b from-[#ffe9e7] relative size-full to-[#fffefe]" data-name="SCR">
      <Frame1 />
      <StatusBarIPhone />
      <Frame3 />
      <Button />
      <Frame14 />
    </div>
  );
}