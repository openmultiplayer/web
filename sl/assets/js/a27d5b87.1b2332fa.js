"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["64506"],{87937:function(e,t,s){s.r(t),s.d(t,{default:()=>c,frontMatter:()=>d,metadata:()=>i,assets:()=>o,toc:()=>a,contentTitle:()=>l});var i=JSON.parse('{"id":"client/ClientCommands","title":"Client Commands","description":"List of all client commands.","source":"@site/docs/client/ClientCommands.md","sourceDirName":"client","slug":"/client/ClientCommands","permalink":"/sl/docs/client/ClientCommands","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/client/ClientCommands.md","tags":[],"version":"current","frontMatter":{"title":"Client Commands","sidebar_label":"Client Commands","description":"List of all client commands."},"sidebar":"docsSidebar","previous":{"title":"server.cfg","permalink":"/sl/docs/server/server.cfg"},"next":{"title":"open.mp client on linux","permalink":"/sl/docs/client/ClientOnLinux"}}'),n=s("85893"),r=s("50065");let d={title:"Client Commands",sidebar_label:"Client Commands",description:"List of all client commands."},l=void 0,o={},a=[{value:"Commands",id:"commands",level:2},{value:"File sa-mp.cfg",id:"file-sa-mpcfg",level:2}];function h(e){let t={a:"a",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"commands",children:"Commands"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Command"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"/quit (/q)"}),(0,n.jsx)(t.td,{children:"This command speaks for itself, it quits the game. You can also use /q, as it the exact same command, just shorter."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"/save"}),(0,n.jsx)(t.td,{children:"/save is most likely the most commonly used default command, and probably the most useful. When you type /save, your current position is saved to savedpositions.txt in your user files directory, from where you can use it in scripts."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"/rs"}),(0,n.jsx)(t.td,{children:"/rs (Raw Save) is like /save, but it only saves your current position and facing angle in rawpositions.txt in your user files directory. No extra information is saved such as class and weapons."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"/interior"}),(0,n.jsx)(t.td,{children:"Partly as important as /save, this command simply displays your current interior in chat."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"/vw"}),(0,n.jsx)(t.td,{children:"Partly as important as /save, this command simply displays your current virtual world in chat."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"/fpslimit"}),(0,n.jsx)(t.td,{children:"This command sets the limit of FPS (Frames Per Second) for your game. The higher the limit the smoother your game is. Has no effect if frame limiter is turned off in graphic options. The limit can be set between 20 and 90 and defaults to 50. This sets the sa-mp.cfg 'fpslimit' option."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"/pagesize"}),(0,n.jsx)(t.td,{children:"/pagesize is used to choose the amount of lines of chat to show. This can be anything from 10 to 20 lines. Pagesize is 10 by default. This sets the sa-mp.cfg 'pagesize' option."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"/headmove"}),(0,n.jsx)(t.td,{children:"This command controls whether player's heads move in the direction they are looking, however it is handled locally so other players will still see your head move. This sets the sa-mp.cfg 'disableheadmove' option."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"/timestamp"}),(0,n.jsx)(t.td,{children:"This command will show/hide a time next to all messages in the chatbox. The time that is displayed is your computer's time, not the server time. This sets the sa-mp.cfg 'timestamp' option."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"/dl"}),(0,n.jsx)(t.td,{children:"DL stands for debug labels. This command toggles debug labels on vehicles, which show the vehicle ID, model, health, whether the vehicle is pre-loaded, distance from the player, trailer, available seats, current position and spawn position."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"/nametagstatus"}),(0,n.jsx)(t.td,{children:"When enabled (which it is by default), players will see a small hourglass icon next to the nametag of paused players. This includes minimising (alt-tab), the pause menu (ESC), lost connection (crash/timeout) and when taking screenshots that freeze the game for over 3 seconds. This sets the sa-mp.cfg 'nonametagstatus' option."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"/mem"}),(0,n.jsx)(t.td,{children:"Shows the current amount of memory usage. (Although, it usually only prints 128 MB.)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"/audiomsg"}),(0,n.jsx)(t.td,{children:"Enables/disables the message that prints when a url is streamed to a client. This sets the sa-mp.cfg 'audiomsgoff' option."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"/fontsize"}),(0,n.jsx)(t.td,{children:"Changes the font size of the UI (chat, dialogs etc.). Valid fontsize is -3 to 5."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"/ctd"}),(0,n.jsx)(t.td,{children:"This command was added in SA-MP 0.3.7 RC2. It enables client debugging of the player camera target."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"/rcon"}),(0,n.jsxs)(t.td,{children:["More related to the server rather than the client. This command is used to execute RCON commands. RCON is the built-in admin system. RCON stands for ",(0,n.jsx)(t.a,{href:"../server/ControllingServer#using-rcon",children:"Remote Control"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"/hudscalefix"}),(0,n.jsx)(t.td,{children:"This command was added in SA-MP 0.3.7 R3. Enables/disables the radar scale fix, so that the game's radar scales better in widescreen resolutions (i.e. no more 'egg of finding'). This sets the sa-mp.cfg 'nohudscale' option."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"file-sa-mpcfg",children:"File sa-mp.cfg"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Option"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pagesize"}),(0,n.jsx)(t.td,{children:"See /pagesize."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fpslimit"}),(0,n.jsx)(t.td,{children:"See /fpslimit."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"disableheadmove"}),(0,n.jsx)(t.td,{children:"See /headmove."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"See /timestamp."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ime"}),(0,n.jsx)(t.td,{children:"This controls whether the chat window input supports Input Method text editing and language switching. 1 enables IME, 0 disables it."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"audiomsgoff"}),(0,n.jsx)(t.td,{children:"See /audiomsg."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"multicore"}),(0,n.jsx)(t.td,{children:"Toggle whether the SA-MP client uses multiple CPU cores when running. Default is 1 (DOES use multiple CPU cores). Set to 0 if you experience mouse problems."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"directmode"}),(0,n.jsx)(t.td,{children:"This allows players with chat text drawing problems to use the slower direct-to-screen text rendering mode. 0 to disable, 1 to enable."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"audioproxyoff"}),(0,n.jsx)(t.td,{children:"If this option is set to 1, and there is a proxy server set in your Windows Internet Options, the proxy will not be used when playing audio streams in SA-MP."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"nonametagstatus"}),(0,n.jsx)(t.td,{children:"See /nametagstatus."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fontface"}),(0,n.jsx)(t.td,{children:'Allows you to change the font of chat, dialogs and the scoreboard. i.e. fontface="Comic Sans MS". Not officially supported, and may cause problems.'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fontweight"}),(0,n.jsx)(t.td,{children:"This option toggles whether your chat font is bold or not. 0 = BOLD (default) and 1 = NORMAL."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"nohudscale"}),(0,n.jsx)(t.td,{children:"This option was added in 0.3.7 R3. See /hudscalefix."})]})]})]})]})}function c(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},50065:function(e,t,s){s.d(t,{Z:function(){return l},a:function(){return d}});var i=s(67294);let n={},r=i.createContext(n);function d(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);