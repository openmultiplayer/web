"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["50429"],{57078:function(e,t,n){n.r(t),n.d(t,{default:()=>c,frontMatter:()=>a,metadata:()=>i,assets:()=>h,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/language/reference/Proposed-function-library","title":"Proposed function library","description":"---","source":"@site/docs/scripting/language/reference/10-Proposed-function-library.md","sourceDirName":"scripting/language/reference","slug":"/scripting/language/reference/Proposed-function-library","permalink":"/ro/docs/scripting/language/reference/Proposed-function-library","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/language/reference/10-Proposed-function-library.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Directives","permalink":"/ro/docs/scripting/language/reference/Directives"},"next":{"title":"Pitfalls-differences-from-C","permalink":"/ro/docs/scripting/language/reference/Pitfalls-differences-from-C"}}'),r=n("85893"),s=n("50065");let a={},l="Proposed function library",h={},d=[{value:"\u2022 Core functions",id:"-core-functions",level:3},{value:"\u2022 Console functions",id:"-console-functions",level:3},{value:"\u2022 Date/time functions",id:"-datetime-functions",level:3},{value:"\u2022 File input/output",id:"-file-inputoutput",level:3},{value:"\u2022 Fixed point arithmetic",id:"-fixed-point-arithmetic",level:3},{value:"\u2022 Floating point arithmetic",id:"-floating-point-arithmetic",level:3},{value:"\u2022 String manipulation",id:"-string-manipulation",level:3},{value:"\u2022 DLL call interface",id:"-dll-call-interface",level:3}];function o(e){let t={a:"a",br:"br",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"proposed-function-library",children:"Proposed function library"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.p,{children:["Since PAWN is targeted as an application extension language, most of the\nfunctions that are accessible to PAWN programs will be specific to the",(0,r.jsx)(t.br,{}),"\n","host application. Nevertheless, a small set of functions may prove useful",(0,r.jsx)(t.br,{}),"\n","to many environments."]}),"\n",(0,r.jsx)(t.h3,{id:"-core-functions",children:"\u2022 Core functions"}),"\n",(0,r.jsxs)(t.p,{children:["The \u201Ccore\u201D module consists of a set of functions that support the",(0,r.jsx)(t.br,{}),"\n","language itself. Several of the functions are needed to pull arguments out of a variable\nargument list (see page 80)."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"clamp"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Force a value inside a range"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Syntax"}),(0,r.jsx)(t.td,{children:"clamp(value, min=cellmin, max=cellmax)"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"value"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"The value to force in a range"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"min"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"The low bound of the range."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"The high bound of the range."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Returns"}),(0,r.jsx)(t.td,{children:"value if it is in the range min \u2013 max; min if value is lower than min; and max if value is higher than max."}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"See also"}),(0,r.jsx)(t.td,{children:"max, min"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]})]})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"funcidx"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Return a public funtion index"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Syntax"}),(0,r.jsx)(t.td,{children:"funcidx(const name[])"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Returns"}),(0,r.jsx)(t.td,{children:"The index of the named public function. If no public function with the given name exists, funcidx returns \u22121."}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Notes:"}),(0,r.jsx)(t.td,{children:"A host application runs a public function from the script by passing the public function\u2019s index to amx_Exec. With this function, the script can query the index of a public function, and thereby return the \u201Cnext function to call\u201D to the application."}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]})]})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"getarg"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Get an argument"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Syntax"}),(0,r.jsx)(t.td,{children:"getarg(arg, index=0)"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"arg"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"The argument sequence number, use 0 for first argument."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"index"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"The index, in case arg refers to an array."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Returns"}),(0,r.jsx)(t.td,{children:"The value of the argument"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Notes:"}),(0,r.jsx)(t.td,{children:"This function retrieves an argument from a variable argument list. When the argument is an array, the index parameter specifies the index into the array. The return value is the retrieved argument."}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"See also"}),(0,r.jsx)(t.td,{children:"numargs, setarg"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]})]})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"heapspace"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Return free heap space"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Syntax"}),(0,r.jsx)(t.td,{children:"heapspace()"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Returns"}),(0,r.jsx)(t.td,{children:"The free space on the heap. The stack and the heap occupy a shared memory area, so this value indicates the number of bytes that is left for either the stack or the heap."}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Notes:"}),(0,r.jsx)(t.td,{children:"In absence of recursion, the pawn parser can also give an estimate of the required stack/heap space."}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]})]})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"max"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Return the highest of two numbers"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Syntax"}),(0,r.jsx)(t.td,{children:"max(value1, value2)"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"value1"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"value2"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"The two values for which to find the highest number."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Returns"}),(0,r.jsx)(t.td,{children:"The higher value of value1 and value2"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"See also"}),(0,r.jsx)(t.td,{children:"clamp, min"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]})]})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"min"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Return the lowest of two numbers"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Syntax"}),(0,r.jsx)(t.td,{children:"min(value1, value2)"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"value1"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"value2"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"The two values for which to find the lowest number."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Returns"}),(0,r.jsx)(t.td,{children:"The lowest value of value1 and value2"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"See also"}),(0,r.jsx)(t.td,{children:"clamp, max"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]})]})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"numargs"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Return the number of arguments"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Syntax"}),(0,r.jsx)(t.td,{children:"numargs()"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Returns"}),(0,r.jsx)(t.td,{children:"The number of arguments passed to a function; numargs is useful inside functions with a variable argument list"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"See also"}),(0,r.jsx)(t.td,{children:"getarg, setarg"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]})]})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"random"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Return a pseudo-random number"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Syntax"}),(0,r.jsx)(t.td,{children:"random(max)"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"max"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"The limit for the random number"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Returns"}),(0,r.jsx)(t.td,{children:"A pseudo-random number in the range 0 - max-1"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Notes:"}),(0,r.jsx)(t.td,{children:"The standard random number generator of pawn is likely a linear congruential pseudo-random number generator with a range and a period of 2\xb3\xb9. Linear congruential pseudo-random number generators suffer from serial correlation (especially in the low bits) and it is unsuitable for applications that require high-quality random numbers."}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]})]})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"setarg"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{style:{textAlign:"right"}})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Syntax"}),(0,r.jsx)(t.td,{children:"setarg(arg, index=0, value)"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"arg"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"The argument sequence number, use 0 for first argument"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"index"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"The index, in case arg refers to an array"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"value"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"The value to set the argument to"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Returns"}),(0,r.jsx)(t.td,{children:"true on success and false if the argument or the index are invalid"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Notes:"}),(0,r.jsx)(t.td,{children:"This function sets the value of an argument from a variable argument list. When the argument is an array, the index parameter specifies the index into the array."}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"See also"}),(0,r.jsx)(t.td,{children:"getarg, numargs"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]})]})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"swapchars"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Swap bytes in a cell"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Syntax"}),(0,r.jsx)(t.td,{children:"swapchars(c)"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"c"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"The value for which to swap the bytes"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Returns"}),(0,r.jsx)(t.td,{children:'A value where the bytes in parameter "c" are swapped (the lowest byte becomes the highest byte)'}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]})]})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"tolower"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Convert a character to lower case"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Syntax"}),(0,r.jsx)(t.td,{children:"tolower(c)"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"c"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"The character to convert to lower case."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Returns"}),(0,r.jsx)(t.td,{children:"The upper case variant of the input character, if one exists, or the unchanged character code of \u201Cc\u201D if the letter \u201Cc\u201D has no lower case equivalent."}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Notes:"}),(0,r.jsx)(t.td,{children:"Support for accented characters is platform-dependent"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"See also"}),(0,r.jsx)(t.td,{children:"toupper"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]})]})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"toupper"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Convert a character to upper case"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Syntax"}),(0,r.jsx)(t.td,{children:"toupper(c)"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"c"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"The character to convert to upper case."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Returns"}),(0,r.jsx)(t.td,{children:"The lower case variant of the input character, if one exists, or the unchanged character code of \u201Cc\u201D if the letter \u201Cc\u201D has no upper case equivalent."}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Notes:"}),(0,r.jsx)(t.td,{children:"Support for accented characters is platform-dependent"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"See also"}),(0,r.jsx)(t.td,{children:"tolower"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:"Properties are general purpose names or values. The property list\nroutines maintain a list of these name/value pairs that is shared among all abstract\nmachines. The property list is therefore a way for concurrent abstract machines\nto exchange information."}),"\n",(0,r.jsx)(t.p,{children:"All \u201Cproperty maintenance\u201D functions have an optional \u201Cid\u201D parameter. You\ncan use this parameter to indicate which abstract machine the property belongs\nto. (A host application that supports concurrent abstract machines will usually\nprovide each abstract machine with a unique id.) When querying (or deleting)\na property, the id value that you pass in is matched to the id values of the\nlist."}),"\n",(0,r.jsxs)(t.p,{children:["A property is identified with its \u201Cabstract machine id\u201D plus either a name or",(0,r.jsx)(t.br,{}),"\n","a value. The name-based interface allows you to attach a value (e.g. the handle\nof an object) to a name of your choosing. The value-based interface allows you\nto attach a string to a number. The difference between the two is basically the\nsearch key versus the output parameter."]}),"\n",(0,r.jsx)(t.p,{children:"All property maintenance functions have a \u201Cname\u201D and a \u201Cvalue\u201D parameter.\nOnly one of this pair must be filled in. When you give the value, the getprop-\nerty function stores the result in the string argument and the setproperty\nfunction reads the string to store from the string argument."}),"\n",(0,r.jsx)(t.p,{children:"The number of properties that you can add is limited only by available memory."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"getproperty(id=0, const name[]=\u201C\u201D, value=cellmin, string[]=\u201C\u201D)"})}),"\n",(0,r.jsx)(t.p,{children:"Returns the value of a property when the name is passed in; fills in the\nstring argument when the value is passed in. The name string may\neither be a packed or an unpacked string. If the property does not\nexist, this function returns zero."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"setproperty(id=0, const name[]=\u201C\u201D, value=cellmin, const string[]=\u201C\u201D)"})}),"\n",(0,r.jsx)(t.p,{children:"Add a new property or change an existing property."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"deleteproperty(id=0, const name[]=\u201C\u201D, value=cellmin)"})}),"\n",(0,r.jsx)(t.p,{children:"Returns the value of the property and subsequently removes it. If the\nproperty does not exist, the function returns zero."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"existproperty(id=0, const name[]=\u201C\u201D, value=cellmin)"})}),"\n",(0,r.jsx)(t.p,{children:"Returns true if the property exists and false otherwise."}),"\n",(0,r.jsx)(t.h3,{id:"-console-functions",children:"\u2022 Console functions"}),"\n",(0,r.jsx)(t.p,{children:"For testing purposes, the console functions that read user input and that out-\nput strings in a scrollable window or on a standard terminal display are often\nconvenient. Not all terminal types and implementations may implement all\nfunctions \u2014especially the functions that clear the screen, set foreground and\nbackground colours and control the cursor position, require an extended terminal control."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"getchar(echo=true)"})}),"\n",(0,r.jsx)(t.p,{children:"Read one character from the keyboard and return it. The function can\noptionally echo the character on the console window."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"getstring(string[], size=sizeof string, bool"})}),"\n",(0,r.jsx)(t.p,{children:"pack=false): Read a string from the keyboard. Function getstring\nstops reading when either the enter key is typed, or the maximum\nlength is reached. The maximum length is in cells (not characters)\nand it includes a terminating nul character. The function can read\nboth packed and unpacked strings; when reading a packed string, the\nfunction may read more characters than the size parameter specifies,\nbecause each cell holds multiple characters. The return value is the\nnumber of characters read, excluding the terminating nul character."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"getvalue(base=10, end=\u2018 r\u2019, ...)"})}),"\n",(0,r.jsx)(t.p,{children:"Read a value (a signed number) from the keyboard. The getvalue\nfunction allows you to read in a numeric radix from 2 to 36 (the base\nparameter) with decimal radix by default."}),"\n",(0,r.jsx)(t.p,{children:"By default the input ends when the user types the enter key, but\none or more different keys may be selected (the end parameter and\nsubsequent). In the list of terminating keys, a positive number (like\n\u2019\\r\u2019) displays the key and terminates input, and a negative number\nterminates input without displaying the terminating key."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"print(const string[], foreground=-1, background=-1)"})}),"\n",(0,r.jsx)(t.p,{children:"Prints a simple string on the console. The foreground and background\ncolours may be optionally set (but note that a terminal or a host\napplication may not support colours). See setattr below for a list of\ncolours."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"printf(const format[], ...)"})}),"\n",(0,r.jsx)(t.p,{children:"Prints a string with embedded codes:"}),"\n",(0,r.jsx)(t.p,{children:"%b   print a number at this position in binary radix"}),"\n",(0,r.jsx)(t.p,{children:"%c   a character at this position"}),"\n",(0,r.jsx)(t.p,{children:"%d   print a number at this position in decimal radix"}),"\n",(0,r.jsx)(t.p,{children:"%f   print a floating point number at this position (assuming floating\npoint support is present)"}),"\n",(0,r.jsx)(t.p,{children:"%q   print a fixed point number at this position (assuming fixed point\nsupport is present)"}),"\n",(0,r.jsx)(t.p,{children:"%r   print either a floating point number or a fixed point number at this\nposition, depending on what is available; if both floating point and\nfixed point support is present, %r is equivalent to %f (i.e. printing\na floating point number)"}),"\n",(0,r.jsx)(t.p,{children:"%s   print a character string at this position"}),"\n",(0,r.jsx)(t.p,{children:"%x   print a number at this position in hexadecimal radix"}),"\n",(0,r.jsx)(t.p,{children:"The printf function works similarly to the printf function of the C language."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"clrscr()"})}),"\n",(0,r.jsx)(t.p,{children:"Clears the console and sets the cursor in the upper left corner."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"clreol()"})}),"\n",(0,r.jsx)(t.p,{children:"Clears the line at which the cursor is, from the position of the cursor\nto the right margin of the console. This function does not move the\ncursor."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"gotoxy(x=1, y=1)"})}),"\n",(0,r.jsx)(t.p,{children:"Sets the cursor position on the console.\nThe upper left corner is at (1,1)."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"setattr(foreground=-1, background=-1)"})}),"\n",(0,r.jsx)(t.p,{children:"Sets foreground and background colours for the text written onto the\nconsole. When either of the two parameters is negative (or absent), the\nrespective colour setting will not be changed. The colour value must\nbe a value between zero and seven, as per the ANSI Escape sequences, ISO 6429."}),"\n",(0,r.jsx)(t.p,{children:"Predefined constants for the colours are black (0), red (1),\ngreen (2), yellow (3), blue (4), magenta (5), cyan (6) and white (7)."}),"\n",(0,r.jsx)(t.h3,{id:"-datetime-functions",children:"\u2022 Date/time functions"}),"\n",(0,r.jsx)(t.p,{children:"Functions to get and set the current date and time, as well as a millisecond\nresolution \u201Cevent\u201D timer are described in an application note entitled \u201CTime\nFunctions Library\u201D that is available separately."}),"\n",(0,r.jsx)(t.h3,{id:"-file-inputoutput",children:"\u2022 File input/output"}),"\n",(0,r.jsx)(t.p,{children:"Functions for handling text and binary files, with direct support for UTF-8 text\nfiles, is described in an application note entitled \u201CFile I/O Support Library\u201D\nthat is available separately."}),"\n",(0,r.jsx)(t.h3,{id:"-fixed-point-arithmetic",children:"\u2022 Fixed point arithmetic"}),"\n",(0,r.jsx)(t.p,{children:"The fixed-point decimal arithmetic module for pawn is described in an appli-\ncation note entitled \u201CFixed Point Support Library\u201D that is available\nseparately."}),"\n",(0,r.jsx)(t.h3,{id:"-floating-point-arithmetic",children:"\u2022 Floating point arithmetic"}),"\n",(0,r.jsx)(t.p,{children:"The floating-point arithmetic module for pawn is described in an application\nnote entitled \u201CFloating Point Support Library\u201D that is available separately."}),"\n",(0,r.jsx)(t.h3,{id:"-string-manipulation",children:"\u2022 String manipulation"}),"\n",(0,r.jsx)(t.p,{children:"A general set of string manipulation functions, operating on both packed and\nunpacked strings, is described in an application note entitled \u201CString Manipu-\nlation Library\u201D that is available separately."}),"\n",(0,r.jsx)(t.h3,{id:"-dll-call-interface",children:"\u2022 DLL call interface"}),"\n",(0,r.jsx)(t.p,{children:"The version of the abstract machine that is build as a Dynamic Link Library\nfor Microsoft Windows has a general purpose function to call a function from\nany DLL in memory. Two companion functions load a DLL from disk into\nmemory and unload it. The functions have been set up so that it is possible to\nrun the same compiled script in both 16-bit and 32-bit versions of Microsoft Windows."}),"\n",(0,r.jsx)(t.p,{children:"All string parameters may be in both packed or unpacked form."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"calldll(const dllname[], const function[], const typestr[], ...)"})}),"\n",(0,r.jsx)(t.p,{children:"Parameter dllname is the module name of the DLL, typically this is the\nsame as the filename. If the DLL cannot be found, calldll tries again\nafter appending \u201C16\u201D or \u201C32\u201D to the filename, depending on whether\nyou run the 16-bit or the 32-bit version of the abstract machine. For\nexample, if you set dllname to \u201CUSER\u201D, calldll connects to USER in\nthe 16-bit version of the abstract machine and to USER32 in the 32-bit\nversion."}),"\n",(0,r.jsx)(t.p,{children:"Parameter function is the name of the function in the DLL. In the\n16-bit version of, this name is case insensitive, but in the 32-bit version\nof Microsoft Windows, names of exported functions are case sensitive.\nIn the 32-bit version of the abstract machine, if function cannot be\nfound, calldll appends an upper case \u201CA\u201D to the name and tries again"}),"\n",(0,r.jsx)(t.p,{children:"\u2014many functions in 32-bit Windows exist in two varieties: ANSI and\n\u201CWide\u201D, and these functions are suffixed with an \u201CA\u201D or a \u201CW\u201D respec-\ntively. So if function is \u201CMessageBox\u201D, calldll will call MessageBox\nin the 16-bit version of Windows and MessageBoxA in the 32-bit ver-\nsion."}),"\n",(0,r.jsx)(t.p,{children:"The string parameter typestr indicates the number of arguments that\nthe function (in the DLL) takes and what the types are. For every\nargument, you add one letter to the typestr string:"}),"\n",(0,r.jsx)(t.p,{children:"h   a Windows \u201Chandle\u201D (HWND, HDC, HPALETTE, HMEM, etc.)"}),"\n",(0,r.jsx)(t.p,{children:"i   an integer with a \u201Cnative size\u201D (16-bit or 32-bit, depending on the\n\u201Cbitness\u201D of the abstract machine)."}),"\n",(0,r.jsx)(t.p,{children:"l   a 32-bit integer"}),"\n",(0,r.jsx)(t.p,{children:"p   a packed string"}),"\n",(0,r.jsx)(t.p,{children:"s   an unpacked string"}),"\n",(0,r.jsx)(t.p,{children:"w   a 16-bit unsigned integer"}),"\n",(0,r.jsx)(t.p,{children:"When the letter is in lower case, the corresponding parameter is passed\n\u201Cby value\u201D; when it is in upper case, it is passed \u201Cby reference\u201D. The\ndifference between packed and unpacked strings is only relevant when\nthe parameter is passed by reference."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"loaddll(const dllname[])"})}),"\n",(0,r.jsx)(t.p,{children:"Loads the specified DLL into memory (or increments its usage count\nit were already loaded). The name in parameter dllname may contain\na full path. If no path is specified, Microsoft Windows searches in its\nsystem directories for the DLL. Similarly to the calldll function, this"}),"\n",(0,r.jsx)(t.p,{children:"function appends \u201C16\u201D or \u201C32\u201D to the DLL name if the DLL cannot\nbe found, and then tries again."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"freedll(const dllname[])"})}),"\n",(0,r.jsx)(t.p,{children:"Decrements the DLL\u2019s usage count and, if the count becomes zero,\nremoves the DLL from memory. The name in parameter dllname may\ncontain a full path, but the path information is ignored. Similarly to\nthe calldll function, this function appends \u201C16\u201D or \u201C32\u201D to the DLL\nname if the DLL cannot be found, and then tries again."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"iswin32()"})}),"\n",(0,r.jsx)(t.p,{children:"Returns true if the abstract machine is the 32-bit version (running in\na 32-bit version of Microsoft Windows); returns false if the abstract\nmachine is the 16-bit version (running either on Windows 3.1x or on\nany later version of Microsoft Windows)."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"amx_Exec: see the \u201CImplementor\u2019s Guide\u201D"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/ro/docs/scripting/language/reference/Contents",children:"Go Back to Contents"})})]})}function c(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var i=n(67294);let r={},s=i.createContext(r);function a(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);