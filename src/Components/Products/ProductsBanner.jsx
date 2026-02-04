// import bannerImg from "../../assets/img/IP-Kameras.webp"; // change path to your banner

// export default function ProductsBanner() {
//   return (
//     <section className="w-full">
//       <div className="relative">
//         <img
//           src={bannerImg}
//           alt="Security"
//           className="w-full h-[220px] sm:h-[280px] md:h-[340px] object-cover"
//         />
//         {/* overlay যদি দরকার হয় */}
//         <div className="absolute inset-0 bg-black/20" />
//       </div>
//     </section>
//   );
// }

import bannerImg from "../../assets/img/IP-Kameras.webp"; // update if path differs

export default function ProductsBanner() {
  return (
    <section className="w-full">
      <div className="relative">
        <img
          src={bannerImg}
          alt="Security"
          className="w-full h-[220px] sm:h-[280px] md:h-[340px] object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </section>
  );
}
