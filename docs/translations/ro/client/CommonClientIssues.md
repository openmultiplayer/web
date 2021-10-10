---
title: Probleme comune
---

## Cuprins

## Client

### Am primit eroarea "San Andreas nu poate fi găsit"

San Andreas Multi-player ** nu este ** un program autonom! Acesta adaugă funcționalitate multi-player la San Andreas și, prin urmare, aveți nevoie de GTA San Andreas pentru PC - trebuie, de asemenea, să fie **EU / US v1.0**, alte versiuni precum v2.0 sau versiunile Steam și Direct2Drive vor fi nu functioneaza. [Faceți clic aici pentru a descărca un patch pentru a face downgrade la versiunea GTA:SA 1.0](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661)

### Nu pot vedea niciun server în browserul SA-MP

În primul rând, asigurați-vă că urmați procedurile stabilite în [ghidul de inceput](https://team.sa-mp.com/wiki/Getting_Started). Dacă ați urmat ceea ce scrie și totuși nu vedeți niciun server, trebuie să permiteți accesul SA: MP prin firewall. Din păcate, datorită cantității mari de software firewall disponibil, nu putem oferi asistență suplimentară în acest sens - vă sugerăm să consultați site-ul web al producătorilor sau să încercați o căutare Google. De asemenea, asigurați-vă că aveți cea mai recentă versiune SA: MP!

### Modul single-player se încarcă în loc de SA: MP

:::warning

Nu trebuie să vedeți opțiunile pentru singleplayer (new game, load game, etc.) - SA-MP ar trebui să se încarce singur și să nu prezinte aceste opțiuni. Dacă vedeți "new game" inseamna ca s-a incarcat modul singleplayer, nu San Andreas Multiplayer.

:::

Un singur jucător se poate încărca din 2 motive - ați instalat SA: MP în folderul greșit sau aveți versiunea greșită de San Andreas. Dacă aveți o versiune greșită, este ușor de remediat. Click [aici](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661) pentru a descărca patch-ul de downgrade.

Uneori va fi afișat meniul pentru un singur jucător, dar SA: MP va fi încărcat corect. Pentru a remedia acest lucru, trebuie pur și simplu să selectați un element din meniu, apoi să apăsați esc până când nu mai sunteți, apoi SA: MP va continua să se încarce.

### Primesc "Unacceptable Nickname" când mă conectez la un server

Asigurați-vă că nu utilizați caractere interzise în numele dvs. (utilizați numai 0-9, az, \[\], (), \ \$, @,., \ \_ Și =) și că numele dvs. nu depășește 20 personaje. Acest lucru ar putea fi cauzat și atunci când un jucător se află pe un server cu același nume ca dvs. (ceea ce se poate întâmpla dacă vă alăturați din nou serverului imediat după expirarea timpului sau blocarea). De asemenea, un server Windows care rulează SA-MP cu un timp de funcționare mai mare de 50 de zile poate provoca această eroare.

### Ecranul se blochează la "Connecting to ip:port..."

Serverul ar putea fi offline sau, dacă nu vă puteți conecta la niciun server, dezactivați firewall-ul și vedeți dacă funcționează. În caz contrar, trebuie să vă configurați paravanul de protecție corect - accesați site-ul web pentru a afla cum. De asemenea, s-ar putea să aveți o versiune veche a SA-MP, descărcați cea mai recentă versiune din [pagina de descarcare SA-MP](http://sa-mp.com/download.php).

### Am un GTA modificat: San Andreas și SA: MP nu se vor încărca

Dacă nu se va încărca, eliminați modificările.

### La lansarea GTA cu SA: MP nu va porni

Ștergeți fișierul gta_sa.set din folderul fișierelor dvs. de utilizator și asigurați-vă că nu aveți niciun truc / mod.

### Jocul se blochează când explodează un vehicul

Dacă aveți 2 monitoare, atunci există 3 moduri de a rezolva acest lucru:

1. Dezactivați al doilea monitor când jucați sa-mp. (Poate nu este asa inteligenta aceasta optiune daca doriti sa il aveti pornit.)
2. Setați calitatea Visual FX la scăzută. (Esc > Options > Display Setup > Advanced)
3. Redenumiți folderul GTA San Andreas (de exemplu, în "GTA San Andreas2") (Acest lucru funcționează adesea, însă uneori poate să nu mai funcționeze din nou, așa că trebuie să îl redenumiți cu altceva.)

### Mouse-ul meu nu funcționează după ce ați ieșit din meniul de pauză

Dacă mouse-ul pare să nu mai functioneze în joc în timp ce (parțial) funcționează în meniul de pauză, atunci ar trebui să dezactivați opțiunea multicore [sa-mp.cfg](/web/20190421141207/https://wiki.sa-mp.com/wiki/Sa-mp.cfg "Sa-mp.cfg") (setați-l la 0). Atingerea continuă a butonului Escape până când mouse-ul răspunde din nou poate funcționa, dar nu este o soluție la fel de îngrijită.

### Fișierul dinput8.dll lipsește

Este posibil să apară când DirectX nu este instalat corect, încercați să îl reinstalați - nu uitați să reporniți computerul. Dacă problema apare încă, mergeți la C:\\Windows\\System32 și copiați lipiți fișierul dinput.dll în directorul rădăcină al GTA San Andreas. Asta l-ar rezolva.

### Nu pot vedea etichetele de nume ale altui jucător!

Vă rugăm să rețineți că unele servere pot avea etichete de nume dezactivate la nivel global. În caz contrar, această problemă apare adesea pe computerele cu procesoare grafice integrate Intel HD (care oricum nu sunt destinate jocurilor). Din păcate, cauza exactă este necunoscută și nu pare să existe nici o soluție universală disponibilă în prezent. O soluție pe termen lung ar fi instalarea unei plăci grafice dedicate în computer, dacă acest lucru este posibil și dacă bugetul dvs. o permite. Laptopurile, desigur, nu pot fi actualizate.
