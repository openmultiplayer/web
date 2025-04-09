"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["63263"],{67133:function(e,t,a){a.r(t),a.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>r,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/callbacks/OnPlayerEditAttachedObject","title":"OnPlayerEditAttachedObject","description":"This callback is called when a player ends attached object edition mode.","source":"@site/docs/scripting/callbacks/OnPlayerEditAttachedObject.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerEditAttachedObject","permalink":"/sl/docs/scripting/callbacks/OnPlayerEditAttachedObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerEditAttachedObject.md","tags":[{"inline":true,"label":"player","permalink":"/sl/docs/tags/player"},{"inline":true,"label":"object","permalink":"/sl/docs/tags/object"},{"inline":true,"label":"attachment","permalink":"/sl/docs/tags/attachment"}],"version":"current","frontMatter":{"title":"OnPlayerEditAttachedObject","sidebar_label":"OnPlayerEditAttachedObject","description":"This callback is called when a player ends attached object edition mode.","tags":["player","object","attachment"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerDisconnect","permalink":"/sl/docs/scripting/callbacks/OnPlayerDisconnect"},"next":{"title":"OnPlayerEditObject","permalink":"/sl/docs/scripting/callbacks/OnPlayerEditObject"}}'),d=a("85893"),i=a("50065");let l={title:"OnPlayerEditAttachedObject",sidebar_label:"OnPlayerEditAttachedObject",description:"This callback is called when a player ends attached object edition mode.",tags:["player","object","attachment"]},s=void 0,c={},r=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,d.jsx)(t.p,{children:"This callback is called when a player ends attached object edition mode."}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"playerid"}),(0,d.jsx)(t.td,{children:"The ID of the player that ended edition mode"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:["EDIT_RESPONSE",":response"]}),(0,d.jsx)(t.td,{children:"0 if they cancelled (ESC) or 1 if they clicked the save icon"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"index"}),(0,d.jsx)(t.td,{children:"The index of the attached object (0-9)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"modelid"}),(0,d.jsx)(t.td,{children:"The model of the attached object that was edited"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"boneid"}),(0,d.jsx)(t.td,{children:"The bone of the attached object that was edited"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:["Float",":fOffsetX"]}),(0,d.jsx)(t.td,{children:"The X offset for the attached object that was edited"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:["Float",":fOffsetY"]}),(0,d.jsx)(t.td,{children:"The Y offset for the attached object that was edited"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:["Float",":fOffsetZ"]}),(0,d.jsx)(t.td,{children:"The Z offset for the attached object that was edited"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:["Float",":fRotX"]}),(0,d.jsx)(t.td,{children:"The X rotation for the attached object that was edited"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:["Float",":fRotY"]}),(0,d.jsx)(t.td,{children:"The Y rotation for the attached object that was edited"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:["Float",":fRotZ"]}),(0,d.jsx)(t.td,{children:"The Z rotation for the attached object that was edited"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:["Float",":fScaleX"]}),(0,d.jsx)(t.td,{children:"The X scale for the attached object that was edited"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:["Float",":fScaleY"]}),(0,d.jsx)(t.td,{children:"The Y scale for the attached object that was edited"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:["Float",":fScaleZ"]}),(0,d.jsx)(t.td,{children:"The Z scale for the attached object that was edited"})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(t.p,{children:"1 - Will prevent other scripts from receiving this callback."}),"\n",(0,d.jsx)(t.p,{children:"0 - Indicates that this callback will be passed to the next script."}),"\n",(0,d.jsx)(t.p,{children:"It is always called first in filterscripts."}),"\n",(0,d.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-c",children:'enum attached_object_data\n{\n    Float:ao_x,\n    Float:ao_y,\n    Float:ao_z,\n    Float:ao_rx,\n    Float:ao_ry,\n    Float:ao_rz,\n    Float:ao_sx,\n    Float:ao_sy,\n    Float:ao_sz\n}\n\nnew ao[MAX_PLAYERS][MAX_PLAYER_ATTACHED_OBJECTS][attached_object_data];\n\n// The data should be stored in the above array when attached objects are attached.\n\npublic OnPlayerEditAttachedObject(playerid, EDIT_RESPONSE:response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)\n{\n    if (response == EDIT_RESPONSE_FINAL)\n    {\n        SendClientMessage(playerid, COLOR_GREEN, "Attached object edition saved.");\n\n        ao[playerid][index][ao_x] = fOffsetX;\n        ao[playerid][index][ao_y] = fOffsetY;\n        ao[playerid][index][ao_z] = fOffsetZ;\n        ao[playerid][index][ao_rx] = fRotX;\n        ao[playerid][index][ao_ry] = fRotY;\n        ao[playerid][index][ao_rz] = fRotZ;\n        ao[playerid][index][ao_sx] = fScaleX;\n        ao[playerid][index][ao_sy] = fScaleY;\n        ao[playerid][index][ao_sz] = fScaleZ;\n    }\n    else if (response == EDIT_RESPONSE_CANCEL)\n    {\n        SendClientMessage(playerid, COLOR_RED, "Attached object edition not saved.");\n\n        new i = index;\n        SetPlayerAttachedObject(playerid, index, modelid, boneid, ao[playerid][i][ao_x], ao[playerid][i][ao_y], ao[playerid][i][ao_z], ao[playerid][i][ao_rx], ao[playerid][i][ao_ry], ao[playerid][i][ao_rz], ao[playerid][i][ao_sx], ao[playerid][i][ao_sy], ao[playerid][i][ao_sz]);\n    }\n    return 1;\n}\n'})}),"\n",(0,d.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,d.jsx)(t.admonition,{type:"warning",children:(0,d.jsxs)(t.p,{children:["Editions should be discarded if response was '0' (cancelled). This must be done by storing the offsets etc. in an array BEFORE using ",(0,d.jsx)(t.a,{href:"../functions/EditAttachedObject",children:"EditAttachedObject"}),"."]})}),"\n",(0,d.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,d.jsx)(t.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.a,{href:"../functions/EditAttachedObject",children:"EditAttachedObject"}),": Edit an attached object."]}),"\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.a,{href:"../functions/SetPlayerAttachedObject",children:"SetPlayerAttachedObject"}),": Attach an object to a player"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return s},a:function(){return l}});var n=a(67294);let d={},i=n.createContext(d);function l(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);