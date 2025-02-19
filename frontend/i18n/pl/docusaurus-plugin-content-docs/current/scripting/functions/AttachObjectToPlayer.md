---
title: AttachObjectToPlayer
sidebar_label: AttachObjectToPlayer
description: Przyczepia obiekt do gracza.
tags: ["player"]
---

## Opis

Przyczepia obiekt do gracza.

| Nazwa         | Opis                                                 |
| ------------- | ---------------------------------------------------- |
| objectid      | ID obiektu, który ma zostać przyczepiony do gracza.  |
| playerid      | ID gracza, do którego obiekt ma zostać przyczepiony. |
| Float:OffsetX | Dystans pomiędzy graczem, a obiektem (koordynat X).  |
| Float:OffsetY | Dystans pomiędzy graczem, a obiektem (koordynat Y).  |
| Float:OffsetZ | Dystans pomiędzy graczem, a obiektem (koordynat Z).  |
| Float:RotX    | Rotacja X pomiędzy obiektem, a graczem.              |
| Float:RotY    | Rotacja Y pomiędzy obiektem, a graczem.              |
| Float:RotZ    | Rotacja Z pomiędzy obiektem, a graczem.              |

## Zwracane wartości

Ta funkcja zawsze zwraca 0.

## Przykłady

```c
new gMyObject;
gMyObject = CreateObject(19341, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
AttachObjectToPlayer(gMyObject, playerid, 1.5, 0.5, 0.0, 0.0, 1.5, 2);
```

## Powiązane funkcje

- [AttachObjectToObject](AttachObjectToObject.md): Przyczepia obiekt do obiektu.
- [AttachObjectToVehicle](AttachObjectToVehicle.md): Przyczepia obiekt do pojazdu.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer.md): Przyczepia do gracza obiekt, który jest widoczny tylko dla niego.
- [CreateObject](CreateObject.md): Tworzy obiekt.
- [DestroyObject](DestroyObject.md): Kasuje obiekt.
- [IsValidObject](IsValidObject.md): Sprawdza, czy podany obiekt istnieje.
- [MoveObject](MoveObject.md): Przesuwa obiekt.
- [StopObject](StopObject.md): Zatrzymuje obiekt.
- [SetObjectPos](SetObjectPos.md): Ustawia pozycję obiektu.
- [SetObjectRot](SetObjectRot.md): Ustawia rotację obiektu.
- [GetObjectPos](GetObjectPos.md): Podaje pozycję obiektu.
- [GetObjectRot](GetObjectRot.md): Podaje rotację obiektu.
- [CreatePlayerObject](CreatePlayerObject.md): Tworzy obiekt dla konkretnego gracza.
- [DestroyPlayerObject](DestroyPlayerObject.md): Kasuje obiekt gracza.
- [IsValidPlayerObject](IsValidPlayerObject.md): Sprawdza, czy podany obiekt gracza istnieje.
- [MovePlayerObject](MovePlayerObject.md): Przesuwa obiekt gracza.
- [StopPlayerObject](StopPlayerObject.md): Zatrzymuje obiekt gracza.
- [SetPlayerObjectPos](SetPlayerObjectPos.md): Ustawia pozycję obiektu gracza.
- [SetPlayerObjectRot](SetPlayerObjectRot.md): Ustawia rotację obiektu gracza.
- [GetPlayerObjectPos](GetPlayerObjectPos.md): Podaje pozycję obiektu gracza.
- [GetPlayerObjectRot](GetPlayerObjectRot.md): Podaje rotację obiektu gracza.
