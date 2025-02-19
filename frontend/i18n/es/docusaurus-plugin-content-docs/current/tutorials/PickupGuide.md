---
title: Guía de Pickup
sidebar_label: Guía de Pickup
---

Un breve tutorial que describe cómo usar pickups.

## Definir el pickup

Lo primero que se debe hacer al crear pickup es crear su identificación. Esto se hará en una variable global. Para este ejemplo usaremos el nombre "gMiPickup".

```c
new gMiPickup;
```

## Creando la pickup

Hay dos formas de crear pickup [CreatePickup](../scripting/functions/CreatePickup) y [AddStaticPickup](../scripting/functions/AddStaticPickup). AddStaticPickup no hay un id cuando esta creado, no se puede destruir y no mas puede usar en OnGameModeInit, para este guía vamos a usar [CreatePickup](../scripting/functions/CreatePickup).

**La forma de [CreatePickup](../scripting/functions/CreatePickup) es:**

**Parameters:**

| modelo       | El modelo que queres usar                                                                                 |
| ------------ | --------------------------------------------------------------------------------------------------------- |
| typo         | El typo de pickup que es utiliza                                                                          |
| Float:X      | La X-coordenada para el pickup.                                                                           |
| Float:Y      | La Y-coordinate para el pickup.                                                                           |
| Float:Z      | La Z-coordinate para el pickup.                                                                           |
| Virtualworld | El mundo virtual de la pickup. La mundo virtual de -1 se va a ensenar para todos los mundos virtruales. |

Para este ejemplo, crearemos un pickup en Grove Street.

Ahora debemos decidir qué modelo aparecerá en el mundo, hay muchos modelos para elegir, algunos se enumeran en el sitio externo [aquí] (https://dev.prineside.com/en/gtasa_samp_model_id), aquí elija el número de modelo 1274, que es el signo de dólar.

Finalmente, necesitamos un [Tipo] (../scripting/resources/pickuptypes) para la pickup, en la misma página con los modelos de pickup hay una lista de tipos de pickup que describen lo que hacen los typos. Queremos que esta recolección desaparezca cuando la levante, para que no pueda levantarla repetidamente, pero que vuelva a aparecer después de unos minutos para que pueda levantarla nuevamente, el typo 2 hace exactamente esto.

Las pickups se crean más comúnmente cuando se inicia el script, en [OnGameModeInit](../scripting/callbacks/OnGameModeInit) o en [OnFilterScriptInit](../scripting/callbacks/OnFilterScriptInit) dependiendo del tipo de la script, también se puede ir en cualquier función (por ejemplo, podría crear un script de deja los armas del jugardor, eso se usaría OnPlayerDeath para crear pickup de armas).

Aquí hacemos la pickup en la variable 'gMiPickup':


```c
gMiPickup = CreatePickup(1274, 2, 2491.7900, -1668.1653, 13.3438, -1);
```

Cuando recoges una pickup, se llama la función [OnPlayerPickUpPickup](../scripting/callbacks/OnPlayerPickUpPickup), pasando playerid (el jugador que recogió la pickup) y pickupid (la ID de la pickup que se recogió). 

Algunos typos de pickup están diseñados para funcionar automáticamente, por lo que no es necesario hacer nada en OnPlayerPickUpPickup. Consulte la página [Typos de pickup](../scripting/resources/pickuptypes) para obtener más información.

Cuando un jugador recoge nuestra nueva pickup, queremos darle $100, para hacer esto primero debemos verificar que haya recogido nuestra pickup de dólares y no una diferente. Cuando hayamos hecho eso, podemos darles los $100:

```c
public OnPlayerPickUpPickup(playerid, pickupid)
{
    // Checka que el jugador esta en la correcta pickup
    if(pickupid == gMiPickup)
    {
        // Mensaje a al jugador
        SendClientMessage(playerid, 0xFFFFFFFF, "You received $100!");
        // Darle dinero
        GivePlayerMoney(playerid, 100);
    }
    return 1;
}
```

¡Felicidades, ahora sabe cómo crear y manejar pickups!
