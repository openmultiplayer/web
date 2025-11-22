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

- [AttachObjectToObject](AttachObjectToObject): Przyczepia obiekt do obiektu.
- [AttachObjectToVehicle](AttachObjectToVehicle): Przyczepia obiekt do pojazdu.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Przyczepia do gracza obiekt, który jest widoczny tylko dla niego.
- [CreateObject](CreateObject): Tworzy obiekt.
- [DestroyObject](DestroyObject): Kasuje obiekt.
- [IsValidObject](IsValidObject): Sprawdza, czy podany obiekt istnieje.
- [MoveObject](MoveObject): Przesuwa obiekt.
- [StopObject](StopObject): Zatrzymuje obiekt.
- [SetObjectPos](SetObjectPos): Ustawia pozycję obiektu.
- [SetObjectRot](SetObjectRot): Ustawia rotację obiektu.
- [GetObjectPos](GetObjectPos): Podaje pozycję obiektu.
- [GetObjectRot](GetObjectRot): Podaje rotację obiektu.
- [CreatePlayerObject](CreatePlayerObject): Tworzy obiekt dla konkretnego gracza.
- [DestroyPlayerObject](DestroyPlayerObject): Kasuje obiekt gracza.
- [IsValidPlayerObject](IsValidPlayerObject): Sprawdza, czy podany obiekt gracza istnieje.
- [MovePlayerObject](MovePlayerObject): Przesuwa obiekt gracza.
- [StopPlayerObject](StopPlayerObject): Zatrzymuje obiekt gracza.
- [SetPlayerObjectPos](SetPlayerObjectPos): Ustawia pozycję obiektu gracza.
- [SetPlayerObjectRot](SetPlayerObjectRot): Ustawia rotację obiektu gracza.
- [GetPlayerObjectPos](GetPlayerObjectPos): Podaje pozycję obiektu gracza.
- [GetPlayerObjectRot](GetPlayerObjectRot): Podaje rotację obiektu gracza.
