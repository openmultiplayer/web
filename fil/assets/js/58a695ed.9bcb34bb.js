"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["47690"],{94104:function(e,t,r){r.r(t),r.d(t,{default:()=>c,frontMatter:()=>i,metadata:()=>n,assets:()=>s,toc:()=>d,contentTitle:()=>l});var n=JSON.parse('{"id":"scripting/functions/TextDrawGetBackgroundColour","title":"TextDrawGetBackgroundColour","description":"Gets the background colour of a textdraw.","source":"@site/docs/scripting/functions/TextDrawGetBackgroundColour.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawGetBackgroundColour","permalink":"/fil/docs/scripting/functions/TextDrawGetBackgroundColour","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/TextDrawGetBackgroundColour.md","tags":[{"inline":true,"label":"textdraw","permalink":"/fil/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawGetBackgroundColour","sidebar_label":"TextDrawGetBackgroundColour","description":"Gets the background colour of a textdraw.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawGetBackgroundColor","permalink":"/fil/docs/scripting/functions/TextDrawGetBackgroundColor"},"next":{"title":"TextDrawGetBoxColor","permalink":"/fil/docs/scripting/functions/TextDrawGetBoxColor"}}'),a=r("85893"),o=r("50065");let i={title:"TextDrawGetBackgroundColour",sidebar_label:"TextDrawGetBackgroundColour",description:"Gets the background colour of a textdraw.",tags:["textdraw"]},l=void 0,s={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function x(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Gets the background colour of a textdraw."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Text",":textid"]}),(0,a.jsx)(t.td,{children:"The ID of the textdraw to get the background colour of."})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"Returns the background colour of the textdraw."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(123.0, 123.0, "Example");\n    TextDrawSetOutline(gMyTextdraw, 1);\n    TextDrawBackgroundColour(gMyTextdraw, 0xFF0000FF);\n\n    new backgroundColour = TextDrawGetBackgroundColour(gMyTextdraw);\n    // backgroundColour = 0xFF0000FF\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawCreate",children:"TextDrawCreate"}),": Create a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawDestroy",children:"TextDrawDestroy"}),": Destroy a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawBoxColour",children:"TextDrawBoxColour"}),": Set the colour of the box in a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawBackgroundColour",children:"TextDrawBackgroundColour"}),": Set the background colour of a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawAlignment",children:"TextDrawAlignment"}),": Set the alignment of a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawFont",children:"TextDrawFont"}),": Set the font of a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawLetterSize",children:"TextDrawLetterSize"}),": Set the letter size of the text in a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawTextSize",children:"TextDrawTextSize"}),": Set the size of a textdraw box."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetOutline",children:"TextDrawSetOutline"}),": Choose whether the text has an outline."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetShadow",children:"TextDrawSetShadow"}),": Toggle shadows on a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetProportional",children:"TextDrawSetProportional"}),": Scale the text spacing in a textdraw to a proportional ratio."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawUseBox",children:"TextDrawUseBox"}),": Toggle if the textdraw has a box or not."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetString",children:"TextDrawSetString"}),": Set the text in an existing textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": Show a textdraw for a certain player."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawHideForPlayer",children:"TextDrawHideForPlayer"}),": Hide a textdraw for a certain player."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),": Show a textdraw for all players."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawHideForAll",children:"TextDrawHideForAll"}),": Hide a textdraw for all players."]}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return i}});var n=r(67294);let a={},o=n.createContext(a);function i(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);