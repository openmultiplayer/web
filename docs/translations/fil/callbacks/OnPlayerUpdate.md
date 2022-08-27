---
title: OnPlayerUpdate
description: This callback is called every time a client/player updates the server with their status.
tags: ["player"]
---

## Paglalarawan

Ang callback na ito ay tinatawag sa tuwing ina-update ng isang kliyente/manlalaro ang server sa kanilang katayuan. Madalas itong ginagamit para gumawa ng mga custom na callback para sa mga update ng kliyente na hindi aktibong sinusubaybayan ng server, gaya ng mga update sa kalusugan o armor o mga manlalaro na nagpapalit ng armas.

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | ID ng player na nagpapadala ng update packet. |

## Returns

0 - Ang pag-update mula sa player na ito ay hindi mai-replicate sa ibang mga kliyente.

1 - Isinasaad na ang update na ito ay maaaring maproseso nang normal at maipadala sa iba pang mga manlalaro.

Lagi itong na tatawag una sa mga filterscript.

## Halimbawa ng Paggamit

```c
public OnPlayerUpdate(playerid)
{
    new iCurWeap = GetPlayerWeapon(playerid); // Ibalik ang kasalukuyang sandata ng manlalaro
    if (iCurWeap != GetPVarInt(playerid, "iCurrentWeapon")) // Kung nagpalit siya ng armas simula noong huling update
    {
        // Tawagan natin ang isang callback na pinangalanang OnPlayerChangeWeapon
        OnPlayerChangeWeapon(playerid, GetPVarInt(playerid, "iCurrentWeapon"), iCurWeap);
        SetPVarInt(playerid, "iCurrentWeapon", iCurWeap);// I-update ang variable ng armas
    }
    return 1; // Ipadala ang update na ito sa ibang mga manlalaro.
}

stock OnPlayerChangeWeapon(playerid, oldweapon, newweapon)
{
    new     s[128],
        oWeapon[24],
        nWeapon[24];

    GetWeaponName(oldweapon, oWeapon, sizeof(oWeapon));
    GetWeaponName(newweapon, nWeapon, sizeof(nWeapon));

    format(s, sizeof(s), "Iniba mo ang iyong sandata mula sa %s patungong %s!", oWeapon, nWeapon);

    SendClientMessage(playerid, 0xFFFFFFFF, s);
}
public OnPlayerUpdate(playerid)
{
    new Float:fHealth;

    GetPlayerHealth(playerid, fHealth);

    if (fHealth != GetPVarFloat(playerid, "faPlayerHealth"))
    {
        // Ang kalusugan ng manlalaro ay nagbago mula noong huling pag-update -> server, kaya malinaw na na-update ang bagay.
        // Suriin natin kung mawawalan o makakakuha ng buhay ang manlalaro, anti-health cheat? ;)

        if (fHealth > GetPVarFloat(playerid, "faPlayerHealth"))
        {
            /* Siya ay nakakuha ng kalusugan! Pandaraya? Sumulat ng iyong sariling mga script dito upang malaman kung paano ang isang manlalaro
            nakakuha ng kalusugan! */
        }
        else
        {
            /* Nawalan siya ng buhay! */
        }

        SetPVarFloat(playerid, "faPlayerHealth", fHealth);
    }
}
```

## Mga Dapat Unawain

<TipNPCCallbacks />

:::warning

- Ang callback na ito ay tinatawag, sa karaniwan, 30 beses bawat segundo, bawat manlalaro; gamitin lamang ito kapag alam mo kung para saan ito (o mas mahalaga kung ano ang HINDI para sa). Ang dalas ng pagtawag sa callback na ito para sa bawat manlalaro ay nag-iiba, depende sa kung ano ang ginagawa ng manlalaro. Ang pagmamaneho o pagbaril ay magti-trigger ng mas maraming update kaysa sa idling.

:::
