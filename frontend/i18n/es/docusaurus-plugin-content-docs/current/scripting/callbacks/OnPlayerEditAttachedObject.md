---
título: OnPlayerEditAttachedObject
descripción: Este callback se llama cuando un jugador sale del modo edición de objetos adjuntos.
tags: ["player"]
---

## Descripción

Este callback se llama cuando un jugador sale del modo edición de objetos adjuntos.

| Nombre                 | Descripción                                             |
|------------------------|---------------------------------------------------------|
| playerid               | El ID del jugador que salió del modo de edición.        |
| EDIT_RESPONSE:response | 0 si canceló o 1 si clickeó el ícono de guardar.        |
| index                  | The index of the attached object (0-9)                  |
| modelid                | El modelo del objeto adjunto que fue editado.           |
| boneid                 | El hueso del objeto adjunto que fue editado.            |
| Float:fOffsetX         | La coordenada X para el objeto adjunto que fue editado. |
| Float:fOffsetY         | La coordenada Y para el objeto adjunto que fue editado. |
| Float:fOffsetZ         | La coordenada Z para el objeto adjunto que fue editado. |
| Float:fRotX            | La rotación X para el objeto adjunto que fue editado.   |
| Float:fRotY            | La rotación Y para el objeto adjunto que fue editado.   |
| Float:fRotZ            | La rotación Z para el objeto adjunto que fue editado.   |
| Float:fScaleX          | La escala X para el objeto adjunto que fue editado.     |
| Float:fScaleY          | La escala Y para el objeto adjunto que fue editado.     |
| Float:fScaleZ          | La escala Z para el objeto adjunto que fue editado.     |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

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

// Los datos deberían ser guardados en el array anterior cuando objetos son adjuntados.

public OnPlayerEditAttachedObject(playerid, EDIT_RESPONSE:response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
{
    if (response)
    {
        SendClientMessage(playerid, COLOR_GREEN, "Edición de objeto adjunto guardada.");

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
        SendClientMessage(playerid, COLOR_RED, "Edición de objeto adjunto no guardada.");

        new i = index;
        SetPlayerAttachedObject(playerid, index, modelid, boneid, ao[playerid][i][ao_x], ao[playerid][i][ao_y], ao[playerid][i][ao_z], ao[playerid][i][ao_rx], ao[playerid][i][ao_ry], ao[playerid][i][ao_rz], ao[playerid][i][ao_sx], ao[playerid][i][ao_sy], ao[playerid][i][ao_sz]);
    }
    return 1;
}
```

## Notas

:::warning

Las ediciones deberían descartarse si response fue '0' (cancelado). Esto debe hacerse almacenando los valores en un array ANTES de usar EditAttachedObject.

:::

## Funciones Relacionadas

- [EditAttachedObject](../functions/EditAttachedObject): Editar un objeto adjunto.
- [SetPlayerAttachedObject](../functions/SetPlayerAttachedObject): Adjuntar un objeto a un jugador.
