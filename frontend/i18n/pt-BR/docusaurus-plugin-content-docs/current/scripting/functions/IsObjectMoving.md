---
title: IsObjectMoving
sidebar_label: IsObjectMoving
description: "Verifica se o objectid fornecido está se movendo."
tags: ["object"]
---


## Descrição

Verifica se o objectid fornecido está se movendo.

| Nome | Descrição |
| -------- | -------------------------------------------- |
| objectid | O objectid que você deseja verificar se está em movimento. |

## Retornos

**true** se o objeto estiver se movendo, **false** se não estiver.

## Exemplos

```c
new gAirportGate;

public OnGameModeInit()
{
    gAirportGate = CreateObject(980, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);

    MoveObject(gAirportGate, 0.0, 0.0, 15.0, 1.00);

	if (IsObjectMoving(gAirportGate))
	{
		StopObject(gAirportGate);
	}
    return 1;
}

```
## Funções Relacionadas

- [MoveObject](MoveObject): Mova um objeto.
- [StopObject](StopObject): Impede o movimento de um objeto.

## Callbacks Relacionadas

- [OnObjectMoved](../callbacks/OnObjectMoved): Chamado quando um objeto para de se mover.
