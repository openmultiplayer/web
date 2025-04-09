"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["44011"],{47801:function(e,r,t){t.r(r),t.d(r,{default:()=>h,frontMatter:()=>l,metadata:()=>n,assets:()=>a,toc:()=>c,contentTitle:()=>o});var n=JSON.parse('{"id":"scripting/functions/SetPlayerInterior","title":"SetPlayerInterior","description":"Set a player\'s interior.","source":"@site/docs/scripting/functions/SetPlayerInterior.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerInterior","permalink":"/zh-TW/docs/scripting/functions/SetPlayerInterior","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerInterior.md","tags":[{"inline":true,"label":"player","permalink":"/zh-TW/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerInterior","sidebar_label":"SetPlayerInterior","description":"Set a player\'s interior.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerHoldingObject","permalink":"/zh-TW/docs/scripting/functions/SetPlayerHoldingObject"},"next":{"title":"SetPlayerMapIcon","permalink":"/zh-TW/docs/scripting/functions/SetPlayerMapIcon"}}'),i=t("85893"),s=t("50065");let l={title:"SetPlayerInterior",sidebar_label:"SetPlayerInterior",description:"Set a player's interior.",tags:["player"]},o=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(r.p,{children:"Set a player's interior. A list of currently known interiors and their positions can be found here."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"playerid"}),(0,i.jsx)(r.td,{children:"The ID of the player to set the interior of."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"interiorid"}),(0,i.jsxs)(r.td,{children:["The ",(0,i.jsx)(r.a,{href:"../resources/interiorids",children:"interior ID"})," to set the player in."]})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"false"})," - The function failed to execute. This means the player is not connected."]}),"\n",(0,i.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"// Set player to default interior (outside)\nSetPlayerInterior(playerid, 0);\n"})}),"\n",(0,i.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"GetPlayerInterior",children:"GetPlayerInterior"}),": Get the current interior of a player."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"LinkVehicleToInterior",children:"LinkVehicleToInterior"}),": Change the interior that a vehicle is seen in."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"../callbacks/OnPlayerInteriorChange",children:"OnPlayerInteriorChange"}),": Called when a player changes interior."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"../resources/interiorids",children:"Interior IDs"})}),"\n"]})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return o},a:function(){return l}});var n=t(67294);let i={},s=n.createContext(i);function l(e){let r=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);