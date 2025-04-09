"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["30907"],{34216:function(e,t,l){l.r(t),l.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/callbacks/OnVehicleStreamOut","title":"OnVehicleStreamOut","description":"This callback is called when a vehicle is streamed out for a player\'s client (it\'s so far away that they can\'t see it).","source":"@site/docs/scripting/callbacks/OnVehicleStreamOut.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleStreamOut","permalink":"/it/docs/scripting/callbacks/OnVehicleStreamOut","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnVehicleStreamOut.md","tags":[{"inline":true,"label":"vehicle","permalink":"/it/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleStreamOut","sidebar_label":"OnVehicleStreamOut","description":"This callback is called when a vehicle is streamed out for a player\'s client (it\'s so far away that they can\'t see it).","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehicleStreamIn","permalink":"/it/docs/scripting/callbacks/OnVehicleStreamIn"},"next":{"title":"AddCharModel","permalink":"/it/docs/scripting/functions/AddCharModel"}}'),n=l("85893"),a=l("50065");let r={title:"OnVehicleStreamOut",sidebar_label:"OnVehicleStreamOut",description:"This callback is called when a vehicle is streamed out for a player's client (it's so far away that they can't see it).",tags:["vehicle"]},s=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components},{TipNPCCallbacks:l}=t;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"This callback is called when a vehicle is streamed out for a player's client (it's so far away that they can't see it)."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vehicleid"}),(0,n.jsx)(t.td,{children:"The ID of the vehicle that streamed out."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"forplayerid"}),(0,n.jsx)(t.td,{children:"The ID of the player who is no longer streaming the vehicle."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"It is always called first in filterscripts."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'public OnVehicleStreamOut(vehicleid, forplayerid)\n{\n    new string[48];\n    format(string, sizeof(string), "Your client is no longer streaming vehicle %d", vehicleid);\n    SendClientMessage(forplayerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(l,{}),"\n",(0,n.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"OnVehicleStreamIn",children:"OnVehicleStreamIn"}),": This callback is called when a vehicle streams in for a player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"OnPlayerStreamIn",children:"OnPlayerStreamIn"}),": This callback is called when a player streams in for another player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"OnPlayerStreamOut",children:"OnPlayerStreamOut"}),": This callback is called when a player streams out for another player."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return s},a:function(){return r}});var i=l(67294);let n={},a=i.createContext(n);function r(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);