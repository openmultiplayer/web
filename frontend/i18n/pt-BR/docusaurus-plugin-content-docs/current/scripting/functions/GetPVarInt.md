---
title: GetPVarInt
sidebar_label: GetPVarInt
description: "Obtém o valor de uma variável inteira do jogador."
tags: ["player variable", "pvar"]
---


## Descrição

Obtém o valor de uma variável inteira do jogador.

| Nome | Descrição |
| ------------ | ---------------------------------------------------------------------------------------------- |
| playerid | O ID do jogador cuja variável de jogador será obtida.                                             |
| const pvar[] | O nome da variável do jogador (sem distinção entre maiúsculas e minúsculas).<br />Definida em [SetPVarInt](SetPVarInt). |

## Retornos

O valor inteiro da variável de jogador especificada.

Ele ainda retornará 0 se a variável não estiver definida ou se o jogador não existir.

## Exemplos

```c
public OnPlayerSpawn(playerid)
{
    SetPVarInt(playerid, "Level", 20);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    printf("Level: %d", GetPVarInt(playerid, "Level")); // obter o valor salvo ('Level')
    // irá imprimir 'Nível: 20'
    return 1;
}
```
## Notas

:::tip

As variáveis não são redefinidas até que [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect) seja chamado, portanto, os valores ainda estarão acessíveis em OnPlayerDisconnect.

:::

## Funções Relacionadas

- [SetPVarInt](SetPVarInt): Defina um número inteiro para uma variável do jogador.
- [SetPVarString](SetPVarString): Defina uma string para uma variável do jogador.
- [GetPVarString](GetPVarString): Obtenha a string definida anteriormente de uma variável do jogador.
- [SetPVarFloat](SetPVarFloat): Defina um float para uma variável do jogador.
- [GetPVarFloat](GetPVarFloat): Obtenha o float definido anteriormente de uma variável do jogador.
- [DeletePVar](DeletePVar): Exclua uma variável do jogador.
