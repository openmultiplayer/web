"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["995"],{57130:function(e,t,n){n.r(t),n.d(t,{default:()=>x,frontMatter:()=>o,metadata:()=>i,assets:()=>a,toc:()=>c,contentTitle:()=>r});var i=JSON.parse('{"id":"scripting/functions/Get3DTextLabelPos","title":"Get3DTextLabelPos","description":"Gets the 3D text label position.","source":"@site/docs/scripting/functions/Get3DTextLabelPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Get3DTextLabelPos","permalink":"/id/docs/scripting/functions/Get3DTextLabelPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/Get3DTextLabelPos.md","tags":[{"inline":true,"label":"3dtextlabel","permalink":"/id/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Get3DTextLabelPos","sidebar_label":"Get3DTextLabelPos","description":"Gets the 3D text label position.","tags":["3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"Get3DTextLabelLOS","permalink":"/id/docs/scripting/functions/Get3DTextLabelLOS"},"next":{"title":"Get3DTextLabelText","permalink":"/id/docs/scripting/functions/Get3DTextLabelText"}}'),s=n("85893"),l=n("50065");let o={title:"Get3DTextLabelPos",sidebar_label:"Get3DTextLabelPos",description:"Gets the 3D text label position.",tags:["3dtextlabel"]},r=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Gets the 3D text label position."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,s.jsx)(t.td,{children:"The ID of the 3D text label to get the position of."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":x"]}),(0,s.jsx)(t.td,{children:"An float variable into which to store the X coordinate, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":y"]}),(0,s.jsx)(t.td,{children:"An float variable into which to store the Y coordinate, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":z"]}),(0,s.jsx)(t.td,{children:"An float variable into which to store the Z coordinate, passed by reference."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'new Text3D:gMyLabel;\n\npublic OnGameModeInit()\n{\n    gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 0, false);\n\n    new Float:x, Float:y, Float:z;\n    Get3DTextLabelPos(gMyLabel, x, y, z);\n    // x = 30.0\n    // y = 40.0\n    // z = 50.0\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayer3DTextLabelPos",children:"GetPlayer3DTextLabelPos"}),": Gets the player 3D text label position."]}),"\n"]})]})}function x(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return o}});var i=n(67294);let s={},l=i.createContext(s);function o(e){let t=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);