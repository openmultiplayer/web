"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["7908"],{18025:function(e,n,l){l.r(n),l.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>t});var r=JSON.parse('{"id":"scripting/functions/GangZoneFlashForAll","title":"GangZoneFlashForAll","description":"Flashes a gangzone for all players.","source":"@site/docs/scripting/functions/GangZoneFlashForAll.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GangZoneFlashForAll","permalink":"/fr/docs/scripting/functions/GangZoneFlashForAll","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GangZoneFlashForAll.md","tags":[{"inline":true,"label":"gangzone","permalink":"/fr/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"GangZoneFlashForAll","sidebar_label":"GangZoneFlashForAll","description":"Flashes a gangzone for all players.","tags":["gangzone"]},"sidebar":"docsSidebar","previous":{"title":"GangZoneDestroy","permalink":"/fr/docs/scripting/functions/GangZoneDestroy"},"next":{"title":"GangZoneFlashForPlayer","permalink":"/fr/docs/scripting/functions/GangZoneFlashForPlayer"}}'),a=l("85893"),o=l("50065");let s={title:"GangZoneFlashForAll",sidebar_label:"GangZoneFlashForAll",description:"Flashes a gangzone for all players.",tags:["gangzone"]},t=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Flashes a gangzone for all players."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"zoneid"}),(0,a.jsx)(n.td,{children:"The zone to flash."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"flashColour"}),(0,a.jsx)(n.td,{children:"The color to flash the gang zone, as an integer or hex in RGBA color format. Alpha transparency supported."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"new gGangZoneId;\n\npublic OnGameModeInit()\n{\n    gGangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);\n    return 1;\n}\n\npublic OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    GangZoneFlashForAll(gGangZoneId, 0xFF0000FF); // Red\n    return 1;\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneCreate",children:"GangZoneCreate"}),": Create a gangzone."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneDestroy",children:"GangZoneDestroy"}),": Destroy a gangzone."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneShowForPlayer",children:"GangZoneShowForPlayer"}),": Show a gangzone for a player."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneShowForAll",children:"GangZoneShowForAll"}),": Show a gangzone for all players."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneHideForPlayer",children:"GangZoneHideForPlayer"}),": Hide a gangzone for a player."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneHideForAll",children:"GangZoneHideForAll"}),": Hide a gangzone for all players."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneFlashForPlayer",children:"GangZoneFlashForPlayer"}),": Make a gangzone flash for a player."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneStopFlashForPlayer",children:"GangZoneStopFlashForPlayer"}),": Stop a gangzone flashing for a player."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GangZoneStopFlashForAll",children:"GangZoneStopFlashForAll"}),": Stop a gangzone flashing for all players."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,l){l.d(n,{Z:function(){return t},a:function(){return s}});var r=l(67294);let a={},o=r.createContext(a);function s(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);