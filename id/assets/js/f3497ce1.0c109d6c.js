"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["49077"],{29525:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"scripting/functions/RemovePlayerMapIcon","title":"RemovePlayerMapIcon","description":"Removes a map icon that was set earlier for a player using SetPlayerMapIcon.","source":"@site/docs/scripting/functions/RemovePlayerMapIcon.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/RemovePlayerMapIcon","permalink":"/id/docs/scripting/functions/RemovePlayerMapIcon","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/RemovePlayerMapIcon.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"}],"version":"current","frontMatter":{"title":"RemovePlayerMapIcon","sidebar_label":"RemovePlayerMapIcon","description":"Removes a map icon that was set earlier for a player using SetPlayerMapIcon.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"RemovePlayerFromVehicle","permalink":"/id/docs/scripting/functions/RemovePlayerFromVehicle"},"next":{"title":"RemovePlayerWeapon","permalink":"/id/docs/scripting/functions/RemovePlayerWeapon"}}'),a=t("85893"),i=t("50065");let s={title:"RemovePlayerMapIcon",sidebar_label:"RemovePlayerMapIcon",description:"Removes a map icon that was set earlier for a player using SetPlayerMapIcon.",tags:["player"]},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Removes a map icon that was set earlier for a player using SetPlayerMapIcon."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"playerid"}),(0,a.jsx)(n.td,{children:"The ID of the player whose icon to remove."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"iconid"}),(0,a.jsx)(n.td,{children:"The ID of the icon to remove. This is the second parameter of SetPlayerMapIcon."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"false"})," - The function failed to execute."]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"SetPlayerMapIcon(playerid, 12, 2204.9468, 1986.2877, 16.7380, 52, 0);\n\n// Later on\nRemovePlayerMapIcon(playerid, 12);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/scripting/functions/SetPlayerMapIcon",children:"SetPlayerMapIcon"}),": Create a mapicon for a player."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var r=t(67294);let a={},i=r.createContext(a);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);