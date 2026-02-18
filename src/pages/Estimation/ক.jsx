import { useState } from "react";

const budgets = [
  "$25K - $50K",
  "$50K - $100K",
  "$100K - $250K",
  "$250K - $500K",
];

export default function BookCallForm() {
  const [budget, setBudget] = useState(budgets[0]);

  return (
  <section className="pt-[120px] pb-20 px-6 bg-[#171e2a] min-h-screen">
      <div className="mx-auto max-w-[760px]">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-[52px] leading-[1.05] font-semibold text-[#222]">
            Let’s Get Started!
          </h1>
          <p className="mt-4 text-[16px] leading-6 text-[#6b6b6b]">
            Book your first 30 minute product discovery call with us.
            <br />
            We look forward to meeting you.
          </p>
        </div>

        {/* Card */}
        <div className="mt-10 mx-auto max-w-[520px] bg-[#f3f3f3] border border-[#d9d9d9] px-10 py-10">
          <form className="space-y-6">
            {/* Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] font-medium text-[#222] mb-2">
                  First Name*
                </label>
                <input
                  className="w-full h-[42px] bg-white border border-[#d9d9d9] px-3 text-[14px] outline-none focus:border-[#222]"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-[12px] font-medium text-[#222] mb-2">
                  Last Name*
                </label>
                <input
                  className="w-full h-[42px] bg-white border border-[#d9d9d9] px-3 text-[14px] outline-none focus:border-[#222]"
                  type="text"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-[12px] font-medium text-[#222] mb-2">
                Email*
              </label>
              <input
                className="w-full h-[42px] bg-white border border-[#d9d9d9] px-3 text-[14px] outline-none focus:border-[#222]"
                type="email"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[12px] font-medium text-[#222] mb-2">
                Phone Number*
              </label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  className="w-full h-[42px] bg-white border border-[#d9d9d9] px-3 text-[14px] outline-none focus:border-[#222]"
                  defaultValue="Bangladesh (বাংলাদেশ)"
                  type="text"
                />
                <input
                  className="w-full h-[42px] bg-white border border-[#d9d9d9] px-3 text-[14px] outline-none focus:border-[#222]"
                  defaultValue="+880"
                  type="text"
                />
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-[12px] font-medium text-[#222] mb-3">
                Your Budget*
              </label>

              <div className="grid grid-cols-2 gap-y-3">
                {budgets.map((b) => (
                  <label
                    key={b}
                    className="flex items-center gap-3 text-[14px] text-[#444] cursor-pointer">
                    <input
                      type="radio"
                      name="budget"
                      checked={budget === b}
                      onChange={() => setBudget(b)}
                      className="h-4 w-4 accent-[#d73747]"
                    />
                    {b}
                  </label>
                ))}
              </div>
            </div>

            {/* Need to */}
            <div>
              <label className="block text-[12px] font-medium text-[#222] mb-2">
                I need to*
              </label>
              <div className="relative">
                <select className="w-full h-[42px] bg-white border border-[#d9d9d9] px-3 pr-10 text-[14px] text-[#444] outline-none focus:border-[#222] appearance-none">
                  <option>Please Select</option>
                  <option>Build a Website</option>
                  <option>Build a Mobile App</option>
                  <option>UI/UX Design</option>
                  <option>Product Strategy</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#444]">
                  ▾
                </span>
              </div>
            </div>

            {/* Industry */}
            <div>
              <label className="block text-[12px] font-medium text-[#222] mb-2">
                What industry are you in?*
              </label>
              <div className="relative">
                <select className="w-full h-[42px] bg-white border border-[#d9d9d9] px-3 pr-10 text-[14px] text-[#444] outline-none focus:border-[#222] appearance-none">
                  <option>Please Select</option>
                  <option>Healthcare</option>
                  <option>Fintech</option>
                  <option>E-commerce</option>
                  <option>Education</option>
                  <option>Other</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#444]">
                  ▾
                </span>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-[12px] font-medium text-[#222] mb-2">
                What else should we know?*
              </label>
              <textarea
                rows={4}
                className="w-full bg-white border border-[#d9d9d9] px-3 py-3 text-[14px] text-[#444] outline-none focus:border-[#222] resize-none"
                placeholder="Tell us about your product, the timeline, your location and how you heard about us? Or just say hi!"
              />
            </div>

            {/* Recaptcha placeholder */}
            <div className="w-[304px] max-w-full bg-white border border-[#d9d9d9] px-4 py-3 text-[12px] text-[#666]">
              protected by <span className="font-semibold">reCAPTCHA</span>
              <div className="text-[11px] mt-1">Privacy - Terms</div>
            </div>

            {/* Submit */}
            {/* <button
              type="submit"
              className="mt-2 w-full h-[48px] bg-[#d73747] hover:bg-[#c13241] text-white text-[14px] font-medium tracking-wide flex items-center justify-center gap-2"
            >
              Submit <span className="translate-y-[-1px]">↗</span>
            </button> */}
            <button
              type="submit"
              className="
    relative w-full h-[52px]
    border-2 border-[#9c0]
    bg-[#9c0] text-white
    uppercase text-[14px] tracking-[.03em]
    skew-x-[-12deg]
    transition-all duration-300
    overflow-hidden
    before:content-['']
    before:absolute before:left-0 before:top-0
    before:h-full before:w-0
    before:bg-[#8cbb00]
    before:transition-all before:duration-300
    hover:before:w-full
  ">
              <span className="relative z-10 skew-x-[12deg] flex items-center justify-center gap-2">
                Submit <span className="translate-y-[-1px]">↗</span>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
