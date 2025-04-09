"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["91426"],{14864:function(e,n,i){i.r(n),i.d(n,{default:()=>d,frontMatter:()=>a,metadata:()=>t,assets:()=>r,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"scripting/functions/ManualVehicleEngineAndLights","title":"ManualVehicleEngineAndLights","description":"Use this function before any player connects (OnGameModeInit) to tell all clients that the script will control vehicle engines and lights.","source":"@site/docs/scripting/functions/ManualVehicleEngineAndLights.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ManualVehicleEngineAndLights","permalink":"/it/docs/scripting/functions/ManualVehicleEngineAndLights","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ManualVehicleEngineAndLights.md","tags":[{"inline":true,"label":"vehicle","permalink":"/it/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"ManualVehicleEngineAndLights","sidebar_label":"ManualVehicleEngineAndLights","description":"Use this function before any player connects (OnGameModeInit) to tell all clients that the script will control vehicle engines and lights.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"LinkVehicleToInterior","permalink":"/it/docs/scripting/functions/LinkVehicleToInterior"},"next":{"title":"MoveObject","permalink":"/it/docs/scripting/functions/MoveObject"}}'),l=i("85893"),s=i("50065");let a={title:"ManualVehicleEngineAndLights",sidebar_label:"ManualVehicleEngineAndLights",description:"Use this function before any player connects (OnGameModeInit) to tell all clients that the script will control vehicle engines and lights.",tags:["vehicle"]},c=void 0,r={},o=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Use this function before any player connects (OnGameModeInit) to tell all clients that the script will control vehicle engines and lights. This prevents the game automatically turning the engine on/off when players enter/exit vehicles and headlights automatically coming on when it is dark."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    ManualVehicleEngineAndLights();\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"Is it not possible to reverse this function after it has been used. You must either use it or not use it."})}),"\n",(0,l.jsxs)(n.admonition,{type:"tip",children:[(0,l.jsxs)(n.p,{children:["You can also enable or disable this function via ",(0,l.jsx)(n.a,{href:"../../server/config.json",children:"config.json"})]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'"use_manual_engine_and_lights": true,\n'})})]}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"SetVehicleParamsEx",children:"SetVehicleParamsEx"}),": Sets a vehicle's params for all players."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetVehicleParamsEx",children:"GetVehicleParamsEx"}),": Get a vehicle's parameters."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"SetVehicleParamsForPlayer",children:"SetVehicleParamsForPlayer"}),": Set the parameters of a vehicle for a player."]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return a}});var t=i(67294);let l={},s=t.createContext(l);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);