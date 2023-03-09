import React from "react";
import Spotlight from "../components/Spotlight/index.js";

export default function HomePage({ pieces }) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  const randomArtPiece = pieces[randomIndex];

  if (pieces.length < 1) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Art Gallery</h1>
      <Spotlight piece={randomArtPiece} />
    </>
  );
}
