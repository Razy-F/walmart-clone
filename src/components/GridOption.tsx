import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const GridOption = ({
  title,
  className,
  image,
}: {
  title: string;
  className?: string;
  image?: StaticImageData;
}) => {
  return (
    <Link
      href={{
        pathname: "/search",
        query: { q: title },
      }}
      className={cn("grid-option relative", className)}
    >
      <h2>{title}</h2>
      {image && (
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="opacity-80 rounded-xl"
        />
      )}
    </Link>
  );
};

export default GridOption;
