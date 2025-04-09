"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["62486"],{35340:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>s,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/callbacks/OnObjectMoved","title":"OnObjectMoved","description":"Bu geri \xe7a\u011F\u0131rma obje hareket etmeyi (MoveObject) b\u0131rakt\u0131ktan sonra \xe7a\u011Fr\u0131l\u0131r.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnObjectMoved.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnObjectMoved","permalink":"/tr/docs/scripting/callbacks/OnObjectMoved","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnObjectMoved.md","tags":[],"version":"current","frontMatter":{"title":"OnObjectMoved","sidebar_label":"OnObjectMoved","description":"Bu geri \xe7a\u011F\u0131rma obje hareket etmeyi (MoveObject) b\u0131rakt\u0131ktan sonra \xe7a\u011Fr\u0131l\u0131r.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnNPCSpawn","permalink":"/tr/docs/scripting/callbacks/OnNPCSpawn"},"next":{"title":"OnPickupStreamIn","permalink":"/tr/docs/scripting/callbacks/OnPickupStreamIn"}}'),i=t("85893"),a=t("50065");let l={title:"OnObjectMoved",sidebar_label:"OnObjectMoved",description:"Bu geri \xe7a\u011F\u0131rma obje hareket etmeyi (MoveObject) b\u0131rakt\u0131ktan sonra \xe7a\u011Fr\u0131l\u0131r.",tags:[]},c=void 0,o={},s=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar",id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:2},{value:"Notlar",id:"notlar",level:2},{value:"Ba\u011Fl\u0131 Fonksiyonlar",id:"ba\u011Fl\u0131-fonksiyonlar",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,i.jsx)(n.p,{children:"Bu geri \xe7a\u011F\u0131rma obje hareket etmeyi (MoveObject) b\u0131rakt\u0131ktan sonra \xe7a\u011Fr\u0131l\u0131r."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parametre"}),(0,i.jsx)(n.th,{children:"A\xe7\u0131klama"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objectid"}),(0,i.jsx)(n.td,{children:"Hareket eden obje id"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",children:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar"}),"\n",(0,i.jsx)(n.p,{children:"Her zaman \xf6ncelikle filterscriptler i\xe7erisinde \xe7a\u011Fr\u0131l\u0131r."}),"\n",(0,i.jsx)(n.h2,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnObjectMoved(objectid)\n{\n    printf("Obje id %d hareket etmeyi b\u0131rakt\u0131.", objectid);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notlar",children:"Notlar"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"SetObjectPos bu geri \xe7a\u011F\u0131rma i\xe7erisinde \xe7al\u0131\u015Fmaz. Bunu d\xfczeltmek i\xe7in objeyi yeniden olu\u015Fturun."})}),"\n",(0,i.jsx)(n.h2,{id:"ba\u011Fl\u0131-fonksiyonlar",children:"Ba\u011Fl\u0131 Fonksiyonlar"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/MoveObject.md",children:"MoveObject"}),": Objeyi hareket ettirme fonksiyonu."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/MovePlayerObject.md",children:"MovePlayerObject"}),": Oyuncu objesini hareket ettirme fonksiyonu."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/IsObjectMoving.md",children:"IsObjectMoving"}),": Objenin hareket edip etmedi\u011Fini kontrol etme fonksiyonu."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/StopObject.md",children:"StopObject"}),": Hareket eden objeyi durdurur."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/tr/docs/scripting/callbacks/OnPlayerObjectMoved",children:"OnPlayerObjectMoved"}),": Oyuncu objesi hareket etmeyi b\u0131rakt\u0131\u011F\u0131nda \xe7a\u011Fr\u0131lan geri \xe7a\u011F\u0131rma."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var r=t(67294);let i={},a=r.createContext(i);function l(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);