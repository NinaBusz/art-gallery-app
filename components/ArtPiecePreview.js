import Image from "next/image";

export default function ArtPiecePreview({ pieceImg }) {
  return (
    <ul>
      <li>
        <Image src={pieceImg} alt="" height={300} width={300}></Image>
      </li>
    </ul>
  );
}
