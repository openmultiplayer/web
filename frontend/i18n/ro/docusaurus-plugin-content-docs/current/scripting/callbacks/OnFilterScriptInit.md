---
title: OnFilterScriptInit
description: Acest callback este apelat atunci când un filterscript este inițializat (încărcat).
tags: []
---

## Descriere

Acest callback este apelat atunci când un filterscript este inițializat (încărcat). Este apelat doar în interiorul filterscript-ului care începe.

## Exemple

```c
public OnFilterScriptInit()
{
    print("\n--------------------------------------");
    print("Filterscript-ul s-a incarcat !.");
    print("--------------------------------------\n");
    return 1;
}
```

## Related Functions
