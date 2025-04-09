"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["71346"],{21894:function(e,t,n){n.r(t),n.d(t,{default:()=>d,frontMatter:()=>l,metadata:()=>i,assets:()=>a,toc:()=>c,contentTitle:()=>o});var i=JSON.parse('{"id":"scripting/functions/GetVehicleRotationQuat","title":"GetVehicleRotationQuat","description":"Returns a vehicle\'s rotation on all axes as a quaternion.","source":"@site/docs/scripting/functions/GetVehicleRotationQuat.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleRotationQuat","permalink":"/hu/docs/scripting/functions/GetVehicleRotationQuat","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleRotationQuat.md","tags":[{"inline":true,"label":"vehicle","permalink":"/hu/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleRotationQuat","sidebar_label":"GetVehicleRotationQuat","description":"Returns a vehicle\'s rotation on all axes as a quaternion.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleRespawnTick","permalink":"/hu/docs/scripting/functions/GetVehicleRespawnTick"},"next":{"title":"GetVehicleSeats","permalink":"/hu/docs/scripting/functions/GetVehicleSeats"}}'),s=n("85893"),r=n("50065");let l={title:"GetVehicleRotationQuat",sidebar_label:"GetVehicleRotationQuat",description:"Returns a vehicle's rotation on all axes as a quaternion.",tags:["vehicle"]},o=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Returns a vehicle's rotation on all axes as a quaternion."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vehicleid"}),(0,s.jsx)(t.td,{children:"The ID of the vehicle to get the rotation of."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":w"]}),(0,s.jsx)(t.td,{children:"A float variable in which to store the first quaternion angle, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":x"]}),(0,s.jsx)(t.td,{children:"A float variable in which to store the second quaternion angle, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":y"]}),(0,s.jsx)(t.td,{children:"A float variable in which to store the third quaternion angle, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":z"]}),(0,s.jsx)(t.td,{children:"A float variable in which to store the fourth quaternion angle, passed by reference."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"false"})," - The function failed to execute. This means the vehicle specified does not exist."]}),"\n",(0,s.jsx)(t.p,{children:"The vehicle's rotation is stored in the specified variables."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"new \n    Float:w,\n    Float:x,\n    Float:y,\n    Float:z;\n\nGetVehicleRotationQuat(vehicleid, w, x, y, z);\n"})}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"There is no 'set' variation of this function; you can not SET a vehicle's rotation (apart from the Z angle)"}),"\n",(0,s.jsx)(t.li,{children:"This function may return incorrect values for unoccupied vehicles. The reason is that the third row of the vehicle's internal rotation matrix gets corrupted if it gets updated while unoccupied."}),"\n"]})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetVehicleZAngle",children:"GetVehicleZAngle"}),": Check the current angle of a vehicle."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetVehicleRotation",children:"GetVehicleRotation"}),": Get the rotation of a vehicle on the XYZ axis."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetVehicleMatrix",children:"GetVehicleMatrix"}),": Gets the actual rotation matrix of the vehicle."]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return l}});var i=n(67294);let s={},r=i.createContext(s);function l(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);