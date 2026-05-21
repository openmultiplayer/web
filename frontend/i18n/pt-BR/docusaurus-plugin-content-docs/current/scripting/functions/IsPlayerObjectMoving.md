---
title: IsPlayerObjectMoving
sidebar_label: IsPlayerObjectMoving
description: "Verifica se o objectid do jogador fornecido está se movendo."
tags: ["player", "object", "playerobject"]
---


## Descrição

Verifica se o objectid do jogador fornecido está se movendo.

| Nome | Descrição |
| -------- | ---------------------------------------------------- |
| playerid | O ID do jogador cujo objeto de jogador está verificado. |
| objectid | O ID do objeto do jogador que você deseja verificar está se movendo.  |

## Retornos

1 se o objeto do jogador estiver se movendo, 0 se não estiver.

## Exemplos

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    MovePlayerObject(playerid, gPlayerObject[playerid], 2001.195679, 1547.113892, 10.000000, 2.0);

	if (IsPlayerObjectMoving(playerid, gPlayerObject[playerid]))
	{
		StopPlayerObject(playerid, gPlayerObject[playerid]);
	}
    return 1;
}
```
## Funções Relacionadas

- [CreatePlayerObject](CreatePlayerObject): Crie um objeto para apenas um jogador.
- [DestroyPlayerObject](DestroyPlayerObject): Destrua um objeto de jogador.
- [IsValidPlayerObject](IsValidPlayerObject): Verifica se determinado objeto do jogador é válido.
- [MovePlayerObject](MovePlayerObject): Mova um objeto de jogador.
- [StopPlayerObject](StopPlayerObject): Impede o movimento de um objeto do jogador.
- [SetPlayerObjectPos](SetPlayerObjectPos): Define a posição de um objeto do jogador.
- [SetPlayerObjectRot](SetPlayerObjectRot): Define a rotação de um objeto do jogador.
- [GetPlayerObjectPos](GetPlayerObjectPos): Localize um objeto de jogador.
- [GetPlayerObjectRot](GetPlayerObjectRot): Verifica a rotação de um objeto do jogador.
- [AttachPlayerObjectToPlayer](AttachObjectToPlayer): Anexe um objeto de jogador a um jogador.
- [CreateObject](CreateObject): Crie um objeto.
- [DestroyObject](DestroyObject): Destrua um objeto.
- [IsValidObject](IsValidObject): Verifica se determinado objeto é válido.
- [MoveObject](MoveObject): Mova um objeto.
- [IsObjectMoving](IsObjectMoving): Verifique se o objeto está se movendo.
- [StopObject](StopObject): Impede o movimento de um objeto.
- [SetObjectPos](SetObjectPos): Define a posição de um objeto.
- [SetObjectRot](SetObjectRot): Define a rotação de um objeto.
- [GetObjectPos](GetObjectPos): Localize um objeto.
- [GetObjectRot](GetObjectRot): Verifica a rotação de um objeto.
- [AttachObjectToPlayer](AttachObjectToPlayer): Anexe um objeto a um jogador.

## Callbacks Relacionadas

- [OnPlayerObjectMoved](../callbacks/OnPlayerObjectMoved): Chamado quando um objeto do jogador para de se mover.
