import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Slider() {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full py-3 px-5"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div>
                <div className="h-28 flex items-center justify-center p-6 bg-red-700 text-white">
                  <span className="text-4xl font-semibold">
                    Image {index + 1}
                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-5 top-[9.5rem] transform -translate-y-1/2" />
      <CarouselNext className="absolute left-16 top-[9.5rem] transform -translate-y-1/2" />
      <span className="absolute right-5 text-blue-600 flex flex-row items-center justify-center cursor-pointer">
        View more <ChevronRight size={20} className="text-black" />
      </span>
    </Carousel>
  );
}
