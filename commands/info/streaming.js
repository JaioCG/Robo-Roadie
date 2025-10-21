const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('streaming')
		.setDescription('🔴 Essentials for livestreaming YARG'),

	async execute(interaction) {
		const songOverlayButton = new ButtonBuilder()
			.setLabel('🎵 Song Overlay (by Pantotone)')
			.setURL('https://github.com/Pantotone/YAWO4YARG')
			.setStyle(ButtonStyle.Link);
		
		const twitchPanelsButton = new ButtonBuilder()
			.setLabel('📣 Panels for Twitch')
			.setURL('https://drive.google.com/drive/folders/1VEIItqIz6zV4ko58jI8vsu4YKEFD1-d7')
			.setStyle(ButtonStyle.Link);
		
		const inputDisplayButton = new ButtonBuilder()
			.setLabel('🔘 Input Display (by raphaelgoulart)')
			.setURL('https://github.com/raphaelgoulart/ya_inputdisplay')
			.setStyle(ButtonStyle.Link);
		
		const templateButton = new ButtonBuilder()
			.setLabel('⚙️ OBS Template (by Kadu)')
			.setURL('https://ko-fi.com/s/5d9a042c56')
			.setStyle(ButtonStyle.Link);

		const row = new ActionRowBuilder().addComponents(songOverlayButton, twitchPanelsButton, inputDisplayButton, templateButton);

		await interaction.reply({
			content: '# 🔴 Essentials for livestreaming YARG\nTake a look at some of our Streaming Essentials by the community to help you get started streaming YARG!\n\nTo get YARG to appear transparent on your OBS, make sure you\'re capturing using a Game Capture source, and select `Allow Transparency` in the source\'s properties.',
			components: [row],
		});
	},
};

