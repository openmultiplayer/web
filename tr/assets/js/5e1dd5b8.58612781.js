"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["91972"],{76529:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>a,contentTitle:()=>o});var r=JSON.parse('{"id":"scripting/functions/SetPlayerWorldBounds","title":"SetPlayerWorldBounds","description":"Set the world boundaries for a player.","source":"@site/docs/scripting/functions/SetPlayerWorldBounds.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerWorldBounds","permalink":"/tr/docs/scripting/functions/SetPlayerWorldBounds","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerWorldBounds.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerWorldBounds","sidebar_label":"SetPlayerWorldBounds","description":"Set the world boundaries for a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerWeather","permalink":"/tr/docs/scripting/functions/SetPlayerWeather"},"next":{"title":"SetSVarFloat","permalink":"/tr/docs/scripting/functions/SetSVarFloat"}}'),l=t("85893"),s=t("50065");let i={title:"SetPlayerWorldBounds",sidebar_label:"SetPlayerWorldBounds",description:"Set the world boundaries for a player.",tags:["player"]},o=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Set the world boundaries for a player. Players can not go out of the boundaries (they will be pushed back in)."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player to set the world boundaries of."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":maxX"]}),(0,l.jsx)(n.td,{children:"The maximum X coordinate the player can go to."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":minX"]}),(0,l.jsx)(n.td,{children:"The minimum X coordinate the player can go to."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":maxY"]}),(0,l.jsx)(n.td,{children:"The maximum Y coordinate the player can go to."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":minY"]}),(0,l.jsx)(n.td,{children:"The minimum Y coordinate the player can go to."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    SetPlayerWorldBounds(playerid, 20.0, 0.0, 20.0, 0.0);\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"               (North)\n                ymax\n            |----------|\n            |          |\n(West) xmin |          | xmax (East)\n            |          |\n            |----------|\n                ymin\n               (South)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["A player's world boundaries can be reset by setting them to 20000.0000, -20000.0000, 20000.0000, -20000.0000. These are the default values. You can also use ",(0,l.jsx)(n.a,{href:"ClearPlayerWorldBounds",children:"ClearPlayerWorldBounds"}),"."]})}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"This function doesn't work in interiors!"})}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"ClearPlayerWorldBounds",children:"ClearPlayerWorldBounds"}),": Reset the player's world boundaries to default world boundaries."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetPlayerWorldBounds",children:"GetPlayerWorldBounds"}),": Get a player's world boundaries."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneCreate",children:"GangZoneCreate"}),": Create a gangzone."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var r=t(67294);let l={},s=r.createContext(l);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);