import { storiesData } from "@/data/stories";
import Image from "next/image";
import Logo from "./svg/Logo";
import { footerMenus } from "@/data/ui_data";

export default function Footer() {
  return (
    <div className="flex flex-col items-center gap-12">
      {/* Stories */}
      <div className="grid grid-cols-4 gap-4">
        {storiesData.map((story, index) => (
          <div key={index} className="cols-span-1 z-50">
            <a href={story.link} className="z-50 flex flex-col gap-4">
              <Image
                src={story.imageSrc}
                width={100}
                height={100}
                alt="Story"
                className="w-full"
              />
              <span className="font-semibold font-sans">{story.title}</span>
            </a>
          </div>
        ))}
      </div>

      {/* Logo */}
      <div className="flex flex-col gap-4 items-center">
        <div className="w-36">
          <Logo />
        </div>
        <p className="font-sans z-50">
          <a href="https://pudding.cool" className="underline z-50">
            The Pudding
          </a>{" "}
          is a digital publication that explains ideas debated in culture with
          visual essays.
        </p>
      </div>

      {/* Menus */}
      <div className="flex flex-row flex-wrap font-sans text-lg items-center justify-center gap-8 gap-y-4 z-50">
        {footerMenus.map((item, i) => (
          <a key={i} className="uppercase" href={item.link}>
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
