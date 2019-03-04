---
title: CallLocalFunction
description: Calls a public function from the script in which it is used.
tags: []
---

# CallLocalFunction

<TagLinks />

## Description

Calls a public function from the script in which it is used.

| Name           | Description                                 |
| -------------- | ------------------------------------------- |
| function[]     | Public function's name.                     |
| format[]       | Tag/format of each variable                 |
| {Float,\_}:... | 'Indefinite' number of arguments of any tag |

## Returns

The value that the only public function returned.

## Examples

```c
forward callMe(const string[]);
public  callMe(const string[])
{
    printf("callMe> %s", string);
    return 1;
}

CallLocalFunction("callMe", "s", "OHAI THAR BAGPUSS!!11");
```

## Notes

::: warning

CallLocalFunction crashes the server if it's passing an empty string.

:::

## Related Functions

- CallRemoteFunction: Call a function in any loaded script.
