import userEvent from "@testing-library/user-event";

import { render, screen } from "utils/testing";

import IconButton from "..";

describe("<IconButton/>", () => {
  it("matches snapshot with required props only", () => {
    const onClick = jest.fn();
    const Icon = jest.fn(({ size, title }) => `Icon: size - ${size}, title - ${title}`);

    const { asFragment } = render(<IconButton icon={Icon} onClick={onClick} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("calls onClick by a component click", async () => {
    const onClick = jest.fn();
    const Icon = jest.fn(({ size, title }) => `Icon: size - ${size}, title - ${title}`);

    render(<IconButton icon={Icon} onClick={onClick} />);

    await userEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
