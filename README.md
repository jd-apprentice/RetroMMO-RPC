# RetroMMO ⚔️

RetroMMO is an online role-playing game in the early stages of development. It pairs the core game mechanics of classic JRPGs such as Dragon Quest and Final Fantasy with the format of a modern MMO.
RetroMMO® is created by Evan Norton

- Play the game [Here] ⚔️

## Creating the RPC

- API updates every 5 minutes
- RPC updates every 5 minutes to match the API
- Remaining time in the RPC is for knowing when is going to update
- Below an example of how it works

<img src="https://cdn.discordapp.com/attachments/875262629516546089/881755635815968820/unknown.png">

### Create a Discord APP 🖥️

- Go to [DeveloperPortal]

<img src="https://i.imgur.com/BvHi9G4.png">

### Name and ID 👀

- Name the APP Retro MMO so it shows in your discord activity like that and copy the ID were gonna need it later on

<img src="https://i.imgur.com/CJBvNwL.png">

[DeveloperPortal]: https://discord.com/developers/applications
[Here]: https://retro-mmo.com/

### Assets

- Go to the Rich Presence apart then Art Assets

<img src="https://i.imgur.com/uX87Lrp.png">

- Inside there now we must add the logo for the RPC, add an image with the name "logo" (I already save the image you have to use inside the img folder)

<img src="https://i.imgur.com/aeZazjR.png">

### Files to config

- Now we go to the folder and modify/create an .env file and we paste the ID we copied earlier there
- Should be something like: applicationID=123456789012345678

<img src="https://i.imgur.com/kCe8Nrc.png">

- After that we need to change the username inside the config.json

<img src="https://i.imgur.com/p5uVG6K.png">

- Save changes and we are done! now open the RetroMMO_RPC.exe file
