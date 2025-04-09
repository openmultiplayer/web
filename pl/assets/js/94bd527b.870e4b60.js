"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["72368"],{13184:function(e,r,a){a.r(r),a.d(r,{default:()=>p,frontMatter:()=>s,metadata:()=>l,assets:()=>c,toc:()=>d,contentTitle:()=>i});var l=JSON.parse('{"id":"scripting/callbacks/OnPlayerStreamOut","title":"OnPlayerStreamOut","description":"This callback is called when a player is streamed out from some other player\'s client.","source":"@site/docs/scripting/callbacks/OnPlayerStreamOut.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerStreamOut","permalink":"/pl/docs/scripting/callbacks/OnPlayerStreamOut","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerStreamOut.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerStreamOut","sidebar_label":"OnPlayerStreamOut","description":"This callback is called when a player is streamed out from some other player\'s client.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerStreamIn","permalink":"/pl/docs/scripting/callbacks/OnPlayerStreamIn"},"next":{"title":"OnPlayerTakeDamage","permalink":"/pl/docs/scripting/callbacks/OnPlayerTakeDamage"}}'),t=a("85893"),n=a("50065");let s={title:"OnPlayerStreamOut",sidebar_label:"OnPlayerStreamOut",description:"This callback is called when a player is streamed out from some other player's client.",tags:["player"]},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{TipNPCCallbacks:a}=r;return a||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:"This callback is called when a player is streamed out from some other player's client."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"playerid"}),(0,t.jsx)(r.td,{children:"The player who has been destreamed."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"forplayerid"}),(0,t.jsx)(r.td,{children:"The player who has destreamed the other player."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(r.p,{children:"It is always called first in filterscripts."}),"\n",(0,t.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:'public OnPlayerStreamOut(playerid, forplayerid)\n{\n    new string[80];\n    format(string, sizeof(string), "Your computer has just unloaded player ID %d", playerid);\n    SendClientMessage(forplayerid, 0xFF0000FF, string);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(a,{}),"\n",(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsx)(r.p,{children:"OnPlayerStreamOut is not called for both players when a player disconnects"})}),"\n",(0,t.jsx)(r.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,t.jsx)(r.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"OnPlayerStreamIn",children:"OnPlayerStreamIn"}),": This callback is called when a player streams in for another player."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"OnPlayerStreamOut",children:"OnActorStreamIn"}),": This callback is called when an actor is streamed in by a player."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"OnPlayerStreamOut",children:"OnVehicleStreamIn"}),": This callback is called when a vehicle streams in for a player."]}),"\n"]})]})}function p(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,r,a){a.d(r,{Z:function(){return i},a:function(){return s}});var l=a(67294);let t={},n=l.createContext(t);function s(e){let r=l.useContext(n);return l.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(n.Provider,{value:r},e.children)}}}]);