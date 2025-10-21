const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bugs')
		.setDescription('🐛 How to report bugs'),

	async execute(interaction) {
		const button = new ButtonBuilder()
			.setLabel('🐛 Create an Issue on GitHub')
			.setURL('https://github.com/YARC-Official/YARG/issues')
			.setStyle(ButtonStyle.Link);

		const row = new ActionRowBuilder().addComponents(button);

		await interaction.reply({
			content: '# 🐛 How to report bugs\nIf you are experiencing issues with YARG, you can either create a post in the <#1086663790067712100> or <#1139681226907734201> channels here on Discord, or you can create an issue on GitHub.',
			components: [row]
		});
	},
};