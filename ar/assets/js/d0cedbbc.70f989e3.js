"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["52902"],{31786:function(n,e,i){i.r(e),i.d(e,{default:()=>m,frontMatter:()=>l,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/functions/GetPlayerAnimationIndex","title":"GetPlayerAnimationIndex","description":"Returns the index of any running applied animations.","source":"@site/docs/scripting/functions/GetPlayerAnimationIndex.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerAnimationIndex","permalink":"/ar/docs/scripting/functions/GetPlayerAnimationIndex","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerAnimationIndex.md","tags":[{"inline":true,"label":"player","permalink":"/ar/docs/tags/player"},{"inline":true,"label":"animation","permalink":"/ar/docs/tags/animation"}],"version":"current","frontMatter":{"title":"GetPlayerAnimationIndex","sidebar_label":"GetPlayerAnimationIndex","description":"Returns the index of any running applied animations.","tags":["player","animation"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerAnimationFlags","permalink":"/ar/docs/scripting/functions/GetPlayerAnimationFlags"},"next":{"title":"GetPlayerArmour","permalink":"/ar/docs/scripting/functions/GetPlayerArmour"}}'),a=i("85893"),r=i("50065");let l={title:"GetPlayerAnimationIndex",sidebar_label:"GetPlayerAnimationIndex",description:"Returns the index of any running applied animations.",tags:["player","animation"]},s=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(n){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(e.p,{children:"Returns the index of any running applied animations."}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Name"}),(0,a.jsx)(e.th,{children:"Description"})]})}),(0,a.jsx)(e.tbody,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"playerid"}),(0,a.jsx)(e.td,{children:"ID of the player of whom you want to get the animation index of."})]})})]}),"\n",(0,a.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(e.p,{children:"0 if there is no animation applied."}),"\n",(0,a.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-c",children:'public OnPlayerUpdate(playerid)\n{\n    if (GetPlayerAnimationIndex(playerid))\n    {\n        new\n            animationLibrary[32],\n            animationName[32],\n            string[128];\n\n        GetAnimationName(GetPlayerAnimationIndex(playerid), animationLibrary, sizeof (animationLibrary), animationName, sizeof (animationName));\n        \n        format(string, sizeof (string), "Running anim: %s %s", animationLibrary, animationName);\n        SendClientMessage(playerid, 0xFFFFFFFF, string);\n    }\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.a,{href:"ApplyAnimation",children:"ApplyAnimation"}),": Apply an animation to a player."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.a,{href:"GetAnimationName",children:"GetAnimationName"}),": Get the animation library/name for the index."]}),"\n"]})]})}function m(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(c,{...n})}):c(n)}},50065:function(n,e,i){i.d(e,{Z:function(){return s},a:function(){return l}});var t=i(67294);let a={},r=t.createContext(a);function l(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);