---
title: GetPlayerCameraMode
description: Vraća trenutni mod GTA kamere za određenog igrača.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3c R3 i ne radi u nižim verzijama!

:::

## Deskripcija

Vraća trenutni mod GTA kamere [camera mode](../resources/cameramodes) za određenog igrača. Režimi kamere su korisni u određivanju da li igrač cilja...

| Ime      | Deskripcija                              |
| -------- | ---------------------------------------- |
| playerid | ID igrača čija kamera se treba povratiti |

## Returns

Kamera mod kao integer (ili -1 ako igrač nije konektovan).

## Primjeri

```c
/* kada igrač ukuca 'cameramode' u chatu, vidjeti će ovo. */
public OnPlayerText(playerid, text[])
{
    if (strcmp(text, "cameramode", true) == 0)
    {
        new szMessage[22];
        format(szMessage, sizeof(szMessage), "Vaš kamera mod: %d", GetPlayerCameraMode(playerid));
        SendClientMessage(playerid, 0xA9C4E4FF, szMessage);
    }
    return 0;
}
```

## Srodne Funkcije

- [GetPlayerCameraPos](GetPlayerCameraPos): Gdje se nalazi igračeva kamera.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Dobij prednji vektor kamere igrača.
- [SetPlayerCameraPos](SetPlayerCameraPos): Postavi poziciju kamere igrača.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): Postavi gdje bi igračeva kamera trebala biti okrenuta.
- [SetCameraBehindPlayer](SetCameraBehindPlayer): Postavi kameru igrača iz njega. 
