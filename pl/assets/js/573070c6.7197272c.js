"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["3638"],{4181:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>a,assets:()=>l,toc:()=>c,contentTitle:()=>r});var a=JSON.parse('{"id":"scripting/language/Tags","title":"Scripting: Tags","description":"A guide for Tags, a type-like feature of the Pawn language providing safety features for working with values of different intent.","source":"@site/docs/scripting/language/Tags.md","sourceDirName":"scripting/language","slug":"/scripting/language/Tags","permalink":"/pl/docs/scripting/language/Tags","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/language/Tags.md","tags":[],"version":"current","frontMatter":{"title":"Scripting: Tags","sidebar_label":"Scripting: Tags","description":"A guide for Tags, a type-like feature of the Pawn language providing safety features for working with values of different intent."},"sidebar":"docsSidebar","previous":{"title":"Pawn Style Guide","permalink":"/pl/docs/scripting/language/Style"},"next":{"title":"Basics: Variables","permalink":"/pl/docs/scripting/language/Variables"}}'),i=t("85893"),o=t("50065");let s={title:"Scripting: Tags",sidebar_label:"Scripting: Tags",description:"A guide for Tags, a type-like feature of the Pawn language providing safety features for working with values of different intent."},r=void 0,l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Strong tags",id:"strong-tags",level:3},{value:"Weak tags",id:"weak-tags",level:3},{value:"Use",id:"use",level:2},{value:"Declaring",id:"declaring",level:3},{value:"Functions",id:"functions",level:3},{value:"Operators",id:"operators",level:3},{value:"Overwriting",id:"overwriting",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"A tag is a prefix to a variable which tells the compiler to treat the variable specially under certain circumstances. For example you can use tags to define where a variable can and can't be used, or a special way to add two variables together."}),"\n",(0,i.jsx)(n.p,{children:"There are two types of tag - strong tags (starting with a capital letter) and weak tags (starting with a lower case letter), for the most part they're the same however under certain circumstances weak tags can be converted to tagless silently by the compiler, i.e. you won't get a warning, most of the time with weak tags, and all the time with strong tags, implicitly changing the tag will result in a warning to tell you data is likely being used wrong."}),"\n",(0,i.jsx)(n.p,{children:"A very simple example is the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'new\n    File:myfile = fopen("file.txt", io_read);\nmyFile += 4;\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"fopen"})," function will return a value with a tag of type ",(0,i.jsx)(n.code,{children:"File:"}),", there is no problem on that line as the return value is being stored to a variable also with a tag of ",(0,i.jsx)(n.code,{children:"File:"})," (note the cases are the same too). However on the next line the value ",(0,i.jsx)(n.code,{children:"4"})," is added to the file handle. ",(0,i.jsx)(n.code,{children:"4"})," has no tag (it is actually tag type ",(0,i.jsx)(n.code,{children:"_:"})," but variables, values and functions with no tag are automatically set to that and you don't need to worry about it normally) and myFile has a tag of ",(0,i.jsx)(n.code,{children:"File:"}),", obviously nothing and something can't possibly be the same so the compiler will issue a warning, this is good as a handle to a file is meaningless in terms of it's actual value and so modifying it will merely destroy the handle and mean the file can't be closed as there is no longer a valid handle to pass and close the file with."]}),"\n",(0,i.jsx)(n.h3,{id:"strong-tags",children:"Strong tags"}),"\n",(0,i.jsxs)(n.p,{children:["As mentioned above a strong tag is any tag starting with a capital letter. Examples of these in SA",":MP"," include:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"Float:\nFile:\nText:\n"})}),"\n",(0,i.jsx)(n.p,{children:"These cannot be mixed with other variable types and will always issue a warning when you try to do so:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'new\n    Float:myFloat,\n    File:myFile,\n    myBlank;\n\nmyFile = fopen("file.txt", io_read); // File: = File:, no warning\n\nmyFloat = myFile; // Float: = File:, "tag mismatch" warning\n\nmyFloat = 4; // Float: = _: (none), "tag mismatch" warning\n\nmyBlank = myFloat; // _: (none) = Float:, "tag mismatch" warning\n'})}),"\n",(0,i.jsx)(n.h3,{id:"weak-tags",children:"Weak tags"}),"\n",(0,i.jsx)(n.p,{children:"A weak tag behaves mostly the same as a strong tag however the compiler will not issue a warning when the destination is tagless and the source is a weak tag. For example compare the following strong and weak tag codes, the first with the strong tag will give a warning, the second with the weak tag will not:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new\n    Strong:myStrong,\n    weak:myWeak,\n    myNone;\n\nmyNone = myStrong; // Warning\nmyNone = myWeak; // No warning\n"})}),"\n",(0,i.jsx)(n.p,{children:"However the reverse is not true:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"myWeak = myNone; // Warning\n"})}),"\n",(0,i.jsx)(n.p,{children:"This is also true with functions, calling a function with a tagless parameter, passing a weak tagged variable will not give a warning:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new\n    weak:myWeak;\nMyFunction(myWeak);\n\n\n\nMyFunction(myVar)\n{\n    ...\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["But calling a function with a tagged parameter (weak or strong), passing an untagged parameter will give a warning. Examples of weak tags in SA",":MP"," are less well known as such though are often used and include:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"bool:\nfilemode:\nfloatround_method:\n"})}),"\n",(0,i.jsx)(n.h2,{id:"use",children:"Use"}),"\n",(0,i.jsx)(n.h3,{id:"declaring",children:"Declaring"}),"\n",(0,i.jsx)(n.p,{children:"Declaring a variable with a tag is very simple, just write the tag, there's no need to define a tag in advance in any way however this is possible and does have it's uses as will become apparent later:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new\n    Mytag:myVariable;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Declaring a variable with one of the existing tags will allow you to use that variable with the functions and operators already written for that tag type."}),"\n",(0,i.jsx)(n.h3,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(n.p,{children:"Creating a function to take or return a tag is very simple, just prefix the relevant part with the desired tag type, for example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"Float:GetValue(File:fHnd, const name[])\n{\n    ...\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["That function takes the handle to a file and returns a float value (presumably a value read from the file and corresponding to the value name passed in ",(0,i.jsx)(n.code,{children:"name[]"}),"). This function would most likely use the ",(0,i.jsx)(n.code,{children:"floatstr"})," function, which also returns a Float: (as you can tell by looking at the status bar of pawno when you click on the function in the right hand function list), after taking a string. The implementation of this function is not important but it will convert the string to an IEEE float value, which is then stored as a cell (it's actually strictly stored as an integer which just happens to have an identical bit pattern to the relevant IEEE number as PAWN is typeless, but that's what tags are partially there to combat)."]}),"\n",(0,i.jsx)(n.h3,{id:"operators",children:"Operators"}),"\n",(0,i.jsxs)(n.p,{children:["Operators such as ",(0,i.jsx)(n.code,{children:"+"}),", ",(0,i.jsx)(n.code,{children:"=="}),", ",(0,i.jsx)(n.code,{children:">"})," etc can be overloaded for different tags, i.e. doing ",(0,i.jsx)(n.code,{children:"+"})," on two Float",":s"," does something different to doing it on two non-tagged variables. This is especially useful in the case of float variables as as mentioned they are not really floats they are integers with a very specific bit pattern, if the operators were not overloaded the operations would simply be performed on the integers which would give gibberish if the answer were interpreted as a float again. For this reason the Float: tag has overloaded versions of most of the operators to call special functions to do the maths in the server instead of in pawn."]}),"\n",(0,i.jsxs)(n.p,{children:['An operator is exactly like a normal function but instead of a function name you use "operator(',(0,i.jsx)(n.strong,{children:"symbol"}),')" where (',(0,i.jsx)(n.strong,{children:"symbol"}),") is the operator you want to overwrite. The valid operators are:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"+\n-\n=\n++\n--\n==\n*\n/\n!=\n>\n<\n>=\n<=\n!\n%\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Things like ",(0,i.jsx)(n.code,{children:"\\"}),", ",(0,i.jsx)(n.code,{children:"*"}),", ",(0,i.jsx)(n.code,{children:"="})," etc are done automatically. Things like ",(0,i.jsx)(n.code,{children:"&"})," etc can't be overloaded. You can also overload an operator multiple times with different combinations of tag. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"stock Float:operator=(Mytag:oper)\n{\n    return float(_:oper);\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you add that to your code and do:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new\n    Float:myFloat,\n    Mytag:myTag;\n\nmyFloat = myTag;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You will no longer get a compiler warning as you would have before because the ",(0,i.jsx)(n.code,{children:"="})," operator for the case ",(0,i.jsx)(n.code,{children:"Float: = Mytag:"})," is now handled so the compiler knows exactly what to do."]}),"\n",(0,i.jsx)(n.h3,{id:"overwriting",children:"Overwriting"}),"\n",(0,i.jsx)(n.p,{children:"In the overloading example above the functional line was:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"return float(_:oper);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This is an example of tag overwriting, the ",(0,i.jsx)(n.code,{children:"_:"})," in front of oper means the compiler basically ignores the fact that oper has a tag type of Mytag: and treats it as tag type ",(0,i.jsx)(n.code,{children:"_:"})," (i.e. no tag type). The function ",(0,i.jsx)(n.code,{children:"float()"})," tags a normal number so must be passed one. In that example it is assumed that ",(0,i.jsx)(n.code,{children:"Mytag"})," stores an ordinary integer but overwriting must be dealt with very carefully, for example the following will give very odd results:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new\n    Float:f1,\n    Float:f2 = 4.0;\nf1 = float(_:f2);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Sense would dictate that ",(0,i.jsx)(n.code,{children:"f1"})," would end up as ",(0,i.jsx)(n.code,{children:"4.0"}),", however it won't. As mentioned f2 stores a representation of ",(0,i.jsx)(n.code,{children:"4.0"}),", not just ",(0,i.jsx)(n.code,{children:"4"})," as an integer would, this means the actual value of the variable as an integer is a very odd number. Thus if you tell the compiler to treat the variable as an integer it will simply take the bit pattern in the variable as the value, it won't convert the float to an integer, so you will get an almost random number (it's not actually random as there's a pattern to IEEE floating points but it will be nothing like ",(0,i.jsx)(n.code,{children:"4.0"}),")."]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var a=t(67294);let i={},o=a.createContext(i);function s(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);