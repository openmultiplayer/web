"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["63097"],{89645:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>r,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/callbacks/OnPlayerEditObject","title":"OnPlayerEditObject","description":"This callback is called when a player finishes editing an object (EditObject/EditPlayerObject).","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerEditObject.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerEditObject","permalink":"/th/docs/scripting/callbacks/OnPlayerEditObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerEditObject.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerEditObject","sidebar_label":"OnPlayerEditObject","description":"This callback is called when a player finishes editing an object (EditObject/EditPlayerObject).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEditAttachedObject","permalink":"/th/docs/scripting/callbacks/OnPlayerEditAttachedObject"},"next":{"title":"OnPlayerEnterCheckpoint","permalink":"/th/docs/scripting/callbacks/OnPlayerEnterCheckpoint"}}'),l=n("85893"),c=n("50065");let o={title:"OnPlayerEditObject",sidebar_label:"OnPlayerEditObject",description:"This callback is called when a player finishes editing an object (EditObject/EditPlayerObject).",tags:["player"]},s=void 0,r={},d=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function a(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,l.jsx)(t.p,{children:"This callback is called when a player finishes editing an object (EditObject/EditPlayerObject)."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of the player that edited an object"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerobject"}),(0,l.jsx)(t.td,{children:"0 if it is a global object or 1 if it is a playerobject."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"objectid"}),(0,l.jsx)(t.td,{children:"The ID of the edited object"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["EDIT_RESPONSE",":response"]}),(0,l.jsxs)(t.td,{children:["The ",(0,l.jsx)(t.a,{href:"/th/docs/scripting/resources/objecteditionresponsetypes",children:"type of response"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":fX"]}),(0,l.jsx)(t.td,{children:"The X offset for the object that was edited"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":fY"]}),(0,l.jsx)(t.td,{children:"The Y offset for the object that was edited"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":fZ"]}),(0,l.jsx)(t.td,{children:"The Z offset for the object that was edited"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":fRotX"]}),(0,l.jsx)(t.td,{children:"The X rotation for the object that was edited"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":fRotY"]}),(0,l.jsx)(t.td,{children:"The Y rotation for the object that was edited"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":fRotZ"]}),(0,l.jsx)(t.td,{children:"The Z rotation for the object that was edited"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,l.jsx)(t.p,{children:"1 - Will prevent other scripts from receiving this callback."}),"\n",(0,l.jsx)(t.p,{children:"0 - Indicates that this callback will be passed to the next script."}),"\n",(0,l.jsx)(t.p,{children:"\u0E21\u0E31\u0E19\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E19\u0E1F\u0E34\u0E25\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E2A\u0E04\u0E23\u0E34\u0E1B\u0E15\u0E4C\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E2A\u0E21\u0E2D"}),"\n",(0,l.jsx)(t.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:"public OnPlayerEditObject(playerid, playerobject, objectid, EDIT_RESPONSE:response, Float:fX, Float:fY, Float:fZ, Float:fRotX, Float:fRotY, Float:fRotZ)\n{\n    new Float:oldX, Float:oldY, Float:oldZ, Float:oldRotX, Float:oldRotY, Float:oldRotZ;\n    GetObjectPos(objectid, oldX, oldY, oldZ);\n    GetObjectRot(objectid, oldRotX, oldRotY, oldRotZ);\n    if (!playerobject) // If this is a global object, sync the position for other players\n    {\n        if (!IsValidObject(objectid))\n        {\n            return 1;\n        }\n        SetObjectPos(objectid, fX, fY, fZ);\n        SetObjectRot(objectid, fRotX, fRotY, fRotZ);\n    }\n\n    if (response == EDIT_RESPONSE_FINAL)\n    {\n        // The player clicked on the save icon\n        // Do anything here to save the updated object position (and rotation)\n    }\n\n    if (response == EDIT_RESPONSE_CANCEL)\n    {\n        //The player cancelled, so put the object back to it's old position\n        if (!playerobject) //Object is not a playerobject\n        {\n            SetObjectPos(objectid, oldX, oldY, oldZ);\n            SetObjectRot(objectid, oldRotX, oldRotY, oldRotZ);\n        }\n        else\n        {\n            SetPlayerObjectPos(playerid, objectid, oldX, oldY, oldZ);\n            SetPlayerObjectRot(playerid, objectid, oldRotX, oldRotY, oldRotZ);\n        }\n    }\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,l.jsx)(t.admonition,{type:"warning",children:(0,l.jsx)(t.p,{children:"When using 'EDIT_RESPONSE_UPDATE' be aware that this callback will not be called when releasing an edit in progress resulting in the last update of 'EDIT_RESPONSE_UPDATE' being out of sync of the objects current position."})}),"\n",(0,l.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"/th/docs/scripting/functions/EditObject",children:"EditObject"}),": Edit an object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"/th/docs/scripting/functions/CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"/th/docs/scripting/functions/DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"/th/docs/scripting/functions/MoveObject",children:"MoveObject"}),": Move an object."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return o}});var i=n(67294);let l={},c=i.createContext(l);function o(e){let t=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);