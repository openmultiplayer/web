"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["29530"],{94687:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>i,assets:()=>o,toc:()=>l,contentTitle:()=>c});var i=JSON.parse('{"id":"scripting/functions/printf","title":"printf","description":"Outputs a formatted string on the console (the server window, not the in-game chat).","source":"@site/docs/scripting/functions/printf.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/printf","permalink":"/id/docs/scripting/functions/printf","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/printf.md","tags":[{"inline":true,"label":"console","permalink":"/id/docs/tags/console"}],"version":"current","frontMatter":{"title":"printf","sidebar_label":"printf","description":"Outputs a formatted string on the console (the server window, not the in-game chat).","tags":["console"]},"sidebar":"docsSidebar","previous":{"title":"print","permalink":"/id/docs/scripting/functions/print"},"next":{"title":"random","permalink":"/id/docs/scripting/functions/random"}}'),r=n("85893"),s=n("50065");let d={title:"printf",sidebar_label:"printf",description:"Outputs a formatted string on the console (the server window, not the in-game chat).",tags:["console"]},c=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Format Specifiers",id:"format-specifiers",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Outputs a formatted string on the console (the server window, not the in-game chat)."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"const format[]"}),(0,r.jsx)(t.td,{children:"The format string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"{Float, _}:..."}),(0,r.jsx)(t.td,{children:"Indefinite number of arguments of any tag"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,r.jsx)(t.h2,{id:"format-specifiers",children:"Format Specifiers"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Specifier"}),(0,r.jsx)(t.th,{children:"Meaning"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"%i"}),(0,r.jsx)(t.td,{children:"Integer"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"%d"}),(0,r.jsx)(t.td,{children:"Integer"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"%s"}),(0,r.jsx)(t.td,{children:"String"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"%f"}),(0,r.jsx)(t.td,{children:"Floating-point number"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"%c"}),(0,r.jsx)(t.td,{children:"ASCII character"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"%x"}),(0,r.jsx)(t.td,{children:"Hexadecimal number"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"%b"}),(0,r.jsx)(t.td,{children:"Binary number"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"%%"}),(0,r.jsx)(t.td,{children:"Literal '%'"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"%q"}),(0,r.jsx)(t.td,{children:"Escape a text for SQLite. (Added in 0.3.7 R2)"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["The values for the placeholders follow in the exact same order as parameters in the call, i.e. ",(0,r.jsx)(t.code,{children:'"I am %i years old"'})," - the ",(0,r.jsx)(t.code,{children:"%i"})," will be replaced with an integer variable, which is the person's age."]}),"\n",(0,r.jsxs)(t.p,{children:["You may optionally put a number between the ",(0,r.jsx)(t.code,{children:"%"})," and the letter of the placeholder code. This number indicates the field width; if the size of the parameter to print at the position of the placeholder is smaller than the field width, the field is expanded with spaces. To cut the number of decimal places beeing shown of a float, you can add '.<max number>' between the ",(0,r.jsx)(t.code,{children:"%"})," and the ",(0,r.jsx)(t.code,{children:"f"}),", i.e. ",(0,r.jsx)(t.code,{children:"%.2f"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'new number = 42;\nprintf("The number is %d.", number);  // The number is 42.\n\nnew string[] = "simple message";\nprintf("This is a %s containing the number %d.", string, number); // This is a simple message containing the number 42.\n\nnew character = 64;\nprintf("I\'m %c home", character); // I\'m @ home\n'})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"The format string or its output should not exceed 1024 characters. Anything beyond that length can lead to a server to crash."})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"print",children:"print"}),": Print a basic message to the server logs and console."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"format",children:"format"}),": Format a string."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return d}});var i=n(67294);let r={},s=i.createContext(r);function d(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);