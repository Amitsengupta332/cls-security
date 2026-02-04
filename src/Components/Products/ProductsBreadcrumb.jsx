import { Link } from "react-router-dom";

export default function ProductsBreadcrumb({ current = "Category" }) {
  return (
    <div className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="py-3">
          <ol className="flex items-center justify-center gap-2 text-[14px] text-[#666]">
            <li>
              <Link to="/" className="text-[#111] hover:text-[#9c0]">
                Home
              </Link>
            </li>
            <li className="text-[#999]">/</li>
            <li className="text-[#111]">{current}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
