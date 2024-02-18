import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
	logo: <span>Data Pemilu 2024</span>,
	project: {
		link: "https://github.com/zakiego/pantau-pemilu-2024-docs",
	},
	// chat: {
	// 	link: "https://discord.com",
	// },
	docsRepositoryBase: "https://github.com/zakiego/pantau-pemilu-2024-docs",
	footer: {
		text: "Data Pemilu 2024",
	},
	useNextSeoProps() {
		return {
			titleTemplate: "%s | Data Pemilu 2024",
			defaultTitle: "Data Pemilu 2024",
			description: "Data Perolehan Suara Pemilu 2024",
		};
	},
};

export default config;
