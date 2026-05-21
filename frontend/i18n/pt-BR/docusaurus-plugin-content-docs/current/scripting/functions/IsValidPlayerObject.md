---
title: IsValidPlayerObject
sidebar_label: IsValidPlayerObject
description: "Verifica se o objeto ID fornecido é válido para o jogador determinado."
tags: ["player", "object", "playerobject"]
---


## Descrição

Verifica se o objeto ID fornecido é válido para o jogador determinado.

| Nome | Descrição |
| -------- | ----------------------------------------------------- |
| playerid | O ID do jogador cujo objeto de jogador será validado. |
| objectid | O ID do objeto a ser validado.                     |

## Retornos

**true** se o objeto existir, **false** se não existir.

## Exemplos

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
	// Verifique se um objeto é válido (existe) antes de excluí-lo
	if (IsValidPlayerObject(playerid, gPlayerObject[playerid]))
	{
		DestroyPlayerObject(playerid, gPlayerObject[playerid]);
	}
    return 1;
}
```
## Funções Relacionadas

- [CreatePlayerObject](CreatePlayerObject): Crie um objeto para apenas um jogador.
- [DestroyPlayerObject](DestroyPlayerObject): Destrua um objeto de jogador.
- [MovePlayerObject](MovePlayerObject): Mova um objeto de jogador.
- [StopPlayerObject](StopPlayerObject): Impede o movimento de um objeto do jogador.
- [SetPlayerObjectPos](SetPlayerObjectPos): Define a posição de um objeto do jogador.
- [SetPlayerObjectRot](SetPlayerObjectRot): Define a rotação de um objeto de jogador.
- [GetPlayerObjectPos](GetPlayerObjectPos): Localize um objeto de jogador.
- [GetPlayerObjectRot](GetPlayerObjectRot): Verifica a rotação de um objeto do jogador.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Anexe um objeto de jogador a um jogador.
- [CreateObject](CreateObject): Crie um objeto.
- [DestroyObject](DestroyObject): Destrua um objeto.
- [IsValidObject](IsValidObject): Verifica se determinado objeto é válido.
- [MoveObject](MoveObject): Mova um objeto.
- [StopObject](StopObject): Impede o movimento de um objeto.
- [SetObjectPos](SetObjectPos): Define a posição de um objeto.
- [SetObjectRot](SetObjectRot): Define a rotação de um objeto.
- [GetObjectPos](GetObjectPos): Localize um objeto.
- [GetObjectRot](GetObjectRot): Verifica a rotação de um objeto.
- [AttachObjectToPlayer](AttachObjectToPlayer): Anexe um objeto a um jogador.
