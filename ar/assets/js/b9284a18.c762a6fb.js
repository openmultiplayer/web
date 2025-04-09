"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["17414"],{65060:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>r});var t=JSON.parse('{"id":"scripting/callbacks/OnGameModeExit","title":"OnGameModeExit","description":"This callback is called when a gamemode ends, either through \'gmx\', the server being shut down, or GameModeExit.","source":"@site/docs/scripting/callbacks/OnGameModeExit.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnGameModeExit","permalink":"/ar/docs/scripting/callbacks/OnGameModeExit","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnGameModeExit.md","tags":[],"version":"current","frontMatter":{"title":"OnGameModeExit","sidebar_label":"OnGameModeExit","description":"This callback is called when a gamemode ends, either through \'gmx\', the server being shut down, or GameModeExit.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnFilterScriptInit","permalink":"/ar/docs/scripting/callbacks/OnFilterScriptInit"},"next":{"title":"OnGameModeInit","permalink":"/ar/docs/scripting/callbacks/OnGameModeInit"}}'),l=i("85893"),a=i("50065");let s={title:"OnGameModeExit",sidebar_label:"OnGameModeExit",description:"This callback is called when a gamemode ends, either through 'gmx', the server being shut down, or GameModeExit.",tags:[]},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This callback is called when a gamemode ends, either through 'gmx', the server being shut down, or GameModeExit."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnGameModeExit()\n{\n    print("Gamemode ended.");\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"This function can also be used in a filterscript to detect if the gamemode changes with RCON commands like changemode or gmx, as changing the gamemode does not reload a filterscript."})}),"\n",(0,l.jsxs)(n.admonition,{type:"warning",children:[(0,l.jsx)(n.p,{children:"When using OnGameModeExit in conjunction with the 'rcon gmx' console command keep in mind there is a potential for client bugs to occur."}),(0,l.jsxs)(n.p,{children:["An example of this is excessive ",(0,l.jsx)(n.a,{href:"RemoveBuildingForPlayer",children:"RemoveBuildingForPlayer"})," calls during ",(0,l.jsx)(n.a,{href:"OnGameModeInit",children:"OnGameModeInit"})," which could result in a client crash. This callback will NOT be called if the server crashes or the process is killed by other means, such as using the Linux kill command or pressing the close-button on the Windows console."]})]}),"\n",(0,l.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnGameModeInit",children:"OnGameModeInit"}),": This callback is called when a gamemode starts."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnFilterScriptInit",children:"OnFilterScriptInit"}),": This callback is called when a filterscript is loaded."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnFilterScriptExit",children:"OnFilterSciptExit"}),": This callback is called when a filterscript is unloaded."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/GameModeExit",children:"GameModeExit"}),": Exit the current gamemode."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return s}});var t=i(67294);let l={},a=t.createContext(l);function s(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);