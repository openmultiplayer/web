---
id: db_get_field
title: db_get_field
description: Get the content of a field from db_query.
tags: ["sqlite"]
---

:::warning

This function starts with lowercase letter.

:::

## Description

Get the content of a field from db_query

| Name              | Description                      |
| ----------------- | -------------------------------- |
| DBResult:dbresult | The result to get the data from. |
| field             | The field to get the data from.  |
| result[]          | The result.                      |
| maxlength         | The max length of the field.     |

## Returns

Returns 1 if successful, otherwise 0 if DBResult:dbresult is a NULL reference or the column index not available.

## Examples

```c
// Example function
GetNameBySpawnID(spawn_id)
{
    // Declare "p_name"
    new p_name[MAX_PLAYER_NAME+1];

    // Declare "query" and "db_result"
    static query[60], DBResult:db_result;

    // Formats "query"
    format(query, sizeof query, "SELECT `PlayerName` FROM `spawn_log` WHERE `ID`=%d", spawn_id);

    // Selects the player name by using "spawn_id"
    db_result = db_query(db_handle, query);

    // If there is any valid entry
    if(db_num_rows(db_result))
    {
        // Store data from "PlayerName" into "p_name"
        db_get_field(db_result, 0, p_name, sizeof p_name);
    }

    // Frees the result
    db_free_result(db_result);

    // Returns "p_name"
    return p_name;
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
