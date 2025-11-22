---
title: GetActorPoolSize
sidebar_label: GetActorPoolSize
description: Sunucuda oluşturulan en yüksek aktör ID'sini kontrol etme.
tags: ["actor"]
---

<VersionWarnTR version='SA-MP 0.3.7' />

## Açıklama

Sunucuda oluşturulan en yüksek aktör ID'sini kontrol etme.

## Örnekler

```c
SetAllActorsHealth(Float:health)
{
    for(new i = 0, j = GetActorPoolSize(); i <= j; i++) // Aktör havuzunu oluşturduk. J fonksiyonunu oluşturulmuş en yüksek ID'ye sahip aktöre eşitledik ve döngümüzü oluşturduk.
    {
        if (IsValidActor(i)) // Eğer i fonksiyonundaki ID geçerli/oluşturulmuş bir aktörse...
        {
            SetActorHealth(i, health); //...canını BLABLA olarak düzenledik.
        }
    }
}
```

## Bağlantılı Fonksiyonlar

- [CreateActor](CreateActor): Aktör oluşturma. (statik NPC).
- [IsValidActor](IsValidActor): Aktörün oluşturulup oluşturulmadığını kontrol etme.
- [SetActorHealth](SetActorHealth): Aktörün can değerini düzenleme.
