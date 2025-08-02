import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const items = [
  {
    image: "/canvaDashboard.png",
    title: "Dashboard With templates and projects",
  },
  {
    image: "/canvaText.png",
    title: "text feature",
  },
  {
    image: "/canvaShapes.png",
    title: "Different Shape",
  },
  {
    image: "/canvaDesgn.png",
    title: "Get Templates",
  },
  {
    image: "/canvaImage.png",
    title: "Unsplash Images",
  },
  {
    image: "/canvaSettings.png",
    title: "Settings for canva",
  },
  {
    image: "/canvaBrush.png",
    title: "Brush Settings",
  },
];

const MarqueeCard = ({
  image,
  title,
}: {
  image: string;
  title: string;
}) => (
  <div className="flex w-[280px] h-[240px] sm:w-[320px] sm:h-[280px] md:w-[350px] md:h-[320px] lg:w-[400px] lg:h-[350px] flex-col rounded-xl border border-zinc-200 bg-white shadow-md dark:border-zinc-800 dark:bg-zinc-900 overflow-hidden mx-2 sm:mx-3">
    <div className="relative flex-1">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-3 sm:p-4 text-center">
      <h3 className="text-sm sm:text-base lg:text-lg font-semibold">{title}</h3>
    </div>
  </div>
);

export function FeatureMarquee() {
  return (
    <div className="relative w-full overflow-hidden">
      <Marquee className="[--duration:25s]" pauseOnHover>
        {items.map((item, idx) => (
          <MarqueeCard key={idx} {...item} />
        ))}
      </Marquee>

      {/* Left & Right Fade - Responsive */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 sm:w-1/5 lg:w-1/4 bg-gradient-to-r from-white dark:from-black" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 sm:w-1/5 lg:w-1/4 bg-gradient-to-l from-white dark:from-black" />
    </div>
  );
}