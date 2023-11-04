---
title: GetPlayerName
description: Obtém o nome de um jogador.
tags: ["player"]
---

## Descrição

Obtém o nome de um jogador.

| Nome     | Descrição                                                                                                                                                              |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid | O ID do jogador do qual deseja obter o nome.                                                                                                                           |
| name[]   | A array para armazenar o nome, passado por referência.                                                                                                                 |
| len      | O comprimento da string que deve ser armazenada. Recomendado que seja MAX_PLAYER_NAME + 1. O + 1 é necessário parar levar em conta o caractere nulo (null terminator). |

## Retorno

O nome do jogador é armazenado na array especificada.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    // Obtém o nome do jogador que se conectou e exibe uma mensagem de entrada para outros jogadores.

    new name[MAX_PLAYER_NAME + 1];
    GetPlayerName(playerid, name, sizeof(name));

    new string[MAX_PLAYER_NAME + 23 + 1];
    format(string, sizeof(string), "%s entrou no servidor.", name);
    SendClientMessageToAll(0xC4C4C4FF, string);

    return 1;
}
```

## Notas

:::tip

O nome do jogador pode ter até 24 caracteres (a partir da 0.3d R2) usando SetPlayerName. Isso é definido na a_samp.inc em MAX_PLAYER_NAME. Porém, no client só pode entrar com um nickname entre 3 e 20 caracteres, caso contrário a conexão será rejeitada e o jogador terá que sair e escolher um nome válido.

:::

## Funções Relacionadas

- [SetPlayerName](SetPlayerName): Define o nome de um jogador.
- [GetPlayerIp](GetPlayerIp): Obtém o IP de um jogador.
- [GetPlayerPing](GetPlayerPing): Obtém o ping de um jogador.
- [GetPlayerScore](GetPlayerScore): Obtém a pontuação/nível de um jogador.
- [GetPlayerVersion](GetPlayerVersion): Obtém a versão-client de um jogador.
