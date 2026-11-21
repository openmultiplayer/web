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

İndirmek için yeni bir özel basit nesne modeli ekler. Model dosyaları, oynatıcının `Belgelerim\GTA San Andreas User Files\SAMP\cache` dizinindeki Sunucu IP'si ve Bağlantı Noktası klasörü altında, [CRC](https://en.wikipedia.org/wiki/Cyclic_redundancy_check) biçiminde dosya adlarıyla saklanır.

| İsim         | Açıklama                                                                                                                      |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| virtualworld | Modeli adresinde kullanılabilir hale getirmek için sanal dünya kimliği. Tüm dünyalar için -1 kullanın.                        |
| baseid       | Kullanılacak temel nesne model kimliği (indirme başarısız olduğunda kullanılacak orijinal nesne).                             |
| newid        | Yeni obje model kimliği daha sonra CreateObject veya CreatePlayerObject ile -1000 ile -30000 arasında (29000 yuva) sıralandı. |
| dffname      | Modellerde bulunan **.dff** modeli çarpışma dosyasının adı varsayılan olarak sunucu klasörü (çalışma yolu ayarı).             |
| txdname      | Modeller sunucu klasöründe varsayılan olarak bulunan **.txd** model kaplama dosyasının adı (çalışma yolu ayarı).              |

## Çalışınca Vereceği Sonuçlar

**1**: İşlev başarıyla yürütüldü.

**0**: İşlev yürütülemedi.

## Örnekler

```c
public OnGameModeInit()
{
    AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");
    return 1;
}
```

## Notlar

:::note

- Bunun çalışması için öncelikle sunucu ayarlarında **useartwork** etkinleştirilmesi gerekir.
- Sanal dünya ayarlandığında, oynatıcı belirli bir dünyaya girdiğinde modeller indirilir.

:::

:::warning

Şu anda bu fonksiyonu ne zaman arayabileceğiniz konusunda herhangi bir kısıtlama yoktur, ancak [OnFilterScriptInit](../callbacks/OnFilterScriptInit)/[OnGameModeInit](../callbacks/OnGameModeInit) içinde aramamanız durumunda, halihazırda sunucuda bulunan bazı oyuncuların modelleri indirmemiş olma riskini çalıştırdığınızı unutmayın.

:::

## Bağlantılı Fonksiyonlar

- [AddSimpleModelTimed](AddSimpleModelTimed): İndirmek için yeni bir basit nesne modeli ekler.
- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): Bir oyuncu özel modelleri indirmeyi bitirdiğinde çağrılır.
