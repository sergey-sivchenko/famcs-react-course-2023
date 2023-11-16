import { render, screen } from "@testing-library/react";

import App from "./App";

describe("<App/>", () => {
  it("renders application header", () => {
    render(<App />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders My first TODO list by default", () => {
    render(<App />);

    expect(screen.getByText(/My first TODO list/)).toBeInTheDocument();
  });
});
