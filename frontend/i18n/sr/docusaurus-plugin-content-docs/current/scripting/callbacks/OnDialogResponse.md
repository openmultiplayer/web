---
title: OnDialogResponse
description: Ова повратна функција се позива када играч одговори на дијалог који је приказан коришћењем ShowPlayerDialog, било да кликне на дугме, притисне ENTER/ESC, или двоструко кликне на ставку листе (ако користите дијалог стилa листе).
tags: ["dialog"]
---

## Опис

Ова повратна функција се позива када играч одговори на дијалог који је приказан коришћењем `ShowPlayerDialog`, било да кликне на дугме, притисне ENTER/ESC, или двоструко кликне на ставку листе (ако користите дијалог стилa листе).

| Име         | Опис                                                                                                                    |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| playerid    | ID играча који одговара на дијалог.                                                                                     |
| dialogid    | ID дијалога на који је играч одговорио, додељен у ShowPlayerDialog.                                                     |
| response    | 1 за леви дугме и 0 за десно дугме (ако је приказан само један дугме, увек 1).                                          |
| listitem    | ID ставке листе коју је играч изабрао (почиње од 0) (само ако се користи дијалог стилa листе, у супротном ће бити -1).  |
| inputtext[] | Текст који је играч унео у улазно поље или текст изабране ставке листе.                                                 |

## Враћа

Увек се позива прва у филтер скриптама, па враћање 1 тамо блокира друге филтер скрипте од примања те повратне функције.

## Примери

**DIALOG_STYLE_MSGBOX**

```c
// Дефинишите ID дијалога како бисмо могли да обрадимо одговоре.
#define DIALOG_RULES 1

// У некој команди
ShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "Server Rules", "- No Cheating\n- No Spamming\n- Respect Admins\n\nDo you agree to these rules?", "Yes", "No");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_RULES)
    {
        if (response) // Ако су кликнули на 'Да' или притиснули ENTER
        {
            SendClientMessage(playerid, COLOR_GREEN, "Thank you for agreeing to the server rules!");
        }
        else // Притиснули ESC или кликнули на отказивање
        {
            Kick(playerid);
        }
        return 1; // Обрадили смо дијалог, па вратите 1. Баш као у OnPlayerCommandText.
    }

    return 0; // МОРАТЕ вратити 0 овде! Баш као у OnPlayerCommandText.
}
```

**DIALOG_STYLE_INPUT**

```c
#define DIALOG_LOGIN 2

// У некој команди
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Please enter your password:", "Login", "Cancel");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_LOGIN)
    {
        if (!response) // Ако су кликнули на 'Откажи' или притиснули ESC
        {
            Kick(playerid);
        }
        else // Притиснули ENTER или кликнули на дугме 'Пријави се'
        {
            if (CheckPassword(playerid, inputtext))
            {
                SendClientMessage(playerid, COLOR_RED, "You are now logged in!");
            }
            else
            {
                SendClientMessage(playerid, COLOR_RED, "LOGIN FAILED.");

                // Поново прикажите дијалог за пријаву
                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Please enter your password:", "Login", "Cancel");
            }
        }
        return 1; // Обрадили смо дијалог, па вратите 1. Баш као у OnPlayerCommandText.
    }

    return 0; // МОРАТЕ вратити 0 овде! Баш као у OnPlayerCommandText.
}
```

**DIALOG_STYLE_LIST**

```c
#define DIALOG_WEAPONS 3

// У некој команди
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons", "Desert Eagle\nAK-47\nCombat Shotgun", "Select", "Close");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // Ако су кликнули на 'Изабери' или двоструко кликнули на оружје
        {
            // Дајте им оружје
            switch (listitem)
            {
                case 0:
                {
                    GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // Дајте им Desert Eagle
                }
                case 1:
                {
                    GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Дајте им AK-47
                }
                case 2:
                {
                    GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // Дајте им Combat Shotgun
                }
            }
        }
        return 1; // Обрадили смо дијалог, па вратите 1. Баш као у OnPlayerCommandText.
    }

    return 0; // МОРАТЕ вратити 0 овде! Баш као у OnPlayerCommandText.
}
```

**DIALOG_STYLE_TABLIST**

```c
#define DIALOG_WEAPONS 3

// У некој команди
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST, "Weapons",
"Weapon\tAmmo\tPrice\n\
M4\t120\t500\n\
MP5\t90\t350\n\
AK-47\t120\t400",
"Select", "Close");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // Ако су кликнули на 'Изабери' или двоструко кликнули на оружје
        {
            // Дајте им оружје
            switch (listitem)
            {
                case 0:
                {
                    GivePlayerWeapon(playerid, WEAPON_M4, 120); // Дајте им М4
                }
                case 1:
                {
                    GivePlayerWeapon(playerid, WEAPON_MP5, 90); // Дајте им МП5
                }
                case 2:
                {
                    GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Дајте им АК-47
                }
            }
        }
        return 1; // Обрадили смо дијалог, па вратите 1. Баш као у OnPlayerCommandText.
    }

    return 0; // МОРАТЕ вратити 0 овде! Баш као у OnPlayerCommandText.
}
```

## Примери

:::tip

Параметри могу садржати различите вредности, у зависности од стила дијалога ([кликните за више примера](../resources/dialogstyles)).

:::

:::tip

Препоручљиво је да користите функцију switch уколико имате много дијалога.

:::

:::warning

Дијалог играча не нестаје када се гамемоде рестартује, што узрокује да сервер испише "Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn't match last sent dialog ID" ако играч одговори на овај дијалог након рестарта.

:::

## Повезане функције

Следеће функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом.

- [ShowPlayerDialog](../functions/ShowPlayerDialog): Прикажите дијалог играчу.
- [GetPlayerDialogID](../functions/GetPlayerDialogID): Добите ID дијалога који је тренутно приказан играчу.
- [GetPlayerDialogData](../functions/GetPlayerDialogData): Добите податке дијалога који је тренутно приказан играчу.
- [HidePlayerDialog](../functions/HidePlayerDialog): Скријте дијалог који је тренутно приказан играчу.
