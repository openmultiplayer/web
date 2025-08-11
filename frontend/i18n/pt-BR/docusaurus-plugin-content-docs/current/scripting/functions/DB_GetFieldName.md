---

title: DB\_GetFieldName
sidebar\_label: DB\_GetFieldName
description: Retorna o nome do campo no índice especificado.
keywords:
  - sqlite
tags: ["sqlite"]

---

## Descrição

Retorna o nome de um campo em um índice específico.

| Nome                  | Descrição                                                                            |
| --------------------- | ------------------------------------------------------------------------------------ |
| DBResult\:result      | Resultado de onde obter os dados; retornado por [DB\_ExecuteQuery](DB_ExecuteQuery). |
| field                 | Índice do campo para obter o nome.                                                   |
| output\[]             | Variável onde o nome será armazenado.                                                |
| size = sizeof(output) | Tamanho máximo do nome do campo.                                                     |

## Retorno

Retorna **true** se o handle do resultado for válido, caso contrário **false**.

## Exemplos

```c
static DB:gDBConnectionHandle;

public OnGameModeInit()
{
    gDBConnectionHandle = DB_Open("example.db");

    if (gDBConnectionHandle)
    {
        new DBResult:db_result_set = DB_ExecuteQuery(gDBConnectionHandle, "SELECT * FROM `join_log` LIMIT 1");

        if (db_result_set)
        {
            new columns = DB_GetFieldCount(db_result_set);
            new field_name[32];

            for (new index = 0; index < columns; index++)
            {
                DB_GetFieldName(db_result_set, index, field_name, sizeof field_name);
                printf("Field name at index %d: \"%s\"", index, field_name);
            }

            DB_FreeResultSet(db_result_set);
        }
    }
    else
    {
        print("Failed to open a connection to database \"example.db\".");
    }
}

public OnGameModeExit()
{
    if (DB_Close(gDBConnectionHandle))
    {
        gDBConnectionHandle = DB:0;
    }
    return 1;
}
```

## Notas

## Funções Relacionadas

* [DB\_Open](DB_Open): Abre conexão com banco SQLite
* [DB\_Close](DB_Close): Fecha conexão com banco SQLite
* [DB\_ExecuteQuery](DB_ExecuteQuery): Executa consulta no banco
* [DB\_FreeResultSet](DB_FreeResultSet): Libera memória do resultado
* [DB\_GetRowCount](DB_GetRowCount): Obtém número de linhas do resultado
* [DB\_SelectNextRow](DB_SelectNextRow): Avança para próxima linha
* [DB\_GetFieldCount](DB_GetFieldCount): Obtém número de campos do resultado
* [DB\_GetFieldName](DB_GetFieldName): Retorna nome do campo pelo índice
* [DB\_GetFieldString](DB_GetFieldString): Obtém conteúdo do campo pelo índice
* [DB\_GetFieldStringByName](DB_GetFieldStringByName): Obtém conteúdo do campo pelo nome
* [DB\_GetFieldInt](DB_GetFieldInt): Obtém conteúdo do campo como inteiro pelo índice
* [DB\_GetFieldIntByName](DB_GetFieldIntByName): Obtém conteúdo do campo como inteiro pelo nome
* [DB\_GetFieldFloat](DB_GetFieldFloat): Obtém conteúdo do campo como float pelo índice
* [DB\_GetFieldFloatByName](DB_GetFieldFloatByName): Obtém conteúdo do campo como float pelo nome
* [DB\_GetMemHandle](DB_GetMemHandle): Obtém handle de memória do banco aberto com DB\_Open
* [DB\_GetLegacyDBResult](DB_GetLegacyDBResult): Obtém handle de memória do resultado DB\_ExecuteQuery
* [DB\_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): Número de conexões abertas
* [DB\_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): Número de resultados abertos
