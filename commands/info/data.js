const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('data')
		.setDescription('📄 How to find your YARG save/log data'),

	async execute(interaction) {
		await interaction.reply('# 📄 How to find your YARG save/log data\nYou can find most of YARG\'s save and log data here:\n- Windows: `C:\\Users\\<you>\\AppData\\LocalLow\\YARC\\YARG`\n- Mac: `~/Library/Application Support/YARC/YARG`\n- Linux: `~/.config/unity3d/YARC/YARG/release`\n\n**Specifically important files:**\n- Persistent data (includes scores, profiles, replays, etc.)\n- Logs (Contain debug information, useful for developers when diagnosing bugs or issues)\n- badsongs.txt (Lists songs that can\'t be scanned into YARG)');
	},
};