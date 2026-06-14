---
title: SetPVarInt
sidebar_label: SetPVarInt
description: "Defina uma variável de jogador inteira."
tags: ["player variable", "pvar"]
---


## Descrição

Defina uma variável de jogador inteira.

| Nome | Descrição |
| ------------ | ------------------------------------------------------- |
| playerid | O ID do jogador cuja variável de player será definida. |
| const pvar[] | O nome da variável do jogador.                        |
| valor | O número inteiro a ser definido.                                  |

## Retornos

**true** - A função foi executada com sucesso.

**false** - Falha na execução da função. O jogador especificado não está conectado ou o nome da variável é nulo ou tem mais de 40 caracteres.

## Exemplos

```c
// defina GetPlayerMoney o valor da variável do jogador chamada "Money"
SetPVarInt(playerid, "Money", GetPlayerMoney(playerid));

// imprimirá o dinheiro que o jogador possui
printf("money: %d", GetPVarInt(playerid, "Money"));
```
## Notas

:::tip

As variáveis não são redefinidas até que [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect) seja chamado, portanto, os valores ainda estarão acessíveis em OnPlayerDisconnect.

:::

## Funções Relacionadas

- [GetPVarInt](GetPVarInt): Obtenha o número inteiro definido anteriormente de uma variável do jogador.
- [SetPVarString](SetPVarString): Defina uma string para uma variável do jogador.
- [GetPVarString](GetPVarString): Obtenha a string definida anteriormente de uma variável do jogador.
- [SetPVarFloat](SetPVarFloat): Defina um float para uma variável do jogador.
- [GetPVarFloat](GetPVarFloat): Obtenha o float definido anteriormente de uma variável do jogador.
- [DeletePVar](DeletePVar): Exclua uma variável do jogador.
