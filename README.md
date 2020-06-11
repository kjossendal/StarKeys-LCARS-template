<img src="./public/scars-img.png" width="300" >


New Star Trek LCARS themed MFD for Star Citizen 3.9.1
NOTES:

- The keybinding for 'HELMET' button needs to be set in game to the F9 key in order to work. There is no default binding for this action as of 3.9.1.

- If you've modified your keybindings, you'll need to switch back to the default template in the game settings.

- The source code is available on GitHub at https://github.com/Balintataw/StarKeys-LCARS-template

- This panel is a work in progress. If you find any issues with it, please find us on discord to get assistance at https://discord.com/invite/VSBJVS5


### For Devs

- To run, clone the repo and run `npm install && npm run start`

- The `build_include` dir contains files necessary to upload to Starkeys website. You can edit the macro file here and the conf file.

- To package the app for uploading run `npm run zip`. This will build and generate a zip file with all the requirements for uploading.