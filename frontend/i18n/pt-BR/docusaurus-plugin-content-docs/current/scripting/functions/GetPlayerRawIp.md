---
title: GetPlayerRawIp
sidebar_label: GetPlayerRawIp
description: "Obtenha o endereço Raw IP do jogador especificado (v4)."
tags: ["player", "ip address"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha o endereço Raw IP do jogador especificado (v4).

| Nome | Descrição |
| -------- | -------------------------------------------------- |
| playerid | O ID do jogador do qual obter o endereço Raw IP. |

## Retornos

Retorna o endereço Raw IP do jogador como número inteiro.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    new rawIp = GetPlayerRawIp(playerid);
    SendClientMessage(playerid, 0xFFFF00FF, "SERVER: Your Raw IP address: %d", rawIp);
    return 1;
}
```
## Notas

:::tip

PAWN diferencia maiúsculas de minúsculas. GetPlayerRawIP não funcionará.

:::

## Funções Relacionadas

- [GetPlayerIp](GetPlayerIp): Obtenha o IP de um jogador.
- [NetStats_GetIpPort](NetStats_GetIpPort): Obtenha o IP e a porta de um jogador.
