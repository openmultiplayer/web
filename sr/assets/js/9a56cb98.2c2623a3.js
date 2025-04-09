"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["41327"],{43049:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>l,assets:()=>s,toc:()=>d,contentTitle:()=>c});var l=JSON.parse('{"id":"scripting/functions/CancelSelectTextDraw","title":"CancelSelectTextDraw","description":"Cancel textdraw selection with the mouse.","source":"@site/docs/scripting/functions/CancelSelectTextDraw.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CancelSelectTextDraw","permalink":"/sr/docs/scripting/functions/CancelSelectTextDraw","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/CancelSelectTextDraw.md","tags":[{"inline":true,"label":"textdraw","permalink":"/sr/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"CancelSelectTextDraw","sidebar_label":"CancelSelectTextDraw","description":"Cancel textdraw selection with the mouse.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"CancelEdit","permalink":"/sr/docs/scripting/functions/CancelEdit"},"next":{"title":"ChangeVehicleColor","permalink":"/sr/docs/scripting/functions/ChangeVehicleColor"}}'),i=n("85893"),r=n("50065");let a={title:"CancelSelectTextDraw",sidebar_label:"CancelSelectTextDraw",description:"Cancel textdraw selection with the mouse.",tags:["textdraw"]},c=void 0,s={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Cancel textdraw selection with the mouse"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player that should be the textdraw selection disabled"})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/cancelselect", true))\n    {\n        CancelSelectTextDraw(playerid);\n        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: TextDraw selection disabled!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(t.admonition,{type:"warning",children:[(0,i.jsxs)(t.p,{children:["This function calls ",(0,i.jsx)(t.a,{href:"../callbacks/OnPlayerClickTextDraw",children:"OnPlayerClickTextDraw"})," with INVALID_TEXT_DRAW (65535)."]}),(0,i.jsx)(t.p,{children:"Using this function inside OnPlayerClickTextDraw without catching this case will cause clients to go into an infinite loop."})]}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SelectTextDraw",children:"SelectTextDraw"}),": Enables the mouse, so the player can select a textdraw"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawSetSelectable",children:"TextDrawSetSelectable"}),": Sets whether a textdraw is selectable through SelectTextDraw"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../callbacks/OnPlayerClickTextDraw",children:"OnPlayerClickTextDraw"}),": Called when a player clicks on a textdraw."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return a}});var l=n(67294);let i={},r=l.createContext(i);function a(e){let t=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);