"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["70248"],{47226:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"scripting/functions/getdate","title":"getdate","description":"Get the current server date, which will be stored in the variables &year, &month and &day.","source":"@site/docs/scripting/functions/getdate.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/getdate","permalink":"/it/docs/scripting/functions/getdate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/getdate.md","tags":[{"inline":true,"label":"time","permalink":"/it/docs/tags/time"},{"inline":true,"label":"date","permalink":"/it/docs/tags/date"}],"version":"current","frontMatter":{"title":"getdate","sidebar_label":"getdate","description":"Get the current server date, which will be stored in the variables &year, &month and &day.","tags":["time","date"]},"sidebar":"docsSidebar","previous":{"title":"getarg","permalink":"/it/docs/scripting/functions/getarg"},"next":{"title":"getproperty","permalink":"/it/docs/scripting/functions/getproperty"}}'),i=n("85893"),s=n("50065");let a={title:"getdate",sidebar_label:"getdate",description:"Get the current server date, which will be stored in the variables &year, &month and &day.",tags:["time","date"]},d=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function l(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Get the current server date, which will be stored in the variables &year, &month and &day."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"&year=0"}),(0,i.jsx)(t.td,{children:"The variable to store the year in, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"&month=0"}),(0,i.jsx)(t.td,{children:"The variable to store the month in, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"&day=0"}),(0,i.jsx)(t.td,{children:"The variable to store the day in, passed by reference."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"The number of days since the start of the year."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new Year, Month, Day, Days;\nDays = getdate(Year, Month, Day);\nprintf("%02d/%02d/%d", Day, Month, Year);\nprintf("Days since the start of the year: %d", Days);\n'})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"gettime",children:"gettime"}),": Get the current time of the server as a unix timestamp."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return a}});var r=n(67294);let i={},s=r.createContext(i);function a(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);