---
title: SendRconCommand
sidebar_label: SendRconCommand
description: "Envia um comando RCON (console remoto)."
tags: ["administration"]
---


## Descrição

Envia um comando RCON (console remoto).

| Nome | Descrição |
| ---------------- | ------------------------------------------ |
| const format[] | O comando RCON a ser executado.           |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag. |

## Retornos

Esta função sempre retorna 1.

## Exemplos

```c
SendRconCommand("gmx");
// Esta é uma versão com script de digitação "/rcon gmx" no jogo.
// GMX reinicia o gamemode.

// Exemplo usando formato()
new szMapName[] = "Los Santos";
new szCmd[64];
format(szCmd, sizeof(szCmd), "mapname %s", szMapName);
SendRconCommand(szCmd);

// DICA PROFISSIONAL: Você não precisa de `format` em open.mp
SendRconCommand("game.map %s", szMapName);
```
## Notas

:::warning

- Não suporta login, devido à falta do parâmetro 'playerid'.
- 'password 0' removerá a senha do servidor se alguma estiver definida.
- Esta função resultará na chamada de [OnRconCommand](../callbacks/OnRconCommand).

:::

:::info

Consulte [config.json](../../server/config.json)

:::

## Funções Relacionadas

- [IsPlayerAdmin](IsPlayerAdmin): Verifica se um jogador está logado em RCON.

## Callbacks Relacionadas

- [OnRconCommand](../callbacks/OnRconCommand): Chamado quando um comando RCON é enviado.
- [OnRconLoginAttempt](../callbacks/OnRconLoginAttempt): Chamado quando é feita uma tentativa de login em RCON.
