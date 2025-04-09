"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["28432"],{73159:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>f,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/functions/fstat","title":"fstat","description":"Return the size and the timestamp of a file.","source":"@site/docs/scripting/functions/fstat.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/fstat","permalink":"/docs/scripting/functions/fstat","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/fstat.md","tags":[{"inline":true,"label":"file management","permalink":"/docs/tags/file-management"}],"version":"current","frontMatter":{"title":"fstat","sidebar_label":"fstat","description":"Return the size and the timestamp of a file.","tags":["file management"]},"sidebar":"docsSidebar","previous":{"title":"fseek","permalink":"/docs/scripting/functions/fseek"},"next":{"title":"ftell","permalink":"/docs/scripting/functions/ftell"}}'),s=i("85893"),r=i("50065");let l={title:"fstat",sidebar_label:"fstat",description:"Return the size and the timestamp of a file.",tags:["file management"]},a=void 0,c={},f=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{LowercaseNote:i,VersionWarn:n}=t;return i||o("LowercaseNote",!0),n||o("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(i,{}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Return the size and the timestamp of a file."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"const filename[]"}),(0,s.jsx)(t.td,{children:"The name of the file."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"&size"}),(0,s.jsx)(t.td,{children:"If the function is successful, this param-eter holds the size of the file on return."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"&timestamp"}),(0,s.jsx)(t.td,{children:"If the function is successful, this parameter holds the time of the last modification of the file on return."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"&attrib"}),(0,s.jsx)(t.td,{children:"If the function is successful, this parameter holds the file attributes."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"&inode"}),(0,s.jsx)(t.td,{children:"If the function is successful, this parameter holds inode number of the file.  An inode number is a number that uniquely identifies a file, and it usually indicates the physical position of (the start of) the file on the disk or memory card."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"false"})," - The function failed to execute. (File doesn't exist)"]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'new \n    size,\n    timestamp,\n    attrib,\n    inode;\n\nif (fstat("file.txt", size, timestamp, attrib, inode))\n{\n    // Success\n\n    printf("size = %d, timestamp = %d, attrib = %d, inode = %d", size, timestamp, attrib, inode);\n}\nelse\n{\n    // Error\n    print("The file \\"file.txt\\" does not exists, or can\'t be opened.");\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"fopen",children:"fopen"}),": Open a file."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"fclose",children:"fclose"}),": Close a file."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"ftemp",children:"ftemp"}),": Create a temporary file stream."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"fremove",children:"fremove"}),": Remove a file."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"fwrite",children:"fwrite"}),": Write to a file."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"fputchar",children:"fputchar"}),": Put a character in a file."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"fgetchar",children:"fgetchar"}),": Get a character from a file."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"fblockwrite",children:"fblockwrite"}),": Write blocks of data into a file."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"fblockread",children:"fblockread"}),": Read blocks of data from a file."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"fseek",children:"fseek"}),": Jump to a specific character in a file."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"flength",children:"flength"}),": Get the file length."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"fexist",children:"fexist"}),": Check, if a file exists."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"fmatch",children:"fmatch"}),": Check, if patterns with a file name matches."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"ftell",children:"ftell"}),": Get the current position in the file."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"fflush",children:"fflush"}),": Flush a file to disk (ensure all writes are complete)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"frename",children:"frename"}),": Rename a file."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"fcopy",children:"fcopy"}),": Copy a file."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"filecrc",children:"filecrc"}),": Return the 32-bit CRC value of a file."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"diskfree",children:"diskfree"}),": Returns the free disk space."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"fattrib",children:"fattrib"}),": Set the file attributes."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"fcreatedir",children:"fcreatedir"}),": Create a directory."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50065:function(e,t,i){i.d(t,{Z:function(){return a},a:function(){return l}});var n=i(67294);let s={},r=n.createContext(s);function l(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);