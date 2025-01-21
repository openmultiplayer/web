---
title: OnPlayerExitedMenu
description: Oyuncu bir menüden çıktığında çağrılır.
tags: ["player", "menu"]
---

## Açıklama

Oyuncu bir menüden çıktığında çağrılır.

| Parametre     | Açıklama                                  |
| -------- | ----------------------------------------- |
| playerid | Menüden çıkan oyuncunun ID'si             |

## Çalışınca Vereceği Sonuçlar

Her zaman öncelikle oyun modunda çağrılır.

## Örnek

```c
public OnPlayerExitedMenu(playerid)
{
    TogglePlayerControllable(playerid,1); // oyuncuyu menüden çıktığında unfreeze durumuna getirir
    return 1;
}
```

## Bağlantılı Fonksiyonlar

- [CreateMenu](../functions/CreateMenu): Menü oluşturur.
- [DestroyMenu](../functions/DestroyMenu): Menü siler.
