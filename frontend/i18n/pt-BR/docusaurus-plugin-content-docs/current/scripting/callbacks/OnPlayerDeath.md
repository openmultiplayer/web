---
title: OnPlayerDeath
sidebar_label: OnPlayerDeath
description: Esta callback é chamada quando um jogador morre, tanto por suicídio ou por ser morto por outros jogadores.
tags: ["player"]
---

## Descrição

Esta callback é chamada quando um jogador morre, tanto por suicídio ou por ser morto por outros jogadores.

| Nome          | Descrição                                                                             |
|---------------|---------------------------------------------------------------------------------------|
| playerid      | O ID do jogador que morreu                                                            |
| killerid      | O ID do jogador que matou o jogador que morreu, ou INVALID_PLAYER_ID se não houve um. |
| WEAPON:reason | O ID do motivo da morte do jogador.                                                   |

## Retorno

1 - Irá previnir que outro filterscript receba esta callback.

0 - Indica que esta callback será passada para o próximo filterscript.

Sempre é chamada primeiro em filterscripts.

## Exemplos

```c
new PlayerDeaths[MAX_PLAYERS];
new PlayerKills[MAX_PLAYERS];

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    SendDeathMessage(killerid, playerid, reason); // Mostra o kill no killfeed

    // Verifica se o ID do jogador que matou é valido antes de fazer qualquer coisa
    if (killerid != INVALID_PLAYER_ID)
    {
        PlayerKills[killerid] ++;
    }

    // Fora da verificação, faça os códigos desejados para o jogador que morreu.
    PlayerDeaths[playerid] ++;
    return 1;
}
```

## Notas

:::tip

O motivo da morte retornará 37 (Lança Chamas) para qualquer fonte que utilize fogo (EX: Molotov). O motivo da morte retornará 51 para qualquer fonte que utilize explosões (EX: RPG, granada). Você não precisa verificar se o killerid é valido antes de usa-lo no SendDeathMessage. INVALID_PLAYER_ID é um parâmetro valido nesta função. playerid é o único que pode chamar esta callback.

:::

:::warning

Você PRECISA verificar se 'killerid' é valido (não INVALID_PLAYER_ID) antes de usa-lo em uma array (ou qualquer outro lugar), pois isso irá ocasionar no crash do OnPlayerDeath (não o script todo). Isto é devido ao INVALID_PLAYER_ID ser definido como 65535, e se uma array tem apenas 'MAX_PLAYERS' como definição do número de elementos, você estaria tentando acessar um index inválido.

:::

## Related Functions

- [SendDeathMessage](../functions/SendDeathMessage): Adiciona a kill para a lista de mortes.
- [SetPlayerHealth](../functions/SetPlayerHealth): Define a vida de um jogador.
