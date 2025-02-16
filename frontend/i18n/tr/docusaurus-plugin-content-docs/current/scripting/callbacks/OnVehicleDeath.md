---
title: OnVehicleDeath
description: Bu fonksiyon, bir araç imha edildiğinde çağrılır. - patladığında veya araç suya girdiğinde.
tags: ["vehicle"]
---

## Açıklama

Bu fonksiyon, bir araç imha edildiğinde çağrılır. - patladığında veya araç suya girdiğinde.

| Parametre | Açıklama                                                                                                                                                        |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vehicleid | İmha edilen aracın ID'si.                                                                                                                                       |
| killerid  | Aracı imha eden oyuncu (senkronize eden) oyuncunun ID'si. (adı yanıltıcıdır). Genellikle sürücü, yolcu (eğer varsa) veya en yakın oyuncu.                       |

## Çalışınca Verdiği Sonuçlar

Filterscript içerisinde her zaman ilk olarak çağrılır.

## Örnek

```c
public OnVehicleDeath(vehicleid, killerid)
{
    new string[64];
    format(string, sizeof(string), "%i ID'li araç imha edildi. Oyuncu %i tarafından bildirildi.", vehicleid, killerid);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notlar

:::tip


Bu fonksiyon, bir araç suya girdiğinde de çağrılacaktır, ancak araç ışınlanarak veya bir başka şey tarafından suya düşürüldüyse (yalnızca kısmen suya batırılmışsa) çağrılmaz. Fonksiyon, ikinci kez çağrılmaz, sürücü araçtan çıktığında veya kısa bir süre sonra araç kaybolabilir.

:::

## Bağlantılı fonksiyonlar

- [SetVehicleHealth](../functions/SetVehicleHealth): Aracın can değerini düzenleme.
