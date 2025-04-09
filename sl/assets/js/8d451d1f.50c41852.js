"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["53420"],{27953:function(e,n,r){r.r(n),r.d(n,{default:()=>c,frontMatter:()=>t,metadata:()=>a,assets:()=>i,toc:()=>h,contentTitle:()=>s});var a=JSON.parse('{"id":"scripting/functions/GangZoneShowForPlayer","title":"GangZoneShowForPlayer","description":"Show a gangzone for a player.","source":"@site/docs/scripting/functions/GangZoneShowForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GangZoneShowForPlayer","permalink":"/sl/docs/scripting/functions/GangZoneShowForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GangZoneShowForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/sl/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/sl/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"GangZoneShowForPlayer","sidebar_label":"GangZoneShowForPlayer","description":"Show a gangzone for a player.","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"GangZoneShowForAll","permalink":"/sl/docs/scripting/functions/GangZoneShowForAll"},"next":{"title":"GangZoneStopFlashForAll","permalink":"/sl/docs/scripting/functions/GangZoneStopFlashForAll"}}'),o=r("85893"),l=r("50065");let t={title:"GangZoneShowForPlayer",sidebar_label:"GangZoneShowForPlayer",description:"Show a gangzone for a player.",tags:["player","gangzone"]},s=void 0,i={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["Show a gangzone for a player. Must be created with ",(0,o.jsx)(n.a,{href:"GangZoneCreate",children:"GangZoneCreate"})," first."]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"playerid"}),(0,o.jsx)(n.td,{children:"The ID of the player you would like to show the gangzone for."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"zoneid"}),(0,o.jsxs)(n.td,{children:["The ID of the gang zone to show for the player. Returned by ",(0,o.jsx)(n.a,{href:"GangZoneCreate",children:"GangZoneCreate"})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"colour"}),(0,o.jsx)(n.td,{children:"The color to show the gang zone, as an integer or hex in RGBA color format. Alpha transparency supported."})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"1"})," if the gangzone was shown, otherwise ",(0,o.jsx)(n.strong,{children:"0"})," (non-existant)."]}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"new gGangZoneId;\n\npublic OnGameModeInit()\n{\n    gGangZoneId = GangZoneCreate(1082.962, -2787.229, 2942.549, -1859.51);\n    return 1;\n}\n\npublic OnPlayerSpawn(playerid)\n{\n    GangZoneShowForPlayer(playerid, gGangZoneId, 0xFFFF0096);\n    return 1;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneCreate",children:"GangZoneCreate"}),": Create a gangzone."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneDestroy",children:"GangZoneDestroy"}),": Destroy a gangzone."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneShowForPlayer",children:"GangZoneShowForPlayer"}),": Show a gangzone for a player."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneHideForPlayer",children:"GangZoneHideForPlayer"}),": Hide a gangzone for a player."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneHideForAll",children:"GangZoneHideForAll"}),": Hide a gangzone for all players."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneFlashForPlayer",children:"GangZoneFlashForPlayer"}),": Make a gangzone flash for a player."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneFlashForAll",children:"GangZoneFlashForAll"}),": Make a gangzone flash for all players."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneStopFlashForPlayer",children:"GangZoneStopFlashForPlayer"}),": Stop a gangzone flashing for a player."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneStopFlashForAll",children:"GangZoneStopFlashForAll"}),": Stop a gangzone flashing for all players."]}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return t}});var a=r(67294);let o={},l=a.createContext(o);function t(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);