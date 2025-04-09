"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["9138"],{27979:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/GetPlayerAttachedObject","title":"GetPlayerAttachedObject","description":"Gets the player attachment object data by index.","source":"@site/docs/scripting/functions/GetPlayerAttachedObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerAttachedObject","permalink":"/fil/docs/scripting/functions/GetPlayerAttachedObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerAttachedObject.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"},{"inline":true,"label":"object","permalink":"/fil/docs/tags/object"},{"inline":true,"label":"attachment","permalink":"/fil/docs/tags/attachment"}],"version":"current","frontMatter":{"title":"GetPlayerAttachedObject","sidebar_label":"GetPlayerAttachedObject","description":"Gets the player attachment object data by index.","tags":["player","object","attachment"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerArmour","permalink":"/fil/docs/scripting/functions/GetPlayerArmour"},"next":{"title":"GetPlayerBuildingsRemoved","permalink":"/fil/docs/scripting/functions/GetPlayerBuildingsRemoved"}}'),a=n("85893"),l=n("50065");let i={title:"GetPlayerAttachedObject",sidebar_label:"GetPlayerAttachedObject",description:"Gets the player attachment object data by index.",tags:["player","object","attachment"]},s=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Gets the player attachment object data by index."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The ID of the player whose data to get."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"index"}),(0,a.jsx)(t.td,{children:"The index (slot) to the object (0-9)."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"&modelid"}),(0,a.jsx)(t.td,{children:"Attached object model."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"&bone"}),(0,a.jsx)(t.td,{children:"Attached object bone."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["&Float",":offsetX"]}),(0,a.jsx)(t.td,{children:"X axis offset of the object."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["&Float",":offsetY"]}),(0,a.jsx)(t.td,{children:"Y axis offset of the object."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["&Float",":offsetZ"]}),(0,a.jsx)(t.td,{children:"Z axis offset of the object."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["&Float",":rotationX"]}),(0,a.jsx)(t.td,{children:"X axis rotation of the object."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["&Float",":rotationY"]}),(0,a.jsx)(t.td,{children:"Y axis rotation of the object."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["&Float",":rotationZ"]}),(0,a.jsx)(t.td,{children:"Z axis rotation of the object."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["&Float",":scaleX"]}),(0,a.jsx)(t.td,{children:"X axis scale of the object."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["&Float",":scaleY"]}),(0,a.jsx)(t.td,{children:"Y axis scale of the object."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["&Float",":scaleZ"]}),(0,a.jsx)(t.td,{children:"Z axis scale of the object."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"&materialColour1"}),(0,a.jsx)(t.td,{children:"Material colour 1 of the object."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"&materialColour2"}),(0,a.jsx)(t.td,{children:"Material colour 2 of the object."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"Always returns true."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:"new \n	modelid, \n	bone, \n	Float:offsetX, Float:offsetY, Float:offsetZ, \n	Float:rotationX, Float:rotationY, Float:rotationZ, \n	Float:scaleX, Float:scaleY, Float:scaleZ, \n	materialColour1, materialColour2;\n\n// Get the attached data of index 3\nGetPlayerAttachedObject(playerid, 3, modelid, bone, offsetX, offsetY, offsetZ, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ, materialColour1, materialColour2);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPlayerAttachedObject",children:"SetPlayerAttachedObject"}),": Attach an object to a player"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"RemovePlayerAttachedObject",children:"RemovePlayerAttachedObject"}),": Remove an attached object from a player"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"IsPlayerAttachedObjectSlotUsed",children:"IsPlayerAttachedObjectSlotUsed"}),": Check whether an object is attached to a player in a specified index"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"EditAttachedObject",children:"EditAttachedObject"}),": Edit an attached object."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return i}});var r=n(67294);let a={},l=r.createContext(a);function i(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);