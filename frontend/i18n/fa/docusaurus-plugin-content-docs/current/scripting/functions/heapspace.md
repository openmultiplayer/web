---
title: heapspace
sidebar_label: heapspace
description: مقدار حافظه موجود برای heap/stack رو بر حسب بایت برمی‌گردونه.
tags: ["core"]
---

<LowercaseNote />

## توضیحات

مقدار حافظه موجود برای heap/stack رو بر حسب بایت برمی‌گردونه.

## مثال‌ها

```c
public OnGameModeInit()
{
    printf("Heapspace: %i kilobytes", heapspace() / 1024);
    return 1;
}
```