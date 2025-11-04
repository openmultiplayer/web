---
title: fopen
sidebar_label: fopen
description: Een bestand openen (lezen/schrijven).
tags: ["file management"]
---

<LowercaseNote />

## Beschrijving

Open een bestand om te lezen of te schrijven.

| Naam | Beschrijving |
| ---- | ------------ |
| const filename[] | Pad naar het bestand (zonder pad opent in 'scriptfiles'). |
| [filemode:mode](../resources/file-modes) | Modus om te openen (standaard: io_readwrite). |

## Retourneert

Een file‑handle (te gebruiken met lees/schrijf functies), of 0 bij falen.

## Voorbeelden

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


