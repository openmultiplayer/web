"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["23877"],{91330:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>o});var s=JSON.parse('{"id":"scripting/functions/UsePlayerPedAnims","title":"UsePlayerPedAnims","description":"Uses standard player walking animation (animation of the CJ skin) instead of custom animations for every skin (e.g. skating for skater skins).","source":"@site/docs/scripting/functions/UsePlayerPedAnims.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/UsePlayerPedAnims","permalink":"/tr/docs/scripting/functions/UsePlayerPedAnims","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/UsePlayerPedAnims.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"}],"version":"current","frontMatter":{"title":"UsePlayerPedAnims","sidebar_label":"UsePlayerPedAnims","description":"Uses standard player walking animation (animation of the CJ skin) instead of custom animations for every skin (e.g. skating for skater skins).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"UsePlayerGangZoneCheck","permalink":"/tr/docs/scripting/functions/UsePlayerGangZoneCheck"},"next":{"title":"VectorSize","permalink":"/tr/docs/scripting/functions/VectorSize"}}'),t=i("85893"),a=i("50065");let r={title:"UsePlayerPedAnims",sidebar_label:"UsePlayerPedAnims",description:"Uses standard player walking animation (animation of the CJ skin) instead of custom animations for every skin (e.g. skating for skater skins).",tags:["player"]},o=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Uses standard player walking animation (animation of the CJ skin) instead of custom animations for every skin (e.g. skating for skater skins)."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    UsePlayerPedAnims();\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["Only works when placed under ",(0,t.jsx)(n.a,{href:"../callbacks/OnGameModeInit",children:"OnGameModeInit"}),"."]}),(0,t.jsx)(n.p,{children:"Not using this function causes two-handed weapons (not dual-handed - a single weapon that is held by both hands) to be held in only one hand."})]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["You can also enable standard player walking animation via ",(0,t.jsx)(n.a,{href:"../../server/config.json",children:"config.json"})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"use_player_ped_anims": true,\n'})})]}),"\n",(0,t.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"ApplyAnimation",children:"ApplyAnimation"}),": Apply an animation to a player."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"ClearAnimations",children:"ClearAnimations"}),": Clear any animations a player is performing."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return r}});var s=i(67294);let t={},a=s.createContext(t);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);