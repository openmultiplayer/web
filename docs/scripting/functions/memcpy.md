---
id: memcpy
title: memcpy
description: Copy bytes from one location to another.
tags: []
---

## Description

Copy bytes from one location to another.


| Name | Description |
|------|-------------|
|dest[] | An array into which the bytes from source are copied
in.|
|const source[] | The source array.|
|index | The start index in bytes in the destination array where the data should be copied to.|
|numbytes | The number of bytes (not cells) to copy.|
|maxlength=sizeof dest | The maximum number of cells that fit in the destination buffer.|


## Returns

True on success, false on failure.


## Examples


```c
//Concatenate two strings with memcpy
new destination[64] = "This is ";
new source[] = "a string in a 32 Bit Array";
memcpy(destination, source, strlen(destination) * 4, sizeof source * 4, sizeof destination);
print(destination);
//Output: This is a string in a 32 Bit Array
```


## Related Functions


-  strcmp: Compare two strings to see if they are the same.
-  strfind: Search for a substring in a string.
-  strtok: Search for a variable typed after a space.
-  strdel: Delete part/all of a string.
-  strins: Put a string into another string.
-  strlen: Check the length of a string.
-  strmid: Extract characters from a string.
-  strpack: Pack a string into a destination.
-  strval: Find the value of a string.
-  strcat: Concatenate two strings.