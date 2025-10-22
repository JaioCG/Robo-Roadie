const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('riffmaster')
		.setDescription('🎸 How to fix the riffmaster crash'),

	async execute(interaction) {
		await interaction.reply('# 🎸 How to fix the riffmaster crash\nIn Windows, if your riffmaster is crashing YARG or your entire computer try the following fix:\n\nOpen "Windows Settings" than "Add/Remove Programs" and look for a package named "Microsoft GameInput". Check if there are 2 versions installed. If so, uninstall the one that was installed most recently (ask if unsure). That is the version causing the issue.\nAfter uninstalling, plug the dongle back and it should work fine.');
	},
};