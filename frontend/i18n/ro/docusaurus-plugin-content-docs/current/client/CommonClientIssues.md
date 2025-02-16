---
title: Probleme comune
---

## Cuprins

## Client

### Am primit eroarea "GTA San Andreas nu poate fi găsit"

San Andreas Multiplayer (SA:MP) **nu poate** sa funcționeze de unul singur și, prin urmare, trebuie să instalați GTA San Andreas pentru PC. De asemenea, versiunea jocului trebuie să fie **EU / US v1.0**, alte versiuni precum v2.0 sau versiunile de pe Steam/Direct2Drive nu vor funcționa. [Faceți clic aici pentru a descărca un patch care o să vă facă downgrade la versiunea GTA:SA 1.0](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661)

### Nu pot vedea niciun server în browserul SA:MP

În primul rând, asigurați-vă că ați urmat procedurile stabilite în [ghidul de inceput](https://team.sa-mp.com/wiki/Getting_Started). Dacă ați urmat ceea ce scrie acolo și încă nu puteți vedea niciun server, trebuie să permiteți accesul SA:MP-ului prin firewall-ul dumneavoastră. Din păcate, datorită numărului mare de programe firewall care există, nu putem oferi asistență suplimentară în acest sens - vă sugerăm să consultați site-ul web al producătorilor sau să încercați să căutați pe Google. De asemenea, asigurați-vă că ați instalat cea mai recentă versiune de SA:MP!

### Se deschide jocul singleplayer în loc de SA:MP

:::warning

Nu ar trebui să vedeți opțiunile pentru singleplayer (new game, load game, etc.) când intrați pe un server - SA-MP ar trebui să se încarce singur și să nu afișeze aceste opțiuni. Dacă vedeți "new game" inseamna ca s-a incarcat modul singleplayer, nu San Andreas Multiplayer.

:::

Modul singleplayer se poate încărca din 2 motive - ați instalat SA: MP în folderul greșit sau aveți versiunea greșită de GTA San Andreas. Dacă aveți o versiune greșită, acest lucru se poate remedia ușor. Click [aici](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661) pentru a descărca patch-ul de downgrade.

Uneori este posibil sa vedeți meniul din singleplayer, chiar dacă SA:MP s-a încărcat corect. Pentru a remedia acest lucru, trebuie pur și simplu să selectați un element din meniu, apoi să apăsați ESC până când ieșiți cu totul din meniu. După ce faceți asta, SA:MP va rula corespunzător.

### Primesc "Unacceptable Nickname" când mă conectez la un server

Asigurați-vă că numele dvs. nu conține caractere interzise (utilizați numai 0-9, a-z, \[\], (), \ \$, @,., \ \_ și =) și că nu depășește 20 de caractere. Totuși, acest lucru se poate întâmpla și atunci când un alt jucător care are numele dvs. este conectat pe server în acel moment (sau atunci când încercați să vă reconectați pe un server imediat după ce ați luat crash). De asemenea, un server care a rulat pentru mai mult de 50 de zile încontinuu, poate uneori să cauzeze această problemă.

### Ecranul se blochează la "Connecting to IP:Port..."

Serverul pe care încercați să vă conectați ar putea fi offline, dar dacă nu vă puteți conecta la niciun server, încercați să vă dezactivați firewall-ul. Dacă nu merge nici așa, trebuie să vă reconfigurați programul firewall pe care îl folosiți - accesați site-ul web al acestuia pentru a afla cum. De asemenea, s-ar putea să aveți o versiune veche de SA:MP, descărcați cea mai recentă versiune din [pagina de descarcare SA-MP](http://sa-mp.com/download.php).

### Mi-am instalt moduri în GTA San Andreas și acum SA:MP nu se mai deschide

Dacă nu se deschide, eliminați modurile și încercați din nou.

### GTA San Andreas nu mai pornește după ce am instalat SA:MP

Ștergeți gta_sa.set din GTA San Andreas User Files și asigurați-vă că nu aveți niciun cheat / mod în fișierele jocului.

### Jocul se blochează când explodează un vehicul

Dacă aveți 2 monitoare, atunci există 3 moduri de a rezolva acest lucru:

1. Dezactivați al doilea monitor când jucați SA:MP. (poate nu este cea mai bună opțiune când aveți nevoie de celălalt monitor)
2. Setați Visual FX la low. (ESC > Options > Display Setup > Advanced)
3. Redenumiți folderul GTA San Andreas (de exemplu, în "GTA San Andreas2", acest lucru funcționează de obicei, însă poate să nu mai funcționeze a doua oară, așa că va trebui să îl redenumiți în altceva.)

### Mouse-ul meu nu mai funcționează după ce ies din meniul de pauză

Dacă mouse-ul pare să nu mai functioneze în joc în timp ce funcționează (parțial) în meniul de pauză, atunci ar trebui să dezactivați opțiunea multicore [sa-mp.cfg](../../../client/ClientCommands#file-sa-mpcfg "Sa-mp.cfg") (setați la 0). O altă metodă care ar putea să funcționeze este să spamați tasta ESC până când mouse-ul începe să funcționeze din nou.

### Fișierul dinput8.dll lipsește

Această eroare este posibil să apară atunci când DirectX nu este instalat corect, încercați să îl reinstalați și și să reporniți computerul. Dacă problema nu dispare, mergeți la C:\\Windows\\System32 și dați copy-paste fișierului dinput.dll în folderul unde aveți instalat GTA San Andreas, acest lucru ar trebui să rezolve problema.

### Nu pot vedea nametag-urile celorlalți jucători!

Vă rugăm să rețineți că unele servere pot avea nametag-urile dezactivate de tot. Totuși, această problemă apare adesea pe computerele cu procesoare grafice integrate Intel HD (care oricum nu sunt destinate jocurilor). Din păcate, cauza exactă este necunoscută și nu pare să existe nicio soluție universală disponibilă în prezent. O soluție pe termen lung ar fi cumpărarea unei plăci grafice dedicate, dacă acest lucru este posibil și dacă bugetul dvs. o permite. Laptopurile, desigur, nu pot fi actualizate.
