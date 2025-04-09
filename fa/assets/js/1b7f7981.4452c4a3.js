"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["57968"],{85333:function(e,n,i){i.r(n),i.d(n,{default:()=>d,frontMatter:()=>a,metadata:()=>t,assets:()=>r,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"scripting/functions/ChangeVehiclePaintjob","title":"ChangeVehiclePaintjob","description":"Change a vehicle\'s paintjob.","source":"@site/docs/scripting/functions/ChangeVehiclePaintjob.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ChangeVehiclePaintjob","permalink":"/fa/docs/scripting/functions/ChangeVehiclePaintjob","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ChangeVehiclePaintjob.md","tags":[{"inline":true,"label":"vehicle","permalink":"/fa/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"ChangeVehiclePaintjob","sidebar_label":"ChangeVehiclePaintjob","description":"Change a vehicle\'s paintjob.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"ChangeVehicleColours","permalink":"/fa/docs/scripting/functions/ChangeVehicleColours"},"next":{"title":"ChatTextReplacementToggled","permalink":"/fa/docs/scripting/functions/ChatTextReplacementToggled"}}'),l=i("85893"),s=i("50065");let a={title:"ChangeVehiclePaintjob",sidebar_label:"ChangeVehiclePaintjob",description:"Change a vehicle's paintjob.",tags:["vehicle"]},c=void 0,r={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["Change a vehicle's paintjob (for plain colors see ",(0,l.jsx)(n.a,{href:"ChangeVehicleColor",children:"ChangeVehicleColor"}),")."]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vehicleid"}),(0,l.jsx)(n.td,{children:"The ID of the vehicle to change the paintjob of."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"paintjob"}),(0,l.jsxs)(n.td,{children:["The ID of the ",(0,l.jsx)(n.a,{href:"../resources/paintjobs",children:"Paintjob"})," to apply. Use 3 to remove a paintjob."]})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:["This function always returns ",(0,l.jsx)(n.strong,{children:"true"})," (success), even if the vehicle passed is not created."]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"new rand = random(3); // Will either be 0 1 or 2 (all valid)\nnew vehicleid = GetPlayerVehicleID(playerid);\n\nChangeVehicleColor(vehicleid, 1, 1); // making sure it is white for better result\nChangeVehiclePaintjob(vehicleid, rand); // changes the paintjob of the player's current vehicle to a random one\n"})}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsxs)(n.admonition,{type:"warning",children:[(0,l.jsx)(n.p,{children:"If vehicle's color is black, paintjob may not be visible. Better to make vehicle white before applying painjob by using"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"ChangeVehicleColor(vehicleid, 1, 1);\n"})})]}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetVehiclePaintjob",children:"GetVehiclePaintjob"}),": Gets the vehicle's paintjob id."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"ChangeVehicleColor",children:"ChangeVehicleColor"}),": Set the color of a vehicle."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../callbacks/OnVehiclePaintjob",children:"OnVehiclePaintjob"}),": Called when a vehicle's paintjob is changed."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"../resources/paintjobs",children:"Vehicle Paintjob IDs"})}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return a}});var t=i(67294);let l={},s=t.createContext(l);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);