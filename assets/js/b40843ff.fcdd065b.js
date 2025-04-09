"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["77458"],{83772:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>l,toc:()=>x,contentTitle:()=>o});var n=JSON.parse('{"id":"scripting/functions/TextDrawUseBox","title":"TextDrawUseBox","description":"Toggle whether a textdraw uses a box or not.","source":"@site/docs/scripting/functions/TextDrawUseBox.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawUseBox","permalink":"/docs/scripting/functions/TextDrawUseBox","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/TextDrawUseBox.md","tags":[{"inline":true,"label":"textdraw","permalink":"/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawUseBox","sidebar_label":"TextDrawUseBox","description":"Toggle whether a textdraw uses a box or not.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawTextSize","permalink":"/docs/scripting/functions/TextDrawTextSize"},"next":{"title":"tickcount","permalink":"/docs/scripting/functions/Tickcount"}}'),a=r("85893"),i=r("50065");let s={title:"TextDrawUseBox",sidebar_label:"TextDrawUseBox",description:"Toggle whether a textdraw uses a box or not.",tags:["textdraw"]},o=void 0,l={},x=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Toggle whether a textdraw uses a box or not."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Text",":textid"]}),(0,a.jsx)(t.td,{children:"The ID of the text textdraw to toggle the box of."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["bool",":enableBox"]}),(0,a.jsx)(t.td,{children:"'true' to show a box or 'false' to not show a box."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"false"})," - The function failed to execute. This means the textdraw specified does not exist."]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");\n    TextDrawUseBox(gMyTextdraw, true); // Toggle box ON\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["If the textdraw is already shown, it must be re-shown (",(0,a.jsx)(t.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),"/",(0,a.jsx)(t.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),") to show the changes of this function."]})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawCreate",children:"TextDrawCreate"}),": Create a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawDestroy",children:"TextDrawDestroy"}),": Destroy a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawIsBox",children:"TextDrawIsBox"}),": Checks if a textdraw is box."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawColor",children:"TextDrawColor"}),": Set the color of the text in a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawBoxColor",children:"TextDrawBoxColor"}),": Set the color of the box in a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawBackgroundColor",children:"TextDrawBackgroundColor"}),": Set the background color of a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawAlignment",children:"TextDrawAlignment"}),": Set the alignment of a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawFont",children:"TextDrawFont"}),": Set the font of a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawLetterSize",children:"TextDrawLetterSize"}),": Set the letter size of the text in a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawTextSize",children:"TextDrawTextSize"}),": Set the size of a textdraw box."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetOutline",children:"TextDrawSetOutline"}),": Choose whether the text has an outline."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetShadow",children:"TextDrawSetShadow"}),": Toggle shadows on a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetProportional",children:"TextDrawSetProportional"}),": Scale the text spacing in a textdraw to a proportional ratio."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetString",children:"TextDrawSetString"}),": Set the text in an existing textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": Show a textdraw for a certain player."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawHideForPlayer",children:"TextDrawHideForPlayer"}),": Hide a textdraw for a certain player."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),": Show a textdraw for all players."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawHideForAll",children:"TextDrawHideForAll"}),": Hide a textdraw for all players."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return s}});var n=r(67294);let a={},i=n.createContext(a);function s(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);