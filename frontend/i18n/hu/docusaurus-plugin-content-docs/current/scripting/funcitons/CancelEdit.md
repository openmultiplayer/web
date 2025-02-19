---
title: CancelEdit
sidebar_label: CancelEdit
description: Visszavonja a szerkesztési módot a játékos számára.
tags: []
---

## Leírás

Visszavonja a szerkesztési módot a játékos számára.

| Név      | Leírás                                                 |
| -------- | ------------------------------------------------------ |
| playerid | Annak a játékosnak az ID-je akinek vissza akarod vonni |

## Visszatérések

Ez a függvény nem ad vissza konkrét értékeket.

## Példák

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stopedit", true))
    {
        CancelEdit(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SZERVER: Abbahagytad az objektum szerkesztését!");
        return 1;
    }
    return 0;
}
```

## Kapcsolódó funkciók

- [SelectObject](SelectObject): Egy objektumot kiválasztása.
- [EditObject](EditObject): Egy objektum szerkesztése.
- [EditPlayerObject](EditPlayerObject): Egy objektum szerkesztése.
- [EditAttachedObject](EditAttachedObject): Egy csatolt objektum szerkesztése.
- [CreateObject](CreateObject): Egy objektum létrehozása.
- [DestroyObject](DestroyObject): Egy objektum eltávolítása.
- [MoveObject](MoveObject): Egy objektum mozgatása.