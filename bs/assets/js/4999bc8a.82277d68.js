"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["2584"],{34460:function(e,t,n){n.r(t),n.d(t,{default:()=>x,frontMatter:()=>r,metadata:()=>a,assets:()=>c,toc:()=>d,contentTitle:()=>l});var a=JSON.parse('{"id":"scripting/functions/Set3DTextLabelDrawDistance","title":"Set3DTextLabelDrawDistance","description":"Sets the 3D text label draw distance.","source":"@site/docs/scripting/functions/Set3DTextLabelDrawDistance.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Set3DTextLabelDrawDistance","permalink":"/bs/docs/scripting/functions/Set3DTextLabelDrawDistance","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/Set3DTextLabelDrawDistance.md","tags":[{"inline":true,"label":"3dtextlabel","permalink":"/bs/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Set3DTextLabelDrawDistance","sidebar_label":"Set3DTextLabelDrawDistance","description":"Sets the 3D text label draw distance.","tags":["3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"SendRconCommand","permalink":"/bs/docs/scripting/functions/SendRconCommand"},"next":{"title":"Set3DTextLabelLOS","permalink":"/bs/docs/scripting/functions/Set3DTextLabelLOS"}}'),s=n("85893"),i=n("50065");let r={title:"Set3DTextLabelDrawDistance",sidebar_label:"Set3DTextLabelDrawDistance",description:"Sets the 3D text label draw distance.",tags:["3dtextlabel"]},l=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Sets the 3D text label draw distance."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,s.jsx)(t.td,{children:"The ID of the 3D text label to set the draw distance."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":drawDistance"]}),(0,s.jsx)(t.td,{children:"The distance from where you are able to see the 3D Text Label."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"This function always returns true."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'new Text3D:gMyLabel;\n\ngMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 0, false);\n\nSet3DTextLabelDrawDistance(gMyLabel, 20.0);\n// The draw distance changed from 10.0 to 20.0\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"Get3DTextLabelDrawDistance",children:"Get3DTextLabelDrawDistance"}),": Gets the 3D text label draw distance."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetPlayer3DTextLabelDrawDistance",children:"SetPlayer3DTextLabelDrawDistance"}),": Sets the player 3D text label draw distance."]}),"\n"]})]})}function x(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return r}});var a=n(67294);let s={},i=a.createContext(s);function r(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);