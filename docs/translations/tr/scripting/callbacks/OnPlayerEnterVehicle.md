---
title: OnPlayerEnterVehicle
description: Bu geri çağırma, bir oyuncu bir araca binmeye başladığında çağırılır, oyuncu araca bindiğinde çağırılmaz, binmeye başladığında (araca doğru yürüme/koşma animasyonu başladığında) çağırılır.
tags: ["player", "vehicle"]
---

## Açıklama

Bu geri çağırma, bir oyuncu bir araca binmeye başladığında çağırılır, oyuncu araca bindiğinde çağırılmaz, binmeye başladığında (araca doğru yürüme/koşma animasyonu başladığında) çağırılır.

| Parametre        | Açıklama                                             |
| ----------- | ---------------------------------------------------- |
| playerid    | Araca binmeye çalışan oyuncunun ID'si.               |
| vehicleid   | Oyuncunun binmeye çalıştığı aracın ID'si.            |
| ispassenger | Şoför koltuğuna biniyor ise 0, yolcu koltuğu ise 1.  |

## Çalışınca Vereceği Sonuçlar

Her zaman ilk olarak filterscriptlerde çağırılır.

## Örnek

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    new string[128];
    format(string, sizeof(string), "%i ID'li araca biniyorsun.", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notlar

:::tip

Bu geri çağırma oyuncu araca binmeye BAŞLADIĞINDA çağırılır, oyuncu ARACA BİNDİĞİNDE çağırılmaz. Araca bindiğinde çağırılması için OnPlayerStateChange geri çağırmasını inceleyin. Araç kilitli veya dolu olsa bile oyuncu araca binmeye çalıştığında çağırılacaktır.
:::

## Bağlantılı Fonksiyonlar

- [PutPlayerInVehicle](../functions/PutPlayerInVehicle): Bir oyuncuyu araca bindirir.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): Bir oyuncunun hangi koltukta olduğunu kontrol eder.
