---
title: OnVehicleRespray
description: Bu callback, aracın renkleri değişmemiş olsa bile oyuncu bir mod mağazasından çıktığında çağrılır.
tags: ["vehicle"]
---

## Açıklama

Bu callback, aracın renkleri değişmemiş olsa bile oyuncu bir mod mağazasından çıktığında çağrılır. Dikkat edin, isim yanıltabilir. Pay 'n' Spray mağazaları bu callbacki kullanamaz.

| İsim      | Açıklama                                  |
| --------- | ----------------------------------------- |
| playerid  | Aracı kullanan oyuncu ID'si.              |
| vehicleid | Yeniden boyanan aracın ID'si.             |
| color1    | Aracın değiştirildiği yeni ana rengi.     |
| color2    | Aracın değiştirildiği yeni ikinci rengi.  |

## Çalışınca Vereceği Sonuçlar (Returns)

Her zaman ilk olarak oyun modunda çağrılır, bu yüzden 0 döndürerek diğer filterscriptslerin görmesini engeller.

## Örnekler

```c
public OnVehicleRespray(playerid, vehicleid, color1, color2)
{
    new string[48];
    format(string, sizeof(string), "%d ID aracınızı %d renginden %d rengine boyadınız!", vehicleid, color1, color2);
    SendClientMessage(playerid, COLOR_GREEN, string);
    return 1;
}
```

## Notlar

:::tip

Bu callback ChangeVehicleColor tarafından çağrılamaz. Pay 'n' Spray için kullanılamaz, sadece mod mağazaları için kullanılabilir.

Buradan düzeltilebilir: https://pastebin.com/G81da7N1

:::

:::warning

Bilinen Bug(lar): Mod mağazasında bir parçayı önizlemek bu callbacki çalıştırabilir.

:::

## Bağlantılı Fonksiyonlar

- [ChangeVehicleColor](../functions/ChangeVehicleColor): Aracın rengini ayarlar.
- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): Aracın paintjobunu ayarlar.
- [OnVehiclePaintjob](OnVehiclePaintjob): Aracın paintjobu değiştiğinde çağrılır.
- [OnVehicleMod](OnVehicleMod): Araç modlandığında (parça eklendiğinde) çağrılır.
- [OnEnterExitModShop](OnEnterExitModShop): Araç mod mağazasına girince veya çıkınca çağrılır.
