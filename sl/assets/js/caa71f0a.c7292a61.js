"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["72282"],{94230:function(e,n,i){i.r(n),i.d(n,{default:()=>a,frontMatter:()=>r,metadata:()=>t,assets:()=>o,toc:()=>h,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/functions/ShowVehicle","title":"ShowVehicle","description":"Shows the hidden vehicle.","source":"@site/docs/scripting/functions/ShowVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ShowVehicle","permalink":"/sl/docs/scripting/functions/ShowVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ShowVehicle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/sl/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"ShowVehicle","sidebar_label":"ShowVehicle","description":"Shows the hidden vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"ShowPlayerNameTagForPlayer","permalink":"/sl/docs/scripting/functions/ShowPlayerNameTagForPlayer"},"next":{"title":"SpawnPlayer","permalink":"/sl/docs/scripting/functions/SpawnPlayer"}}'),l=i("85893"),c=i("50065");let r={title:"ShowVehicle",sidebar_label:"ShowVehicle",description:"Shows the hidden vehicle.",tags:["vehicle"]},s=void 0,o={},h=[{value:"Description",id:"description",level:2},{value:"Parametes",id:"parametes",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components},{VersionWarn:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"This function has not yet been implemented."})}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Shows the hidden vehicle."}),"\n",(0,l.jsx)(n.h2,{id:"parametes",children:"Parametes"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vehicleid"}),(0,l.jsx)(n.td,{children:"The ID of the vehicle to show."})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'new g_Vehicle;\n\npublic OnGameModeInit()\n{\n    g_Vehicle = CreateVehicle(536, 2496.5034, 5.6658, 27.2247, 180.0000, -1, -1, 60);\n    HideVehicle(g_Vehicle);\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/showvehicle", true))\n    {\n        if (IsVehicleHidden(g_Vehicle))\n        {\n            ShowVehicle(g_Vehicle);\n        }\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"HideVehicle",children:"HideVehicle"}),": Hides a vehicle from the game."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsVehicleHidden",children:"IsVehicleHidden"}),": Checks if a vehicle is hidden."]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return r}});var t=i(67294);let l={},c=t.createContext(l);function r(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);