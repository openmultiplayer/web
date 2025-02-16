---
title: Probleme comune
---

## Serverul se blochează instantaneu la pornire

Cel mai frecvent este o eroare în fișierul server.cfg sau modul dvs. de joc lipsește. Verificați fișierul server_log.txt și motivul ar trebui să fie situat în partea de jos. Dacă nu, verificați fișierul crashinfo.txt. Soluția mai bună pentru a afla ce cauzează prăbușirea este folosirea pluginului Crash detect de Zeex/0x5A656578 [click pentru link](https://github.com/Zeex/samp-plugin-crashdetect/releases "https://github.com/Zeex/samp-plugin-crashdetect/releases") care va oferi mai multe informații, cum ar fi numerele de linie, numele funcțiilor, valorile parametrilor etc. Dacă scriptul este compilat în modul de depanare (-d3 flag) pentru a face compilatorul pune informații suplimentare despre toate aceste lucruri în ieșirea .amx.

## Serverul nu funcționează - firewall-ul este dezactivat

Va trebui să vă redirecționați porturile pentru a permite jucătorilor să se alăture serverului dvs. Puteți redirecționa porturile folosind PF Port Checker. Descărcați-l de pe: www.portforward.com Dacă porturile nu sunt redirecționate, înseamnă că trebuie să le deschideți în router. Puteți verifica lista routerelor la [http://portforward.com/english/routers/port_forwarding/routerindex.htm](http://portforward.com/english/routers/port_forwarding/routerindex.htm "http://portforward.com/english/routers/port_forwarding/routerindex.htm")

Are toate informațiile despre cum să redirecționați porturile.

## 'Packetul a fost modificat'

Eroarea afișată în mod obișnuit ca:

```
[hh:mm:ss] Pachetul a fost modificat, trimis prin id: <id>, ip: <ip>: <port>
```

se întâmplă atunci când un jucător expiră sau are în prezent probleme de conexiune.

## 'Atenție: clientul a depășit limita de mesaje'

Eroarea afișată în mod obișnuit ca:

```
Avertisment: clientul a depășit 'messageslimit' (1) <ip>: <port> (<count>) Limită: x / sec
```

se întâmplă atunci când numărul de mesaje pe secundă pe care un client le trimite serverului depășește.

## 'Atenție: clientul a depășit ackslimit'

Eroarea afișată în mod obișnuit ca:

```
Avertisment: clientul a depășit `ackslimit` <ip>: <port> (<count>) Limită: x / sec
```

se întâmplă atunci când limita de acks depășește.

## 'Avertisment: clientul a depășit mesajulholelimit'

Eroarea afișată în mod obișnuit ca:

```
Atenție: clientul a depășit „messageholelimit” (<type>) <ip>: <port> (<count>) Limită: x
```

se întâmplă atunci când limita orificiului pentru mesaje depășește.

## 'Avertisment: Prea multe mesaje scoase din uz'

Eroarea afișată în mod obișnuit ca:

```
Avertisment: Prea multe mesaje ieșite din comandă de la player <ip>: <port> (<count>) Limită: x (messageholelimit)
```

Se întâmplă atunci când `mesaje în afara comenzii` reutilizează setarea mesaj-limită.

Pentru mai multe informații despre acest lucru, consultați [aici](http://wiki.sa-mp.com/wiki/Controlling_Your_Server#RCON_Commands)

## Jucatori primesc constant "Unacceptable NickName" dar numele acestora este valid

Dacă sunteți sigur că utilizați un nume acceptabil și serverul rulează pe Windows, încercați să schimbați opțiunea de compatibilitate a samp-server.exe la Windows 98 și ar trebui să fie remediată după repornirea serverului.

Serverele Windows cu timp ridicat pot provoca, de asemenea, această problemă. Acest lucru a fost observat de aproximativ 50 de zile de timp de funcționare a serverului. Pentru a o rezolva, este necesară o repornire.

## `MSVCR___.dll`/`MSVCP___.dll` nu este gasit (not found)

Această problemă apare în mod regulat pe serverele Windows atunci când se încearcă încărcarea unui plugin care a fost dezvoltat folosind o versiune mai mare a runtime-ului Visual C ++ decât este instalată în prezent pe computer. Pentru a remedia acest lucru, descărcați bibliotecile Microsoft runtime corespunzătoare Microsoft Visual C ++. Rețineți că serverul SA-MP are 32 de biți, prin urmare va trebui să descărcați și versiunea pe 32 de biți (x86) a runtime-ului, indiferent de arhitectură. Versiunea de runtime pe care o solicitați în mod specific este notată de numerele din numele fișierului (a se vedea tabelul de mai jos), deși nu este rău să le instalați pe toate. Aceste biblioteci nu se stivuiesc, sau cu alte cuvinte: nu veți obține timpii de rulare pentru versiunile 2013 și anterioare dacă instalați doar versiunea 2015.

| Numar Versiune | Runtime                                       |
| -------------- | --------------------------------------------- |
| 10.0           | Microsoft Visual C++ 2010 x86 Redistributable |
| 11.0           | Microsoft Visual C++ 2012 x86 Redistributable |
| 12.0           | Microsoft Visual C++ 2013 x86 Redistributable |
| 14.0           | Microsoft Visual C++ 2015 x86 Redistributable |
