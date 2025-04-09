"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["81156"],{51433:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"scripting/functions/GetPlayerObjectAttachedOffset","title":"GetPlayerObjectAttachedOffset","description":"Get the attachment offset and rotation of a player-object.","source":"@site/docs/scripting/functions/GetPlayerObjectAttachedOffset.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerObjectAttachedOffset","permalink":"/th/docs/scripting/functions/GetPlayerObjectAttachedOffset","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerObjectAttachedOffset.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"},{"inline":true,"label":"object","permalink":"/th/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/th/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"GetPlayerObjectAttachedOffset","sidebar_label":"GetPlayerObjectAttachedOffset","description":"Get the attachment offset and rotation of a player-object.","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerObjectAttachedData","permalink":"/th/docs/scripting/functions/GetPlayerObjectAttachedData"},"next":{"title":"GetPlayerObjectDrawDistance","permalink":"/th/docs/scripting/functions/GetPlayerObjectDrawDistance"}}'),a=n("85893"),o=n("50065");let s={title:"GetPlayerObjectAttachedOffset",sidebar_label:"GetPlayerObjectAttachedOffset",description:"Get the attachment offset and rotation of a player-object.",tags:["player","object","playerobject"]},i=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Get the attachment offset and rotation of a player-object."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The ID of the player."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"objectid"}),(0,a.jsx)(t.td,{children:"The ID of the player-object to get the offset and rotation of."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["&Float",":offsetX"]}),(0,a.jsx)(t.td,{children:"A float variable in which to store the offsetX coordinate, passed by reference."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["&Float",":offsetY"]}),(0,a.jsx)(t.td,{children:"A float variable in which to store the offsetY coordinate, passed by reference."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["&Float",":offsetZ"]}),(0,a.jsx)(t.td,{children:"A float variable in which to store the offsetZ coordinate, passed by reference."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["&Float",":rotationX"]}),(0,a.jsx)(t.td,{children:"A float variable in which to store the rotationX coordinate, passed by reference."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["&Float",":rotationY"]}),(0,a.jsx)(t.td,{children:"A float variable in which to store the rotationY coordinate, passed by reference."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["&Float",":rotationZ"]}),(0,a.jsx)(t.td,{children:"A float variable in which to store the rotationZ coordinate, passed by reference."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"false"})," - The function failed to execute. The object specified does not exist."]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:"new \n    Float:offsetX,\n    Float:offsetY,\n    Float:offsetZ,\n    Float:rotationX,\n    Float:rotationY,\n    Float:rotationZ;\n\nGetPlayerObjectAttachedOffset(playerid, playerobjectid, offsetX, offsetY, offsetZ, rotationX, rotationY, rotationZ);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayerObjectAttachedData",children:"GetPlayerObjectAttachedData"}),": Get the attachment data of a player-object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetObjectAttachedOffset",children:"GetObjectAttachedOffset"}),": Get the attachment offset and rotation of an object."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return s}});var r=n(67294);let a={},o=r.createContext(a);function s(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);