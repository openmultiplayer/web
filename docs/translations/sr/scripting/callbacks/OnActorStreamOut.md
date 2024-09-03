---
title: OnActorStreamOut
description: Ова повратна функција је позван када се актор престане приказивати у играчевом клијенту.
tags: ["actor"]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Опис

Ова повратна функција је позвана када се актор престане приказивати у играчевом клијенту.

| Name        | Description                                   |
| ----------- | --------------------------------------------- |
| actorid     | ID актора који се престао приказивати играчу. |
| forplayerid | ID играча коме се актор престао приказивати.  |

## Узвраћања

Увек се позива први у филтерскриптама.

## Примери

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Actor %d is now streamed out for you.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Белешке

<TipNPCCallbacks />

## Повезане функције

Следећи callback може бити корисан, јер је на неки начин повезан са функцијом датом горе.

- [OnActorStreamIn](OnActorStreamIn): Ова повратна функција се позива када клијент играча стримује актора унутар домета.
