---
título: OnPlayerPickUpPickup
descripción: Se llama cuando un jugador recoge un pickup creado con CreatePickup.
tags: ["player"]
---

## Descripción

Se llama cuando un jugador recoge un pickup creado con CreatePickup.

| Nombre   | Descripción                                     |
| -------- | ----------------------------------------------- |
| playerid | El ID del jugador que recogió el pickup.        |
| pickupid | El ID del pickup, devuelto por CreatePickup.    |

## Devoluciones

Siempre se llama primero en el gamemode.

## Ejemplos

```c
new pickup_Cash;
new pickup_Health;

public OnGameModeInit()
{
    pickup_Cash = CreatePickup(1274, 2, 0.0, 0.0, 9.0);
    pickup_Health = CreatePickup(1240, 2, 0.0, 0.0, 9.0);
    return 1;
}

public OnPlayerPickUpPickup(playerid, pickupid)
{
    if (pickupid == pickup_Cash)
    {
        GivePlayerMoney(playerid, 1000); //Cuando el jugador pasa por el pickup con ícono de dinero, le da $1000
    }
    else if (pickupid == pickup_Health)
    {
        SetPlayerHealth(playerid, 100.0); //Cuando el jugador pasa por el pickup con ícono de corazón, le da 100 de vida
    }
    return 1;
}
```

## Funciones Relacionadas

- [CreatePickup](../functions/CreatePickup): Crea un pickup.
- [DestroyPickup](../functions/DestroyPickup): Destruye un pickup.
