"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["49318"],{15322:function(e,t,l){l.r(t),l.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>n,assets:()=>a,toc:()=>d,contentTitle:()=>r});var n=JSON.parse('{"id":"scripting/callbacks/OnPlayerSelectObject","title":"OnPlayerSelectObject","description":"This callback is called when a player selects an object after BeginObjectSelecting has been used.","source":"@site/docs/scripting/callbacks/OnPlayerSelectObject.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerSelectObject","permalink":"/id/docs/scripting/callbacks/OnPlayerSelectObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerSelectObject.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"},{"inline":true,"label":"object","permalink":"/id/docs/tags/object"}],"version":"current","frontMatter":{"title":"OnPlayerSelectObject","sidebar_label":"OnPlayerSelectObject","description":"This callback is called when a player selects an object after BeginObjectSelecting has been used.","tags":["player","object"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerRequestSpawn","permalink":"/id/docs/scripting/callbacks/OnPlayerRequestSpawn"},"next":{"title":"OnPlayerSelectedMenuRow","permalink":"/id/docs/scripting/callbacks/OnPlayerSelectedMenuRow"}}'),c=l("85893"),s=l("50065");let i={title:"OnPlayerSelectObject",sidebar_label:"OnPlayerSelectObject",description:"This callback is called when a player selects an object after BeginObjectSelecting has been used.",tags:["player","object"]},r=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function o(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(t.p,{children:["This callback is called when a player selects an object after ",(0,c.jsx)(t.a,{href:"../functions/BeginObjectSelecting",children:"BeginObjectSelecting"})," has been used."]}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"playerid"}),(0,c.jsx)(t.td,{children:"The ID of the player that selected an object"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["SELECT_OBJECT",":type"]}),(0,c.jsxs)(t.td,{children:["The ",(0,c.jsx)(t.a,{href:"../resources/selectobjecttypes",children:"type"})," of selection"]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"objectid"}),(0,c.jsx)(t.td,{children:"The ID of the selected object"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"modelid"}),(0,c.jsx)(t.td,{children:"The model of the selected object"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["Float",":fX"]}),(0,c.jsx)(t.td,{children:"The X position of the selected object"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["Float",":fY"]}),(0,c.jsx)(t.td,{children:"The Y position of the selected object"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["Float",":fZ"]}),(0,c.jsx)(t.td,{children:"The Z position of the selected object"})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(t.p,{children:"1 - Will prevent other scripts from receiving this callback."}),"\n",(0,c.jsx)(t.p,{children:"0 - Indicates that this callback will be passed to the next script."}),"\n",(0,c.jsx)(t.p,{children:"It is always called first in filterscripts."}),"\n",(0,c.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:'public OnPlayerSelectObject(playerid, SELECT_OBJECT:type, objectid, modelid, Float:fX, Float:fY, Float:fZ)\n{\n    printf("Player %d selected object %d", playerid, objectid);\n\n    if (type == SELECT_OBJECT_GLOBAL_OBJECT)\n    {\n        BeginObjectEditing(playerid, objectid);\n    }\n    else\n    {\n        BeginPlayerObjectEditing(playerid, objectid);\n    }\n\n    SendClientMessage(playerid, 0xFFFFFFFF, "You now are able to edit your object!");\n    return 1;\n}\n'})}),"\n",(0,c.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsx)(t.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"../functions/BeginObjectSelecting",children:"BeginObjectSelecting"}),": Select an object."]}),"\n"]}),"\n",(0,c.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:"../resources/selectobjecttypes",children:"Select Object Types"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return r},a:function(){return i}});var n=l(67294);let c={},s=n.createContext(c);function i(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);