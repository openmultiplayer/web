---
title: Port forwarden
sidebar_label: Port forwarden
description: Uitleg voor het openen van je serverpoort.
---

**Welkom bij de Port Forward-guide!**

Je bent aangekomen bij de port forward-guide, gemaakt door Leopard.

Alles wat je nodig hebt is een `samp-server` of `omp-server` en een router. Heb je geen router, dan hoef je niet te port forwarden!

## De start

We beginnen met het vinden van je **gateway**. Voorbeeld met Vista: klik Start, klik in het zoekveld en typ **cmd**. Er opent een zwart venster. Typ: **ipconfig**. Wacht tot de output klaar is en zoek naar _**gateway**_. Sluit het venster nog niet.

Heb je de gateway, open dan je browser en vul de _**gateway**_ in de adresbalk in (bijv. 192.168.0.1/192.168.1.1). Druk op Enter.

## Routerconfiguratie

Goed gedaan, je bent op de configuratiepagina van je router. Nu gaan we port forwarden.

Zoek een sectie met een naam als:

- Virtual Server
- Port Forwarding
- Port Control
- Application Sharing
- Iets met `port` in de naam

Klik erop. Klik daarna op ‘Add new’, ‘New Port’ of een soortgelijke knop om een nieuwe poort te openen.

Vul het volgende in:

```
Port: JOUW_POORT (standaard: 7777)
Port Type: UDP
Enabled: Yes
**IP: Ga door naar stap 3**
```

Nu heb je je computer-IP nodig.

## IP-adres ophalen

Maximaliseer het zwarte venster en zoek naar _IPv4_. Het ziet eruit als: **192.168.0.100**. Kopieer dit. Ga terug naar je routerpagina en vul het in, bijv. 192.168.0.100

```
Port: JOUW_POORT (standaard: 7777)
Port Type: UDP
Enabled: Yes
IP: 192.168.0.100
```

Klik **Save**. Klaar. Én: vergeet **Windows Firewall** niet. Mini-guide:

Startmenu > zoek “firewall” > “Windows Firewall” > Change preferences. In het venster: tab _Exceptions_ > _Add port.._ en vul in:

```
Name: SA-MP Server (of elke naam)
Port Number: JOUW_POORT (standaard: 7777)
Protocol: UDP
```

Klik OK en sluit. Start de server en check of het werkt. Voeg in de SA-MP Client toe: `localhost:JOUW_POORT` (standaard: 7777). Verandert de ping, dan draait de server. Ga vervolgens naar:

[WhatIsMyIP.COM](http://whatismyip.com).

## Het einde

Kopieer daar het IP op je scherm. Voeg in de SA-MP Client dat IP toe aan je favorites en plak `:JOUW_POORT` erachter (standaard: 7777). Werkt het?

**GEFELICITEERD**! _Je hebt geport-forwarded!_


