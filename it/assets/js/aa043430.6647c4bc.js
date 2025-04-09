"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["18960"],{35065:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>s,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/AllowNickNameCharacter","title":"AllowNickNameCharacter","description":"Allows a character to be used in the nick name.","source":"@site/docs/scripting/functions/AllowNickNameCharacter.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AllowNickNameCharacter","permalink":"/it/docs/scripting/functions/AllowNickNameCharacter","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AllowNickNameCharacter.md","tags":[],"version":"current","frontMatter":{"title":"AllowNickNameCharacter","sidebar_label":"AllowNickNameCharacter","description":"Allows a character to be used in the nick name.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"AllowInteriorWeapons","permalink":"/it/docs/scripting/functions/AllowInteriorWeapons"},"next":{"title":"AllowPlayerTeleport","permalink":"/it/docs/scripting/functions/AllowPlayerTeleport"}}'),i=n("85893"),l=n("50065");let a={title:"AllowNickNameCharacter",sidebar_label:"AllowNickNameCharacter",description:"Allows a character to be used in the nick name.",tags:[]},c=void 0,s={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Allows a character to be used in the nick name."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"character"}),(0,i.jsx)(t.td,{children:"The character to allow or disallow."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["bool",":allow"]}),(0,i.jsx)(t.td,{children:"true-Allow, false-Disallow"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    AllowNickNameCharacter('*', true); // Allow char *\n    AllowNickNameCharacter('[', false); // Disallow char [\n    AllowNickNameCharacter(']', false); // Disallow char ]\n\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"IsNickNameCharacterAllowed",children:"IsNickNameCharacterAllowed"}),": Checks if a character is allowed in nickname."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"IsValidNickName",children:"IsValidNickName"}),": Checks if a nick name is valid."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerName",children:"SetPlayerName"}),": Sets the name of a player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerName",children:"GetPlayerName"}),": Gets the name of a player."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return a}});var r=n(67294);let i={},l=r.createContext(i);function a(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);