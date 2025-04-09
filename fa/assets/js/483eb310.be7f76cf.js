"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["93004"],{33261:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>i,toc:()=>o,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/callbacks/OnActorStreamOut","title":"OnActorStreamOut","description":"This callback is called when an actor is streamed out by a player\'s client.","source":"@site/docs/scripting/callbacks/OnActorStreamOut.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnActorStreamOut","permalink":"/fa/docs/scripting/callbacks/OnActorStreamOut","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnActorStreamOut.md","tags":[{"inline":true,"label":"actor","permalink":"/fa/docs/tags/actor"}],"version":"current","frontMatter":{"title":"OnActorStreamOut","sidebar_label":"OnActorStreamOut","description":"This callback is called when an actor is streamed out by a player\'s client.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"OnActorStreamIn","permalink":"/fa/docs/scripting/callbacks/OnActorStreamIn"},"next":{"title":"OnClientCheckResponse","permalink":"/fa/docs/scripting/callbacks/OnClientCheckResponse"}}'),a=r("85893"),l=r("50065");let s={title:"OnActorStreamOut",sidebar_label:"OnActorStreamOut",description:"This callback is called when an actor is streamed out by a player's client.",tags:["actor"]},c=void 0,i={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{TipNPCCallbacks:r,VersionWarn:n}=t;return r||u("TipNPCCallbacks",!0),n||u("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{name:"callback",version:"SA-MP 0.3.7"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"This callback is called when an actor is streamed out by a player's client."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"actorid"}),(0,a.jsx)(t.td,{children:"The ID of the actor that has been streamed out for the player."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"forplayerid"}),(0,a.jsx)(t.td,{children:"The ID of the player that streamed the actor out."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"It is always called first in filterscripts."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'public OnActorStreamOut(actorid, forplayerid)\n{\n    new string[48];\n    format(string, sizeof(string), "Actor %d is now streamed out for you.", actorid);\n    SendClientMessage(forplayerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(r,{}),"\n",(0,a.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,a.jsx)(t.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"OnActorStreamIn",children:"OnActorStreamIn"}),": This callback is called when an actor is streamed in by a player's client."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}function u(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return s}});var n=r(67294);let a={},l=n.createContext(a);function s(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);