const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rule1')
		.setDescription('🛑 Explain rule 1'),

	async execute(interaction) {
		await interaction.reply('# 🛑 Rule #1 of the server: Do not break the law. That includes links or mentions of places to get pirated songs, venues, assets, etc.');
	},
};