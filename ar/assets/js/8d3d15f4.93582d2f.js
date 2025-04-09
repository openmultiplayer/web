"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["1282"],{76717:function(F,e,n){n.r(e),n.d(e,{default:()=>a,frontMatter:()=>r,metadata:()=>x,assets:()=>c,toc:()=>o,contentTitle:()=>s});var x=JSON.parse('{"id":"scripting/functions/ChangeVehicleColours","title":"ChangeVehicleColours","description":"Change a vehicle\'s primary and secondary colours.","source":"@site/docs/scripting/functions/ChangeVehicleColours.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ChangeVehicleColours","permalink":"/ar/docs/scripting/functions/ChangeVehicleColours","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ChangeVehicleColours.md","tags":[{"inline":true,"label":"vehicle","permalink":"/ar/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"ChangeVehicleColours","sidebar_label":"ChangeVehicleColours","description":"Change a vehicle\'s primary and secondary colours.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"ChangeVehicleColor","permalink":"/ar/docs/scripting/functions/ChangeVehicleColor"},"next":{"title":"ChangeVehiclePaintjob","permalink":"/ar/docs/scripting/functions/ChangeVehiclePaintjob"}}'),l=n("85893"),i=n("50065");let r={title:"ChangeVehicleColours",sidebar_label:"ChangeVehicleColours",description:"Change a vehicle's primary and secondary colours.",tags:["vehicle"]},s=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Snippets",id:"snippets",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function t(F){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...F.components},{VersionWarn:n}=e;return n||function(F,e){throw Error("Expected "+(e?"component":"object")+" `"+F+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(e.p,{children:"Change a vehicle's primary and secondary colours."}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Name"}),(0,l.jsx)(e.th,{children:"Description"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"vehicleid"}),(0,l.jsx)(e.td,{children:"The ID of the vehicle to change the colours of."})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"colour1"}),(0,l.jsx)(e.td,{children:"The new vehicle's primary Colour ID."})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"colour2"}),(0,l.jsx)(e.td,{children:"The new vehicle's secondary Colour ID."})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"true"})," - The function executed successfully. The vehicle's colour was successfully changed."]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"false"})," - The function failed to execute. The vehicle does not exist."]}),"\n",(0,l.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:"public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)\n{\n    // Change the primary colour to black and the secondary colour to white\n    ChangeVehicleColours(vehicleid, 0, 1);\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(e.h2,{id:"snippets",children:"Snippets"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:"new VehicleColoursTableRGBA[256] =\n{\n    // The existing colours from San Andreas\n    0x000000FF, 0xF5F5F5FF, 0x2A77A1FF, 0x840410FF, 0x263739FF, 0x86446EFF, 0xD78E10FF, 0x4C75B7FF, 0xBDBEC6FF, 0x5E7072FF,\n    0x46597AFF, 0x656A79FF, 0x5D7E8DFF, 0x58595AFF, 0xD6DAD6FF, 0x9CA1A3FF, 0x335F3FFF, 0x730E1AFF, 0x7B0A2AFF, 0x9F9D94FF,\n    0x3B4E78FF, 0x732E3EFF, 0x691E3BFF, 0x96918CFF, 0x515459FF, 0x3F3E45FF, 0xA5A9A7FF, 0x635C5AFF, 0x3D4A68FF, 0x979592FF,\n    0x421F21FF, 0x5F272BFF, 0x8494ABFF, 0x767B7CFF, 0x646464FF, 0x5A5752FF, 0x252527FF, 0x2D3A35FF, 0x93A396FF, 0x6D7A88FF,\n    0x221918FF, 0x6F675FFF, 0x7C1C2AFF, 0x5F0A15FF, 0x193826FF, 0x5D1B20FF, 0x9D9872FF, 0x7A7560FF, 0x989586FF, 0xADB0B0FF,\n    0x848988FF, 0x304F45FF, 0x4D6268FF, 0x162248FF, 0x272F4BFF, 0x7D6256FF, 0x9EA4ABFF, 0x9C8D71FF, 0x6D1822FF, 0x4E6881FF,\n    0x9C9C98FF, 0x917347FF, 0x661C26FF, 0x949D9FFF, 0xA4A7A5FF, 0x8E8C46FF, 0x341A1EFF, 0x6A7A8CFF, 0xAAAD8EFF, 0xAB988FFF,\n    0x851F2EFF, 0x6F8297FF, 0x585853FF, 0x9AA790FF, 0x601A23FF, 0x20202CFF, 0xA4A096FF, 0xAA9D84FF, 0x78222BFF, 0x0E316DFF,\n    0x722A3FFF, 0x7B715EFF, 0x741D28FF, 0x1E2E32FF, 0x4D322FFF, 0x7C1B44FF, 0x2E5B20FF, 0x395A83FF, 0x6D2837FF, 0xA7A28FFF,\n    0xAFB1B1FF, 0x364155FF, 0x6D6C6EFF, 0x0F6A89FF, 0x204B6BFF, 0x2B3E57FF, 0x9B9F9DFF, 0x6C8495FF, 0x4D8495FF, 0xAE9B7FFF,\n    0x406C8FFF, 0x1F253BFF, 0xAB9276FF, 0x134573FF, 0x96816CFF, 0x64686AFF, 0x105082FF, 0xA19983FF, 0x385694FF, 0x525661FF,\n    0x7F6956FF, 0x8C929AFF, 0x596E87FF, 0x473532FF, 0x44624FFF, 0x730A27FF, 0x223457FF, 0x640D1BFF, 0xA3ADC6FF, 0x695853FF,\n    0x9B8B80FF, 0x620B1CFF, 0x5B5D5EFF, 0x624428FF, 0x731827FF, 0x1B376DFF, 0xEC6AAEFF, 0x000000FF,\n    // SA-MP extended colours (0.3x)\n    0x177517FF, 0x210606FF, 0x125478FF, 0x452A0DFF, 0x571E1EFF, 0x010701FF, 0x25225AFF, 0x2C89AAFF, 0x8A4DBDFF, 0x35963AFF,\n    0xB7B7B7FF, 0x464C8DFF, 0x84888CFF, 0x817867FF, 0x817A26FF, 0x6A506FFF, 0x583E6FFF, 0x8CB972FF, 0x824F78FF, 0x6D276AFF,\n    0x1E1D13FF, 0x1E1306FF, 0x1F2518FF, 0x2C4531FF, 0x1E4C99FF, 0x2E5F43FF, 0x1E9948FF, 0x1E9999FF, 0x999976FF, 0x7C8499FF,\n    0x992E1EFF, 0x2C1E08FF, 0x142407FF, 0x993E4DFF, 0x1E4C99FF, 0x198181FF, 0x1A292AFF, 0x16616FFF, 0x1B6687FF, 0x6C3F99FF,\n    0x481A0EFF, 0x7A7399FF, 0x746D99FF, 0x53387EFF, 0x222407FF, 0x3E190CFF, 0x46210EFF, 0x991E1EFF, 0x8D4C8DFF, 0x805B80FF,\n    0x7B3E7EFF, 0x3C1737FF, 0x733517FF, 0x781818FF, 0x83341AFF, 0x8E2F1CFF, 0x7E3E53FF, 0x7C6D7CFF, 0x020C02FF, 0x072407FF,\n    0x163012FF, 0x16301BFF, 0x642B4FFF, 0x368452FF, 0x999590FF, 0x818D96FF, 0x99991EFF, 0x7F994CFF, 0x839292FF, 0x788222FF,\n    0x2B3C99FF, 0x3A3A0BFF, 0x8A794EFF, 0x0E1F49FF, 0x15371CFF, 0x15273AFF, 0x375775FF, 0x060820FF, 0x071326FF, 0x20394BFF,\n    0x2C5089FF, 0x15426CFF, 0x103250FF, 0x241663FF, 0x692015FF, 0x8C8D94FF, 0x516013FF, 0x090F02FF, 0x8C573AFF, 0x52888EFF,\n    0x995C52FF, 0x99581EFF, 0x993A63FF, 0x998F4EFF, 0x99311EFF, 0x0D1842FF, 0x521E1EFF, 0x42420DFF, 0x4C991EFF, 0x082A1DFF,\n    0x96821DFF, 0x197F19FF, 0x3B141FFF, 0x745217FF, 0x893F8DFF, 0x7E1A6CFF, 0x0B370BFF, 0x27450DFF, 0x071F24FF, 0x784573FF,\n    0x8A653AFF, 0x732617FF, 0x319490FF, 0x56941DFF, 0x59163DFF, 0x1B8A2FFF, 0x38160BFF, 0x041804FF, 0x355D8EFF, 0x2E3F5BFF,\n    0x561A28FF, 0x4E0E27FF, 0x706C67FF, 0x3B3E42FF, 0x2E2D33FF, 0x7B7E7DFF, 0x4A4442FF, 0x28344EFF\n};\n"})}),"\n",(0,l.jsx)(e.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(e.admonition,{type:"tip",children:(0,l.jsxs)(e.p,{children:["Some vehicles have only a primary colour and some can not have the colour changed at all. A few (cement, squallo) have 4 colours, of which 2 can not be changed in SA",":MP"]})}),"\n",(0,l.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"GetVehicleColours",children:"GetVehicleColours"}),": Gets the vehicle colours."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"ChangeVehiclePaintjob",children:"ChangeVehiclePaintjob"}),": Change the paintjob on a vehicle."]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"../callbacks/OnVehicleRespray",children:"OnVehicleRespray"}),": Called when a vehicle is resprayed."]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"../resources/vehiclecolorid",children:"Vehicle Colour IDs"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"../resources/original-car-colors",children:"Original Car Colours"})}),"\n"]})]})}function a(F={}){let{wrapper:e}={...(0,i.a)(),...F.components};return e?(0,l.jsx)(e,{...F,children:(0,l.jsx)(t,{...F})}):t(F)}},50065:function(F,e,n){n.d(e,{Z:function(){return s},a:function(){return r}});var x=n(67294);let l={},i=x.createContext(l);function r(F){let e=x.useContext(i);return x.useMemo(function(){return"function"==typeof F?F(e):{...e,...F}},[e,F])}function s(F){let e;return e=F.disableParentContext?"function"==typeof F.components?F.components(l):F.components||l:r(F.components),x.createElement(i.Provider,{value:e},F.children)}}}]);