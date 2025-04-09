"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["18960"],{35065:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>s,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/AllowNickNameCharacter","title":"AllowNickNameCharacter","description":"Allows a character to be used in the nick name.","source":"@site/docs/scripting/functions/AllowNickNameCharacter.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AllowNickNameCharacter","permalink":"/ar/docs/scripting/functions/AllowNickNameCharacter","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AllowNickNameCharacter.md","tags":[],"version":"current","frontMatter":{"title":"AllowNickNameCharacter","sidebar_label":"AllowNickNameCharacter","description":"Allows a character to be used in the nick name.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"AllowInteriorWeapons","permalink":"/ar/docs/scripting/functions/AllowInteriorWeapons"},"next":{"title":"AllowPlayerTeleport","permalink":"/ar/docs/scripting/functions/AllowPlayerTeleport"}}'),a=n("85893"),i=n("50065");let l={title:"AllowNickNameCharacter",sidebar_label:"AllowNickNameCharacter",description:"Allows a character to be used in the nick name.",tags:[]},c=void 0,s={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Allows a character to be used in the nick name."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"character"}),(0,a.jsx)(t.td,{children:"The character to allow or disallow."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["bool",":allow"]}),(0,a.jsx)(t.td,{children:"true-Allow, false-Disallow"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    AllowNickNameCharacter('*', true); // Allow char *\n    AllowNickNameCharacter('[', false); // Disallow char [\n    AllowNickNameCharacter(']', false); // Disallow char ]\n\n    return 1;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"IsNickNameCharacterAllowed",children:"IsNickNameCharacterAllowed"}),": Checks if a character is allowed in nickname."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"IsValidNickName",children:"IsValidNickName"}),": Checks if a nick name is valid."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPlayerName",children:"SetPlayerName"}),": Sets the name of a player."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayerName",children:"GetPlayerName"}),": Gets the name of a player."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return l}});var r=n(67294);let a={},i=r.createContext(a);function l(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);