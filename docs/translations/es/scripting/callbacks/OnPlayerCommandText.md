---
título: OnPlayerCommandText
descripción: Este callback se llama cuando un jugador ingresa un comando dentro de la ventana de chat del cliente.
tags: ["player"]
---

## Descripción

Este callback se llama cuando un jugador ingresa un comando dentro de la ventana de chat del cliente. Los comandos son todo lo que empieza con una barra inclinada "/", por ejemplo, /ayuda.

| Nombre    | Descripción                                                   |
| --------- | ------------------------------------------------------------- |
| playerid  | El ID del jugador que ingresó un comando.                     |
| cmdtext[] | El comando que fue ingresado (incluyendo la barra inclinada). |

## Devoluciones

Siempre se llama primero en filterscripts por lo que devolviendo 1 acá bloqueará a otros scripts de verlo.

## Ejemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/ayuda", true))
    {
        SendClientMessage(playerid, -1, "SERVER: Este es el comando /ayuda !");
        return 1;
        // Devolviendo 1 informa al servidor que el comando fue procesado.
        // OnPlayerCommandText no se llamará en otros scripts.
    }
    return 0;
    // Devolviendo 0 informa al servidor que el comando no fue procesado por este script.
    // OnPlayerCommandText va a ser llamado en otros scripts hasta que uno devuelva 1.
    // Si ningún script devuelve 1, el mensaje 'SERVER: Unkown Command' va a ser mostrado al jugador.
}
```

## Notas

<TipNPCCallbacks />

## Funciones Relacionadas

- [SendRconCommand](../functions/SendRconCommand): Envía un comando RCON vía script.
