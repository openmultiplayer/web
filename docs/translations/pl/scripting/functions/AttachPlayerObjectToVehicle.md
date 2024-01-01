---
title: AttachPlayerObjectToVehicle
description: Przyczepia obiekt gracza do pojazdu.
tags: ["player", "vehicle"]
---

<VersionWarn version='SA-MP 0.3e' />

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

- [CreatePlayerObject](CreatePlayerObject): Tworzy obiekt dla konkretnego gracza.
- [DestroyPlayerObject](DestroyPlayerObject): Kasuje obiekt gracza.
- [IsValidPlayerObject](IsValidPlayerObject): Sprawdza, czy podany obiekt gracza istnieje.
- [MovePlayerObject](MovePlayerObject): Przesuwa obiekt gracza.
- [StopPlayerObject](StopPlayerObject): Zatrzymuje obiekt gracza.
- [SetPlayerObjectRot](SetPlayerObjectRot): Ustawia rotację obiektu gracza.
- [GetPlayerObjectPos](GetPlayerObjectPos): Podaje pozycję obiektu gracza.
- [SetPlayerObjectPos](SetPlayerObjectPos): Ustawia pozycję obiektu gracza.
- [GetPlayerObjectRot](GetPlayerObjectRot): Podaje rotację obiektu gracza.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Przyczepia obiekt gracza do gracza.
- [CreateObject](CreateObject): Tworzy obiekt.
- [DestroyObject](DestroyObject): Kasuje obiekt.
- [IsValidObject](IsValidObject): Sprawdza, czy podany obiekt istnieje.
- [MoveObject](MoveObject): Przesuwa obiekt.
- [StopObject](StopObject): Zatrzymuje obiekt.
- [SetObjectPos](SetObjectPos): Ustawia pozycję obiektu.
- [SetObjectRot](SetObjectRot): Ustawia rotację obiektu.
- [GetObjectPos](GetObjectPos): Podaje pozycję obiektu.
- [GetObjectRot](GetObjectRot): Podaje rotację obiektu.
- [AttachObjectToPlayer](AttachObjectToPlayer): Przyczepia obiekt do gracza.
