"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["60040"],{69882:function(e,r,s){s.r(r),s.d(r,{default:()=>c,frontMatter:()=>l,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>o});var t=JSON.parse('{"id":"server/CommonServerIssues","title":"CommonServerIssues","description":"Le serveur plante instantan\xe9ment au d\xe9marrage","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/server/CommonServerIssues.md","sourceDirName":"server","slug":"/server/CommonServerIssues","permalink":"/fr/docs/server/CommonServerIssues","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/server/CommonServerIssues.md","tags":[],"version":"current","frontMatter":{"title\xa0":"Probl\xe8mes courants"},"sidebar":"docsSidebar","previous":{"title":"Weather IDs","permalink":"/fr/docs/scripting/resources/weatherid"},"next":{"title":"ControllingServer","permalink":"/fr/docs/server/ControllingServer"}}'),n=s("85893"),i=s("50065");let l={"title\xa0":"Probl\xe8mes courants"},o=void 0,a={},d=[{value:"Le serveur plante instantan\xe9ment au d\xe9marrage",id:"le-serveur-plante-instantan\xe9ment-au-d\xe9marrage",level:2},{value:"Le serveur ne fonctionne pas - le pare-feu est d\xe9sactiv\xe9",id:"le-serveur-ne-fonctionne-pas---le-pare-feu-est-d\xe9sactiv\xe9",level:2},{value:"&#39;Le paquet a \xe9t\xe9 modifi\xe9&#39;",id:"le-paquet-a-\xe9t\xe9-modifi\xe9",level:2},{value:"&#39;Attention\xa0: le client a d\xe9pass\xe9 la limite de messages&#39;",id:"attention-le-client-a-d\xe9pass\xe9-la-limite-de-messages",level:2},{value:"&#39;Attention\xa0: le client a d\xe9pass\xe9 la limite d&#39;accus\xe9 de r\xe9ception&#39;",id:"attention-le-client-a-d\xe9pass\xe9-la-limite-daccus\xe9-de-r\xe9ception",level:2},{value:"&#39;Attention\xa0: le client a d\xe9pass\xe9 la limite de trous de messages&#39;",id:"attention-le-client-a-d\xe9pass\xe9-la-limite-de-trous-de-messages",level:2},{value:"&#39;Attention\xa0: trop de messages en panne&#39;",id:"attention-trop-de-messages-en-panne",level:2},{value:"Les joueurs obtiennent constamment l&#39;erreur &quot;Unacceptable NickName&quot; mais elle est valide",id:"les-joueurs-obtiennent-constamment-lerreur-unacceptable-nickname-mais-elle-est-valide",level:2},{value:"<code>MSVCR___.dll</code>/<code>MSVCP___.dll</code> introuvable",id:"msvcr___dllmsvcp___dll-introuvable",level:2}];function u(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"le-serveur-plante-instantan\xe9ment-au-d\xe9marrage",children:"Le serveur plante instantan\xe9ment au d\xe9marrage"}),"\n",(0,n.jsxs)(r.p,{children:["Le plus souvent, il s'agit d'une erreur dans votre fichier server.cfg ou de votre mode de jeu manquant. V\xe9rifiez le fichier server_log.txt et la raison doit \xeatre situ\xe9e en bas. Sinon, v\xe9rifiez le fichier crashinfo.txt. La meilleure solution pour savoir ce qui cause le crash est d'utiliser le plugin de d\xe9tection de crash de Zeex/0x5A656578 (",(0,n.jsx)(r.a,{href:"https://github.com/Zeex/samp-plugin-crashdetect",children:"cliquez pour le lien"}),") qui donnera plus d'informations comme les num\xe9ros de ligne, les noms de fonction, les valeurs de param\xe8tre, etc. Si le script est compil\xe9 en mode d\xe9bogage (indicateur -d3) pour que le compilateur mette des informations suppl\xe9mentaires sur tout cela dans la sortie .amx."]}),"\n",(0,n.jsx)(r.h2,{id:"le-serveur-ne-fonctionne-pas---le-pare-feu-est-d\xe9sactiv\xe9",children:"Le serveur ne fonctionne pas - le pare-feu est d\xe9sactiv\xe9"}),"\n",(0,n.jsxs)(r.p,{children:["Vous devrez rediriger vos ports pour permettre aux joueurs de rejoindre votre serveur. Vous pouvez rediriger vos ports \xe0 l'aide du v\xe9rificateur de ports PF. T\xe9l\xe9chargez-le sur : ",(0,n.jsx)(r.a,{href:"http://www.portforward.com",children:"www.portforward.com"})," Si les ports ne sont pas redirig\xe9s, cela signifie que vous devez les ouvrir dans votre routeur. Vous pouvez consulter la liste des routeurs sur ",(0,n.jsx)(r.a,{href:"http://portforward.com/english/routers/port_forwarding/routerindex.htm",title:"http://portforward .com/english/routers/port_forwarding/routerindex.htm",children:"http://portforward.com/english/routers/port_forwarding/routerindex.htm"})]}),"\n",(0,n.jsx)(r.p,{children:"Il contient toutes les informations sur la fa\xe7on de transf\xe9rer les ports."}),"\n",(0,n.jsx)(r.h2,{id:"le-paquet-a-\xe9t\xe9-modifi\xe9",children:"'Le paquet a \xe9t\xe9 modifi\xe9'"}),"\n",(0,n.jsx)(r.p,{children:"L'erreur g\xe9n\xe9ralement affich\xe9e comme:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"[hh:mm:ss] Le paquet a \xe9t\xe9 modifi\xe9, envoy\xe9 par id\xa0: <id>, ip\xa0: <ip>\xa0:<port>\n"})}),"\n",(0,n.jsx)(r.p,{children:"se produit lorsqu'un joueur expire ou rencontre actuellement des probl\xe8mes de connexion."}),"\n",(0,n.jsx)(r.h2,{id:"attention-le-client-a-d\xe9pass\xe9-la-limite-de-messages",children:"'Attention\xa0: le client a d\xe9pass\xe9 la limite de messages'"}),"\n",(0,n.jsx)(r.p,{children:"L'erreur g\xe9n\xe9ralement affich\xe9e comme:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"Avertissement\xa0: le client a d\xe9pass\xe9 'messageslimit' (1) <ip>\xa0:<port> (<count>) Limite\xa0: x/sec\n"})}),"\n",(0,n.jsx)(r.p,{children:"se produit lorsque le nombre de messages par seconde qu'un client envoie au serveur d\xe9passe."}),"\n",(0,n.jsx)(r.h2,{id:"attention-le-client-a-d\xe9pass\xe9-la-limite-daccus\xe9-de-r\xe9ception",children:"'Attention\xa0: le client a d\xe9pass\xe9 la limite d'accus\xe9 de r\xe9ception'"}),"\n",(0,n.jsx)(r.p,{children:"L'erreur g\xe9n\xe9ralement affich\xe9e comme\xa0:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"Avertissement\xa0: le client a d\xe9pass\xe9 'ackslimit' <ip>:<port> (<count>) Limite\xa0: x/sec\n"})}),"\n",(0,n.jsx)(r.p,{children:"se produit lorsque la limite d'accus\xe9 de r\xe9ception d\xe9passe."}),"\n",(0,n.jsx)(r.h2,{id:"attention-le-client-a-d\xe9pass\xe9-la-limite-de-trous-de-messages",children:"'Attention\xa0: le client a d\xe9pass\xe9 la limite de trous de messages'"}),"\n",(0,n.jsx)(r.p,{children:"L'erreur g\xe9n\xe9ralement affich\xe9e comme\xa0:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"Avertissement\xa0: le client a d\xe9pass\xe9 'messageholelimit' (<type>) <ip>\xa0:<port> (<count>) Limite\xa0:\xa0x\n"})}),"\n",(0,n.jsx)(r.p,{children:"se produit lorsque la limite de trou de message d\xe9passe."}),"\n",(0,n.jsx)(r.h2,{id:"attention-trop-de-messages-en-panne",children:"'Attention\xa0: trop de messages en panne'"}),"\n",(0,n.jsx)(r.p,{children:"L'erreur g\xe9n\xe9ralement affich\xe9e comme:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"Avertissement\xa0: Trop de messages dans le d\xe9sordre du joueur <ip>\xa0:<port> (<count>) Limite\xa0: x (messageholelimit)\n"})}),"\n",(0,n.jsx)(r.p,{children:'Se produit lorsque les "messages hors service" r\xe9utilisent le param\xe8tre messageholelimit.'}),"\n",(0,n.jsxs)(r.p,{children:["Pour plus d'informations \xe0 ce sujet, consultez ",(0,n.jsx)(r.a,{href:"https://open.mp/docs/server/ControllingServer#RCON_Commands",children:"ceci"})]}),"\n",(0,n.jsx)(r.h2,{id:"les-joueurs-obtiennent-constamment-lerreur-unacceptable-nickname-mais-elle-est-valide",children:'Les joueurs obtiennent constamment l\'erreur "Unacceptable NickName" mais elle est valide'}),"\n",(0,n.jsx)(r.p,{children:"Si vous \xeates s\xfbr d'utiliser un nom acceptable et que le serveur fonctionne sous Windows, essayez de changer l'option de compatibilit\xe9 de samp-server.exe en Windows 98 et cela devrait \xeatre corrig\xe9 apr\xe8s un red\xe9marrage du serveur."}),"\n",(0,n.jsx)(r.p,{children:"Les serveurs Windows avec un temps de disponibilit\xe9 \xe9lev\xe9 peuvent \xe9galement provoquer ce probl\xe8me. Cela a \xe9t\xe9 remarqu\xe9 d'environ 50 jours de temps de disponibilit\xe9 du serveur. Pour le r\xe9soudre, un red\xe9marrage est n\xe9cessaire."}),"\n",(0,n.jsxs)(r.h2,{id:"msvcr___dllmsvcp___dll-introuvable",children:[(0,n.jsx)(r.code,{children:"MSVCR___.dll"}),"/",(0,n.jsx)(r.code,{children:"MSVCP___.dll"})," introuvable"]}),"\n",(0,n.jsx)(r.p,{children:"Ce probl\xe8me se produit r\xe9guli\xe8rement sur les serveurs Windows lorsque vous essayez de charger un plug-in qui a \xe9t\xe9 d\xe9velopp\xe9 \xe0 l'aide d'une version sup\xe9rieure du runtime Visual C++ \xe0 celle actuellement install\xe9e sur votre ordinateur. Pour r\xe9soudre ce probl\xe8me, t\xe9l\xe9chargez les biblioth\xe8ques d'ex\xe9cution Microsoft Visual C++ appropri\xe9es. Notez que le serveur SA-MP est 32 bits, vous devrez donc \xe9galement t\xe9l\xe9charger la version 32 bits (x86) du runtime, quelle que soit l'architecture. La version du runtime dont vous avez sp\xe9cifiquement besoin est indiqu\xe9e par les num\xe9ros dans le nom de fichier (voir le tableau ci-dessous), bien que cela ne fasse pas de mal de les installer tous. Ces biblioth\xe8ques ne s'empilent pas, ou en d'autres termes\xa0: vous n'obtiendrez pas les runtimes pour les versions 2013 et ant\xe9rieures si vous installez uniquement la version 2015."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Num\xe9ro de version"}),(0,n.jsx)(r.th,{children:"Dur\xe9e d'ex\xe9cution"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"10.0"}),(0,n.jsx)(r.td,{children:"Redistribuable Microsoft Visual C++ 2010 x86"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"11.0"}),(0,n.jsx)(r.td,{children:"Redistribuable Microsoft Visual C++ 2012 x86"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"12.0"}),(0,n.jsx)(r.td,{children:"Redistribuable Microsoft Visual C++ 2013 x86"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"14.0"}),(0,n.jsx)(r.td,{children:"Redistribuable Microsoft Visual C++ 2015 x86"})]})]})]})]})}function c(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},50065:function(e,r,s){s.d(r,{Z:function(){return o},a:function(){return l}});var t=s(67294);let n={},i=t.createContext(n);function l(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);