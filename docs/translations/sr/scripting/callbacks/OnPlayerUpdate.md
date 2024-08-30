---
title: OnPlayerUpdate
description: Ова повратна функција се позива сваки пут када клијент/играч ажурира сервер са својим статусом.
tags: ["player"]
---

## Опис

Ова повратна функција се позива сваки пут када клијент/играч ажурира сервер са својим статусом. Често се користи за креирање прилагођених повратних функција за ажурирања клијента која сервер није активно прати, као што су ажурирања здравља или оклопа или прелазак оружја код играча.

| Име     | Опис                                |
| -------- | ------------------------------------------ |
| playerid | ID играча који шаље ажурирање пакета |

## Враћа

**0** - Ажурирање од овог играча неће бити репликовано другим клијентима.

**1** - Указује да се ово ажурирање може обрадити као обично и послати другим играчима.

Увек се позива прва у филтер скриптама.

## Примери

**Пример 1**

```c
new WEAPON:gPlayerCurrentWeapon[MAX_PLAYERS];

public OnPlayerUpdate(playerid)
{
    new WEAPON:weapon = GetPlayerWeapon(playerid); // Вратите тренутно оружје играча
    if (weapon != gPlayerCurrentWeapon[playerid]) // Ако је променио оружје од последњег ажурирања
    {
        // Хајде да позовемо повратну функцију под називом OnPlayerWeaponChange
        CallLocalFunction("OnPlayerWeaponChange", "iii", playerid, gPlayerCurrentWeapon[playerid], weapon);
        gPlayerCurrentWeapon[playerid] = weapon; // Ажурирај променљиву за оружје
    }
    return 1; // Пошаљите ово ажурирање другим играчима.
}

forward OnPlayerWeaponChange(playerid, WEAPON:oldWeapon, WEAPON:newWeapon);
public OnPlayerWeaponChange(playerid, WEAPON:oldWeapon, WEAPON:newWeapon)
{
    new 
        string[128],
        oldWeaponName[24],
        newWeaponName[24];

    GetWeaponName(oldWeapon, oldWeaponName, sizeof(oldWeaponName));
    GetWeaponName(newWeapon, newWeaponName, sizeof(newWeaponName));

    format(string, sizeof(string), "You changed weapon from %s to %s!", oldWeaponName, newWeaponName);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

**Пример 2**

```c
public OnPlayerUpdate(playerid)
{
    new Float:fHealth;
    GetPlayerHealth(playerid, fHealth);

    if (fHealth != GetPVarFloat(playerid, "faPlayerHealth"))
    { 
        // Здравље играча је промењено од последњег ажурирања -> серверу, тако да је очигледно то оно што је ажурирано.
        // Направимо даље провере да видимо да ли је изгубио или добио здравље, анти-чеат на здравље? ;


        if (fHealth > GetPVarFloat(playerid, "faPlayerHealth"))
        {
           /* Он је добио здравље! Чијење? Напишите своје скрипте овде да бисте утврдили како је играч
            добио здравље! */
        }
        else
        {
            /* Он је изгубио здравље! */
        }

        SetPVarFloat(playerid, "faPlayerHealth", fHealth);
    }
}
```

## Белешке

<TipNPCCallbacks />

:::warning

Ова повратна функција се позива, у просеку, 30 пута у секунди по играчу; користите је само када знате чему служи (или још важније, чему НЕ служи). Учесталост са којом се ова повратна функција позива за сваког играча варира у зависности од тога шта играч ради. Вожња или пуцање ће активирати много више ажурирања него стајање на месту.

:::
