---
title: GetPlayerCustomSkin
description: Vraća klasu custom skina preuzetom sa servera.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.DL R1 i ne radi u nižim verzijama!

:::

## Deskripcija

Vraća klasu custom skina preuzetom sa servera.

| Ime      | Deskripcija                                 |
| -------- | ------------------------------------------- |
| playerid | ID igrača za kojeg želite izvršiti funkciju |

## Returns

ID custom skina koji je određen u AddCharModel newid

## Primjeri

```c
playerskin = GetPlayerCustomSkin(playerid);
```

## Srodne Funkcije

- [GetPlayerSkin](GetPlayerSkin): Dobijanje trenutnog skina igrača.
- [SetPlayerSkin](SetPlayerSkin): Postavljanje igračevog skina.
