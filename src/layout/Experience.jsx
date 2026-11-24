import ScrollVelocity from "../components/ScrollVelocity/ScrollVelocity";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
const Experience = () => {
  const testimonials = [
    {
      quote: "SDN 05 Pondok Kelapa, Kabupaten Bengkulu Tengah",
      title: "2007",
    },
    {
      quote: "SMPN 1 Pondok Kelapa, Kabupaten Bengkulu Tengah",
      title: "2010",
    },
    {
      quote: "SMKS 9 Muhammadiya Bengkulu",
      name: "Teknik Komputer & Jaringan ",
      title: "2013",
    },
    {
      quote: "Universitas Muhammadiyah Bengkulu",
      name: "Teknik Informatika",
      title: "2018",
    },
    {
      quote: "PT Media Sarana Televisi Bengkulu ",
      name: "BETV",
      title: "2019-Now",
    },
  ];
  return (
    <div>
      <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div className="container mx-auto ">
          <ScrollVelocity
            texts={["Anjar IT Production", "Kreatifitas Tanpa Batas"]}
            className=" font-bold text-center text-slate-200"
          />
        </div>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Experience;
