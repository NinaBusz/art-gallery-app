import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview";

test("show all artpieces in a list", () => {
  render(<ArtPiecePreview />);
});
