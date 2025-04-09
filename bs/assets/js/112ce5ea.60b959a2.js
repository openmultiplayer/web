"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["63538"],{67119:function(e,i,n){n.r(i),n.d(i,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/functions/GetVehicleModelInfo","title":"GetVehicleModelInfo","description":"Dohvatite informacije o odre\u0111enom modelu vozila, poput veli\u010Dine ili polo\u017Eaja sjedala.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/GetVehicleModelInfo.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleModelInfo","permalink":"/bs/docs/scripting/functions/GetVehicleModelInfo","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleModelInfo.md","tags":[{"inline":true,"label":"vehicle","permalink":"/bs/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleModelInfo","sidebar_label":"GetVehicleModelInfo","description":"Dohvatite informacije o odre\u0111enom modelu vozila, poput veli\u010Dine ili polo\u017Eaja sjedala.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleModelCount","permalink":"/bs/docs/scripting/functions/GetVehicleModelCount"},"next":{"title":"GetVehicleModelsUsed","permalink":"/bs/docs/scripting/functions/GetVehicleModelsUsed"}}'),o=n("85893"),l=n("50065");let r={title:"GetVehicleModelInfo",sidebar_label:"GetVehicleModelInfo",description:"Dohvatite informacije o odre\u0111enom modelu vozila, poput veli\u010Dine ili polo\u017Eaja sjedala.",tags:["vehicle"]},s=void 0,d={},c=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function a(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,o.jsx)(i.p,{children:"Dohvatite informacije o odre\u0111enom modelu vozila, poput veli\u010Dine ili polo\u017Eaja sjedala."}),"\n",(0,o.jsxs)(i.table,{children:[(0,o.jsx)(i.thead,{children:(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.th,{children:"Ime"}),(0,o.jsx)(i.th,{children:"Deskripcija"})]})}),(0,o.jsxs)(i.tbody,{children:[(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"vehiclemodel"}),(0,o.jsx)(i.td,{children:"Model vozila za dobiti informacije."})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"infotype"}),(0,o.jsx)(i.td,{children:"Tip informacije za dobiti."})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsxs)(i.td,{children:["&Float",":X"]}),(0,o.jsx)(i.td,{children:"Float za pohraniti X vrijednost."})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsxs)(i.td,{children:["&Float",":Y"]}),(0,o.jsx)(i.td,{children:"Float za pohraniti Y vrijednost."})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsxs)(i.td,{children:["&Float",":Z"]}),(0,o.jsx)(i.td,{children:"Float za pohraniti Z vrijednost."})]})]})]}),"\n",(0,o.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(i.p,{children:"Informacije vozila su pohranjene u navedenim varijablama."}),"\n",(0,o.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-c",children:'new\n    Float: x, Float: y, Float: z;\n//Dobij veli\u010Dinu modela 411 (Infernus)\nGetVehicleModelInfo(411, VEHICLE_MODEL_INFO_SIZE, x, y, z);\n//Ispi\u0161i "infernus je \u0161irok 2.3m, 5.7m dug i visok 1.3m" u konzolu\nprintf("infernus je \u0161irok %.1fm, %.1fm dug i visok %.1fm", X, Y, Z);\n'})}),"\n",(0,o.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"GetVehicleModel",children:"GetVehicleModel"}),": Dobij ID modela vozila."]}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return s},a:function(){return r}});var t=n(67294);let o={},l=t.createContext(o);function r(e){let i=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);