import svgPaths from "./svg-fbdeu0k9my";
import imgImageMascot from "figma:asset/9b8882faf2edb23d4f87beff823e8af6f285c81a.png";

function ImageMascot() {
  return (
    <div className="absolute left-0 size-[80px] top-[2.5px]" data-name="Image (Mascot)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageMascot} />
    </div>
  );
}

function TypewriterText() {
  return (
    <div className="h-[39px] relative shrink-0 w-[210.938px]" data-name="TypewriterText">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#536b76] text-[16px] top-0 w-[211px]">{`Let's Calculate the Premium now`}</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white content-stretch flex h-[71px] items-center justify-center left-[12px] overflow-clip pl-0 pr-[1.063px] py-0 rounded-[16px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.08)] top-0 w-[236px]" data-name="Container">
      <TypewriterText />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[11.718px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[3.57%_3.38%_8.93%_3.34%]" data-name="Vector">
        <div className="absolute inset-[-4.19%_-3.51%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12">
            <path d={svgPaths.p14f5700} data-figma-bg-blur-radius="27.8675" fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.860107" />
            <defs>
              <clipPath id="bgblur_0_39_2829_clip_path" transform="translate(27.8675 27.8675)">
                <path d={svgPaths.p14f5700} />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pl-[0.992px] pr-[4.75px] pt-[2px] relative size-[19px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute h-[89px] left-[80px] top-[-2px] w-[268px]" data-name="Content7">
      <Container />
      <div className="absolute flex items-center justify-center left-0 size-[19px] top-[7px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function MascotSection() {
  return (
    <div className="absolute h-[85px] left-[20px] top-[48px] w-[348px]" data-name="MascotSection7">
      <ImageMascot />
      <Content />
    </div>
  );
}

function FormSection() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-0 w-[348px]" data-name="FormSection">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[14px]">Policy Term</p>
    </div>
  );
}

function Container3() {
  return <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[999px] top-0 w-[60px]" data-name="Container" />;
}

function Paragraph() {
  return (
    <div className="absolute h-[18px] left-[23.56px] top-[7px] w-[12.875px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[6.5px] not-italic text-[#263238] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">15</p>
    </div>
  );
}

function PillButton() {
  return (
    <div className="absolute bg-white h-[32px] left-0 rounded-[999px] top-0 w-[60px]" data-name="PillButton">
      <Container3 />
      <Paragraph />
    </div>
  );
}

function Container4() {
  return <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[999px] top-0 w-[60px]" data-name="Container" />;
}

function Paragraph1() {
  return (
    <div className="absolute h-[18px] left-[22.62px] top-[7px] w-[14.766px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[7.5px] not-italic text-[#263238] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">20</p>
    </div>
  );
}

function PillButton1() {
  return (
    <div className="absolute bg-white h-[32px] left-[72px] rounded-[999px] top-0 w-[60px]" data-name="PillButton">
      <Container4 />
      <Paragraph1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <PillButton />
      <PillButton1 />
    </div>
  );
}

function FormSection1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-0 overflow-clip pl-0 pr-[20px] py-0 top-[29px] w-[348px]" data-name="FormSection">
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[61px] left-[20px] top-0 w-[348px]" data-name="Container">
      <FormSection />
      <FormSection1 />
    </div>
  );
}

function FormSection2() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-0 w-[348px]" data-name="FormSection">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[14px]">Premium Policy Term</p>
    </div>
  );
}

function Container7() {
  return <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[999px] top-0 w-[60px]" data-name="Container" />;
}

function Paragraph2() {
  return (
    <div className="absolute h-[18px] left-[23.56px] top-[7px] w-[12.875px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[6.5px] not-italic text-[#263238] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">15</p>
    </div>
  );
}

function PillButton2() {
  return (
    <div className="absolute bg-white h-[32px] left-0 rounded-[999px] top-0 w-[60px]" data-name="PillButton">
      <Container7 />
      <Paragraph2 />
    </div>
  );
}

function Container8() {
  return <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[999px] top-0 w-[60px]" data-name="Container" />;
}

function Paragraph3() {
  return (
    <div className="absolute h-[18px] left-[22.62px] top-[7px] w-[14.766px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[7.5px] not-italic text-[#263238] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">20</p>
    </div>
  );
}

function PillButton3() {
  return (
    <div className="absolute bg-white h-[32px] left-[72px] rounded-[999px] top-0 w-[60px]" data-name="PillButton">
      <Container8 />
      <Paragraph3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <PillButton2 />
      <PillButton3 />
    </div>
  );
}

function FormSection3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-0 overflow-clip pl-0 pr-[20px] py-0 top-[29px] w-[348px]" data-name="FormSection">
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[61px] left-[20px] top-[85px] w-[348px]" data-name="Container">
      <FormSection2 />
      <FormSection3 />
    </div>
  );
}

