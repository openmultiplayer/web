"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["7544"],{18337:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"scripting/functions/IsPlayerStreamedIn","title":"IsPlayerStreamedIn","description":"Checks if a player is streamed in another player\'s client.","source":"@site/docs/scripting/functions/IsPlayerStreamedIn.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerStreamedIn","permalink":"/de/docs/scripting/functions/IsPlayerStreamedIn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsPlayerStreamedIn.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"}],"version":"current","frontMatter":{"title":"IsPlayerStreamedIn","sidebar_label":"IsPlayerStreamedIn","description":"Checks if a player is streamed in another player\'s client.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerSpawned","permalink":"/de/docs/scripting/functions/IsPlayerSpawned"},"next":{"title":"IsPlayerTeleportAllowed","permalink":"/de/docs/scripting/functions/IsPlayerTeleportAllowed"}}'),t=n("85893"),a=n("50065");let l={title:"IsPlayerStreamedIn",sidebar_label:"IsPlayerStreamedIn",description:"Checks if a player is streamed in another player's client.",tags:["player"]},i=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:"Checks if a player is streamed in another player's client."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"playerid"}),(0,t.jsx)(r.td,{children:"The ID of the player to check is streamed in."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"forplayerid"}),(0,t.jsx)(r.td,{children:"The ID of the player to check if playerid is streamed in for."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"true"})," - The player is streamed in."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"false"})," - The player is not streamed in."]}),"\n",(0,t.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:'if (IsPlayerStreamedIn(playerid, 0))\n{\n	SendClientMessage(playerid, -1, "ID 0 can see you.");\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(r.admonition,{type:"tip",children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"SA-MP server:"})," Players stream out if they are more than 200.0 meters away (see ",(0,t.jsx)(r.a,{href:"../../server/server.cfg",children:"server.cfg"})," - ",(0,t.jsx)(r.strong,{children:"stream_distance"}),")"]}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"open.mp server:"})," Players stream out if they are more than 200.0 meters away (see ",(0,t.jsx)(r.a,{href:"../../server/config.json",children:"config.json"})," - ",(0,t.jsx)(r.strong,{children:"network.stream_radius"}),")"]})]}),"\n",(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsx)(r.p,{children:"Players aren't streamed in on their own client, so if playerid is the same as forplayerid it will return false!"})}),"\n",(0,t.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"IsActorStreamedIn",children:"IsActorStreamedIn"}),": Checks if an actor is streamed in for a player."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"IsVehicleStreamedIn",children:"IsVehicleStreamedIn"}),": Checks if a vehicle is streamed in for a player."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"../callbacks/OnPlayerStreamIn",children:"OnPlayerStreamIn"}),": Called when a player streams in for another player."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"../callbacks/OnPlayerStreamOut",children:"OnPlayerStreamOut"}),": Called when a player streams out for another player."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"../callbacks/OnVehicleStreamIn",children:"OnVehicleStreamIn"}),": Called when a vehicle streams in for a player."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"../callbacks/OnVehicleStreamOut",children:"OnVehicleStreamOut"}),": Called when a vehicle streams out for a player."]}),"\n"]})]})}function h(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return l}});var s=n(67294);let t={},a=s.createContext(t);function l(e){let r=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);