---
title: db_get_field_float
sidebar_label: db_get_field_float
description: Obtém o conteúdo de um campo como um número de ponto flutuante com o índice do campo especificado.
keywords:
  - sqlite
---

<LowercaseNote />

## Descrição

A função obtém o conteúdo de um campo como um número de ponto flutuante com o índice do campo especificado.

| Nome              | Descrição                                |
| ----------------- | ---------------------------------------- |
| DBResult:dbresult | O resultado de onde obter os dados.     |
| field = 0         | O campo de onde obter os dados.         |

## Retorno

Valor recuperado como um número de ponto flutuante.

## Exemplo

```c
// examples.inc

// ...

static FindFieldIndexByName(DBResult:dbResultSet, const fieldName[])
{
    // Variável de valor de retorno com valor de retorno padrão
    new ret = -1;

    // Contagem de campos
    new field_count = db_num_fields(dbResultSet);

    // Nome do campo atual
    new current_field_name[32];

    // Itera através de todos os campos
    for (new field_index; field_index < field_count; field_index++)
    {
        // Obtém o nome do campo
        if (db_field_name(dbResultSet, field_index, current_field_name, sizeof current_field_name))
        {
            // Compara o nome do campo procurado com o nome do campo atual
            if (!strcmp(fieldName, current_field_name))
            {
                // Sucesso, armazena o índice do campo na variável de valor de retorno
                ret = field_index;

                // Sai do loop
                break;
            }
        }
    }

    // Retorna o índice do campo encontrado ou "-1"
    return ret;
}

Float:Examples_CalculateSum(DB:dbConnectionHandle)
{
    // Variável de valor de retorno
    new Float:ret;

    // Conjunto de resultados do banco de dados
    new DBResult:db_result_set = db_query("SELECT `value` FROM `examples`");

    // Se o conjunto de resultados do banco de dados é válido
    if (db_result_set)
    {
        // Obtém o índice do campo alvo
        new target_field_index = FindFieldIndexByName(db_result_set, "value");

        // Verifica se o índice do campo é válido
        if (target_field_index >= 0)
        {
            // Faz operações
            do
            {
                // Adiciona o valor do campo "example" à variável de valor de retorno
                ret += db_get_field_float(db_result_set, target_field_index);
            }

            // Enquanto a próxima linha puder ser obtida
            while (db_next_row(db_result_set));
        }

        // Libera o conjunto de resultados
        db_free_result(db_result_set);
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

    // Cria uma conexão com um banco de dados
    gDBConnectionHandle = db_open("example.db");

    // Se a conexão com o banco de dados existe
    if (gDBConnectionHandle)
    {
        // Criou com sucesso uma conexão com o banco de dados
        print("Criou com sucesso uma conexão com o banco de dados \"example.db\".");
        printf("Soma calculada: %f", Examples_CalculateSum(gDBConnectionHandle));
    }
    else
    {
        // Falhou ao criar uma conexão com o banco de dados
        print("Falhou ao abrir uma conexão com o banco de dados \"example.db\".");
    }

    // ...

    return 1;
}

public OnGameModeExit()
{
    // Fecha a conexão com o banco de dados se a conexão estiver aberta
    if (db_close(gDBConnectionHandle))
    {
        // Limpeza extra
        gDBConnectionHandle = DB:0;
    }

    // ...

    return 1;
}
```

## Notas

:::warning

Usar um handle inválido diferente de zero irá crashar o seu servidor! Obtenha um handle de conexão de banco de dados válido usando [db_query](db_query).

:::

## Funções Relacionadas

- [db_open](db_open): Abre uma conexão com um banco de dados SQLite
- [db_close](db_close): Fecha a conexão com um banco de dados SQLite
- [db_query](db_query): Consulta um banco de dados SQLite
- [db_free_result](db_free_result): Libera a memória do resultado de uma db_query
- [db_num_rows](db_num_rows): Obtém o número de linhas em um resultado
- [db_next_row](db_next_row): Move para a próxima linha
- [db_num_fields](db_num_fields): Obtém o número de campos em um resultado
- [db_field_name](db_field_name): Retorna o nome de um campo em um índice específico
- [db_get_field](db_get_field): Obtém o conteúdo do campo com ID especificado da linha de resultado atual
- [db_get_field_assoc](db_get_field_assoc): Obtém o conteúdo do campo com nome especificado da linha de resultado atual
- [db_get_field_int](db_get_field_int): Obtém o conteúdo do campo como um inteiro com ID especificado da linha de resultado atual
- [db_get_field_assoc_int](db_get_field_assoc_int): Obtém o conteúdo do campo como um inteiro com nome especificado da linha de resultado atual
- [db_get_field_assoc_float](db_get_field_assoc_float): Obtém o conteúdo do campo como um float com nome especificado da linha de resultado atual
- [db_get_mem_handle](db_get_mem_handle): Obtém o handle de memória para um banco de dados SQLite que foi aberto com db_open.
- [db_get_result_mem_handle](db_get_result_mem_handle): Obtém o handle de memória para uma consulta SQLite que foi executada com db_query.
- [db_debug_openfiles](db_debug_openfiles): A função obtém o número de conexões de banco de dados abertas para fins de depuração.
- [db_debug_openresults](db_debug_openresults): A função obtém o número de resultados de banco de dados abertos.