"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["56195"],{38193:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/functions/ClearAnimations","title":"ClearAnimations","description":"Clears all animations for the given player (it also cancels all current tasks such as jetpacking, parachuting, entering vehicles, driving (removes player out of vehicle), swimming, etc).","source":"@site/docs/scripting/functions/ClearAnimations.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ClearAnimations","permalink":"/ro/docs/scripting/functions/ClearAnimations","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ClearAnimations.md","tags":[{"inline":true,"label":"player","permalink":"/ro/docs/tags/player"},{"inline":true,"label":"animation","permalink":"/ro/docs/tags/animation"}],"version":"current","frontMatter":{"title":"ClearAnimations","sidebar_label":"ClearAnimations","description":"Clears all animations for the given player (it also cancels all current tasks such as jetpacking, parachuting, entering vehicles, driving (removes player out of vehicle), swimming, etc).","tags":["player","animation"]},"sidebar":"docsSidebar","previous":{"title":"ClearActorAnimations","permalink":"/ro/docs/scripting/functions/ClearActorAnimations"},"next":{"title":"ClearBanList","permalink":"/ro/docs/scripting/functions/ClearBanList"}}'),r=t("85893"),a=t("50065");let s={title:"ClearAnimations",sidebar_label:"ClearAnimations",description:"Clears all animations for the given player (it also cancels all current tasks such as jetpacking, parachuting, entering vehicles, driving (removes player out of vehicle), swimming, etc).",tags:["player","animation"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Clears all animations for the given player (it also cancels all current tasks such as jetpacking, parachuting, entering vehicles, driving (removes player out of vehicle), swimming, etc)."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player to clear the animations of."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["FORCE_SYNC",":forceSync"]}),(0,r.jsxs)(n.td,{children:["Set to ",(0,r.jsx)(n.code,{children:"SYNC_ALL"})," to force playerid to sync the animation with other players in streaming radius (default=SYNC_NONE)"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:["This function always returns ",(0,r.jsx)(n.strong,{children:"true"}),", even when the player specified is not connected."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/animclear", true))\n    {\n        ClearAnimations(playerid);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"ClearAnimations doesn't do anything when the animation ends if we pass 'true' for the freeze parameter in ApplyAnimation."})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Unlike some other ways to remove player from a vehicle, this will also reset the vehicle's velocity to zero, instantly stopping the car. Player will appear on top of the vehicle with the same location as he was in his car seat."})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"ApplyAnimation",children:"ApplyAnimation"}),": Apply an animation to a player."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var i=t(67294);let r={},a=i.createContext(r);function s(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);