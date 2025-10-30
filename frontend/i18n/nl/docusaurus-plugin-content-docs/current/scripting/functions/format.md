---
title: format
sidebar_label: format
description: Een string formatteren met variabelen/waarden.
tags: ["string"]
---

<LowercaseNote />

## Beschrijving

Formatteert een string met variabelen en andere strings.

| Naam           | Beschrijving                             |
| -------------- | ---------------------------------------- |
| output[]       | Buffer voor de uitvoer                    |
| len            | Maximale lengte van `output`              |
| const format[] | De format‑string                          |
| \{Float, _\}:... | Onbeperkt aantal argumenten, diverse tags |

## Retourneert

Geen specifieke returnwaarde.

## Formaatspecificaties

| Code | Betekenis                 |
| ---- | ------------------------- |
| %i   | Unsigned integer          |
| %d   | Signed integer            |
| %s   | String                    |
| %f   | Floating‑point getal      |
| %c   | ASCII‑teken               |
| %x   | Hexadecimaal getal        |
| %b   | Binair getal              |
| %%   | Letterlijk '%'            |
| %q   | Escape voor SQLite (0.3.7 R2) |

## Voorbeelden

```c
new result[128];
new number = 42;
format(result, sizeof(result), "The number is %i.", number);

new str[] = "simple message";
format(result, sizeof(result), "This is a %s containing the number %i.", str, number);

new t[32];
new h, m, s;
gettime(h, m, s);
format(t, sizeof(t), "The time is %02d:%02d:%02d.", h, m, s);

new pct[32];
format(pct, sizeof(pct), "43%s of my shirts are black.", "%%");
```


