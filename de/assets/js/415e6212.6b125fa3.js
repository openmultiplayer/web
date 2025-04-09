"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["70409"],{71726:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>a,metadata:()=>i,assets:()=>l,toc:()=>u,contentTitle:()=>d});var i=JSON.parse('{"id":"client/ClientOnLinux","title":"Wie starte ich den OMP Client auf Linux","description":"Warnung! Du bekommst KEINE funktionierende Gui, du kannst das hier nur mit Wine im Terminal oder mit einem Batch Skript starten.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/client/ClientOnLinux.md","sourceDirName":"client","slug":"/client/ClientOnLinux","permalink":"/de/docs/client/ClientOnLinux","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/client/ClientOnLinux.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Client Befehle","permalink":"/de/docs/client/ClientCommands"},"next":{"title":"Common Client Issues","permalink":"/de/docs/client/CommonClientIssues"}}'),r=t("85893"),s=t("50065");let a={},d="Wie starte ich den OMP Client auf Linux",l={},u=[{value:"Warnung! Du bekommst KEINE funktionierende Gui, du kannst das hier nur mit Wine im Terminal oder mit einem Batch Skript starten.",id:"warnung-du-bekommst-keine-funktionierende-gui-du-kannst-das-hier-nur-mit-wine-im-terminal-oder-mit-einem-batch-skript-starten",level:3},{value:"(Getestet auf wine-ge 8-26 mit dem 32-Bit Pr\xe4fix, gestartet durch Lutris)",id:"getestet-auf-wine-ge-8-26-mit-dem-32-bit-pr\xe4fix-gestartet-durch-lutris",level:3},{value:"Hier ist eine simple .bat Datei zum editieren",id:"hier-ist-eine-simple-bat-datei-zum-editieren",level:3},{value:"H\xe4ufige Probleme",id:"h\xe4ufige-probleme",level:2}];function m(e){let n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"wie-starte-ich-den-omp-client-auf-linux",children:"Wie starte ich den OMP Client auf Linux"})}),"\n",(0,r.jsx)(n.h3,{id:"warnung-du-bekommst-keine-funktionierende-gui-du-kannst-das-hier-nur-mit-wine-im-terminal-oder-mit-einem-batch-skript-starten",children:"Warnung! Du bekommst KEINE funktionierende Gui, du kannst das hier nur mit Wine im Terminal oder mit einem Batch Skript starten."}),"\n",(0,r.jsx)(n.h3,{id:"getestet-auf-wine-ge-8-26-mit-dem-32-bit-pr\xe4fix-gestartet-durch-lutris",children:"(Getestet auf wine-ge 8-26 mit dem 32-Bit Pr\xe4fix, gestartet durch Lutris)"}),"\n",(0,r.jsxs)(n.p,{children:["Um den Client zum laufen zu bringen musst du den Launcher Herunterladen, und ",(0,r.jsx)(n.a,{href:"https://assets.open.mp/omp-client.dll",children:"omp-client.dll"}),". ",(0,r.jsx)(n.br,{}),"\n","Dann musst du die omp-client.dll in den AppData\\Local\\mp.open.launcher\\omp\\ Ordner mit deinem Pr\xe4fix packen.",(0,r.jsx)(n.br,{}),"\n","Danach kannst du den open mp Launcher \xfcber die Kommandozeile (CLI) starten. Alternativ kannst du eine Batch-Datei erstellen, wie unten beschrieben, um den Launcher deiner Wahl hinzuzuf\xfcgen."]}),"\n",(0,r.jsx)(n.h3,{id:"hier-ist-eine-simple-bat-datei-zum-editieren",children:"Hier ist eine simple .bat Datei zum editieren"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Z:\\path\\to\\omp-launcher.exe -h server.ip -p port -n dzmtrzz -g Z:\\home\\yourname\\foo\\bar\\baz\\gamepath\\\n"})}),"\n",(0,r.jsx)(n.p,{children:"Du kannst die omp-launcher.exe mit dem Parameter --help starten, um mehr Informationen \xfcber weitere Parameter zu erhalten, falls das oben genannte Beispiel nicht ausreicht."}),"\n",(0,r.jsx)(n.h2,{id:"h\xe4ufige-probleme",children:"H\xe4ufige Probleme"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Problem"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"M\xf6gliche L\xf6sung"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Spiel st\xfcrzt beim Pausieren ab"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Es fehlt ein Schriftart, und wird durch das installieren von Allfonts in winetricks behoben"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Login abfrage wird beim Server nicht angezeigt"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:'Versuche die "Bevorzuge System Bibliotheken" einstellung in Lutris an und aus zu machen'})]})]})]})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var i=t(67294);let r={},s=i.createContext(r);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);