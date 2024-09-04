---
title: OnActorStreamIn
description: Ова повратна функција је позван када се актор појави у играчевом клијенту.
tags: ["actor"]
---

<VersionWarnSR name='повратна функција' version='SA-MP 0.3.7' />

## Опис

Овај колбек се позове када се актор појави у играчевом клијенту.

| Име         | Опис                              |
| ----------- | --------------------------------- |
| actorid     | ID актора који се појавио играчу. |
| forplayerid | ID играча коме се актор појавио.  |

## Враћа

Увек се позива први у филтерскриптама.

## Пример

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Actor %d is now streamed in for you.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Белешке

<TipNPCCallbacksSR />

## Сличне (повратне) функције

Следећи callback може бити корисан, јер је на неки начин повезан са функцијом датом горе.

- [OnActorStreamOut](OnActorStreamOut): Ова повратна функција се позива када клијент играча стримује актора изван домета.
