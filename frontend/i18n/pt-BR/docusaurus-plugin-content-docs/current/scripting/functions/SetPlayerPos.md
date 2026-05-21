---
title: SetPlayerPos
sidebar_label: SetPlayerPos
description: "Defina a posição de um jogador."
tags: ["player"]
---


## Descrição

Defina a posição de um jogador.

| Nome | Descrição |
| -------- | -------------------------------------------- |
| playerid | O ID do jogador para definir a posição. |
| Float:x | A coordenada X para posicionar o jogador.  |
| Float:y | A coordenada Y para posicionar o jogador.  |
| Float:z | A coordenada Z para posicionar o jogador.  |

## Retornos

**true** - A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o jogador especificado não existe.

## Exemplos

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/middle", true))
    {
        // Teleporta os jogadores para o centro de San Andreas quando eles digitam /middle
        SetPlayerPos(playerid, 0.0, 0.0, 3.0);
        return 1;
    }
    return 0;
}
```
## Notas

:::tip

Usar esta função em um jogador em um veículo irá removê-lo instantaneamente do veículo. Útil para ejetar jogadores rapidamente.

:::

:::tip

Ao definir a posição de um jogador para um interior, o seu interior também deve ser definido.

:::

## Funções Relacionadas

- [SetPlayerPosFindZ](SetPlayerPosFindZ): Defina a posição de um jogador e encontre o terreno.
- [GetPlayerPos](GetPlayerPos): Obtenha a posição de um jogador.
- [SetVehiclePos](SetVehiclePos): Define a posição de um veículo.
- [GetVehiclePos](GetVehiclePos): Obtenha a posição de um veículo.
