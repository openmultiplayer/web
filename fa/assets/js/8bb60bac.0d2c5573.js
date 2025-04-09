"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["88754"],{34286:function(e,n,o){o.r(n),o.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>r,assets:()=>i,toc:()=>d,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/GangZoneShowForAll","title":"GangZoneShowForAll","description":"Shows a gangzone with the desired color to all players.","source":"@site/docs/scripting/functions/GangZoneShowForAll.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GangZoneShowForAll","permalink":"/fa/docs/scripting/functions/GangZoneShowForAll","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GangZoneShowForAll.md","tags":[{"inline":true,"label":"gangzone","permalink":"/fa/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"GangZoneShowForAll","sidebar_label":"GangZoneShowForAll","description":"Shows a gangzone with the desired color to all players.","tags":["gangzone"]},"sidebar":"docsSidebar","previous":{"title":"GangZoneHideForPlayer","permalink":"/fa/docs/scripting/functions/GangZoneHideForPlayer"},"next":{"title":"GangZoneShowForPlayer","permalink":"/fa/docs/scripting/functions/GangZoneShowForPlayer"}}'),a=o("85893"),l=o("50065");let t={title:"GangZoneShowForAll",sidebar_label:"GangZoneShowForAll",description:"Shows a gangzone with the desired color to all players.",tags:["gangzone"]},s=void 0,i={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Shows a gangzone with the desired color to all players."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"zoneid"}),(0,a.jsxs)(n.td,{children:["The ID of the gangzone to show (returned by ",(0,a.jsx)(n.a,{href:"GangZoneCreate",children:"GangZoneCreate"}),")."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"colour"}),(0,a.jsx)(n.td,{children:"The color to show the gang zone, as an integer or hex in RGBA color format. Alpha transparency supported."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"1: The function executed successfully. The gang zone was shown for all players."}),"\n",(0,a.jsx)(n.p,{children:"0: The function failed to execute. The gangzone does not exist."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"new gGangZoneId;\n\npublic OnGameModeInit()\n{\n    gGangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);\n    return 1;\n}\n\npublic OnPlayerSpawn(playerid)\n{\n    if (IsPlayerAdmin(playerid))\n    {\n        GangZoneShowForAll(gGangZoneId, 0xFF0000FF);\n    }\n    return 1;\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneCreate",children:"GangZoneCreate"}),": Create a gangzone."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneDestroy",children:"GangZoneDestroy"}),": Destroy a gangzone."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneShowForPlayer",children:"GangZoneShowForPlayer"}),": Show a gangzone for a player."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneHideForPlayer",children:"GangZoneHideForPlayer"}),": Hide a gangzone for a player."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneHideForAll",children:"GangZoneHideForAll"}),": Hide a gangzone for all players."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneFlashForPlayer",children:"GangZoneFlashForPlayer"}),": Make a gangzone flash for a player."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneFlashForAll",children:"GangZoneFlashForAll"}),": Make a gangzone flash for all players."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneStopFlashForPlayer",children:"GangZoneStopFlashForPlayer"}),": Stop a gangzone flashing for a player."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneStopFlashForAll",children:"GangZoneStopFlashForAll"}),": Stop a gangzone flashing for all players."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return s},a:function(){return t}});var r=o(67294);let a={},l=r.createContext(a);function t(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);