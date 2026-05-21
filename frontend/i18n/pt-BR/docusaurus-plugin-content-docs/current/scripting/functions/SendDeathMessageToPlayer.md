---
title: SendDeathMessageToPlayer
sidebar_label: SendDeathMessageToPlayer
description: "Adiciona uma morte ao 'killfeed' no lado direito da tela para um único jogador."
tags: ["player"]
---


## Descrição

Adiciona uma morte ao 'killfeed' no lado direito da tela para um único jogador.

| Nome | Descrição |
| -------- | --------------------------------------------------------------------------------------------------------------------------- |
| playerid | O ID do jogador para o qual enviar a mensagem de morte.                                                                          |
| killer | O ID do assassino (pode ser INVALID_PLAYER_ID).                                                                            |
| killee | O ID do jogador que morreu.                                                                                             |
| weapon | O motivo (nem sempre uma arma) da morte da vítima. Ícones especiais também podem ser usados ​​(ICON_CONNECT e ICON_DISCONNECT). |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função.

## Exemplos

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // Envia uma mensagem de morte para "playerid" mostra que "killerid" matou "playerid" para "reason"
    SendDeathMessageToPlayer(playerid, killerid, playerid, reason);

    return 1;
}
```
## Funções Relacionadas

- [SendDeathMessage](SendDeathMessage): Adicione uma morte à lista de mortes.

## Callbacks Relacionadas

- [OnPlayerDeath](../callbacks/OnPlayerDeath): Chamado quando um jogador morre.
