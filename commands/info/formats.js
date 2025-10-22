const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('formats')
		.setDescription('📘 Information about supported file formats in YARG'),

	async execute(interaction) {
		const songsButton = new ButtonBuilder()
			.setLabel('📖 YARG Wiki - Songs')
			.setURL('https://wiki.yarg.in/wiki/Songs')
			.setStyle(ButtonStyle.Link);

		const bgsButton = new ButtonBuilder()
			.setLabel('📖 YARG Wiki - Backgrounds')
			.setURL('https://wiki.yarg.in/wiki/Backgrounds')
			.setStyle(ButtonStyle.Link);

		const row = new ActionRowBuilder().addComponents(songsButton, bgsButton);

		await interaction.reply({
			content: '# 📘 Information about supported file formats in YARG\n## Song formats\nYARG does NOT support piracy of any kind, and will not distribute any ripped/pirated songs. Use custom imported songs at your own risk.\n🎵 **Supported song formats:** `.mid`, `.chart`, `.sng`, `ex-con`\n\n> YARG supports extracted Rock Band CON files (called "ex-cons"), as well as unextracted CON files (like you would directly import into RB3). However, for YARG to load a CON file in-game, it MUST have decrypted `.mogg` files for audio.\n\n> As well, YARG supports the `song_updates` standard for updating metadata within CONs. It\'s recommended you use the files from Rock Band 3 Deluxe for metadata updates, including harmonies and fixed Pro Drum tom markers.\n## Background formats\n🖼️ **Supported image formats:** `.png`, `.jpg`, `.jpeg`\n🎥 **Supported video formats:** `.mp4`, `.webm` (VP8)\n🏟️ **Supported venue formats:** `.yarground`',
			components: [row],
		});
	},
};

