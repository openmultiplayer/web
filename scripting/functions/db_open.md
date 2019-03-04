---
title: db_open
description: This function is used to open a connection to a SQLite database, which is inside the "/scriptfiles" folder.
tags: []
---

# db_open

## Description

This function is used to open a connection to a SQLite database, which is inside the "/scriptfiles" folder

| Name   | Description               |
| ------ | ------------------------- |
| name[] | File name of the database |

## Returns

Returns index (starting at 1) of the database connection .

## Examples

```c
new DB:db_handle;
// ...
public OnGameModeInit()
{
	// Create a connection to the database
	if((db_handle = db_open("example.db")) == DB:0)
	{
		// Error
		print("Failed to open a connection to \"example.db\".");
		SendRconCommand("exit");
	}
	else
	{
		// Success
		print("Successfully created a connection to \"example.db\".");
	}
	// ...
	return 1;
}
 
public OnGameModeExit()
{
	// Close the connection to the database
	db_close(db_handle);
	// ...
	return 1;
}
```

## Notes

::: warning

It will create a new SQLite database, if there is no SQLite database with the same file name available.
Close your database connection with db_close!

:::

## Related Functions

- db_open: Open a connection to an SQLite database
- db_close: Close the connection to an SQLite database
- db_query: Query an SQLite database
- db_free_result: Free result memory from a db_query
- db_num_rows: Get the number of rows in a result
- db_next_row: Move to the next row
- db_num_fields: Get the number of fields in a result
- db_field_name: Returns the name of a field at a particular index
- db_get_field: Get content of field with specified ID from current result row
- db_get_field_assoc: Get content of field with specified name from current result row
- db_get_field_int: Get content of field as an integer with specified ID from current result row
- db_get_field_assoc_int: Get content of field as an integer with specified name from current result row
- db_get_field_float: Get content of field as a float with specified ID from current result row
- db_get_field_assoc_float: Get content of field as a float with specified name from current result row
- db_get_mem_handle: Get memory handle for an SQLite database that was opened with db_open.
- db_get_result_mem_handle: Get memory handle for an SQLite query that was executed with db_query.
- db_debug_openfiles
- db_debug_openresults
