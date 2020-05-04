---
id: fexist
title: fexist
description: Checks if a specific file exists in the scriptfiles directory.
tags: []
---

<TagLinks />

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
