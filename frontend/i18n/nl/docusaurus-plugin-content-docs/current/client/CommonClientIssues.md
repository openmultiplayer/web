---
title: Veelvoorkomende client issues
sidebar_label: Veelvoorkomende client issues
---

### Ik krijg de error "San Andreas cannot be found"

San Andreas Multiplayer is **geen** losstaand programma! Het voegt multiplayer toe aan San Andreas, dus je hebt GTA San Andreas voor PC nodig – en wel **EU/US v1.0**. Andere versies zoals v2.0 of Steam/Direct2Drive werken niet. [Klik hier om een patch te downloaden waarmee je GTA:SA kunt downgraden naar 1.0](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661)

### Ik zie geen servers in de SA:MP-browser

De SA:MP-browser werkt niet meer. Download de nieuwe [open.mp launcher](https://github.com/openmultiplayer/launcher/releases/latest).
Zie je nog steeds geen servers, geef open.mp dan toegang in je firewall. Door het grote aantal verschillende firewalls kunnen we hier geen specifieke support voor geven; check de website van de fabrikant of zoek het even op. Zorg er ook voor dat je de laatste stabiele open.mp-versie gebruikt!

### Singleplayer start in plaats van SA:MP

:::warning

Je hoort de singleplayer-opties (new game, load game, etc.) niet te zien – SA:MP zou vanzelf moeten laden zonder deze opties te tonen. Zie je "new game", dan is singleplayer geladen en niet San Andreas Multiplayer.

:::

Singleplayer kan om twee redenen laden: je hebt SA:MP in de verkeerde map geïnstalleerd of je hebt de verkeerde versie van San Andreas. Bij een verkeerde versie kun je met de GTA San Andreas downgrader je game downgraden. Klik [hier](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661) om te downloaden.

Soms wordt het singleplayermenu getoond, maar is SA:MP wel degelijk goed geladen. Selecteer in dat geval even een menu-item en druk daarna op Escape om het te sluiten; SA:MP gaat dan verder met laden.

### Ik krijg "Unacceptable Nickname" bij het verbinden met een server

Zorg dat je geen verboden tekens in je naam gebruikt (alleen 0-9, a-z, \[\], (), $, @, ., _ en =) en dat je naam niet langer is dan 20 tekens. Dit kan ook gebeuren als iemand anders al op de server staat met dezelfde naam (bijv. wanneer je snel opnieuw verbindt na een timeout of crash). Een Windows-server met een uptime van >50 dagen kan deze bug soms veroorzaken.

### Scherm blijft hangen op "Connecting to IP:Port..."

De server kan offline zijn. Kun je met geen enkele server verbinden, schakel dan je firewall tijdelijk uit om te testen. Werkt het dan wel, stel je firewall dan opnieuw in. Het kan ook zijn dat je een verouderde SA:MP-versie draait – nieuwe versies vind je [hier](https://sa-mp.mp/downloads/).

### Ik heb een gemodde GTA: San Andreas en SA:MP wil niet laden

Als het niet laadt, verwijder dan je mods.

### GTA start niet bij het lanceren met SA:MP

Verwijder het bestand `gta_sa.set` uit je userfiles-map en zorg dat je geen cheats/mods hebt.

### De game crasht wanneer een vehicle explodeert

Als je 2 monitors hebt, zijn er 3 opties:

1. Schakel je tweede monitor uit tijdens SA:MP. (Niet ideaal als je die nodig hebt.)
2. Zet je Visual FX quality op Low. (Esc > Options > Display Setup > Advanced)
3. Hernoem je GTA San Andreas-map (bijv. naar "GTA San Andreas2"). (Dit werkt vaak; soms moet je opnieuw hernoemen.)

### Mijn muis werkt niet na het sluiten van het pauzemenu

Lijkt je muis ingame vast te zitten terwijl deze (deels) werkt in het pauzemenu, zet dan de `multicore`-optie in [sa-mp.cfg](ClientCommands#file-sa-mpcfg "Sa-mp.cfg") uit (zet op 0). Herhaaldelijk op Escape drukken tot de muis weer reageert kan ook helpen, maar is minder netjes.

### Het bestand dinput8.dll ontbreekt

Dit ontstaat mogelijk wanneer DirectX niet goed is geïnstalleerd. Installeer opnieuw en vergeet je PC niet te herstarten. Blijft het probleem, ga dan naar `C:\Windows\System32` en kopieer `dinput.dll` naar de hoofdmap van je GTA San Andreas. Dat lost het doorgaans op.

### Ik zie de nametags van andere players niet!

Weet dat sommige servers nametags globaal uitschakelen. Daarnaast komt dit vaak voor op pc's met Intel HD ingebouwde graphics (niet echt bedoeld om te gamen). De exacte oorzaak is onbekend en er is momenteel geen universele fix. Een structurele oplossing is een dedicated videokaart plaatsen, als dat kan en past binnen je budget.


