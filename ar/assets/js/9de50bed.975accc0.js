"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["74984"],{29913:function(e,n,i){i.r(n),i.d(n,{default:()=>f,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"scripting/functions/fblockwrite","title":"fblockwrite","description":"Write data to a file in binary format, while ignoring line brakes and encoding.","source":"@site/docs/scripting/functions/fblockwrite.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/fblockwrite","permalink":"/ar/docs/scripting/functions/fblockwrite","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/fblockwrite.md","tags":[{"inline":true,"label":"file management","permalink":"/ar/docs/tags/file-management"}],"version":"current","frontMatter":{"title":"fblockwrite","sidebar_label":"fblockwrite","description":"Write data to a file in binary format, while ignoring line brakes and encoding.","tags":["file management"]},"sidebar":"docsSidebar","previous":{"title":"fblockread","permalink":"/ar/docs/scripting/functions/fblockread"},"next":{"title":"fclose","permalink":"/ar/docs/scripting/functions/fclose"}}'),t=i("85893"),l=i("50065");let s={title:"fblockwrite",sidebar_label:"fblockwrite",description:"Write data to a file in binary format, while ignoring line brakes and encoding.",tags:["file management"]},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{LowercaseNote:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Write data to a file in binary format, while ignoring line brakes and encoding."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["File",":handle"]}),(0,t.jsx)(n.td,{children:"The File handle to use, opened by fopen()."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"const buffer[]"}),(0,t.jsx)(n.td,{children:"The data to write to the file."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"size = sizeof (buffer)"}),(0,t.jsx)(n.td,{children:"The number of cells to write."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'// Define "some_enum"\nenum _:some_enum\n{\n    some_data1,\n    some_data2[20],\n    Float:some_data3\n}\n\n// Declare "some_data"\nnew some_data[some_enum];\n\n// ...\n\n// Open "file.bin" in "write only" mode\nnew File:handle = fopen("file.bin", io_write);\n\n// Check, if "file.bin" is open\nif (handle)\n{\n    // Success\n\n    // Write "some_data" into "file.bin"\n    fblockwrite(handle, some_data);\n\n    // Close "file.bin"\n    fclose(handle);\n}\nelse\n{\n    // Error\n    print("Failed to open \\"file.bin\\".");\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Using an invalid handle will crash your server! Get a valid handle by using ",(0,t.jsx)(n.a,{href:"fopen",children:"fopen"})," or ",(0,t.jsx)(n.a,{href:"ftemp",children:"ftemp"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fopen",children:"fopen"}),": Open a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fclose",children:"fclose"}),": Close a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"ftemp",children:"ftemp"}),": Create a temporary file stream."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fremove",children:"fremove"}),": Remove a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fwrite",children:"fwrite"}),": Write to a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fread",children:"fread"}),": Read a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fputchar",children:"fputchar"}),": Put a character in a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fgetchar",children:"fgetchar"}),": Get a character from a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fblockread",children:"fblockread"}),": Read blocks of data from a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fseek",children:"fseek"}),": Jump to a specific character in a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"flength",children:"flength"}),": Get the file length."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fexist",children:"fexist"}),": Check, if a file exists."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fmatch",children:"fmatch"}),": Check, if patterns with a file name matches."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"ftell",children:"ftell"}),": Get the current position in the file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fflush",children:"fflush"}),": Flush a file to disk (ensure all writes are complete)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fstat",children:"fstat"}),": Return the size and the timestamp of a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"frename",children:"frename"}),": Rename a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fcopy",children:"fcopy"}),": Copy a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"filecrc",children:"filecrc"}),": Return the 32-bit CRC value of a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"diskfree",children:"diskfree"}),": Returns the free disk space."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fattrib",children:"fattrib"}),": Set the file attributes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fcreatedir",children:"fcreatedir"}),": Create a directory."]}),"\n"]})]})}function f(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return s}});var r=i(67294);let t={},l=r.createContext(t);function s(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);