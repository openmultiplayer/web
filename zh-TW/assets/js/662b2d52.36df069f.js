"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["52284"],{82932:function(e,n,a){a.r(n),a.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>l,assets:()=>c,toc:()=>o,contentTitle:()=>s});var l=JSON.parse('{"id":"scripting/callbacks/OnPlayerEnterGangZone","title":"OnPlayerEnterGangZone","description":"This callback is called when a player enters a gangzone","source":"@site/docs/scripting/callbacks/OnPlayerEnterGangZone.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerEnterGangZone","permalink":"/zh-TW/docs/scripting/callbacks/OnPlayerEnterGangZone","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerEnterGangZone.md","tags":[{"inline":true,"label":"player","permalink":"/zh-TW/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/zh-TW/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"OnPlayerEnterGangZone","sidebar_label":"OnPlayerEnterGangZone","description":"This callback is called when a player enters a gangzone","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEnterCheckpoint","permalink":"/zh-TW/docs/scripting/callbacks/OnPlayerEnterCheckpoint"},"next":{"title":"OnPlayerEnterPlayerGangZone","permalink":"/zh-TW/docs/scripting/callbacks/OnPlayerEnterPlayerGangZone"}}'),r=a("85893"),t=a("50065");let i={title:"OnPlayerEnterGangZone",sidebar_label:"OnPlayerEnterGangZone",description:"This callback is called when a player enters a gangzone",tags:["player","gangzone"]},s=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{VersionWarn:a}=n;return a||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{name:"callback",version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"This callback is called when a player enters a gangzone"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player that entered the gangzone."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"zoneid"}),(0,r.jsx)(n.td,{children:"The ID of the gangzone the player entered."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"It is always called first in gamemode."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnPlayerEnterGangZone(playerid, zoneid)\n{\n    new string[128];\n    format(string, sizeof(string), "You are entering gangzone %i", zoneid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,r.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"OnPlayerLeaveGangZone",children:"OnPlayerLeaveGangZone"}),": This callback is called when a player exited a gangzone."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/GangZoneCreate",children:"GangZoneCreate"}),": Create a gangzone (colored radar area)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/GangZoneDestroy",children:"GangZoneDestroy"}),": Destroy a gangzone."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/UseGangZoneCheck",children:"UseGangZoneCheck"}),": Enables the callback when a player entered this zone."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return s},a:function(){return i}});var l=a(67294);let r={},t=l.createContext(r);function i(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);