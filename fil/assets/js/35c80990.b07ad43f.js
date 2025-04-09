"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["85086"],{61960:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>d,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"scripting/functions/GetPlayerClass","title":"GetPlayerClass","description":"Get the class data.","source":"@site/docs/scripting/functions/GetPlayerClass.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerClass","permalink":"/fil/docs/scripting/functions/GetPlayerClass","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerClass.md","tags":[{"inline":true,"label":"class","permalink":"/fil/docs/tags/class"}],"version":"current","frontMatter":{"title":"GetPlayerClass","sidebar_label":"GetPlayerClass","description":"Get the class data.","tags":["class"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerCheckpoint","permalink":"/fil/docs/scripting/functions/GetPlayerCheckpoint"},"next":{"title":"GetPlayerColor","permalink":"/fil/docs/scripting/functions/GetPlayerColor"}}'),a=s("85893"),i=s("50065");let r={title:"GetPlayerClass",sidebar_label:"GetPlayerClass",description:"Get the class data.",tags:["class"]},l=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:s}=n;return s||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s,{version:"omp v1.1.0.2612"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Get the class data."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"classid"}),(0,a.jsx)(n.td,{children:"The class id to get data from."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"&team"}),(0,a.jsx)(n.td,{children:"A variable in which to store the team in, passed by reference."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"&skin"}),(0,a.jsx)(n.td,{children:"A variable in which to store the skin in, passed by reference."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["&Float",":spawnX"]}),(0,a.jsx)(n.td,{children:"A float variable in which to store the X coordinate in, passed by reference."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["&Float",":spawnY"]}),(0,a.jsx)(n.td,{children:"A float variable in which to store the Y coordinate in, passed by reference."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["&Float",":spawnZ"]}),(0,a.jsx)(n.td,{children:"A float variable in which to store the Z coordinate in, passed by reference."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["&Float",":angle"]}),(0,a.jsx)(n.td,{children:"A float variable in which to store the angle coordinate in, passed by reference."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["&WEAPON",":weapon1"]}),(0,a.jsx)(n.td,{children:"A variable in which to store the weapon1 in, passed by reference."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"&ammo1"}),(0,a.jsx)(n.td,{children:"A variable in which to store the ammo1 in, passed by reference."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["&WEAPON",":weapon2"]}),(0,a.jsx)(n.td,{children:"A variable in which to store the weapon2 in, passed by reference."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"&ammo2"}),(0,a.jsx)(n.td,{children:"A variable in which to store the ammo2 in, passed by reference."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["&WEAPON",":weapon3"]}),(0,a.jsx)(n.td,{children:"A variable in which to store the weapon3 in, passed by reference."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"&ammo3"}),(0,a.jsx)(n.td,{children:"A variable in which to store the ammo3 in, passed by reference."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'new\n    classid = 10,\n    team,\n    skin,\n    Float:spawnX,\n    Float:spawnY,\n    Float:spawnZ,\n    Float:angle,\n    WEAPON:weapon1,\n    ammo1,\n    WEAPON:weapon2,\n    ammo2,\n    WEAPON:weapon3,\n    ammo3;\n\nGetPlayerClass(classid, team, skin, spawnX, spawnY, spawnZ, angle, weapon1, ammo1, weapon2, ammo2, weapon3, ammo3);\n\nprintf("[Class id %d data]\\n\\\n    team: %d\\n\\\n    skin: %d\\n\\\n    spawnX: %f\\n\\\n    spawnY: %f\\n\\\n    spawnZ: %f\\n\\\n    angle: %f\\n\\\n    weapon1: %d\\n\\\n    ammo1: %d\\n\\\n    weapon2: %d\\n\\\n    ammo2: %d\\n\\\n    weapon3: %d\\n\\\n    ammo3: %d", \n    classid, team, skin, spawnX, spawnY, spawnZ, angle, weapon1, ammo1, weapon2, ammo2, weapon3, ammo3);\n'})}),"\n",(0,a.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"AddPlayerClass",children:"AddPlayerClass"}),": Adds a class."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"AddPlayerClassEx",children:"AddPlayerClassEx"}),": Add a class with a default team."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GetAvailableClasses",children:"GetAvailableClasses"}),": Get the number of classes defined."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return r}});var t=s(67294);let a={},i=t.createContext(a);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);