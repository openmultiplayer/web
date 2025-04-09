"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["81901"],{67907:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>l,metadata:()=>n,assets:()=>o,toc:()=>d,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/PlayAudioStreamForPlayer","title":"PlayAudioStreamForPlayer","description":"Play an \'audio stream\' for a player.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/PlayAudioStreamForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayAudioStreamForPlayer","permalink":"/th/docs/scripting/functions/PlayAudioStreamForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayAudioStreamForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"PlayAudioStreamForPlayer","sidebar_label":"PlayAudioStreamForPlayer","description":"Play an \'audio stream\' for a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"PauseRecordingPlayback","permalink":"/th/docs/scripting/functions/PauseRecordingPlayback"},"next":{"title":"PlayCrimeReportForPlayer","permalink":"/th/docs/scripting/functions/PlayCrimeReportForPlayer"}}'),i=r("85893"),a=r("50065");let l={title:"PlayAudioStreamForPlayer",sidebar_label:"PlayAudioStreamForPlayer",description:"Play an 'audio stream' for a player.",tags:["player"]},s=void 0,o={},d=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function c(e){let t={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"This function was added in SA-MP 0.3d and will not work in earlier versions!"})}),"\n",(0,i.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,i.jsx)(t.p,{children:"Play an 'audio stream' for a player. Normal audio files also work (e.g. MP3)."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player to play the audio for."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"url[]"}),(0,i.jsx)(t.td,{children:"The url to play. Valid formats are mp3 and ogg/vorbis. A link to a .pls (playlist) file will play that playlist."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":PosX"]}),(0,i.jsx)(t.td,{children:"The X position at which to play the audio. Default 0.0. Has no effect unless usepos is set to 1."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":PosY"]}),(0,i.jsx)(t.td,{children:"The Y position at which to play the audio. Default 0.0. Has no effect unless usepos is set to 1."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":PosZ"]}),(0,i.jsx)(t.td,{children:"The Z position at which to play the audio. Default 0.0. Has no effect unless usepos is set to 1."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":distance"]}),(0,i.jsx)(t.td,{children:"The distance over which the audio will be heard. Has no effect unless usepos is set to 1."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"usepos"}),(0,i.jsx)(t.td,{children:"Use the positions and distance specified. Default disabled (0)."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,i.jsx)(t.p,{children:"1: The function was executed successfully."}),"\n",(0,i.jsx)(t.p,{children:"0: The function failed to execute. The player specified does not exist."}),"\n",(0,i.jsx)(t.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp("/radio", cmdtext, true) == 0)\n    {\n        PlayAudioStreamForPlayer(playerid, "http://somafm.com/tags.pls");\n        return 1;\n    }\n    if (strcmp("/radiopos", cmdtext, true) == 0)\n    {\n        new Float:X, Float:Y, Float:Z, Float:Distance = 5.0;\n        GetPlayerPos(playerid, X, Y, Z);\n    PlayAudioStreamForPlayer(playerid, "http://somafm.com/tags.pls", X, Y, Z, Distance, 1);\n    return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"StopAudioStreamForPlayer: Stops the current audio stream for a player."}),"\n",(0,i.jsx)(t.li,{children:"PlayerPlaySound: Play a sound for a player."}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return l}});var n=r(67294);let i={},a=n.createContext(i);function l(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);