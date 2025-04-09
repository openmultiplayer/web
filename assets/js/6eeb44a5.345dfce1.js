"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["31789"],{36531:function(e,r,l){l.r(r),l.d(r,{default:()=>h,frontMatter:()=>s,metadata:()=>a,assets:()=>c,toc:()=>d,contentTitle:()=>i});var a=JSON.parse('{"id":"scripting/callbacks/OnPlayerStreamIn","title":"OnPlayerStreamIn","description":"This callback is called when a player is streamed by some other player\'s client.","source":"@site/docs/scripting/callbacks/OnPlayerStreamIn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerStreamIn","permalink":"/docs/scripting/callbacks/OnPlayerStreamIn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerStreamIn.md","tags":[{"inline":true,"label":"player","permalink":"/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerStreamIn","sidebar_label":"OnPlayerStreamIn","description":"This callback is called when a player is streamed by some other player\'s client.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerStateChange","permalink":"/docs/scripting/callbacks/OnPlayerStateChange"},"next":{"title":"OnPlayerStreamOut","permalink":"/docs/scripting/callbacks/OnPlayerStreamOut"}}'),t=l("85893"),n=l("50065");let s={title:"OnPlayerStreamIn",sidebar_label:"OnPlayerStreamIn",description:"This callback is called when a player is streamed by some other player's client.",tags:["player"]},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{TipNPCCallbacks:l}=r;return l||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:"This callback is called when a player is streamed by some other player's client."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"playerid"}),(0,t.jsx)(r.td,{children:"The ID of the player who has been streamed."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"forplayerid"}),(0,t.jsx)(r.td,{children:"The ID of the player that streamed the other player in."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(r.p,{children:"It is always called first in filterscripts."}),"\n",(0,t.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:'public OnPlayerStreamIn(playerid, forplayerid)\n{\n    new string[40];\n    format(string, sizeof(string), "Player %d is now streamed in for you.", playerid);\n    SendClientMessage(forplayerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(l,{}),"\n",(0,t.jsx)(r.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,t.jsx)(r.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"OnPlayerStreamOut",children:"OnPlayerStreamOut"}),": This callback is called when a player streams out for another player."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"OnPlayerStreamOut",children:"OnActorStreamIn"}),": This callback is called when an actor is streamed in by a player."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"OnVehicleStreamIn",children:"OnVehicleStreamIn"}),": This callback is called when a vehicle streams in for a player."]}),"\n"]})]})}function h(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,r,l){l.d(r,{Z:function(){return i},a:function(){return s}});var a=l(67294);let t={},n=a.createContext(t);function s(e){let r=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(n.Provider,{value:r},e.children)}}}]);