---
title: AttachCameraToObject
description: Możesz używać tej funkcji, aby przyczepiać kamerę gracza do obiektów.
tags: []
---

## Opis

Możesz używać tej funkcji, aby przyczepiać kamerę gracza do obiektów.

| Nazwa    | Opis                                                      |
| -------- | --------------------------------------------------------- |
| playerid | ID gracza, którego kamera będzie przyczepiona do obiektu. |
| objectid | ID obiektu, do którego chcesz przyczepić kamerę gracza.   |

## Zwracane wartości

Ta funkcja nie zwraca żadnych konkretnych wartości.

## Przykłady

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/attach", false))
    {
        new objectId = CreateObject(1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
        AttachCameraToObject(playerid, objectId);
        SendClientMessage(playerid, 0xFFFFFFAA, "Twoja kamera została przyczepiona do obiektu.");
        return 1;
    }
    return 0;
}
```

## Uwagi

:::tip

Musisz najpierw utworzyć obiekt, zanim spróbujesz przyczepić do niego kamerę gracza.

:::

## Powiązane funkcje

- [AttachCameraToPlayerObject](AttachCameraToPlayerObject): Przyczepia kamerę gracza do
