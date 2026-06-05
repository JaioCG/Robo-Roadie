const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('multiplayer')
		.setDescription('🧑‍🤝‍🧑 Information about YARG\'s multiplayer support'),

	async execute(interaction) {
		const songsButton = new ButtonBuilder()
			.setLabel('🎸 Pythonology + Chandler\'s Multiplayer Fork')
			.setURL('https://github.com/pythonology/YARG/releases/latest')
			.setStyle(ButtonStyle.Link);

		const row = new ActionRowBuilder().addComponents(songsButton);

		await interaction.reply({
			content: '# 🧑‍🤝‍🧑 Information about YARG\'s multiplayer support\n\nAs of v0.15, YARG supports only local multiplayer, so players playing on the same computer with multiple controllers connected. YARG does **not** officially support any kind of online multiplayer modes at this time. However, several members of the community have been working on custom builds to add support!\n\nIf you give yourself the \"I just want to see the development process!\" role (or any contributor roles) in <id:customize> you can view the <#1437615865674727484> (multiplayer-dev) channel to see development updates on these forks and future official support.\n\nFor a quick and easy download, a download for Pythonology and Chandler\'s fork is available on the button on this message. After downloading and launching this version of the game, you may need to manually re-add some songs (primarily Launcher songs) if they are missing. To create a multiplayer lobby:\n\n1. Open the Online menu and press Yellow to create a lobby. Set the name, max player count, and visibility.\n2. If set to Private, press Blue to copy the room code or hold Blue to display it on screen.\n3. Press Yellow to enter the song select menu and add a song. Once songs are added, press Start to start the game!',
			components: [row],
		});
	},
};