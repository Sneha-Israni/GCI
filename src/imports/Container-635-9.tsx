import svgPaths from "./svg-ae8re9nb5w";

function FluentMagicWand16Filled() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[7px]" data-name="fluent:magic-wand-16-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="fluent:magic-wand-16-filled">
          <path d={svgPaths.p1ea4e200} fill="var(--fill-0, #0A70FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[18px] left-[32px] top-[6px] w-[164px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#0a70ff] text-[12px] top-[0.18px]">AI-detected from your photo</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#f0f9ff] relative rounded-[8px] size-full" data-name="Container">
      <FluentMagicWand16Filled />
      <Paragraph />
    </div>
  );
}