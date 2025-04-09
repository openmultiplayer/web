"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["34581"],{94498:function(e,t,n){n.r(t),n.d(t,{default:()=>f,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>a});var i=JSON.parse('{"id":"scripting/functions/fmatch","title":"fmatch","description":"Find a filename matching a pattern.","source":"@site/docs/scripting/functions/fmatch.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/fmatch","permalink":"/id/docs/scripting/functions/fmatch","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/fmatch.md","tags":[{"inline":true,"label":"file management","permalink":"/id/docs/tags/file-management"}],"version":"current","frontMatter":{"title":"fmatch","sidebar_label":"fmatch","description":"Find a filename matching a pattern.","tags":["file management"]},"sidebar":"docsSidebar","previous":{"title":"floattan","permalink":"/id/docs/scripting/functions/floattan"},"next":{"title":"fopen","permalink":"/id/docs/scripting/functions/fopen"}}'),r=n("85893"),s=n("50065");let l={title:"fmatch",sidebar_label:"fmatch",description:"Find a filename matching a pattern.",tags:["file management"]},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Find a filename matching a pattern."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"const filename[]"}),(0,r.jsx)(t.td,{children:"The string to hold the result in, returned as a packed string."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"const pattern[]"}),(0,r.jsx)(t.td,{children:"The pattern that should be matched. May contain wildcards."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"index"}),(0,r.jsx)(t.td,{children:"The number of the file, in case there are multiple matches. (default: 0)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"size = sizeof (filename)"}),(0,r.jsx)(t.td,{children:"The maximum size of parameter name"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"true"})," - Success (the file matches the pattern)"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"false"})," - Failure (the file does not exist or the pattern does not match)"]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'if (fmatch("file.txt", "*.txt"))\n{\n    print("The file matches the pattern.");\n}\nelse\n{\n    print("The file \\"file.txt\\" does not exists, or pattern does not match.");\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["This function works on open.mp server but not on SA",":MP"," server."]})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fopen",children:"fopen"}),": Open a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fclose",children:"fclose"}),": Close a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"ftemp",children:"ftemp"}),": Create a temporary file stream."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fremove",children:"fremove"}),": Remove a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fwrite",children:"fwrite"}),": Write to a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fread",children:"fread"}),": Read a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fputchar",children:"fputchar"}),": Put a character in a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fgetchar",children:"fgetchar"}),": Get a character from a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fblockwrite",children:"fblockwrite"}),": Write blocks of data into a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fblockread",children:"fblockread"}),": Read blocks of data from a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fseek",children:"fseek"}),": Jump to a specific character in a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"flength",children:"flength"}),": Get the file length."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fexist",children:"fexist"}),": Check, if a file exists."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"ftell",children:"ftell"}),": Get the current position in the file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fflush",children:"fflush"}),": Flush a file to disk (ensure all writes are complete)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fstat",children:"fstat"}),": Return the size and the timestamp of a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"frename",children:"frename"}),": Rename a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fcopy",children:"fcopy"}),": Copy a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"filecrc",children:"filecrc"}),": Return the 32-bit CRC value of a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"diskfree",children:"diskfree"}),": Returns the free disk space."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fattrib",children:"fattrib"}),": Set the file attributes."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fcreatedir",children:"fcreatedir"}),": Create a directory."]}),"\n"]})]})}function f(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var i=n(67294);let r={},s=i.createContext(r);function l(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);