---

title: DB_GetRowCount
sidebar_label: DB_GetRowCount
description: Retorna o número de linhas de um resultado obtido com DB_ExecuteQuery.
keywords:
  - sqlite
tags: ["sqlite"]

---

## Descrição

Retorna o número de linhas de um resultado de [DB_ExecuteQuery](DB_ExecuteQuery).

| Nome               | Descrição                                                   |
| ------------------ | ----------------------------------------------------------- |
| DBResult:dbresult | Resultado retornado por [DB_ExecuteQuery](DB_ExecuteQuery) |

## Retorno

Número de linhas no resultado.

## Exemplo

```c
// examples.inc

Examples_ListNames(DB:dbConnectionHandle)
{
    new DBResult:db_result_set = DB_ExecuteQuery("SELECT `name` FROM `examples`");

    if (db_result_set)
    {
        new result[256];
        new rows = DB_GetRowCount(db_result_set);
        printf("Número de linhas: %d", rows);

        do
        {
            DB_GetFieldStringByName(db_result_set, "name", result, sizeof result);
            // Fazer algo com 'result' aqui
        }
        while (DB_SelectNextRow(db_result_set));

        DB_FreeResultSet(db_result_set);
    }
}
```

```c
// mode.pwn

#include <examples>

static DB:gDBConnectionHandle;

public OnGameModeInit()
{
    gDBConnectionHandle = DB_Open("example.db");

    if (gDBConnectionHandle)
    {
        print("Conexão com banco \"example.db\" criada com sucesso.");
        Examples_ListNames(gDBConnectionHandle);
    }
    else
    {
        print("Falha ao abrir conexão com banco \"example.db\".");
    }

    return 1;
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

* [DB_Open](DB_Open): Abre conexão com banco SQLite
* [DB_Close](DB_Close): Fecha conexão com banco SQLite
* [DB_ExecuteQuery](DB_ExecuteQuery): Executa consulta no banco
* [DB_FreeResultSet](DB_FreeResultSet): Libera memória do resultado
* [DB_GetRowCount](DB_GetRowCount): Obtém número de linhas do resultado
* [DB_SelectNextRow](DB_SelectNextRow): Avança para próxima linha
* [DB_GetFieldCount](DB_GetFieldCount): Obtém número de campos do resultado
* [DB_GetFieldName](DB_GetFieldName): Retorna nome do campo pelo índice
* [DB_GetFieldString](DB_GetFieldString): Obtém conteúdo do campo pelo índice
* [DB_GetFieldStringByName](DB_GetFieldStringByName): Obtém conteúdo do campo pelo nome
* [DB_GetFieldInt](DB_GetFieldInt): Obtém conteúdo do campo como inteiro pelo índice
* [DB_GetFieldIntByName](DB_GetFieldIntByName): Obtém conteúdo do campo como inteiro pelo nome
* [DB_GetFieldFloat](DB_GetFieldFloat): Obtém conteúdo do campo como float pelo índice
* [DB_GetFieldFloatByName](DB_GetFieldFloatByName): Obtém conteúdo do campo como float pelo nome
* [DB_GetMemHandle](DB_GetMemHandle): Obtém handle de memória do banco aberto com DB_Open
* [DB_GetLegacyDBResult](DB_GetLegacyDBResult): Obtém handle de memória do resultado DB_ExecuteQuery
* [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): Número de conexões abertas
* [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): Número de resultados abertos
