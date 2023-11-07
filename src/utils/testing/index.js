import { customRender } from "./custom-render";

export * from "@testing-library/react";

// override render method
export { customRender as render };
