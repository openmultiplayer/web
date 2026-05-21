---
title: gpci
sidebar_label: gpci
description: "Obtenha o CI (identificação do computador/cliente) de um usuário, que está vinculado ao SAMP/GTA em seu computador."
tags: []
---


<LowercaseNote />

## Descrição

Obtenha o CI de um usuário, ele está vinculado ao SAMP/GTA em seu computador.

:::warning

O CI de um jogador é não é único, alguns jogadores podem ter CI semelhante ou igual, não banir apenas devido a uma partida CI.

:::

## Parâmetros

| Nome | Descrição |
| --------------------- | --------------------------------------- |
| playerid | O ID do jogador para buscar seu CI. |
| serial[] | String para armazenar o CI buscado. |
| len = sizeof (serial) | Tamanho atribuído da string.            |

## Valores de retorno

Esta função retornará o valor da string do CI de um usuário.

## Exemplo de uso

**Servidor SA-MP:**

```c
#include <a_samp>

#if !defined gpci
    native gpci(playerid, serial[], len);
#endif

public OnPlayerConnect(playerid)
{
    new serial[41]; // 40 + \0
    gpci(playerid, serial, sizeof(serial));

    new string[128];
    format(string, sizeof(string), "Your CI Serial: %s", serial);
    SendClientMessage(playerid, -1, string);
    return 1;
}
```
**servidor open.mp:**

```c
#include <open.mp>

public OnPlayerConnect(playerid)
{
    new serial[41]; // 40 + \0
    GPCI(playerid, serial, sizeof(serial));
    SendClientMessage(playerid, -1, "Your CI Serial: %s", serial);
    return 1;
}
```
## Notas

:::warning

No servidor SA-MP você deve adicionar 'native gpci(playerid, serial[], len);' na parte superior do seu script antes de usar qualquer função CI.

:::

## Funções Relacionadas

- [GetNetworkStats](GetNetworkStats): Obtém as estatísticas de rede dos servidores e as salva em uma string.
- [GetPlayerNetworkStats](GetPlayerNetworkStats): Obtém as estatísticas de rede do jogador e as salva em uma string.
