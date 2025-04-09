"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["86303"],{77555:function(e,n,a){a.r(n),a.d(n,{default:()=>p,frontMatter:()=>r,metadata:()=>l,assets:()=>s,toc:()=>o,contentTitle:()=>c});var l=JSON.parse('{"id":"scripting/callbacks/OnPlayerClickGangZone","title":"OnPlayerClickGangZone","description":"This callback is called when a player clicked a gangzone on the pause menu map (by right-clicking).","source":"@site/docs/scripting/callbacks/OnPlayerClickGangZone.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerClickGangZone","permalink":"/id/docs/scripting/callbacks/OnPlayerClickGangZone","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerClickGangZone.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/id/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"OnPlayerClickGangZone","sidebar_label":"OnPlayerClickGangZone","description":"This callback is called when a player clicked a gangzone on the pause menu map (by right-clicking).","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"OnPickupStreamOut","permalink":"/id/docs/scripting/callbacks/OnPickupStreamOut"},"next":{"title":"OnPlayerClickMap","permalink":"/id/docs/scripting/callbacks/OnPlayerClickMap"}}'),i=a("85893"),t=a("50065");let r={title:"OnPlayerClickGangZone",sidebar_label:"OnPlayerClickGangZone",description:"This callback is called when a player clicked a gangzone on the pause menu map (by right-clicking).",tags:["player","gangzone"]},c=void 0,s={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{VersionWarn:a}=n;return a||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a,{name:"callback",version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This callback is called when a player clicked a gangzone on the pause menu map (by right-clicking)."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player that clicked a gangzone"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"zoneid"}),(0,i.jsx)(n.td,{children:"The ID of the gangzone the player clicked"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"This callback does not handle returns."}),"\n",(0,i.jsx)(n.p,{children:"It is always called first in gamemode."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerClickGangZone(playerid, zoneid)\n{\n    new string[128];\n    format(string, sizeof(string), "You are click gangzone %i", zoneid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/GangZoneCreate",children:"GangZoneCreate"}),": Create a gangzone (colored radar area)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/GangZoneDestroy",children:"GangZoneDestroy"}),": Destroy a gangzone."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return c},a:function(){return r}});var l=a(67294);let i={},t=l.createContext(i);function r(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);