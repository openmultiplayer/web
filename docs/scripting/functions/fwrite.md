---
id: fwrite
title: fwrite
description: Write text into a file.
tags: []
---

<TagLinks />

## Description

Write text into a file.

| Name   | Description                                             |
| ------ | ------------------------------------------------------- |
| handle | The handle of the file to write to (returned by fopen). |
| string | The string of text to write in to the file.             |

## Returns

The length of the written string as an integer.

## Examples

```c
// Open "file.txt" in "write only" mode
new File:handle = fopen("file.txt", io_write);

// Check, if file is open
if(handle)
{
	// Success

	// Write "I just wrote here!" into this file
	fwrite(handle, "I just wrote here!");

	// Close the file
	fclose(handle);
}
else
{
	// Error
	print("Failed to open file \"file.txt\".");
}
// Open "file.txt" in "read and write" mode
new File:handle = fopen("file.txt"),

	// Initialize "buf"
	buf[128];

// Check, if file is open
if(handle)
{
	// Success

	// Read the whole file
	while(fread(handle, buf)) print(buf);

	// Set the file pointer to the first byte
	fseek(handle, _, seek_begin);

	// Write "I just wrote here!" into this file
	fwrite(handle, "I just wrote here!");

	// Close the file
	fclose(handle);
}
else
{
	// Error
	print("The file \"file.txt\" does not exists, or can't be opened.");
}
// Open "file.txt" in "append only" mode
new File:handle = fopen("file.txt", io_append);

// Check, if file is open
if(handle)
{
	// Success

	// Append "This is a text.\r\n"
	fwrite(handle, "This is a test.\r\n");

	// Close the file
	fclose(handle);
}
else
{
	// Error
	print("Failed to open file \"file.txt\".");
}
```

## Notes

:::tip

This functions writes to the file in UTF-8, which does not support some localized language symbols.

:::

:::warning

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
