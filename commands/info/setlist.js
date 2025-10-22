const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('setlist')
		.setDescription('🎼 Information about YARG\'s official setlist'),

	async execute(interaction) {
		const setlistButton = new ButtonBuilder()
			.setLabel('🟢 YARG Official Setlist on Spotify')
			.setURL('https://open.spotify.com/playlist/4tdG8DYyGdNwCFeWJXV9NF?si=91d2eca374914c01')
			.setStyle(ButtonStyle.Link);

		const row = new ActionRowBuilder().addComponents(setlistButton);

		await interaction.reply({
			content: '# 🎼 Information about YARG\'s official setlist\nYARG\'s official setlist has over 90 songs from all across the world, from remixed classics to brand new releases, from many artists you know to some you may not! It\'s highly worth playing through the YARG setlist and supporting the musicians that made it possible, as well as all of the other releases on the YARC Launcher.\n\nYou can install the YARG setlist to play in the YARC Launcher\'s Marketplace, or listen to it on Spotify.',
			components: [row]
		});
	},
};