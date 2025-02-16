---
title: print
description: Штампа стринг у конзолу сервера (не у игри чету) и у логове (log.txt).
tags: ["console"]
---

<LowercaseNote />

## Опис

Штампа стринг у конзолу сервера (не у игри чету) и у логове (log.txt).

| Име                   | Опис                          |
| --------------------- | ----------------------------- |
| const string[]        | Стринг који се штампа.        |
<!-- | foreground (optional) | The foreground colour to use. |
| background (optional) | The background colour to use. | -->

## Враћа

Ова функција не враћа неке специфичне вредности.

<!--:::tip

Kada je boja ostavljena na -1, koriste ste default boje konzole servera.

:::

:::tip

Na vecini sistema se mogu koristiti sledeci kodovi za boje: crna (0), crvena (1), zelena (2), zuta (3), plava (4), ljubicasta (5), svetlo-plava (6) i bela (7).

:::

:::tip

Vecina sistema takodje podrzava svetlije/tamnije boje od ovih boja. Za highlight teksta se mogu koristiti sledece: regular (0) i svetla/tamna (1).

:::-->

## Пример

```c
public OnGameModeInit( )
{
    print("Gamemode started.");
    return 1;
}
```

## Повезане функције.

- [printf](printf.md): Штампа форматирану поруку у лог сервера и конзолу.
