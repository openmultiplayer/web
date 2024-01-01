---
title: OnGameModeExit
description: Bu callback oyun modu sonlandığında, gmx komutu kullanıldığında, sunucu ani kapatıldığında veya GameModeExit kullanıldığında tetiklenir.
tags: []
---

## Açıklama

Bu callback oyun modu sonlandığında, gmx komutu kullanıldığında, sunucu ani kapatıldığında veya [GameModeExit](../functions/GameModeExit) kullanıldığında tetiklenir.

## Örnekler

```c
public OnGameModeExit()
{
    print("Gamemode ended.");
    return 1;
}
```

## Notlar

:::tip

Bu callback aynı zamanda filterscript içinde changemode veya gmx gibi RCON komutlarıyla yapılan oyun modu değişimini algılamak için kullanılabilir. OnGameModeExit 'rcon gmx' konsol komutu ile tetiklendiğinde potansiyel istemci hataları oluşabileceğini unutmayın. Örneğin oyun modunda kullanılan [RemoveBuildingForPlayer](../functions/RemoveBuildingForPlayer) aşırılığı istemcinin hatalı sonlanmasına neden olabilir. Eğer istemci hatalı sonlanırsa bu callback tetiklenmez, Linux kill komutu ve Windows görevi sonlandırma işlemlerinde olduğu gibi.

:::

## Bağlantılı Fonksiyonlar

- [GameModeExit](../functions/GameModeExit): Mevcut oyun modundan çıkış yapar.
