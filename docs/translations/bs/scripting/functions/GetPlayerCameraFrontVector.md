---
title: GetPlayerCameraFrontVector
description: Ova funkcija će vratiti trenutni smjer ciljanja igrača u 3-D prostoru, koordinate su u odnosu na položaj kamere, pogledajte GetPlayerCameraPos.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Ova funkcija će vratiti trenutni smjer ciljanja igrača u 3-D prostoru, koordinate su u odnosu na položaj kamere, pogledajte GetPlayerCameraPos.

| Ime      | Deskripcija                                              |
| -------- | -------------------------------------------------------- |
| playerid | ID player za koji želite dobiti prednji vektor kamere.   |
| Float:x  | Float za pohraniti X kordinata, proslijeđeno referencom. |
| Float:y  | Float za pohraniti Y kordinata, proslijeđeno referencom. |
| Float:z  | Float za pohraniti Z kordinata, proslijeđeno referencom. |

## Returns

Pozicija je pohranjena u navedenim varijablama.

## Primjeri

```c
// Jednostavna naredba za manipulaciju ovim vektorom
// pomoću pozicija iz GetPlayerCameraPos.
// Ova naredba će stvoriti hidro-projektil u smjeru gdje igrač gleda.
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/test camera vector"))
    {
        new
            Float:fPX, Float:fPY, Float:fPZ,
            Float:fVX, Float:fVY, Float:fVZ,
            Float:object_x, Float:object_y, Float:object_z;

        // Promijeni me da promijeniš ljestvicu koju želiš. Veća skala povećava udaljenost od kamere.
        // Negativna skala će obrnuti vektore i okrenuti ih u suprotnom smjeru.
        const
            Float:fScale = 5.0;

        GetPlayerCameraPos(playerid, fPX, fPY, fPZ);
        GetPlayerCameraFrontVector(playerid, fVX, fVY, fVZ);

        object_x = fPX + floatmul(fVX, fScale);
        object_y = fPY + floatmul(fVY, fScale);
        object_z = fPZ + floatmul(fVZ, fScale);

        CreateObject(345, object_x, object_y, object_z, 0.0, 0.0, 0.0);

        return 1;
    }

    return 0;
}
```

## Zabilješke

:::tip

U 0.3a, prednji vektor kamere dostupan je samo kada je igrač unutar rhino-a, SWAT tenka, vatrogasnog vozila ili pješice. Od 0.3b podaci o kameri se mogu dobiti kada je igrač u bilo kojem vozilu ili pješice.

:::

## Srodne Funkcije

- [GetPlayerCameraPos](GetPlayerCameraPos): Saznajte gdje je kamera igrača.
