---
título: OnPlayerEditObject
descripción: Este callback se llama cuando un jugador termina de editar un objeto (EditObject/EditPlayerObject).
tags: ["player"]
---

<VersionWarnES name='callback' version='SA-MP 0.3e' />

## Descripción

Este callback se llama cuando un jugador termina de editar un objeto (EditObject/EditPlayerObject).

| Nombre                 | Descripción                                                     |
|------------------------|-----------------------------------------------------------------|
| playerid               | El ID del jugador que editó un objeto.                          |
| playerobject           | 0 si fue un objeto global o 1 si fue un objeto de jugador.      |
| objectid               | El ID del objeto que fue editado.                               |
| EDIT_RESPONSE:response | El [tipo de respuesta](../resources/objecteditionresponsetypes) |
| Float:fX               | La coordenada X para el objeto que fue editado.                 |
| Float:fY               | La coordenada Y para el objeto que fue editado.                 |
| Float:fZ               | La coordenada Z para el objeto que fue editado.                 |
| Float:fRotX            | La rotación X para el objeto que fue editado.                   |
| Float:fRotY            | La rotación Y para el objeto que fue editado.                   |
| Float:fRotZ            | La rotación Z para el objeto que fue editado.                   |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerEditObject(playerid, playerobject, objectid, EDIT_RESPONSE:response, Float:fX, Float:fY, Float:fZ, Float:fRotX, Float:fRotY, Float:fRotZ)
{
    new
        Float: oldX,
        Float: oldY,
        Float: oldZ,
        Float: oldRotX,
        Float: oldRotY,
        Float: oldRotZ;

    GetObjectPos(objectid, oldX, oldY, oldZ);
    GetObjectRot(objectid, oldRotX, oldRotY, oldRotZ);
    if (!playerobject) //Si es un objeto global, sincroniza la posición para los demás jugadores
    {
        if (!IsValidObject(objectid))
        {
            return 1;
        }
        SetObjectPos(objectid, fX, fY, fZ);
        SetObjectRot(objectid, fRotX, fRotY, fRotZ);
    }

    switch (response)
    {
        case EDIT_RESPONSE_FINAL:
        {
            // El jugador clickeó en el ícono de guardar
            // Hacer algo acá para guardar la posición y rotación del objeto actualizado
        }

        case EDIT_RESPONSE_CANCEL:
        {
            //El jugador canceló, entonces ponemos el objeto de vuelta a su posición antigua
            if (!playerobject) //El objeto no es un objeto de jugador
            {
                SetObjectPos(objectid, oldX, oldY, oldZ);
                SetObjectRot(objectid, oldRotX, oldRotY, oldRotZ);
            }
            else
            {
                SetPlayerObjectPos(playerid, objectid, oldX, oldY, oldZ);
                SetPlayerObjectRot(playerid, objectid, oldRotX, oldRotY, oldRotZ);
            }
        }
    }
    return 1;
}
```

## Notas

:::warning

Cuando se usa 'EDIT_RESPONSE_UPDATE' sé consciente de que este callback no será llamado cuándo se lanze una edición en progreso, resultando en que la última actualización de 'EDIT_RESPONSE_UPDATE' quede fuera de sincronización con la posición actual de los objetos.

:::

## Funciones Relacionadas

- [EditObject](../functions/EditObject): Editar un objeto.
- [CreateObject](../functions/CreateObject): Crear un objeto.
- [DestroyObject](../functions/DestroyObject): Destruir un objeto.
- [MoveObject](../functions/MoveObject): Mover un objeto.
