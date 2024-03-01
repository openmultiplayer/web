---
title: AttachPlayerObjectToVehicle
description: Przyczepia obiekt gracza do pojazdu.
tags: ["player", "vehicle"]
---

## Opis

Przyczepia obiekt gracza do pojazdu.

| Nazwa         | Opis                                                  |
| ------------- | ----------------------------------------------------- |
| playerid      | ID gracza, dla którego obiekt został stworzony.       |
| objectid      | ID obiektu, który ma zostać przyczepiony do pojazdu.  |
| vehicleid     | ID pojazdu, do którego obiekt ma zostać przyczepiony. |
| Float:OffsetX | Pozycja przyczepianego obiektu (koordynat X).         |
| Float:OffsetY | Pozycja przyczepianego obiektu (koordynat Y).         |
| Float:OffsetZ | Pozycja przyczepianego obiektu (koordynat Z).         |
| Float:RotX    | Rotacja przyczepianego obiektu (koordynat X).         |
| Float:RotY    | Rotacja przyczepianego obiektu (koordynat Y).         |
| Float:RotZ    | Rotacja przyczepianego obiektu (koordynat Z).         |

## Zwracane wartości

Ta funkcja nie zwraca żadnych konkretnych wartości.

## Przykłady

```c
public OnPlayerStateChange(playerid, newstate, oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER) // Jeżeli gracz wsiadł do pojazdu
    {
        // Przyczepmy potężną krowę.
        new cow_object = CreatePlayerObject(playerid, 16442, 0, 0, 0, 0, 0, 0);

        AttachPlayerObjectToVehicle(playerid, cow_object, GetPlayerVehicleID(playerid), 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
    }
}
```

## Uwagi

:::tip

Obiekt musi zostać utworzony, zanim spróbujemy przyczepić go do pojazdu.

:::

## Powiązane funkcje

- [CreatePlayerObject](CreatePlayerObject.md): Tworzy obiekt dla konkretnego gracza.
- [DestroyPlayerObject](DestroyPlayerObject.md): Kasuje obiekt gracza.
- [IsValidPlayerObject](IsValidPlayerObject.md): Sprawdza, czy podany obiekt gracza istnieje.
- [MovePlayerObject](MovePlayerObject.md): Przesuwa obiekt gracza.
- [StopPlayerObject](StopPlayerObject.md): Zatrzymuje obiekt gracza.
- [SetPlayerObjectRot](SetPlayerObjectRot.md): Ustawia rotację obiektu gracza.
- [GetPlayerObjectPos](GetPlayerObjectPos.md): Podaje pozycję obiektu gracza.
- [SetPlayerObjectPos](SetPlayerObjectPos.md): Ustawia pozycję obiektu gracza.
- [GetPlayerObjectRot](GetPlayerObjectRot.md): Podaje rotację obiektu gracza.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer.md): Przyczepia obiekt gracza do gracza.
- [CreateObject](CreateObject.md): Tworzy obiekt.
- [DestroyObject](DestroyObject.md): Kasuje obiekt.
- [IsValidObject](IsValidObject.md): Sprawdza, czy podany obiekt istnieje.
- [MoveObject](MoveObject.md): Przesuwa obiekt.
- [StopObject](StopObject.md): Zatrzymuje obiekt.
- [SetObjectPos](SetObjectPos.md): Ustawia pozycję obiektu.
- [SetObjectRot](SetObjectRot.md): Ustawia rotację obiektu.
- [GetObjectPos](GetObjectPos.md): Podaje pozycję obiektu.
- [GetObjectRot](GetObjectRot.md): Podaje rotację obiektu.
- [AttachObjectToPlayer](AttachObjectToPlayer.md): Przyczepia obiekt do gracza.
