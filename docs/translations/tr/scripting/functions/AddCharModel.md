---
id: AddCharModel
title: AddCharModel
description: Kullanıcı tarafının indirebilmesi için yeni bir karakter modeli ekler.
tags: []
---

:::warning

Bu fonksiyon SA-MP 0.3.DL R1 sürümünde eklendi ve o sürümde çalışır. Önceki sürümlerde çalışmaz.

:::

## Açıklama

Kullanıcı tarafının indirebilmesi için yeni bir karkater modeli ekler. Modeller kullanıcının Documents\Gta San Andreas\User Files\SAMP\cache klasörü içerisinde Sunucu IP ve Portunun yazılı olduğu bir klasörün içerisinde saklanır.

| İsmi    | Açıklaması                                                                                                                   |
| ------- | -------------------------------------------------------------------------------------------------------------------          |
| baseid  | Animasyon olarak bağlı olduğu karakter ID'si.                                                                                |
| newid   | Yeni bir karakter modeli ekler. Model ID'leri 20000 ila 30000 arasında (10000 skin modeli ekleyebilirsiniz.) kullanılabilir. |
| dffname | .dff dosyasının adını girdiğiniz parametre. Collision ayarlarınız models klasöründe saklanır.                                |
| txdname | .txd dosyasının adını girdiğiniz parametre. Texturelerinizin saklandığı dosya models klasöründe saklanır.                    |

## Sonuçlar

1: Fonksiyon başarıyla çalıştığında.

0: Fonksiyon başarısız olduğunda.

## Örnekler

```c
public OnGameModeInit()
{
    AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");
    AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");
    return 1;
}
```

```
AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");
AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");
```

## Notlar

:::tip

Bunun çalışması için useartwork ayarının aktif olması gerekir. (server.cfg ayarı)

:::

:::warning

Bu fonksiyonu ne zaman çağırabileceğinize dair bir kısıtlama bulunmuyor. Fakat bu fonksiyonu OnFilterScriptInit/OnGameModeInit içerisinde çağıramazsınız, çünkü oyun içerisinde bulunan bazı oyuncular modelleri indirmemiş olabilir.



:::

## Bağlantılı Fonksiyon

- [SetPlayerSkin](../../scripting/functions/SetPlayerSkin.md): Oyuncunun skinini ayarlarsınız.
