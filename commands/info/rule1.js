const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rule1')
		.setDescription('🛑 Explain rule 1'),

	async execute(interaction) {
		await interaction.reply('# 🛑 Rule #1 of the server: Do not break the law.\n**That includes links or mentions of places to get pirated songs, venues, assets, etc.**\n\nYARG does not support piracy as it is illegal. YARG does not use any ripped assets from any related games. If you download songs that are not from the YARG official setlist, do so at your own risk.');
	},
};