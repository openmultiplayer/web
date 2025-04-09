"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["3196"],{58608:function(e,n,l){l.r(n),l.d(n,{default:()=>p,frontMatter:()=>t,metadata:()=>a,assets:()=>s,toc:()=>o,contentTitle:()=>c});var a=JSON.parse('{"id":"scripting/callbacks/OnPlayerClickPlayerGangZone","title":"OnPlayerClickPlayerGangZone","description":"This callback is called when a player clicked a player gangzone on the pause menu map (by right-clicking).","source":"@site/docs/scripting/callbacks/OnPlayerClickPlayerGangZone.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerClickPlayerGangZone","permalink":"/sl/docs/scripting/callbacks/OnPlayerClickPlayerGangZone","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerClickPlayerGangZone.md","tags":[{"inline":true,"label":"player","permalink":"/sl/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/sl/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"OnPlayerClickPlayerGangZone","sidebar_label":"OnPlayerClickPlayerGangZone","description":"This callback is called when a player clicked a player gangzone on the pause menu map (by right-clicking).","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerClickPlayer","permalink":"/sl/docs/scripting/callbacks/OnPlayerClickPlayer"},"next":{"title":"OnPlayerClickPlayerTextDraw","permalink":"/sl/docs/scripting/callbacks/OnPlayerClickPlayerTextDraw"}}'),r=l("85893"),i=l("50065");let t={title:"OnPlayerClickPlayerGangZone",sidebar_label:"OnPlayerClickPlayerGangZone",description:"This callback is called when a player clicked a player gangzone on the pause menu map (by right-clicking).",tags:["player","gangzone"]},c=void 0,s={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:l}=n;return l||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"This callback is called when a player clicked a player gangzone on the pause menu map (by right-clicking)."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player that clicked a player gangzone"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"zoneid"}),(0,r.jsx)(n.td,{children:"The ID of the player gangzone the player clicked"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"This callback does not handle returns."}),"\n",(0,r.jsx)(n.p,{children:"It is always called first in gamemode."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnPlayerClickPlayerGangZone(playerid, zoneid)\n{\n    new string[128];\n    format(string, sizeof(string), "You are click player gangzone %i", zoneid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/CreatePlayerGangZone",children:"CreatePlayerGangZone"}),": Create a player gangzone."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/PlayerGangZoneDestroy",children:"PlayerGangZoneDestroy"}),": Destroy a player gangzone."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,l){l.d(n,{Z:function(){return c},a:function(){return t}});var a=l(67294);let r={},i=a.createContext(r);function t(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);