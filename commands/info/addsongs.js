const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('addsongs')
		.setDescription('🎵 How to add songs into YARG'),

	async execute(interaction) {
		await interaction.reply('# 🎵 How to add songs into YARG\n1. Go to Settings -> Song Manager\n2. Add the folder(s) containing your songs\n3. Press `Scan Songs`\n4. Play YARG 🎉');
	},
};