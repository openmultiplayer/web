"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["65608"],{8195:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>a,assets:()=>l,toc:()=>c,contentTitle:()=>o});var a=JSON.parse('{"id":"scripting/functions/DisableNameTagLOS","title":"DisableNameTagLOS","description":"Disables the nametag Line-Of-Sight checking so that players can see nametags through objects.","source":"@site/docs/scripting/functions/DisableNameTagLOS.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DisableNameTagLOS","permalink":"/sr/docs/scripting/functions/DisableNameTagLOS","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/DisableNameTagLOS.md","tags":[],"version":"current","frontMatter":{"title":"DisableNameTagLOS","sidebar_label":"DisableNameTagLOS","description":"Disables the nametag Line-Of-Sight checking so that players can see nametags through objects.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"DisableMenuRow","permalink":"/sr/docs/scripting/functions/DisableMenuRow"},"next":{"title":"DisablePlayerCheckpoint","permalink":"/sr/docs/scripting/functions/DisablePlayerCheckpoint"}}'),s=t("85893"),i=t("50065");let r={title:"DisableNameTagLOS",sidebar_label:"DisableNameTagLOS",description:"Disables the nametag Line-Of-Sight checking so that players can see nametags through objects.",tags:[]},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Disables the nametag Line-Of-Sight checking so that players can see nametags through objects."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    DisableNameTagLOS();\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"This can not be reversed until the server restarts."})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["You can also disable nametags Line-Of-Sight via ",(0,s.jsx)(n.a,{href:"../../server/config.json",children:"config.json"})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"use_nametag_los": false,\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"ShowNameTags",children:"ShowNameTags"}),": Set nametags on or off."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"ShowPlayerNameTagForPlayer",children:"ShowPlayerNameTagForPlayer"}),": Show or hide a nametag for a certain player."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var a=t(67294);let s={},i=a.createContext(s);function r(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);