---
title: DestroyActor
description: CreateActor ile oluşturulan aktörü silin.
tags: []
---

<VersionWarn version='SA-MP 0.3.7' />

## Açıklama

CreateActor ile oluşturulan aktörü silin.

| Parametre | Açıklama                                                 |
| -------   | -------------------------------------------------------- |
| actorid   | Silinecek aktörün ID'si.                                 |

## Çalışınca Vereceği Sonuçlar

1: Fonksiyon çalıştı ve aktör başarıyla silindi.

0: Fonksiyon geçersiz aktör ID'si girildiği için çalışmadı.

## Örnekler

```c
new MyActor;

public OnFilterScriptInit()
{
    MyActor = CreateActor(...);
    return 1;
}

public OnFilterScriptExit()
{
    DestroyActor(MyActor);
    return 1;
}
```

## Bağlantılı Fonksiyonlar

- [CreateActor](CreateActor): Aktör yaratma. (statik NPC).
