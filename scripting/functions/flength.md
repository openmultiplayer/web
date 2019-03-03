# flength

## Description

Returns the length of a file.

| Name   | Description                                |
| ------ | ------------------------------------------ |
| handle | The file handle returned by fopen or ftemp |

## Returns

The length of a file, in bytes.

## Examples

```c
// Open "file.txt" in "read only" mode
new File:handle = fopen("file.txt", io_read);

// If "file.txt" is open
if(handle)
{
	// Success

	// Print the size oin bytes of "file.txt"
	printf("File size: %d", flength(handle));

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
