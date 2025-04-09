"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["35336"],{23803:function(e,t,r){r.r(t),r.d(t,{default:()=>p,frontMatter:()=>s,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>l});var n=JSON.parse('{"id":"scripting/functions/StartRecordingPlayerData","title":"StartRecordingPlayerData","description":"Starts recording a player\'s movements to a file, which can then be reproduced by an NPC.","source":"@site/docs/scripting/functions/StartRecordingPlayerData.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/StartRecordingPlayerData","permalink":"/de/docs/scripting/functions/StartRecordingPlayerData","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/StartRecordingPlayerData.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"}],"version":"current","frontMatter":{"title":"StartRecordingPlayerData","sidebar_label":"StartRecordingPlayerData","description":"Starts recording a player\'s movements to a file, which can then be reproduced by an NPC.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"StartRecordingPlayback","permalink":"/de/docs/scripting/functions/StartRecordingPlayback"},"next":{"title":"StopAudioStreamForPlayer","permalink":"/de/docs/scripting/functions/StopAudioStreamForPlayer"}}'),a=r("85893"),i=r("50065");let s={title:"StartRecordingPlayerData",sidebar_label:"StartRecordingPlayerData",description:"Starts recording a player's movements to a file, which can then be reproduced by an NPC.",tags:["player"]},l=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function o(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Starts recording a player's movements to a file, which can then be reproduced by an NPC."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The ID of the player to record."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["PLAYER_RECORDING_TYPE",":recordType"]}),(0,a.jsxs)(t.td,{children:["The ",(0,a.jsx)(t.a,{href:"../resources/recordtypes",children:"type"})," of recording."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"const recordFile[]"}),(0,a.jsx)(t.td,{children:"The name of the file which will hold the recorded data. It will be saved in the scriptfiles directory, with an automatically added .rec extension, you will need to move the file to npcmodes/recordings to use for playback."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'if (!strcmp("/recordme", cmdtext))\n{\n    if (GetPlayerState(playerid) == PLAYER_STATE_ONFOOT)\n    {\n        StartRecordingPlayerData(playerid, PLAYER_RECORDING_TYPE_ONFOOT, "MyFile");\n    }\n    else if (GetPlayerState(playerid) == PLAYER_STATE_DRIVER)\n    {\n        StartRecordingPlayerData(playerid, PLAYER_RECORDING_TYPE_DRIVER, "MyFile");\n    }\n    SendClientMessage(playerid, 0xFFFFFFFF, "All your movements are now being recorded!");\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"StopRecordingPlayerData",children:"StopRecordingPlayerData"}),": Stops recording player data."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"../resources/recordtypes",children:"Record Types"})}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return s}});var n=r(67294);let a={},i=n.createContext(a);function s(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);