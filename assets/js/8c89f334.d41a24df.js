"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["56313"],{18535:function(e,l,n){n.r(l),n.d(l,{default:()=>o,frontMatter:()=>r,metadata:()=>t,assets:()=>c,toc:()=>h,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/callbacks/OnPlayerEnterVehicle","title":"OnPlayerEnterVehicle","description":"This callback is called when a player starts to enter a vehicle, meaning the player is not in vehicle yet at the time this callback is called.","source":"@site/docs/scripting/callbacks/OnPlayerEnterVehicle.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerEnterVehicle","permalink":"/docs/scripting/callbacks/OnPlayerEnterVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerEnterVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnPlayerEnterVehicle","sidebar_label":"OnPlayerEnterVehicle","description":"This callback is called when a player starts to enter a vehicle, meaning the player is not in vehicle yet at the time this callback is called.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEnterRaceCheckpoint","permalink":"/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint"},"next":{"title":"OnPlayerExitVehicle","permalink":"/docs/scripting/callbacks/OnPlayerExitVehicle"}}'),i=n("85893"),a=n("50065");let r={title:"OnPlayerEnterVehicle",sidebar_label:"OnPlayerEnterVehicle",description:"This callback is called when a player starts to enter a vehicle, meaning the player is not in vehicle yet at the time this callback is called.",tags:["player","vehicle"]},s=void 0,c={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let l={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(l.p,{children:"This callback is called when a player starts to enter a vehicle, meaning the player is not in vehicle yet at the time this callback is called."}),"\n",(0,i.jsxs)(l.table,{children:[(0,i.jsx)(l.thead,{children:(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.th,{children:"Name"}),(0,i.jsx)(l.th,{children:"Description"})]})}),(0,i.jsxs)(l.tbody,{children:[(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"playerid"}),(0,i.jsx)(l.td,{children:"ID of the player who attempts to enter a vehicle."})]}),(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"vehicleid"}),(0,i.jsx)(l.td,{children:"ID of the vehicle the player is attempting to enter."})]}),(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"ispassenger"}),(0,i.jsx)(l.td,{children:"0 if entering as driver. 1 if entering as passenger."})]})]})]}),"\n",(0,i.jsx)(l.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(l.p,{children:"It is always called first in filterscripts."}),"\n",(0,i.jsx)(l.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-c",children:'public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)\n{\n    new string[128];\n    format(string, sizeof(string), "You are entering vehicle %i", vehicleid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(l.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(l.admonition,{type:"tip",children:(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:["This callback is called when a player BEGINS to enter a vehicle, not when they HAVE entered it. See ",(0,i.jsx)(l.a,{href:"OnPlayerStateChange",children:"OnPlayerStateChange"}),"."]}),"\n",(0,i.jsx)(l.li,{children:"This callback is still called if the player is denied entry to a vehicle (e.g. it is locked or full) but only as a passenger."}),"\n"]})}),"\n",(0,i.jsx)(l.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsx)(l.p,{children:"The following callbacks might be useful, as they are related to this callback in one way or another."}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"OnPlayerExitVehicle",children:"OnPlayerExitVehicle"}),": This callback is called when a player leaves a vehicle."]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"OnPlayerStateChange",children:"OnPlayerStateChange"}),": This callback is called when a player changes state."]}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsx)(l.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"../functions/PutPlayerInVehicle",children:"PutPlayerInVehicle"}),": Put a player in a vehicle."]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"../functions/GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"}),": Check what seat a player is in."]}),"\n"]})]})}function o(e={}){let{wrapper:l}={...(0,a.a)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,l,n){n.d(l,{Z:function(){return s},a:function(){return r}});var t=n(67294);let i={},a=t.createContext(i);function r(e){let l=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function s(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:l},e.children)}}}]);