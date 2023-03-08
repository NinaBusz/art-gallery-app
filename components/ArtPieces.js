/*import React from "react";
import ArtPiecePreview from "./ArtPiecePreview";

import { createGlobalStyle } from "../styles.js";

function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li>{piece}</li>
      ))}
    </ul>
  );

  return <ArtPiecePreview key={pieces.slug} piece={pieces} />;
}
/*
export default function ArtPieces({ pieces }) {
  return (
    <>
      <h1>Pieces</h1>
      <div>
        {pieces.map((artwork) => {
          return (
            <li key={artwork.slug}>
              <ArtPiecePreview pieceImg={artwork.imageSource}></ArtPiecePreview>
            </li>
          );
        })}
      </div>
    </>
  );
}
*/

export default ArtPieces;
