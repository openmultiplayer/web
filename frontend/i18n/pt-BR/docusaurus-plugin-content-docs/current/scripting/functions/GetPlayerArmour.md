---
title: GetPlayerArmour
sidebar_label: GetPlayerArmour
description: "Esta função armazena a armadura de um jogador em uma variável."
tags: ["player"]
---


## Descrição

Esta função armazena a armadura de um jogador em uma variável.

| Nome | Descrição |
| ------------- | --------------------------------------------------------- |
| playerid | O ID do jogador do qual você deseja obter a armadura.  |
| &Float:armour | O flutuador para armazenar a armadura, passado por referência. |

## Retornos

**1** - sucesso

**0** - falha (ou seja, jogador não conectado).

A armadura do jogador é armazenada na variável especificada.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/myarmour", true))
    {
		new string[40];

		new Float:armour;
		GetPlayerArmour(playerid, armour);

		format(string, sizeof(string), "SERVER: Your armour is %.2f percent", armour);
		SendClientMessage(playerid, 0xFFFFFFAA, string);
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

Mesmo que a armadura possa ser definida para valores quase infinitos no lado do servidor, os clientes individuais reportarão apenas valores até 255. Qualquer valor superior será resolvido; 256 torna-se 0, 257 torna-se 1, etc. A armadura é arredondada para números inteiros: defina 50,15, mas obtenha 50,0

:::

## Funções Relacionadas

- [SetPlayerArmour](SetPlayerArmour): Define a armadura de um jogador.
- [GetPlayerHealth](GetPlayerHealth): Descubra quanta saúde um jogador tem.
- [GetVehicleHealth](GetVehicleHealth): Verifique a integridade de um veículo.
