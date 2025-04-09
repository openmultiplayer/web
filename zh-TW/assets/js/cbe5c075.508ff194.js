"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["18391"],{71745:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>r,toc:()=>s,contentTitle:()=>d});var i=JSON.parse('{"id":"scripting/functions/EditAttachedObject","title":"EditAttachedObject","description":"Enter edition mode for an attached object.","source":"@site/docs/scripting/functions/EditAttachedObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/EditAttachedObject","permalink":"/zh-TW/docs/scripting/functions/EditAttachedObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/EditAttachedObject.md","tags":[{"inline":true,"label":"player","permalink":"/zh-TW/docs/tags/player"},{"inline":true,"label":"object","permalink":"/zh-TW/docs/tags/object"},{"inline":true,"label":"attachment","permalink":"/zh-TW/docs/tags/attachment"}],"version":"current","frontMatter":{"title":"EditAttachedObject","sidebar_label":"EditAttachedObject","description":"Enter edition mode for an attached object.","tags":["player","object","attachment"]},"sidebar":"docsSidebar","previous":{"title":"DisableRemoteVehicleCollisions","permalink":"/zh-TW/docs/scripting/functions/DisableRemoteVehicleCollisions"},"next":{"title":"EditObject","permalink":"/zh-TW/docs/scripting/functions/EditObject"}}'),c=n("85893"),a=n("50065");let l={title:"EditAttachedObject",sidebar_label:"EditAttachedObject",description:"Enter edition mode for an attached object.",tags:["player","object","attachment"]},d=void 0,r={},s=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(t.p,{children:"Enter edition mode for an attached object."}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"playerid"}),(0,c.jsx)(t.td,{children:"The ID of the player to enter in to edition mode"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"index"}),(0,c.jsx)(t.td,{children:"The index (slot) of the attached object to edit"})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"1"})," on success and ",(0,c.jsx)(t.strong,{children:"0"})," on failure."]}),"\n",(0,c.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:'public OnPlayerSpawn(playerid)\n{\n    SetPlayerAttachedObject(playerid, 0, 1337, 2);\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/edit", true))\n    {\n        EditAttachedObject(playerid, 0);\n        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You now edit your attached object on index slot 0!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,c.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,c.jsx)(t.admonition,{type:"tip",children:(0,c.jsx)(t.p,{children:"You can move the camera while editing by pressing and holding the spacebar (or W in vehicle) and moving your mouse."})}),"\n",(0,c.jsx)(t.admonition,{type:"warning",children:(0,c.jsx)(t.p,{children:"Players will be able to scale objects up to a very large or negative value size. Limits should be put in place using OnPlayerEditAttachedObject to abort the edit or clip the scale values."})}),"\n",(0,c.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"SetPlayerAttachedObject",children:"SetPlayerAttachedObject"}),": Attach an object to a player"]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"RemovePlayerAttachedObject",children:"RemovePlayerAttachedObject"}),": Remove an attached object from a player"]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"IsPlayerAttachedObjectSlotUsed",children:"IsPlayerAttachedObjectSlotUsed"}),": Check whether an object is attached to a player in a specified index"]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"EditObject",children:"EditObject"}),": Edit an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"EditPlayerObject",children:"EditPlayerObject"}),": Edit an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"SelectObject",children:"SelectObject"}),": Select an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"CancelEdit",children:"CancelEdit"}),": Cancel the edition of an object."]}),"\n"]}),"\n",(0,c.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"../callbacks/OnPlayerEditAttachedObject",children:"OnPlayerEditAttachedObject"}),": Called when a player finishes editing an attached object."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return l}});var i=n(67294);let c={},a=i.createContext(c);function l(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);