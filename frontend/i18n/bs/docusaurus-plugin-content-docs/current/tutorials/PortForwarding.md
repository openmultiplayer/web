---
title: Port Forward-ovanje
sidebar_label: Port Forward-ovanje
description: Tutorial za Port Forward-ovanje servera.
---

**Dobrodošli u tutorijal za Port Forward-ovanje!**

Dakle, stigli ste do tutoriala za Port Forward-ovanje, koji je napravio Leopard.

Sve što vam treba je samp-server ili omp-server i ruter. Ako nemate ruter, onda ne trebate port forward-ovati!

## Početak

Ok, evo početka, počnite pronalaženjem svog **gateway-a**. Pretpostavimo da imate vista. Kliknite na start, kliknite na polje za pretragu i napišite **cmd**. Tada se pojavljuje crna kutija. Unesite sljedeće; **ipconfig**. Sačekajte da se tekst učita, a zatim ga pogledajte. Nastavite tražiti dok ne pronađete _**gateway**_, i ne zatvarajte crnu kutiju!
Kada ga pronađete, otvorite svoj omiljeni web pretraživač. Kada se učita, idite na adresnu traku i unesite vrijednost _**gateway**_ (primjer: 192.168.0.1/192.168.1.1). Pritisnite enter.

## Konfiguracija Rutera

Bravo, stigli ste do konfiguracijske stranice rutera. Ono što nam preostaje je da sada port forward-ujemo.

Dakle... postoji kategorija na toj stranici koja je nazvana jednim od sljedećih;

- Virtuelni server
- Port Forward-ovanje
- Port Kontrola
- Dijeljenje Aplikacija
- Sve što ima `port` u svom imenu.

Ako ste ga pronašli, kliknite na njega. Zatim kliknite na dugme 'Dodaj novi', 'Novi port' ili neko drugo dugme koje će preklopiti otvaranje novog porta.

Unesite sljedeće detalje:

```
Port: TVOJ_PORT (standard: 7777)
Port Tip: UDP
Omogućeno: Da
**IP: Nastavite sa 3. korakom**
```

Sada morate znati IP adresu vašeg računara.

## Dobivanje IP adrese, nastavak

Sada povećajte crnu kutiju i ponovo pogledajte tekst dok ne vidite _IPv4_. Trebao bi biti u formatu poput ovog: **192.168.0.100**. Kopirajte, i eto ga! Nastavite sa informacijama na početnoj stranici rutera. Na primjer, moj IP je 192.168.0.100

```
Port: TVOJ_PORT (standard: 7777)
Port Tip: UDP
Omogućeno: Da
IP: 192.168.0.100
```

I pritisnite **sačuvaj**. Onda si gotov. I! Ne zaboravite **prosljeđivati port u Windows zaštitnom zidu**. Ovo je mali tutorijal;

Idite na početni meni, unesite "firewall" u polje za pretragu i odaberite "Windows Firewall". Otvorite ga i kliknite na _Promijeni postavke_. Novi iskačući prozor. Kliknite na karticu _Izuzeci_, kliknite na _Dodaj port.._ i zatim popunite ove informacije;

```
Ime: SA-MP Server (nazovite kako god želite)
Port Broj: YOUR_PORT (standard: 7777)
Protokol: UDP
```

Onda ste gotovi! Kliknite OK i zatvorite ga. Pokrenite server i vidite da li radi. Ako jeste, idite na svog SA-MP klijenta i unesite: localhost:TVOJ_PORT(standard: 7777). Ako se ping promijeni, vaš server radi u potpunosti. Sada samo trebate otići na:

[WhatIsMyIP.COM](http://whatismyip.com).

## Završetak

Kada ste tamo, pronađite ip koji je na vašem ekranu. Idite ponovo na svoj SA-MP klijent, dodajte taj IP u svoje favorite i dodajte TVOJ_PORT (standard: 7777) na kraju. ako radi,

**ČESTITAM**! _ Imate proslijeđen port _!
