import CardDemo from "./ui/CardDemo";

const services = [
  { name: "Big Data & Analytics", imgUrl: "/big-data-analytics.png" },
  { name: "Consultancy", imgUrl: "/consultancy.png" },
  { name: "HR & Staffing", imgUrl: "/hr-staffing.png" },
  { name: "Cybersecurity", imgUrl: "/cybersecurity.png" },
  { name: "Consultancy", imgUrl: "/consultancy2.png" },
  { name: "Sustainability", imgUrl: "/sustainability.png" },
  { name: "Cloud", imgUrl: "/cloud.png" },
  { name: "Metaverse", imgUrl: "/metaverse.png" },
];

export default function ServiceSection() {
  return (
    <section className="px-8 pb-20">
      <h2 className="text-[20px] sm:text-[30px] md:text-[40px] mb-4 sm:mb-8">
        Services
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 sm:gap-y-16 md:gap-y-8 gap-x-4 sm:gap-x-4 md:gap-x-8">
        {services.map((service, index) => (
          <div key={index}>
            <CardDemo name={service.name} imgUrl={service.imgUrl} />
          </div>
        ))}
      </div>
    </section>
  );
}
