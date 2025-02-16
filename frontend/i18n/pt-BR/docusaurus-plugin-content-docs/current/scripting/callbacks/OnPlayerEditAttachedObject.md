---
title: OnPlayerEditAttachedObject
sidebar_label: OnPlayerEditAttachedObject
description: Esta callback é chamada quando um jogador termina o modo de edição de objetos anexados.
tags: ["player"]
---

## Descrição

Esta callback é chamada quando um jogador termina o modo de edição de objetos anexados.

| Name                   | Descrição                                                        |
|------------------------|------------------------------------------------------------------|
| playerid               | O ID do jogador que terminou a edição                            |
| EDIT_RESPONSE:response | 0 se foi cancelado (ESC), ou 1 se o botão de salvar foi clicado. |
| index                  | The index of the attached object (0-9)                           |
| modelid                | O modelo do objeto que foi anexado                               |
| boneid                 | O ID da parte em que o modelo foi anexado                        |
| Float:fOffsetX         | O desclocamento de X para o objeto editado.                      |
| Float:fOffsetY         | O desclocamento de Y para o objeto editado.                      |
| Float:fOffsetZ         | O desclocamento de Z para o objeto editado.                      |
| Float:fRotX            | A rotação de X para o objeto editado.                            |
| Float:fRotY            | A rotação de Y para o objeto editado.                            |
| Float:fRotZ            | A rotação de Z para o objeto editado.                            |
| Float:fScaleX          | A escala de X para o objeto editado.                             |
| Float:fScaleY          | A escala de Y para o objeto editado.                             |
| Float:fScaleZ          | A escala de Z para o objeto editado.                             |

## Retorno

1 - Irá previnir que outro filterscript receba esta callback.

0 - Indica que esta callback será passada para o próximo filterscript.

Sempre é chamada primeiro em filterscripts.

## Exemplos

```c
enum attached_object_data
{
    Float:ao_x,
    Float:ao_y,
    Float:ao_z,
    Float:ao_rx,
    Float:ao_ry,
    Float:ao_rz,
    Float:ao_sx,
    Float:ao_sy,
    Float:ao_sz
}

new ao[MAX_PLAYERS][MAX_PLAYER_ATTACHED_OBJECTS][attached_object_data];

// Os dados devem ser armazenados na array acima.

public OnPlayerEditAttachedObject(playerid, EDIT_RESPONSE:response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
{
    if (response)
    {
        SendClientMessage(playerid, COLOR_GREEN, "Anexo de objeto salvo.");

        ao[playerid][index][ao_x] = fOffsetX;
        ao[playerid][index][ao_y] = fOffsetY;
        ao[playerid][index][ao_z] = fOffsetZ;
        ao[playerid][index][ao_rx] = fRotX;
        ao[playerid][index][ao_ry] = fRotY;
        ao[playerid][index][ao_rz] = fRotZ;
        ao[playerid][index][ao_sx] = fScaleX;
        ao[playerid][index][ao_sy] = fScaleY;
        ao[playerid][index][ao_sz] = fScaleZ;
    }
    else
    {
        SendClientMessage(playerid, COLOR_RED, "Anexo de objeto não salvo.");

        new i = index;
        SetPlayerAttachedObject(playerid, index, modelid, boneid, ao[playerid][i][ao_x], ao[playerid][i][ao_y], ao[playerid][i][ao_z], ao[playerid][i][ao_rx], ao[playerid][i][ao_ry], ao[playerid][i][ao_rz], ao[playerid][i][ao_sx], ao[playerid][i][ao_sy], ao[playerid][i][ao_sz]);
    }
    return 1;
}
```

## Notas

:::warning

Edições devem ser discartadas se a resposta for '0' (cancelado). Isso deve ser feito armazenando os valores em uma arrat ANTES de usar EditAttachedObject.

:::

## Funções Relacionadas

- [EditAttachedObject](../functions/EditAttachedObject): Edita um objeto anexado.
- [SetPlayerAttachedObject](../functions/SetPlayerAttachedObject): Anexa um objeto a um jogador.
