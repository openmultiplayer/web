"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["89845"],{53051:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>a,contentTitle:()=>c});var i=JSON.parse('{"id":"scripting/functions/DestroyVehicle","title":"DestroyVehicle","description":"Destroy a vehicle.","source":"@site/docs/scripting/functions/DestroyVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DestroyVehicle","permalink":"/es/docs/scripting/functions/DestroyVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/DestroyVehicle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/es/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"DestroyVehicle","sidebar_label":"DestroyVehicle","description":"Destroy a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"DestroyPlayerPickup","permalink":"/es/docs/scripting/functions/DestroyPlayerPickup"},"next":{"title":"DetachTrailerFromVehicle","permalink":"/es/docs/scripting/functions/DetachTrailerFromVehicle"}}'),r=n("85893"),s=n("50065");let l={title:"DestroyVehicle",sidebar_label:"DestroyVehicle",description:"Destroy a vehicle.",tags:["vehicle"]},c=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Destroy a vehicle. It will disappear instantly."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vehicleid"}),(0,r.jsx)(t.td,{children:"The ID of the vehicle to destroy."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"false"})," - The function failed to execute. The vehicle does not exist."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n     if (strcmp(cmdtext, "/destroyveh", true) == 0)\n     {\n          if (IsPlayerInAnyVehicle(playerid))\n          {\n               new vehicleid = GetPlayerVehicleID(playerid);\n               DestroyVehicle(vehicleid);\n          }\n          return 1;\n     }\n     return 0;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"CreateVehicle",children:"CreateVehicle"}),": Create a vehicle."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"RemovePlayerFromVehicle",children:"RemovePlayerFromVehicle"}),": Throw a player out of their vehicle."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetVehicleToRespawn",children:"SetVehicleToRespawn"}),": Respawn a vehicle."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return l}});var i=n(67294);let r={},s=i.createContext(r);function l(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);