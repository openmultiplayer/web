---
title: OnRconLoginAttempt
description: Ова повратна функција се позива када неко покуша да се пријави на RCON у игри; било успешно или не.
tags: ["rcon", "administration"]
---

## Опис

Ова повратна функција се позива када неко покуша да се пријави на RCON у игри; било успешно или не.

| Име        | Опис                                                    |
| ---------- | ------------------------------------------------------- |
| ip[]       | IP адреса играча који је покушао да се пријави на RCON. |
| password[] | Лозинка коришћена за пријаву.                           |
| success    | 0 ако је лозинка била нетачна или 1 ако је била тачна.  |

## Враћа

Увек се позива прва у филтер скрипти.

## Пример

```c
public OnRconLoginAttempt(ip[], password[], success)
{
    if (!success) // Ако је лозинка била нетачна
    {
        printf("FAILED RCON LOGIN BY IP %s USING PASSWORD %s", ip, password);
        
        new ipAddress[16];
        
        for (new i = 0; i < MAX_PLAYERS; i++) // Прођите кроз све играче
        {
            if (!IsPlayerConnected(i))
            {
                continue;
            }

            GetPlayerIp(i, ipAddress, sizeof(ipAddress));
            
            if (!strcmp(ip, ipAddress, true)) // Ако је IP адреса играча та IP адреса која је неуспешно покушала да се пријави
            {
                SendClientMessage(i, 0xFFFFFFFF, "Wrong Password. Bye!"); //Пошаљите поруку
                Kick(i); // Они су сада избачени.
                break;
            }
        }
    }
    return 1;
}
```

## Белешке

:::tip

Ова повратна функција се позива само када се користи /rcon login у игри. Ова повратна функција се позива само када играч још није пријављен. Када је играч пријављен, уместо тога се позива [OnRconCommand](OnRconCommand).

:::

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом.

- [OnRconCommand](OnRconCommand): Ова повратна функција се позива када се пошаље RCON команда.

## Повезане функције

Следеће функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом.

- [IsPlayerAdmin](../functions/IsPlayerAdmin): Проверите да ли је играч пријављен на RCON.
- [SetPlayerAdmin](../functions/SetPlayerAdmin): Поставите играча као RCON администратора.
- [SendRconCommand](../functions/SendRconCommand): Пошаљите RCON команду преко скрипте.
