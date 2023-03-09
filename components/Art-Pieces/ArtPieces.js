import React from "react";
import Link from "next/link";
import ArtPiecePreview from "../Art-Piece-Preview/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  if (!pieces || pieces.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {pieces.map((image) => {
        return <ArtPiecePreview key={image.slug} image={image} />;
      })}
    </ul>
  );
}
