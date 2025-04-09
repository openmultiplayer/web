"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["38748"],{7102:function(e,t,i){i.r(t),i.d(t,{default:()=>o,frontMatter:()=>r,metadata:()=>n,assets:()=>c,toc:()=>a,contentTitle:()=>h});var n=JSON.parse('{"id":"scripting/resources/vehiclehealth","title":"Vehicle Health","description":"Vehicle Health Values.","source":"@site/docs/scripting/resources/vehiclehealth.md","sourceDirName":"scripting/resources","slug":"/scripting/resources/vehiclehealth","permalink":"/hu/docs/scripting/resources/vehiclehealth","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/resources/vehiclehealth.md","tags":[],"version":"current","frontMatter":{"title":"Vehicle Health","sidebar_label":"Vehicle Health","description":"Vehicle Health Values."},"sidebar":"docsSidebar","previous":{"title":"Vehicle Color IDs","permalink":"/hu/docs/scripting/resources/vehiclecolorid"},"next":{"title":"Vehicle IDs","permalink":"/hu/docs/scripting/resources/vehicleid"}}'),l=i("85893"),s=i("50065");let r={title:"Vehicle Health",sidebar_label:"Vehicle Health",description:"Vehicle Health Values."},h=void 0,c={},a=[];function d(e){let t={a:"a",admonition:"admonition",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.admonition,{type:"info",children:(0,l.jsxs)(t.p,{children:["The vehicle health value used by ",(0,l.jsx)(t.a,{href:"../functions/SetVehicleHealth",children:"SetVehicleHealth"})," and ",(0,l.jsx)(t.a,{href:"../functions/GetVehicleHealth",children:"GetVehicleHealth"})," is always between 0 and 1000. A value of 0 means the vehicle will explode, and a value of 1000 means the vehicle doesn't even have a scratch. The effect of the vehicle health value on the engine is illustrated in the table below."]})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Vehicle health"}),(0,l.jsx)(t.th,{children:"Effect on the engine"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"> 650"}),(0,l.jsx)(t.td,{children:"None. The engine is still pretty much fine"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"550-650"}),(0,l.jsx)(t.td,{children:"The engine is overheating, and will emit white smoke"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"390-550"}),(0,l.jsx)(t.td,{children:"The engine is overheating pretty badly, and will emit grey smoke"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"250-390"}),(0,l.jsx)(t.td,{children:"The engine is getting really hot, and will emit black smoke"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"< 250"}),(0,l.jsx)(t.td,{children:"The engine will catch fire, and the vehicle will explode a few seconds later, unless it gets repaired"})]})]})]})]})}function o(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return h},a:function(){return r}});var n=i(67294);let l={},s=n.createContext(l);function r(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);