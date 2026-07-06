const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('custom')
		.setDescription('🕺 Information about YARG\'s custom content support'),

	async execute(interaction) {
		const charactersButton = new ButtonBuilder()
			.setLabel('🕺 Custom Characters Drive')
			.setURL('https://drive.google.com/drive/folders/1FdcEhv7Ns2IZ4_iVvxEkbUMSK3ojS6NV?usp=sharing')
			.setStyle(ButtonStyle.Link);
		
		const themesButton = new ButtonBuilder()
			.setLabel('🕺 Custom Themes Drive')
			.setURL('https://drive.google.com/drive/folders/1FfdnKVCKVLSxKJ35bz-Iax6HxYkIAcs8?usp=sharing')
			.setStyle(ButtonStyle.Link);

		const row = new ActionRowBuilder().addComponents(charactersButton, themesButton);

		await interaction.reply({
			content: '# 🧑‍🤝‍🧑 Information about YARG\'s custom content support\n\nYARG has support for custom presets (engine, highway, color, camera, rock meter), vocalist characters, and note themes (Nightly only)! Currently, there are no custom themes, characters, or highways available on the YARC Launcher, but here on Discord you can find many made by the community!\n\nTo install custom content, download the specific file you\'d like to install and place it inside the correlating customs folder folder:\n- Windows: `C:\\Users\\[user]\\AppData\\LocalLow\\YARC\\YARG\\[version]\\custom`\n- Mac: `~/Library/Application Support/YARC/YARG/[version]/custom`\n- Linux: `~/.config/unity3d/YARC/YARG/[version]/custom`\n\nYou can change presets and themes in your Profile, and for custom characters, you can do so in Settings -> All Settings -> Experimental.\n\nYou can find folders of available custom content on this command, or in <#1153450525224882296>.',
			components: [row],
		});
	},
};