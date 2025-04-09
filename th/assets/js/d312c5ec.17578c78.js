"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["66649"],{23722:function(e,t,n){n.r(t),n.d(t,{default:()=>x,frontMatter:()=>r,metadata:()=>l,assets:()=>o,toc:()=>c,contentTitle:()=>a});var l=JSON.parse('{"id":"scripting/functions/Get3DTextLabelLOS","title":"Get3DTextLabelLOS","description":"Gets the 3D text label line-of-sight.","source":"@site/docs/scripting/functions/Get3DTextLabelLOS.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Get3DTextLabelLOS","permalink":"/th/docs/scripting/functions/Get3DTextLabelLOS","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/Get3DTextLabelLOS.md","tags":[{"inline":true,"label":"3dtextlabel","permalink":"/th/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Get3DTextLabelLOS","sidebar_label":"Get3DTextLabelLOS","description":"Gets the 3D text label line-of-sight.","tags":["3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"Get3DTextLabelDrawDistance","permalink":"/th/docs/scripting/functions/Get3DTextLabelDrawDistance"},"next":{"title":"Get3DTextLabelPos","permalink":"/th/docs/scripting/functions/Get3DTextLabelPos"}}'),i=n("85893"),s=n("50065");let r={title:"Get3DTextLabelLOS",sidebar_label:"Get3DTextLabelLOS",description:"Gets the 3D text label line-of-sight.",tags:["3dtextlabel"]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Gets the 3D text label line-of-sight."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,i.jsx)(t.td,{children:"The ID of the 3D text label to get the line-of-sight of."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:["Returns the line-of-sight of the 3D text label as boolean (",(0,i.jsx)(t.code,{children:"false"}),"/",(0,i.jsx)(t.code,{children:"true"}),")."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new Text3D:gMyLabel;\nnew bool:testLOS;\n\ngMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 0, true);\n\ntestLOS = Get3DTextLabelLOS(gMyLabel);\n// testLOS = true\n'})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"Set3DTextLabelLOS",children:"Set3DTextLabelLOS"}),": Sets the 3D text label line-of-sight."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayer3DTextLabelLOS",children:"GetPlayer3DTextLabelLOS"}),": Gets the player 3D text label line-of-sight."]}),"\n"]})]})}function x(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var l=n(67294);let i={},s=l.createContext(i);function r(e){let t=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);