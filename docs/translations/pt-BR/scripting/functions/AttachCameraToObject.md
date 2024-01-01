---
title: AttachCameraToObject
description: Você pode usar esta função para anexar a câmera do jogador a objetos.
tags: []
---

Esta função foi implementada no SA-MP 0.3e e não funcionará em versões anteriores.

## Descrição

Você pode usar esta função para anexar a câmera do jogador a objetos.

| Nome     | Descrição                                                |
| -------- | -------------------------------------------------------- |
| playerid | O ID do jogador que terá a sua câmera anexada ao objeto. |
| objectid | O ID do objeto que deseja anexar à câmera do jogador.    |

## Retorno

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/attach", false))
    {
        new objectId = CreateObject(1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
        AttachCameraToObject(playerid, objectId);
        SendClientMessage(playerid, 0xFFFFFFAA, "Sua câmera está agora anexada ao objeto.");
        return 1;
    }
    return 0;
}
```

## Notas

:::tip

Você precisa criar o objeto primeiro, antes de tentar conectar uma câmera do jogador.

:::

## Funções Relacionadas

- [AttachCameraToPlayerObject](AttachCameraToPlayerObject): Anexa a câmera do jogador a um objeto de jogador (player-object).
