---
title: GetPlayerVersion
sidebar_label: GetPlayerVersion
description: "Retorna a versão do cliente SA-MP, conforme relatado pelo jogador."
tags: ["player"]
---


## Descrição

Retorna a versão do cliente SA-MP, conforme relatado pelo jogador.

| Nome | Descrição |
| ---------------------- | ----------------------------------------------------------------- |
| playerid | O ID do jogador do qual obter a versão cliente.                |
| version[] | A string para armazenar a versão do jogador, passada por referência. |
| len = sizeof (version) | O comprimento máximo da versão.                                |

## Retornos

A versão do cliente é armazenada na matriz especificada.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    new version[24];
    GetPlayerVersion(playerid, version, sizeof(version));

    new string[64];
    format(string, sizeof(string), "Your version of SA-MP: %s", version);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    // Texto possível: "Sua versão do SA-MP: 0.3.7"
    return 1;
}
```
## Notas

:::tip

A versão de um cliente pode ter até 24 caracteres, caso contrário a conexão será rejeitada devido a "Conexão de cliente inválida". No entanto, jogadores normais só podem entrar com uma versão com comprimento entre 5 (0.3.7) e 9 (0.3.DL-R1) caracteres.

:::

:::warning

A string na qual a versão é armazenada estará vazia se playerid for NPC.

:::

## Funções Relacionadas

- [GetPlayerName](GetPlayerName): Obtenha o nome de um jogador.
- [GetPlayerPing](GetPlayerPing): Obtenha o ping de um jogador.
- [GetPlayerIp](GetPlayerIp): Obtenha o IP de um jogador.
