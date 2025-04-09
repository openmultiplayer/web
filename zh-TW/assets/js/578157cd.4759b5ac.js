"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["50332"],{87988:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/SetPlayerObjectMaterial","title":"SetPlayerObjectMaterial","description":"Replace the texture of a player-object with the texture from another model in the game.","source":"@site/docs/scripting/functions/SetPlayerObjectMaterial.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerObjectMaterial","permalink":"/zh-TW/docs/scripting/functions/SetPlayerObjectMaterial","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerObjectMaterial.md","tags":[{"inline":true,"label":"player","permalink":"/zh-TW/docs/tags/player"},{"inline":true,"label":"object","permalink":"/zh-TW/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/zh-TW/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"SetPlayerObjectMaterial","sidebar_label":"SetPlayerObjectMaterial","description":"Replace the texture of a player-object with the texture from another model in the game.","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerName","permalink":"/zh-TW/docs/scripting/functions/SetPlayerName"},"next":{"title":"SetPlayerObjectMaterialText","permalink":"/zh-TW/docs/scripting/functions/SetPlayerObjectMaterialText"}}'),i=r("85893"),a=r("50065");let l={title:"SetPlayerObjectMaterial",sidebar_label:"SetPlayerObjectMaterial",description:"Replace the texture of a player-object with the texture from another model in the game.",tags:["player","object","playerobject"]},s=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Advanaced Map Editors",id:"advanaced-map-editors",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Replace the texture of a player-object with the texture from another model in the game."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player the object is associated to."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objectid"}),(0,i.jsx)(t.td,{children:"The ID of the object to replace the texture of"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"materialIndex"}),(0,i.jsx)(t.td,{children:"The material index on the object to change (0 to 15)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"modelid"}),(0,i.jsx)(t.td,{children:"The modelid on which replacement texture is located. Use 0 for alpha. Use -1 to change the material color without altering the existing texture."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"const textureLibrary[]"}),(0,i.jsx)(t.td,{children:'The name of the txd file which contains the replacement texture (use "none" if not required)'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"const textureName[]"}),(0,i.jsx)(t.td,{children:'The name of the texture to use as the replacement (use "none" if not required)'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"materialColour"}),(0,i.jsx)(t.td,{children:"The object color to set, as an integer or hex in ARGB format. Using 0 keeps the existing material color."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid,cmdtext[])\n{\n    if (!strcmp(cmdtext, "/objmat", true))\n    {\n        new\n            Float:x, Float:y, Float:z,\n            myObject;\n\n        GetPlayerPos(playerid, x, y, z);\n        myObject = CreatePlayerObject(playerid, 19371, x, y, z+0.5, 0.0, 0.0, 0.0, 300.0);\n        SetPlayerObjectMaterial(playerid, myObject, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);\n        // Replaces the texture of our player-object with the texture of model 19341\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Vertex lightning of the object will disappear if material color is changed."})}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"You MUST use ARGB color format, not RGBA like used in client messages etc."})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetObjectMaterial",children:"SetObjectMaterial"}),": Replace the texture of an object with the texture from another model in the game."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"advanaced-map-editors",children:"Advanaced Map Editors"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/Pottus/Texture-Studio",children:"Texture Studio"})," by Pottus"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/NexiusTailer/Ultimate-Creator",children:"Ultimate Creator"})," by Nexius"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/fusez/Map-Editor-V3",children:"Fusez's Map Editor"})," by RedFusion"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return l}});var n=r(67294);let i={},a=n.createContext(i);function l(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);