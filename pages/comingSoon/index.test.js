import { render } from "@testing-library/react";
import Index from "./index";

describe("ComingSoon index test", () => {
  it("index page main text", async () => {
    const { getByText } = render(<Index />);
    getByText("COMING SOON!");
  });
});
