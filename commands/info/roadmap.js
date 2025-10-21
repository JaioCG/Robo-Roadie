const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roadmap')
		.setDescription('🚀 View the roadmap for YARG\'s future'),

	async execute(interaction) {
		const roadmapButton = new ButtonBuilder()
			.setLabel('🚀 YARG Roadmap')
			.setURL('https://yarg.youtrack.cloud/agiles/147-7/current')
			.setStyle(ButtonStyle.Link);

		const row = new ActionRowBuilder().addComponents(roadmapButton);

		await interaction.reply({
			content: '# 🚀 View the roadmap for YARG\'s future\nIf you\'re interested in seeing what the future of YARG\'s development looks like, you can check out the roadmap on YouTrack.',
			components: [row],
		});
	},
};

