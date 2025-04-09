"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["79938"],{37795:function(e,i,t){t.r(i),t.d(i,{default:()=>p,frontMatter:()=>c,metadata:()=>l,assets:()=>s,toc:()=>d,contentTitle:()=>a});var l=JSON.parse('{"id":"scripting/callbacks/OnFilterScriptInit","title":"OnFilterScriptInit","description":"This callback is called when a filterscript is initialized (loaded).","source":"@site/docs/scripting/callbacks/OnFilterScriptInit.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnFilterScriptInit","permalink":"/pl/docs/scripting/callbacks/OnFilterScriptInit","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnFilterScriptInit.md","tags":[],"version":"current","frontMatter":{"title":"OnFilterScriptInit","sidebar_label":"OnFilterScriptInit","description":"This callback is called when a filterscript is initialized (loaded).","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnFilterScriptExit","permalink":"/pl/docs/scripting/callbacks/OnFilterScriptExit"},"next":{"title":"OnGameModeExit","permalink":"/pl/docs/scripting/callbacks/OnGameModeExit"}}'),n=t("85893"),r=t("50065");let c={title:"OnFilterScriptInit",sidebar_label:"OnFilterScriptInit",description:"This callback is called when a filterscript is initialized (loaded).",tags:[]},a=void 0,s={},d=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(i.p,{children:"This callback is called when a filterscript is initialized (loaded). It is only called inside the filterscript which is starting."}),"\n",(0,n.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",children:'public OnFilterScriptInit()\n{\n    print("\\n--------------------------------------");\n    print("The filterscript is loaded.");\n    print("--------------------------------------\\n");\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(i.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,n.jsx)(i.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"OnFilterScriptExit",children:"OnFilterSciptExit"}),": This callback is called when a filterscript is unloaded."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"OnGameModeInit",children:"OnGameModeInit"}),": This callback is called when a gamemode starts."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"OnGameModeExit",children:"OnGameModeExit"}),": This callback is called when a gamemode ends."]}),"\n"]})]})}function p(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return a},a:function(){return c}});var l=t(67294);let n={},r=l.createContext(n);function c(e){let i=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),l.createElement(r.Provider,{value:i},e.children)}}}]);