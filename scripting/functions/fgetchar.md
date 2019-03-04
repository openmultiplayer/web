---
title: fgetchar
description: Reads a single character from a file.
tags: []
---

# fgetchar

## Description

Reads a single character from a file.

| Name   | Description                                                      |
| ------ | ---------------------------------------------------------------- |
| handle | The file handle to use; returned by fopen.                       |
| value  | This parameter has no use, just keep it "0".                     |
| utf8   | If true, read a character as UTF-8, otherwise as extended ASCII. |

## Returns

If succeed, it returns the extended ASCII or UTF-8 value of the character at the current position in the file, otherwise EOF (end of file).

## Examples

```c
// Open "file.txt" in "read only" mode
new File:handle = fopen("file.txt", io_read),
 
	// Declare "g_char"
	g_char;
 
// Check, if "file.txt" is open
if(handle)
{
	// Read all characters, while ignoring UTF-8.
	while((g_char = fgetchar(handle, 0, false)) != EOF)
	{
		// Print the character
		printf("[ \"file.txt\" ] 0x%x", g_char);
	}
 
	// Close "file.txt"
	fclose(handle);
}
else
{
	// Error
	print("Failed to open \"file.txt\".");
}
```

## Notes

::: warning

Using an invalid handle will crash your server! Get a valid handle by using fopen or ftemp.

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
