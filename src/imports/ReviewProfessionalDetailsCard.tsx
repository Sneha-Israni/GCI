function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-[153.225px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#263238] text-[16px] top-[-0.6px]">Professional Details</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[21px] relative shrink-0 w-[25.9px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[13px] not-italic text-[#c21b17] text-[14px] text-center top-[-0.4px]">Edit</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Heading />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[19.5px] left-0 top-0 w-[150.4px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#666] text-[13px] top-[0.6px]">Industry</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[19.5px] left-[150.4px] top-0 w-[150.4px]" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[150.71px] not-italic text-[#263238] text-[13px] text-right top-[0.6px]">Financial Services</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[19.5px] left-0 top-0 w-[150.4px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#666] text-[13px] top-[0.6px]">Job Duties</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[113px] left-[150px] top-0 w-[151px]" data-name="Paragraph">
      <div className="-translate-x-full absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[151px] not-italic text-[#263238] text-[13px] text-right top-px w-[191px] whitespace-pre-wrap">
        <p className="mb-0">Provide investment advisory services</p>
        <p>{`Portfolio management & risk assessment`}</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[97.5px] relative shrink-0 w-full" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[19.5px] left-0 top-0 w-[150.4px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#666] text-[13px] top-[0.6px]">Hazardous Environment</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[19.5px] left-[150.4px] top-0 w-[150.4px]" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[150.85px] not-italic text-[#263238] text-[13px] text-right top-[0.6px]">No</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Button1({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="bg-[#c21b17] h-[46.5px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:bg-[#a01613] transition-colors" 
      data-name="Button"
      onClick={onClick}
    >
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-[150.63px] not-italic text-[15px] text-center text-white top-[10.6px]">Confirm Details</p>
    </div>
  );
}

export default function ReviewProfessionalDetailsCard({ onConfirm }: { onConfirm?: () => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] size-full" data-name="ReviewProfessionalDetailsCard">
      <Container />
      <Container1 />
      <Button1 onClick={onConfirm} />
    </div>
  );
}