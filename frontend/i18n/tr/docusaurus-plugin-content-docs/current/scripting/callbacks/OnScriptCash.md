---
title: OnScriptCash
description: Bu geri çağırma, oyun içi bir şeyler oyuncuya para verdiğinde çağrılır.
tags: ["player"]
---

:::warning

Bu geri çağırma şu anda çalışmıyor.

:::

## Açıklama

Bu geri çağırma, oyun içi bir şeyler oyuncuya para verdiğinde çağrılır.

| Parametre       | Açıklama                                         |
|----------|--------------------------------------------------|
| playerid | Oyuncuya oyundan para veren oyuncunun kimliği    |
| amount   | Verilen veya alınan para miktarı                 |
| source   | Paranın nereden geldiği                          |

## Çalışınca Vereceği Sonuçlar

Bu fonksiyon şu anda çalışmadığı için bilinmiyor.

## Örnek

```c
// Örnek:

public OnScriptCash(playerid, amount, source)
{
    if (source == SCRIPT_CASH_CASINO)
    {
        SendClientMessage(playerid, -1, "Kumarhaneden $%d kazandınız!", amount);
    }
    else if (source == SCRIPT_CASH_VENDING_MACHINE)
    {
        SendClientMessage(playerid, -1, "Otomattan $%d karşılığında bir kola aldınız", amount);
    }
    return 1;
}
```

## İlgili Fonksiyonlar

Aşağıdaki fonksiyonlar, bir şekilde bu geri çağırma ile ilgili oldukları için faydalı olabilirler.

- [GetPlayerMoney](../functions/GetPlayerMoney): Bir oyuncunun sahip olduğu para miktarını alır.
