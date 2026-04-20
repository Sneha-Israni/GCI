function Button() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[#c21b17] min-h-px min-w-px relative rounded-[12px] to-[#a11612]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[103px] py-[13px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-center text-white">Get Verification Code</p>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center px-[20px] relative size-full">
      <Button />
    </div>
  );
}