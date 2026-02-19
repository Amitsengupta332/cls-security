import { useState } from "react";

export default function Estimation() {
  const [budget, setBudget] = useState("$25K - $50K");

  return (
    <section className="min-h-screen bg-[#f3f3f3] pt-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-5xl font-semibold text-gray-800">
          Let's Get Started!
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Book your first 30 minute product discovery call with us.
          <br />
          We look forward to meeting you.
        </p>

        {/* Form Box */}
        <div className="mt-12 bg-white border p-10 text-left">
          <form className="space-y-6">

            {/* First + Last Name */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">
                  First Name*
                </label>
                <input
                  type="text"
                  className="w-full border p-3"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Last Name*
                </label>
                <input
                  type="text"
                  className="w-full border p-3"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium">Email*</label>
              <input
                type="email"
                className="w-full border p-3"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 font-medium">
                Phone Number*
              </label>
              <div className="flex gap-4">
                <input
                  type="text"
                  defaultValue="+880"
                  className="w-1/4 border p-3"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-3/4 border p-3"
                />
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="block mb-4 font-medium">
                Your Budget*
              </label>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "$25K - $50K",
                  "$50K - $100K",
                  "$100K - $250K",
                  "$250K - $500K",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="budget"
                      value={item}
                      checked={budget === item}
                      onChange={() => setBudget(item)}
                      className="w-4 h-4 accent-red-500"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Need To */}
            <div>
              <label className="block mb-2 font-medium">
                I need to*
              </label>
              <select className="w-full border p-3">
                <option>Please Select</option>
                <option>Build a Website</option>
                <option>Build a Mobile App</option>
                <option>Hire Dedicated Team</option>
              </select>
            </div>

            {/* Industry */}
            <div>
              <label className="block mb-2 font-medium">
                What industry are you in?*
              </label>
              <select className="w-full border p-3">
                <option>Please Select</option>
                <option>Healthcare</option>
                <option>Fintech</option>
                <option>E-commerce</option>
                <option>Education</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 font-medium">
                What else should we know?*
              </label>
              <textarea
                rows={4}
                className="w-full border p-3"
                placeholder="Tell us about your product, the timeline, your location and how you heard about us? Or just say hi!"
              />
            </div>

            {/* Fake Recaptcha UI */}
            <div className="border p-4 bg-gray-50 text-sm text-gray-600">
              protected by <span className="font-semibold">reCAPTCHA</span>
              <div className="text-xs mt-1">
                Privacy - Terms
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-4 text-lg font-medium hover:bg-red-700 transition"
            >
              Submit →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
