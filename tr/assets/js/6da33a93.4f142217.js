"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["68572"],{87364:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>a,assets:()=>t,toc:()=>c,contentTitle:()=>s});var a=JSON.parse('{"id":"scripting/language/Operators","title":"Anahtar Kelimeler: Operat\xf6rler","description":"char","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/language/Operators.md","sourceDirName":"scripting/language","slug":"/scripting/language/Operators","permalink":"/tr/docs/scripting/language/Operators","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/language/Operators.md","tags":[],"version":"current","frontMatter":{"title":"Anahtar Kelimeler: Operat\xf6rler","sidebar_label":"Anahtar Kelimeler: Operat\xf6rler"},"sidebar":"docsSidebar","previous":{"title":"Anahtar Kelimeler: Ba\u015Flat\u0131c\u0131lar","permalink":"/tr/docs/scripting/language/Initialisers"},"next":{"title":"Anahtar Kelimeler: \u0130fadeler","permalink":"/tr/docs/scripting/language/Statements"}}'),i=r("85893"),l=r("50065");let d={title:"Anahtar Kelimeler: Operat\xf6rler",sidebar_label:"Anahtar Kelimeler: Operat\xf6rler"},s=void 0,t={},c=[{value:"<code>char</code>",id:"char",level:2},{value:"<code>defined</code>",id:"defined",level:2},{value:"<code>sizeof</code>",id:"sizeof",level:2},{value:"<code>state</code>",id:"state",level:2},{value:"<code>tagof</code>",id:"tagof",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"char",children:(0,i.jsx)(n.code,{children:"char"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"char"}),", bir paketlenmi\u015F dize i\xe7inde verilen karakter say\u0131s\u0131n\u0131 tutmak i\xe7in gereken h\xfccre say\u0131s\u0131n\u0131 d\xf6nd\xfcr\xfcr. Yani belirli bir bayi say\u0131s\u0131n\u0131 tutmak i\xe7in gereken 4 bayilik h\xfccre say\u0131s\u0131n\u0131. \xd6rne\u011Fin:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"4 char\n"})}),"\n",(0,i.jsx)(n.p,{children:"1 d\xf6nd\xfcr\xfcr."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"3 char\n"})}),"\n",(0,i.jsx)(n.p,{children:"1 d\xf6nd\xfcr\xfcr (bir de\u011Fi\u015Fkenin 3/4'\xfcn\xfc alamazs\u0131n\u0131z)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"256 char\n"})}),"\n",(0,i.jsx)(n.p,{children:"64 d\xf6nd\xfcr\xfcr (256'y\u0131 4'e b\xf6lerseniz)."}),"\n",(0,i.jsx)(n.p,{children:"Bu genellikle de\u011Fi\u015Fken bildirimlerinde kullan\u0131l\u0131r."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new\n    someVar[40 char];\n"})}),"\n",(0,i.jsx)(n.p,{children:"10 h\xfccrelik bir dizi yapacakt\u0131r."}),"\n",(0,i.jsx)(n.p,{children:"Paketlenmi\u015F diziler hakk\u0131nda daha fazla bilgi i\xe7in pawn-lang.pdf'ye ba\u015Fvurun."}),"\n",(0,i.jsx)(n.h2,{id:"defined",children:(0,i.jsx)(n.code,{children:"defined"})}),"\n",(0,i.jsx)(n.p,{children:"Bir sembol\xfcn var olup olmad\u0131\u011F\u0131n\u0131 kontrol eder. Genellikle #if ifadelerinde kullan\u0131l\u0131r:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new\n    someVar = 5;\n#if defined someVar\n    printf(\"%d\", someVar);\n#else\n    #error The variable 'someVar' isn't defined\n#endif\n"})}),"\n",(0,i.jsx)(n.p,{children:"Genellikle bir tan\u0131m\u0131n tan\u0131mlan\u0131p tan\u0131mlanmad\u0131\u011F\u0131n\u0131 kontrol etmek ve buna g\xf6re kod \xfcretmek i\xe7in kullan\u0131l\u0131r:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"#define FILTERSCRIPT\n\n#if defined FILTERSCRIPT\n\npublic OnFilterScriptInit()\n{\n    return 1;\n}\n\n#else\n\npublic OnGameModeInit()\n{\n    return 1;\n}\n\n#endif\n"})}),"\n",(0,i.jsx)(n.h2,{id:"sizeof",children:(0,i.jsx)(n.code,{children:"sizeof"})}),"\n",(0,i.jsx)(n.p,{children:"Bir dizinin ELEMANLAR cinsinden boyutunu d\xf6nd\xfcr\xfcr:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'new\n    someVar[10];\nprintf("%d", sizeof (someVar));\n'})}),"\n",(0,i.jsx)(n.p,{children:"\xc7\u0131k\u0131\u015F:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"10\n"})}),"\n",(0,i.jsx)(n.p,{children:"Ve:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'new\n    someVar[2][10];\nprintf("%d %d", sizeof (someVar), sizeof (someVar[]));\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u015Eunu verir:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"2 10\n"})}),"\n",(0,i.jsx)(n.h2,{id:"state",children:(0,i.jsx)(n.code,{children:"state"})}),"\n",(0,i.jsx)(n.p,{children:"Bu tekrar PAWN otanom koduyla ilgilidir ve bu nedenle burada ele al\u0131nmaz."}),"\n",(0,i.jsx)(n.h2,{id:"tagof",children:(0,i.jsx)(n.code,{children:"tagof"})}),"\n",(0,i.jsx)(n.p,{children:"Bu, bir de\u011Fi\u015Fkenin etiketini temsil eden bir say\u0131 d\xf6nd\xfcr\xfcr:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'new\n    someVar,\n    Float:someFloat;\nprintf("%d %d", tagof (someVar), tagof (someFloat));\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u015Eunu verir:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"-./,),(-*,( -1073741820\n"})}),"\n",(0,i.jsx)(n.p,{children:"Bu hafif bir hata olsa da temelde \u015Funu ifade eder:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"0x80000000 0xC0000004\n"})}),"\n",(0,i.jsx)(n.p,{children:"\xd6rne\u011Fin, bir de\u011Fi\u015Fkenin bir float (etiket 'Float:') olup olmad\u0131\u011F\u0131n\u0131 kontrol etmek i\xe7in:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'new Float: fValue = 6.9;\n\nnew tag = tagof (fValue);\n\nif (tag == tagof (Float:))\n{\n    print("float");\n}\nelse\n{\n    print("not a float");\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return d}});var a=r(67294);let i={},l=a.createContext(i);function d(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);