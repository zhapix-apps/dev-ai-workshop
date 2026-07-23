import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "../src/theme/theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) =>
      React.createElement(
        ThemeProvider,
        { theme },
        React.createElement(CssBaseline),
        React.createElement(Story),
      ),
  ],
};

export default preview;
