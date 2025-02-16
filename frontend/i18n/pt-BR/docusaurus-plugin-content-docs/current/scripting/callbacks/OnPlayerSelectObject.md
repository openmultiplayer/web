---
title: OnPlayerSelectObject
description: Esta callback é chamada quando um jogador seleciona um objeto após SelectObject ser usado.
tags: ["player"]
---

## Descrição

Esta callback é chamada quando um jogador seleciona um objeto após SelectObject ser usado.

| Nome     | Descrição                                                |
| -------- | ---------------------------------------------------------- |
| playerid | O ID do jogador que selecionou o objeto                    |
| type     | O [tipo](../resources/selectobjecttypes) de seleção        |
| objectid | O ID do objeto selecionado                                 |
| modelid  | O MODELO do objeto selecionado                             |
| Float:fX | A posição X do objeto selecionado                          |
| Float:fY | A posição Y do objeto selecionado                          |
| Float:fZ | A posição Z do objeto selecionado                          |

## Retorno

1 - Irá previnir que outro filterscript receba esta callback.

0 - Indica que esta callback será passada para o próximo filterscript.

Sempre é chamada primeiro em filterscripts.

## Exemplos

```c
public OnPlayerSelectObject(playerid, type, objectid, modelid, Float:fX, Float:fY, Float:fZ)
{
    printf("Jogador %d selecionou o objeto %d", playerid, objectid);
    if (type == SELECT_OBJECT_GLOBAL_OBJECT)
    {
        EditObject(playerid, objectid);
    }
    else
    {
        EditPlayerObject(playerid, objectid);
    }
    SendClientMessage(playerid, 0xFFFFFFFF, "Agora você pode editar seu objeto"");
    return 1;
}
```

## Funções Relacionadas

- [SelectObject](../functions/SelectObject): Seleciona um objeto.
