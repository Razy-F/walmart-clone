import GridOption from "@/components/GridOption";
import {
  imageEight,
  imageFive,
  imageFour,
  imageNine,
  imageOne,
  imageSeven,
  imageSix,
  imageTen,
  imageThree,
  imageTwo,
} from "@/images";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-1 grid-flow-dense md:grid-cols-4 grid-rows-[repeat(4,_minmax(150px,_auto))] gap-2">
        <GridOption
          title="Get ’em the hottest toys"
          image={imageOne}
          className="bg-pink-200 h-full "
        />
        <GridOption
          title="Get ’em the hottest toys"
          image={imageFour}
          className="bg-blue-100 row-span-2 col-span-2"
        />
        <GridOption
          title="Get ’em the hottest toys"
          image={imageEight}
          className="bg-pink-200"
        />
        <GridOption
          title="Get ’em the hottest toys"
          image={imageTwo}
          className="bg-yellow-200 row-span-2 "
        />
        <GridOption
          title="Get ’em the hottest toys"
          image={imageFive}
          className="bg-red-200"
        />
        <GridOption
          title="Get ’em the hottest toys"
          image={imageSix}
          className="bg-orange-200"
        />
        <GridOption
          title="Get ’em the hottest toys"
          image={imageNine}
          className="bg-fuchsia-200 "
        />
        <GridOption
          title="Get ’em the hottest toys"
          image={imageTen}
          className="bg-teal-200 row-span-2"
        />
        <GridOption
          title="Get ’em the hottest toys"
          image={imageThree}
          className="bg-violet-200 "
        />
        <GridOption
          title="Get ’em the hottest toys"
          image={imageSeven}
          className="bg-rose-200 col-span-2"
        />
      </div>
    </main>
  );
}
