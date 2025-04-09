"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["20658"],{52123:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>a,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>o});var i=JSON.parse('{"id":"scripting/functions/GetServerVarAsBool","title":"GetServerVarAsBool","description":"Dobij boolean vrijednost server varijable.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/GetServerVarAsBool.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetServerVarAsBool","permalink":"/bs/docs/scripting/functions/GetServerVarAsBool","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetServerVarAsBool.md","tags":[],"version":"current","frontMatter":{"title":"GetServerVarAsBool","sidebar_label":"GetServerVarAsBool","description":"Dobij boolean vrijednost server varijable.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"GetServerTickRate","permalink":"/bs/docs/scripting/functions/GetServerTickRate"},"next":{"title":"GetServerVarAsInt","permalink":"/bs/docs/scripting/functions/GetServerVarAsInt"}}'),t=n("85893"),s=n("50065");let a={title:"GetServerVarAsBool",sidebar_label:"GetServerVarAsBool",description:"Dobij boolean vrijednost server varijable.",tags:[]},o=void 0,l={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function c(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsx)(r.p,{children:"This function, as of 0.3.7 R2, is deprecated. Please see GetConsoleVarAsBool"})}),"\n",(0,t.jsx)(r.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,t.jsx)(r.p,{children:"Dobij boolean vrijednost server varijable."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Ime"}),(0,t.jsx)(r.th,{children:"Deskripcija"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"const varname[]"}),(0,t.jsx)(r.td,{children:"Ime boolean varijable za dobiti vrijednost."})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(r.p,{children:"Vrijednost navedene varijable poslu\u017Eitelja. 0 ako navedena varijabla servera nije logi\u010Dka ili ne postoji."}),"\n",(0,t.jsx)(r.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new queryEnabled = GetServerVarAsBool("query");\n    if (!queryEnabled)\n    {\n        print("WARNING: Upit je onemogu\u0107en. Server \u0107e se pojaviti van mre\u017Ee u pretra\u017Eiva\u010Du servera.");\n    }\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsx)(r.p,{children:"Napi\u0161i 'varlist' u server konzoli da prika\u017Ee\u0161 listu dostupnih server varijabli i njihovih tipova."})}),"\n",(0,t.jsx)(r.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"GetServerVarAsString",children:"GetServerVarAsString"}),": Dohvatite server varijablu kao string."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"GetServerVarAsInt",children:"GetServerVarAsInt"}),": Dohvatite server varijablu kao cijeli broj."]}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return a}});var i=n(67294);let t={},s=i.createContext(t);function a(e){let r=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);