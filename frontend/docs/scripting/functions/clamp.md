---
title: clamp
sidebar_label: clamp
description: Force a value to be inside a range.
tags: ["core"]
---

<LowercaseNote />

## Description

Force a value to be inside a range.

| Name  | Description                                       |
| ----- | ------------------------------------------------- |
| value | The value to force in a range.                    |
| min   | The low bound of the range. _(optional=cellmin)_  |
| max   | The high bound of the range. _(optional=cellmax)_ |

## Returns

value, if it is in the range min–max, min, if value is lower than min or max, if value is higher than max.

## Examples

```c
new
    valueA = 3,
    valueB = 7,
    valueC = 100
;
printf("The value is: %d", clamp(valueA, 5, 10)); // output: "The value is: 5" because 3 is less than 5.
printf("The value is: %d", clamp(valueB, 5, 10)); // output: "The value is: 7" because 7 is between 5 and 10.
printf("The value is: %d", clamp(valueC, 5, 10)); // output: "The value is: 10" because 100 is more than 10.
```
