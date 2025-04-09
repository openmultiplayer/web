"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["21602"],{69348:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>l,assets:()=>o,toc:()=>c,contentTitle:()=>a});var l=JSON.parse('{"id":"scripting/functions/Set3DTextLabelLOS","title":"Set3DTextLabelLOS","description":"Sets the 3D text label line-of-sight.","source":"@site/docs/scripting/functions/Set3DTextLabelLOS.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Set3DTextLabelLOS","permalink":"/th/docs/scripting/functions/Set3DTextLabelLOS","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/Set3DTextLabelLOS.md","tags":[{"inline":true,"label":"3dtextlabel","permalink":"/th/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Set3DTextLabelLOS","sidebar_label":"Set3DTextLabelLOS","description":"Sets the 3D text label line-of-sight.","tags":["3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"Set3DTextLabelDrawDistance","permalink":"/th/docs/scripting/functions/Set3DTextLabelDrawDistance"},"next":{"title":"Set3DTextLabelVirtualWorld","permalink":"/th/docs/scripting/functions/Set3DTextLabelVirtualWorld"}}'),i=n("85893"),s=n("50065");let r={title:"Set3DTextLabelLOS",sidebar_label:"Set3DTextLabelLOS",description:"Sets the 3D text label line-of-sight.",tags:["3dtextlabel"]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Sets the 3D text label line-of-sight."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,i.jsx)(t.td,{children:"The ID of the 3D text label to set the line-of-sight."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["bool",":enable"]}),(0,i.jsx)(t.td,{children:"(false/true) Test the line-of-sight so this text can't be seen through objects"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new Text3D:gMyLabel;\n\ngMyLabel = Create3DTextLabel(\"Hello World!\", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, true);\n\nSet3DTextLabelLOS(gMyLabel, false);\n// The line-of-sight changed from 'true' to 'false'\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"Get3DTextLabelLOS",children:"Get3DTextLabelLOS"}),": Gets the 3D text label line-of-sight."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayer3DTextLabelLOS",children:"SetPlayer3DTextLabelLOS"}),": Sets the player 3D text label line-of-sight."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var l=n(67294);let i={},s=l.createContext(i);function r(e){let t=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);