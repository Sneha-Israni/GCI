import svgPaths from "./svg-jqk6c0oc5b";
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
    <div className="h-[39px] relative shrink-0 w-[199.688px]" data-name="TypewriterText">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#263238] text-[16px] top-0 w-[200px]">Just a few declarations to complete your application.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white content-stretch flex h-[71px] items-center justify-center left-[12px] overflow-clip pl-0 pr-[12.313px] py-0 rounded-[16px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.08)] top-0 w-[236px]" data-name="Container">
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
            <path d={svgPaths.p14f5700} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.860107" />
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
    <div className="absolute h-[89px] left-[80px] top-[-2px] w-[268px]" data-name="Content24">
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
    <div className="absolute h-[85px] left-[20px] top-[44px] w-[348px]" data-name="MascotSection24">
      <ImageMascot />
      <Content />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[129px] left-0 top-[20px] w-[388px]" data-name="Frame1315">
      <MascotSection />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[18px] relative shrink-0 w-[5.68px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#c21b17] text-[12px] text-nowrap top-[0.5px]">1</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#fff3f2] content-stretch flex items-center justify-center left-0 pl-0 pr-[0.008px] py-0 rounded-[1.67772e+07px] size-[24px] top-[2px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[40px] left-[36px] top-0 w-[279px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#263238] text-[14px] top-[0.5px] w-[265px]">Receive policy documents electronically via Insurance Repository?</p>
    </div>
  );
}

