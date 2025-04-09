"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["71855"],{26122:function(e,r,t){t.r(r),t.d(r,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/GetRandomVehicleColourPair","title":"GetRandomVehicleColourPair","description":"Get random colour indexes that are valid for the given vehicle model.","source":"@site/docs/scripting/functions/GetRandomVehicleColourPair.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetRandomVehicleColourPair","permalink":"/sr/docs/scripting/functions/GetRandomVehicleColourPair","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetRandomVehicleColourPair.md","tags":[{"inline":true,"label":"vehicle","permalink":"/sr/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetRandomVehicleColourPair","sidebar_label":"GetRandomVehicleColourPair","description":"Get random colour indexes that are valid for the given vehicle model.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayers","permalink":"/sr/docs/scripting/functions/GetPlayers"},"next":{"title":"GetRunningTimers","permalink":"/sr/docs/scripting/functions/GetRunningTimers"}}'),n=t("85893"),o=t("50065");let l={title:"GetRandomVehicleColourPair",sidebar_label:"GetRandomVehicleColourPair",description:"Get random colour indexes that are valid for the given vehicle model.",tags:["vehicle"]},s=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{VersionWarn:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(r.p,{children:"Get random colour indexes that are valid for the given vehicle model."}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"modelid"}),(0,n.jsxs)(r.td,{children:["The ID of the ",(0,n.jsx)(r.a,{href:"../resources/vehicleid",children:"vehicle model"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"&colour1"}),(0,n.jsx)(r.td,{children:"A variable in which to store the colour1 value, passed by reference."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"&colour2"}),(0,n.jsx)(r.td,{children:"A variable in which to store the colour2 value, passed by reference."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"&colour3 = 0"}),(0,n.jsx)(r.td,{children:"A variable in which to store the colour3 value, passed by reference."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"&colour4 = 0"}),(0,n.jsx)(r.td,{children:"A variable in which to store the colour4 value, passed by reference."})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",children:"new\n	colour1,\n	colour2;\n\nGetRandomVehicleColourPair(560, colour1, colour2);\n"})}),"\n",(0,n.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"VehicleColourIndexToColour",children:"VehicleColourIndexToColour"}),": Convert a car colour index to a HEX colour (RGBA)."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"GetVehicleColours",children:"GetVehicleColours"}),": Gets the vehicle colours."]}),"\n"]})]})}function h(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return s},a:function(){return l}});var i=t(67294);let n={},o=i.createContext(n);function l(e){let r=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);