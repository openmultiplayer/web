---
title: AddCharModel
description: İndirmek için yeni bir özel karakter modeli ekler.
tags: []
---

:::warning

Bu işlev SA-MP 0.3.DL R1'e eklenmiştir ve önceki sürümlerde çalışmayacaktır!

:::

## Açıklama

İndirmek için yeni bir özel karakter modeli ekler. Model dosyaları oynatıcının belgelerinde saklanır. Belgelerim\Gta San Andreas User Files\SAMP\cache | İsim | Açıklama | | ------- | -------------------------------------------------------------------------------------------------------------- | | baseid | Kullanılacak temel cilt modeli kimliği. (karakterin ve orijinal karakterin ne zaman kullanılacağı) | | newid | "Öncesinde, yeni model ID'leri 20000 ve 30000 arasinda (10000 slot) değişiklik göstermekteydi. | | dffname | Varsayılan olarak modeller sunucu klasöründe bulunan .dff modeli çarpışma dosyasının adı (çalışma yolu ayarı). | | txdname | Modeller sunucu klasöründe varsayılan olarak bulunan .txd model kaplama dosyasının adı (çalışma yolu ayarı). |

## Çalışınca Vereceği Sonuçlar

1: İşlev başarıyla yürütüldü.

0: İşlev yürütülemedi.

## Örnekler

```c
public OnGameModeInit()
{
    AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");
    AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");
    return 1;
}
```

```c
AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");
AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");
```

## Notlar

:::tip

Bunun işe yaraması için kullanılabilir resmin öncelikle sunucu ayarlarında etkinleştirilmesi gerekir.

:::

:::warning

Şu anda bu fonksiyonu ne zaman arayabileceğiniz konusunda herhangi bir kısıtlama yoktur, ancak OnFilterScriptInit/OnGameModeInit içinde aramamanız durumunda, halihazırda sunucuda bulunan bazı oyuncuların modelleri indirmemiş olma riskini çalıştırdığınızı unutmayın.

:::

## İlgili Fonksiyonlar

- [SetPlayerSkin](SetPlayerSkin.md): Bir oyuncunun cildini ayarlayın.
