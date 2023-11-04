---
title: AttachObjectToObject
description: Możesz używać tej funkcji, aby przyczepiać obiekty do innych obiektów. Obiekty będą podążać za głównym obiektem.
tags: []
---

<VersionWarn version='SA-MP 0.3d' />

## Opis

Możesz używać tej funkcji, aby przyczepiać obiekty do innych obiektów. Obiekty będą podążać za głównym obiektem.

| Nazwa         | Opis                                                                                   |
| ------------- | -------------------------------------------------------------------------------------- |
| objectid      | Obiekt, który ma zostać przyczepiony do innego obiektu.                                |
| attachtoid    | Obiekt, do którego inny obiekt ma zostać przyczepiony.                                 |
| Float:OffsetX | Dystans pomiędzy głównym obiektem, a przyczepianym obiektem (koordynat X).             |
| Float:OffsetY | Dystans pomiędzy głównym obiektem, a przyczepianym obiektem (koordynat Y).             |
| Float:OffsetZ | Dystans pomiędzy głównym obiektem, a przyczepianym obiektem (koordynat Z).             |
| Float:RotX    | Rotacja X pomiędzy przyczepianym obiektem, a głównym obiektem.                         |
| Float:RotY    | Rotacja Y pomiędzy przyczepianym obiektem, a głównym obiektem.                         |
| Float:RotZ    | Rotacja Z pomiędzy przyczepianym obiektem, a głównym obiektem.                         |
| SyncRotation  | Jeżeli ustawione na 0, rotacja objectid nie będzie się zmieniała razem z `attachtoid`. |

## Zwracane wartości

1: Funkcja wykonała się prawidłowo.

0: Funkcja nie wykonała się prawidłowo. To oznacza, że pierwszy obiekt (objectid) nie istnieje. Nie ma żadnej wbudowanej weryfikacji tego, czy drugi obiekt (attachtoid) istnieje.

## Przykłady

```c
new gObjectId = CreateObject(...);
new gAttachToId = CreateObject(...);

AttachObjectToObject(gObjectId, gAttachToId, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1);
```

## Uwagi

:::tip

Oba obiekty muszą być utworzone przed próbą ich połączenia. Nie ma odpowiednika tej funkcji dla obiektów gracza (AttachPlayerObjectToObject), dlatego nie jest ona wspierana przez streamery.

:::

## Powiązane funkcje

- [AttachObjectToPlayer](AttachObjectToPlayer): Przyczepia obiekt do gracza.
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
