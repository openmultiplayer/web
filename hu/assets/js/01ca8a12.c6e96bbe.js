"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["95513"],{46022:function(e,t,i){i.r(t),i.d(t,{default:()=>p,frontMatter:()=>r,metadata:()=>n,assets:()=>l,toc:()=>a,contentTitle:()=>d});var n=JSON.parse('{"id":"scripting/functions/AddStaticPickup","title":"AddStaticPickup","description":"This function adds a \'static\' pickup to the game.","source":"@site/docs/scripting/functions/AddStaticPickup.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddStaticPickup","permalink":"/hu/docs/scripting/functions/AddStaticPickup","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AddStaticPickup.md","tags":[{"inline":true,"label":"pickup","permalink":"/hu/docs/tags/pickup"}],"version":"current","frontMatter":{"title":"AddStaticPickup","sidebar_label":"AddStaticPickup","description":"This function adds a \'static\' pickup to the game.","tags":["pickup"]},"sidebar":"docsSidebar","previous":{"title":"AddSimpleModelTimed","permalink":"/hu/docs/scripting/functions/AddSimpleModelTimed"},"next":{"title":"AddStaticVehicle","permalink":"/hu/docs/scripting/functions/AddStaticVehicle"}}'),s=i("85893"),c=i("50065");let r={title:"AddStaticPickup",sidebar_label:"AddStaticPickup",description:"This function adds a 'static' pickup to the game.",tags:["pickup"]},d=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"This function adds a 'static' pickup to the game. These pickups support weapons, health, armor etc., with the ability to function without scripting them (weapons/health/armor will be given automatically)."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../resources/pickupids",children:"model"})}),(0,s.jsx)(t.td,{children:"The model of the pickup."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../resources/pickuptypes",children:"type"})}),(0,s.jsx)(t.td,{children:"The pickup type. Determines how the pickup responds when picked up."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":x"]}),(0,s.jsx)(t.td,{children:"The X coordinate to create the pickup at."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":y"]}),(0,s.jsx)(t.td,{children:"The Y coordinate to create the pickup at."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":z"]}),(0,s.jsx)(t.td,{children:"The Z coordinate to create the pickup at."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"virtualWorld"}),(0,s.jsx)(t.td,{children:"The virtual world ID to put tht pickup in. Use -1 to show the pickup in all worlds."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"1"})," - if the pickup is successfully created."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"0"})," - if failed to create."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // Create a pickup for armor\n    AddStaticPickup(1242, 2, 1503.3359, 1432.3585, 10.1191, 0);\n\n    // Create a pickup for some health, right next to the armour\n    AddStaticPickup(1240, 2, 1506.3359, 1432.3585, 10.1191, 0);\n\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["This function doesn't return a pickup ID that you can use in, for example, OnPlayerPickUpPickup. Use ",(0,s.jsx)(t.a,{href:"CreatePickup",children:"CreatePickup"})," if you'd like to assign IDs."]})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"CreatePickup",children:"CreatePickup"}),": Create a pickup."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"DestroyPickup",children:"DestroyPickup"}),": Destroy a pickup."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../resources/pickupids",children:"Pickup IDs"})}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return d},a:function(){return r}});var n=i(67294);let s={},c=n.createContext(s);function r(e){let t=n.useContext(c);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);