export default function MapSection() {
  return (
    <section className="pt-8 pb-2 bg-white">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Find Our Store</h2>
      </div>

      {/* Map */}
      <div className=" pt-10 pb-0 ">
        <div className="w-full h-[450px] md:h-[500px]  overflow-hidden shadow-lg">
          <iframe
            title="Store Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"></iframe>
        </div>
      </div>
    </section>
  );
}
