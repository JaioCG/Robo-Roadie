const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('multiplayer')
		.setDescription('🧑‍🤝‍🧑 Information about YARG\'s multiplayer support'),

	async execute(interaction) {
		const songsButton = new ButtonBuilder()
			.setLabel('🎸 RBDΣ Mirror Download')
			.setURL('https://rockbanddeluxesigmas.rocks/downloads/yargonline')
			.setStyle(ButtonStyle.Link);

		const row = new ActionRowBuilder().addComponents(songsButton);

		await interaction.reply({
			content: '# 🧑‍🤝‍🧑 Information about YARG\'s multiplayer support\n\nAs of v0.15, YARG supports only local multiplayer, so players playing on the same computer with multiple controllers connected. YARG does **not** officially support any kind of online multiplayer modes at this time. However, several members of the community have been working on custom builds to add support!\n\nIf you give yourself the \"I just want to see the development process!\" role (or any contributor roles) in <id:customize> you can view the <#1437615865674727484> (multiplayer-dev) channel to see development updates on both these forks and future official support.\n\nFor a quick and easy download, a mirror download for Opria123\'s fork is available on the RBDΣ website. After downloading and launching this version of the game, you may need to manually re-add some songs if they are missing. To create a multiplayer lobby:\n\n1. If needed, open port 7777 on your router\'s settings, or use a VPN that has port forwarding. You can change the server port in Settings.\n2. Hover over \"Create Lobby\" and set a name, max player count, and privacy setting/password.\n3. If your OS prompts you to allow external connections, click Yes/Allow.\n4. The lobby is now open! Copy the WAN IP and send it to your friends to allow them to connect by hovering over \"Direct Connect\". The password box can be left blank if the privacy setting on the server is set to Public.',
			components: [row],
		});
	},
};