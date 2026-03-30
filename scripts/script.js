import settings from './settings.json' with {type: 'json'};
import {topMenuBuild} from "./top-menu-build.js";
import {djTeamBuild} from "./dj-team-build.js";


topMenuBuild(settings.menu);
djTeamBuild(settings.dj)

