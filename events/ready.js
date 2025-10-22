const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		
		// Function to update the bot’s presence text
		function updatePresence() {
			const totalMembers = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
			client.user.setActivity(`${totalMembers} members`, { type: ActivityType.Watching });
		}
		
		// Set initial presence
		updatePresence();

		// Update every 5 minutes
		setInterval(updatePresence, 5 * 60 * 1000);
	},
};