---
title: OnPlayerUpdate
sidebar_label: OnPlayerUpdate
description: Bu fonksiyon, bir istemci veya oyuncu sunucuyu durumlarıyla her güncellediğinde çağrılır. 
tags: ["player"]
---

## Açıklama

Bu fonksiyon, bir istemci veya oyuncu sunucu durumlarıyla ilgili her güncellendiğinde çağrılır. Genellikle, sağlık veya zırh güncellemeleri veya silah değiştiren oyuncular gibi sunucu tarafından aktif olarak izlenmeyen istemci güncellemeleri için özel çağrıları oluşturmak için kullanılır. 

| Parametre | Açıklama                                    | 
| --------- | ------------------------------------------- |
| playerid  | Güncelleme paketi gönderen oyuncunun ID'si. |

## Çalışınca Vereceği Sonuçlar

0 - Bu oyuncunun güncellemesi diğer oyunculara/istemcilere senkronize edilmeyecektir. 

1 - Bu güncellemenin normal şekilde işlenebileceğini ve diğer oyunculara gönderilebileceğini gösterir.

Filterscript komutlarında her zaman ilk olarak çağrılır. 

## Örnek

```c
public OnPlayerUpdate(playerid)
{
    new iCurWeap = GetPlayerWeapon(playerid); // Oyuncunun eline aldığı silahı kontrol etmek için değişken oluşturuyoruz.
    if (iCurWeap != GetPVarInt(playerid, "iCurrentWeapon")) // Son güncellemeden bu yana silah değiştirdiyse...
    {
        // OnPlayerChangeWeapon adlı fonksiyonu çağıralım.
        OnPlayerChangeWeapon(playerid, GetPVarInt(playerid, "iCurrentWeapon"), iCurWeap);
        SetPVarInt(playerid, "iCurrentWeapon", iCurWeap);// Silah değişkenini güncelleyelim.
    }
    return 1; // Bu güncellemeyi diğer oyunculara gönderin. 
}

stock OnPlayerChangeWeapon(playerid, oldweapon, newweapon)
{
    new     s[128],
        oWeapon[24],
        nWeapon[24];

    GetWeaponName(oldweapon, oWeapon, sizeof(oWeapon));
    GetWeaponName(newweapon, nWeapon, sizeof(nWeapon));

    format(s, sizeof(s), "Eski silahın olan %s numaralı silahı yeni silahın %s ile değiştirdin!", oWeapon, nWeapon);

    SendClientMessage(playerid, 0xFFFFFFFF, s);
}

public OnPlayerUpdate(playerid)
{
    new Float:fHealth;

    GetPlayerHealth(playerid, fHealth);

    if (fHealth != GetPVarFloat(playerid, "faPlayerHealth"))
    {
        // Can kazanıp kazanmadığını kontrol edelim, anti-sağlık hilesi? ;) 

        if (fHealth > GetPVarFloat(playerid, "faPlayerHealth"))
        {
            // Oyuncu can kazanmış! D-d-dostum bu adam bir Hile mi?
            // Bu manyak herife kendi senaryolarını yazıp, istediğin şeyleri yapabilirsin.
        }
        else
        {
            // Oyuncu can kazanmamış.
        }

        SetPVarFloat(playerid, "faPlayerHealth", fHealth);
    }
}
```

## Notlar

<TipNPCCallbacks />

:::warning

Bu fonksiyon, oyuncu başına ortalama olarak saniyede 30 kez çağrılır; yalnızca ne anlama geldiğini (veya daha da önemlisi ne anlama gelmediğini) bildiğiniz zaman kullanın. Her oyuncu için bu çağrılma sıklığı, oyuncunun ne yaptığına bağlı olarak değişir. Araba kullanmak veya ateş etmek, rölantiden çok daha fazla güncellemeyi tetikleyecektir. 

:::

## Bağlantılı Fonksiyonlar
