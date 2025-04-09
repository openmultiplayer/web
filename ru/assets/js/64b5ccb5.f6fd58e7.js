"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["54328"],{79319:function(e,t,r){r.r(t),r.d(t,{default:()=>c,frontMatter:()=>i,metadata:()=>n,assets:()=>s,toc:()=>x,contentTitle:()=>l});var n=JSON.parse('{"id":"scripting/functions/TextDrawBoxColour","title":"TextDrawBoxColour","description":"Adjusts the text box colour (only used if TextDrawUseBox \'enableBox\' parameter is \'true\').","source":"@site/docs/scripting/functions/TextDrawBoxColour.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawBoxColour","permalink":"/ru/docs/scripting/functions/TextDrawBoxColour","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/TextDrawBoxColour.md","tags":[{"inline":true,"label":"textdraw","permalink":"/ru/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawBoxColour","sidebar_label":"TextDrawBoxColour","description":"Adjusts the text box colour (only used if TextDrawUseBox \'enableBox\' parameter is \'true\').","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawBoxColor","permalink":"/ru/docs/scripting/functions/TextDrawBoxColor"},"next":{"title":"TextDrawColor","permalink":"/ru/docs/scripting/functions/TextDrawColor"}}'),o=r("85893"),a=r("50065");let i={title:"TextDrawBoxColour",sidebar_label:"TextDrawBoxColour",description:"Adjusts the text box colour (only used if TextDrawUseBox 'enableBox' parameter is 'true').",tags:["textdraw"]},l=void 0,s={},x=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"Adjusts the text box colour (only used if TextDrawUseBox 'enableBox' parameter is 'true')."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Text",":textid"]}),(0,o.jsx)(t.td,{children:"The TextDraw to change"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"boxColour"}),(0,o.jsx)(t.td,{children:"The colour. Opacity is set by the alpha intensity of colour (eg. colour 0x000000FF has a solid black box opacity, whereas 0x000000AA has a semi-transparent black box opacity)."})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(123.0, 123.0, "Example");\n    TextDrawUseBox(gMyTextdraw, true);\n    TextDrawBoxColour(gMyTextdraw, 0xFFFFFFFF);\n    return 1;\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["If you want to change the boxcolour of a textdraw that is already shown, you don't have to recreate it. Simply use ",(0,o.jsx)(t.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),"/",(0,o.jsx)(t.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"})," after modifying the textdraw and the change will be visible."]})}),"\n",(0,o.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"TextDrawCreate",children:"TextDrawCreate"}),": Create a textdraw."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"TextDrawDestroy",children:"TextDrawDestroy"}),": Destroy a textdraw."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"TextDrawColour",children:"TextDrawColour"}),": Set the colour of the text in a textdraw."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"TextDrawBackgroundColour",children:"TextDrawBackgroundColour"}),": Set the background colour of a textdraw."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"TextDrawAlignment",children:"TextDrawAlignment"}),": Set the alignment of a textdraw."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"TextDrawFont",children:"TextDrawFont"}),": Set the font of a textdraw."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"TextDrawLetterSize",children:"TextDrawLetterSize"}),": Set the letter size of the text in a textdraw."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"TextDrawTextSize",children:"TextDrawTextSize"}),": Set the size of a textdraw box."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"TextDrawSetOutline",children:"TextDrawSetOutline"}),": Choose whether the text has an outline."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"TextDrawSetShadow",children:"TextDrawSetShadow"}),": Toggle shadows on a textdraw."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"TextDrawSetProportional",children:"TextDrawSetProportional"}),": Scale the text spacing in a textdraw to a proportional ratio."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"TextDrawUseBox",children:"TextDrawUseBox"}),": Toggle if the textdraw has a box or not."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"TextDrawSetString",children:"TextDrawSetString"}),": Set the text in an existing textdraw."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": Show a textdraw for a certain player."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"TextDrawHideForPlayer",children:"TextDrawHideForPlayer"}),": Hide a textdraw for a certain player."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),": Show a textdraw for all players."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"TextDrawHideForAll",children:"TextDrawHideForAll"}),": Hide a textdraw for all players."]}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return i}});var n=r(67294);let o={},a=n.createContext(o);function i(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);