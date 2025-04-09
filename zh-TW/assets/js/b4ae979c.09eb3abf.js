"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["14663"],{52038:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>a});var i=JSON.parse('{"id":"scripting/functions/GetPlayerFightingStyle","title":"GetPlayerFightingStyle","description":"Get the fighting style the player currently using.","source":"@site/docs/scripting/functions/GetPlayerFightingStyle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerFightingStyle","permalink":"/zh-TW/docs/scripting/functions/GetPlayerFightingStyle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerFightingStyle.md","tags":[{"inline":true,"label":"player","permalink":"/zh-TW/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerFightingStyle","sidebar_label":"GetPlayerFightingStyle","description":"Get the fighting style the player currently using.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerFacingAngle","permalink":"/zh-TW/docs/scripting/functions/GetPlayerFacingAngle"},"next":{"title":"GetPlayerGhostMode","permalink":"/zh-TW/docs/scripting/functions/GetPlayerGhostMode"}}'),l=n("85893"),r=n("50065");let s={title:"GetPlayerFightingStyle",sidebar_label:"GetPlayerFightingStyle",description:"Get the fighting style the player currently using.",tags:["player"]},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function o(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Get the fighting style the player currently using."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of the player to get the fighting style of."})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(t.p,{children:["The ID of the ",(0,l.jsx)(t.a,{href:"../resources/fightingstyles",children:"fighting style"})," of the player."]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/fightstyle", true))\n    {\n        new string[64];\n\n        new FIGHT_STYLE:style = GetPlayerFightingStyle(playerid);\n        new styleName[11];\n\n        switch (style)\n        {\n            case FIGHT_STYLE_NORMAL:\n            {\n                styleName = "normal";\n            }\n            case FIGHT_STYLE_BOXING:\n            {\n                styleName = "boxing";\n            }\n            case FIGHT_STYLE_KUNGFU:\n            {\n                styleName = "kungfu";\n            }\n            case FIGHT_STYLE_KNEEHEAD:\n            {\n                styleName = "kneehead";\n            }\n            case FIGHT_STYLE_GRABKICK:\n            {\n                styleName = "grabkick";\n            }\n            case FIGHT_STYLE_ELBOW:\n            {\n                styleName = "elbow";\n            }\n        }\n        \n        format(string, sizeof(string), "You are using %s fighting style!", styleName);\n        SendClientMessage(playerid, 0xFFFFFFAA, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetPlayerFightingStyle",children:"SetPlayerFightingStyle"}),": Set a player's fighting style."]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"../resources/fightingstyles",children:"Fighting Styles"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return s}});var i=n(67294);let l={},r=i.createContext(l);function s(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);