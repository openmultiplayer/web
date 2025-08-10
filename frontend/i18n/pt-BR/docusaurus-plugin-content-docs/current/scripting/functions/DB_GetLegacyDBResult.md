---

title: DB\_GetLegacyDBResult
sidebar\_label: DB\_GetLegacyDBResult
description: Obtém o handle de memória para um conjunto de resultados SQLite alocado com `DB_ExecuteQuery`.
keywords:

* sqlite
  tags: \["sqlite"]

---

## Descrição

Obtém o handle de memória para um conjunto de resultados SQLite que foi alocado com [DB\_ExecuteQuery](DB_ExecuteQuery).

| Nome             | Descrição                                                               |
| ---------------- | ----------------------------------------------------------------------- |
| DBResult\:result | Índice da consulta (retornado por [DB\_ExecuteQuery](DB_ExecuteQuery)). |

## Retorno

Retorna o handle de memória do conjunto de resultados do banco de dados.

## Exemplo

```c
static DB:gDBConnectionHandle;

public OnGameModeInit()
{
    gDBConnectionHandle = DB_Open("example.db");

    if (gDBConnectionHandle)
    {
        new DBResult:result_set = DB_ExecuteQuery("SELECT * FROM `examples`");
        print("Conexão com banco \"example.db\" criada com sucesso.");
        
        if (result_set)
        {
            printf("Handle de memória do resultado: 0x%x", DB_GetLegacyDBResult(result_set));
            DB_FreeResultSet(result_set);
        }
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
