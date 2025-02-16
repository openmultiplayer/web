---
title: CancelEdit
sidebar_label: CancelEdit
description: Obje düzenleme modunu iptal etme.
tags: []
---

## Açıklama

Obje düzenleme modunu iptal etme.

| Parametre | Açıklama                                   |
| --------- | ------------------------------------------ |
| playerid  | Obje düzenlemesi iptal edilecek oyuncu.    |

## Çalışınca Vereceği Sonuçlar

Bu fonksiyon bir değer/döngü vermez.

## Örnekler

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stopedit", true))
    {
        CancelEdit(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Obje düzenleme modunu iptal ettiniz!");
        return 1;
    }
    return 0;
}
```

## Bağlantılı Fonksiyonlar

- [SelectObject](SelectObject): Obje seçme.
- [EditObject](EditObject): Obje düzenleme.
- [EditPlayerObject](EditPlayerObject): Oyuncu objesi düzenleme.
- [EditAttachedObject](EditAttachedObject): Bağlanmış objeyi düzenleme.
- [CreateObject](CreateObject): Obje oluşturma.
- [DestroyObject](DestroyObject): Obje silme.
- [MoveObject](MoveObject): Obje hareket ettirme.
