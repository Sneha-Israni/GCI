function Container() {
  return <div className="bg-white h-[24px] rounded-[2.68435e+07px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container" />;
}

export default function Button() {
  return (
    <div className="bg-[#c21b17] content-stretch flex flex-col items-start pb-0 pl-[24px] pr-[8px] pt-[4px] relative rounded-[2.68435e+07px] size-full" data-name="Button">
      <Container />
    </div>
  );
}