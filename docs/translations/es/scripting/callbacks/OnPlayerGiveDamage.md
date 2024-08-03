---
título: OnPlayerGiveDamage
descripción: Este callback se llama cuando un jugador le hace daño a otro jugador.
tags: ["player"]
---

## Descripción

Este callback se llama cuando un jugador le hace daño a otro jugador.

| Nombre    | Descripción                                                                                                          |
| --------- | -------------------------------------------------------------------------------------------------------------------- |
| playerid  | El ID del jugador que hizo daño.                                                                                     |
| damagedid | El ID del jugador que recibió daño.                                                                                  |
| Float:amount    | La cantidad de chaleco/vida que el jugador dañado perdió (combinados).                                               |
| WEAPON:weaponid  | La razón (arma/causa) que causó el daño.                                                                             |
| bodypart  | La parte del cuerpo que fue golpeada. |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerGiveDamage(playerid, damagedid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128], victim[MAX_PLAYER_NAME], attacker[MAX_PLAYER_NAME];
    new weaponname[24];
    GetPlayerName(playerid, attacker, sizeof (attacker));
    GetPlayerName(damagedid, victim, sizeof (victim));

    GetWeaponName(weaponid, weaponname, sizeof (weaponname));
    format(string, sizeof(string), "%s le hizo %.0f de daño a %s, arma: %s, parte del cuerpo: %d", attacker, amount, victim, weaponname,bodypart);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notas

:::tip

Tener en cuenta que esta funcion puede ser imprecisa en algunos casos. Si lo que buscás es prevenir a ciertos jugadores de dañarse entre sí, usá SetPlayerTeam. 'weaponid' va a retornar 37 (lanzallamas) de cualquier origen de fuego (ej. molotov, 18), 'weaponid' retornará 51 ante cualquier arma que cree una explosión (ej. lanzamisiles, granada). playerid es el único que puede llamar este callback. La cantidad de daño es siempre el daño máximo que el weaponid puede hacer, incluso cuando la vida restante es menor que el daño máximo de esta. Entonces cuando un jugador tiene 100.0 de salud y recibe un tiro con una Desert Eagle que tiene un valor de daño de 46.2, tomará 3 disparos para matar a ese jugador. Los 3 disparos mostrarán una cantidad de daño de 46.2 sin importar que cuando el último disparo impacta, el jugador tiene sólo 7.6 de salud restante. 

:::
