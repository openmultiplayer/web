---
title: GetPVarString
sidebar_label: GetPVarString
description: "Obtém uma variável de jogador como uma string."
tags: ["player variable", "pvar"]
---


## Descrição

Obtém uma variável de jogador como uma string.

| Nome | Descrição |
| --------------------- | ----------------------------------------------------------------------- |
| playerid | O ID do jogador cuja variável de jogador será obtida.                      |
| const pvar[] | O nome da variável do jogador, definido por [SetPVarString](SetPVarString). |
| output[] | A matriz na qual armazenar o valor da string, passada por referência.   |
| len = sizeof (output) | O comprimento máximo da string retornada.                              |

## Retornos

O comprimento da string.

## Exemplos

```c
public OnPlayerConnect(playerid,reason)
{
    new playerName[MAX_PLAYER_NAME];
    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    SetPVarString(playerid, "PlayerName", playerName);
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    new playerName[MAX_PLAYER_NAME];
    GetPVarString(playerid, "PlayerName", playerName, sizeof(playerName));

    printf("%s died.", playerName);
}
```
## Notas

:::tip

Se o comprimento da string for zero (valor não definido), o texto `output` não será atualizado ou definido como nada e permanecerá com os dados antigos, sendo necessário limpar a variável para o valor em branco se [GetPVarString](GetPVarString) retornar 0 se esse comportamento for indesejado.

:::

## Funções Relacionadas

- [SetPVarString](SetPVarString): Defina uma string para uma variável do jogador.
- [SetPVarInt](SetPVarInt): Defina um número inteiro para uma variável do jogador.
- [GetPVarInt](GetPVarInt): Obtenha o número inteiro definido anteriormente de uma variável do jogador.
- [SetPVarFloat](SetPVarFloat): Defina um float para uma variável do jogador.
- [GetPVarFloat](GetPVarFloat): Obtenha o float definido anteriormente de uma variável do jogador.
- [DeletePVar](DeletePVar): Exclua uma variável do jogador.
