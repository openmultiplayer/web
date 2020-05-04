---
id: fmatch
title: fmatch
description: Find a filename matching a pattern.
tags: []
---

<TagLinks />

## Description

Find a filename matching a pattern.

| Name          | Description                                                    |
| ------------- | -------------------------------------------------------------- |
| name          | The string to hold the result in, returned as a packed string. |
| const pattern | The pattern that should be matched. May contain wildcards.     |
| index         | The number of the file, in case there are multiple matches.    |
| size          | The maximum size of parameter name                             |

## Returns

true on success, false on failure

## Notes

:::warning

This function does not work in the current SA:MP version!

:::

## Related Functions

- fopen: Open a file.
- fclose: Close a file.
- ftemp: Create a temporary file stream.
- fremove: Remove a file.
- fwrite: Write to a file.
- fread: Read a file.
- fputchar: Put a character in a file.
- fgetchar: Get a character from a file.
- fblockwrite: Write blocks of data into a file.
- fblockread: Read blocks of data from a file.
- fseek: Jump to a specific character in a file.
- flength: Get the file length.
- fexist: Check, if a file exists.
- fmatch: Check, if patterns with a file name matches.
