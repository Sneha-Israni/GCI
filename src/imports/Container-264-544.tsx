function Text() {
  return (
    <div className="absolute content-stretch flex h-[16.523px] items-start left-[93.35px] top-[1.18px] w-[5.459px]" data-name="Text">
      <p className="font-['Arial:Bold',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#c21b17] text-[14px] text-nowrap">*</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[21px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[-0.82px]">Agent Details</p>
      <Text />
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

function Container() {
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

function Container1() {
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

function Container2() {
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

function Container3() {
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

function Container4() {
  return (
    <div className="h-[69px] relative shrink-0 w-[332px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Label4 />
        <TextInput4 />
      </div>
    </div>
  );
}

function Text1() {
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
      <Text1 />
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

function Container5() {
  return (
    <div className="h-[69px] relative shrink-0 w-[332px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Label5 />
        <TextInput5 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[475px] items-start relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

export default function Container7() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[16px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.18px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]" />
      <Paragraph />
      <Container6 />
    </div>
  );
}