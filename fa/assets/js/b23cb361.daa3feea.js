"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["98918"],{70558:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>o});var t=JSON.parse('{"id":"scripting/functions/GetPlayerWorldBounds","title":"GetPlayerWorldBounds","description":"Get a player\'s world boundaries.","source":"@site/docs/scripting/functions/GetPlayerWorldBounds.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerWorldBounds","permalink":"/fa/docs/scripting/functions/GetPlayerWorldBounds","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerWorldBounds.md","tags":[{"inline":true,"label":"player","permalink":"/fa/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerWorldBounds","sidebar_label":"GetPlayerWorldBounds","description":"Get a player\'s world boundaries.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerWeather","permalink":"/fa/docs/scripting/functions/GetPlayerWeather"},"next":{"title":"GetPlayerZAim","permalink":"/fa/docs/scripting/functions/GetPlayerZAim"}}'),l=r("85893"),i=r("50065");let s={title:"GetPlayerWorldBounds",sidebar_label:"GetPlayerWorldBounds",description:"Get a player's world boundaries.",tags:["player"]},o=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Get a player's world boundaries."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["&Float",":maxX"]}),(0,l.jsx)(n.td,{children:"A float variable in which to store the maxX coordinate, passed by reference."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["&Float",":minX"]}),(0,l.jsx)(n.td,{children:"A float variable in which to store the minX coordinate, passed by reference."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["&Float",":maxY"]}),(0,l.jsx)(n.td,{children:"A float variable in which to store the maxY coordinate, passed by reference."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["&Float",":minY"]}),(0,l.jsx)(n.td,{children:"A float variable in which to store the minY coordinate, passed by reference."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"This function does not return a specific value."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    SetPlayerWorldBounds(playerid, -1212.0, -1420.0, 2628.5, 2430.5);\n\n    new\n        Float:maxX,\n        Float:minX,\n        Float:maxY,\n        Float:minY;\n\n    GetPlayerWorldBounds(playerid, maxX, minX, maxY, minY);\n    // maxX = -1212.0\n    // minX = -1420.0\n    // maxY = 2628.5\n    // minY = 2430.5\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"SetPlayerWorldBounds",children:"SetPlayerWorldBounds"}),": Set the world boundaries for a player. Players can not go out of the boundaries (they will be pushed back in)."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"ClearPlayerWorldBounds",children:"ClearPlayerWorldBounds"}),": Reset the player's world boundaries to default world boundaries."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return s}});var t=r(67294);let l={},i=t.createContext(l);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);