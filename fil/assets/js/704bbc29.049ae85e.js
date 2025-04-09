"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["60136"],{49299:function(e,l,i){i.r(l),i.d(l,{default:()=>o,frontMatter:()=>r,metadata:()=>t,assets:()=>s,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"scripting/callbacks/OnTrailerUpdate","title":"OnTrailerUpdate","description":"This callback is called when a player sent a trailer update.","source":"@site/docs/scripting/callbacks/OnTrailerUpdate.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnTrailerUpdate","permalink":"/fil/docs/scripting/callbacks/OnTrailerUpdate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnTrailerUpdate.md","tags":[{"inline":true,"label":"vehicle","permalink":"/fil/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnTrailerUpdate","sidebar_label":"OnTrailerUpdate","description":"This callback is called when a player sent a trailer update.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnScriptUnloadPlayer","permalink":"/fil/docs/scripting/callbacks/OnScriptUnloadPlayer"},"next":{"title":"OnUnoccupiedVehicleUpdate","permalink":"/fil/docs/scripting/callbacks/OnUnoccupiedVehicleUpdate"}}'),a=i("85893"),n=i("50065");let r={title:"OnTrailerUpdate",sidebar_label:"OnTrailerUpdate",description:"This callback is called when a player sent a trailer update.",tags:["vehicle"]},c=void 0,s={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){let l={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(l.p,{children:"This callback is called when a player sent a trailer update."}),"\n",(0,a.jsxs)(l.table,{children:[(0,a.jsx)(l.thead,{children:(0,a.jsxs)(l.tr,{children:[(0,a.jsx)(l.th,{children:"Name"}),(0,a.jsx)(l.th,{children:"Description"})]})}),(0,a.jsxs)(l.tbody,{children:[(0,a.jsxs)(l.tr,{children:[(0,a.jsx)(l.td,{children:"playerid"}),(0,a.jsx)(l.td,{children:"The ID of the player who sent a trailer update"})]}),(0,a.jsxs)(l.tr,{children:[(0,a.jsx)(l.td,{children:"vehicleid"}),(0,a.jsx)(l.td,{children:"The Trailer being updated"})]})]})]}),"\n",(0,a.jsx)(l.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(l.p,{children:"0 - Cancels any trailer updates from being sent to other players. Update is still sent to the updating player."}),"\n",(0,a.jsx)(l.p,{children:"1 - Processes the trailer update as normal and synchronizes it between all players."}),"\n",(0,a.jsx)(l.p,{children:"It is always called first in filterscripts."}),"\n",(0,a.jsx)(l.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-c",children:"public OnTrailerUpdate(playerid, vehicleid)\n{\n    DetachTrailerFromVehicle(GetPlayerVehicleID(playerid));\n    return 0;\n}\n"})}),"\n",(0,a.jsx)(l.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(l.admonition,{type:"warning",children:(0,a.jsx)(l.p,{children:"This callback is called very frequently per second per trailer. You should refrain from implementing intensive calculations or intensive file writing/reading operations in this callback."})}),"\n",(0,a.jsx)(l.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,a.jsx)(l.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.a,{href:"OnUnoccupiedVehicleUpdate",children:"OnUnoccupiedVehicleUpdate"}),": This callback is called when a driver-less vehicle's position is synced by a client."]}),"\n"]}),"\n",(0,a.jsx)(l.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsx)(l.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.a,{href:"../functions/GetVehicleTrailer",children:"GetVehicleTrailer"}),": Check what trailer a vehicle is pulling."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.a,{href:"../functions/IsTrailerAttachedToVehicle",children:"IsTrailerAttachedToVehicle"}),": Check if a trailer is attached to a vehicle."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.a,{href:"../functions/AttachTrailerToVehicle",children:"AttachTrailerToVehicle"}),": Attach a trailer to a vehicle."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.a,{href:"../functions/DetachTrailerFromVehicle",children:"DetachTrailerFromVehicle"}),": Detach a trailer from a vehicle."]}),"\n"]})]})}function o(e={}){let{wrapper:l}={...(0,n.a)(),...e.components};return l?(0,a.jsx)(l,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},50065:function(e,l,i){i.d(l,{Z:function(){return c},a:function(){return r}});var t=i(67294);let a={},n=t.createContext(a);function r(e){let l=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function c(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(n.Provider,{value:l},e.children)}}}]);