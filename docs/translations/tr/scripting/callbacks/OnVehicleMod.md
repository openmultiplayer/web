---
title: OnVehicleMod
description: Bu fonksiyon, herhangi bir araca modifiye uygulandığında çağrılır.
tags: ["vehicle"]
---

## Açıklama

Bu fonksiyon, herhangi bir araca modifiye uygulandığında çağrılır.

| Parametre   | Açıklama                                                |
| ----------- | ------------------------------------------------------- |
| playerid    | Araç sürücüsünün ID'si.                                 |
| vehicleid   | Modifiye uygulanan aracın ID'si.                        |
| componentid | Araca eklenen bileşenin ID'si.                          |

## Çalışınca Vereceği Sonuçlar

Oyun modunda her zaman ilk olarak çağrılır, bu nedenle 0 döndürülürse, diğer filterscriptleri görmesi engellenir.

## Örnek

```c
public OnVehicleMod(playerid, vehicleid, componentid)
{
    printf("%d ID'li oyuncu %d ID'li araca %d numaralı bileşeni ekledi.", playerid, vehicleid,componentid);
    if (GetPlayerInterior(playerid) == 0)
    {
        BanEx(playerid, "Tuning Hacks"); // Anti modifiye hilesi.
        return 0; // Kötü değişikliklerin diğer oyuncularla senkronize edilmesini engeller
        //Test edildi ve aracınızı komutlar, menüler, diyaloglar vb. kullanarak modifiye etmenize izin veren sunucularda bile çalıştı.
    }
    return 1;
}
```

## Notlar

:::tip

Bu fonksiyon AddVehicleComponent tarafından ÇAĞRILMAZ.

:::

## Bağlantılı Fonksiyonlar

- [AddVehicleComponent](../functions/AddVehicleComponent): Araca bileşen (modifiye parçası) ekleme.
- [OnEnterExitModShop](OnEnterExitModShop): Bu fonksiyon, bir araç modifiye noktasına giriş yaptığında veya modifiye noktasından çıkış yaptığında çağrılır.
- [OnVehiclePaintjob](OnVehiclePaintjob): Bu fonksiyon, bir aracın kaplaması değiştirildiğinde çağrılır.
- [OnVehicleRespray](OnVehicleRespray): Bu fonksiyon, bir araç respray noktasındayken çağrılır.
