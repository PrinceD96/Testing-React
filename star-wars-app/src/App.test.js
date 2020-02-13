import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders with no problems", async () => {
  const wrapper = rtl.render(<App />);

  const logo = wrapper.getByAltText(/logo/i);

  expect(logo).toBeVisible();
});