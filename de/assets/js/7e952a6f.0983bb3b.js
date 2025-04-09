"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["35733"],{28177:function(e,i,l){l.r(i),l.d(i,{default:()=>o,frontMatter:()=>a,metadata:()=>t,assets:()=>r,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"scripting/callbacks/OnVehicleDeath","title":"OnVehicleDeath","description":"This callback is called when a vehicle is destroyed - either by exploding or becoming submerged in water.","source":"@site/docs/scripting/callbacks/OnVehicleDeath.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleDeath","permalink":"/de/docs/scripting/callbacks/OnVehicleDeath","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnVehicleDeath.md","tags":[{"inline":true,"label":"vehicle","permalink":"/de/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleDeath","sidebar_label":"OnVehicleDeath","description":"This callback is called when a vehicle is destroyed - either by exploding or becoming submerged in water.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehicleDamageStatusUpdate","permalink":"/de/docs/scripting/callbacks/OnVehicleDamageStatusUpdate"},"next":{"title":"OnVehicleMod","permalink":"/de/docs/scripting/callbacks/OnVehicleMod"}}'),n=l("85893"),s=l("50065");let a={title:"OnVehicleDeath",sidebar_label:"OnVehicleDeath",description:"This callback is called when a vehicle is destroyed - either by exploding or becoming submerged in water.",tags:["vehicle"]},c=void 0,r={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(i.p,{children:"This callback is called when a vehicle is destroyed - either by exploding or becoming submerged in water."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Name"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"vehicleid"}),(0,n.jsx)(i.td,{children:"The ID of the vehicle that was destroyed."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"killerid"}),(0,n.jsx)(i.td,{children:"The ID of the player that reported (synced) the vehicle's destruction (name is misleading). Generally the driver or a passenger (if any) or the closest player."})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(i.p,{children:"It is always called first in filterscripts."}),"\n",(0,n.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",children:'public OnVehicleDeath(vehicleid, killerid)\n{\n    new string[64];\n    format(string, sizeof(string), "Vehicle %i was destroyed. Reported by player %i.", vehicleid, killerid);\n    SendClientMessageToAll(0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(i.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"This callback will also be called when a vehicle enters water, but the vehicle can be saved from destruction by teleportation or driving out (if only partially submerged)."}),"\n",(0,n.jsx)(i.li,{children:"The callback won't be called a second time, and the vehicle may disappear when the driver exits, or after a short time."}),"\n"]})}),"\n",(0,n.jsx)(i.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,n.jsx)(i.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"OnVehicleSpawn",children:"OnVehicleSpawn"}),": This callback is called when a vehicle respawns."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsx)(i.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../functions/SetVehicleHealth",children:"SetVehicleHealth"}),": Set the health of a vehicle."]}),"\n"]})]})}function o(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},50065:function(e,i,l){l.d(i,{Z:function(){return c},a:function(){return a}});var t=l(67294);let n={},s=t.createContext(n);function a(e){let i=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);