"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["50019"],{21984:function(e,t,n){n.r(t),n.d(t,{default:()=>o,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"scripting/functions/GetPlayerVehicleSeat","title":"GetPlayerVehicleSeat","description":"Find out which seat a player is in.","source":"@site/docs/scripting/functions/GetPlayerVehicleSeat.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerVehicleSeat","permalink":"/fa/docs/scripting/functions/GetPlayerVehicleSeat","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerVehicleSeat.md","tags":[{"inline":true,"label":"player","permalink":"/fa/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/fa/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetPlayerVehicleSeat","sidebar_label":"GetPlayerVehicleSeat","description":"Find out which seat a player is in.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerVehicleID","permalink":"/fa/docs/scripting/functions/GetPlayerVehicleID"},"next":{"title":"GetPlayerVelocity","permalink":"/fa/docs/scripting/functions/GetPlayerVelocity"}}'),i=n("85893"),s=n("50065");let l={title:"GetPlayerVehicleSeat",sidebar_label:"GetPlayerVehicleSeat",description:"Find out which seat a player is in.",tags:["player","vehicle"]},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Find out which seat a player is in."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player you want to get the seat of."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"The ID of the seat the player is in."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"-1"})," is not in vehicle, ",(0,i.jsx)(t.strong,{children:"0"})," is the driver, ",(0,i.jsx)(t.strong,{children:"1"})," is the front passenger, and ",(0,i.jsx)(t.strong,{children:"2"})," & ",(0,i.jsx)(t.strong,{children:"3"})," are the rear passengers."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/myseat", true) == 0)\n    {\n        new\n            playerSeat = GetPlayerVehicleSeat(playerid);\n\n        // How you can discard of your information.\n        if (playerSeat == 128)\n        {\n            return SendClientMessage(playerid, 0xFFFFFFFF, "An error has prevented us from returning the seat ID.");\n        }\n\n        new\n            string[24];\n\n        format(string, sizeof(string), "Your seat: %i", playerSeat);\n        SendClientMessage(playerid, 0xFFFFFFFF, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"ID"}),(0,i.jsx)(t.th,{children:"Seat"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"Driver"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"Front passenger"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"Back-left passenger"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3"}),(0,i.jsx)(t.td,{children:"Back-right passenger"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4+"}),(0,i.jsx)(t.td,{children:"Passenger seats (coach etc.)"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerVehicleID",children:"GetPlayerVehicleID"}),": Get the ID of the vehicle the player is in."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"PutPlayerInVehicle",children:"PutPlayerInVehicle"}),": Put a player in a vehicle."]}),"\n"]})]})}function o(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var r=n(67294);let i={},s=r.createContext(i);function l(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);