---
title: fread
sidebar_label: fread
description: Lees één regel uit een bestand.
tags: ["file management"]
---

<LowercaseNote />

## Beschrijving

Lees één regel uit een bestand.

| Naam | Beschrijving |
| ---- | ------------ |
| File:handle | Handle van het bestand (van fopen). |
| string[] | Buffer om de gelezen tekst in op te slaan (by ref). |
| size = sizeof (string) | Aantal bytes om te lezen. |
| bool:pack | Of de string packed moet zijn (standaard: false). |

## Retourneert

De lengte van de gelezen tekst (integer).

## Voorbeeld

```c
new File:handle = fopen("file.txt", io_read);
new buf[128];
if (handle)
{
    while (fread(handle, buf))
    {
        print(buf);
    }
    fclose(handle);
}
```


