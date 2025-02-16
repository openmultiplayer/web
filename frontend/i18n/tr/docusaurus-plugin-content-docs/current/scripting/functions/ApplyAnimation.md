---
title: ApplyAnimation
sidebar_label: ApplyAnimation
description: Oyuncuya animasyon uygulatma.
tags: []
---

## Açıklama

Bu fonksiyon oyuncuya bir animasyon uygulatmak için kullanılır.

| Parametre  | Açıklama                                                                                                                         |
| ---------- | -------------------------------------------------------------------------------------------                                      |
| playerid   | Animasyonun uygulanacağı oyuncunun ID'si                                                                                         |
| animlib[]  | Seçilen animasyonun kütüphanesi                                                                                                  |
| animname[] | Oynatılacak animasyonun ismi                                                                                                     |
| fDelta     | Animasyon hızı (4.1 tavsiye edilir)                                                                                              |
| loop       | Döngü (Eğer 0 seçilirse animasyon 1 defa oynatılır, 1 seçilirse animasyon kaldırılana kadar oynatılır)                           |
| lockx      | Eğer 0 seçilirse oyuncuyu animasyondan sonra önceki X koordinatına döndürür. 1 ise döndürmez. (Yürüme animasyonları vb. için)    |
| locky      | Üstteki ile aynı ancak Y ekseni için geçerli                                                                                     |
| freeze     | Eğer 1 seçilirse oyuncu animasyon sonrasında dondurulur. Eğer 0 seçilirse oyuncu dondurulmaz                                     |
| time       | Milisaniye cinsinden animasyon süresi (Eğer 0 seçilirse animasyon kaldırılana kadar oynatılır)                                   |
| forcesync  | Görüş alanındaki oyunculara senkron etmek için 1'i seçin. 2 ise 1'le aynıdır ancak animasyon oynatılan kişiye senkron etmez.     |

## Çalışınca Vereceği Sonuçlar

Fonksiyon parametre hatalarından bağımsız sürekli 1 sonucunu döndürür. (hatalı oyuncu, hatalı kütüphane vb.)

## Örnekler

```c
ApplyAnimation(playerid, "PED", "WALK_DRUNK", 4.1, 1, 1, 1, 1, 1, 1);
```

## Notlar

:::tip

'foresync' parametresi opsiyoneldir ve varsayılan ayarı 0'dır. Oyuncular animasyonları kendileri senkronize ettiklerinden çoğu durumda gereksizdir. Bu parametre animasyon oynatılan oyuncuyu gören herkese oyuncunun animasyonu yapıp yapmamasından bağımsız olarak animasyonu oynatmaya zorlar. Bu parametre oyuncunun kendi kendine animasyonu senkron edemediği durumlarda işe yarayabilir. Örneğin dondurulmuş bir oyuncu.

:::

:::warning

Hatalı kütüphane ismi oyuncunun oyununun çökmesine neden olur.

:::

## Bağlantılı Fonksiyonlar

- [ClearAnimations](ClearAnimations): Oyuncunun uyguladığı animasyonları kaldırın.
- [SetPlayerSpecialAction](SetPlayerSpecialAction): Oyuncuya özel bir hareket uygulatın.
