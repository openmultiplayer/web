"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["33804"],{68058:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>i});var n=JSON.parse('{"id":"scripting/functions/InterpolateCameraLookAt","title":"InterpolateCameraLookAt","description":"Interpolate a player\'s camera\'s \'look at\' point between two coordinates with a set speed.","source":"@site/docs/scripting/functions/InterpolateCameraLookAt.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/InterpolateCameraLookAt","permalink":"/hu/docs/scripting/functions/InterpolateCameraLookAt","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/InterpolateCameraLookAt.md","tags":[{"inline":true,"label":"player","permalink":"/hu/docs/tags/player"},{"inline":true,"label":"interpolate","permalink":"/hu/docs/tags/interpolate"}],"version":"current","frontMatter":{"title":"InterpolateCameraLookAt","sidebar_label":"InterpolateCameraLookAt","description":"Interpolate a player\'s camera\'s \'look at\' point between two coordinates with a set speed.","tags":["player","interpolate"]},"sidebar":"docsSidebar","previous":{"title":"HideVehicle","permalink":"/hu/docs/scripting/functions/HideVehicle"},"next":{"title":"InterpolateCameraPos","permalink":"/hu/docs/scripting/functions/InterpolateCameraPos"}}'),a=r("85893"),s=r("50065");let o={title:"InterpolateCameraLookAt",sidebar_label:"InterpolateCameraLookAt",description:"Interpolate a player's camera's 'look at' point between two coordinates with a set speed.",tags:["player","interpolate"]},i=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(t.p,{children:["Interpolate a player's camera's 'look at' point between two coordinates with a set speed. Can be be used with ",(0,a.jsx)(t.a,{href:"InterpolateCameraPos",children:"InterpolateCameraPos"}),"."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The ID of the player the camera should be moved for"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":fromX"]}),(0,a.jsx)(t.td,{children:"The X position the camera should start to move from"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":fromY"]}),(0,a.jsx)(t.td,{children:"The Y position the camera should start to move from"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":fromZ"]}),(0,a.jsx)(t.td,{children:"The Z position the camera should start to move from"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":toX"]}),(0,a.jsx)(t.td,{children:"The X position the camera should move to"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":toY"]}),(0,a.jsx)(t.td,{children:"The Y position the camera should move to"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":toZ"]}),(0,a.jsx)(t.td,{children:"The Z position the camera should move to"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"time"}),(0,a.jsx)(t.td,{children:"Time in milliseconds to complete interpolation"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["CAM_MOVE",":cut"]}),(0,a.jsxs)(t.td,{children:["The ",(0,a.jsx)(t.a,{href:"../resources/cameracutstyles",children:"'jumpcut'"})," to use. Defaults to CAMERA_CUT (pointless). Set to CAMERA_MOVE for interpolation."]})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/rotateme", true))\n    {\n        TogglePlayerSpectating(playerid, true);\n        InterpolateCameraLookAt(playerid, 50.0, 50.0, 10.0, -50.0, 50.0, 10.0, 10000, CAMERA_MOVE);\n        //                                 x1    y1    z1     x2    y2    z2\n        // The camera starts off looking at (x1, y1, z1). It will then rotate and after\n        // 10000 milliseconds (10 seconds) it will be looking at (x2, y2, z2).\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Use ",(0,a.jsx)(t.a,{href:"TogglePlayerSpectating",children:"TogglePlayerSpectating"})," to make objects stream in for the player while the camera is moving."]}),"\n",(0,a.jsxs)(t.li,{children:["You can reset the camera behind the player with ",(0,a.jsx)(t.a,{href:"SetCameraBehindPlayer",children:"SetCameraBehindPlayer"}),"."]}),"\n"]})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"InterpolateCameraPos",children:"InterpolateCameraPos"}),": Move a player's camera from one location to another."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPlayerCameraLookAt",children:"SetPlayerCameraLookAt"}),": Set where a player's camera should face."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPlayerCameraPos",children:"SetPlayerCameraPos"}),": Set a player's camera position."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"../resources/cameracutstyles",children:"Camera Cut Styles"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return o}});var n=r(67294);let a={},s=n.createContext(a);function o(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);