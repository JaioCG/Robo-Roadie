const { SlashCommandBuilder } = require('discord.js');

const replies = [
	'Ugh ok FINE. Just one, though. <:jelly_blue:1105705595597762590>',
	'Absolutely not.',
	'No :3',
	'Please refrain from eating gems as there are side effects, including nausea, heartburn, indigestion, upset stomach, and diarrhea.',
	'Please do not eat the gems if you are allergic to the gems.',
	'Jaden, quit telling people to eat the gems.',
	'Gems are not Gushers. Do not eat them.',
	'Gems are for admiring, not devouring. Please keep that in mind.',
	'Gem-eating is not a feature we plan to have in YARG.',
	'No, placing the gems in a blender will not give you a gem smoothie. It will probably just break your blender.',
	'The sustains are not Twizzlers. Do not eat them.',
	'In soviet YARG, gem eats you.',
	'Let\'s try to keep the "days without eating gems" streak to a maximum.',
	'Gems are ONLY for playing, not for eating.',
	'How about, instead of eating gems, you go eat a 🌭hot dog🌭?',
	'If you\'re hungry, I have a ton of recipies I can provide you that don\'t involve gems.',
	'Eating gems is scientifically proven to make you worse at YARG.',
	'They say "You are what you eat"... so I guess if you eat gems, you become a gem? Sounds painful. I wouldn\'t recommend it.',
	'Fun fact! Gems are a part of the Top 1 Allergens on the planet. So please, for your own safety, do not eat them.',
	'Even if you wanted to, they\'re 3D models. You can\'t eat those.',
	'https://tenor.com/bhEjv.gif',
	'You keep sending this command expecting a different response. It\'s still no.',
	'Sure! Just kidding, it\'s opposite day!',
	'Let\'s flip a coin and see where it lands. Heads is yes, tails is no. *flips coin*... It\'s tails.',
	'No. (that\'s Spanish for "no")'
];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gems')
		.setDescription('💎 Can you eat the YARG gems?'),

	async execute(interaction) {
		const randomReply = replies[Math.floor(Math.random() * replies.length)];
		await interaction.reply(randomReply);
	},
};