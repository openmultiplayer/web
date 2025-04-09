"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["49550"],{2007:function(e,l,t){t.r(l),t.d(l,{default:()=>o,frontMatter:()=>a,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/callbacks/OnVehicleStreamIn","title":"OnVehicleStreamIn","description":"This callback is called when a vehicle is streamed to a player\'s client.","source":"@site/docs/scripting/callbacks/OnVehicleStreamIn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleStreamIn","permalink":"/zh-TW/docs/scripting/callbacks/OnVehicleStreamIn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnVehicleStreamIn.md","tags":[{"inline":true,"label":"vehicle","permalink":"/zh-TW/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleStreamIn","sidebar_label":"OnVehicleStreamIn","description":"This callback is called when a vehicle is streamed to a player\'s client.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehicleSpawn","permalink":"/zh-TW/docs/scripting/callbacks/OnVehicleSpawn"},"next":{"title":"OnVehicleStreamOut","permalink":"/zh-TW/docs/scripting/callbacks/OnVehicleStreamOut"}}'),i=t("85893"),r=t("50065");let a={title:"OnVehicleStreamIn",sidebar_label:"OnVehicleStreamIn",description:"This callback is called when a vehicle is streamed to a player's client.",tags:["vehicle"]},s=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function h(e){let l={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{TipNPCCallbacks:t}=l;return t||function(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(l.p,{children:"This callback is called when a vehicle is streamed to a player's client."}),"\n",(0,i.jsxs)(l.table,{children:[(0,i.jsx)(l.thead,{children:(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.th,{children:"Name"}),(0,i.jsx)(l.th,{children:"Description"})]})}),(0,i.jsxs)(l.tbody,{children:[(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"vehicleid"}),(0,i.jsx)(l.td,{children:"The ID of the vehicle that streamed in for the player."})]}),(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"forplayerid"}),(0,i.jsx)(l.td,{children:"The ID of the player who the vehicle streamed in for."})]})]})]}),"\n",(0,i.jsx)(l.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(l.p,{children:"It is always called first in filterscripts."}),"\n",(0,i.jsx)(l.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-c",children:'public OnVehicleStreamIn(vehicleid, forplayerid)\n{\n    new string[32];\n    format(string, sizeof(string), "You can now see vehicle %d.", vehicleid);\n    SendClientMessage(forplayerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(l.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t,{}),"\n",(0,i.jsx)(l.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"OnVehicleStreamOut",children:"OnVehicleStreamOut"}),": This callback is called when a vehicle streams out for a player."]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"OnPlayerStreamIn",children:"OnPlayerStreamIn"}),": This callback is called when a player streams in for another player."]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"OnPlayerStreamOut",children:"OnPlayerStreamOut"}),": This callback is called when a player streams out for another player."]}),"\n"]})]})}function o(e={}){let{wrapper:l}={...(0,r.a)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},50065:function(e,l,t){t.d(l,{Z:function(){return s},a:function(){return a}});var n=t(67294);let i={},r=n.createContext(i);function a(e){let l=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function s(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:l},e.children)}}}]);