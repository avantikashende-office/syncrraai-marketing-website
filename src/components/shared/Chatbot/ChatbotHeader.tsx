import svgPaths from "./svg-rgvmvk6c4u";



function Icon() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
        <g id="Icon">
          <path d={svgPaths.p1b88bcc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M14.5833 2.1875V5.10417" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M16.0417 3.64583H13.125" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M2.91667 12.3958V13.8542" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M3.64583 13.125H2.1875" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-gradient-to-b from-[#39d373] relative rounded-[12.75px] shadow-[0px_10px_15px_-3px_rgba(57,211,115,0.3),0px_4px_6px_-4px_rgba(57,211,115,0.3)] shrink-0 size-[35px] to-[#1a1a1a]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[14px] text-white top-0 tracking-[-0.1504px]">Syncrra AI Assistant</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Heading />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[42px] relative shrink-0 flex-1" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.5px] items-start relative size-full">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M10.5 3.5L3.5 10.5" id="Vector" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3.5 3.5L10.5 10.5" id="Vector_2" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

interface ButtonProps {
  onClick?: () => void;
}

function Button({ onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-[36px] h-[36px] relative rounded-lg hover:bg-white/20 active:bg-white/30 transition-all cursor-pointer group flex items-center justify-center"
      data-name="Button"
      aria-label="Close chatbot"
      type="button"
    >
      <Icon1 />
    </button>
  );
}

function Container3({ onClose }: { onClose?: () => void }) {
  return (
    <div className="relative shrink-0" data-name="Container">
      <Button onClick={onClose} />
    </div>
  );
}

function Container4({ onClose }: { onClose?: () => void }) {
  return (
    <div className="content-stretch flex h-[42px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 onClose={onClose} />
    </div>
  );
}

export default function Container5({ onClose }: { onClose?: () => void }) {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-[rgba(57,211,115,0.1)] items-start pb-3 pt-[14px] px-[21px] relative w-full to-[#011f0d]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.15)] border-b border-solid bottom-0 left-0 right-0 pointer-events-none" />
      <Container4 onClose={onClose} />
    </div>
  );
}