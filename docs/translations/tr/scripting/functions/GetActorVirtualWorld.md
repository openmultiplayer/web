---
title: GetActorVirtualWorld
description: Aktörün sanal dünya değerini kontrol etme.
tags: []
---

<VersionWarnTR version='SA-MP 0.3.7' />

## Açıklama

Aktörün sanal dünya değerini kontrol etme.

| Parametre | Açıklama                                         |
| -------   | ------------------------------------------------ |
| actorid   | Sanal dünya değeri kontrol edilecek aktör ID'si. |

## Çalışınca Vereceği Sonuçlar

Aktörün sanal dünyasını çeker. Varsayılan değer sıfırdır. Eğer aktör yoksa bile sanal dünya değerini sıfır olarak çeker.

## Örnekler

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(...); // Aktörü oluşturduk.
    SetActorVirtualWorld(MyActor, 69); // Aktörümüzün sanal dünya değerini 69 yaptık.
    return 1;
}

// Herhangi bir yere 
if (GetActorVirtualWorld(MyActor) == 69) // Eğer aktörümüzün sanal dünya değeri 69'a eşitse...
{
    // Birşey yap...
}
```

## Bağlantılı Fonksiyonlar

- [SetActorVirtualWorld](SetActorVirtualWorld): Aktörün sanal dünya değerini ayarlama.
