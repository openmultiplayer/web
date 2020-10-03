---
id: db_query
title: db_query
description: This function is used to execute an SQL query on an opened SQLite database.
tags: ["sqlite"]
---

:::warning

This function starts with lowercase letter.

:::

## Description

This function is used to execute an SQL query on an opened SQLite database.

| Name    | Description                   |
| ------- | ----------------------------- |
| DB:db   | The database handle to query. |
| query[] | The query to execute.         |

## Returns

The query result index (starting at 1).

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
        // Creates a "player spawn log" table, if it doesn't exists, and frees the result
        db_free_result(db_query(db_handle, "CREATE TABLE IF NOT EXISTS `spawn_log`(`ID` INTEGER PRIMARY KEY AUTOINCREMENT,`PlayerID` INTEGER NOT NULL,`PlayerName` VARCHAR(24) NOT NULL)"));
        print("Successfully created a connection to \"example.db\".");
    }
    // ...
    return 1;
}

public OnGameModeExit()
{
    // If there is a database connection, close it
    if(db_handle) db_close(db_handle);
    // ...
    return 1;
}

public OnPlayerSpawn(playerid)
{
    // Declare "query" and "p_name"
    static query[98], p_name[MAX_PLAYER_NAME+1];

    // Stores the name of the player to "p_name"
    GetPlayerName(playerid, p_name, sizeof p_name);

    // Formats "query"
    format(query, sizeof query, "INSERT INTO `spawn_log` (`PlayerID`,`PlayerName`) VALUES (%d,'%s')", playerid, p_name);

    // Inserts something into "spawn_log" and frees the result
    db_free_result(db_query(db_handle, query));
    // ...
    return 1;
}

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

Always free the result by using db_free_result!

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
