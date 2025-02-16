---
title: floatcmp
sidebar_label: floatcmp
description: Ang floatcmp ay maaaring gamitin upang ihambing ang mga halaga ng float sa bawat isa, upang mapatunayan ang paghahambing.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## Description

Ang floatcmp ay maaaring gamitin upang ihambing ang mga halaga ng float sa bawat isa, upang mapatunayan ang paghahambing.

| Name  | Description                        |
| ----- | ---------------------------------- |
| oper1 | Ang unang float value na ikukumpara  |
| oper2 | Ang pangalawang float value na ikukumpara. |

## Returns

0 kung tumutugma ang value, 1 kung mas malaki ang unang value at -1 kung mas malaki ang 2nd value.

## Examples

```c
floatcmp(2.0, 2.0); // Nagbabalik ng 0 dahil tugma ang mga ito.
floatcmp(1.0, 2.0) // Nagbabalik -1 dahil mas malaki ang pangalawang value.
floatcmp(2.0, 1.0) // Nagbabalik ng 1 dahil mas malaki ang unang value.
```