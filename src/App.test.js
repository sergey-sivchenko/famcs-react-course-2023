import { render, screen } from "@testing-library/react";

import App from "./App";

describe("<App/>", () => {
  it("renders Todo list", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/Todo list/);
  });
});
