"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["34551"],{66340:function(e,t,n){n.r(t),n.d(t,{default:()=>x,frontMatter:()=>s,metadata:()=>l,assets:()=>o,toc:()=>d,contentTitle:()=>a});var l=JSON.parse('{"id":"scripting/functions/Get3DTextLabelText","title":"Get3DTextLabelText","description":"Gets the 3D text label text.","source":"@site/docs/scripting/functions/Get3DTextLabelText.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Get3DTextLabelText","permalink":"/ar/docs/scripting/functions/Get3DTextLabelText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/Get3DTextLabelText.md","tags":[{"inline":true,"label":"3dtextlabel","permalink":"/ar/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Get3DTextLabelText","sidebar_label":"Get3DTextLabelText","description":"Gets the 3D text label text.","tags":["3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"Get3DTextLabelPos","permalink":"/ar/docs/scripting/functions/Get3DTextLabelPos"},"next":{"title":"Get3DTextLabelVirtualWorld","permalink":"/ar/docs/scripting/functions/Get3DTextLabelVirtualWorld"}}'),r=n("85893"),i=n("50065");let s={title:"Get3DTextLabelText",sidebar_label:"Get3DTextLabelText",description:"Gets the 3D text label text.",tags:["3dtextlabel"]},a=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Gets the 3D text label text."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,r.jsx)(t.td,{children:"The ID of the 3D text label to get the text of."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"const text[]"}),(0,r.jsx)(t.td,{children:"An array into which to store the text, passed by reference."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"len"}),(0,r.jsx)(t.td,{children:"The length of the text that should be stored."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"new Text3D:gMyLabel;\n\npublic OnGameModeInit()\n{\n    gMyLabel = Create3DTextLabel(\"Hello World!\", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);\n    \n    new text[16];\n    Get3DTextLabelText(gMyLabel, text, sizeof(text));\n    // The `text` will be 'Hello World!'\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Create3DTextLabel",children:"Create3DTextLabel"}),": Create a 3D text label."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Update3DTextLabelText",children:"Update3DTextLabelText"}),": Updates a 3D Text Label text and colour."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayer3DTextLabelText",children:"GetPlayer3DTextLabelText"}),": Gets the player 3D text label text."]}),"\n"]})]})}function x(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return s}});var l=n(67294);let r={},i=l.createContext(r);function s(e){let t=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);