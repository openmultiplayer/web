"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["97219"],{59572:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>s,metadata:()=>l,assets:()=>r,toc:()=>d,contentTitle:()=>a});var l=JSON.parse('{"id":"scripting/callbacks/OnNPCEnterVehicle","title":"OnNPCEnterVehicle","description":"This callback is called when a NPC enters a vehicle.","source":"@site/docs/scripting/callbacks/OnNPCEnterVehicle.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnNPCEnterVehicle","permalink":"/ar/docs/scripting/callbacks/OnNPCEnterVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnNPCEnterVehicle.md","tags":[{"inline":true,"label":"npc","permalink":"/ar/docs/tags/npc"}],"version":"current","frontMatter":{"title":"OnNPCEnterVehicle","sidebar_label":"OnNPCEnterVehicle","description":"This callback is called when a NPC enters a vehicle.","tags":["npc"]},"sidebar":"docsSidebar","previous":{"title":"OnNPCDisconnect","permalink":"/ar/docs/scripting/callbacks/OnNPCDisconnect"},"next":{"title":"OnNPCExitVehicle","permalink":"/ar/docs/scripting/callbacks/OnNPCExitVehicle"}}'),i=t("85893"),c=t("50065");let s={title:"OnNPCEnterVehicle",sidebar_label:"OnNPCEnterVehicle",description:"This callback is called when a NPC enters a vehicle.",tags:["npc"]},a=void 0,r={},d=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This callback is called when a NPC enters a vehicle."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"vehicleid"}),(0,i.jsx)(n.td,{children:"The vehicle ID the NPC enter"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"seatid"}),(0,i.jsx)(n.td,{children:"The seatid the NPC uses"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnNPCEnterVehicle(vehicleid, seatid)\n{\n    printf("OnNPCEnterVehicle ID: %d Seat: %d", vehicleid, seatid);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"OnNPCExitVehicle",children:"OnNPCExitVehicle"}),": This callback is called when a NPC leaves a Vehicle."]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var l=t(67294);let i={},c=l.createContext(i);function s(e){let n=l.useContext(c);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);