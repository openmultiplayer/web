---
título: OnPlayerExitedMenu
descripción: Se llama cuando un jugador sale de un menú.
tags: ["player", "menu"]
---

## Descripción

Se llama cuando un jugador sale de un menú.

| Nombre   | Descripción                               |
| -------- | ----------------------------------------- |
| playerid | El ID del jugador que salió del menú.     |

## Devoluciones

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerExitedMenu(playerid)
{
    TogglePlayerControllable(playerid,1); // descongela al jugador cuando este sale de un menú
    return 1;
}
```

## Funciones Relacionadas

- [CreateMenu](../functions/CreateMenu): Crea un menú.
- [DestroyMenu](../functions/DestroyMenu): Destruye un menú.
