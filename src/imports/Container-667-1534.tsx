function Paragraph() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#666] text-[14px] top-[0.4px]">Edit Share Percentages</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-black top-[-0.4px]">Father</p>
      </div>
    </div>
  );
}

function NumberInput() {
  return (
    <div className="h-[38.6px] relative rounded-[10px] shrink-0 w-[64px]" data-name="Number Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center">50</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(194,27,23,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[21px] relative shrink-0 w-[11.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#666] text-[14px] top-[-0.4px]">%</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[38.6px] relative shrink-0 w-[83.6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <NumberInput />
        <Text />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[38.6px] relative shrink-0 w-[299.2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Paragraph1 />
        <Container3 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-black top-[-0.4px]">Mother</p>
      </div>
    </div>
  );
}

function NumberInput1() {
  return (
    <div className="h-[38.6px] relative rounded-[10px] shrink-0 w-[64px]" data-name="Number Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center">50</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(194,27,23,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[11.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#666] text-[14px] top-[-0.4px]">%</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[38.6px] relative shrink-0 w-[83.6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <NumberInput1 />
        <Text1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[38.6px] relative shrink-0 w-[299.2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Paragraph2 />
        <Container5 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[89.2px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container4 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[32.413px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black top-[0.4px]">Total</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40.938px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#016828] text-[16px] top-[0.2px]">100%</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[40.8px] items-center justify-between pt-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(194,27,23,0.2)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#c21b17] h-[45px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arial:Bold',sans-serif] leading-[21px] left-[149.98px] not-italic text-[14px] text-center text-white top-[12.4px]">Confirm Shares</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start pb-[0.8px] pt-[16.8px] px-[16.8px] relative rounded-[16px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(194,27,23,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Paragraph />
      <Container1 />
      <Container6 />
      <Button />
    </div>
  );
}