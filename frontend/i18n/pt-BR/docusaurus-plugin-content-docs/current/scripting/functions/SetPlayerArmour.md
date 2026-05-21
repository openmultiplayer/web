---
title: SetPlayerArmour
sidebar_label: SetPlayerArmour
description: "Defina o nível de armadura de um jogador."
tags: ["player"]
---


## Descrição

Defina o nível de armadura de um jogador.

| Nome | Descrição |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| playerid | O ID do jogador para definir a armadura.                                                                                              |
| Float:armour | A quantidade de armadura a ser definida, como porcentagem (flutuante). Valores maiores que 100 são válidos, mas não serão exibidos na barra de blindagem do HUD. |

## Retornos

**1** - A função foi executada com sucesso.

**0** - A função não foi executada. Isso significa que o jogador especificado não existe.

## Exemplos

```c
public OnPlayerSpawn(playerid)
{
    // Dê aos jogadores armadura completa (100%) quando eles aparecerem.
    SetPlayerArmour(playerid, 100.0);
    return 1;
}
```
## Notas

:::tip

O nome da função é armadura, não armadura (americanizada). Isso é inconsistente com o restante de SA-MP, então lembre-se disso.

:::

:::warning

A armadura é arredondada para números inteiros: defina 50,15, mas obtenha 50,0

:::

## Funções Relacionadas

- [GetPlayerArmour](GetPlayerArmour): Descubra quanta armadura um jogador possui.
- [SetPlayerHealth](SetPlayerHealth): Define a saúde de um jogador.
- [GetPlayerHealth](GetPlayerHealth): Descubra quanta saúde um jogador tem.
