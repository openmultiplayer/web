---
title: clamp
sidebar_label: clamp
description: Dwing een waarde binnen een bereik te vallen.
tags: ["core"]
---

<LowercaseNote />

## Beschrijving

Dwing een waarde binnen een bereik te vallen.

| Naam | Beschrijving |
| ---- | ------------ |
| value | De te begrenzen waarde |
| min | Ondergrens (optioneel=cellmin) |
| max | Bovengrens (optioneel=cellmax) |

## Retourneert

`value` als die tussen `min`–`max` ligt, anders `min` of `max`.

## Voorbeeld

```c
printf("The value is: %d", clamp(3, 5, 10)); // 5
printf("The value is: %d", clamp(7, 5, 10)); // 7
printf("The value is: %d", clamp(100, 5, 10)); // 10
```

Zie de Engelse pagina: [clamp](/docs/scripting/functions/clamp).


