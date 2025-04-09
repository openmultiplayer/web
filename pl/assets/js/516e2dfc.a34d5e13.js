"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["52574"],{24660:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/SetPlayerFacingAngle","title":"SetPlayerFacingAngle","description":"Set a player\'s facing angle (Z rotation).","source":"@site/docs/scripting/functions/SetPlayerFacingAngle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerFacingAngle","permalink":"/pl/docs/scripting/functions/SetPlayerFacingAngle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerFacingAngle.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerFacingAngle","sidebar_label":"SetPlayerFacingAngle","description":"Set a player\'s facing angle (Z rotation).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerDrunkLevel","permalink":"/pl/docs/scripting/functions/SetPlayerDrunkLevel"},"next":{"title":"SetPlayerFightingStyle","permalink":"/pl/docs/scripting/functions/SetPlayerFightingStyle"}}'),r=t("85893"),l=t("50065");let a={title:"SetPlayerFacingAngle",sidebar_label:"SetPlayerFacingAngle",description:"Set a player's facing angle (Z rotation).",tags:["player"]},s=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Set a player's facing angle (Z rotation)."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player to set the facing angle of."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":angle"]}),(0,r.jsx)(n.td,{children:"The angle the player should face."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"false"})," - The function failed to execute. The player specified does not exist."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"SetPlayerFacingAngle(playerid, 0.0); //Player faces north\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"        north (0)\n           |\n(90) west-   -east (270)      (Good way to remember: Never Eat Shredded Wheat)\n           |\n        south (180)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Angles are reversed in GTA",":SA","; 90 degrees would be East in the real world, but in GTA",":SA"," 90 degrees is in fact West. North and South are still 0/360 and 180. To convert this, simply do 360 - angle."]})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetPlayerFacingAngle",children:"GetPlayerFacingAngle"}),": Check where a player is facing."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetPlayerRotationQuat",children:"GetPlayerRotationQuat"}),": Get the quaternion rotation of a player."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetPlayerPos",children:"SetPlayerPos"}),": Set a player's position."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return a}});var i=t(67294);let r={},l=i.createContext(r);function a(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);