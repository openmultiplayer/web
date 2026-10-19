---
title: OnGameModeExit
sidebar_label: OnGameModeExit
description: Bu geri çağırma oyun modu sonlandığında, gmx komutu kullanıldığında, sunucu ani kapatıldığında veya GameModeExit kullanıldığında tetiklenir.
tags: []
---

## Açıklama

Bu geri çağırma oyun modu sonlandığında, gmx komutu kullanıldığında, sunucu ani kapatıldığında veya GameModeExit kullanıldığında tetiklenir.

## Çalışınca Vereceği Sonuçlar

Bu geri çağırma dönüşleri ele almaz.

Her zaman ilk olarak gamemode'da çağrılır.

## Örnek

```c
public OnGameModeExit()
{
    print("Gamemode ended.");
    return 1;
}
```

## Notlar

:::tip

- Bu geri çağırma aynı zamanda filterscript içinde changemode veya gmx gibi RCON komutlarıyla yapılan oyun modu değişimini algılamak için kullanılabilir.
- OnGameModeExit 'rcon gmx' konsol komutu ile tetiklendiğinde potansiyel istemci hataları oluşabileceğini unutmayın. Örneğin oyun modunda kullanılan RemoveBuildingForPlayer aşırılığı istemcinin hatalı sonlanmasına neden olabilir.
- Eğer istemci hatalı sonlanırsa bu geri çağırma tetiklenmez, Linux kill komutu işlemlerinde olduğu gibi.

:::

## Bağlantılı Fonksiyonlar

- [GameModeExit](../functions/GameModeExit): Mevcut oyun modundan çıkış yapar.
