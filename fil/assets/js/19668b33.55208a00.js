"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["53353"],{60587:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>a,assets:()=>r,toc:()=>d,contentTitle:()=>c});var a=JSON.parse('{"id":"scripting/callbacks/OnClientCheckResponse","title":"OnClientCheckResponse","description":"Tinatawag ang callback na ito kapag nakumpleto ang request sa SendClientCheck","source":"@site/i18n/fil/docusaurus-plugin-content-docs/current/scripting/callbacks/OnClientCheckResponse.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnClientCheckResponse","permalink":"/fil/docs/scripting/callbacks/OnClientCheckResponse","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnClientCheckResponse.md","tags":[],"version":"current","frontMatter":{"title":"OnClientCheckResponse","sidebar_label":"OnClientCheckResponse","description":"Tinatawag ang callback na ito kapag nakumpleto ang request sa SendClientCheck","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnActorStreamOut","permalink":"/fil/docs/scripting/callbacks/OnActorStreamOut"},"next":{"title":"OnClientMessage","permalink":"/fil/docs/scripting/callbacks/OnClientMessage"}}'),i=t("85893"),s=t("50065");let l={title:"OnClientCheckResponse",sidebar_label:"OnClientCheckResponse",description:"Tinatawag ang callback na ito kapag nakumpleto ang request sa SendClientCheck",tags:[]},c=void 0,r={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Tinatawag ang callback na ito kapag nakumpleto ang request sa SendClientCheck"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"Ang ID ng player na i-checheck"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"actionid"}),(0,i.jsx)(n.td,{children:"Ang uri ng pag-checheck na ginawa."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"memaddr"}),(0,i.jsx)(n.td,{children:"Ang address requested."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"retndata"}),(0,i.jsx)(n.td,{children:"Ang resulta ng pag check"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"Palaging una itong tinatawag sa mga filterscript."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    SendClientCheck(playerid, 0x48, 0, 0, 2);\n    return 1;\n}\n\npublic OnClientCheckResponse(playerid, actionid, memaddr, retndata)\n{\n    if(actionid == 0x48) // or 72\n    {\n        print("The player is connecting using the PC client.");\n    }\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["SA",":MP"," Server"]}),": Ang callback na ito ay tinatawag lamang kapag ito ay nasa isang filterscript."]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Open Multiplayer Server"}),": Ang callback na ito ay normal na gumagana sa loob ng isang gamemode / filterscript."]})]}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsx)(n.p,{children:"Maaaring maging kapaki-pakinabang ang sumusunod na function, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/SendClientCheck",children:"SendClientCheck"}),": Magsagawa ng memory check sa client."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var a=t(67294);let i={},s=a.createContext(i);function l(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);