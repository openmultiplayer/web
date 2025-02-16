---
title: ApplyActorAnimation
sidebar_label: ApplyActorAnimation
description: Aktörlere animasyon yaptırma.
tags: []
---

<VersionWarnTR version='SA-MP 0.3.7' />

## Açıklama

Bu fonksiyon aktörlere animasyon uygulatmak için kullanılır.

| Parametre  | Açıklama                                                                                                                |
| ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| actorid    | Animasyonun uygulanacağı aktörün ID'si                                                                                  |
| animlib[]  | Uygulanacak animasyonun kütüphanesi                                                                                     |
| animname[] | Uygulanacak animasyonun ismi                                                                                            |
| fDelta     | Animasyon oynatma hızı (4.1 tavsiye edilir)                                                                             |
| loop       | Döngü (Eğer 1 seçilirse animasyon sürekli oynatılır. Eğer 0 seçilirse animasyon bir defa oynatılır.)                    |
| lockx      | Eğer 0 seçilirse aktör animasyon bittikten sonra başlamadan önceki koordinatlarına döner                                |
| locky      | Üsttekinin aynısı ancak Y ekseni için geçerlidir                                                                        |
| freeze     | Eğer 1 seçilirse animasyon sonunda aktör dondurulur, hareket edemez. 0 ise tam tersidir                                 |
| time       | Milisaniye cinsinden animasyon süresi. Eğer 0 seçilirse sonsuz kez animasyon oynatılır                                  |

## Çalışınca Vereceği Sonuçlar

1: Fonksiyon başarıyla çalıştı.

0: Fonksiyon çalışamadı. Hatalı aktör ID'si.

## Örnekler

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Ammunation'daki satıcıdan yaratıyoruz
    ApplyActorAnimation(gMyActor, "DEALER", "shop_pay", 4.1, 0, 0, 0, 0, 0); // Animasyonu oynatıyoruz
    return 1;
}
```

## Notlar

:::tip

Animasyon kütüphanesini aktör için önceden yüklemelisiniz(preload). Aksi taktirde fonksiyon tekrar çağırılana kadar animasyon aktöre işlemez.

:::

## Bağlantılı Fonksiyonlar

- [ClearActorAnimations](ClearActorAnimations): Aktöre uygulanmış animasyonları kaldırın.
