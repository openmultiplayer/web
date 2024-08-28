---
title: ConnectNPC
description: Повезује NPC-a на сервер.
tags: ["npc"]
---

## Опис

Повезује NPC-a на сервер.

| Име            | Опис                                                                          |
| -------------- | ----------------------------------------------------------------------------- |
| const name[]   | Име са којим се NPC повеже. Мора да прати иста правила као и нормални играчи. |
| const script[] | NPC име у скрипти које се налази у npcmodes фолдеру (без .amx наставка).      |

## Враћа

Ова функција увек враћа 1.

## Примери

```c
public OnGameModeInit()
{
    ConnectNPC("[BOT]Pilot", "pilot");
    return 1;
}
```

## Белешке

:::tip

NPC нема nametag. Ово може да се направи преко Attach3DTextLabelToPlayer.

:::

## Сличне функције

- [IsPlayerNPC](IsPlayerNPC): Проверава да ли је играч заправо играч или NPC.

## Слични callback-ови

- [OnPlayerConnect](../callbacks/OnPlayerConnect): Позива се кад се играч повеже на сервер.
