---
title: AddPlayerClass
description: Class seçimi sırasında yeni bir class oluşturur.
tags: ["player"]
---

## Açıklama

Class seçimine yeni bir class ekler. Kullanıcılar seçtikleri classın skinleriyle spawn olabilirler.

| İsim          | Açıklama                                                      |
| ------------- | ------------------------------------------------------------- |
| modelid       | Oyuncunun doğacağı skin numarası.                             |
| Float:spawn_x | Class oyuncularının doğacağı X koordinat bilgisi.             |
| Float:spawn_y | Class oyuncularının doğacağı Y koordinat bilgisi.             |
| Float:spawn_z | Class oyuncularının doğacağı Z koordinat bilgisi.             |
| Float:z_angle | Class oyuncularının doğduğu zaman yüzünün döneceği koordinat. |
| weapon1       | Class oyuncularının birincil silah numarası.                  |
| weapon1_ammo  | Class oyuncularının birincil silahlarının mermi sayısı.       |
| weapon2       | Class oyuncularının ikincil silah numarası.                   |
| weapon2_ammo  | Class oyuncularının ikincil silahlarının mermi sayısı.        |
| weapon3       | Class oyuncularının üçüncül silah numarası.                   |
| weapon3_ammo  | Class oyuncularının üçüncül silahlarının mermi sayısı.        |

## Çalışınca Vereceği Sonuçlar

Bu fonksiyon, geri dönüş olarak oluşturulan classın ID bilgisini verecektir.

En fazla 320 class olabileceği için, en fazla olarak 319 dönüşünü verecektir.

## Örnekler

```c
public OnGameModeInit()
{
    // Oyuncular CJ skiniyle (0) ya da  The Truth skiniyle (1) doğacaklar.
    AddPlayerClass(0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // CJ
    AddPlayerClass(1, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // The Truth
    return 1;
}
```

## Notes

:::tip

Maksimum class numarası 319 olabileceği için (class numaralı sıfırdan başlar, yani 320 adet class olabilir) sunucu içerisinde bulunan class sayısı maksimuma ulaştığı zaman en son eklenen class, bilgilerini 319 numaralı class'a aktaracaktır.

:::

## İlgili Fonksiyonlar

- [AddPlayerClassEx](AddPlayerClassEx.md): Classı bir takıma varsayılan bağlı olarak ekler.
- [SetSpawnInfo](SetSpawnInfo.md): Oyuncunun doğacağı bölgeyi belirler.
- [SetPlayerSkin](SetPlayerSkin.md): Oyuncunun skinini düzenler.
