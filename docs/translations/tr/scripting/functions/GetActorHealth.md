---
title: GetActorHealth
description: Aktörün can değerini kontrol etme.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Açıklama

Aktörün can değerini çekin.

| Parametre     | Açıklama                                                                        |
| ------------- | ------------------------------------------------------------------------------- |
| actorid       | Can değeri çekilecek aktörün ID'si.                                             |
| &Float:health | Aktörün can değerini koruma amaçlı girilen bir float değişkeni.                 |

## Çalışınca Vereceği Sonuçlar

1 - Fonksiyon başarıyla çalıştı.

0 - Fonksiyon çalışmadı. (Girilen ID'ye sahip aktör yok/oluşturulmamış.)

NOTE: Aktörün can değeri dönüş değerinde değil, oluşturulan float değişkeninde saklanır.

## Örnekler

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Ammunation üzerinde aktörümüzü oluşturuyoruz.
    SetActorHealth(gMyActor, 100); // Oluşturduğumuz aktörün can değerini 100 yapıyoruz.

    new Float:actorHealth; // Aktörün can değerinin saklanması için yeni bir float değişkeni oluşturuyoruz.
    GetActorHealth(gMyActor, actorHealth); // Oluşturduğumuz float değişkeniyle aktörümüzün can değerini çekiyoruz.
    printf("%d ID'li aktörün %.2f canı var.", gMyActor, actorHealth);  // Kontrol amaçlı debug oluşturuyoruz.
    return 1;
}
```

## Bağlantılı Fonksiyonlar

- [CreateActor](CreateActor): Aktör oluşturma (statik NPC).
- [SetActorHealth](SetActorHealth): Aktörün can değerini düzenleme.
- [SetActorInvulnerable](SetActorInvulnerable): Aktörün dokunulmazlığını düzenleme.
- [IsActorInvulnerable](IsActorInvulnerable): Aktörün dokunulmazlığını kontrol etme.
