import useSWR from "swr";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function HomePage() {
  const { data = [] } = useSWR(
    `https://example-apis.vercel.app/api/art/`,
    fetcher
  );
  console.log(data);

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((image) => (
        <div key={image.id}>
          <Image
            src={image.imageSource}
            alt="Bildname zb"
            width={300}
            height={300}
          />
          <h2>{image.name}</h2>
          <p>{image.artist}</p>
        </div>
      ))}
    </div>
  );
}

/* import ArtPieces from "../components/ArtPieces";
<ArtPieces /> */
