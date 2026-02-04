export default function CartButton() {
  return (
    <a
      href="#"
      className="group relative inline-flex h-[40px] w-[108px] shrink-0 items-center justify-center border-2 border-[#9c0] bg-white skew-x-[-12deg] overflow-hidden"
    >
      <span className="absolute left-0 top-0 h-full w-0 bg-[#8cbb00] transition-all duration-300 group-hover:w-full" />
      <span className="relative skew-x-[12deg] text-[#9c0] group-hover:text-white transition-colors duration-300 text-[20px]">
        🛒
      </span>
    </a>
  );
}
