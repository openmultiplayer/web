---
title: ConnectNPC
sidebar_label: ConnectNPC
description: Sunucuya NPC bağlama.
tags: ["npc"]
---

## Açıklama

Sunucuya NPC bağlama.

| Parametre | Açıklama                                                                                  |
| --------- | ----------------------------------------------------------------------------------------- |
| name[]    | NPC'ye verilen isim. Normal oyuncu isimleriyle aynı kurallara uymalıdır (ğ,ü içermez vb)  |
| script[]  | npcmodes klasöründe bulunan NPC uzantılı komut dosyası adı. (.amx uzantısı olmadan)       |

## Çalışınca Vereceği Sonuçlar

Bu fonksiyon her zaman 1 döndürür.

## Örnekler

```c
public OnGameModeInit()
{
    ConnectNPC("[BOT]Pilot", "pilot");
    return 1;
}
```

## Notlar

:::tip

Bağlanan NPC'lerin isim etiketleri bulunmaz. Attach3DTextLabelToPlayer ile yapılabilir.

:::

## Bağlantılı Fonksiyonlar

- [IsPlayerNPC](IsPlayerNPC): Bir oyuncunun bir NPC veya gerçek bir oyuncu olup olmadığını kontrol etme.
- [OnPlayerConnect](../callbacks/OnPlayerConnect): Bu fonksiyon, bir oyuncu sunucuya bağlandığında çağrılır.
