"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["62106"],{1794:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/functions/GetVehicleParamsEx","title":"GetVehicleParamsEx","description":"Gets a vehicle\'s parameters.","source":"@site/docs/scripting/functions/GetVehicleParamsEx.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleParamsEx","permalink":"/vi/docs/scripting/functions/GetVehicleParamsEx","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleParamsEx.md","tags":[{"inline":true,"label":"vehicle","permalink":"/vi/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleParamsEx","sidebar_label":"GetVehicleParamsEx","description":"Gets a vehicle\'s parameters.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleParamsCarWindows","permalink":"/vi/docs/scripting/functions/GetVehicleParamsCarWindows"},"next":{"title":"GetVehicleParamsSirenState","permalink":"/vi/docs/scripting/functions/GetVehicleParamsSirenState"}}'),i=s("85893"),r=s("50065");let l={title:"GetVehicleParamsEx",sidebar_label:"GetVehicleParamsEx",description:"Gets a vehicle's parameters.",tags:["vehicle"]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Gets a vehicle's parameters."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"vehicleid"}),(0,i.jsx)(t.td,{children:"The ID of the vehicle to get the parameters from."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&bool",":engine"]}),(0,i.jsx)(t.td,{children:"Get the engine status. If 1, the engine is running.."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&bool",":lights"]}),(0,i.jsx)(t.td,{children:"Get the vehicle's lights' state. If 1 the lights are on."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&bool",":alarm"]}),(0,i.jsx)(t.td,{children:"Get the vehicle's alarm state. If 1 the alarm is (or was) sounding."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&bool",":doors"]}),(0,i.jsx)(t.td,{children:"Get the lock status of the doors. If 1 the doors are locked."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&bool",":bonnet"]}),(0,i.jsx)(t.td,{children:"Get the bonnet/hood status. If 1, it's open."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&bool",":boot"]}),(0,i.jsx)(t.td,{children:"Get the boot/trunk status. 1 means it is open."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&bool",":objective"]}),(0,i.jsx)(t.td,{children:"Get the objective status. 1 means the objective is on."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"true"})," - success"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"false"})," - failure (invalid vehicle ID)."]}),"\n",(0,i.jsx)(t.p,{children:"The vehicle's parameters are stored in the referenced variables, not in the return value."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new\n	bool:engine, bool:lights, bool:alarm, bool:doors, bool:bonnet, bool:boot, bool:objective;\nGetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);\n//This would cause all the variable above, to become the status of its subject.\n"})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"If a parameter is unset (SetVehicleParamsEx not used beforehand) the value will be -1 ('unset')."})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetVehicleParamsEx",children:"SetVehicleParamsEx"}),": Sets a vehicle's params for all players."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,s){s.d(t,{Z:function(){return a},a:function(){return l}});var n=s(67294);let i={},r=n.createContext(i);function l(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);