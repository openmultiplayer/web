---
title: tickcount
sidebar_label: tickcount
description: Bu fonksiyon, sunucunun başlatılmasından bu yana geçen milisaniye sayısını döndürdüğü.
tags: ["time"]
---

<LowercaseNoteTR />

## Açıklama

Bu fonksiyon, sunucunun başlatılmasından bu yana geçen milisaniye sayısını döndürdüğü için GetTickCount'in yerine kullanılabilir.

| İsim           | Açıklama                                                                                                                                                                                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| &granularity=0 | Dönüşte, bu değer, dahili sistem zamanının her saniyede kaç kez işaret edeceğini içerir. Bu değer dolayısıyla bu fonksiyonun dönüş değerinin doğruluğunu belirtir. |

## Çalışınca Vereceği Sonuçlar

Sistemin başlatılmasından bu yana geçen milisaniye sayısı. Bir 32-bit hücre için, bu sayım yaklaşık 24 gün sürekli çalışmadan sonra taşar.

## Bağlantılı Fonksiyonlar

- [GetTickCount](GetTickCount): Her milisaniyede artan bir değer döndürür.
