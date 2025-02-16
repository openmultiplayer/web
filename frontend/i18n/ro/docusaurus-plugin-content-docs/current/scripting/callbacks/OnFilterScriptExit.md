---
title: OnFilterScriptExit
sidebar_label: OnFilterScriptExit
description: Acest callback este apelat atunci când un script de filtru este descărcat.
tags: []
---

## Descriere

Acest callback este apelat atunci când un script de filtru este descărcat. Este apelat doar în interiorul filterscript-ului care este descărcat.

## Exemple

```c
public OnFilterScriptExit()
{
    print("\n--------------------------------------");
    print(" FilterScript-ul meu s-a descărcat");
    print("--------------------------------------\n");
    return 1;
}
```

## Related Callbacks

