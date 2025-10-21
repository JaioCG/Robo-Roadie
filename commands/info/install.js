const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('install')
		.setDescription('📦 How to download and play YARG'),

	async execute(interaction) {
		const launcherButton = new ButtonBuilder()
			.setLabel('📦 YARC Launcher')
			.setURL('https://github.com/YARC-Official/YARC-Launcher/releases/latest')
			.setStyle(ButtonStyle.Link);

		const stableButton = new ButtonBuilder()
			.setLabel('📌 YARG Stable')
			.setURL('https://github.com/YARC-Official/YARG/releasest/latest')
			.setStyle(ButtonStyle.Link);
		
		const nightlyButton = new ButtonBuilder()
			.setLabel('🧪 YARG Nightly')
			.setURL('https://github.com/YARC-Official/YARG-BleedingEdge/releases/latest')
			.setStyle(ButtonStyle.Link);
		
		const row = new ActionRowBuilder().addComponents(launcherButton, stableButton, nightlyButton);
		
		await interaction.reply({
			content: '# 📦 How to download and play YARG\nWe recommend using the YARC Launcher, which makes it easier to both install and update YARG, as well as downloading officially released songs and venues.\n\nPortable versions of both Stable and Nightly (Bleeding Edge) builds of YARG are also available.',
			components: [row]
		});
	},
};

