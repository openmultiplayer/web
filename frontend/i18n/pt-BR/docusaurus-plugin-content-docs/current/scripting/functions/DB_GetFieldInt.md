---

title: DB\_GetFieldInt
sidebar\_label: DB\_GetFieldInt
description: Obtém o conteúdo de um campo como um número inteiro a partir de DB\_ExecuteQuery.
keywords:
  - sqlite
tags: ["sqlite"]

---

## Descrição

Obtém o conteúdo de um campo como um número inteiro a partir de DB\_ExecuteQuery.

| Nome             | Descrição                           |
| ---------------- | ----------------------------------- |
| DBResult\:result | O resultado de onde obter os dados. |
| field = 0        | O campo de onde obter os dados.     |

## Retorno

Valor recuperado como um número inteiro.

## Exemplo

```c
// examples.inc

// ...

static FindFieldIndexByName(DBResult:dbResultSet, const fieldName[])
{
    // Variável de valor de retorno com valor padrão
    new ret = -1;

    // Número de campos
    new field_count = DB_GetFieldCount(dbResultSet);

    // Nome do campo atual
    new current_field_name[32];

    // Itera por todos os campos
    for (new field_index; field_index < field_count; field_index++)
    {
        // Obtém o nome do campo
        if (DB_GetFieldName(dbResultSet, field_index, current_field_name, sizeof current_field_name))
        {
            // Compara o nome do campo procurado com o atual
            if (!strcmp(fieldName, current_field_name))
            {
                // Sucesso, armazena o índice na variável de retorno
                ret = field_index;

                // Sai do loop
                break;
            }
        }
    }

    // Retorna o índice encontrado ou "-1"
    return ret;
}

Examples_CalculateSum(DB:dbConnectionHandle)
{
    // Variável de valor de retorno
    new ret;

    // Conjunto de resultados do banco de dados
    new DBResult:db_result_set = DB_ExecuteQuery("SELECT `value` FROM `examples`");

    // Se o conjunto de resultados é válido
    if (db_result_set)
    {
        // Obtém o índice do campo alvo
        new target_field_index = FindFieldIndexByName(db_result_set, "value");

        // Verifica se o índice é válido
        if (target_field_index >= 0)
        {
            // Faz operações
            do
            {
                // Adiciona o valor do campo "example" à variável de retorno
                ret += DB_GetFieldInt(db_result_set, target_field_index);
            }

            // Enquanto a próxima linha puder ser obtida
            while (DB_SelectNextRow(db_result_set));
        }

        // Libera o conjunto de resultados
        DB_FreeResultSet(db_result_set);
    }

    // Retorna a soma calculada
    return ret;
}
```

```c
// mode.pwn

// ...

#include <examples>

static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // Cria uma conexão com o banco de dados
    gDBConnectionHandle = DB_Open("example.db");

    // Se a conexão com o banco de dados existe
    if (gDBConnectionHandle)
    {
        // Conexão criada com sucesso
        print("Criou com sucesso uma conexão com o banco de dados \"example.db\".");
        printf("Soma calculada: %d", Examples_CalculateSum(gDBConnectionHandle));
    }
    else
    {
        // Falhou ao criar a conexão
        print("Falhou ao abrir uma conexão com o banco de dados \"example.db\".");
    }

    // ...

    return 1;
}

public OnGameModeExit()
{
    // Fecha a conexão com o banco de dados se ela estiver aberta
    if (DB_Close(gDBConnectionHandle))
    {
        // Limpeza extra
        gDBConnectionHandle = DB:0;
    }

    // ...

    return 1;
}
```

## Notas

## Funções Relacionadas

* [DB\_Open](DB_Open): Abre uma conexão com um banco de dados SQLite
* [DB\_Close](DB_Close): Fecha a conexão com um banco de dados SQLite
* [DB\_ExecuteQuery](DB_ExecuteQuery): Consulta um banco de dados SQLite
* [DB\_FreeResultSet](DB_FreeResultSet): Libera a memória do resultado de uma DB\_ExecuteQuery
* [DB\_GetRowCount](DB_GetRowCount): Obtém o número de linhas em um resultado
* [DB\_SelectNextRow](DB_SelectNextRow): Move para a próxima linha
* [DB\_GetFieldCount](DB_GetFieldCount): Obtém o número de campos em um resultado
* [DB\_GetFieldName](DB_GetFieldName): Retorna o nome de um campo em um índice específico
* [DB\_GetFieldString](DB_GetFieldString): Obtém o conteúdo do campo com ID especificado da linha de resultado atual
* [DB\_GetFieldStringByName](DB_GetFieldStringByName): Obtém o conteúdo do campo com nome especificado da linha de resultado atual
* [DB\_GetFieldInt](DB_GetFieldInt): Obtém o conteúdo do campo como um inteiro com ID especificado da linha de resultado atual
* [DB\_GetFieldIntByName](DB_GetFieldIntByName): Obtém o conteúdo do campo como um inteiro com nome especificado da linha de resultado atual
* [DB\_GetFieldFloat](DB_GetFieldFloat): Obtém o conteúdo do campo como um float com ID especificado da linha de resultado atual
* [DB\_GetFieldFloatByName](DB_GetFieldFloatByName): Obtém o conteúdo do campo como um float com nome especificado da linha de resultado atual
* [DB\_GetMemHandle](DB_GetMemHandle): Obtém o handle de memória para um banco de dados SQLite que foi aberto com db\_open.
* [DB\_GetLegacyDBResult](DB_GetLegacyDBResult): Obtém o handle de memória para uma consulta SQLite que foi executada com DB\_ExecuteQuery.
* [DB\_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): Obtém o número de conexões de banco de dados abertas para fins de depuração.
* [DB\_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): Obtém o número de resultados de banco de dados abertos.
