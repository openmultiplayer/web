"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["59216"],{38575:function(e,i,n){n.r(i),n.d(i,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>d,toc:()=>o,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/functions/HideVehicle","title":"HideVehicle","description":"Hides a vehicle from the game.","source":"@site/docs/scripting/functions/HideVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/HideVehicle","permalink":"/th/docs/scripting/functions/HideVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/HideVehicle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/th/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"HideVehicle","sidebar_label":"HideVehicle","description":"Hides a vehicle from the game.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"HidePlayerDialog","permalink":"/th/docs/scripting/functions/HidePlayerDialog"},"next":{"title":"InterpolateCameraLookAt","permalink":"/th/docs/scripting/functions/InterpolateCameraLookAt"}}'),l=n("85893"),r=n("50065");let c={title:"HideVehicle",sidebar_label:"HideVehicle",description:"Hides a vehicle from the game.",tags:["vehicle"]},s=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Parametes",id:"parametes",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{VersionWarn:n}=i;return n||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(i.admonition,{type:"warning",children:(0,l.jsx)(i.p,{children:"This function has not yet been implemented."})}),"\n",(0,l.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(i.p,{children:"Hides a vehicle from the game."}),"\n",(0,l.jsx)(i.h2,{id:"parametes",children:"Parametes"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Name"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsx)(i.tbody,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"vehicleid"}),(0,l.jsx)(i.td,{children:"The ID of the vehicle to hide."})]})})]}),"\n",(0,l.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    new vehicleid = CreateVehicle(536, 2496.5034, 5.6658, 27.2247, 180.0000, -1, -1, 60);\n    HideVehicle(vehicleid);\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"ShowVehicle",children:"ShowVehicle"}),": Shows the hidden vehicle."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"IsVehicleHidden",children:"IsVehicleHidden"}),": Checks if a vehicle is hidden."]}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return s},a:function(){return c}});var t=n(67294);let l={},r=t.createContext(l);function c(e){let i=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);