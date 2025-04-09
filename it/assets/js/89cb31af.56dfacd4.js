"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["88523"],{57688:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>i,assets:()=>o,toc:()=>d,contentTitle:()=>r});var i=JSON.parse('{"id":"scripting/callbacks/OnPlayerEditObject","title":"OnPlayerEditObject","description":"This callback is called when a player finishes editing an object (BeginObjectEditing/BeginPlayerObjectEditing).","source":"@site/docs/scripting/callbacks/OnPlayerEditObject.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerEditObject","permalink":"/it/docs/scripting/callbacks/OnPlayerEditObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerEditObject.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"},{"inline":true,"label":"object","permalink":"/it/docs/tags/object"}],"version":"current","frontMatter":{"title":"OnPlayerEditObject","sidebar_label":"OnPlayerEditObject","description":"This callback is called when a player finishes editing an object (BeginObjectEditing/BeginPlayerObjectEditing).","tags":["player","object"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEditAttachedObject","permalink":"/it/docs/scripting/callbacks/OnPlayerEditAttachedObject"},"next":{"title":"OnPlayerEnterCheckpoint","permalink":"/it/docs/scripting/callbacks/OnPlayerEnterCheckpoint"}}'),l=n("85893"),s=n("50065");let c={title:"OnPlayerEditObject",sidebar_label:"OnPlayerEditObject",description:"This callback is called when a player finishes editing an object (BeginObjectEditing/BeginPlayerObjectEditing).",tags:["player","object"]},r=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function a(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(t.p,{children:["This callback is called when a player finishes editing an object (",(0,l.jsx)(t.a,{href:"../functions/BeginObjectEditing",children:"BeginObjectEditing"}),"/",(0,l.jsx)(t.a,{href:"../functions/BeginPlayerObjectEditing",children:"BeginPlayerObjectEditing"}),")."]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of the player that edited an object"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerobject"}),(0,l.jsx)(t.td,{children:"0 if it is a global object or 1 if it is a playerobject."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"objectid"}),(0,l.jsx)(t.td,{children:"The ID of the edited object"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["EDIT_RESPONSE",":response"]}),(0,l.jsxs)(t.td,{children:["The ",(0,l.jsx)(t.a,{href:"../resources/objecteditionresponsetypes",children:"type of response"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":fX"]}),(0,l.jsx)(t.td,{children:"The X offset for the object that was edited"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":fY"]}),(0,l.jsx)(t.td,{children:"The Y offset for the object that was edited"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":fZ"]}),(0,l.jsx)(t.td,{children:"The Z offset for the object that was edited"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":fRotX"]}),(0,l.jsx)(t.td,{children:"The X rotation for the object that was edited"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":fRotY"]}),(0,l.jsx)(t.td,{children:"The Y rotation for the object that was edited"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":fRotZ"]}),(0,l.jsx)(t.td,{children:"The Z rotation for the object that was edited"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(t.p,{children:"1 - Will prevent other scripts from receiving this callback."}),"\n",(0,l.jsx)(t.p,{children:"0 - Indicates that this callback will be passed to the next script."}),"\n",(0,l.jsx)(t.p,{children:"It is always called first in filterscripts."}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:"public OnPlayerEditObject(playerid, playerobject, objectid, EDIT_RESPONSE:response, Float:fX, Float:fY, Float:fZ, Float:fRotX, Float:fRotY, Float:fRotZ)\n{\n    new\n        Float: oldX,\n        Float: oldY,\n        Float: oldZ,\n        Float: oldRotX,\n        Float: oldRotY,\n        Float: oldRotZ;\n\n    GetObjectPos(objectid, oldX, oldY, oldZ);\n    GetObjectRot(objectid, oldRotX, oldRotY, oldRotZ);\n\n    if (!playerobject) // If this is a global object, sync the position for other players\n    {\n        if (!IsValidObject(objectid))\n        {\n            return 1;\n        }\n        SetObjectPos(objectid, fX, fY, fZ);\n        SetObjectRot(objectid, fRotX, fRotY, fRotZ);\n    }\n\n    switch (response)\n    {\n        case EDIT_RESPONSE_FINAL:\n        {\n            // The player clicked on the save icon\n            // Do anything here to save the updated object position (and rotation)\n        }\n\n        case EDIT_RESPONSE_CANCEL:\n        {\n            //The player cancelled, so put the object back to it's old position\n            if (!playerobject) //Object is not a playerobject\n            {\n                SetObjectPos(objectid, oldX, oldY, oldZ);\n                SetObjectRot(objectid, oldRotX, oldRotY, oldRotZ);\n            }\n            else\n            {\n                SetPlayerObjectPos(playerid, objectid, oldX, oldY, oldZ);\n                SetPlayerObjectRot(playerid, objectid, oldRotX, oldRotY, oldRotZ);\n            }\n        }\n    }\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(t.admonition,{type:"warning",children:(0,l.jsx)(t.p,{children:"When using 'EDIT_RESPONSE_UPDATE' be aware that this callback will not be called when releasing an edit in progress resulting in the last update of 'EDIT_RESPONSE_UPDATE' being out of sync of the objects current position."})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsx)(t.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"../functions/BeginPlayerObjectEditing",children:"BeginPlayerObjectEditing"}),": Edit a player-object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"../functions/BeginObjectEditing",children:"BeginObjectEditing"}),": Edit an object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"../functions/CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"../functions/DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"../functions/MoveObject",children:"MoveObject"}),": Move an object."]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"../resources/objecteditionresponsetypes",children:"Object Edition Response Types"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return c}});var i=n(67294);let l={},s=i.createContext(l);function c(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);