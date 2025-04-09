"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["91432"],{26787:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>n,assets:()=>a,toc:()=>l,contentTitle:()=>o});var n=JSON.parse('{"id":"client/CrashAddresses","title":"Crash Addresses","description":"The below table lists some common crash addresses which you can use to help trace the problem and prevent it from occurring in future. In most cases client crashes occur because of a problem in the script. Although, it is worth mentioning that SA:MP is pretty stable nowadays.","source":"@site/docs/client/CrashAddresses.md","sourceDirName":"client","slug":"/client/CrashAddresses","permalink":"/it/docs/client/CrashAddresses","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/client/CrashAddresses.md","tags":[],"version":"current","frontMatter":{"title":"Crash Addresses","sidebar_label":"Crash Addresses"},"sidebar":"docsSidebar","previous":{"title":"Common Client Issues","permalink":"/it/docs/client/CommonClientIssues"},"next":{"title":"sa-mp.cfg","permalink":"/it/docs/client/sa-mp.cfg"}}'),i=s("85893"),r=s("50065");let d={title:"Crash Addresses",sidebar_label:"Crash Addresses"},o=void 0,a={},l=[{value:"Client Crash Addresses",id:"client-crash-addresses",level:2},{value:"Chatbox Warning Codes",id:"chatbox-warning-codes",level:2}];function c(e){let t={em:"em",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The below table lists some common crash addresses which you can use to help trace the problem and prevent it from occurring in future. In most cases client crashes occur because of a problem in the script. Although, it is worth mentioning that SA",":MP"," is pretty stable nowadays."]}),"\n",(0,i.jsx)(t.h2,{id:"client-crash-addresses",children:"Client Crash Addresses"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"FREQUENCY"}),(0,i.jsx)(t.th,{children:"ADDRESS"}),(0,i.jsx)(t.th,{children:"CAUSE"}),(0,i.jsx)(t.th,{children:"SOLUTION"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Rare"}),(0,i.jsx)(t.td,{children:"0x00000000"}),(0,i.jsxs)(t.td,{children:["SA",":MP"," is not initializing."]}),(0,i.jsx)(t.td,{children:"Re-install the game, ensure singleplayer works If you have any mods installed, remove them"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Rare"}),(0,i.jsx)(t.td,{children:"0x006E3D17"}),(0,i.jsx)(t.td,{children:"Skin related. Often occurs when changing the skin of a player who is in a vehicle, or is just entering or exiting one."}),(0,i.jsx)(t.td,{children:"Ensure the player is on foot prior to changing their skin."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Rare"}),(0,i.jsx)(t.td,{children:"0x0058370A"}),(0,i.jsx)(t.td,{children:"Hard to trace. Appears to be vehicle / camera related. Occured when the script attempted to put the player in a vehicle. The vehicle the player is being teleported into is not yet available and/or rendered in the world"}),(0,i.jsx)(t.td,{children:"Wait a few hundred-ms before teleporting a player into a vehicle that is newly created. Another solution would potentially be to use SetCameraBehindPlayer prior to teleporting them to the vehicle."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Rare"}),(0,i.jsx)(t.td,{children:"0x0040F64C"}),(0,i.jsxs)(t.td,{children:["Issue in Windows 7 / Vista relating to permissions. Problem in the installer version that the SA",":MP"," client uses"]}),(0,i.jsxs)(t.td,{children:["Update to SA",":MP"," 0.3.7. If it still occurs rename your GTASA directory."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Rare"}),(0,i.jsx)(t.td,{children:"0x0059F8B4"}),(0,i.jsxs)(t.td,{children:["Occurs when the client fails to load SA",":MP"," objects. Usually a problem with one an essential file, samp.img being missing."]}),(0,i.jsx)(t.td,{children:"Re-install the client. Try running the installer as Administrator if using Windows Vista / 7."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Rare"}),(0,i.jsx)(t.td,{children:"0x00746929 OR 0x0081214A"}),(0,i.jsx)(t.td,{children:"Badly configured client side setting."}),(0,i.jsx)(t.td,{children:'Terminate your "gta_sa.exe" using Task Manager'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Frequent"}),(0,i.jsx)(t.td,{children:"0x007F0BF7"}),(0,i.jsx)(t.td,{children:"Related to vehicle upgrades. Often caused when the server attempts to put an invalid upgrade on a vehicle (EG nos or spoilers on a motorbike). Other causes could be bad client side vehicle mods."}),(0,i.jsx)(t.td,{children:"There have been various scripts released on these forums which feature error checking for this."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Frequent"}),(0,i.jsx)(t.td,{children:"0x00544BC8"}),(0,i.jsx)(t.td,{children:"Object related. Typically occurs when too many objects are showing for the client, i.e. more than what it can handle."}),(0,i.jsx)(t.td,{children:"One practical solution may be to use an object handler/streamer. Many streamers on these forums come with configuration settings to decrease the maximum amount of visible objects showing for a player at any given time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Frequent"}),(0,i.jsx)(t.td,{children:"0x00415D47 OR 0x00536DF4"}),(0,i.jsx)(t.td,{children:"Object related. Typically occurs when too many object textures are loaded for the client."}),(0,i.jsx)(t.td,{children:"Low-level problem that is hard to trace and fix. I think it's somehow related to collisions It occurs randomly depending on the object. Try to remove groups of objects and use the process of elimination to establish which objects are causing it and remove them from your mode."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Rare"}),(0,i.jsx)(t.td,{children:"0x593C6F"}),(0,i.jsx)(t.td,{children:"When the number of burglary objects (that you pick up when robbing the house) is too high."}),(0,i.jsx)(t.td,{children:"Reduce the number of burglary objects"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"chatbox-warning-codes",children:"Chatbox Warning Codes"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"MESSAGE"}),(0,i.jsx)(t.th,{children:"CAUSE"}),(0,i.jsx)(t.th,{children:"SOLUTION"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Exception 0xC0000005 at 0x5E5815"}),(0,i.jsxs)(t.td,{children:["Difficult to trace. The method this address points to does a whole load of things. It processes animation blending based on the surface the ped is standing on and then deals with audio, and is called right after a function which ",(0,i.jsx)(t.em,{children:"gives"})," you weapons... Perhaps what happened here is that some script-invoked event occurred right at the moment that you were entering a vehicle (e.g. receiving a weapon, teleporting or something similar)."]}),(0,i.jsx)(t.td,{children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Exception 0x0000005 at 0x534134"}),(0,i.jsx)(t.td,{children:"Issue with Windows 7 / Vista Access levels"}),(0,i.jsxs)(t.td,{children:["Running SA",":MP"," as administrator appear to fix it."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Exception 0xC0000005 at 0x544BC8"}),(0,i.jsx)(t.td,{children:"See 0x00544BC8"}),(0,i.jsx)(t.td,{children:"See 0x00544BC8"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Exception 0xC0000005 at 0x536DF4"}),(0,i.jsx)(t.td,{children:"See 0x00544BC8"}),(0,i.jsx)(t.td,{children:"See 0x00544BC8"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Exception 0xC0000005 at 0x7F120E"}),(0,i.jsx)(t.td,{children:"Invalid vehicle upgrade applied"}),(0,i.jsx)(t.td,{children:"You have installed vehicular modification(Handling, vehicles) because SAMP doesn't load your Handling. cfg & Vehicles. ide, because if you adjust the settings, you could ride faster than others, and it would unfair so that loading from Admin's SAMP Source. In short, SAMP will not load your modified vehicle settings."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Exception At Address: 0x0040FB80"}),(0,i.jsx)(t.td,{children:"Common crash on windows 7 x64 computers. Happens when you run it in compatibility mode of Windows 2000, Windows XP, or Windows Vista (any service pack)."}),(0,i.jsx)(t.td,{children:"Fix by disabling compatibility and running gta_sa.exe as administrator."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Exception At Address:0x0071A708"}),(0,i.jsx)(t.td,{children:"Unknown"}),(0,i.jsx)(t.td,{children:"Disabling Legend at Options > Display Options."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Exception at Address: 0x004DFE92"}),(0,i.jsx)(t.td,{children:"Corrupted settings"}),(0,i.jsx)(t.td,{children:"Delete your gta_sa.set in Documents File."})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,s){s.d(t,{Z:function(){return o},a:function(){return d}});var n=s(67294);let i={},r=n.createContext(i);function d(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);