import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
	logo: <span>Data Pemilu 2024</span>,
	// project: {
	// 	link: "https://github.com/shuding/nextra-docs-template",
	// },
	// chat: {
	// 	link: "https://discord.com",
	// },
	// docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
	footer: {
		text: "Data Pemilu 2024",
	},
	head: (
		<>
			<title>Data Pemilu 2024</title>
			{/* <meta property="og:title" content="Data Pemilu 2024" /> */}
			<meta property="og:title" content="Data Pemilu 2024" />
		</>
	),
};

export default config;
