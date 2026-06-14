---
title: SetPlayerScore
sidebar_label: SetPlayerScore
description: "Defina a pontuação de um jogador."
tags: ["player"]
---


## Descrição

Defina a pontuação de um jogador. As pontuações dos jogadores são mostradas no placar (mostrado mantendo pressionada a tecla TAB).

| Nome | Descrição |
| -------- | ----------------------------------------- |
| playerid | O ID do jogador para definir a pontuação. |
| score | O valor para definir a pontuação do jogador.   |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o jogador especificado não existe.

## Exemplos

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // Adicione 1 à pontuação deste assassino. Devemos verificar primeiro se é válido.
    if (killerid != INVALID_PLAYER_ID)
    {
        SetPlayerScore(killerid, GetPlayerScore(killerid) + 1);
    }
    return 1;
}
```
## Funções Relacionadas

- [GetPlayerScore](GetPlayerScore): Obtenha a pontuação de um jogador.
