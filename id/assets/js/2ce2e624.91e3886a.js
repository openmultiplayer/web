"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["73971"],{68990:function(e,t,l){l.r(t),l.d(t,{default:()=>u,frontMatter:()=>i,metadata:()=>n,assets:()=>a,toc:()=>c,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/Get3DTextLabelColour","title":"Get3DTextLabelColour","description":"Gets the 3D text label colour.","source":"@site/docs/scripting/functions/Get3DTextLabelColour.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Get3DTextLabelColour","permalink":"/id/docs/scripting/functions/Get3DTextLabelColour","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/Get3DTextLabelColour.md","tags":[{"inline":true,"label":"3dtextlabel","permalink":"/id/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Get3DTextLabelColour","sidebar_label":"Get3DTextLabelColour","description":"Gets the 3D text label colour.","tags":["3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"Get3DTextLabelColor","permalink":"/id/docs/scripting/functions/Get3DTextLabelColor"},"next":{"title":"Get3DTextLabelDrawDistance","permalink":"/id/docs/scripting/functions/Get3DTextLabelDrawDistance"}}'),r=l("85893"),o=l("50065");let i={title:"Get3DTextLabelColour",sidebar_label:"Get3DTextLabelColour",description:"Gets the 3D text label colour.",tags:["3dtextlabel"]},s=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{VersionWarn:l}=t;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Gets the 3D text label colour."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,r.jsx)(t.td,{children:"The ID of the 3D text label to get the colour of."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"Returns the 3D text label colour."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'new Text3D:gMyLabel;\n\ngMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);\n\nnew colour = Get3DTextLabelColour(gMyLabel);\n// colour = 0x008080FF\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayer3DTextLabelColour",children:"GetPlayer3DTextLabelColour"}),": Gets the player 3D text label colour."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return s},a:function(){return i}});var n=l(67294);let r={},o=n.createContext(r);function i(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);