function FormSection4() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-0 w-[348px]" data-name="FormSection">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[14px]">Premium Frequency</p>
    </div>
  );
}

function Container11() {
  return <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[999px] top-0 w-[60.813px]" data-name="Container" />;
}

function Paragraph4() {
  return (
    <div className="absolute h-[18px] left-[13px] top-[7px] w-[34.813px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[17.5px] not-italic text-[#263238] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">Yearly</p>
    </div>
  );
}

function PillButton4() {
  return (
    <div className="absolute bg-white h-[32px] left-0 rounded-[999px] top-0 w-[60.813px]" data-name="PillButton">
      <Container11 />
      <Paragraph4 />
    </div>
  );
}

function Container12() {
  return <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[999px] top-0 w-[87.859px]" data-name="Container" />;
}

function Paragraph5() {
  return (
    <div className="absolute h-[18px] left-[13px] top-[7px] w-[61.859px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[31px] not-italic text-[#263238] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">Half-Yearly</p>
    </div>
  );
}

function PillButton5() {
  return (
    <div className="absolute bg-white h-[32px] left-[72.81px] rounded-[999px] top-0 w-[87.859px]" data-name="PillButton">
      <Container12 />
      <Paragraph5 />
    </div>
  );
}

function Container13() {
  return <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[999px] top-0 w-[67.234px]" data-name="Container" />;
}

function Paragraph6() {
  return (
    <div className="absolute h-[18px] left-[13px] top-[7px] w-[41.234px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[21px] not-italic text-[#263238] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">Quatrly</p>
    </div>
  );
}

function PillButton6() {
  return (
    <div className="absolute bg-white h-[32px] left-[172.67px] rounded-[999px] top-0 w-[67.234px]" data-name="PillButton">
      <Container13 />
      <Paragraph6 />
    </div>
  );
}

function Container14() {
  return <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[999px] top-0 w-[71.977px]" data-name="Container" />;
}

function Paragraph7() {
  return (
    <div className="absolute h-[18px] left-[13px] top-[7px] w-[45.977px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[23px] not-italic text-[#263238] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">Monthly</p>
    </div>
  );
}

function PillButton7() {
  return (
    <div className="absolute bg-white h-[32px] left-[251.91px] rounded-[999px] top-0 w-[71.977px]" data-name="PillButton">
      <Container14 />
      <Paragraph7 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <PillButton4 />
      <PillButton5 />
      <PillButton6 />
      <PillButton7 />
    </div>
  );
}

function FormSection5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-0 overflow-clip pl-0 pr-[20px] py-0 top-[29px] w-[348px]" data-name="FormSection">
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[61px] left-[20px] top-[170px] w-[348px]" data-name="Container">
      <FormSection4 />
      <FormSection5 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[231px] left-0 top-0 w-[388px]" data-name="Container">
      <Container6 />
      <Container10 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[29px] left-[37px] top-[11px] w-[298px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#455a64] text-[12px] top-0 w-[279px]">90% of the Users pick Yearly Premium Frequency for Discounts</p>
    </div>
  );
}

function Container19() {
  return <div className="absolute border-[#ffe5b4] border-[0.5px] border-solid h-[51px] left-0 rounded-[12px] top-0 w-[348px]" data-name="Container" />;
}

function Icon1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_8.33%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p35906780} id="Vector" stroke="var(--stroke-0, #FFA726)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_16.66%_70.83%_83.34%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666665 0.666665V3.33333" id="Vector" stroke="var(--stroke-0, #FFA726)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[79.17%] left-3/4 right-[8.33%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 2">
            <path d="M3.33337 0.666665H0.666665" id="Vector" stroke="var(--stroke-0, #FFA726)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_83.34%_20.83%_16.66%]" data-name="Vector">
        <div className="absolute inset-[-50%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
            <path d="M0.666665 0.666665V2.00007" id="Vector" stroke="var(--stroke-0, #FFA726)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[12.5%] right-[79.17%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.67px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
            <path d="M1.99999 0.666665H0.666665" id="Vector" stroke="var(--stroke-0, #FFA726)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[13px] size-[16px] top-[11px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-gradient-to-b from-[#fff9e6] h-[51px] relative rounded-[12px] shrink-0 to-[#ffffff] w-full" data-name="Container">
      <Container18 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function InfoBanner() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52px] items-start left-0 overflow-clip px-[20px] py-0 top-[255px] w-[388px]" data-name="InfoBanner">
      <Container21 />
    </div>
  );
}

