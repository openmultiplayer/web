---
title: SendDeathMessage
sidebar_label: SendDeathMessage
description: "Adiciona uma morte ao 'killfeed' no lado direito da tela para todos os jogadores."
tags: []
---


## Descrição

Adiciona uma morte ao 'killfeed' no lado direito da tela para todos os jogadores.

| Nome | Descrição |
| ------ | --------------------------------------------------------------------------------------------------------------------------- |
| killer | O ID do assassino (pode ser INVALID_PLAYER_ID).                                                                            |
| killee | O ID do jogador que morreu.                                                                                             |
| weapon | O motivo (nem sempre uma arma) da morte da vítima. Ícones especiais também podem ser usados ​​(ICON_CONNECT e ICON_DISCONNECT). |

## Retornos

Esta função sempre retorna **true**, mesmo se a execução da função falhar.

A função falha na execução (nenhuma mensagem de morte é mostrada) se 'playerid' for inválido.

Se 'razão' for inválido, um ícone genérico de caveira e ossos cruzados será mostrado.

'killerid' sendo inválido (`INVALID_PLAYER_ID`) é válido.

## Exemplos

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    SendDeathMessage(killerid, playerid, reason);
    return 1;
}
```
## Notas

:::tip

As mensagens de morte podem ser apagadas usando um jogador válido ID para 'playerid' que não esteja conectado. Para mostrar uma mensagem de morte para apenas um jogador, use [SendDeathMessageToPlayer](SendDeathMessageToPlayer). Você pode usar NPCs para criar seus próprios motivos de morte personalizados.

:::

## Funções Relacionadas

- [SendDeathMessageToPlayer](SendDeathMessageToPlayer): Adiciona uma morte à lista de mortes de um jogador.

## Callbacks Relacionadas

- [OnPlayerDeath](../callbacks/OnPlayerDeath): Chamado quando um jogador morre.

## Recursos relacionados

- [Arma IDs e motivos de morte](../resources/weaponids)
