const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('customization')
		.setDescription('🎨 Customization options in YARG'),

	async execute(interaction) {
		await interaction.reply('# 🎨 Customization options in YARG\nYARG lets you customize your playing experience to fit your play style, whether it be more casual or hyper-competative.\n\nTo change your profile settings, follow these steps:\n1. Go to Profiles\n2. Select your profile\n3. Change any of the options that show on the right-hand side\n\nYou can find custom camera and color presets by the community in the <#1153450525224882296> channel.');
	},
};