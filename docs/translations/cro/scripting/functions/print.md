---
title: print
description: Stampa string u konzolu servera (ne u in-game chatu) i logovima (server_log.
tags: []
---

<LowercaseNote />

## Opis

Stampa string u konzolu servera (ne u in-game chatu) i logovima (server_log)

| Name                  | Description           |
| --------------------- | --------------------- |
| string[]              | String koji se stampa |
| foreground (optional) | Boja teksta           |
| background (optional) | Pozadinska boja       |
| highlight (optional)  | Highlign boja         |

## Returns

Ova funkcija ne vraca neke specificne vrednosti.

:::tip

Kada je boja ostavljena na -1, koriste ste default boje konzole servera.

:::

:::tip

Na vecini sistema se mogu koristiti sledeci kodovi za boje: crna (0), crvena (1), zelena (2), zuta (3), plava (4), ljubicasta (5), svetlo-plava (6) i bela (7).

:::

:::tip

Vecina sistema takodje podrzava svetlije/tamnije boje od ovih boja. Za highlight teksta se mogu koristiti sledece: regular (0) i svetla/tamna (1).

:::

## Examples

```c
public OnGameModeInit( )
{
    print("Gamemode started.");
    return 1;
}
```

## Related Functions

- [printf](printf.md): Stampa formatiranu poruku u server log i konzolu.
