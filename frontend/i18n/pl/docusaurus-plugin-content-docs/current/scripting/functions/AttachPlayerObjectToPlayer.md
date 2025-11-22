---
title: AttachPlayerObjectToPlayer
sidebar_label: AttachPlayerObjectToPlayer
description: Odpowiednik AttachObjectToPlayer, tylko dla obiektów stworzonych dla danego gracza.
tags: ["player"]
---

## Opis

Odpowiednik AttachObjectToPlayer, tylko dla obiektów stworzonych dla danego gracza.

| Nazwa         | Opis                                                 |
| ------------- | ---------------------------------------------------- |
| objectplayer  | ID gracza, do którego obiekt jest przypisany.        |
| objectid      | ID obiektu, który ma zostać przyczepiony do gracza.  |
| attachid      | ID gracza, do którego obiekt ma zostać przyczepiony. |
| Float:OffsetX | Dystans pomiędzy graczem, a obiektem (koordynat X).  |
| Float:OffsetY | Dystans pomiędzy graczem, a obiektem (koordynat Y).  |
| Float:OffsetZ | Dystans pomiędzy graczem, a obiektem (koordynat Z).  |
| Float:RotX    | Rotacja X.                                           |
| Float:RotY    | Rotacja Y.                                           |
| Float:RotZ    | Rotacja Z.                                           |

## Zwracane wartości

Ta funkcja nie zwraca żadnych konkretnych wartości.

## Przykłady

```c
AttachPlayerObjectToPlayer(objectplayer, objectid, attachplayer, 1.5, 0.5, 0, 0, 1.5, 2 );
```

## Uwagi

:::warning

Ta funkcja została usunięta w SA-MP 0.3.

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
- [SetPlayerAttachedObject](SetPlayerAttachedObject): Przyczepia obiekt do gracza.
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): Usuwa przyczepiony do gracza obiekt.
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): Sprawdza, czy w danym slocie jest przyczepiony do gracza jakiś obiekt.
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
