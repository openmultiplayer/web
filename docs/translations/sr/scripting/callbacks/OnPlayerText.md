---
title: OnPlayerText
description: Ова повратна функција се позива када играч пошаље поруку у чету.
tags: ["player"]
---

## Опис

Ова повратна функција се позива када играч пошаље поруку у чету.

| Име      | Опис                                     |
| -------- | ---------------------------------------- |
| playerid | ID играча који је укуцао поруку.         |
| text[]   | Текст поруке коју је играч послао.       |

## Враћа

Увек се позива прва у филтер скриптама, тако да враћање 0 блокира друге скрипте да је виде.

## Пример

```c
public OnPlayerText(playerid, text[])
{
    new string[144];
    format(string, sizeof (string), "(%d) %s", playerid, text);
    SendPlayerMessageToAll(playerid, string);
    return 0; // занемарите подразумевани текст и пошаљите прилагођени.
}
```

## Белешке

<TipNPCCallbacksSR />

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом.

- [OnPlayerCommandText](OnPlayerCommandText): Позива се када играч унесе команду.

## Повезане функције

Следеће функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом.

- [SendPlayerMessageToPlayer](../functions/SendPlayerMessageToPlayer): Присили играча да пошаље текст само једном играчу.
- [SendPlayerMessageToAll](../functions/SendPlayerMessageToAll): Присили играча да пошаље текст свим играчима.
- [ToggleChatTextReplacement](../functions/ToggleChatTextReplacement): Пребацује филтер уноса у чету.
