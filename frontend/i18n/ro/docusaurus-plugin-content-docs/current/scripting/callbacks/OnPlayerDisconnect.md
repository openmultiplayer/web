---
title: OnPlayerDisconnect
sidebar_label: OnPlayerDisconnect
description: Acest callback este apelat atunci când un jucător se deconectează de la server.
tags: ["player"]
---

## Descriere

Acest callback este apelat atunci când un jucător se deconectează de la server.

| Nume     | Descriere                                          |
| -------- | -------------------------------------------------- |
| playerid | ID-ul jucătorului care s-a deconectat.             |
| reason   | Motivul deconectarii. Vezi tabelul de mai jos.     |

## Returnări

0 - Va împiedica alte filterscript-uri să primească acest callback.

1 - Indică faptul că acest callback va fi transmis următorului filterscript.

Este întotdeauna numit primul în filterscript-uri.

## Motive

| ID | Motiv         | Detalii                                                                                                  |
| -- | ------------- | -------------------------------------------------------------------------------------------------------- |
| 0  | Timeout/Crash | Conexiunea jucătorului a fost pierdută. Fie jocul lor s-a prăbușit, fie rețeaua lor a avut o defecțiune. |
| 1  | Quit          | Jucătorul a renunțat intenționat, fie folosind comanda /quit (/q), fie prin meniul de pauză.             |
| 2  | Kick/Ban      | Jucătorul a fost dat afara sau interzis de server.                                                       |

## Example

```c
public OnPlayerDisconnect(playerid, reason)
{
    new
        szString[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);

    new szDisconnectReason[3][] =
    {
        "Timeout/Crash",
        "Quit",
        "Kick/Ban"
    };

    format(szString, sizeof szString, "%s a iesit de pe server, (%s).", playerName, szDisconnectReason[reason]);

    SendClientMessageToAll(0xC4C4C4FF, szString);
    return 1;
}
```

## Note

:::tip

Este posibil ca unele funcții să nu funcționeze corect atunci când sunt utilizate în acest apel invers, deoarece playerul este deja deconectat atunci când este apelat. Aceasta înseamnă că nu puteți obține informații clare din funcții precum GetPlayerIp și GetPlayerPos.

:::

## Funcții similare