---
title: AttachPlayerObjectToPlayer
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

- [CreatePlayerObject](CreatePlayerObject.md): Tworzy obiekt dla konkretnego gracza.
- [DestroyPlayerObject](DestroyPlayerObject.md): Kasuje obiekt gracza.
- [IsValidPlayerObject](IsValidPlayerObject.md): Sprawdza, czy podany obiekt gracza istnieje.
- [MovePlayerObject](MovePlayerObject.md): Przesuwa obiekt gracza.
- [StopPlayerObject](StopPlayerObject.md): Zatrzymuje obiekt gracza.
- [SetPlayerObjectRot](SetPlayerObjectRot.md): Ustawia rotację obiektu gracza.
- [GetPlayerObjectPos](GetPlayerObjectPos.md): Podaje pozycję obiektu gracza.
- [SetPlayerObjectPos](SetPlayerObjectPos.md): Ustawia pozycję obiektu gracza.
- [GetPlayerObjectRot](GetPlayerObjectRot.md): Podaje rotację obiektu gracza.
- [SetPlayerAttachedObject](SetPlayerAttachedObject.md): Przyczepia obiekt do gracza.
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject.md): Usuwa przyczepiony do gracza obiekt.
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed.md): Sprawdza, czy w danym slocie jest przyczepiony do gracza jakiś obiekt.
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
