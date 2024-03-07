---
title: ClearActorAnimations
description: Aktörün animasyonunu durdurma.
tags: []
---

<VersionWarnTR version='SA-MP 0.3.7' />

## Açıklama

Herhangi bir oluşturulan aktörün yaptığı animasyonunu durdurur.

| Parametre| Açıklama                                                                   |
| -------  | -------------------------------------------------------------------------- |
| actorid  | Animasyonun uygulanacağı aktörün ID'si |

## Çalışınca Vereceği Sonuçlar

1: Fonksiyon başarıyla çalıştı.

0: Fonksiyon geçersiz aktör ID'si girildiği için çalışmadı.

## Örnekler

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(...); // Aktör yaratıyoruz
}

// Herhangi bir yere
ApplyActorAnimation(gMyActor, ...);

// Herhangi bir yere
ClearActorAnimations(gMyActor);
```

## Bağlantılı Fonksiyonlar

- [ApplyActorAnimation](ApplyActorAnimation): Aktörlere animasyon yaptırma.
