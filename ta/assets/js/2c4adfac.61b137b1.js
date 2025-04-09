"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["15838"],{8684:function(e,n,l){l.r(n),l.d(n,{default:()=>d,frontMatter:()=>a,metadata:()=>i,assets:()=>r,toc:()=>h,contentTitle:()=>c});var i=JSON.parse('{"id":"scripting/callbacks/OnVehicleRespray","title":"OnVehicleRespray","description":"This callback is called when a player exits a mod shop, even if the colors weren\'t changed.","source":"@site/docs/scripting/callbacks/OnVehicleRespray.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleRespray","permalink":"/ta/docs/scripting/callbacks/OnVehicleRespray","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnVehicleRespray.md","tags":[{"inline":true,"label":"vehicle","permalink":"/ta/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleRespray","sidebar_label":"OnVehicleRespray","description":"This callback is called when a player exits a mod shop, even if the colors weren\'t changed.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehiclePaintjob","permalink":"/ta/docs/scripting/callbacks/OnVehiclePaintjob"},"next":{"title":"OnVehicleSirenStateChange","permalink":"/ta/docs/scripting/callbacks/OnVehicleSirenStateChange"}}'),s=l("85893"),t=l("50065");let a={title:"OnVehicleRespray",sidebar_label:"OnVehicleRespray",description:"This callback is called when a player exits a mod shop, even if the colors weren't changed.",tags:["vehicle"]},c=void 0,r={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This callback is called when a player exits a mod shop, even if the colors weren't changed. Watch out, the name is ambiguous, Pay 'n' Spray shops don't call this callback."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"The ID of the player that is driving the vehicle."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vehicleid"}),(0,s.jsx)(n.td,{children:"The ID of the vehicle that was resprayed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"color1"}),(0,s.jsx)(n.td,{children:"The color that the vehicle's primary color was changed to."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"color2"}),(0,s.jsx)(n.td,{children:"The color that the vehicle's secondary color was changed to."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"It is always called first in gamemode so returning 0 there also blocks other filterscripts from processing it."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnVehicleRespray(playerid, vehicleid, color1, color2)\n{\n    new string[48];\n    format(string, sizeof(string), "You resprayed vehicle %d to colors %d and %d!", vehicleid, color1, color2);\n    SendClientMessage(playerid, COLOR_GREEN, string);\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"This callback is not called by ChangeVehicleColor. Misleadingly, this callback is not called for pay 'n' spray (only modshops)."}),(0,s.jsxs)(n.p,{children:["Fix here: ",(0,s.jsx)(n.a,{href:"http://pastebin.com/G81da7N1",children:"http://pastebin.com/G81da7N1"})]})]}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"Known Bug(s):"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Previewing a component inside a mod shop might call this callback."}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,s.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"OnVehiclePaintjob",children:"OnVehiclePaintjob"}),": This callback is called when a vehicle's paintjob is changed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"OnVehicleMod",children:"OnVehicleMod"}),": This callback is called when a vehicle is modded."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"OnEnterExitModShop",children:"OnEnterExitModShop"}),": This callback is called when a vehicle enters or exits a mod shop."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../functions/ChangeVehicleColor",children:"ChangeVehicleColor"}),": Set the color of a vehicle."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../functions/ChangeVehiclePaintjob",children:"ChangeVehiclePaintjob"}),": Change the paintjob on a vehicle."]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,n,l){l.d(n,{Z:function(){return c},a:function(){return a}});var i=l(67294);let s={},t=i.createContext(s);function a(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);