function FormSection6() {
  return (
    <div className="absolute h-[51px] left-0 top-0 w-[348px]" data-name="FormSection">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-0 not-italic text-[#263238] text-[14px] top-0 w-[348px]">{`Are you an employee of Company & Promoter Group companies including their Subsidiaries and Associates ?`}</p>
    </div>
  );
}

function Container22() {
  return <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[999px] top-0 w-[60px]" data-name="Container" />;
}

function Paragraph8() {
  return (
    <div className="absolute h-[18px] left-[14.89px] top-[7px] w-[30.211px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[15.5px] not-italic text-[#263238] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">None</p>
    </div>
  );
}

function PillButton8() {
  return (
    <div className="absolute bg-white h-[32px] left-0 rounded-[999px] top-0 w-[60px]" data-name="PillButton">
      <Container22 />
      <Paragraph8 />
    </div>
  );
}

function Container23() {
  return <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[999px] top-0 w-[60px]" data-name="Container" />;
}

function Paragraph9() {
  return (
    <div className="absolute h-[18px] left-[16.27px] top-[7px] w-[27.445px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[14px] not-italic text-[#263238] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">Staff</p>
    </div>
  );
}

function PillButton9() {
  return (
    <div className="absolute bg-white h-[32px] left-[72px] rounded-[999px] top-0 w-[60px]" data-name="PillButton">
      <Container23 />
      <Paragraph9 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <PillButton8 />
      <PillButton9 />
    </div>
  );
}

function FormSection7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-0 overflow-clip pl-0 pr-[20px] py-0 top-[63px] w-[348px]" data-name="FormSection">
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[95px] left-[20px] top-0 w-[348px]" data-name="Container">
      <FormSection6 />
      <FormSection7 />
    </div>
  );
}

function FormSection8() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-0 w-[348px]" data-name="FormSection">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[14px]">Product Option</p>
    </div>
  );
}

function Container26() {
  return <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[999px] top-0 w-[60px]" data-name="Container" />;
}

function Paragraph10() {
  return (
    <div className="absolute h-[18px] left-[27.21px] top-[7px] w-[5.578px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[3px] not-italic text-[#263238] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">1</p>
    </div>
  );
}

function PillButton10() {
  return (
    <div className="absolute bg-white h-[32px] left-0 rounded-[999px] top-0 w-[60px]" data-name="PillButton">
      <Container26 />
      <Paragraph10 />
    </div>
  );
}

function Container27() {
  return <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[999px] top-0 w-[60px]" data-name="Container" />;
}

function Paragraph11() {
  return (
    <div className="absolute h-[18px] left-[26.37px] top-[7px] w-[7.266px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[4px] not-italic text-[#263238] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">2</p>
    </div>
  );
}

function PillButton11() {
  return (
    <div className="absolute bg-white h-[32px] left-[72px] rounded-[999px] top-0 w-[60px]" data-name="PillButton">
      <Container27 />
      <Paragraph11 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <PillButton10 />
      <PillButton11 />
    </div>
  );
}

function FormSection9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-0 overflow-clip pl-0 pr-[20px] py-0 top-[29px] w-[348px]" data-name="FormSection">
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[61px] left-[20px] top-[119px] w-[348px]" data-name="Container">
      <FormSection8 />
      <FormSection9 />
    </div>
  );
}

function FormSection10() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-0 w-[348px]" data-name="FormSection">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[14px]">Product Category</p>
    </div>
  );
}

function Container30() {
  return <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[999px] top-0 w-[60px]" data-name="Container" />;
}

function Paragraph12() {
  return (
    <div className="absolute h-[18px] left-[16.81px] top-[7px] w-[26.375px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[13.5px] not-italic text-[#263238] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">Gold</p>
    </div>
  );
}

function PillButton12() {
  return (
    <div className="absolute bg-white h-[32px] left-0 rounded-[999px] top-0 w-[60px]" data-name="PillButton">
      <Container30 />
      <Paragraph12 />
    </div>
  );
}

function Container31() {
  return <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[999px] top-0 w-[60px]" data-name="Container" />;
}

function Paragraph13() {
  return (
    <div className="absolute h-[18px] left-[14.38px] top-[7px] w-[31.25px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[16px] not-italic text-[#263238] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">Silver</p>
    </div>
  );
}

function PillButton13() {
  return (
    <div className="absolute bg-white h-[32px] left-[72px] rounded-[999px] top-0 w-[60px]" data-name="PillButton">
      <Container31 />
      <Paragraph13 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <PillButton12 />
      <PillButton13 />
    </div>
  );
}

function FormSection11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-0 overflow-clip pl-0 pr-[20px] py-0 top-[29px] w-[348px]" data-name="FormSection">
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[61px] left-[20px] top-[204px] w-[348px]" data-name="Container">
      <FormSection10 />
      <FormSection11 />
    </div>
  );
}

function FormSection12() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-0 w-[348px]" data-name="FormSection">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#263238] text-[14px]">Death Benefit Multiple</p>
    </div>
  );
}

function Container34() {
  return <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[999px] top-0 w-[60px]" data-name="Container" />;
}

