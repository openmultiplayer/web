"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["98028"],{60794:function(e,r,n){n.r(r),n.d(r,{default:()=>o,frontMatter:()=>s,metadata:()=>l,assets:()=>a,toc:()=>c,contentTitle:()=>d});var l=JSON.parse('{"id":"scripting/functions/AddServerRule","title":"AddServerRule","description":"Bir sunucu kural\u0131 ekleyin.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/functions/AddServerRule.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddServerRule","permalink":"/tr/docs/scripting/functions/AddServerRule","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AddServerRule.md","tags":[{"inline":true,"label":"rule","permalink":"/tr/docs/tags/rule"}],"version":"current","frontMatter":{"title":"AddServerRule","sidebar_label":"AddServerRule","description":"Bir sunucu kural\u0131 ekleyin.","tags":["rule"]},"sidebar":"docsSidebar","previous":{"title":"AddPlayerClassEx","permalink":"/tr/docs/scripting/functions/AddPlayerClassEx"},"next":{"title":"AddSimpleModel","permalink":"/tr/docs/scripting/functions/AddSimpleModel"}}'),t=n("85893"),i=n("50065");let s={title:"AddServerRule",sidebar_label:"AddServerRule",description:"Bir sunucu kural\u0131 ekleyin.",tags:["rule"]},d=void 0,a={},c=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar",id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",level:2},{value:"\xd6rnekler",id:"\xf6rnekler",level:2},{value:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",level:2}];function u(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarnTR:n}=r;return n||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnTR",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,t.jsx)(r.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,t.jsx)(r.p,{children:"Bir sunucu kural\u0131 ekleyin."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\u0130sim"}),(0,t.jsx)(r.th,{children:"A\xe7\u0131klama"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"const rule[]"}),(0,t.jsx)(r.td,{children:"Eklemek istedi\u011Finiz sunucu kural\u0131n\u0131n ad\u0131."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"const format[]"}),(0,t.jsx)(r.td,{children:"Sunucu kural de\u011Feri."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"OPEN_MP_TAGS:..."}),(0,t.jsx)(r.td,{children:"Herhangi bir etiket t\xfcr\xfcnden belirsiz say\u0131da arg\xfcman."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",children:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar"}),"\n",(0,t.jsx)(r.p,{children:"Fonksiyon ba\u015Far\u0131yla \xe7al\u0131\u015Ft\u0131r\u0131ld\u0131ysa true, aksi halde false d\xf6ner."}),"\n",(0,t.jsx)(r.h2,{id:"\xf6rnekler",children:"\xd6rnekler"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    AddServerRule("discord", "discord.gg/samp");\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"RemoveServerRule",children:"RemoveServerRule"}),": Sunucu kural\u0131n\u0131 kald\u0131r\u0131r."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"IsValidServerRule",children:"IsValidServerRule"}),": Verilen sunucu kural\u0131n\u0131n ge\xe7erli olup olmad\u0131\u011F\u0131n\u0131 kontrol eder."]}),"\n"]})]})}function o(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return s}});var l=n(67294);let t={},i=l.createContext(t);function s(e){let r=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(i.Provider,{value:r},e.children)}}}]);