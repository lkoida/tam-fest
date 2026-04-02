import settings from './settings.json' with {type: 'json'};
import {menuBuild} from "./menu-build.js";
import {djTeamBuild} from "./dj-team-build.js";
import "./dialog-manager.js"


menuBuild(settings.menu);
djTeamBuild(settings.dj)

const button = document.querySelector('.print-button');
button.addEventListener('click', () => {
   window.print()
})
