const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('venues')
		.setDescription('🏟️ Information about venues in YARG'),

	async execute(interaction) {
		const wikiButton = new ButtonBuilder()
			.setLabel('📖 YARG Wiki - Backgrounds')
			.setURL('https://wiki.yarg.in/wiki/Backgrounds#venues')
			.setStyle(ButtonStyle.Link);

		const videoButton = new ButtonBuilder()
			.setLabel('📺 Video Tutorial on Venues')
			.setURL('https://www.youtube.com/watch?v=TkynDF4lYpc')
			.setStyle(ButtonStyle.Link);

		const row = new ActionRowBuilder().addComponents(wikiButton, videoButton);

		await interaction.reply({
			content: '# 🏟️ Information about venues in YARG\nVenues are fully live 3D rendered backgrounds that can include reactive lighting effects, animated characters, and more. There are a small number of venues released on the YARC Launcher, with more to come soon.\n\nIf you\'re interested in creating your own venues, you can take a look at our documentation.',
			components: [row],
		});
	},
};

