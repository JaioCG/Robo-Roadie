const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('riffmaster')
		.setDescription('🎸 How to fix the riffmaster crash'),

	async execute(interaction) {
		await interaction.reply('# 🎸 How to fix the riffmaster crash\nIn Windows, if either your Riffmaster or Wii guitar via WiitarThing is crashing YARG or your entire computer, try the following fix:\n\n1. Open the Settings app -> Apps -> Installed Apps (or search for Add and Remove Programs)\n2. look for a package named "Microsoft GameInput". Check if there are 2 versions installed.\n3. If so, uninstall the one that was installed most recently (if you\'re on Windows 10) or uninstall all versions of it (if you\'re on Windows 11). That is the version causing the issue.\n4. After uninstalling, unplug/replug the dongle and restart YARG.');
	},
};