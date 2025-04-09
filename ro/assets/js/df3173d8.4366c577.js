"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["8134"],{92842:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/functions/format","title":"format","description":"Formats a string to include variables and other strings inside it.","source":"@site/docs/scripting/functions/format.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/format","permalink":"/ro/docs/scripting/functions/format","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/format.md","tags":[{"inline":true,"label":"string","permalink":"/ro/docs/tags/string"}],"version":"current","frontMatter":{"title":"format","sidebar_label":"format","description":"Formats a string to include variables and other strings inside it.","tags":["string"]},"sidebar":"docsSidebar","previous":{"title":"fopen","permalink":"/ro/docs/scripting/functions/fopen"},"next":{"title":"fputchar","permalink":"/ro/docs/scripting/functions/fputchar"}}'),r=t("85893"),s=t("50065");let d={title:"format",sidebar_label:"format",description:"Formats a string to include variables and other strings inside it.",tags:["string"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Format Specifiers",id:"format-specifiers",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Formats a string to include variables and other strings inside it."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"output[]"}),(0,r.jsx)(n.td,{children:"The string to output the result to"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"len"}),(0,r.jsx)(n.td,{children:"The maximum length output can contain"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"const format[]"}),(0,r.jsx)(n.td,{children:"The format string"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"{Float, _}:..."}),(0,r.jsx)(n.td,{children:"Indefinite number of arguments of any tag"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,r.jsx)(n.h2,{id:"format-specifiers",children:"Format Specifiers"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Specifier"}),(0,r.jsx)(n.th,{children:"Meaning"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"%i"}),(0,r.jsx)(n.td,{children:"Unsigned Integer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"%d"}),(0,r.jsx)(n.td,{children:"Signed Integer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"%s"}),(0,r.jsx)(n.td,{children:"String"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"%f"}),(0,r.jsx)(n.td,{children:"Floating-point number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"%c"}),(0,r.jsx)(n.td,{children:"ASCII character"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"%x"}),(0,r.jsx)(n.td,{children:"Hexadecimal number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"%b"}),(0,r.jsx)(n.td,{children:"Binary number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"%%"}),(0,r.jsx)(n.td,{children:"Literal '%'"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"%q"}),(0,r.jsx)(n.td,{children:"Escape a text for SQLite. (Added in 0.3.7 R2)"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The values for the placeholders follow in the exact same order as parameters in the call, i.e. ",(0,r.jsx)(n.code,{children:'"I am %i years old"'})," - the ",(0,r.jsx)(n.code,{children:"%i"})," will be replaced with an integer variable, which is the person's age."]}),"\n",(0,r.jsxs)(n.p,{children:["You may optionally put a number between the ",(0,r.jsx)(n.code,{children:"%"})," and the letter of the placeholder code. This number indicates the field width; if the size of the parameter to print at the position of the placeholder is smaller than the field width, the field is expanded with spaces. To cut the number of decimal places beeing shown of a float, you can add '.<max number>' between the ",(0,r.jsx)(n.code,{children:"%"})," and the ",(0,r.jsx)(n.code,{children:"f"}),", i.e. ",(0,r.jsx)(n.code,{children:"%.2f"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'new result[128];\nnew number = 42;\nformat(result, sizeof(result), "The number is %i.", number); // The number is 42.\n\nnew string[] = "simple message";\nformat(result, sizeof(result), "This is a %s containing the number %i.", string, number);\n// This is a simple message containing the number 42.\n'})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'new string[64];\nformat(string, sizeof(string), "Your score is: %d", GetPlayerScore(playerid));\nSendClientMessage(playerid, 0xFF8000FF, string);\n'})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'new string[32];\nnew hour, minute, second;\ngettime(hour, minute, second);\nformat(string, sizeof(string), "The time is %02d:%02d:%02d.", hour, minute, second);\n// will output something like "The time is 09:45:02."\n'})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'new string[32];\nformat(string, sizeof(string), "43%s of my shirts are black.", "%%");\nSendClientMessage(playerid, 0xFF8000FF, string);\n'})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"This function doesn't support packed strings."})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"print",children:"print"}),": Print a basic message to the server logs and console."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"printf",children:"printf"}),": Print a formatted message into the server logs and console."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var i=t(67294);let r={},s=i.createContext(r);function d(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);