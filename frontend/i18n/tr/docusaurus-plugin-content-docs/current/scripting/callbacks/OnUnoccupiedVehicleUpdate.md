---
title: OnUnoccupiedVehicleUpdate
description: Bu fonksiyon, oyuncunun istemcisi sürmediği bir aracın konumunu güncellediğinde / senkronize ettiğinde çağrılır.
tags: ["vehicle"]
---

## Açıklama

Bu fonksiyon, oyuncunun istemcisi sürmediği bir aracın konumunu güncellediğinde / senkronize ettiğinde çağrılır. Bu, aracın dışında olan oyuncuda veya sürücüsü olmayan bir aracın yolcusu olduğunda meydana gelebilir.

| Parametre      | Açıklama                                                                                                                                                         |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vehicleid      | Konumu güncellenen aracın ID'si.                                                                                                                                 |
| playerid       | Araç konumunu güncellemesini gönderen oyuncunun ID'si.                                                                                                           |
| passenger_seat | Oyuncu bir yolcu ise koltuğun ID'si. 0=araçta değil, 1=ön koltuk, 2=arka sol, 3=arka sağ, 4+ otobüs vb araçlar için.                                             |
| new_x          | Aracın yeni X koordinatı.                                                         |
| new_y          | Aracın yeni Y koordinatı.                                                         |
| new_z          | Aracın yeni Z koordinatı.                                                         |
| vel_x          | Aracın yeni vektörel X koordinatı.                                                 |
| vel_y          | Aracın yeni vektörel Y koordinatı.                                                 |
| vel_z          | Aracın yeni vektörel Z koordinatı.                                                 |

## Çalışınca Vereceği Sonuçlar

Filterscript dosyalarında her zaman ilk olarak çağrılır, bu nedenle 0 döndürmek diğer komut dosyalarının da görmesini engeller.

## Örnek

```c
public OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z)
{
    // Uzaklık kontrolü.
    if (GetVehicleDistanceFromPoint(vehicleid, new_x, new_y, new_z) > 50.0)
    {
        // Yapmak istediğiniz şey.
        return 0;
    }

    return 1;
}
```

## Notlar

:::warning

Bu fonksiyon, kullanılmayan araç başına saniyede çok sık çağrılır. Çağırdığınızda yoğun hesaplamalar veya yoğun dosya yazma / okuma işlemleri yapmaktan kaçınmalısınız. GetVehiclePos, araç değerleri güncellenmeden önce aracın eski koordinatlarını döndürecektir.

:::

## Bağlantılı Fonksiyonlar
