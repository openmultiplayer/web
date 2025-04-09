"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["20618"],{19926:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>o,metadata:()=>a,assets:()=>c,toc:()=>l,contentTitle:()=>s});var a=JSON.parse('{"id":"scripting/functions/atan2","title":"atan2","description":".","source":"@site/i18n/pl/docusaurus-plugin-content-docs/current/scripting/functions/atan2.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/atan2","permalink":"/pl/docs/scripting/functions/atan2","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/atan2.md","tags":[],"version":"current","frontMatter":{"title":"atan2","sidebar_label":"atan2","description":".","tags":[]},"sidebar":"docsSidebar","previous":{"title":"atan","permalink":"/pl/docs/scripting/functions/atan"},"next":{"title":"clamp","permalink":"/pl/docs/scripting/functions/clamp"}}'),r=t("85893"),i=t("50065");let o={title:"atan2",sidebar_label:"atan2",description:".",tags:[]},s=void 0,c={},l=[{value:"Opis",id:"opis",level:2},{value:"Zwracane warto\u015Bci",id:"zwracane-warto\u015Bci",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2},{value:"Powi\u0105zane funkcje",id:"powi\u0105zane-funkcje",level:2}];function d(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components},{LowercaseNote:t}=e;return t||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),"\n",(0,r.jsx)(e.admonition,{type:"warning",children:(0,r.jsx)(e.p,{children:"Zwr\xf3\u0107 uwag\u0119, \u017Ce warto\u015B\u0107 y jest pierwszym parametrem, a x drugim."})}),"\n",(0,r.jsx)(e.h2,{id:"opis",children:"Opis"}),"\n",(0,r.jsx)(e.p,{children:"Podaje odwr\xf3con\u0105 warto\u015B\u0107 arcus tangensa z y/x w radianach."}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Nazwa"}),(0,r.jsx)(e.th,{children:"Opis"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["Float",":y"]}),(0,r.jsx)(e.td,{children:"Warto\u015B\u0107 reprezentuj\u0105ca proporcj\u0119 koordynatu Y."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["Float",":x"]}),(0,r.jsx)(e.td,{children:"Warto\u015B\u0107 reprezentuj\u0105ca proporcj\u0119 koordynatu X."})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"zwracane-warto\u015Bci",children:"Zwracane warto\u015Bci"}),"\n",(0,r.jsx)(e.p,{children:"Zwraca g\u0142\xf3wn\u0105 warto\u015B\u0107 arcus tangensa z y/x, wyra\u017Con\u0105 w radianach."}),"\n",(0,r.jsx)(e.p,{children:"Aby obliczy\u0107 t\u0119 warto\u015B\u0107, funkcja bierze pod uwag\u0119 znak obu argument\xf3w, aby okre\u015Bli\u0107 kwadrant."}),"\n",(0,r.jsx)(e.h2,{id:"przyk\u0142ady",children:"Przyk\u0142ady"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'//Arcus tangens dla (x=-10.000000, y=10.000000) wynosi 135.000000 stopni.\n\npublic OnGameModeInit()\n{\n    new Float:x, Float:y, Float:result;\n    x = -10.0;\n    y = 10.0;\n    result = atan2(y,x);\n    printf("Arcus tangens dlar (x=%f, y=%f) wynosi %f stopni.", x, y, result);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"powi\u0105zane-funkcje",children:"Powi\u0105zane funkcje"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"floatsin.md",children:"floatsin"}),": Podaje sinus dla okre\u015Blonego k\u0105ta."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"floatcos.md",children:"floatcos"}),": Podaje cosinus dla okre\u015Blonego k\u0105ta."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"floattan.md",children:"floattan"}),": Podaje tangens dla okre\u015Blonego k\u0105ta."]}),"\n"]})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return s},a:function(){return o}});var a=t(67294);let r={},i=a.createContext(r);function o(n){let e=a.useContext(i);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);