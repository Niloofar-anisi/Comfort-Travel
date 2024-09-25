import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AppProviders from "../src/components/Providers/AppProviders";

const customRender = (ui, options) =>
  render(ui, {
    wrapper: ({ children }) => (
      <Router>
        <AppProviders>{children}</AppProviders>
      </Router>
    ),
    ...options,
  });

export * from "@testing-library/react";
export { customRender as render };
