---
title: OnEnterExitModShop
sidebar_label: OnEnterExitModShop
description: Bu geri çağırma, bir oyuncu modifiye garajlarından birine giriş veya çıkış yaptığında tetiklenir.
tags: []
---

## Açıklama

Bu geri çağırma, bir oyuncu modifiye garajlarından birine giriş veya çıkış yaptığında tetiklenir.

| Parametre      | Açıklama                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| playerid   | Modifiye garajına giriş/çıkış yapan oyuncunun ID'si.                         |
| enterexit  | Giriş yaptıysa 1, çıkış yaptıysa 2 değerini alır.                            |
| interiorid | Girilen modifiye garajının interior ID'si. (eğer çıkıyorsa 0 değerini alır.) |

## Çalışınca Vereceği Sonuçlar

Her zaman öncelikle filterscriptler içerisinde çağrılır.

## Örnek

```
public OnEnterExitModShop(playerid, enterexit, interiorid)
{
    if (enterexit == 0) // Eğer enterexit değeri 0'a eşit ise, modifiye garajından çıkış yaptığı anlamına gelir.
    {
        SendClientMessage(playerid, COLOR_WHITE, "Nice car! You have been taxed $100.");
        GivePlayerMoney(playerid, -100);
    }
    return 1;
}
```

## Notlar

:::warning

Bilinen Hata(lar): Oyuncular aynı modifiye garajına girdiğinde sıkışabilirler/çarpışırlar.

:::

## Bağlantılı Fonksiyonlar

- [AddVehicleComponent](../functions/AddVehicleComponent.md): Araca bir parça eklemeye yarar.
