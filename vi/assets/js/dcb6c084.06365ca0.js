"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["13721"],{5651:function(e,i,n){n.r(i),n.d(i,{default:()=>d,frontMatter:()=>l,metadata:()=>t,assets:()=>a,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"scripting/functions/fcopy","title":"fcopy","description":"Copy a file.","source":"@site/docs/scripting/functions/fcopy.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/fcopy","permalink":"/vi/docs/scripting/functions/fcopy","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/fcopy.md","tags":[{"inline":true,"label":"file management","permalink":"/vi/docs/tags/file-management"}],"version":"current","frontMatter":{"title":"fcopy","sidebar_label":"fcopy","description":"Copy a file.","tags":["file management"]},"sidebar":"docsSidebar","previous":{"title":"fclose","permalink":"/vi/docs/scripting/functions/fclose"},"next":{"title":"fcreatedir","permalink":"/vi/docs/scripting/functions/fcreatedir"}}'),r=n("85893"),s=n("50065");let l={title:"fcopy",sidebar_label:"fcopy",description:"Copy a file.",tags:["file management"]},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function f(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{LowercaseNote:n,VersionWarn:t}=i;return n||h("LowercaseNote",!0),t||h("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(n,{}),"\n",(0,r.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(i.p,{children:"Copy a file."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Name"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"const source[]"}),(0,r.jsx)(i.td,{children:"The name of the (existing) file that must be copied, optionally including a path."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"const target[]"}),(0,r.jsx)(i.td,{children:"The name of the new file, optionally including a full path."})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"true"})," on success, ",(0,r.jsx)(i.strong,{children:"false"})," on failure."]}),"\n",(0,r.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'if (fcopy("example.txt", "file.txt"))\n{\n    // Success\n    printf("The file \\"example.txt\\" copied to \\"file.txt\\" successfully.");\n}\nelse\n{\n    // Error\n    print("The file \\"example.txt\\" does not exists, or can\'t be opened.");\n}\n'})}),"\n",(0,r.jsx)(i.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(i.admonition,{type:"warning",children:(0,r.jsx)(i.p,{children:"If the target file already exists, it is overwritten."})}),"\n",(0,r.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fopen",children:"fopen"}),": Open a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fclose",children:"fclose"}),": Close a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"ftemp",children:"ftemp"}),": Create a temporary file stream."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fremove",children:"fremove"}),": Remove a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fwrite",children:"fwrite"}),": Write to a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fputchar",children:"fputchar"}),": Put a character in a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fgetchar",children:"fgetchar"}),": Get a character from a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fblockwrite",children:"fblockwrite"}),": Write blocks of data into a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fblockread",children:"fblockread"}),": Read blocks of data from a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fseek",children:"fseek"}),": Jump to a specific character in a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"flength",children:"flength"}),": Get the file length."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fexist",children:"fexist"}),": Check, if a file exists."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fmatch",children:"fmatch"}),": Check, if patterns with a file name matches."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"ftell",children:"ftell"}),": Get the current position in the file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fflush",children:"fflush"}),": Flush a file to disk (ensure all writes are complete)."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fstat",children:"fstat"}),": Return the size and the timestamp of a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"frename",children:"frename"}),": Rename a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"filecrc",children:"filecrc"}),": Return the 32-bit CRC value of a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"diskfree",children:"diskfree"}),": Returns the free disk space."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fattrib",children:"fattrib"}),": Set the file attributes."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fcreatedir",children:"fcreatedir"}),": Create a directory."]}),"\n"]})]})}function d(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}function h(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50065:function(e,i,n){n.d(i,{Z:function(){return c},a:function(){return l}});var t=n(67294);let r={},s=t.createContext(r);function l(e){let i=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);