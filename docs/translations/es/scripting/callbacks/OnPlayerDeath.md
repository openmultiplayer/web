---
título: OnPlayerDeath
descripción: Este callback se llama cuando un jugador muere, ya sea suicidándose o siendo asesinado por otro jugador.
tags: ["player"]
---

## Descripción

Este callback se llama cuando un jugador muere, ya sea suicidándose o siendo asesinado por otro jugador.

| Nombre        | Descripción                                                                             |
|---------------|-----------------------------------------------------------------------------------------|
| playerid      | El ID del jugador que murió.                                                            |
| killerid      | El ID del jugador que mató al jugador que murió, o INVALID_PLAYER_ID si no fue ninguno. |
| WEAPON:reason | El ID de la causa de la muerte del jugador.                                             |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
new PlayerDeaths[MAX_PLAYERS];
new PlayerKills[MAX_PLAYERS];

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    SendDeathMessage(killerid, playerid, reason); //Muestra el asesinato en la tabla de asesinatos

    //Comprueba si 'killerid' es válida antes de hacer cualquier cosa con ella.
    if (killerid != INVALID_PLAYER_ID)
    {
        PlayerKills[killerid] ++;
    }

    //Fuera de la comprobación, hacer cosas sobre playerid (siempre es válido)
    PlayerDeaths[playerid] ++;
    return 1;
}
```

## Notas

:::tip

La razón retornará 37 (lanzallamas) por cualquier origen de fuego (ej. molotov, 18). La razón retornará 51 de cualquier arma que cree una explosión (ej. Lanzamisiles, granada). No es necesario comprobar si killerid es válido antes de usarlo en SendDeathMessage, ya que INVALID_PLAYER_ID es un parámetro válido en esa función. playerid es el único que puede llamar el callback. (bueno saberlo para anti fake death)

:::

:::warning

TENÉS que comprobar que 'killerid' sea válido (no INVALID_PLAYER-ID) antes de usarlo en un array (o realmente en donde sea), ya que causará que el script OnPlayerDeath crashee (no el script entero). Esto es debido a que INVALID_PLAYER_ID es definido como 65535, y si un array sólo tiene 'MAX_PLAYERS' elementos, ejemplo 500, vas a estar intentando acceder a un índice por arriba de 499, que está fuera de alcance (out of bonds).

:::

## Funciones Relacionadas

- [SendDeathMessage](../functions/SendDeathMessage): Añadir un asesinato a la lista de muertes.
- [SetPlayerHealth](../functions/SetPlayerHealth): Establecer la salud (vida) de un jugador.
