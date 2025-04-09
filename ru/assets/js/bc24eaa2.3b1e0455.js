"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["21348"],{7496:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>i});var s=JSON.parse('{"id":"scripting/functions/PlayAudioStreamForPlayer","title":"PlayAudioStreamForPlayer","description":"Play an \'audio stream\' for a player.","source":"@site/docs/scripting/functions/PlayAudioStreamForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayAudioStreamForPlayer","permalink":"/ru/docs/scripting/functions/PlayAudioStreamForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayAudioStreamForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/ru/docs/tags/player"}],"version":"current","frontMatter":{"title":"PlayAudioStreamForPlayer","sidebar_label":"PlayAudioStreamForPlayer","description":"Play an \'audio stream\' for a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"PauseRecordingPlayback","permalink":"/ru/docs/scripting/functions/PauseRecordingPlayback"},"next":{"title":"PlayCrimeReportForPlayer","permalink":"/ru/docs/scripting/functions/PlayCrimeReportForPlayer"}}'),n=r("85893"),a=r("50065");let l={title:"PlayAudioStreamForPlayer",sidebar_label:"PlayAudioStreamForPlayer",description:"Play an 'audio stream' for a player.",tags:["player"]},i=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Play an 'audio stream' for a player. Normal audio files also work (e.g. MP3)."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player to play the audio for."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"const url[]"}),(0,n.jsx)(t.td,{children:"The url to play. Valid formats are mp3 and ogg/vorbis. A link to a .pls (playlist) file will play that playlist."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":posX"]}),(0,n.jsx)(t.td,{children:"The X position at which to play the audio. Default 0.0. Has no effect unless usepos is set to (true)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":posY"]}),(0,n.jsx)(t.td,{children:"The Y position at which to play the audio. Default 0.0. Has no effect unless usepos is set to (true)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":posZ"]}),(0,n.jsx)(t.td,{children:"The Z position at which to play the audio. Default 0.0. Has no effect unless usepos is set to (true)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":distance"]}),(0,n.jsx)(t.td,{children:"The distance over which the audio will be heard. Has no effect unless usepos is set to (true)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["bool",":usepos"]}),(0,n.jsx)(t.td,{children:"Use the positions and distance specified. Default disabled (false)."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"false"})," - The function failed to execute. The player specified does not exist."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp("/radio", cmdtext, true) == 0)\n    {\n        PlayAudioStreamForPlayer(playerid, "http://somafm.com/tags.pls");\n        return 1;\n    }\n    if (strcmp("/radiopos", cmdtext, true) == 0)\n    {\n        new Float:x, Float:y, Float:z, Float:distance = 5.0;\n        GetPlayerPos(playerid, x, y, z);\n        PlayAudioStreamForPlayer(playerid, "http://somafm.com/tags.pls", x, y, z, distance, true);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"StopAudioStreamForPlayer",children:"StopAudioStreamForPlayer"}),": Stops the current audio stream for a player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerPlaySound",children:"PlayerPlaySound"}),": Play a sound for a player."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return l}});var s=r(67294);let n={},a=s.createContext(n);function l(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);