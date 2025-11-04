---
title: fwrite
sidebar_label: fwrite
description: Schrijf tekst naar een bestand.
tags: ["file management"]
---

<LowercaseNote />

## Beschrijving

Schrijf tekst naar een bestand.

| Naam | Beschrijving |
| ---- | ------------ |
| File:handle | Handle van het bestand (van fopen). |
| const string[] | De te schrijven tekst. |

## Retourneert

De lengte van de geschreven string (integer).

## Voorbeeld

```c
new File:handle = fopen("file.txt", io_append);
if (handle)
{
    fwrite(handle, "This is a text.\r\n");
    fclose(handle);
}
```


