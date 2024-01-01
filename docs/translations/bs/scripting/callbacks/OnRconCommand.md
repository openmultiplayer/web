---
title: OnRconCommand
description: Ovaj callback je pozvan kada je komanda poslana kroz server konzolu, upravljanjem RCON-om, ili kroz in-game "/rcon command".
tags: []
---

## Deskripcija

Ovaj callback je pozvan kada je komanda poslana kroz server konzolu, upravljanjem RCON-om, ili kroz in-game "/rcon command".

| Ime   | Deskripcija                                                                   |
| ----- | ----------------------------------------------------------------------------- |
| cmd[] | String koji sadrži komandu koja je upisana, kao i svi proslijeđeni parametri. |

## Returns

Vijek je pozvan prvo u filterskriptama tako da će return-ovanje 0 ovdje blokirati gamemode da ga vidi.

## Primjeri

```c
public OnRconCommand(cmd[])
{
    printf("[RCON]: napisao si '/rcon %s'!", cmd);
    return 0;
}

public OnRconCommand(cmd[])
{
    if (!strcmp(cmd, "hello", true))
    {
        SendClientMessageToAll(0xFFFFFFAA, "Hello World!");
        print("Rekao si hello world"); // Ovo će se pojaviti igraču koji je napisao tu rcon komandu u bijeloj boji
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::tip

"/rcon " nije uključen/svrstan u "cmd" kada igrač napiše komandu. Ako koristite "print" funkciju ovdje, poslat će poruku igraču koji je upisao naredbu u igri, kao i log. Ovaj callback se ne poziva kada igrač nije prijavljen kao RCON administrator. Kada igrač nije prijavljen kao RCON admin i koristi / rcon prijavu, ovaj povratni poziv neće biti pozvan i umjesto toga će se pozvati OnRconLoginAttempt. Međutim, kada je igrač prijavljen kao RCON administrator, upotreba ove komande pozvat će ovaj callback.

:::

:::warning

Moraš da includeaš ovaj callbak u učitanu filterskrtipu kako bi radio u gamemode-u!

:::

## Srodne Funkcije

- [IsPlayerAdmin](../functions/IsPlayerAdmin): Provjerava da li je igrač ulogovan u RCON.
- [OnRconLoginAttempt](OnRconLoginAttempt): Pozvano kada se neko pokuša ulogovati na RCON.
