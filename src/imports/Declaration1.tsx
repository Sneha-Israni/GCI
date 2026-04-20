import svgPaths from "./svg-9gzgogqugl";
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
    <div className="absolute bottom-0 content-stretch flex flex-col h-[104px] items-start left-1/2 translate-x-[-50%] w-[428px]">
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
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#191818] text-[16px] w-[298px]">Please review and acknowledge the following declarations</p>
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

function Paragraph() {
  return (
    <div className="h-[16.487px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#737373] text-[11px] text-nowrap top-[0.18px]">Application No.</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24.011px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1a1a1a] text-[16px] text-nowrap top-[-0.64px]">L10007864</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[1.992px] h-[69px] items-start left-[calc(50%+0.5px)] px-[16px] py-[12px] rounded-[12px] top-[173px] translate-x-[-50%] w-[365px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.04)]" />
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[26.998px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#1a1a1a] text-[18px] text-nowrap top-[-0.64px]">Declaration</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[22.48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[22.5px] left-0 not-italic text-[#1a1a1a] text-[15px] text-nowrap top-[0.36px]">Know what you are buying</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[40.018px] relative shrink-0 w-[9.294px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#737373] text-[13px] text-nowrap top-[0.18px]">1.</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[40.018px] relative shrink-0 w-[313.964px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[13px] top-[-0.82px] w-[299px]">I understand that this is a Life insurance/Pension product.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[40.018px] relative shrink-0 w-[331.244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.985px] items-start relative size-full">
        <Text />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[60.027px] relative shrink-0 w-[11.655px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#737373] text-[13px] text-nowrap top-[0.18px]">2.</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[60.027px] relative shrink-0 w-[311.604px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[13px] top-[-0.82px] w-[272px]">I understand that General Central Insurance Company Limited will issue the policy post a verification call only.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[60.027px] relative shrink-0 w-[331.244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.985px] items-start relative size-full">
        <Text1 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[80.035px] relative shrink-0 w-[11.766px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#737373] text-[13px] text-nowrap top-[0.18px]">3.</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[80.035px] relative shrink-0 w-[311.493px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[13px] top-[-0.82px] w-[308px]">I understand that I will not receive any gift, cash, travel/gift vouchers, gold coin or any other benefit apart from what is stated in product brochure for purchasing this product.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[80.035px] relative shrink-0 w-[331.244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.985px] items-start relative size-full">
        <Text2 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20.009px] relative shrink-0 w-[11.839px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#737373] text-[13px] text-nowrap top-[0.18px]">4.</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20.009px] relative shrink-0 w-[303.213px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[13px] text-nowrap top-[-0.82px]">I understand that this is a Regular premium policy</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[20.009px] relative shrink-0 w-[331.244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.985px] items-start relative size-full">
        <Text3 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[40.018px] relative shrink-0 w-[11.415px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#737373] text-[13px] text-nowrap top-[0.18px]">5.</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[40.018px] relative shrink-0 w-[311.843px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[13px] top-[-0.82px] w-[301px]">I understand that it is not a Fixed deposit, loan or Government bond.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[40.018px] relative shrink-0 w-[331.244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.985px] items-start relative size-full">
        <Text4 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20.009px] relative shrink-0 w-[11.526px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#737373] text-[13px] text-nowrap top-[0.18px]">6.</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20.009px] relative shrink-0 w-[253.827px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[13px] text-nowrap top-[-0.82px]">I understand that this is a Traditional plan</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20.009px] relative shrink-0 w-[331.244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.985px] items-start relative size-full">
        <Text5 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[9.995px] h-[310.091px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[11.987px] h-[344.558px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return <div className="bg-[#e5e5e5] h-[0.996px] shrink-0 w-full" data-name="Container" />;
}

function Paragraph10() {
  return (
    <div className="h-[22.48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[22.5px] left-0 not-italic text-[#1a1a1a] text-[15px] text-nowrap top-[0.36px]">General declaration</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[629.957px] relative shrink-0 w-[8.575px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#737373] text-[12px] text-nowrap top-[0.18px]">1.</p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[629.957px] relative shrink-0 w-[290.71px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#1a1a1a] text-[12px] top-[0.18px] w-[291px]">I / We declare that I / We will notify in writing any change in information pertaining to the Person to be insured / proposer as provided in the proposal form immediately on occurrence of such change prior to commencement of risk or issuance of policy whichever is earlier. I/We authorize Company to contact me/us via phone, SMS, email or any other digital medium for information on this proposal or the resulting policy. I/We authorize the collection, receipt, storage, use and disclosure of any information in the proposal form and to the attached documents required by the medical examiner, if any. I/We further declare that I/We have not withheld any information from the medical examiner and have not misstated any information. I/We authorize Company to issue me/us a policy in respect of risks proposed. I/We hereby authorize my/our past and present employer/ business associates/medical practitioner /hospital any medical source/any Life insurance company to release to General Central Insurance Company Limited, or any investigator appointed by it, any and all relevant information concerning any of the persons proposed to be covered in this proposal as and when required. I/We agree to seek endorsement for increase in risk to lives or to property either in the existing policy or in respect of insurance in respect of any kind of risk relating to lives or property in India, any years of the whole or part of the commission payable or any rebate of the premium shown on the policy, nor shall any rebate in respect of a continuing policy accept any rebate, except such rebate as may be allowed in accordance with the published prospectuses or tables of the insurer.</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[629.957px] relative shrink-0 w-[307.27px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.985px] items-start relative size-full">
        <Text6 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[53.996px] relative shrink-0 w-[10.751px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#737373] text-[12px] text-nowrap top-[0.18px]">2.</p>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[53.996px] relative shrink-0 w-[288.534px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#1a1a1a] text-[12px] top-[0.18px] w-[276px]">Any person making default in complying with the provisions of this section shall be liable for a penalty which may extend to ten lakh rupees.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[53.996px] relative shrink-0 w-[307.27px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.985px] items-start relative size-full">
        <Text7 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#f7f7f7] h-[719.914px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[11.987px] items-start pb-0 pl-[11.987px] pr-0 pt-[11.987px] relative size-full">
          <Container10 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[11.987px] h-[754.381px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph10 />
      <Container12 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[22.48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[22.5px] left-0 not-italic text-[#1a1a1a] text-[15px] text-nowrap top-[0.36px]">Fraud and misrepresentation</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[125.991px] relative shrink-0 w-[8.575px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#737373] text-[12px] text-nowrap top-[0.18px]">1.</p>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[125.991px] relative shrink-0 w-[290.71px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#1a1a1a] text-[12px] top-[0.18px] w-[285px]">No Policy of Life Insurance shall be called in question on any ground whatsoever after the expiry of 3 years from the date of the policy i.e. from the date of issuance of the policy or the date of commencement of risk or the date of revival of the policy or the date of the rider to the policy, whichever is later</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[125.991px] relative shrink-0 w-[307.27px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.985px] items-start relative size-full">
        <Text8 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[143.99px] relative shrink-0 w-[10.751px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#737373] text-[12px] text-nowrap top-[0.18px]">2.</p>
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[143.99px] relative shrink-0 w-[288.534px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#1a1a1a] text-[12px] top-[0.18px] w-[287px]">A policy of Life Insurance may be called in question at any time within 3 years from the date of issuance of the policy or the date of commencement of risk or the date of revival of the policy or the date of the rider to the policy, whichever is later, on the ground of fraud. For further information, Section 45 of the Insurance laws (Amendment) Act, 2015 may be referred.</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[143.99px] relative shrink-0 w-[307.27px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.985px] items-start relative size-full">
        <Text9 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#f7f7f7] h-[305.942px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[11.987px] items-start pb-0 pl-[11.987px] pr-0 pt-[11.987px] relative size-full">
          <Container14 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Checkbox() {
  return <div className="shrink-0 size-[17.999px]" data-name="Checkbox" />;
}

function Text10() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19px] not-italic relative shrink-0 text-[#1a1a1a] text-[13px] w-[259px]">I have understood and agree to the above mentioned terms and conditions of the Proposal Form</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[57px] items-start relative shrink-0 w-[282px]" data-name="Label">
      <Checkbox />
      <Text10 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[306px]">
      <Container17 />
      <Label />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#f7faff] h-[84px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[11.987px] h-[435.714px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph13 />
      <Container16 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] h-[1678px] items-start left-[calc(50%+0.5px)] p-[16px] rounded-[16px] top-[266px] translate-x-[-50%] w-[365px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]" />
      <Paragraph2 />
      <Container8 />
      <Container9 />
      <Container13 />
      <Container9 />
      <Container19 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[17.999px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9988 17.9988">
        <g clipPath="url(#clip0_112_596)" id="Icon">
          <path d={svgPaths.p1c150280} id="Vector" stroke="var(--stroke-0, #8A6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4999" />
          <path d="M8.9994 11.9992V8.9994" id="Vector_2" stroke="var(--stroke-0, #8A6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4999" />
          <path d="M8.9994 5.9996H9.0069" id="Vector_3" stroke="var(--stroke-0, #8A6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4999" />
        </g>
        <defs>
          <clipPath id="clip0_112_596">
            <rect fill="white" height="17.9988" width="17.9988" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[53.996px] relative shrink-0 w-[313.263px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#8a6600] text-[12px] top-[0.18px] w-[299px]">Please ensure you have read and understood all declarations before proceeding. These are important legal agreements.</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[7.985px] h-[53.996px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon />
      <Paragraph16 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[#fff9e6] content-stretch flex flex-col h-[80px] items-start left-[calc(50%+0.5px)] p-[16px] rounded-[12px] top-[1964px] translate-x-[-50%] w-[365px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container21 />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute content-stretch flex h-[16.523px] items-start left-[40.48px] top-[1.18px] w-[5.459px]" data-name="Text">
      <p className="font-['Arial:Bold',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#c21b17] text-[14px] text-nowrap">*</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[20.986px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[-0.82px]">Place</p>
      <Text11 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[47.321px] relative rounded-[8px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] text-nowrap">Enter city/place name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col gap-[7.985px] h-[76.292px] items-start relative shrink-0 w-full" data-name="Label">
      <Paragraph17 />
      <TextInput />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[111px] items-start left-1/2 p-[16px] rounded-[12px] top-[2068px] translate-x-[-50%] w-[366px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]" />
      <Label1 />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute h-[24px] left-[78px] top-[16px] w-[234px]" data-name="Text">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-[116px] not-italic text-[#a3a3a3] text-[16px] text-center text-nowrap top-[-0.64px] translate-x-[-50%]">Submit Details</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#e5e5e5] h-[56px] left-1/2 rounded-[12px] shadow-[0px_4px_12px_0px_rgba(194,27,23,0.25)] top-[2206px] translate-x-[-50%] w-[388px]" data-name="Button">
      <Text12 />
    </div>
  );
}

export default function Declaration() {
  return (
    <div className="bg-gradient-to-b from-[#ffe9e7] relative size-full to-[#fffefe]" data-name="Declaration/1">
      <Frame1 />
      <StatusBarIPhone />
      <Frame3 />
      <Container />
      <Container20 />
      <Container22 />
      <Container23 />
      <Button />
    </div>
  );
}