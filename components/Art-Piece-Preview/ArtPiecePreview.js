import Image from "next/image";
import React from "react";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <li key={image.id}>
        <Image
          src={image.imageSource}
          alt="Bildname zb"
          width={300}
          height={300}
        />
        <h2>{image.name}</h2>
        <p>{image.artist}</p>
      </li>
    </>
  );
}
