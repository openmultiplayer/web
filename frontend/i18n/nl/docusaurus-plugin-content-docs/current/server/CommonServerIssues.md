---
title: Veelvoorkomende server issues
sidebar_label: Veelvoorkomende server issues
---

## Server crasht direct bij starten

Meestal is het een fout in je `server.cfg` of ontbreekt je gamemode. Check het bestand `server_log.txt` – de reden staat doorgaans onderaan. Zo niet, kijk in `crashinfo.txt`. Een betere manier om crash-oorzaken te vinden is de Crash Detect-plugin van Zeex/0x5A656578 ([link](https://github.com/AmyrAhmady/samp-plugin-crashdetect)), die extra info geeft (regelnummers, functienamen, parameterwaarden, etc.). Compileer het script in debug mode (flag `-d3`) zodat de compiler extra info in het `.amx`-outputbestand stopt.

## Server werkt niet – firewall is uitgeschakeld

Je moet port forwarding instellen zodat spelers kunnen verbinden. Je kunt je poorten forwarden met de PF Port Checker. Download: `www.portforward.com`. Zijn de poorten niet geforward, dan moet je ze openen in je router. De routerlijst staat op [http://portforward.com/english/routers/port_forwarding/routerindex.htm](http://portforward.com/english/routers/port_forwarding/routerindex.htm).

Daar vind je alle info over het forwarden van poorten.

## 'Packet was modified'

Deze melding zie je vaak als:

```
[hh:mm:ss] Packet was modified, sent by id: <id>, ip: <ip>:<port>
```

Dit gebeurt wanneer een speler time-out raakt of verbindingsproblemen heeft.

## 'Warning: client exceeded messageslimit'

Typisch weergegeven als:

```
Warning: client exceeded 'messageslimit' (1) <ip>:<port> (<count>) Limit: x/sec
```

Dit gebeurt wanneer een client meer messages per seconde naar de server stuurt dan toegestaan.

## 'Warning: client exceeded ackslimit'

Typisch weergegeven als:

```
Warning: client exceeded 'ackslimit' <ip>:<port> (<count>) Limit: x/sec
```

Dit gebeurt wanneer de acks-limit wordt overschreden.

## 'Warning: client exceeded messageholelimit'

Typisch weergegeven als:

```
Warning: client exceeded 'messageholelimit' (<type>) <ip>:<port> (<count>) Limit: x
```

Dit gebeurt wanneer de message hole-limit wordt overschreden.

## 'Warning: Too many out-of-order messages'

Typisch weergegeven als:

```
Warning: Too many out-of-order messages from player <ip>:<port> (<count>) Limit: x (messageholelimit)
```

Ontstaat wanneer 'out-of-order messages' dezelfde `messageholelimit`-instelling raakt.

Meer info: zie [deze pagina](ControllingServer#RCON_Commands).

## Spelers krijgen vaak "Unacceptable NickName" terwijl de naam geldig is

Weet je zeker dat je een geldige naam gebruikt en draait de server op Windows, probeer dan de compatibiliteitsmodus van `samp-server.exe` op Windows 98 te zetten en herstart de server.

Windows-servers met een zeer lange uptime kunnen dit probleem ook veroorzaken (opgemerkt rond 50 dagen uptime). Oplossing: reboot.

## `MSVCR___.dll`/`MSVCP___.dll` niet gevonden

Dit komt vaak voor op Windows-servers bij het laden van een plugin die met een nieuwere Visual C++ runtime is gebouwd dan op jouw machine staat. Installeer de juiste Microsoft Visual C++ runtime-libraries. Let op: de SA-MP-server is 32-bit, dus je hebt ook de 32-bit (x86) runtime nodig, ongeacht je architectuur. De benodigde versie herken je aan de nummers in de bestandsnaam (zie tabel). Het kan geen kwaad om meerdere te installeren; runtimes stapelen niet. Alleen de 2015 installeren geeft je niet automatisch 2013 en ouder.

| Version number | Runtime                                       |
| -------------- | --------------------------------------------- |
| 10.0           | Microsoft Visual C++ 2010 x86 Redistributable |
| 11.0           | Microsoft Visual C++ 2012 x86 Redistributable |
| 12.0           | Microsoft Visual C++ 2013 x86 Redistributable |
| 14.0           | Microsoft Visual C++ 2015 x86 Redistributable |


