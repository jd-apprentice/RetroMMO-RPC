# RetroMMO ⚔️

RetroMMO is an online role-playing game in the early stages of development. It pairs the core game mechanics of classic JRPGs such as Dragon Quest and Final Fantasy with the format of a modern MMO.
RetroMMO® is created by Evan Norton

- Play the game [Here] ⚔️

## Creating the RPC

- API updates every 5 minutes
- RPC updates every 5 minutes to match the API
- Remaining time in the RPC is for knowing when is going to update
- Below an example of how it works
- VirusTotal [Scan]

<img src="https://cdn.discordapp.com/attachments/875262629516546089/881755635815968820/unknown.png">

### *IMPORTANT* Installing nodejs and pkg

- Nodejs is needed to make the .exe at the end, you can downloaded from their page [Nodejs]
- Now we are going to need pkg, go to your terminal and type ```npm install -g pkg```

### Create a Discord APP 🖥️

- Go to [DeveloperPortal]

<img src="https://i.imgur.com/BvHi9G4.png">

### Name and ID 👀

- Name the APP Retro MMO so it shows in your discord activity like that and copy the ID were gonna need it later on

<img src="https://i.imgur.com/CJBvNwL.png">

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

### Build the .exe

- Now with everything configured we need to build the .exe, run the start.bat file
- Is going to create 3 files, one for each operating system, windows is the only i've been testing so you can delete the other two
- app-win.exe is what you have to run now in order to execute the retro mmo rpc, you can change the name/icon at any time

<img src="https://i.imgur.com/YQIU8ZC.png">
<img src="https://i.imgur.com/Mo5JuAy.png">

- now if you are not a user who frecuently uses nodejs you can unistall the package in your terminal typing ```npm uninstall pkg -g``` then unistalling node from your apps like a normal one

[DeveloperPortal]: https://discord.com/developers/applications
[Here]: https://retro-mmo.com/
[Scan]: https://www.virustotal.com/gui/file/e443ad0d972adace6d6e4c59cc88afcc2ed0782c7a6be856e281eb9866b58204/detection
[Nodejs]: https://nodejs.org/en/
