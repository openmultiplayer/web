---
title: AddSimpleModel
sidebar_label: AddSimpleModel
description: İndirmek için yeni bir özel basit nesne modeli ekler.
tags: []
---

:::warning

Bu işlev SA-MP 0.3.DL R1'e eklenmiştir ve önceki sürümlerde çalışmayacaktır!

:::

## Açıklama

İndirmek için yeni bir özel basit nesne modeli ekler. Model dosyaları, oynatıcının belgelerinde\GTA San Andreas Kullanıcı dosyaları\SAMP\cache'te, CRC biçiminde dosya adında Sunucu IP'si ve Bağlantı Noktası klasörü altında saklanır.

| İsim         | Açıklama                                                                                                                      |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| virtualworld | Modeli adresinde kullanılabilir hale getirmek için sanal dünya kimliği. Tüm dünyalar için -1 kullanın.                        |
| baseid       | Kullanılacak temel nesne model kimliği (indirme başarısız olduğunda kullanılacak orijinal nesne).                             |
| newid        | Yeni obje model kimliği daha sonra CreateObject veya CreatePlayerObject ile -1000 ile -30000 arasında (29000 yuva) sıralandı. |
| dffname      | Modellerde bulunan .dff modeli çarpışma dosyasının adı varsayılan olarak sunucu klasörü (çalışma yolu ayarı)                  |
| txdname      | Modeller sunucu klasöründe varsayılan olarak bulunan .txd model kaplama dosyasının adı (çalışma yolu ayarı).                  |

## Çalışınca Vereceği Sonuçlar

1: İşlev başarıyla yürütüldü.

0: İşlev yürütülemedi.

## Örnekler

```c
public OnGameModeInit()
{
    AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");
    return 1;
}
```

```c
AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");
```

## Notlar

:::tip

Sanal dünya ayarlandığında bunun çalışması için öncelikle sunucu ayarlarında userartwork etkinleştirilmesi gerekir; oynatıcı belirli bir dünyaya girdiğinde modeller indirilir.

:::

:::warning

Şu anda bu fonksiyonu ne zaman arayabileceğiniz konusunda herhangi bir kısıtlama yoktur, ancak OnFilterScriptInit/OnGameModeInit içinde aramamanız durumunda, halihazırda sunucuda bulunan bazı oyuncuların modelleri indirmemiş olma riskini çalıştırdığınızı unutmayın.

:::

## Bağlantılı Fonksiyonlar

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): Bir oyuncu özel modelleri indirmeyi bitirdiğinde çağrılır.