function DeclarationQuestion() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="DeclarationQuestion">
      <Container3 />
      <Paragraph1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[25.789px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-[13px] not-italic text-[#263238] text-[15px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Yes</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-0 pr-[0.008px] py-0 relative size-full">
          <Container4 />
          <Paragraph2 />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-white grow h-[44px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.5px] pt-[10.75px] px-[0.5px] relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[20.242px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-[10.5px] not-italic text-[#263238] text-[15px] text-center text-nowrap top-[-1px] translate-x-[-50%]">No</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-0 pr-[0.008px] py-0 relative size-full">
          <Container6 />
          <Paragraph3 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-white grow h-[44px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.5px] pt-[10.75px] px-[0.5px] relative size-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function DeclarationQuestion1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[44px] items-start relative shrink-0 w-full" data-name="DeclarationQuestion">
      <Button />
      <Button1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white h-[129px] relative rounded-[16px] shrink-0 w-[348px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pb-[0.5px] pt-[16.5px] px-[16.5px] relative size-full">
        <DeclarationQuestion />
        <DeclarationQuestion1 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[7.367px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#c21b17] text-[12px] text-nowrap top-[0.5px]">2</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[#fff3f2] content-stretch flex items-center justify-center left-0 pl-0 pr-[0.008px] py-0 rounded-[1.67772e+07px] size-[24px] top-[2px]" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[60px] left-[36px] top-0 w-[279px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#263238] text-[14px] top-[0.5px] w-[272px]">Have you been involved in any criminal/civil legal proceedings in India or abroad?</p>
    </div>
  );
}

function DeclarationQuestion2() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="DeclarationQuestion">
      <Container9 />
      <Paragraph5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[25.789px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-[13px] not-italic text-[#263238] text-[15px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Yes</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-0 pr-[0.008px] py-0 relative size-full">
          <Container10 />
          <Paragraph6 />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 bg-white grow h-[44px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.5px] pt-[10.75px] px-[0.5px] relative size-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[20.242px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-[10.5px] not-italic text-[#263238] text-[15px] text-center text-nowrap top-[-1px] translate-x-[-50%]">No</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-0 pr-[0.008px] py-0 relative size-full">
          <Container12 />
          <Paragraph7 />
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 bg-white grow h-[44px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.5px] pt-[10.75px] px-[0.5px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function DeclarationQuestion3() {
  return (
    <div className="content-stretch flex gap-[12px] h-[44px] items-start relative shrink-0 w-full" data-name="DeclarationQuestion">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white h-[149px] relative rounded-[16px] shrink-0 w-[348px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pb-[0.5px] pt-[16.5px] px-[16.5px] relative size-full">
        <DeclarationQuestion2 />
        <DeclarationQuestion3 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[18px] relative shrink-0 w-[7.734px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#c21b17] text-[12px] text-nowrap top-[0.5px]">3</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[#fff3f2] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[24px] top-[2px]" data-name="Container">
      <Paragraph8 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[80px] left-[36px] top-0 w-[279px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#263238] text-[14px] top-[0.5px] w-[216px]">Are you or your family members associated with political parties, politicians, or senior government positions?</p>
    </div>
  );
}

function DeclarationQuestion4() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="DeclarationQuestion">
      <Container15 />
      <Paragraph9 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[25.789px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-[13px] not-italic text-[#263238] text-[15px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Yes</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-0 pr-[0.008px] py-0 relative size-full">
          <Container16 />
          <Paragraph10 />
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 bg-white grow h-[44px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.5px] pt-[10.75px] px-[0.5px] relative size-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[20.242px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-[10.5px] not-italic text-[#263238] text-[15px] text-center text-nowrap top-[-1px] translate-x-[-50%]">No</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-0 pr-[0.008px] py-0 relative size-full">
          <Container18 />
          <Paragraph11 />
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="basis-0 bg-white grow h-[44px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.5px] pt-[10.75px] px-[0.5px] relative size-full">
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function DeclarationQuestion5() {
  return (
    <div className="content-stretch flex gap-[12px] h-[44px] items-start relative shrink-0 w-full" data-name="DeclarationQuestion">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white h-[169px] relative rounded-[16px] shrink-0 w-[348px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pb-[0.5px] pt-[16.5px] px-[16.5px] relative size-full">
        <DeclarationQuestion4 />
        <DeclarationQuestion5 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[18px] relative shrink-0 w-[7.852px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#c21b17] text-[12px] text-nowrap top-[0.5px]">4</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[#fff3f2] content-stretch flex items-center justify-center left-0 pl-0 pr-[0.008px] py-0 rounded-[1.67772e+07px] size-[24px] top-[2px]" data-name="Container">
      <Paragraph12 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[40px] left-[36px] top-0 w-[279px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#263238] text-[14px] top-[0.5px] w-[228px]">Need a physical copy of the policy document?</p>
    </div>
  );
}

function DeclarationQuestion6() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="DeclarationQuestion">
      <Container21 />
      <Paragraph13 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[25.789px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-[13px] not-italic text-[#263238] text-[15px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Yes</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-0 pr-[0.008px] py-0 relative size-full">
          <Container22 />
          <Paragraph14 />
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="basis-0 bg-white grow h-[44px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.5px] pt-[10.75px] px-[0.5px] relative size-full">
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-white relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[20.242px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-[10.5px] not-italic text-[#263238] text-[15px] text-center text-nowrap top-[-1px] translate-x-[-50%]">No</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-0 pr-[0.008px] py-0 relative size-full">
          <Container24 />
          <Paragraph15 />
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="basis-0 bg-white grow h-[44px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.5px] pt-[10.75px] px-[0.5px] relative size-full">
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function DeclarationQuestion7() {
  return (
    <div className="content-stretch flex gap-[12px] h-[44px] items-start relative shrink-0 w-full" data-name="DeclarationQuestion">
      <Button6 />
      <Button7 />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white h-[129px] relative rounded-[16px] shrink-0 w-[348px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pb-[0.5px] pt-[16.5px] px-[16.5px] relative size-full">
        <DeclarationQuestion6 />
        <DeclarationQuestion7 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[18px] relative shrink-0 w-[7.445px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#c21b17] text-[12px] text-nowrap top-[0.5px]">5</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[#fff3f2] content-stretch flex items-center justify-center left-0 pl-0 pr-[0.008px] py-0 rounded-[1.67772e+07px] size-[24px] top-[2px]" data-name="Container">
      <Paragraph16 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[60px] left-[36px] top-0 w-[279px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#263238] text-[14px] top-[0.5px] w-[266px]">Do you have any pending, existing, or previously declined life/health insurance proposals or policies?</p>
    </div>
  );
}

function DeclarationQuestion8() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="DeclarationQuestion">
      <Container27 />
      <Paragraph17 />
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-white relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[25.789px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-[13px] not-italic text-[#263238] text-[15px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Yes</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-0 pr-[0.008px] py-0 relative size-full">
          <Container28 />
          <Paragraph18 />
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="basis-0 bg-white grow h-[44px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.5px] pt-[10.75px] px-[0.5px] relative size-full">
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-white relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[20.242px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-[10.5px] not-italic text-[#263238] text-[15px] text-center text-nowrap top-[-1px] translate-x-[-50%]">No</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-0 pr-[0.008px] py-0 relative size-full">
          <Container30 />
          <Paragraph19 />
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="basis-0 bg-white grow h-[44px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.5px] pt-[10.75px] px-[0.5px] relative size-full">
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function DeclarationQuestion9() {
  return (
    <div className="content-stretch flex gap-[12px] h-[44px] items-start relative shrink-0 w-full" data-name="DeclarationQuestion">
      <Button8 />
      <Button9 />
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-white h-[149px] relative rounded-[16px] shrink-0 w-[348px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pb-[0.5px] pt-[16.5px] px-[16.5px] relative size-full">
        <DeclarationQuestion8 />
        <DeclarationQuestion9 />
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[18px] relative shrink-0 w-[7.633px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#c21b17] text-[12px] text-nowrap top-[0.5px]">6</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-[#fff3f2] content-stretch flex items-center justify-center left-0 pl-0 pr-[0.008px] py-0 rounded-[1.67772e+07px] size-[24px] top-[2px]" data-name="Container">
      <Paragraph20 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[40px] left-[36px] top-0 w-[279px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#263238] text-[14px] top-[0.5px] w-[239px]">FATCA: Are you a tax resident in any jurisdiction outside India?</p>
    </div>
  );
}

function DeclarationQuestion10() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="DeclarationQuestion">
      <Container33 />
      <Paragraph21 />
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-white relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[25.789px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-[13px] not-italic text-[#263238] text-[15px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Yes</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-0 pr-[0.008px] py-0 relative size-full">
          <Container34 />
          <Paragraph22 />
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="basis-0 bg-white grow h-[44px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.5px] pt-[10.75px] px-[0.5px] relative size-full">
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-white relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[20.242px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-[10.5px] not-italic text-[#263238] text-[15px] text-center text-nowrap top-[-1px] translate-x-[-50%]">No</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-0 pr-[0.008px] py-0 relative size-full">
          <Container36 />
          <Paragraph23 />
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="basis-0 bg-white grow h-[44px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.5px] pt-[10.75px] px-[0.5px] relative size-full">
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function DeclarationQuestion11() {
  return (
    <div className="content-stretch flex gap-[12px] h-[44px] items-start relative shrink-0 w-full" data-name="DeclarationQuestion">
      <Button10 />
      <Button11 />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-white h-[129px] relative rounded-[16px] shrink-0 w-[348px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pb-[0.5px] pt-[16.5px] px-[16.5px] relative size-full">
        <DeclarationQuestion10 />
        <DeclarationQuestion11 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[954px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container14 />
      <Container20 />
      <Container26 />
      <Container32 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[805px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-0 relative size-full">
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col h-[805px] items-start left-0 overflow-clip top-[165px] w-[388px]" data-name="Container">
      <Container40 />
    </div>
  );
}

export default function StepTwentyFour() {
  return (
    <div className="overflow-clip relative rounded-[48px] size-full" data-name="StepTwentyFour" style={{ backgroundImage: "linear-gradient(rgb(255, 233, 231) 0%, rgb(255, 254, 254) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Frame />
      <Container41 />
    </div>
  );
}