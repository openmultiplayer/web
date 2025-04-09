"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["56698"],{8633:function(n,e,a){a.r(e),a.d(e,{default:()=>k,frontMatter:()=>d,metadata:()=>i,assets:()=>c,toc:()=>t,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/language/ControlStructures","title":"Kontrol Yap\u0131lar\u0131","description":"Pawn dilinde kontrol yap\u0131lar\u0131n\u0131n genel bir bak\u0131\u015F\u0131","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/language/ControlStructures.md","sourceDirName":"scripting/language","slug":"/scripting/language/ControlStructures","permalink":"/tr/docs/scripting/language/ControlStructures","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/language/ControlStructures.md","tags":[],"version":"current","frontMatter":{"title":"Kontrol Yap\u0131lar\u0131","sidebar_label":"Kontrol Yap\u0131lar\u0131","description":"Pawn dilinde kontrol yap\u0131lar\u0131n\u0131n genel bir bak\u0131\u015F\u0131"},"sidebar":"docsSidebar","previous":{"title":"Appendices","permalink":"/tr/docs/scripting/language/reference/Appendices"},"next":{"title":"Anahtar Kelimeler: Direktifler","permalink":"/tr/docs/scripting/language/Directives"}}'),r=a("85893"),l=a("50065");let d={title:"Kontrol Yap\u0131lar\u0131",sidebar_label:"Kontrol Yap\u0131lar\u0131",description:"Pawn dilinde kontrol yap\u0131lar\u0131n\u0131n genel bir bak\u0131\u015F\u0131"},s=void 0,c={},t=[{value:"Ko\u015Fullu \u0130fadeler",id:"ko\u015Fullu-i\u0307fadeler",level:2},{value:"if",id:"if",level:3},{value:"Operat\xf6rler",id:"operat\xf6rler",level:3},{value:"Parantezler",id:"parantezler",level:3},{value:"else",id:"else",level:3},{value:"else if",id:"else-if",level:3},{value:"?:",id:"",level:3},{value:"D\xf6ng\xfcler",id:"d\xf6ng\xfcler",level:2},{value:"While",id:"while",level:3},{value:"for()",id:"for",level:3},{value:"do-while",id:"do-while",level:3},{value:"if-goto",id:"if-goto",level:3},{value:"OBOE",id:"oboe",level:3},{value:"Switch",id:"switch",level:2},{value:"switch",id:"switch-1",level:3},{value:"case",id:"case",level:3},{value:"default",id:"default",level:3},{value:"Tek sat\u0131rl\u0131k ifadeler",id:"tek-sat\u0131rl\u0131k-ifadeler",level:2},{value:"goto",id:"goto",level:3},{value:"break",id:"break",level:3},{value:"continue",id:"continue",level:3},{value:"return",id:"return",level:3}];function o(n){let e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"ko\u015Fullu-i\u0307fadeler",children:"Ko\u015Fullu \u0130fadeler"}),"\n",(0,r.jsx)(e.h3,{id:"if",children:"if"}),"\n",(0,r.jsx)(e.p,{children:'Bir "if" ifadesi, bir \u015Feyin do\u011Fru olup olmad\u0131\u011F\u0131n\u0131 kontrol eder ve do\u011Fruysa belirli bir i\u015Flem yapar.'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'new\n    a = 5;\nif (a == 5)\n{\n    print("a 5\'tir");\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:'"if" ifadesinden sonraki parantez i\xe7indeki kod ko\u015Ful olarak adland\u0131r\u0131l\u0131r ve test edilebilecek bir\xe7ok farkl\u0131 \u015Fey vard\u0131r (operat\xf6rlere bak\u0131n\u0131z).'}),"\n",(0,r.jsx)(e.p,{children:'Yukar\u0131daki \xf6rnekte, hem "a" hem de 5 sembolleridir, fonksiyonlar da sembol olabilir:'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'if (SomeFunction() == 5)\n{\n    print("SomeFunction() 5\'tir");\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Bu, SomeFunction'\u0131n d\xf6n\xfc\u015F de\u011Ferini (a\u015Fa\u011F\u0131ya bak\u0131n\u0131z) 5 ile kar\u015F\u0131la\u015Ft\u0131r\u0131r."}),"\n",(0,r.jsx)(e.p,{children:"Birden fazla \u015Feyi kontrol etmek i\xe7in kontrolleri birle\u015Ftirebilirsiniz:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'new\n    a = 5,\n    b = 3;\nif (a == 5 && b != 3)\n{\n    print("Yazd\u0131r\u0131lmayacak");\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Bu \xf6rnek, a'n\u0131n 5'e e\u015Fit oldu\u011Funu VE b'nin 3'e e\u015Fit olmad\u0131\u011F\u0131n\u0131 kontrol eder, ancak b 3 oldu\u011Fundan kontrol ba\u015Far\u0131s\u0131z olur."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'new\n    a = 5,\n    b = 3;\nif (a == 5 || b != 3)\n{\n    print("Yazd\u0131r\u0131lacak");\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Bu \xf6rnek, a'n\u0131n 5'e e\u015Fit olup olmad\u0131\u011F\u0131n\u0131 VEYA b'nin 3'e e\u015Fit olmad\u0131\u011F\u0131n\u0131 kontrol eder, b 3 oldu\u011Fundan o k\u0131s\u0131m ba\u015Far\u0131s\u0131z olur* ancak a 5 oldu\u011Fu i\xe7in bu k\u0131s\u0131m do\u011Frudur, || (veya) kullan\u0131yoruz, bu nedenle sadece bir k\u0131s\u0131m do\u011Fru olmal\u0131d\u0131r (her ikisi de do\u011Fruysa ifadesi hala do\u011Frudur, bu, \"veya\"n\u0131n dilbilgisel anlam\u0131ndan biraz farkl\u0131d\u0131r, yani sadece bir tanesi do\u011Fru olmal\u0131d\u0131r)."}),"\n",(0,r.jsx)(e.p,{children:"Ayr\u0131ca, kar\u015F\u0131la\u015Ft\u0131rmalar\u0131 iki farkl\u0131 kar\u015F\u0131la\u015Ft\u0131rman\u0131n a\xe7\u0131k\xe7a yap\u0131lmas\u0131na gerek olmadan birbirine zincirleme yapmak m\xfcmk\xfcnd\xfcr."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"new\n    idx = 3;\n\nif (0 < idx < 5)\n{\n    print(\"idx 0'dan b\xfcy\xfck ve 5'ten k\xfc\xe7\xfckt\xfcr!\");\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"operat\xf6rler",children:"Operat\xf6rler"}),"\n",(0,r.jsx)(e.p,{children:"A\u015Fa\u011F\u0131dakiler, kar\u015F\u0131la\u015Ft\u0131rmalarda kullanabilece\u011Finiz semboller ve a\xe7\u0131klamalar\u0131d\u0131r. Baz\u0131lar\u0131 zaten \xf6rneklerde kullan\u0131lm\u0131\u015Ft\u0131r."}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Operat\xf6r"}),(0,r.jsx)(e.th,{children:"Anlam"}),(0,r.jsx)(e.th,{children:"Kullan\u0131m"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"=="}),(0,r.jsx)(e.td,{children:"Sol, Sa\u011F'a e\u015Fittir"}),(0,r.jsx)(e.td,{children:"if (Sol == Sa\u011F)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"!="}),(0,r.jsx)(e.td,{children:"Sol, Sa\u011F'a e\u015Fit de\u011Fildir"}),(0,r.jsx)(e.td,{children:"if (Sol != Sa\u011F)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:">"}),(0,r.jsx)(e.td,{children:"Sol, Sa\u011F'dan b\xfcy\xfckt\xfcr"}),(0,r.jsx)(e.td,{children:"if (Sol > Sa\u011F)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:">="}),(0,r.jsx)(e.td,{children:"Sol, Sa\u011F'dan b\xfcy\xfck veya e\u015Fittir"}),(0,r.jsx)(e.td,{children:"if (Sol >= Sa\u011F)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"<"}),(0,r.jsx)(e.td,{children:"Sol, Sa\u011F'dan k\xfc\xe7\xfckt\xfcr"}),(0,r.jsx)(e.td,{children:"if (Sol < Sa\u011F)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"<="}),(0,r.jsx)(e.td,{children:"Sol, Sa\u011F'dan k\xfc\xe7\xfck veya e\u015Fittir"}),(0,r.jsx)(e.td,{children:"if (Sol <= Sa\u011F)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"&&"}),(0,r.jsx)(e.td,{children:"ve"}),(0,r.jsx)(e.td,{children:"if (Sol && Sa\u011F)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"||"}),(0,r.jsx)(e.td,{children:"veya"}),(0,r.jsx)(e.td,{children:"if (Sol || Sa\u011F)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"!"}),(0,r.jsx)(e.td,{children:"de\u011Fil"}),(0,r.jsx)(e.td,{children:"if (!De\u011Fi\u015Fken)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"de\u011Fil veya"}),(0,r.jsx)(e.td,{children:"if (!(Sol || Sa\u011F))"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"de\u011Fil ve"}),(0,r.jsx)(e.td,{children:"if (!(Sol && Sa\u011F))"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"\xf6zel veya (xor, eor) - sadece biri do\u011Fru, ikisi de\u011Fil"}),(0,r.jsx)(e.td,{children:"if (!(Sol && Sa\u011F) && (Sol || Sa\u011F))"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"\xf6zel de\u011Fil veya (nxor, neor) - ikisi de do\u011Fru veya ikisi de de\u011Fil"}),(0,r.jsx)(e.td,{children:"if ((Sol && Sa\u011F) || !(Sol || Sa\u011F))"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"parantezler",children:"Parantezler"}),"\n",(0,r.jsx)(e.p,{children:"If ifadelerinin di\u011Fer ana bile\u015Feni parantezlerdir, bunlar i\u015Flerin hangi s\u0131rayla yap\u0131ld\u0131\u011F\u0131n\u0131 kontrol eder:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'new\n    a = 3,\n    b = 3,\n    c = 1;\nif (a == 5 && b == 3 || c == 1)\n{\n    print("Bunu \xe7a\u011F\u0131racak m\u0131?");\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Yukar\u0131daki ifadeye iki farkl\u0131 \u015Fekilde bakabiliriz:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"if ((a == 5 && b == 3) || c == 1)\n"})}),"\n",(0,r.jsx)(e.p,{children:"Ve:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"if (a == 5 && (b == 3 || c == 1))\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u0130lk s\xfcr\xfcm, a'n\u0131n 5 ve b'nin 3 oldu\u011Funu kontrol eder, bu yanl\u0131\u015Fsa (yani bunlardan biri veya ikisi de kendi de\u011Ferlerine sahip de\u011Filse), c'nin 1 olup olmad\u0131\u011F\u0131n\u0131 kontrol eder. (a == 5 && b == 3) yanl\u0131\u015Ft\u0131r, yani bunu FALSE ile de\u011Fi\u015Ftiririz:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"if (FALSE || c == 1)\n"})}),"\n",(0,r.jsx)(e.p,{children:"FALSE'nin do\u011Fru olamayaca\u011F\u0131n\u0131 biliyoruz (tan\u0131m gere\u011Fi do\u011Fru de\u011Fildir), ancak c 1 oldu\u011Fundan bu k\u0131s\u0131m do\u011Frudur ve, || (veya) kullan\u0131yoruz \xe7\xfcnk\xfc bu k\u0131s\u0131m do\u011Fru olmal\u0131d\u0131r."}),"\n",(0,r.jsx)(e.p,{children:"\u0130kinci s\xfcr\xfcm, a'n\u0131n 5 oldu\u011Funu kontrol eder, 5 ise b'nin 3 veya c'nin 1 olup olmad\u0131\u011F\u0131n\u0131 kontrol eder. Oyun a == 5 k\u0131sm\u0131n\u0131 \xf6nce yapacak olsa da netlik a\xe7\u0131s\u0131ndan tersini yapaca\u011F\u0131z. (b == 3 || c == 1) do\u011Frudur, her iki"}),"\n",(0,r.jsx)(e.p,{children:"taraf da do\u011Frudur, ancak sadece birinin do\u011Fru olmas\u0131 yeterlidir, bu nedenle if ifadesine girerken:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"if (a == 5 && TRUE)\n"})}),"\n",(0,r.jsx)(e.p,{children:"(a == 5) yanl\u0131\u015Ft\u0131r, \xe7\xfcnk\xfc a 3't\xfcr, bu y\xfczden \u015Funa sahibiz:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"if (FALSE && TRUE)\n"})}),"\n",(0,r.jsx)(e.p,{children:"A\xe7\u0131k\xe7as\u0131 FALSE yanl\u0131\u015Ft\u0131r, bu nedenle kontrol ba\u015Far\u0131s\u0131z olur."}),"\n",(0,r.jsx)(e.p,{children:"Bu k\xfc\xe7\xfck \xf6rnek, parantezlerin bir kontrol\xfcn sonucunu nas\u0131l de\u011Fi\u015Ftirebilece\u011Fini g\xf6sterir; parantez olmaks\u0131z\u0131n derleyici her iki s\xfcr\xfcmden ilkinde olacaksa da bunun her zaman garantisi olmad\u0131\u011F\u0131ndan her zaman parantez kullanmal\u0131s\u0131n\u0131z, sadece ba\u015Fkalar\u0131na neyin oldu\u011Funu a\xe7\u0131klamak i\xe7in bile olsa."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"(b != 3) \xf6rne\u011Findeki OR \xf6rne\u011Fi asl\u0131nda ba\u015Far\u0131s\u0131z olmaz, kodu k\u0131sa devreleme adl\u0131 bir \u015Feyi kullanarak s\u0131ralar, \xe7\xfcnk\xfc ilk k\u0131s\u0131m zaten do\u011Fru oldu\u011Fundan ikinci k\u0131sm\u0131 kontrol etmenin bir anlam\u0131 yoktur."}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"else",children:"else"}),"\n",(0,r.jsx)(e.p,{children:"else, temel olarak bir if kontrol\xfcn\xfcn ba\u015Far\u0131s\u0131z oldu\u011Funda bir \u015Fey yapar:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'new\n    a = 5;\nif (a == 3) // Yanl\u0131\u015F\n{\n    print("\xc7a\u011Fr\u0131lmayacak");\n}\nelse\n{\n    print("Kontrol ba\u015Far\u0131s\u0131z oldu\u011Fu i\xe7in \xe7a\u011Fr\u0131lacak");\n}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"else-if",children:"else if"}),"\n",(0,r.jsx)(e.p,{children:"else if, ilk if kontrol\xfcn\xfcn ba\u015Far\u0131s\u0131z oldu\u011Funda ba\u015Fka bir \u015Feyi kontrol etmek i\xe7in kullan\u0131l\u0131r:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'new\n    a = 5;\nif (a == 1)\n{\n    print("a 1 ise \xe7a\u011Fr\u0131lacak");\n}\nelse if (a == 5)\n{\n    print("a 5 ise \xe7a\u011Fr\u0131lacak");\n}\nelse\n{\n    print("Di\u011Fer t\xfcm say\u0131lar");\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Bunlardan istedi\u011Finiz kadar\u0131n\u0131 kullanabilirsiniz (bir grup kontrolde yaln\u0131zca bir if ve bir else olabilir):"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"new\n    a = 4;\nif (a == 1)\n{\n    // Yanl\u0131\u015F\n}\nelse if (a == 2)\n{\n    // Yanl\u0131\u015F\n}\nelse if (a == 3)\n{\n    // Yanl\u0131\u015F\n}\nelse if (a == 4)\n{\n    // Do\u011Fru\n}\nelse\n{\n    // Yanl\u0131\u015F\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"else if'ler, if'lerin ba\u015Flad\u0131\u011F\u0131 s\u0131rada de\u011Feri kontrol eder, bu nedenle \u015Funu yapamazs\u0131n\u0131z:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"new\n    a = 5;\nif (a == 5)\n{\n    // \xc7a\u011Fr\u0131lacak\n    a = 4;\n}\nelse if (a == 4)\n{\n    // \u0130lk kontrol ba\u015Far\u0131s\u0131z olmad\u0131\u011F\u0131 i\xe7in \xe7a\u011Fr\u0131lmayacak, hatta a \u015Fimdi 4 olsa bile\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"Bunu \xe7\xf6zmek i\xe7in else if'i basit\xe7e bir if yapard\u0131n\u0131z."}),"\n",(0,r.jsx)(e.h3,{id:"",children:"?:"}),"\n",(0,r.jsx)(e.p,{children:"'?' ve ':' birlikte bir \xfc\xe7l\xfc operat\xf6r olarak adland\u0131r\u0131l\u0131r, temel olarak ba\u015Fka bir if ifadesinin i\xe7inde bir if ifadesi gibi davran\u0131rlar:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"new\n    a,\n    b = 3;\nif (b == 3)\n{\n    a = 5;\n}\nelse\n{\n    a = 7;\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"Bu, bir de\u011Fi\u015Fkeni ba\u015Fka bir de\u011Fi\u015Fkene dayanarak atamak i\xe7in basit bir \xf6rnektir, ancak \xe7ok daha k\u0131sa hale getirilebilir:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"new\n    a,\n    b = 3;\na = (b == 3) ? (5) : (7);\n"})}),"\n",(0,r.jsx)(e.p,{children:"'?' \xf6ncesindeki k\u0131s\u0131m ko\u015Fuldur, bu normal bir ko\u015Fuldur. '?' ve ':' aras\u0131ndaki k\u0131s\u0131m, ko\u015Fulun do\u011Fru olmas\u0131 durumunda d\xf6nd\xfcr\xfclecek de\u011Ferdir, di\u011Fer k\u0131s\u0131m ise ko\u015Ful yanl\u0131\u015Fsa d\xf6nd\xfcr\xfclecek de\u011Ferdir. Bunlar\u0131 else if'ler gibi y\u0131\u011F\u0131p kullanabilirsiniz:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"new\n    a,\n    b = 3;\nif (b == 1)\n{\n    a = 2;\n}\nelse if (b == 2)\n{\n    a = 3;\n}\nelse if (b == 3)\n{\n    a = 4;\n}\nelse\n{\n    a = 5;\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"A\u015Fa\u011F\u0131daki gibi yaz\u0131labilir:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"new\n    a,\n    b = 3;\na = (b == 1) ? (2) : ((b == 2) ? (3) : ((b == 3) ? (4) : (5)));\n"})}),"\n",(0,r.jsx)(e.p,{children:"Bu asl\u0131nda \u015Funu yapmakla daha benzerdir:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"new\n    a,\n    b = 3;\nif (b == 1)\n{\n    a = 2;\n}\nelse\n{\n    if (b == 2)\n    {\n        a = 3;\n    }\n    else\n    {\n        if (b == 3)\n        {\n            a = 4;\n        }\n        else\n        {\n            a = 5;\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"Ancak bunlar e\u015Fde\u011Ferdir (en az\u0131ndan bu \xf6rnekte)."}),"\n",(0,r.jsx)(e.h2,{id:"d\xf6ng\xfcler",children:"D\xf6ng\xfcler"}),"\n",(0,r.jsx)(e.h3,{id:"while",children:"While"}),"\n",(0,r.jsx)(e.p,{children:'"while" d\xf6ng\xfcleri, belirtilen ko\u015Ful do\u011Fru oldu\u011Fu s\xfcrece bir \u015Feyleri ger\xe7ekle\u015Ftirir. Ko\u015Ful, tam olarak bir if ifadesindeki ko\u015Ful format\u0131 gibidir, sadece s\xfcrekli kontrol edilir ve her kontrolde do\u011Fruysa her kontrolde yap\u0131lan kodu ger\xe7ekle\u015Ftirir:'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"new\n    a = 9;\nwhile (a < 10)\n{\n    // D\xf6ng\xfc i\xe7indeki kod\n    a++;\n}\n// D\xf6ng\xfcden sonraki kod\n"})}),"\n",(0,r.jsx)(e.p,{children:"Bu kod, 'a' 10'dan k\xfc\xe7\xfckse kontrol eder. E\u011Fer \xf6yleyse, s\xfcsl\xfc parantez i\xe7indeki kod (a++;) y\xfcr\xfct\xfcl\xfcr, b\xf6ylece 'a' artt\u0131r\u0131l\u0131r. Kapanan s\xfcsl\xfc paranteze ula\u015F\u0131ld\u0131\u011F\u0131nda, kod y\xfcr\xfctme kontrol\xfcn tekrar kontrol etmeye atlar ve bu kez kontrol 10 oldu\u011Fu i\xe7in ba\u015Far\u0131s\u0131z olur ve d\xf6ng\xfcden sonraki kodun \xfczerine atlar. 'a' 8 olarak ba\u015Flad\u0131ysa, kod iki kez \xe7al\u0131\u015Ft\u0131r\u0131lacakt\u0131r, vb."}),"\n",(0,r.jsx)(e.h3,{id:"for",children:"for()"}),"\n",(0,r.jsx)(e.p,{children:'Bir "for" d\xf6ng\xfcs\xfc, temelde s\u0131k\u0131\u015Ft\u0131r\u0131lm\u0131\u015F bir "while" d\xf6ng\xfcs\xfcd\xfcr. "for" ifadesi \xfc\xe7 b\xf6l\xfcmden olu\u015Fur: ba\u015Flatma, ko\u015Ful ve bitirme. Bir "for" d\xf6ng\xfcs\xfc olarak, yukar\u0131daki "while" \xf6rne\u011Fi \u015Fu \u015Fekilde yaz\u0131labilir:'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"for (new a = 9; a < 10; a++)\n{\n    // D\xf6ng\xfc i\xe7indeki kod\n}\n// D\xf6ng\xfcden sonraki kod\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u0130\u015Fte t\xfcm oyuncular\u0131 d\xf6ng\xfclemek i\xe7in basit bir kod:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"for(new i, a = GetMaxPlayers(); i < a; i++)\n{\n        if (IsPlayerConnected(i))\n        {\n                 // bir \u015Fey yap\n        }\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"Herhangi bir ko\u015Ful, basit\xe7e i\xe7ine kod yaz\u0131lmadan atlanabilir:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"new\n    a = 9;\nfor ( ; a < 10; )\n{\n    // D\xf6ng\xfc i\xe7indeki kod\n    a++;\n}\n// D\xf6ng\xfcden sonraki kod\n"})}),"\n",(0,r.jsx)(e.p,{children:"Bu \xf6rnek, bir \"for\" d\xf6ng\xfcs\xfcn\xfcn bir \"while\" d\xf6ng\xfcs\xfcyle nas\u0131l e\u015Fle\u015Fti\u011Fini g\xf6stermeyi biraz daha kolayla\u015Ft\u0131r\u0131r. \u0130ki \"for\" d\xf6ng\xfcs\xfc aras\u0131nda iki \xe7ok k\xfc\xe7\xfck fark vard\u0131r. \u0130lk fark, ikinci \xf6rnekte 'a'y\u0131 \"for\" d\xf6ng\xfcs\xfcn\xfcn d\u0131\u015F\u0131nda tan\u0131mlar, bu da 'a'y\u0131 \"for\" d\xf6ng\xfcs\xfcn\xfcn d\u0131\u015F\u0131nda kullan\u0131labilir hale getirir, ilk \xf6rnekte 'a'n\u0131n kapsam\u0131 (bir de\u011Fi\u015Fkenin var oldu\u011Fu kod b\xf6l\xfcm\xfc) sadece d\xf6ng\xfc i\xe7indedir. \u0130kinci fark, ikinci \xf6rnekteki a++, asl\u0131nda birinci \xf6rnekteki a++'dan biraz \xf6nce yap\u0131l\u0131r, \xe7o\u011Fu zaman bu hi\xe7bir fark yaratmaz, tek fark etti\u011Fi zaman 'continue' kullan\u0131yorsan\u0131z (a\u015Fa\u011F\u0131ya bak\u0131n\u0131z), 'continue', birinci \xf6rnekteki a++'\u0131 \xe7a\u011F\u0131racak, ancak ikinci \xf6rnektekini atlayacakt\u0131r."}),"\n",(0,r.jsx)(e.h3,{id:"do-while",children:"do-while"}),"\n",(0,r.jsx)(e.p,{children:"do-while d\xf6ng\xfcs\xfc, ko\u015Fulun d\xf6ng\xfc i\xe7indeki kodun \xf6ncesinde de\u011Fil, sonras\u0131nda gelmesi durumunda bir while d\xf6ng\xfcs\xfcd\xfcr. Bu, i\xe7erideki kodun kontrol yap\u0131lmadan \xf6nce her zaman en az bir kez y\xfcr\xfct\xfclece\u011Fi anlam\u0131na gelir:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"new\n    a = 10;\ndo\n{\n    // D\xf6ng\xfc i\xe7indeki kod\n    a++;\n}\nwhile (a < 10); // Noktal\u0131 virg\xfcl\xfc unutma\n// D\xf6ng\xfcden sonraki kod\n"})}),"\n",(0,r.jsx)(e.p,{children:"E\u011Fer bu standart bir while d\xf6ng\xfcs\xfc olsayd\u0131, a, (a < 10) kontrol\xfc yanl\u0131\u015F oldu\u011Fu i\xe7in artt\u0131r\u0131lmazd\u0131, ancak burada kontrol yap\u0131lmadan \xf6nce art\u0131r\u0131l\u0131r. E\u011Fer a 9 olarak ba\u015Flad\u0131ysa, d\xf6ng\xfc yine de bir kez \xe7al\u0131\u015Ft\u0131r\u0131l\u0131r, 8 - iki kez vb."}),"\n",(0,r.jsx)(e.h3,{id:"if-goto",children:"if-goto"}),"\n",(0,r.jsx)(e.p,{children:"Bu, yukar\u0131daki d\xf6ng\xfclerin \xf6z\xfcnde derlenen \u015Feydir, genellikle goto kullan\u0131m\u0131 ka\xe7\u0131n\u0131lmas\u0131 gereken bir y\xf6ntemdir, ancak bir d\xf6ng\xfcn\xfcn tam olarak ne yapt\u0131\u011F\u0131n\u0131 g\xf6rmek ilgin\xe7tir:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"new\n    a = 9;\n\nloop_start:\nif (a < 10)\n{\n    // D\xf6ng\xfc i\xe7indeki kod\n    a++;\n    goto loop_start;\n}\n// D\xf6ng\xfcden sonraki kod\n"})}),"\n",(0,r.jsx)(e.h3,{id:"oboe",children:"OBOE"}),"\n",(0,r.jsx)(e.p,{children:"OBOE, Off By One Error'\u0131n k\u0131saltmas\u0131d\u0131r. Bu, bir d\xf6ng\xfcn\xfcn bir fazla veya iki eksik kez \xe7al\u0131\u015Ft\u0131\u011F\u0131 \xe7ok yayg\u0131n bir hatad\u0131r. \xd6rne\u011Fin:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"new\n    a = 0,\n    b[10];\nwhile (a <= sizeof (b))\n{\n    b[a] = 0;\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"Bu \xe7ok basit bir \xf6rnek, ancak insanlar bu d\xf6ng\xfcn\xfcn b'nin t\xfcm i\xe7eri\u011Fini d\xf6ng\xfcleyece\u011Fini ve bunlar\u0131 0'a ayarlayaca\u011F\u0131n\u0131 d\xfc\u015F\xfcnebilir, ancak bu d\xf6ng\xfc asl\u0131nda 11 kez \xe7al\u0131\u015Facak ve b[10]'a eri\u015Fmeye \xe7al\u0131\u015Facak, ki bu var olmayan bir elemand\u0131r (0'dan ba\u015Flayarak b'nin 11. yuvas\u0131 olacakt\u0131), bu nedenle \xe7e\u015Fitli sorunlara neden olabilir. Bu, bir S\u0131n\u0131rlar D\u0131\u015F\u0131 Hata (OOB) olarak bilinir."}),"\n",(0,r.jsx)(e.p,{children:"Do-while d\xf6ng\xfcleri kullan\u0131rken OBOE'lere kar\u015F\u0131 \xf6zellikle dikkatli olmal\u0131s\u0131n\u0131z, \xe7\xfcnk\xfc HER ZAMAN en az bir kez \xe7al\u0131\u015F\u0131rlar."}),"\n",(0,r.jsx)(e.h2,{id:"switch",children:"Switch"}),"\n",(0,r.jsx)(e.h3,{id:"switch-1",children:"switch"}),"\n",(0,r.jsx)(e.p,{children:"Switch ifadesi temelde bir yap\u0131land\u0131r\u0131lm\u0131\u015F if/else if/else sistemidir (for'un while gibi yap\u0131land\u0131r\u0131lm\u0131\u015F olmas\u0131 gibi). Onu bir \xf6rnek ile a\xe7\u0131klamak en kolay yoldur:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"new\n    a = 5;\nswitch (a)\n{\n    case 1:\n    {\n        // \xc7a\u011Fr\u0131lmayacak\n    }\n    case 2:\n    {\n        // \xc7a\u011Fr\u0131lmayacak\n    }\n    case 5:\n    {\n        // \xc7a\u011Fr\u0131lacak\n    }\n    default:\n    {\n        // \xc7a\u011Fr\u0131lmayacak\n    }\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"Bu, i\u015Flevsel olarak \u015Funa e\u015Fittir:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"new\n    a = 5;\nif (a == 1)\n{\n    // \xc7a\u011Fr\u0131lmayacak\n}\nelse if (a == 2)\n{\n    // \xc7a\u011Fr\u0131lmayacak\n}\nelse if (a == 5)\n{\n    // \xc7a\u011Fr\u0131lacak\n}\nelse\n{\n    // \xc7a\u011Fr\u0131lmayacak\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"Ancak, neyin oldu\u011Funu g\xf6rmek biraz daha a\xe7\u0131kt\u0131r."}),"\n",(0,r.jsx)(e.p,{children:"Burada dikkate al\u0131nmas\u0131 gereken \xf6nemli bir \u015Fey, if'lerin ve switch'in farkl\u0131 \u015Fekillerde i\u015Flenmesidir:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"switch (SomeFunction())\n{\n    case 1: {}\n    case 2: {}\n    case 3: {}\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"Bu, SomeFunction()'\u0131 B\u0130R KEZ \xe7a\u011F\u0131r\u0131r ve sonucunu 3 kez kar\u015F\u0131la\u015Ft\u0131r\u0131r."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"if (SomeFunction() == 1) {}\nelse if (SomeFunction() == 2) {}\nelse if (SomeFunction() == 3) {}\n"})}),"\n",(0,r.jsx)(e.p,{children:"Bu, SomeFunction()'\u0131 \xfc\xe7 kez \xe7a\u011F\u0131r\u0131r, bu da \xe7ok verimsizdir. Bir switch, daha \xe7ok \u015Fu gibi bir \u015Fey yapmaya benzer:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"new\n    result = SomeFunction();\nif (result == 1) {}\nelse if (result == 2) {}\nelse if (result == 3) {}\n"})}),"\n",(0,r.jsx)(e.p,{children:"C dili bilenler i\xe7in, PAWN switch'i biraz farkl\u0131d\u0131r, bireysel ko\u015Fullar FALLEN-THROUGH DE\u011E\u0130LD\u0130R ve s\xfcsl\xfc parantezle s\u0131n\u0131rlan\u0131r, bu nedenle break ifadelerine gerek yoktur."}),"\n",(0,r.jsx)(e.h3,{id:"case",children:"case"}),"\n",(0,r.jsx)(e.p,{children:"case ifadeleri (switch ifadesinin \"case X:\" b\xf6l\xfcmleri), bir tek say\u0131dan ba\u015Fka se\xe7eneklere sahip olabilir. Bir de\u011Feri bir say\u0131 listesiyle kar\u015F\u0131la\u015Ft\u0131rabilirsiniz (C'deki fall-through'\u0131n yerine ge\xe7er) veya hatta bir de\u011Fer aral\u0131\u011F\u0131yla kar\u015F\u0131la\u015Ft\u0131rabilirsiniz:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"case 1, 2, 3, 4:\n"})}),"\n",(0,r.jsx)(e.p,{children:"Bu durum, test edilen sembol\xfcn 1, 2, 3 veya 4 oldu\u011Funda tetiklenecektir, a\u015Fa\u011F\u0131daki gibi yapmakla ayn\u0131d\u0131r:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"if (bla == 1 || bla == 2 || bla == 3 || bla == 4)\n"})}),"\n",(0,r.jsx)(e.p,{children:"ancak \xe7ok daha \xf6zeldir. Say\u0131lar listesinde ard\u0131\u015F\u0131k olmak zorunda de\u011Fildir, asl\u0131nda \xf6yleyse:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"case 1 .. 4:\n"})}),"\n",(0,r.jsx)(e.p,{children:"Bu durum, yukar\u0131dakiyle tam olarak ayn\u0131 \u015Feyi yapar, ancak bir liste yerine bir aral\u0131\u011F\u0131 kontrol ederek yapar, yukar\u0131dakiyle ayn\u0131d\u0131r:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"if (bla >= 1 && bla <= 4)\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"new\n    a = 4;\nswitch (a)\n{\n    case 1 .. 3:\n    {\n    }\n    case 5, 8, 11:\n    {\n    }\n    case 4:\n    {\n    }\n    default:\n    {\n    }\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"default",children:"default"}),"\n",(0,r.jsx)(e.p,{children:"Bu, if ifadelerinde else'e e\u015Fde\u011Ferdir, di\u011Fer t\xfcm case ifadeleri ba\u015Far\u0131s\u0131z olursa bir \u015Fey yapar."}),"\n",(0,r.jsx)(e.h2,{id:"tek-sat\u0131rl\u0131k-ifadeler",children:"Tek sat\u0131rl\u0131k ifadeler"}),"\n",(0,r.jsx)(e.h3,{id:"goto",children:"goto"}),"\n",(0,r.jsx)(e.p,{children:"goto temelde bir s\u0131\xe7ramad\u0131r, \u015Farts\u0131z olarak bir etikete gider (yani do\u011Fru olmas\u0131 gereken bir ko\u015Ful yoktur). Bir \xf6rne\u011Fi yukar\u0131da if-goto d\xf6ng\xfcs\xfcnde g\xf6rebilirsiniz."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"goto my_label;\n\n// Bu b\xf6l\xfcm atlanacakt\u0131r\n\nmy_label: // Etiketler iki nokta \xfcst \xfcste ile biter ve kendi sat\u0131r\u0131nda olur\n\n// Bu b\xf6l\xfcm normal olarak i\u015Flenir\n"})}),"\n",(0,r.jsx)(e.p,{children:"Gotonun kullan\u0131m\u0131, program ak\u0131\u015F\u0131 \xfczerindeki etkileri nedeniyle geni\u015F \xe7apta tavsiye edilmez."}),"\n",(0,r.jsx)(e.h3,{id:"break",children:"break"}),"\n",(0,r.jsx)(e.p,{children:"break, bir d\xf6ng\xfcden \xe7\u0131kar, onu \xf6nceden sonland\u0131r\u0131r:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"for (new a = 0; a < 10; a++)\n{\n    if (a == 5) break;\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"Bu d\xf6ng\xfc 6 kez devam eder, ancak break'ten sonraki kod yaln\u0131zca 5 kez \xe7al\u0131\u015Ft\u0131r\u0131l\u0131r."}),"\n",(0,r.jsx)(e.h3,{id:"continue",children:"continue"}),"\n",(0,r.jsx)(e.p,{children:"continue basit\xe7e bir d\xf6ng\xfc yineleme atlar"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'for (new a = 0; a < 3; a++)\n{\n    if (a == 1) continue;\n    printf("a = %d", a);\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Bu, \u015Fu \xe7\u0131kt\u0131y\u0131 verecektir:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"a = 0 a = 2\n"})}),"\n",(0,r.jsx)(e.p,{children:"Continue, temelde d\xf6ng\xfcn\xfcn kapanan s\xfcsl\xfc parantezine atlar, yukar\u0131da belirtildi\u011Fi gibi baz\u0131 d\xf6ng\xfclerle continue kullan\u0131rken dikkatli olman\u0131z gerekir:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'new\n    a = 0;\nwhile (a < 3)\n{\n    if (a == 1) continue;\n    printf("a = %d", a);\n    a++;\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Bu, di\u011Fer \xf6rne\u011Fe \xe7ok benziyor, ancak bu sefer continue a++; sat\u0131r\u0131n\u0131 atlar, bu nedenle d\xf6ng\xfc a her zaman 1 oldu\u011Fu i\xe7in sonsuz bir d\xf6ng\xfcye s\u0131k\u0131\u015F\u0131r."}),"\n",(0,r.jsx)(e.h3,{id:"return",children:"return"}),"\n",(0,r.jsx)(e.p,{children:"return, bir i\u015Flevi durdurur ve kodun, o i\u015Flevi ba\u015Flatan noktaya geri d\xf6nmesini sa\u011Flar:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'main()\n{\n    print("1");\n    MyFunction(1);\n    print("3");\n}\n\nMyFunction(num)\n{\n    if (num == 1)\n    {\n        return;\n    }\n    print("2");\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Bu kod, \u015Fu \xe7\u0131kt\u0131y\u0131 verecektir:"}),"\n",(0,r.jsx)(e.p,{children:"1 3"}),"\n",(0,r.jsx)(e.p,{children:'\xc7\xfcnk\xfc print("2"); sat\u0131r\u0131 asla ula\u015F\u0131lmayacakt\u0131r.'}),"\n",(0,r.jsx)(e.p,{children:"return'u bir de\u011Fer d\xf6nd\xfcrmek i\xe7in de kullanabilirsiniz:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'main()\n{\n    print("1");\n    if (MyFunction(1) == 27)\n    {\n        print("3");\n    }\n}\n\nMyFunction(num)\n{\n    if (num == 1)\n    {\n        return 27;\n    }\n    print("2");\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Bu kod, yukar\u0131dakiyle ayn\u0131 \xe7\u0131kt\u0131y\u0131 verecektir, ancak i\u015Flevin sonuna ba\u015Fka bir return eklenmi\u015Ftir. Bir i\u015Flevin sonunda bir return \xf6nerilir, ancak bu returnun de\u011Feri yoktur, ayn\u0131 i\u015Flevden bir de\u011Fer d\xf6nd\xfcremezsiniz, bu nedenle bir de\u011Feri a\xe7\u0131k\xe7a d\xf6nd\xfcrmemiz gerekir."}),"\n",(0,r.jsx)(e.p,{children:"D\xf6nd\xfcrd\xfc\u011F\xfcn\xfcz sembol bir say\u0131, bir de\u011Fi\u015Fken veya hatta ba\u015Fka bir i\u015Flev olabilir (bu durumda di\u011Fer i\u015Flev \xe7a\u011Fr\u0131l\u0131r, bir de\u011Fer d\xf6nd\xfcr\xfcr (onu bir d\xf6n\xfc\u015F de\u011Feri olarak kullan\u0131rsan\u0131z B\u0130R de\u011Fer d\xf6nd\xfcrmeli) ve bu de\u011Fer ilk i\u015Flevden d\xf6nd\xfcr\xfcl\xfcr."}),"\n",(0,r.jsx)(e.p,{children:"D\xf6n\xfc\u015F de\u011Ferlerini daha sonra kullanmak i\xe7in de saklayabilirsiniz:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'main()\n{\n    print("1");\n    new\n        ret = MyFunction(1);\n    if (ret == 27)\n    {\n        print("3");\n    }\n}\n\nMyFunction(num)\n{\n    if (num == 1)\n    {\n        return 27;\n    }\n    print("2");\n    return 0;\n}\n'})})]})}function k(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},50065:function(n,e,a){a.d(e,{Z:function(){return s},a:function(){return d}});var i=a(67294);let r={},l=i.createContext(r);function d(n){let e=i.useContext(l);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);