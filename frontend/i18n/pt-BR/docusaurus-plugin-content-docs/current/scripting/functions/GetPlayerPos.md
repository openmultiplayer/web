---
title: GetPlayerPos
sidebar_label: GetPlayerPos
description: "Obtenha a posição de um jogador, representada pelas coordenadas X, Y e Z."
tags: ["player"]
---


## Descrição

Obtenha a posição de um jogador, representada pelas coordenadas X, Y e Z.

| Nome | Descrição |
| -------- | ---------------------------------------------------------------------------- |
| playerid | O ID do jogador para obter a posição.                                 |
| &Float:x | Uma variável flutuante na qual armazenar a coordenada X, passada por referência. |
| &Float:y | Uma variável flutuante na qual armazenar a coordenada Y, passada por referência. |
| &Float:z | Uma variável flutuante na qual armazenar a coordenada Z, passada por referência. |

## Retornos

**true** em caso de sucesso.

**false** em caso de falha (ou seja, jogador não conectado).

## Exemplos

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // Declare 3 variáveis ​​flutuantes para armazenar as coordenadas X, Y e Z em
    new Float:x, Float:y, Float:z;

    // Use GetPlayerPos, passando as 3 variáveis ​​flutuantes que acabamos de criar
    GetPlayerPos(playerid, x, y, z);

    // Crie uma retirada de dinheiro na posição do jogador
    CreatePickup(1212, 4, x, y, z, -1);
   return 1;
}
```
## Notas

:::warning

Esta função é conhecida por retornar valores não confiáveis quando usada em [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect) e OnPlayerRequestClass. Isso ocorre porque o jogador não é gerado.

:::

## Funções Relacionadas

- [SetPlayerPos](SetPlayerPos): Defina a posição de um jogador.
- [GetVehiclePos](GetVehiclePos): Obtenha a posição de um veículo.
- [IsPlayerInRangeOfPoint](IsPlayerInRangeOfPoint): Verifica se um jogador está ao alcance de um ponto.
- [GetPlayerDistanceFromPoint](GetPlayerDistanceFromPoint): Obtenha a distância entre um jogador e um ponto.
