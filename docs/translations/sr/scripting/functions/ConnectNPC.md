---
title: ConnectNPC
description: Poveze NPC-a na server.
tags: ["npc"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3d i ne radi u nizim verzijama!

:::

## Opis

Poveze NPC-a na server.

| Ime      | Opis                                                                          |
| -------- | ----------------------------------------------------------------------------- |
| name[]   | Ime sa kojim se NPC poveze. Mora da prati ista pravila kao i normalni igraci. |
| script[] | NPC ime u skripti koje se nalazi u npcmodes folderu (bez .amx nastavka).      |

## Vraca

Ova funkcija uvek vraca 1.

## Primeri

```c
public OnGameModeInit()
{
    ConnectNPC("[BOT]Pilot", "pilot");
    return 1;
}
```

## Beleske

:::tip

NPC nema nametag. Ovo moze da se napravi preko Attach3DTextLabelToPlayer.

:::

## Srodne Funkcije

- [IsPlayerNPC](IsPlayerNPC.md): Proverava da li je igrac NPC ili pravi igrac.
- [OnPlayerConnect](../callbacks/OnPlayerConnect.md): Poziva se kada se igrac poveze na server.
