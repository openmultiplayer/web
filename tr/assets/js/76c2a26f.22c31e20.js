"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["19860"],{19942:function(e,n,s){s.r(n),s.d(n,{default:()=>d,frontMatter:()=>o,metadata:()=>a,assets:()=>l,toc:()=>c,contentTitle:()=>t});var a=JSON.parse('{"id":"scripting/resources/hexcolors","title":"Hex Colors","description":"This deals with the color representation in hexadecimal in SAMP.","source":"@site/docs/scripting/resources/hexcolors.md","sourceDirName":"scripting/resources","slug":"/scripting/resources/hexcolors","permalink":"/tr/docs/scripting/resources/hexcolors","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/resources/hexcolors.md","tags":[],"version":"current","frontMatter":{"title":"Hex Colors","sidebar_label":"Hex Colors","description":"This deals with the color representation in hexadecimal in SAMP."},"sidebar":"docsSidebar","previous":{"title":"Glossary","permalink":"/tr/docs/scripting/resources/glossary"},"next":{"title":"HTTP Error Response Codes","permalink":"/tr/docs/scripting/resources/http-error-response-codes"}}'),i=s("85893"),r=s("50065");let o={title:"Hex Colors",sidebar_label:"Hex Colors",description:"This deals with the color representation in hexadecimal in SAMP."},t=void 0,l={},c=[{value:"What is hex?",id:"what-is-hex",level:2},{value:"Decimal (base 10)",id:"decimal-base-10",level:3},{value:"Hexadecimal (base 16)",id:"hexadecimal-base-16",level:3},{value:"Decimal (base 10)",id:"decimal-base-10-1",level:3},{value:"Hexadecimal (base 16)",id:"hexadecimal-base-16-1",level:3},{value:"Decimal (base 10)",id:"decimal-base-10-2",level:3},{value:"Hexadecimal (base 16)",id:"hexadecimal-base-16-2",level:3},{value:"When and how to use hex.",id:"when-and-how-to-use-hex",level:2},{value:"Hex colors",id:"hex-colors",level:2}];function h(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"what-is-hex",children:"What is hex?"}),"\n",(0,i.jsx)(n.p,{children:"The hexadecimal numeral system, or commonly known just as Hex, is a numeral system made up of 16 unique symbols (this is also known as base 16). You're probably wondering how this numeral system can have 16 symbols when our beloved decimal system (base 10) only has 10 symbols (0-9). Well the answer is quiet simple, let's take a look at both systems:"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"decimal-base-10",children:"Decimal (base 10)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"01\n2\n3\n4\n5\n6\n7\n8\n9\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"hexadecimal-base-16",children:"Hexadecimal (base 16)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"01\n2\n3\n4\n5\n6\n7\n8\n9\nA //10\nB //11\nC //12\nD //13\nE //14\nF //15\n"})}),"\n",(0,i.jsx)(n.p,{children:"Since there are no more available numbers, hex uses letters from the alphabet. Don't be scared by this, you can simply view them as place holders who's value is +1 of the previous number. This sounds very confusing and may even look pretty scary, but you will get used to it in no time at all."}),"\n",(0,i.jsx)(n.p,{children:"Now let's take a look a few bigger numbers."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"decimal-base-10-1",children:"Decimal (base 10)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"255\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"hexadecimal-base-16-1",children:"Hexadecimal (base 16)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"FF\n"})}),"\n",(0,i.jsx)(n.p,{children:"The number 255 is pretty understandable, but what is 'FF'? Let's take a look at both in their exponential notation."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"})," | '^' is to the power of in this case, not the bitwise exclusive operator."]})}),"\n",(0,i.jsx)(n.h3,{id:"decimal-base-10-2",children:"Decimal (base 10)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"2 * (10^2) + 5 * (10^1) + 5 * (10^0)\n\n//which equals\n\n200+50+5\n\n//which equals\n\n255\n"})}),"\n",(0,i.jsx)(n.p,{children:"Hex is exactly the same! The only difference is that it works with powers of 16 (Hence the base 10/16)."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"hexadecimal-base-16-2",children:"Hexadecimal (base 16)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"F * (16^1) + F * (16^0)\n\n//which equals\n\n15 * (16^1) + 15 * (16^0)\n\n//which equals\n\n240+15\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"when-and-how-to-use-hex",children:"When and how to use hex."}),"\n",(0,i.jsx)(n.p,{children:"There isn't really a sole use for hex, you can use it when ever you want; though it's mostly used for color defines (We'll take a look at this later). Some people use hex as a visual aid to make things look more clearly (Y_Less) for example:"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"})," | This is a complicated example, don't worry if you don't understand it."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"var = b & 0x04\n"})}),"\n",(0,i.jsx)(n.p,{children:"That makes it very clear that I want the 4 high bits of the low byte of b, on the other hand:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"var = b & 4\n"})}),"\n",(0,i.jsx)(n.p,{children:"Isn't very friendly to the eyes at all."}),"\n",(0,i.jsx)(n.p,{children:"Notice how '04' has '0x' in front of it. This is a constant symbol in pawn that allows the use of hexadecimal (like 0b is for binary)."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"hex-colors",children:"Hex colors"}),"\n",(0,i.jsx)(n.p,{children:"Hex colors follow this format:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"RR - Two values for the red (Where FF is max, and 00 is the lowest).\nGG - Two values for the green (Where FF is max, and 00 is the lowest).\nBB - Two values for the blue (Where FF is max, and 00 is the lowest).\nAA - Two values for the transparency (Where FF is max, and 00 is the lowest).\n"})}),"\n",(0,i.jsx)(n.p,{children:"Let's take a look at a few colors, starting with the basics and moving into the combinations."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"//basics\n\n0x00000000 - Black\n0xFF0000FF - Bright red.\n0x00FF00FF - Bright green.\n0x0000FFFF - Bright blue.\n0xFFFFFFFF - White\n\n//combinations\n\n0xFFFF00FF - Bright yellow\n0xFF00FFFF - Bright purple\n0x00FFFFFF - Bright cyan\n"})}),"\n",(0,i.jsx)(n.p,{children:"These are just the basic colors/combination, if you're looking for other colors / are too lazy to convert, you are better using a converter like this one:"})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return o}});var a=s(67294);let i={},r=a.createContext(i);function o(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);