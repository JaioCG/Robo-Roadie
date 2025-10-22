const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('comparison')
		.setDescription('🎸 Is YARG better than other PlasticBand games?'),

	async execute(interaction) {
		await interaction.reply('# 🎸 Is YARG better than other PlasticBand games?\nEvery PlasticBand game has its own strengths and weaknesses against each other, meaning there\'s no one "best guitar game". You\'re allowed to have multiple games installed that you actively play, you don\'t need to stick to only one.\n\nIf you\'d like some specific comparisons:\n- **YARG** supports vocals and pro keys as instruments, has a Rock Band inspired art style, a huge setlist of both officially released songs by the setlist team as well as the community, and is open source for development purposes.\n- **Clone Hero** supports online multiplayer, six-fret (GHL) guitar support, and Guitar Hero inspired art style, and its own separate official setlist of songs.\n- **RB3DX**, **GHWTDE**, and other mods/expansions of official games are the closest that you can get to having the "classic game experience", as well as (depending on the mod) supporting consoles, something that YARG and Clone Hero can\'t do.\n\nWe\'re not here to hate or cause wars with other games and communities. At the end of the day, it\'s a niche subgenre of rhythm games, and we need to collaborate to get it as great as it can be. ❤️');
	},
};