"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["28208"],{46982:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/functions/ApplyAnimation","title":"ApplyAnimation","description":"Apply an animation to a player.","source":"@site/docs/scripting/functions/ApplyAnimation.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ApplyAnimation","permalink":"/fa/docs/scripting/functions/ApplyAnimation","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ApplyAnimation.md","tags":[{"inline":true,"label":"player","permalink":"/fa/docs/tags/player"},{"inline":true,"label":"animation","permalink":"/fa/docs/tags/animation"}],"version":"current","frontMatter":{"title":"ApplyAnimation","sidebar_label":"ApplyAnimation","description":"Apply an animation to a player.","tags":["player","animation"]},"sidebar":"docsSidebar","previous":{"title":"ApplyActorAnimation","permalink":"/fa/docs/scripting/functions/ApplyActorAnimation"},"next":{"title":"AreAllAnimationsEnabled","permalink":"/fa/docs/scripting/functions/AreAllAnimationsEnabled"}}'),a=i("85893"),r=i("50065");let l={title:"ApplyAnimation",sidebar_label:"ApplyAnimation",description:"Apply an animation to a player.",tags:["player","animation"]},s=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Apply an animation to a player."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"playerid"}),(0,a.jsx)(n.td,{children:"The ID of the player to apply the animation to."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"const animationLibrary[]"}),(0,a.jsxs)(n.td,{children:["The ",(0,a.jsx)(n.a,{href:"../resources/animations",children:"animation library"})," from which to apply an animation."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"const animationName[]"}),(0,a.jsx)(n.td,{children:"The name of the animation to apply, within the specified library."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["Float",":delta"]}),(0,a.jsx)(n.td,{children:"The speed to play the animation (use 4.1)."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["bool",":loop"]}),(0,a.jsx)(n.td,{children:"If set to 'true', the animation will loop. If set to 'false', the animation will play once."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["bool",":lockX"]}),(0,a.jsx)(n.td,{children:"If set to 'false', the player is returned to their old X coordinate once the animation is complete (for animations that move the player such as walking). 'true' will not return them to their old position."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["bool",":lockY"]}),(0,a.jsx)(n.td,{children:"Same as above but for the Y axis. Should be kept the same as the previous parameter."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["bool",":freeze"]}),(0,a.jsx)(n.td,{children:"Setting this to 'true' will freeze the player at the end of the animation. 'false' will not."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"time"}),(0,a.jsx)(n.td,{children:"Timer in milliseconds. For a never-ending loop it should be 0."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["FORCE_SYNC",":forceSync"]}),(0,a.jsx)(n.td,{children:"Set to 1 to make server sync the animation with all other players in streaming radius (optional). 2 works same as 1, but will ONLY apply the animation to streamed-in players, but NOT the actual player being animated (useful for npc animations and persistent animations when players are being streamed)"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"This function always returns true, even if the player specified does not exist, or any of the parameters are invalid (e.g. invalid library)."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'ApplyAnimation(playerid, "PED", "WALK_DRUNK", 4.1, true, true, true, true, 1, 1);\n'})}),"\n",(0,a.jsx)(n.p,{children:"An example for open.mp:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'ApplyAnimation(playerid, "PED", "WALK_DRUNK", 4.1, true, true, true, true, 1, SYNC_NONE);\n// SYNC_NONE: Don\'t force sync to anyone else.\n\nApplyAnimation(playerid, "PED", "WALK_DRUNK", 4.1, true, true, true, true, 1, SYNC_ALL);\n// SYNC_ALL: Sync to all streamed-in players.\n\nApplyAnimation(playerid, "PED", "WALK_DRUNK", 4.1, true, true, true, true, 1, SYNC_OTHER);\n// SYNC_OTHER: Sync to all streamed-in players, except the player with the animation.\n'})}),"\n",(0,a.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The 'forceSync' optional parameter, which defaults to 0 (SYNC_NONE), in most cases is not needed since players sync animations themselves."}),"\n",(0,a.jsx)(n.li,{children:"The 'forcesync' parameter can force all players who can see 'playerid' to play the animation regardless of whether the player is performing that animation. This is useful in circumstances where the player can't sync the animation themselves. For example, they may be paused."}),"\n"]})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"An invalid animation library will crash the player's game. (Fixed in open.mp)"})}),"\n",(0,a.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"ClearAnimations",children:"ClearAnimations"}),": Clear any animations a player is performing."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"SetPlayerSpecialAction",children:"SetPlayerSpecialAction"}),": Set a player's special action."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GetPlayerAnimFlags",children:"GetPlayerAnimFlags"}),": Get the player animation flags."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"IsValidAnimationLibrary",children:"IsValidAnimationLibrary"}),": Checks if the given animation library is valid."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"EnableAllAnimations",children:"EnableAllAnimations"}),": Allow use of the animations missing from some versions."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../resources/animations",children:"Animations"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return l}});var t=i(67294);let a={},r=t.createContext(a);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);