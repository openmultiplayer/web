---
id: fexist
title: fexist
description: Checks if a specific file exists in the scriptfiles directory.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## Description

Checks if a specific file exists in the scriptfiles directory.

| Name        | Description                                            |
| ----------- | ------------------------------------------------------ |
| pattern[]   | The name of the file, optionally containing wild-cards |
| characters. |

## Returns

The number of files that match the pattern.

## Examples

```c
// Check, if "file.txt" exists
if(fexist("file.txt"))
{
    // Success

    // Print the success
    print("\"file.txt\" exists.");
}
else
{
    // Error
    print("\"file.txt\" does not exist.");
}
```

## Related Functions

- [fopen](../functions/fopen): Open a file.
- [fclose](../functions/fclose): Close a file.
- [ftemp](../functions/ftemp): Create a temporary file stream.
- [fremove](../functions/fremove): Remove a file.
- [fwrite](../functions/fwrite): Write to a file.
- [fread](../functions/fread): Read a file.
- [fputchar](../functions/fputchar): Put a character in a file.
- [fgetchar](../functions/fgetchar): Get a character from a file.
- [fblockwrite](../functions/fblockwrite): Write blocks of data into a file.
- [fblockread](../functions/fblockread): Read blocks of data from a file.
- [fseek](../functions/fseek): Jump to a specific character in a file.
- [flength](../functions/flength): Get the file length.
- [fexist](../functions/fexist): Check, if a file exists.
- [fmatch](../functions/fmatch): Check, if patterns with a file name matches.
