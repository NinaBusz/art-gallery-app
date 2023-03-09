import React from "react";
import Image from "next/image";
import ArtPieces from "../Art-Pieces/ArtPieces";

export default function Spotlight({ piece }) {
  return (
    <>
      <div>
        <Image
          src={piece.imageSource}
          alt={piece.name}
          width={500}
          height={300}
        />
        <p>Artist: {piece.artist}</p>
      </div>
    </>
  );
}
