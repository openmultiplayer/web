---
title: ChatTextReplacementToggled
sidebar_label: ChatTextReplacementToggled
description: بررسی می‌کند که آیا فیلتر ورودی چت فعال یا غیرفعال است.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

بررسی می‌کند که آیا فیلتر ورودی چت فعال یا غیرفعال است.

## مقادیر بازگشتی

true: فعال.

false: غیرفعال.

## مثال‌ها

```c
printf("فیلتر ورودی چت %s است", ChatTextReplacementToggled() ? "فعال" : "غیرفعال");
```

## توابع مرتبط

- [ToggleChatTextReplacement](ToggleChatTextReplacement): فیلتر ورودی چت را تغییر حالت می‌دهد.
