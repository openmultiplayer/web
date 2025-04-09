"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["16105"],{34405:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>a,assets:()=>l,toc:()=>c,contentTitle:()=>o});var a=JSON.parse('{"id":"scripting/language/reference/Foreword","title":"Foreword","description":"---","source":"@site/docs/scripting/language/reference/01-Foreword.md","sourceDirName":"scripting/language/reference","slug":"/scripting/language/reference/Foreword","permalink":"/fa/docs/scripting/language/reference/Foreword","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/language/reference/01-Foreword.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Contents","permalink":"/fa/docs/scripting/language/reference/Contents"},"next":{"title":"A-tutorial-introduction","permalink":"/fa/docs/scripting/language/reference/A-tutorial-introduction"}}'),i=t("85893"),r=t("50065");let s={},o="Foreword",l={},c=[{value:"\u2666",id:"",level:2},{value:"\u2666",id:"-1",level:2}];function d(e){let n={a:"a",br:"br",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"foreword",children:"Foreword"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"\u201Cpawn\u201D is a simple, typeless, 32-bit \u201Cscripting\u201D language with a C-like syntax.\nExecution speed, stability, simplicity and a small footprint were essential\ndesign\ncriterions for both the language and the interpreter/abstract machine that a\npawn program runs on."}),"\n",(0,i.jsxs)(n.p,{children:["An application or tool cannot do or be everything for all users.",(0,i.jsx)(n.br,{}),"\n","This not"]}),"\n",(0,i.jsxs)(n.p,{children:["other software systems, it also explains the presence of extensive configuration\noptions and macro or scripting languages in applications. My own applications\nhave contained a variety of little languages; most were very simple, some were\nextensive. . . and most needs could have been solved by a general",(0,i.jsx)(n.br,{}),"\n","purpose\nlanguage with a special purpose library. Hence, pawn."]}),"\n",(0,i.jsxs)(n.p,{children:["The pawn language was designed as a flexible language for manipulating ob-\njects in a host application. The tool set (compiler, abstract machine)",(0,i.jsx)(n.br,{}),"\n","were\nwritten so that they were easily extensible and would run on different",(0,i.jsx)(n.br,{}),"\n","soft-\nware/hardware architectures."]}),"\n",(0,i.jsx)(n.h2,{id:"",children:"\u2666"}),"\n",(0,i.jsx)(n.p,{children:"pawn is a descendent of the original Small C by Ron Cain and James Hendrix,\nwhich at its turn was a subset of C. Some of the modifications that I did to\nSmall C, e.g. the removal of the type system and the substitution of pointers by\nreferences, were so fundamental that I could hardly call my language a \u201Csubset"}),"\n",(0,i.jsx)(n.p,{children:"of C\u201D or a \u201CC dialect\u201D anymore. Therefore, I stripped off the \u201CC\u201D from the title\nand used the name \u201CSmall\u201D for the name of the language in my publication in\nDr. Dobb\u2019s Journal and the years since. During development and maintenance\nof the product, I received many requests for changes. One of the frequently\nrequested changes was to use a different name for the language \u2014searching\nfor information on the Small scripting language on the Internet was hindered\nby \u201Csmall\u201D being such a common word. The name change occurred together\nwith a significant change in the language: the support of \u201Cstates\u201D (and state\nmachines)."}),"\n",(0,i.jsx)(n.p,{children:"I am indebted to Ron Cain and James Hendrix (and more recently, Andy\nYuen), and to Dr. Dobb\u2019s Journal to get this ball rolling. Although I must\nhave touched nearly every line of the original code multiple times, the Small\nC origins are still clearly visible."}),"\n",(0,i.jsx)(n.h2,{id:"-1",children:"\u2666"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"A detailed treatise of the design goals and compromises is in appendix C; here\nI would like to summarize a few key points. As written in the previous para-\ngraphs, pawn is for customizing applications (by writing scripts), not for writ-\ning applications. pawn is weak on data structuring because pawn programs\nare intended to manipulate objects (text, sprites, streams, queries, . . . ) in\nthe\nhost application, but the pawn program is, by intent, denied direct access to\nany data outside its abstract machine. The only means that a pawn program\nhas to manipulate objects in the host application is by calling subroutines, so\ncalled \u201Cnative functions\u201D, that the host application provides."}),"\n",(0,i.jsx)(n.p,{children:"pawn is flexible in that key area: calling functions. pawn supports default val-\nues for any of the arguments of a function (not just the last),\ncall-by-reference\nas well as call-by-value, and \u201Cnamed\u201D as well as \u201Cpositional\u201D function argu-\nments. pawn does not have a \u201Ctype checking\u201D mechanism, by virtue of being\na typeless language, but it does offer in replacement a \u201Cclassification\nchecking\u201D\nmechanism, called \u201Ctags\u201D. The tag system is especially convenient for function\narguments because each argument may specify multiple acceptable tags."}),"\n",(0,i.jsx)(n.p,{children:"but in their combination. For pawn, I feel that the combination of named ar-\nguments \u2014which lets you specify function arguments in any order, and default\nvalues \u2014which allows you to skip specifying arguments that you are not inter-\nested in, blend together to a convenient and \u201Cdescriptive\u201D way to call (native)\nfunctions to manipulate objects in the host application."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/fa/docs/scripting/language/reference/Contents",children:"Go Back to Contents"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var a=t(67294);let i={},r=a.createContext(i);function s(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);