---
title: strcopy
sidebar_label: strcopy
description: "Copia uma string na string de destino."
tags: ["string"]
---


<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## Descrição

Copia uma string na string de destino.

| Nome | Descrição |
| ------------------------- | --------------------------------------------------- |
| dest[] | A string na qual copiar a string de origem.          |
| const source[] | A sequência de origem.                                  |
| maxlength = sizeof (dest) | O comprimento máximo do destino. _(opcional)_ |

## Retornos

O comprimento da nova cadeia de destino.

## Exemplos

```c
new playerName[MAX_PLAYER_NAME];
GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);

new string[64];
strcopy(string, playerName); // Copia playerName em string
```
## Funções Relacionadas

- [strcat](strcat): concatena duas strings em uma referência de destino.
