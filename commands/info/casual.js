const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('casual')
		.setDescription('🔰 Information about YARG\'s Casual engine preset'),

	async execute(interaction) {
		const songsButton = new ButtonBuilder()
			.setLabel('📖 YARG Wiki - Hit engine')
			.setURL('https://wiki.yarg.in/wiki/Hit_engine')
			.setStyle(ButtonStyle.Link);

		const row = new ActionRowBuilder().addComponents(songsButton);

		await interaction.reply({
			content: '# 🔰 Information about YARG\'s Casual engine preset\nBy default, YARG has three engine presets: Casual, Default, and Precision. Default and Precision are available on all instruments, but Casual is only available on Guitar and Vocals.\n\nThis is intentional, with differences compared to Default explained below (as of v0.15 nightlies).\n\n**Guitar:**\n- Anti-Ghosting is Disabled\n- Infinite Front End is Enabled\n- Strum Leniency is 60ms rather than 50ms\n- Strum Leniency (No Notes) is 30ms rather than 25ms\n- Tremolo Hit Window is 200ms rather than 160ms\n\n**Vocals:**\n- Perfect Pitch Percent is 0.85 rather than 0.6\n\nAs you can see, hit window settings aren\'t changed between Casual and Default, only some instrument-specific settings. If you wish to make a custom preset with a larger hit window, you can do so in Settings -> Presets, selecting Engine Presets in Preset Type, and making a custom preset from there.',
			components: [row],
		});
	},
};