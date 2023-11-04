---
title: OnPlayerRequestClass
description: Fonksiyon, bir oyuncu sınıf seçiminde sınıfını değiştirdiğinde (ve sınıf seçimi ilk göründüğünde) çağrılır.
tags: ["player"]
---

## Açıklama

Fonksiyon, bir oyuncu sınıf seçiminde sınıfını değiştirdiğinde (ve sınıf seçimi ilk göründüğünde) çağrılır.

| Parametre | Açıklama                                                                    |
| --------- | --------------------------------------------------------------------------- |
| playerid  | Sınıfını değiştiren oyuncunun ID'si.                                        |
| classid   | Görüntülenmekte olan sınıfın ID'si (AddPlayerClass tarafından döndürülür).  |

## Çalışınca Vereceği Sonuçlar

Filterscript komutlarında her zaman ilk olarak çağrılır. 

## Örnekler

```c
public OnPlayerRequestClass(playerid,classid)
{
    if (classid == 3 && !IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, COLOR_RED, "Bu model sadece yöneticiler içindir!");
        return 0;
    }
    return 1;
}
```

## Notlar

:::tip

Bu fonksiyon, bir oyuncu F4'e bastığında da çağrılır.

:::

## Bağlantılı Fonksiyonlar

- [AddPlayerClass](../functions/AddPlayerClass): Sınıf ekleme.
