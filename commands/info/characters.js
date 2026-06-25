const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('characters')
		.setDescription('🕺 Information about YARG\'s custom characters support'),

	async execute(interaction) {
		const songsButton = new ButtonBuilder()
			.setLabel('🕺 Custom Characters Drive')
			.setURL('https://drive.google.com/drive/folders/1FdcEhv7Ns2IZ4_iVvxEkbUMSK3ojS6NV?usp=sharing')
			.setStyle(ButtonStyle.Link);

		const row = new ActionRowBuilder().addComponents(songsButton);

		await interaction.reply({
			content: '# 🧑‍🤝‍🧑 Information about YARG\'s custom characters support\n\nAs of v0.15, YARG now supports custom characters for vocalists in venues! None officially are bundled in with YARG or are available on the YARC Launcher, but here on Discord you can find many made by the community!\n\nTo install custom characters, download the `.yargchar` file and place it inside the custom characters folder:\n- Windows: `C:\Users\[user]\AppData\LocalLow\YARC\YARG\[version]\custom\characters`\n- Mac: `~/Library/Application Support/YARC/YARG/[version]/custom/characters`\n- Linux: `~/.config/unity3d/YARC/YARG/release/[version]/custom/characters`\n- Or you can press "Open Backgrounds/Venue Folder" in Settings -> General, go back a folder, and go to `characters` from there\n\nTo select a character, go to Settings -> All Settings -> Experimental, and select a character under Custom Vocals Character.\n\nYou can find a folder of available custom characters here since the YARC Launcher doesn\'t yet have downloads for characters.',
			components: [row],
		});
	},
};