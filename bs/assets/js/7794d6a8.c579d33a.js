"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["62857"],{69934:function(e,l,t){t.r(l),t.d(l,{default:()=>p,frontMatter:()=>s,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/functions/GetPlayerSkillLevel","title":"GetPlayerSkillLevel","description":"Get the player skill level of a certain weapon type.","source":"@site/docs/scripting/functions/GetPlayerSkillLevel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerSkillLevel","permalink":"/bs/docs/scripting/functions/GetPlayerSkillLevel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerSkillLevel.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerSkillLevel","sidebar_label":"GetPlayerSkillLevel","description":"Get the player skill level of a certain weapon type.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerSirenState","permalink":"/bs/docs/scripting/functions/GetPlayerSirenState"},"next":{"title":"GetPlayerSkin","permalink":"/bs/docs/scripting/functions/GetPlayerSkin"}}'),i=t("85893"),r=t("50065");let s={title:"GetPlayerSkillLevel",sidebar_label:"GetPlayerSkillLevel",description:"Get the player skill level of a certain weapon type.",tags:["player"]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2}];function d(e){let l={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{VersionWarn:t}=l;return t||function(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(l.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(l.p,{children:"Get the player skill level of a certain weapon type."}),"\n",(0,i.jsxs)(l.table,{children:[(0,i.jsx)(l.thead,{children:(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.th,{children:"Name"}),(0,i.jsx)(l.th,{children:"Description"})]})}),(0,i.jsxs)(l.tbody,{children:[(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"playerid"}),(0,i.jsx)(l.td,{children:"The ID of the player."})]}),(0,i.jsxs)(l.tr,{children:[(0,i.jsxs)(l.td,{children:["WEAPONSKILL",":skill"]}),(0,i.jsxs)(l.td,{children:["The ",(0,i.jsx)(l.a,{href:"../resources/weaponskills",children:"weapon"})," to get the skill of."]})]})]})]}),"\n",(0,i.jsx)(l.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(l.p,{children:"0 - failure (invalid weapon skill)."}),"\n",(0,i.jsx)(l.p,{children:"Otherwise, it returns the skill level of the weapon type."}),"\n",(0,i.jsx)(l.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/skill", true))\n    {\n        new string[64];\n        \n        new skill = GetPlayerSkillLevel(playerid, WEAPONSKILL_PISTOL);\n\n        format(string, sizeof(string), "Your pistol skill level is %d", skill);\n        SendClientMessage(playerid, 0xFFFF00FF, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(l.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(l.admonition,{type:"warning",children:(0,i.jsxs)(l.p,{children:["The skill parameter is NOT the weapon ID, it is the skill type. Click ",(0,i.jsx)(l.a,{href:"../resources/weaponskills",children:"here"})," for a list of skill types."]})}),"\n",(0,i.jsx)(l.h1,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"SetPlayerSkillLevel",children:"SetPlayerSkillLevel"}),": Set the skill level of a certain weapon type for a player."]}),"\n"]}),"\n",(0,i.jsx)(l.h1,{id:"related-information",children:"Related Information"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"../resources/weaponskills",children:"Weapon Skills"}),": List of weapon skills that are used to set player's skill level."]}),"\n"]})]})}function p(e={}){let{wrapper:l}={...(0,r.a)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,l,t){t.d(l,{Z:function(){return a},a:function(){return s}});var n=t(67294);let i={},r=n.createContext(i);function s(e){let l=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function a(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:l},e.children)}}}]);