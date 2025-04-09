"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["79803"],{65636:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>i,assets:()=>a,toc:()=>l,contentTitle:()=>c});var i=JSON.parse('{"id":"scripting/functions/GetTickCount","title":"GetTickCount","description":"Returns a value which increases every millisecond.","source":"@site/docs/scripting/functions/GetTickCount.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetTickCount","permalink":"/ru/docs/scripting/functions/GetTickCount","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetTickCount.md","tags":[{"inline":true,"label":"time","permalink":"/ru/docs/tags/time"}],"version":"current","frontMatter":{"title":"GetTickCount","sidebar_label":"GetTickCount","description":"Returns a value which increases every millisecond.","tags":["time"]},"sidebar":"docsSidebar","previous":{"title":"GetSpawnInfo","permalink":"/ru/docs/scripting/functions/GetSpawnInfo"},"next":{"title":"GetTimerInterval","permalink":"/ru/docs/scripting/functions/GetTimerInterval"}}'),s=t("85893"),o=t("50065");let r={title:"GetTickCount",sidebar_label:"GetTickCount",description:"Returns a value which increases every millisecond.",tags:["time"]},c=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Returns a value which increases every millisecond. The absolute value returned is undefined and varies between systems, it should only be used to compare two points in time."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Only allow a player to call a command once every ten seconds (10000 milliseconds):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'static gLastCommandUse[MAX_PLAYERS];\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/limited") == 0)\n    {\n        if (GetTickCount() - gLastCommandUse[playerid] >= 10000)\n        {\n            // Enough time has passed.\n            SendClientMessage(playerid, COLOUR_ERROR, "Called!");\n            gLastCommandUse[playerid] = GetTickCount();\n        }\n        else\n        {\n            SendClientMessage(playerid, COLOUR_ERROR, "Please wait");\n        }\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:["The difference in values that ",(0,s.jsx)(n.code,{children:"GetTickCount"})," can handle is limited to just under 25 days (2147483647 milliseconds).  As long as the events being compared are less than that amount apart this function works perfectly with one small caveat.  Due to integer overflow, the following code may not work:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new start = GetTickCount();\n// Long code.\nnew end = GetTickCount();\nif (start + 2000 > end)\n{\n    // The code took less than two seconds.\n}\n"})}),(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"start"})," is very high this code will wrap around and may cause the check to pass erroneously.  However, solving this is very simple:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new start = GetTickCount();\n// Long code.\nnew end = GetTickCount();\nif (2000 > end - start)\n{\n    // The code took less than two seconds.\n}\n"})}),(0,s.jsxs)(n.p,{children:["Simply rearranging the comparison such that ",(0,s.jsx)(n.code,{children:"start"})," and ",(0,s.jsx)(n.code,{children:"end"})," are on the same side fixes the issue entirely.  Those familiar with formula rearrangements should recognise that the two pieces of code are entirely equivalent, but the latter is more correct in modulo arithmetic."]})]}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"Tickcount",children:"Tickcount"}),": Get the uptime of the actual server."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var i=t(67294);let s={},o=i.createContext(s);function r(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);