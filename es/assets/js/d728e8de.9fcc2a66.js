"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["87054"],{43384:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/functions/AllowInteriorWeapons","title":"AllowInteriorWeapons","description":"Toggle whether the usage of weapons in interiors is allowed or not.","source":"@site/docs/scripting/functions/AllowInteriorWeapons.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AllowInteriorWeapons","permalink":"/es/docs/scripting/functions/AllowInteriorWeapons","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AllowInteriorWeapons.md","tags":[],"version":"current","frontMatter":{"title":"AllowInteriorWeapons","sidebar_label":"AllowInteriorWeapons","description":"Toggle whether the usage of weapons in interiors is allowed or not.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"AllowAdminTeleport","permalink":"/es/docs/scripting/functions/AllowAdminTeleport"},"next":{"title":"AllowNickNameCharacter","permalink":"/es/docs/scripting/functions/AllowNickNameCharacter"}}'),i=r("85893"),o=r("50065");let l={title:"AllowInteriorWeapons",sidebar_label:"AllowInteriorWeapons",description:"Toggle whether the usage of weapons in interiors is allowed or not.",tags:[]},s=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Toggle whether the usage of weapons in interiors is allowed or not."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["bool",":allow"]}),(0,i.jsx)(n.td,{children:"'true' to enable weapons in interiors (enabled by default), 'false' to disable weapons in interiors."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // This will allow weapons inside interiors.\n    AllowInteriorWeapons(true);\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["This function does not work in the current SA",":MP"," version!"]})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["You can also toggle interior weapons via ",(0,i.jsx)(n.a,{href:"../../server/config.json",children:"config.json"})]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"allow_interior_weapons": true,\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"AreInteriorWeaponsAllowed",children:"AreInteriorWeaponsAllowed"}),": Can weapons be used in interiors?"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SetPlayerInterior",children:"SetPlayerInterior"}),": Set a player's interior."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetPlayerInterior",children:"GetPlayerInterior"}),": Get the current interior of a player."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../callbacks/OnPlayerInteriorChange",children:"OnPlayerInteriorChange"}),": Called when a player changes interior."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return l}});var t=r(67294);let i={},o=t.createContext(i);function l(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);