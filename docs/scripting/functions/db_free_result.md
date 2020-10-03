---
id: db_free_result
title: db_free_result
description: Frees result memory allocated from db_query.
tags: ["sqlite"]
---

:::warning

This function starts with lowercase letter.

:::

## Description

Frees result memory allocated from db_query.

| Name              | Description        |
| ----------------- | ------------------ |
| DBResult:dbresult | The result to free |

## Returns

If DBResult:dbhandle is a valid handle, it returns 1, otherwise 0 if DBResult:dbhandle is a NULL reference.

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

## Related Functions

- [db_open](../functions/db_open.md): Open a connection to an SQLite database
- [db_close](../functions/db_close.md): Close the connection to an SQLite database
- [db_query](../functions/db_query.md): Query an SQLite database
- [db_free_result](../functions/db_free_result.md): Free result memory from a db_query
- [db_num_rows](../functions/db_num_rows.md): Get the number of rows in a result
- [db_next_row](../functions/db_next_row.md): Move to the next row
- [db_num_fields](../functions/db_num_fields.md): Get the number of fields in a result
- [db_field_name](../functions/db_field_name.md): Returns the name of a field at a particular index
- [db_get_field](../functions/db_get_field.md): Get content of field with specified ID from current result row
- [db_get_field_assoc](../functions/db_get_field_assoc.md): Get content of field with specified name from current result row
- [db_get_field_int](../functions/db_get_field_int.md): Get content of field as an integer with specified ID from current result row
- [db_get_field_assoc_int](../functions/db_get_field_assoc_int.md): Get content of field as an integer with specified name from current result row
- [db_get_field_float](../functions/db_get_field_float.md): Get content of field as a float with specified ID from current result row
- [db_get_field_assoc_float](../functions/db_get_field_assoc_float.md): Get content of field as a float with specified name from current result row
- [db_get_mem_handle](../functions/db_get_mem_handle.md): Get memory handle for an SQLite database that was opened with db_open.
- [db_get_result_mem_handle](../functions/db_get_result_mem_handle.md): Get memory handle for an SQLite query that was executed with db_query.
- [db_debug_openfiles](../functions/db_debug_openfiles.md)
- [db_debug_openresults](../functions/db_debug_openresults.md)
