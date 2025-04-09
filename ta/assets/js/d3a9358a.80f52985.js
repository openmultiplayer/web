"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["84818"],{99349:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>r,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/GetPlayerAnimationFlags","title":"GetPlayerAnimationFlags","description":"Get the player animation flags.","source":"@site/docs/scripting/functions/GetPlayerAnimationFlags.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerAnimationFlags","permalink":"/ta/docs/scripting/functions/GetPlayerAnimationFlags","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerAnimationFlags.md","tags":[{"inline":true,"label":"player","permalink":"/ta/docs/tags/player"},{"inline":true,"label":"animation","permalink":"/ta/docs/tags/animation"}],"version":"current","frontMatter":{"title":"GetPlayerAnimationFlags","sidebar_label":"GetPlayerAnimationFlags","description":"Get the player animation flags.","tags":["player","animation"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerAnimFlags","permalink":"/ta/docs/scripting/functions/GetPlayerAnimFlags"},"next":{"title":"GetPlayerAnimationIndex","permalink":"/ta/docs/scripting/functions/GetPlayerAnimationIndex"}}'),a=t("85893"),l=t("50065");let r={title:"GetPlayerAnimationFlags",sidebar_label:"GetPlayerAnimationFlags",description:"Get the player animation flags.",tags:["player","animation"]},s=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Get the player animation flags."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"playerid"}),(0,a.jsx)(n.td,{children:"The player id you want to get the animation flags from"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"Returns the player animation flags as an integer."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.p,{children:"In order to get each flag separately, bit masking is used."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'\n#define ANIM_FREEZE_FLAG   0b0000000000000100\n#define ANIM_LOCK_X_FLAG   0b0010000000000\n#define ANIM_LOCK_Y_FLAG   0b0001000000000\n#define ANIM_LOOP_FLAG     0b0000100000000\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/myanimflags"))\n    {\n        new messageString[128];\n        new flags = GetPlayerAnimationFlags(playerid);\n\n        new bool:freeze  =   (flags & ANIM_FREEZE_FLAG) != 0 ? true : false;\n        new bool:lockx   =   (flags & ANIM_LOCK_X_FLAG) != 0 ? true : false;\n        new bool:locky   =   (flags & ANIM_LOCK_Y_FLAG) != 0 ? true : false;\n        new bool:loop    =   (flags & ANIM_LOOP_FLAG) != 0 ? true : false;\n\n        format(messageString, sizeof(messageString), "Your anim flags are: [freeze:%i] [lockx:%i] [locky:%i] [loop:%i]", freeze, lockx, locky, loop);\n        SendClientMessage(playerid, -1, messageString);\n\n        return 1;\n    }\n\n    return 0;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"If the player state is not on-foot, all returned animation flags are 0."})}),"\n",(0,a.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"ApplyAnimation",children:"ApplyAnimation"}),": Apply an animation to a player."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var i=t(67294);let a={},l=i.createContext(a);function r(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);