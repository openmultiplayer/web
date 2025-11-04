---
title: Servervariabelensysteem
sidebar_label: Servervariabelensysteem

description: Het server variable system (kort: SVar) is een efficiënte, dynamische manier om globale servervariabelen te maken die tegelijk beschikbaar zijn in gamemode en filterscripts.
---

Het **server variable system** (kort: **SVar**) biedt een efficiënte, dynamische manier om globale servervariabelen te maken. Deze variabelen zijn tegelijk bruikbaar in de gamemode én in filterscripts.

Ze lijken op [PVars](perplayervariablesystem), maar zijn niet gekoppeld aan een specifieke player ID.

::::warning

Dit systeem is geïntroduceerd in SA-MP 0.3.7 R2-1 en werkt niet in eerdere versies.

::::

::::note

Het SVar-systeem werkt hetzelfde als PVars, maar de variabelen zijn server-breed, niet gekoppeld aan een speler, en blijven bestaan bij het wisselen van gamemode.

::::

## Voordelen

- SVars zijn script-overstijgend te delen en op te vragen (gamemode en filterscripts).
- Je kunt de SVar-lijst eenvoudig enumereren en loggen/opslaan, wat debuggen makkelijker maakt.
- Niet-bestaande SVars geven standaard de waarde 0 terug.
- SVars kunnen zeer lange strings bevatten via dynamisch gealloceerd geheugen.
- SVars zijn in-game te Setten, Getten en te maken.

## Nadelen

- SVars zijn meerdere malen trager dan reguliere variabelen. In het algemeen is geheugen ruilen voor snelheid gunstiger dan andersom.

## Gerelateerde functies

- [SetSVarInt](../scripting/functions/SetSVarInt): stel een integer in voor een servervariabele.
- [GetSVarInt](../scripting/functions/GetSVarInt): haal een servervariabele op als integer.
- [SetSVarString](../scripting/functions/SetSVarString): stel een string in voor een servervariabele.
- [GetSVarString](../scripting/functions/GetSVarString): haal de eerder ingestelde string op van een servervariabele.
- [SetSVarFloat](../scripting/functions/SetSVarFloat): stel een float in voor een servervariabele.
- [GetSVarFloat](../scripting/functions/GetSVarFloat): haal de eerder ingestelde float op van een servervariabele.
- [DeleteSVar](../scripting/functions/DeleteSVar): verwijder een servervariabele.


