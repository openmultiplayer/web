---
título: OnPlayerGiveDamageActor
descripción: Este callback se llama cuando un jugador le hace daño a un actor.
tags: ["player"]
---

<VersionWarnES name='callback' version='SA-MP 0.3.7' />

## Descripción

Este callback se llama cuando un jugador le hace daño a un actor.

| Nombre          | Descripción                                             |
|-----------------|---------------------------------------------------------|
| playerid        | El ID del jugador que hizo daño.                        |
| damaged_actorid | El ID del actor que recibió daño.                       |
| Float:amount    | La cantidad de vida/chaleco que damaged_actorid perdió. |
| WEAPON:weaponid | La razón que causó el daño.                             |
| bodypart        | La parte del cuerpo que fue golpeada.                   |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerGiveDamageActor(playerid, damaged_actorid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128], attacker[MAX_PLAYER_NAME];
    new weaponname[24];
    GetPlayerName(playerid, attacker, sizeof (attacker));
    GetWeaponName(weaponid, weaponname, sizeof (weaponname));

    format(string, sizeof(string), "%s le hizo %.0f de daño al actor id %d, arma: %s", attacker, amount, damaged_actorid, weaponname);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notas

:::tip

Esta función no es llamada cuando el actor es establecido invulnerable (QUE ASÍ SE ESTABLECE POR DEFECTO). Vea [SetActorInvulnerable](../functions/SetActorInvulnerable).

:::

## Funciones Relacionadas

- [CreateActor](../functions/CreateActor): Crear un actor (NPC estático).
- [SetActorInvulnerable](../functions/SetActorInvulnerable): Establecer invulnerable al actor.
- [SetActorHealth](../functions/SetActorHealth): Establecer la salud de un actor.
- [GetActorHealth](../functions/GetActorHealth): Conseguir la salud de un actor.
- [IsActorInvulnerable](../functions/IsActorInvulnerable): Comprobar si el actor es invulnerable.
- [IsValidActor](../functions/IsValidActor): Comprobar si el ID del actor es válida.

## Callbacks Relacionadas

- [OnActorStreamOut](OnActorStreamOut): Se llama cuando un actor es dejado de cargar por el cliente de un jugador.
- [OnPlayerStreamIn](OnPlayerStreamIn): Se llama cuando un jugador se comienza a cargar por el cliente de otro jugador. 
