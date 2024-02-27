import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Southern Cross AI</span>,
  project: {
    link: "https://github.com/Southern-Cross-AI",
  },
  chat: {
    link: "https://discord.gg/Hrs3SgRk",
  },
  docsRepositoryBase: "https://github.com/Southern-Cross-AI/docs/tree/preview",
  footer: {
    text: "Southern Cross Documentation",
  },
  editLink: {
    text: "Edit this page on GitHub",
  },
};

export default config;
