---
id: db_num_fields
title: db_num_fields
description: Get the number of fields in a result.
tags: ["sqlite"]
---

:::warning

This function starts with lowercase letter.

:::

## Description

Get the number of fields in a result.

| Name              | Description             |
| ----------------- | ----------------------- |
| DBResult:dbresult | The result of db_query. |

## Returns

The number of fields in the result.

## Examples

```c
// ...
// Declare "db_result" and select all rows and columns from "spawn_list"
new DBResult:db_result = db_query(db_handle, "SELECT * FROM `spawn_list` WHERE 1;");

// Print the amount of columns selected
printf("Selected columns: %d", db_num_fields(db_result));

// Do...
do
{
    // ...
}

// While next row has been fetched
while(db_next_row(db_handle));

// Frees result
db_free_result(db_result);
// ...
```

## Notes

:::warning

Using an invalid handle will crash your server! Get a valid handle by using db_query. But it's protected against NULL
references.

:::

## Related Functions

- [db_open](db_open.md): Open a connection to an SQLite database
- [db_close](db_close.md): Close the connection to an SQLite database
- [db_query](db_query.md): Query an SQLite database
- [db_free_result](db_free_result.md): Free result memory from a db_query
- [db_num_rows](db_num_rows.md): Get the number of rows in a result
- [db_next_row](db_next_row.md): Move to the next row
- [db_field_name](db_field_name.md): Returns the name of a field at a particular index
- [db_get_field](db_get_field.md): Get content of field with specified ID from current result row
- [db_get_field_assoc](db_get_field_assoc.md): Get content of field with specified name from current result row
- [db_get_field_int](db_get_field_int.md): Get content of field as an integer with specified ID from current result row
- [db_get_field_assoc_int](db_get_field_assoc_int.md): Get content of field as an integer with specified name from current result row
- [db_get_field_float](db_get_field_float.md): Get content of field as a float with specified ID from current result row
- [db_get_field_assoc_float](db_get_field_assoc_float.md): Get content of field as a float with specified name from current result row
- [db_get_mem_handle](db_get_mem_handle.md): Get memory handle for an SQLite database that was opened with db_open.
- [db_get_result_mem_handle](db_get_result_mem_handle.md): Get memory handle for an SQLite query that was executed with db_query.
- [db_debug_openfiles](db_debug_openfiles.md)
- [db_debug_openresults](db_debug_openresults.md)

