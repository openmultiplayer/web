---
title: AttachCameraToPlayerObject
sidebar_label: AttachCameraToPlayerObject
description: Anexa a câmera de um jogador a um objeto do jogador.
tags: ["player", "camera"]
---

## Descrição

Anexa a câmera de um jogador a um objeto do jogador. O jogador consegue mover sua câmera enquanto ela está anexada a um objeto. Pode ser usada com MovePlayerObject e AttachPlayerObjectToVehicle.

| Nome           | Descrição                                                                          |
| -------------- | ---------------------------------------------------------------------------------- |
| playerid       | O ID do jogador que terá sua câmera anexada a um objeto do jogador.                |
| playerobjectid | O ID do objeto do jogador ao qual a câmera do jogador será anexada.                |

## Retorno

Esta função não retorna valores específicos.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/attach", false))
    {
        new playerobject = CreatePlayerObject(playerid, 1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
        AttachCameraToPlayerObject(playerid, playerobject);
        SendClientMessage(playerid, 0xFFFFFFAA, "Sua câmera agora está anexada a um objeto.");
        return 1;
    }
    return 0;
}
```

## Notas

:::tip

O objeto do jogador deve ser criado antes de tentar anexar a câmera do jogador a ele.

:::

## Funções Relacionadas

- [AttachCameraToObject](AttachCameraToObject): Anexa a câmera do jogador a um objeto global.
- [SetPlayerCameraPos](SetPlayerCameraPos): Define a posição da câmera de um jogador.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): Define para onde a câmera de um jogador deve apontar.