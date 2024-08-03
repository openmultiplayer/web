---
title: CreateExplosionForPlayer
description: Tek bir oyuncunun gördüğü patlama oluşturma.
tags: ["player"]
---

## Açıklama

Tek bir oyuncunun gördüğü patlama oluşturma. Bu, patlamaları diğer oyunculardan izole etmek veya yalnızca belirli sanal dünyalarda görünmelerini sağlamak için kullanılabilir.

| Parametre    | Açıklama                                          |
| ------------ | ------------------------------------------------- |
| playerid     | Patlamayı görecek oyuncu ID'si.                   |
| Float:X      | Patlamanın oluşacağı X koordinatı.                |
| Float:Y      | Patlamanın oluşacağı Y koordinatı.                |
| Float:Z      | Patlamanın oluşacağı Z koordinatı.                |
| type         | Oluşacak patlamanın türü.                         |
| Float:Radius | Oluşacak patlamanın yarıçapı.                     |

## Çalışınca Vereceği Sonuçlar

Fonksiyon, oyuncu ID'si, patlama türü veya patlamanın yarıçapı geçersiz olsa bile her zaman 1 olarak döndürülür.

## Örnekler

```c
if (strcmp(cmdtext, "/burnme", true) == 0)
{
    new Float: playerPos[3];
    GetPlayerPos(playerid, playerPos[0], playerPos[1], playerPos[2]);
    CreateExplosionForPlayer(playerid, playerPos[0], playerPos[1], playerPos[2], 1, 10.0);
    return 1;
}
```

## Notlar

:::tip

Bir oyuncu maksimum 10 tane patlama görebilir.

:::

## Bağlantılı Fonksiyonlar

- [CreateExplosion](CreateExplosion): Patlama oluşturma.