function Paragraph14() {
  return (
    <div className="absolute h-[18px] left-[26.35px] top-[7px] w-[7.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[4px] not-italic text-[#263238] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">5</p>
    </div>
  );
}

function PillButton14() {
  return (
    <div className="absolute bg-white h-[32px] left-0 rounded-[999px] top-0 w-[60px]" data-name="PillButton">
      <Container34 />
      <Paragraph14 />
    </div>
  );
}

function Container35() {
  return <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[999px] top-0 w-[60px]" data-name="Container" />;
}

function Paragraph15() {
  return (
    <div className="absolute h-[18px] left-[26.57px] top-[7px] w-[6.859px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[3.5px] not-italic text-[#263238] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">7</p>
    </div>
  );
}

function PillButton15() {
  return (
    <div className="absolute bg-white h-[32px] left-[72px] rounded-[999px] top-0 w-[60px]" data-name="PillButton">
      <Container35 />
      <Paragraph15 />
    </div>
  );
}

function Container36() {
  return <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[999px] top-0 w-[60px]" data-name="Container" />;
}

function Paragraph16() {
  return (
    <div className="absolute h-[18px] left-[23.46px] top-[7px] w-[13.078px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[7px] not-italic text-[#263238] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">10</p>
    </div>
  );
}

function PillButton16() {
  return (
    <div className="absolute bg-white h-[32px] left-[144px] rounded-[999px] top-0 w-[60px]" data-name="PillButton">
      <Container36 />
      <Paragraph16 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <PillButton14 />
      <PillButton15 />
      <PillButton16 />
    </div>
  );
}

function FormSection13() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-0 overflow-clip pl-0 pr-[20px] py-0 top-[29px] w-[348px]" data-name="FormSection">
      <Container37 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[61px] left-[20px] top-[289px] w-[348px]" data-name="Container">
      <FormSection12 />
      <FormSection13 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[350px] left-0 top-[331px] w-[388px]" data-name="Container">
      <Container25 />
      <Container29 />
      <Container33 />
      <Container38 />
    </div>
  );
}

function FormsScrollArea() {
  return (
    <div className="absolute h-[674px] left-0 overflow-clip top-[157px] w-[388px]" data-name="FormsScrollArea">
      <Container17 />
      <InfoBanner />
      <Container39 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute h-[877px] left-0 overflow-clip top-[25px] w-[388px]" data-name="MainContent6">
      <MascotSection />
      <FormsScrollArea />
    </div>
  );
}

function DynamicIslandSpacer() {
  return <div className="absolute h-[10px] left-[132px] top-[6px] w-[124px]" data-name="DynamicIslandSpacer7" />;
}

function Time() {
  return (
    <div className="absolute h-[22px] left-[52.77px] top-0 w-[36.461px]" data-name="Time7">
      <p className="absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] left-[18.5px] text-[17px] text-black text-center text-nowrap top-0 translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[12.219px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_4%_5.95%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 12">
          <path clipRule="evenodd" d={svgPaths.p3d32cf80} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12.219px] items-start left-[22.17px] top-[0.39px] w-[19.195px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[12.32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_4.77%_5.17%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
          <path clipRule="evenodd" d={svgPaths.p8c15f80} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12.32px] items-start left-[48.37px] top-[0.34px] w-[17.141px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[3.85%_2.4%_3.85%_1.79%]" data-name="Group">
      <div className="absolute inset-[3.85%_12.5%_3.85%_1.79%]" data-name="Vector">
        <div className="absolute inset-[-4.12%_-2.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 13">
            <path d={svgPaths.p215be180} id="Vector" opacity="0.35" stroke="var(--stroke-0, black)" strokeWidth="0.987788" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[36.78%_2.4%_31.87%_92.86%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
          <path d={svgPaths.p1ced1080} fill="var(--fill-0, black)" id="Vector" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute inset-[15.38%_17.86%_15.38%_7.14%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 9">
          <path d={svgPaths.p1245ba00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[13px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute content-stretch flex flex-col h-[13px] items-start left-[72.51px] top-0 w-[27.32px]" data-name="Battery7">
      <Icon4 />
    </div>
  );
}

function Levels() {
  return (
    <div className="absolute h-[13px] left-[256px] top-[4.5px] w-[132px]" data-name="Levels7">
      <Container40 />
      <Container41 />
      <Battery />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[22px] left-0 top-[21px] w-[388px]" data-name="Frame11">
      <DynamicIslandSpacer />
      <Time />
      <Levels />
    </div>
  );
}

export default function StepSeven() {
  return (
    <div className="overflow-clip relative rounded-[48px] size-full" data-name="StepSeven" style={{ backgroundImage: "linear-gradient(rgb(255, 233, 231) 0%, rgb(255, 254, 254) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <MainContent />
      <Frame />
    </div>
  );
}