---
title: Plugin Development Guide
sidebar_label: Plugin Development Guide
description: Introductie en referentie voor het ontwikkelen van SA-MP plugins.
---

## Introductie

Dit is een samenvatting met de belangrijkste richtlijnen en verwijzingen voor plugin-ontwikkeling; de originele Engelstalige guide bevat volledige details en code. Je bouwt plugins in C/C++ met de plugin SDK. Vragen over pure C/C++ horen op taalfora; hier focussen we op de SDK en PAWN-interactie.

## Veelgestelde vragen (korte antwoorden)

- Hoe worden plugins gemaakt? In C/C++ met de plugin SDK; je registreert natives en haakt in op AMX-instanties.
- Andere taal dan C/C++? Theoretisch via ABI-compatibele talen/bindings; praktisch zelden gebruikt.
- Multiplatform (Linux/Windows)? Gebruik platform-onafhankelijke code en compileer per platform.
- Memory hacking? Alleen voor callback-hooking/func-calls acceptabel; modificatie van servergeheugen is off-limits.
- Broncode verplicht? Ja, tenzij expliciet toegestaan door een developer (uitzonderingen zeldzaam).

## Aan de slag (VS 2010 + SDK)

Stappen (sterk verkort):

1) Maak een Win32 DLL-project (Empty Project)
2) Voeg een module definition file (.def) toe met `EXPORTS`
3) Voeg SDK-bestanden toe (`amx/` en headers)
4) Implementeer exports: `Supports`, `Load`, `Unload`, `AmxLoad`, `AmxUnload` (en optioneel `ProcessTick`)
5) Registreer je natives met `amx_Register`

Voorbeeld-exports skeleton zie originele guide; hieronder beknopte highlights.

## Belangrijke exports

| Functie         | Doel                                                                 |
| --------------- | -------------------------------------------------------------------- |
| Supports()      | Retourneert capabilities (bijv. `SUPPORTS_VERSION`, `SUPPORTS_AMX_NATIVES`) |
| Load(void**)    | Ontvangt pointers (AMX export table, `logprintf`)                    |
| Unload()        | Opruimen bij server shutdown                                         |
| AmxLoad(AMX*)   | Geregistreerde natives koppelen per AMX-instance                     |
| AmxUnload(AMX*) | AMX-instance uit eigen lijsten verwijderen                           |
| ProcessTick()   | (Optioneel) periodiek aangeroepen per server-loop                    |

## Kern-defines/structs (selectie)

- `cell`: 32-bit integer type voor PAWN data
- `AMX`: AMX-instance; verplicht in native-signatures
- `AMX_NATIVE_INFO`: naam + functiepointer voor `amx_Register`
- `PLUGIN_EXPORT`/`PLUGIN_CALL`: linkage/calling-convention macros
- `PLUGIN_DATA_AMX_EXPORTS`, `PLUGIN_DATA_LOGPRINTF`: indexes in `Load`-data

## Strings, arrays, floats, by-ref

- `amx_GetAddr` + `amx_GetString` / `amx_SetString` om strings te lezen/schrijven
- `amx_Push`, `amx_PushArray`, `amx_PushString` om args te pushen
- `amx_ctof` / `amx_ftoc` voor float <-> cell zonder bitpatroon te wijzigen
- By-ref: haal `cell*` op met `amx_GetAddr` en schrijf terug

## Callbacks aanroepen en natives registreren

- Vind public met `amx_FindPublic` en roep aan met `amx_Exec`
- Registreer natives via `amx_Register(amx, list, -1)` met `AMX_NATIVE_INFO list[]`

## Invoke (natives uit plugin aanroepen)

Het “Invoke”-mechanisme kan SA-MP-natives aanroepen vanuit je plugin. Je houdt een lijst AMX-instances bij, vraagt adressen op en roept `callNative` met juiste specifiers (`i`, `f`, `s`, `v`, `p`). Zie bron van Invoke voor complete setup.

## Notities

- Pawn is typeless: houd rekening met 32-bit cellen en tags
- Gebruik `ProcessTick()` als je threads gebruikt die PAWN-interactie vereisen
- Publiceer met broncode; documenteer je natives (namen/params)

Deze pagina is een compacte vertaling/samenvatting; raadpleeg het origineel voor volledige voorbeelden en codeblokken.


