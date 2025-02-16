---
title: GetPlayerIp
description: Obtém o endereço IP de um jogador específico e armazena-o em uma string.
tags: ["player", "ip address"]
---

## Descrição

Obtém o endereço IP de um jogador específico e armazena-o em uma string.

| Nome     | Descrição                                                                    |
| -------- | ---------------------------------------------------------------------------- |
| playerid | O ID do jogador do qual deseja obter o endereço de IP.                       |
| ip[]     | A string para armazenar o endereço de IP do jogador, passado por referência. |
| len      | O comprimento máximo do endereço IP (recomendado 16).                        |

## Retorno

O endereço IP do jogador que está armazenado na array especificada.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    new plrIP[16];
    GetPlayerIp(playerid, plrIP, sizeof(plrIP));
    if (!strcmp(plrIP, "127.0.0.1"))
    {
        SendClientMessage(playerid, 0xFFFFFFFF, "Bem-vindo ao seu servidor, mestre :)");
    }
    return 1;
}
```

## Notas

:::tip

PAWN é case-sensitive (sensível a maiúsculas e minúsculas). GetPlayerIP não irá funcionar.

:::

:::warning

**SA-MP server**: Esta função não funciona quando usada em [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect) porque o jogador já está desconectado. Irá retornar um IP inválido (255.255.255.255). Salve os IPs dos jogador em [OnPlayerConnect](../callbacks/OnPlayerConnect) se eles precisarem ser usados no [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect).

**open.mp server**: This function **work** when used in [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect).

:::

## Funções Relacionadas

- [NetStats_GetIpPort](NetStats_GetIpPort): Obtém o IP e porta de um jogador.
- [GetPlayerName](GetPlayerName): Obtém o nome de um jogador.
- [GetPlayerPing](GetPlayerPing): Obtém o ping de um jogador.
- [GetPlayerVersion](GetPlayerVerion): Obtém a versão-client do jogador.
- [OnIncomingConnection](../callbacks/OnIncomingConnection): É chamado quando um jogador está tentando se conectar ao servidor.
- [OnPlayerConnect](../callbacks/OnPlayerConnect): É chamado quando um jogador se conecta ao servidor.
- [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect): É chamado quando um jogador sai do servidor.
