"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["87250"],{64648:function(F,x,C){C.r(x),C.d(x,{default:()=>s,frontMatter:()=>e,metadata:()=>A,assets:()=>r,toc:()=>t,contentTitle:()=>o});var A=JSON.parse('{"id":"tutorials/colorfix","title":"Color Fix","description":"This tutorial is to be used with GetPlayerColor, if you do not use SetPlayerColor in your script when players connect.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/tutorials/colorfix.md","sourceDirName":"tutorials","slug":"/tutorials/colorfix","permalink":"/th/docs/tutorials/colorfix","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/tutorials/colorfix.md","tags":[],"version":"current","frontMatter":{"title":"Color Fix","sidebar_label":"Color Fix","descripion":"A basic script to add more player colours."},"sidebar":"docsSidebar","previous":{"title":"SA:MP Query Mechanism","permalink":"/th/docs/tutorials/QueryMechanism"},"next":{"title":"Cooldowns","permalink":"/th/docs/tutorials/cooldowns"}}'),E=C("85893"),n=C("50065");let e={title:"Color Fix",sidebar_label:"Color Fix",descripion:"A basic script to add more player colours."},o=void 0,r={},t=[];function l(F){let x={a:"a",code:"code",p:"p",pre:"pre",...(0,n.a)(),...F.components};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(x.p,{children:["This tutorial is to be used with ",(0,E.jsx)(x.a,{href:"../functions/GetPlayerColor",children:"GetPlayerColor"}),", if you do not use ",(0,E.jsx)(x.a,{href:"../functions/SetPlayerColor",children:"SetPlayerColor"})," in your script when players connect."]}),"\n",(0,E.jsx)(x.pre,{children:(0,E.jsx)(x.code,{className:"language-c",children:"new PlayerColors[] = {\n    0xFF8C13FF,0xC715FFFF,0x20B2AAFF,0xDC143CFF,0x6495EDFF,0xf0e68cFF,0x778899FF,0xFF1493FF,0xF4A460FF,0xEE82EEFF,\n    0xFFD720FF,0x8b4513FF,0x4949A0FF,0x148b8bFF,0x14ff7fFF,0x556b2fFF,0x0FD9FAFF,0x10DC29FF,0x534081FF,0x0495CDFF,\n    0xEF6CE8FF,0xBD34DAFF,0x247C1BFF,0x0C8E5DFF,0x635B03FF,0xCB7ED3FF,0x65ADEBFF,0x5C1ACCFF,0xF2F853FF,0x11F891FF,\n    0x7B39AAFF,0x53EB10FF,0x54137DFF,0x275222FF,0xF09F5BFF,0x3D0A4FFF,0x22F767FF,0xD63034FF,0x9A6980FF,0xDFB935FF,\n    0x3793FAFF,0x90239DFF,0xE9AB2FFF,0xAF2FF3FF,0x057F94FF,0xB98519FF,0x388EEAFF,0x028151FF,0xA55043FF,0x0DE018FF,\n    0x93AB1CFF,0x95BAF0FF,0x369976FF,0x18F71FFF,0x4B8987FF,0x491B9EFF,0x829DC7FF,0xBCE635FF,0xCEA6DFFF,0x20D4ADFF,\n    0x2D74FDFF,0x3C1C0DFF,0x12D6D4FF,0x48C000FF,0x2A51E2FF,0xE3AC12FF,0xFC42A8FF,0x2FC827FF,0x1A30BFFF,0xB740C2FF,\n    0x42ACF5FF,0x2FD9DEFF,0xFAFB71FF,0x05D1CDFF,0xC471BDFF,0x94436EFF,0xC1F7ECFF,0xCE79EEFF,0xBD1EF2FF,0x93B7E4FF,\n    0x3214AAFF,0x184D3BFF,0xAE4B99FF,0x7E49D7FF,0x4C436EFF,0xFA24CCFF,0xCE76BEFF,0xA04E0AFF,0x9F945CFF,0xDCDE3DFF,\n    0x10C9C5FF,0x70524DFF,0x0BE472FF,0x8A2CD7FF,0x6152C2FF,0xCF72A9FF,0xE59338FF,0xEEDC2DFF,0xD8C762FF,0x3FE65CFF\n};\n"})}),"\n",(0,E.jsx)(x.p,{children:"First place that at the top of your script."}),"\n",(0,E.jsx)(x.p,{children:"Next place this under the OnPlayerConnect callback:"}),"\n",(0,E.jsx)(x.pre,{children:(0,E.jsx)(x.code,{className:"language-c",children:"SetPlayerColor(playerid, PlayerColors[playerid % sizeof PlayerColors]);\n"})}),"\n",(0,E.jsxs)(x.p,{children:["Now ",(0,E.jsx)(x.a,{href:"../functions/GetPlayerColor",children:"GetPlayerColor"})," will work!"]}),"\n",(0,E.jsx)(x.p,{children:"For new versions of SA-MP you can add this array:"}),"\n",(0,E.jsx)(x.pre,{children:(0,E.jsx)(x.code,{className:"language-c",children:"new PlayerRainbowColors[511] = {\n    /*OKStyle*/ 0x000022FF, 0x000044FF, 0x000066FF, 0x000088FF, 0x0000AAFF, 0x0000CCFF, 0x0000EEFF,\n    0x002200FF, 0x002222FF, 0x002244FF, 0x002266FF, 0x002288FF, 0x0022AAFF, 0x0022CCFF, 0x0022EEFF,\n    0x004400FF, 0x004422FF, 0x004444FF, 0x004466FF, 0x004488FF, 0x0044AAFF, 0x0044CCFF, 0x0044EEFF,\n    0x006600FF, 0x006622FF, 0x006644FF, 0x006666FF, 0x006688FF, 0x0066AAFF, 0x0066CCFF, 0x0066EEFF,\n    0x008800FF, 0x008822FF, 0x008844FF, 0x008866FF, 0x008888FF, 0x0088AAFF, 0x0088CCFF, 0x0088EEFF,\n    0x00AA00FF, 0x00AA22FF, 0x00AA44FF, 0x00AA66FF, 0x00AA88FF, 0x00AAAAFF, 0x00AACCFF, 0x00AAEEFF,\n    0x00CC00FF, 0x00CC22FF, 0x00CC44FF, 0x00CC66FF, 0x00CC88FF, 0x00CCAAFF, 0x00CCCCFF, 0x00CCEEFF,\n    0x00EE00FF, 0x00EE22FF, 0x00EE44FF, 0x00EE66FF, 0x00EE88FF, 0x00EEAAFF, 0x00EECCFF, 0x00EEEEFF,\n\n    0x220000FF, 0x220022FF, 0x220044FF, 0x220066FF, 0x220088FF, 0x2200AAFF, 0x2200CCFF, 0x2200FFFF,\n    0x222200FF, 0x222222FF, 0x222244FF, 0x222266FF, 0x222288FF, 0x2222AAFF, 0x2222CCFF, 0x2222EEFF,\n    0x224400FF, 0x224422FF, 0x224444FF, 0x224466FF, 0x224488FF, 0x2244AAFF, 0x2244CCFF, 0x2244EEFF,\n    0x226600FF, 0x226622FF, 0x226644FF, 0x226666FF, 0x226688FF, 0x2266AAFF, 0x2266CCFF, 0x2266EEFF,\n    0x228800FF, 0x228822FF, 0x228844FF, 0x228866FF, 0x228888FF, 0x2288AAFF, 0x2288CCFF, 0x2288EEFF,\n    0x22AA00FF, 0x22AA22FF, 0x22AA44FF, 0x22AA66FF, 0x22AA88FF, 0x22AAAAFF, 0x22AACCFF, 0x22AAEEFF,\n    0x22CC00FF, 0x22CC22FF, 0x22CC44FF, 0x22CC66FF, 0x22CC88FF, 0x22CCAAFF, 0x22CCCCFF, 0x22CCEEFF,\n    0x22EE00FF, 0x22EE22FF, 0x22EE44FF, 0x22EE66FF, 0x22EE88FF, 0x22EEAAFF, 0x22EECCFF, 0x22EEEEFF,\n\n    0x440000FF, 0x440022FF, 0x440044FF, 0x440066FF, 0x440088FF, 0x4400AAFF, 0x4400CCFF, 0x4400FFFF,\n    0x442200FF, 0x442222FF, 0x442244FF, 0x442266FF, 0x442288FF, 0x4422AAFF, 0x4422CCFF, 0x4422EEFF,\n    0x444400FF, 0x444422FF, 0x444444FF, 0x444466FF, 0x444488FF, 0x4444AAFF, 0x4444CCFF, 0x4444EEFF,\n    0x446600FF, 0x446622FF, 0x446644FF, 0x446666FF, 0x446688FF, 0x4466AAFF, 0x4466CCFF, 0x4466EEFF,\n    0x448800FF, 0x448822FF, 0x448844FF, 0x448866FF, 0x448888FF, 0x4488AAFF, 0x4488CCFF, 0x4488EEFF,\n    0x44AA00FF, 0x44AA22FF, 0x44AA44FF, 0x44AA66FF, 0x44AA88FF, 0x44AAAAFF, 0x44AACCFF, 0x44AAEEFF,\n    0x44CC00FF, 0x44CC22FF, 0x44CC44FF, 0x44CC66FF, 0x44CC88FF, 0x44CCAAFF, 0x44CCCCFF, 0x44CCEEFF,\n    0x44EE00FF, 0x44EE22FF, 0x44EE44FF, 0x44EE66FF, 0x44EE88FF, 0x44EEAAFF, 0x44EECCFF, 0x44EEEEFF,\n\n    0x660000FF, 0x660022FF, 0x660044FF, 0x660066FF, 0x660088FF, 0x6600AAFF, 0x6600CCFF, 0x6600FFFF,\n    0x662200FF, 0x662222FF, 0x662244FF, 0x662266FF, 0x662288FF, 0x6622AAFF, 0x6622CCFF, 0x6622EEFF,\n    0x664400FF, 0x664422FF, 0x664444FF, 0x664466FF, 0x664488FF, 0x6644AAFF, 0x6644CCFF, 0x6644EEFF,\n    0x666600FF, 0x666622FF, 0x666644FF, 0x666666FF, 0x666688FF, 0x6666AAFF, 0x6666CCFF, 0x6666EEFF,\n    0x668800FF, 0x668822FF, 0x668844FF, 0x668866FF, 0x668888FF, 0x6688AAFF, 0x6688CCFF, 0x6688EEFF,\n    0x66AA00FF, 0x66AA22FF, 0x66AA44FF, 0x66AA66FF, 0x66AA88FF, 0x66AAAAFF, 0x66AACCFF, 0x66AAEEFF,\n    0x66CC00FF, 0x66CC22FF, 0x66CC44FF, 0x66CC66FF, 0x66CC88FF, 0x66CCAAFF, 0x66CCCCFF, 0x66CCEEFF,\n    0x66EE00FF, 0x66EE22FF, 0x66EE44FF, 0x66EE66FF, 0x66EE88FF, 0x66EEAAFF, 0x66EECCFF, 0x66EEEEFF,\n\n    0x880000FF, 0x880022FF, 0x880044FF, 0x880066FF, 0x880088FF, 0x8800AAFF, 0x8800CCFF, 0x8800FFFF,\n    0x882200FF, 0x882222FF, 0x882244FF, 0x882266FF, 0x882288FF, 0x8822AAFF, 0x8822CCFF, 0x8822EEFF,\n    0x884400FF, 0x884422FF, 0x884444FF, 0x884466FF, 0x884488FF, 0x8844AAFF, 0x8844CCFF, 0x8844EEFF,\n    0x886600FF, 0x886622FF, 0x886644FF, 0x886666FF, 0x886688FF, 0x8866AAFF, 0x8866CCFF, 0x8866EEFF,\n    0x888800FF, 0x888822FF, 0x888844FF, 0x888866FF, 0x888888FF, 0x8888AAFF, 0x8888CCFF, 0x8888EEFF,\n    0x88AA00FF, 0x88AA22FF, 0x88AA44FF, 0x88AA66FF, 0x88AA88FF, 0x88AAAAFF, 0x88AACCFF, 0x88AAEEFF,\n    0x88CC00FF, 0x88CC22FF, 0x88CC44FF, 0x88CC66FF, 0x88CC88FF, 0x88CCAAFF, 0x88CCCCFF, 0x88CCEEFF,\n    0x88EE00FF, 0x88EE22FF, 0x88EE44FF, 0x88EE66FF, 0x88EE88FF, 0x88EEAAFF, 0x88EECCFF, 0x88EEEEFF,\n\n    0xAA0000FF, 0xAA0022FF, 0xAA0044FF, 0xAA0066FF, 0xAA0088FF, 0xAA00AAFF, 0xAA00CCFF, 0xAA00FFFF,\n    0xAA2200FF, 0xAA2222FF, 0xAA2244FF, 0xAA2266FF, 0xAA2288FF, 0xAA22AAFF, 0xAA22CCFF, 0xAA22EEFF,\n    0xAA4400FF, 0xAA4422FF, 0xAA4444FF, 0xAA4466FF, 0xAA4488FF, 0xAA44AAFF, 0xAA44CCFF, 0xAA44EEFF,\n    0xAA6600FF, 0xAA6622FF, 0xAA6644FF, 0xAA6666FF, 0xAA6688FF, 0xAA66AAFF, 0xAA66CCFF, 0xAA66EEFF,\n    0xAA8800FF, 0xAA8822FF, 0xAA8844FF, 0xAA8866FF, 0xAA8888FF, 0xAA88AAFF, 0xAA88CCFF, 0xAA88EEFF,\n    0xAAAA00FF, 0xAAAA22FF, 0xAAAA44FF, 0xAAAA66FF, 0xAAAA88FF, 0xAAAAAAFF, 0xAAAACCFF, 0xAAAAEEFF,\n    0xAACC00FF, 0xAACC22FF, 0xAACC44FF, 0xAACC66FF, 0xAACC88FF, 0xAACCAAFF, 0xAACCCCFF, 0xAACCEEFF,\n    0xAAEE00FF, 0xAAEE22FF, 0xAAEE44FF, 0xAAEE66FF, 0xAAEE88FF, 0xAAEEAAFF, 0xAAEECCFF, 0xAAEEEEFF,\n\n    0xCC0000FF, 0xCC0022FF, 0xCC0044FF, 0xCC0066FF, 0xCC0088FF, 0xCC00AAFF, 0xCC00CCFF, 0xCC00FFFF,\n    0xCC2200FF, 0xCC2222FF, 0xCC2244FF, 0xCC2266FF, 0xCC2288FF, 0xCC22AAFF, 0xCC22CCFF, 0xCC22EEFF,\n    0xCC4400FF, 0xCC4422FF, 0xCC4444FF, 0xCC4466FF, 0xCC4488FF, 0xCC44AAFF, 0xCC44CCFF, 0xCC44EEFF,\n    0xCC6600FF, 0xCC6622FF, 0xCC6644FF, 0xCC6666FF, 0xCC6688FF, 0xCC66AAFF, 0xCC66CCFF, 0xCC66EEFF,\n    0xCC8800FF, 0xCC8822FF, 0xCC8844FF, 0xCC8866FF, 0xCC8888FF, 0xCC88AAFF, 0xCC88CCFF, 0xCC88EEFF,\n    0xCCAA00FF, 0xCCAA22FF, 0xCCAA44FF, 0xCCAA66FF, 0xCCAA88FF, 0xCCAAAAFF, 0xCCAACCFF, 0xCCAAEEFF,\n    0xCCCC00FF, 0xCCCC22FF, 0xCCCC44FF, 0xCCCC66FF, 0xCCCC88FF, 0xCCCCAAFF, 0xCCCCCCFF, 0xCCCCEEFF,\n    0xCCEE00FF, 0xCCEE22FF, 0xCCEE44FF, 0xCCEE66FF, 0xCCEE88FF, 0xCCEEAAFF, 0xCCEECCFF, 0xCCEEEEFF,\n\n    0xEE0000FF, 0xEE0022FF, 0xEE0044FF, 0xEE0066FF, 0xEE0088FF, 0xEE00AAFF, 0xEE00CCFF, 0xEE00FFFF,\n    0xEE2200FF, 0xEE2222FF, 0xEE2244FF, 0xEE2266FF, 0xEE2288FF, 0xEE22AAFF, 0xEE22CCFF, 0xEE22EEFF,\n    0xEE4400FF, 0xEE4422FF, 0xEE4444FF, 0xEE4466FF, 0xEE4488FF, 0xEE44AAFF, 0xEE44CCFF, 0xEE44EEFF,\n    0xEE6600FF, 0xEE6622FF, 0xEE6644FF, 0xEE6666FF, 0xEE6688FF, 0xEE66AAFF, 0xEE66CCFF, 0xEE66EEFF,\n    0xEE8800FF, 0xEE8822FF, 0xEE8844FF, 0xEE8866FF, 0xEE8888FF, 0xEE88AAFF, 0xEE88CCFF, 0xEE88EEFF,\n    0xEEAA00FF, 0xEEAA22FF, 0xEEAA44FF, 0xEEAA66FF, 0xEEAA88FF, 0xEEAAAAFF, 0xEEAACCFF, 0xEEAAEEFF,\n    0xEECC00FF, 0xEECC22FF, 0xEECC44FF, 0xEECC66FF, 0xEECC88FF, 0xEECCAAFF, 0xEECCCCFF, 0xEECCEEFF,\n    0xEEEE00FF, 0xEEEE22FF, 0xEEEE44FF, 0xEEEE66FF, 0xEEEE88FF, 0xEEEEAAFF, 0xEEEECCFF, 0xEEEEEEFF\n};\n"})}),"\n",(0,E.jsx)(x.p,{children:"Now there are no duplicated colors, the colors are distributed to the maximum number of slots, the step of color - 34, and the TAB of full server looks like a rainbow!"})]})}function s(F={}){let{wrapper:x}={...(0,n.a)(),...F.components};return x?(0,E.jsx)(x,{...F,children:(0,E.jsx)(l,{...F})}):l(F)}},50065:function(F,x,C){C.d(x,{Z:function(){return o},a:function(){return e}});var A=C(67294);let E={},n=A.createContext(E);function e(F){let x=A.useContext(n);return A.useMemo(function(){return"function"==typeof F?F(x):{...x,...F}},[x,F])}function o(F){let x;return x=F.disableParentContext?"function"==typeof F.components?F.components(E):F.components||E:e(F.components),A.createElement(n.Provider,{value:x},F.children)}}}]);