"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["49085"],{11606:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>a,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/SetObjectMaterialText","title":"SetObjectMaterialText","description":"Replace the texture of an object with text.","source":"@site/docs/scripting/functions/SetObjectMaterialText.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetObjectMaterialText","permalink":"/id/docs/scripting/functions/SetObjectMaterialText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetObjectMaterialText.md","tags":[{"inline":true,"label":"object","permalink":"/id/docs/tags/object"}],"version":"current","frontMatter":{"title":"SetObjectMaterialText","sidebar_label":"SetObjectMaterialText","description":"Replace the texture of an object with text.","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"SetObjectMaterial","permalink":"/id/docs/scripting/functions/SetObjectMaterial"},"next":{"title":"SetObjectMoveSpeed","permalink":"/id/docs/scripting/functions/SetObjectMoveSpeed"}}'),i=n("85893"),s=n("50065");let l={title:"SetObjectMaterialText",sidebar_label:"SetObjectMaterialText",description:"Replace the texture of an object with text.",tags:["object"]},c=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Advanaced Map Editors",id:"advanaced-map-editors",level:2},{value:"Related Resources",id:"related-resources",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Replace the texture of an object with text."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objectid"}),(0,i.jsx)(t.td,{children:"The ID of the object to replace the texture of with text."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"const text[]"}),(0,i.jsx)(t.td,{children:"The text to show on the object. (MAX 2048 characters)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"materialIndex"}),(0,i.jsx)(t.td,{children:"The object's material index to replace with text."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["OBJECT_MATERIAL_SIZE",":materialsize"]}),(0,i.jsxs)(t.td,{children:["The ",(0,i.jsx)(t.a,{href:"/docs/scripting/resources/materialtextsizes",children:"size"})," of the material."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"const fontFace[]"}),(0,i.jsx)(t.td,{children:"The font to use."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fontSize"}),(0,i.jsx)(t.td,{children:"The size of the text (MAX 255)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["bool",":bold"]}),(0,i.jsx)(t.td,{children:"Bold text. Set to true for bold, false for not."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fontColour"}),(0,i.jsx)(t.td,{children:"The color of the text, in ARGB format."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"backgroundColour"}),(0,i.jsx)(t.td,{children:"The background color, in ARGB format."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["OBJECT_MATERIAL_TEXT_ALIGN",":textAlignment"]}),(0,i.jsxs)(t.td,{children:["The ",(0,i.jsx)(t.a,{href:"/docs/scripting/resources/materialtextalignment",children:"alignment"})," of the text (default: left)."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"OPEN_MP_TAGS:..."}),(0,i.jsx)(t.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"false"})," - The function failed to execute."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp("/text", cmdtext, true) == 0)\n    {\n        new objectId = CreateObject(19353, 0, 0, 10, 0.0, 0.0, 90.0); //create the object\n        SetObjectMaterialText(objectId, "SA-MP {FFFFFF}0.{008500}3.{FF8200}DL", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 28, false, 0xFFFF8200, 0xFF000000, OBJECT_MATERIAL_TEXT_ALIGN_CENT);\n        // write "SA-MP 0.3.DL" on the object, with orange font color and black background\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Color embedding can be used for multiple colors in the text."})}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"You MUST use ARGB color format, not RGBA like used in client messages etc.\nText does not update after 16 calls against the same object."})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerObjectMaterialText",children:"SetPlayerObjectMaterialText"}),": Replace the texture of a player object with text."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetObjectMaterial",children:"SetObjectMaterial"}),": Replace the texture of an object with the texture from another model in the game."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"advanaced-map-editors",children:"Advanaced Map Editors"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/Pottus/Texture-Studio",children:"Texture Studio"})," by Pottus"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/NexiusTailer/Ultimate-Creator",children:"Ultimate Creator"})," by Nexius"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/fusez/Map-Editor-V3",children:"Fusez's Map Editor"})," by RedFusion"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://sampforum.blast.hk/showthread.php?tid=614667",children:"SetObjectMaterialText Editor"})," by RIDE2DAY"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../resources/materialtextsizes",children:"Material Text Sizes"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../resources/materialtextalignment",children:"Material Text Alignments"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return l}});var r=n(67294);let i={},s=r.createContext(i);function l(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);