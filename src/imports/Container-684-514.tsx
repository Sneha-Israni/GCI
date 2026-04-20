interface ProfessionalDetailsCardProps {
  industry: string;
  jobDuties: string;
  hazardousEnvironment: string;
  onEdit: () => void;
  onConfirm: () => void;
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-[153.225px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#263238] text-[16px] top-[-0.6px]">Professional Details</p>
      </div>
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="h-[21px] relative shrink-0 w-[25.9px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[13px] not-italic text-[#c21b17] text-[14px] text-center top-[-0.4px]">Edit</p>
      </div>
    </button>
  );
}

function Container1({ onEdit }: { onEdit: () => void }) {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Heading />
          <Button onClick={onEdit} />
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

function Paragraph1({ industry }: { industry: string }) {
  return (
    <div className="absolute h-[19.5px] left-[150.4px] top-0 w-[150.4px]" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[150.71px] not-italic text-[#263238] text-[13px] text-right top-[0.6px]">{industry}</p>
    </div>
  );
}

function Container3({ industry }: { industry: string }) {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Paragraph1 industry={industry} />
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

function Paragraph3({ jobDuties }: { jobDuties: string }) {
  return (
    <div className="absolute left-[150.4px] top-0 w-[150.4px]" data-name="Paragraph">
      <div className="-translate-x-full absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[155px] not-italic text-[#263238] text-[13px] text-right top-[1.1px] w-[167px] whitespace-pre-wrap">
        {jobDuties}
      </div>
    </div>
  );
}

function Container4({ jobDuties }: { jobDuties: string }) {
  return (
    <div className="relative shrink-0 w-full min-h-[19.5px]" data-name="Container">
      <Paragraph2 />
      <Paragraph3 jobDuties={jobDuties} />
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

function Paragraph5({ hazardousEnvironment }: { hazardousEnvironment: string }) {
  return (
    <div className="absolute h-[19.5px] left-[150.4px] top-0 w-[150.4px]" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[150.85px] not-italic text-[#263238] text-[13px] text-right top-[0.6px]">{hazardousEnvironment}</p>
    </div>
  );
}

function Container5({ hazardousEnvironment }: { hazardousEnvironment: string }) {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
      <Paragraph5 hazardousEnvironment={hazardousEnvironment} />
    </div>
  );
}

function Container2({ industry, jobDuties, hazardousEnvironment }: { industry: string; jobDuties: string; hazardousEnvironment: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 industry={industry} />
      <Container4 jobDuties={jobDuties} />
      <Container5 hazardousEnvironment={hazardousEnvironment} />
    </div>
  );
}

function Button1({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="bg-[#c21b17] h-[46.5px] relative rounded-[12px] shrink-0 w-full hover:bg-[#a01613] transition-colors" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-[150.63px] not-italic text-[15px] text-center text-white top-[10.6px]">Confirm Details</p>
    </button>
  );
}

export default function Container({ industry, jobDuties, hazardousEnvironment, onEdit, onConfirm }: ProfessionalDetailsCardProps) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start pt-[16px] px-[16px] pb-[16px] relative rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] w-full" data-name="Container">
      <Container1 onEdit={onEdit} />
      <Container2 industry={industry} jobDuties={jobDuties} hazardousEnvironment={hazardousEnvironment} />
      <Button1 onClick={onConfirm} />
    </div>
  );
}
