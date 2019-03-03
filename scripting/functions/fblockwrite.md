# fblockwrite

## Description

Write data to a file in binary format, while ignoring line brakes and encoding.

| Name                 | Description                                |
| -------------------- | ------------------------------------------ |
| handle               | The File handle to use, opened by fopen(). |
| const buffer[]       | The data to write to the file.             |
| size = sizeof buffer | The number of cells to write.              |

## Returns

This function does not return any specific values.

## Examples

```c
// Define "some_enum"
enum _:some_enum
{
	some_data1,
	some_data2[20],
	Float:some_data3
}

// Declare "some_data"
new some_data[some_enum];

// ...

// Open "file.bin" in "write only" mode
new File:handle = fopen("file.bin", io_write);

// Check, if "file.bin" is open
if(handle)
{
	// Success

	// Write "some_data" into "file.bin"
	fblockwrite(handle, some_data);

	// Close "file.bin"
	fclose(handle);
}
else
{
	// Error
	print("Failed to open \"file.bin\".");
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
