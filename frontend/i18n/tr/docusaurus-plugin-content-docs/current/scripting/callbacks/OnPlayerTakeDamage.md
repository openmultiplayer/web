---
title: OnPlayerTakeDamage
sidebar_label: OnPlayerTakeDamage
description: Bu fonksiyon, oyuncu hasar aldığında çağrılır. 
tags: ["player"]
---

## Açıklama

Bu fonksiyon, oyuncu hasar aldığında çağrılır. 

| Parametre       | Açıklama                                                                                                                          |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------|
| playerid        | Hasar alan oyuncunun ID'si.                                                                                                       |
| issuerid        | Hasarı veren oyuncunun ID'si. Eğer kişi kendi kendine hasar vermişse INVALID_PLAYER_ID olarak geçer.                              |
| Float:amount    | Oyuncunun aldığı hasar miktarı. (can ve zırh birbirine kombinlidir)                                                               |
| WEAPON:weaponid | Hasarı veren silahın ID'si.                                                                                                       |
| bodypart        | Vurulan vücut bölgesi. |

## Çalışınca Vereceği Sonuçlar

1 - Fonksiyon, diğer filterscript kodlarında çağrılmaz. 

0 - Bu, fonksiyonun diğer filterscript kodlarında çağrılmasına izin verir. 

Her zaman Filterscript komutlarında ilk olarak çağrılır, bu nedenle 1 döndürmek diğer Filterscript komutlarının görmesini engeller. 

## Örnek

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)|
{
    if (issuerid != INVALID_PLAYER_ID) // Hasar veren kişi kendi değilse...
    {
        new
            infoString[128],
            weaponName[24],
            victimName[MAX_PLAYER_NAME],
            attackerName[MAX_PLAYER_NAME];

        GetPlayerName(playerid, victimName, sizeof (victimName));
        GetPlayerName(issuerid, attackerName, sizeof (attackerName));

        GetWeaponName(weaponid, weaponName, sizeof (weaponName));

        format(infoString, sizeof(infoString), "%s adlı kişi %s adlı kişiye %.0f hasar verdi, silah: %s, vücut bölgesi: %d", attackerName,  victimName, amount, weaponName, bodypart);
        SendClientMessageToAll(-1, infoString);
    }
    return 1;
}

public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID && weaponid == 34 && bodypart == 9) // Hasar veren kişi kendi değilse, silah ID'si keskin nişancı tüfeğine (34) eşitse ve vurulan vücut parçası 9 ise...
    {
        // kişinin canını 0 olarak ayarlıyoruz ve böylece kafadan tek mermi ile ölmüş oluyor.
        SetPlayerHealth(playerid, 0.0);
    }
    return 1;
}
```

## Notlar

:::tip

Eğer hasar bir ateş kaynağındansa (molotof, vb.) weaponid 37(flame thrower) olarak döner. Eğer hasar bir patlama kaynağıysa weaponid 51 olarak döner. Hasar miktarı, kalan sağlık maksimum hasardan daha az olsa bile her zaman silahın verebileceği maksimum hasardır. Yani bir oyuncu 100.0 cana sahipse ve hasar değeri 46.2 olan Desert Eagle ile vurulduğunda, o oyuncuyu öldürmek için 3 atış gerekir. Son mermi isabet ettiğinde oyuncunun sadece 7.6 sağlığı kalmasına rağmen, son atışta diğe mermiler gibi 46.2'lik bir hasar miktarı gösterecektir. 

:::

:::warning

GetPlayerHealth ve GetPlayerArmour, bu fonksiyon çağrılmadan önce oyuncunun eski miktarlarını döndürecektir. Bir dizi dizini kullanmadan önce daima issuerid'in geçerli olup olmadığını kontrol edin. 

:::
