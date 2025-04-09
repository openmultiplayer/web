"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["39825"],{11160:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>i});var n=JSON.parse('{"id":"scripting/functions/InterpolateCameraPos","title":"InterpolateCameraPos","description":"Move a player\'s camera from one position to another, within the set time.","source":"@site/docs/scripting/functions/InterpolateCameraPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/InterpolateCameraPos","permalink":"/ta/docs/scripting/functions/InterpolateCameraPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/InterpolateCameraPos.md","tags":[{"inline":true,"label":"player","permalink":"/ta/docs/tags/player"},{"inline":true,"label":"interpolate","permalink":"/ta/docs/tags/interpolate"}],"version":"current","frontMatter":{"title":"InterpolateCameraPos","sidebar_label":"InterpolateCameraPos","description":"Move a player\'s camera from one position to another, within the set time.","tags":["player","interpolate"]},"sidebar":"docsSidebar","previous":{"title":"InterpolateCameraLookAt","permalink":"/ta/docs/scripting/functions/InterpolateCameraLookAt"},"next":{"title":"Is3DTextLabelStreamedIn","permalink":"/ta/docs/scripting/functions/Is3DTextLabelStreamedIn"}}'),s=r("85893"),a=r("50065");let o={title:"InterpolateCameraPos",sidebar_label:"InterpolateCameraPos",description:"Move a player's camera from one position to another, within the set time.",tags:["player","interpolate"]},i=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Move a player's camera from one position to another, within the set time. Useful for scripted cut scenes"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"playerid"}),(0,s.jsx)(t.td,{children:"The ID of the player the camera should be moved for"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":fromX"]}),(0,s.jsx)(t.td,{children:"The X position the camera should start to move from"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":fromY"]}),(0,s.jsx)(t.td,{children:"The Y position the camera should start to move from"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":fromZ"]}),(0,s.jsx)(t.td,{children:"The Z position the camera should start to move from"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":toX"]}),(0,s.jsx)(t.td,{children:"The X position the camera should move to"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":toY"]}),(0,s.jsx)(t.td,{children:"The Y position the camera should move to"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":toZ"]}),(0,s.jsx)(t.td,{children:"The Z position the camera should move to"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"time"}),(0,s.jsx)(t.td,{children:"Time in milliseconds"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["CAM_MOVE",":cut"]}),(0,s.jsxs)(t.td,{children:["The ",(0,s.jsx)(t.a,{href:"../resources/cameracutstyles",children:"jumpcut"})," to use. Defaults to CAMERA_CUT. Set to CAMERA_MOVE for a smooth movement"]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/moveme", true))\n    {\n        TogglePlayerSpectating(playerid, true);\n        InterpolateCameraPos(playerid, 0.0, 0.0, 10.0, 1000.0, 1000.0, 30.0, 10000, CAMERA_MOVE);\n        //Move the player\'s camera from point A to B in 10000 milliseconds (10 seconds).\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Use ",(0,s.jsx)(t.a,{href:"TogglePlayerSpectating",children:"TogglePlayerSpectating"})," to make objects stream in for the player while the camera is moving and remove the HUD."]}),"\n",(0,s.jsxs)(t.li,{children:["The player's camera can be reset to behind the player with ",(0,s.jsx)(t.a,{href:"SetCameraBehindPlayer",children:"SetCameraBehindPlayer"}),"."]}),"\n"]})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"InterpolateCameraLookAt",children:"InterpolateCameraLookAt"}),": Move a player's camera view from one location to another."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetPlayerCameraPos",children:"SetPlayerCameraPos"}),": Set a player's camera position."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetPlayerCameraLookAt",children:"SetPlayerCameraLookAt"}),": Set where a player's camera should face."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../resources/cameracutstyles",children:"Camera Cut Styles"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return o}});var n=r(67294);let s={},a=n.createContext(s);function o(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);