---
id: db_field_name
title: db_field_name
description: Returns the name of a field at a particular index.
tags: ["sqlite"]
---

:::warning

This function starts with lowercase letter.

:::

## Description

Returns the name of a field at a particular index.

| Name              | Description                                            |
| ----------------- | ------------------------------------------------------ |
| DBResult:dbresult | The result to get the data from; returned by db_query. |
| field             | The index of the field to get the name of.             |
| result[]          | The result.                                            |
| maxlength         | The max length of the field.                           |

## Returns

Returns 1, if the function was successful, otherwise 0 if DBResult:dbresult is a NULL reference or the column index not
available.

## Examples

```c
// Callback
public OnPlayerCommandText(playerid, cmdtext[])
{
    // If "cmdtext" equals "/getfieldnames"
    if(!strcmp(cmdtext, "/getfieldnames", true, 14))
    {
        // Declare "db_result", "i", and "columns"
        new DBResult:db_result = db_query(db_handle, "SELECT * FROM `join_log`"), i, columns = db_num_fields(db_result), info[30];

        // Iterate from 0 to "columns-1"
        for(; i < columns; i++)
        {
            // Store the name of the i indexed column name into "info"
            db_field_name(db_result, i, info, sizeof info);

            // Print "info"
            printf("Field name: %s", info);
        }

        // Frees the result
        db_free_result(db_result);

        // Returns 1
        return 1;
    }

    // Returns 0
    return 0;
}
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
- [db_num_fields](db_num_fields.md): Get the number of fields in a result
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

