"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["71800"],{77358:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>o});var r=JSON.parse('{"id":"scripting/functions/SetGameModeText","title":"SetGameModeText","description":"Set the name of the game mode, which appears in the server browser.","source":"@site/docs/scripting/functions/SetGameModeText.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetGameModeText","permalink":"/fa/docs/scripting/functions/SetGameModeText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetGameModeText.md","tags":[],"version":"current","frontMatter":{"title":"SetGameModeText","sidebar_label":"SetGameModeText","description":"Set the name of the game mode, which appears in the server browser.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SetDeathDropAmount","permalink":"/fa/docs/scripting/functions/SetDeathDropAmount"},"next":{"title":"SetGravity","permalink":"/fa/docs/scripting/functions/SetGravity"}}'),i=n("85893"),s=n("50065");let a={title:"SetGameModeText",sidebar_label:"SetGameModeText",description:"Set the name of the game mode, which appears in the server browser.",tags:[]},o=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function l(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Set the name of the game mode, which appears in the server browser."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"format[]"}),(0,i.jsx)(t.td,{children:"The gamemode name to display."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"OPEN_MP_TAGS:..."}),(0,i.jsx)(t.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    SetGameModeText("Team Deathmatch");\n    return 1;\n}\n'})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'#define GAME_MODE_VERSION "1.5.0"\n\npublic OnGameModeInit()\n{\n    SetGameModeText("Roleplay v%s", GAME_MODE_VERSION);\n    return 1;\n}\n'})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var r=n(67294);let i={},s=r.createContext(i);function a(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);