"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["34980"],{27633:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"scripting/functions/IsValidNickName","title":"IsValidNickName","description":"Checks if a nick name is valid.","source":"@site/docs/scripting/functions/IsValidNickName.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsValidNickName","permalink":"/th/docs/scripting/functions/IsValidNickName","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsValidNickName.md","tags":[],"version":"current","frontMatter":{"title":"IsValidNickName","sidebar_label":"IsValidNickName","description":"Checks if a nick name is valid.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"IsValidMenu","permalink":"/th/docs/scripting/functions/IsValidMenu"},"next":{"title":"IsValidObject","permalink":"/th/docs/scripting/functions/IsValidObject"}}'),s=i("85893"),a=i("50065");let r={title:"IsValidNickName",sidebar_label:"IsValidNickName",description:"Checks if a nick name is valid.",tags:[]},l=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components},{VersionWarn:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Checks if a nick name is valid."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"const name[]"}),(0,s.jsx)(n.td,{children:"The nick name to check."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"Returns true if the nick name is valid, otherwise false."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'if (IsValidNickName("Barnaby_Keene"))\n{\n    // Do something\n}\nelse\n{\n    SendClientMessage(playerid, 0xFF0000FF, "Your nick name is not valid.");\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"By default the valid characters in the nick name is (0-9, a-z, A-Z, [], (), $ @ . _ and = only)."})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"AllowNickNameCharacter",children:"AllowNickNameCharacter"}),": Allows a character to be used in the nick name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"SetPlayerName",children:"SetPlayerName"}),": Sets the name of a player."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GetPlayerName",children:"GetPlayerName"}),": Gets the name of a player."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return r}});var t=i(67294);let s={},a=t.createContext(s);function r(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);