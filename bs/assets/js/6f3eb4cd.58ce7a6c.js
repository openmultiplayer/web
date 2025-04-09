"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["7947"],{26519:function(e,r,n){n.r(r),n.d(r,{default:()=>j,frontMatter:()=>a,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>o});var i=JSON.parse('{"id":"scripting/functions/GetServerVarAsInt","title":"GetServerVarAsInt","description":"Dobij cjelobrojnu vrijednost server varijable.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/GetServerVarAsInt.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetServerVarAsInt","permalink":"/bs/docs/scripting/functions/GetServerVarAsInt","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetServerVarAsInt.md","tags":[],"version":"current","frontMatter":{"title":"GetServerVarAsInt","sidebar_label":"GetServerVarAsInt","description":"Dobij cjelobrojnu vrijednost server varijable.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"GetServerVarAsBool","permalink":"/bs/docs/scripting/functions/GetServerVarAsBool"},"next":{"title":"GetServerVarAsString","permalink":"/bs/docs/scripting/functions/GetServerVarAsString"}}'),t=n("85893"),s=n("50065");let a={title:"GetServerVarAsInt",sidebar_label:"GetServerVarAsInt",description:"Dobij cjelobrojnu vrijednost server varijable.",tags:[]},o=void 0,l={},c=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsx)(r.p,{children:"This function, as of 0.3.7 R2, is deprecated. Please see GetConsoleVarAsInt"})}),"\n",(0,t.jsx)(r.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,t.jsx)(r.p,{children:"Dobij cjelobrojnu vrijednost server varijable."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Ime"}),(0,t.jsx)(r.th,{children:"Deskripcija"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"const varname[]"}),(0,t.jsx)(r.td,{children:"Ime cjelobrojne varijable za dobiti vrijednost."})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(r.p,{children:"Vrijednost navedene server varijable. 0 ako navedena varijabla servera nije cijeli broj ili ne postoji."}),"\n",(0,t.jsx)(r.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:'new serverPort = GetServerVarAsInt("port");\nprintf("Server Port: %i", serverPort);\n'})}),"\n",(0,t.jsx)(r.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsx)(r.p,{children:"Napi\u0161i 'varlist' u server konzoli da prika\u017Ee\u0161 listu dostupnih server varijabli i njihovih tipova."})}),"\n",(0,t.jsx)(r.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"GetServerVarAsString",children:"GetServerVarAsString"}),": Dohvatite server varijablu kao string."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"GetServerVarAsBool",children:"GetServerVarAsBool"}),": Dohva\u0107anje varijable poslu\u017Eitelja kao logi\u010Dke vrijednosti (boolean)."]}),"\n"]})]})}function j(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return a}});var i=n(67294);let t={},s=i.createContext(t);function a(e){let r=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);