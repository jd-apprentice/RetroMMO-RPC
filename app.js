// Requires
const fetch = require("node-fetch");
const usuario = require("./config.json");
const link = `https://play.retro-mmo.com/users/${usuario.username}` + ".json";

// Discord
const DiscordRPC = require("discord-rpc");
const client = new DiscordRPC.Client({ transport: "ipc" });
require("dotenv").config();

// Event
(async () => {
  client.on("ready", async () => {
    let rank = 0;
    let lifetimeExperience = "";
    let username = "";

    // Fetching data
    const getData = () => {
      fetch(link)
        .then((res) => res.json())
        .then(async (json) => {
          // Setting data
          rank = await json.rank;
          lifetimeExperience = await json.lifetimeExperience;
          username = await json.username;

          await client
            .setActivity({
              // Setting the Rich Presence Activity based on what is passed in here.
              buttons: [
                {
                  label: "Play the game",
                  url: "https://retro-mmo.com/",
                },
                {
                  label: "Join Discord",
                  url: "https://discord.com/invite/bUHUKF6",
                },
              ],
              details: `Character: ${username}`,
              state: `Rank: ${rank}th - Total EXP ${lifetimeExperience}`,
              endTimestamp: new Date(Date.now() + 300000), // Remaining time until next update
              largeImageKey: "logo",
              largeImageText: "Retro MMO",
              instance: true,
            })
            // Catch errors
            .catch((err) => console.log(err));
        });
    };
    // Initializing the Rich Presence
    getData();
    console.log("Discord rich presence is now running.");
    console.log("Visit https://retro-mmo.com/ to play the game!");
  });

  // Logging in
  await client
    .login({ clientId: process.env.applicationID })
    .catch(console.error);
})();

// Update the Rich Presence every 5 minutes
setInterval(async () => {
  fetch(link)
    .then((res) => res.json())
    .then(async (json) => {
      rank = await json.rank;
      lifetimeExperience = await json.lifetimeExperience;
      username = await json.username;

      await client
        .setActivity({
          buttons: [
            {
              label: "Play the game",
              url: "https://retro-mmo.com/",
            },
            {
              label: "Join Discord",
              url: "https://discord.com/invite/bUHUKF6",
            },
          ],
          details: `Character: ${username}`,
          state: `Rank: ${rank}th - Total EXP ${lifetimeExperience}`,
          endTimestamp: new Date(Date.now() + 300000),
          largeImageKey: "logo",
          largeImageText: "Retro MMO",
          instance: true,
        })
        .catch((err) => console.log(err));
    });
}, 300000); //Setting the interval to 5 minutes
