---
title: ftemp
sidebar_label: ftemp
description: "Cria um arquivo no diretório “tmp”, “temp” ou raiz com nome aleatório para leitura e escrita."
tags: ["file management"]
---


<LowercaseNote />

## Descrição

Cria um arquivo no diretório “tmp”, “temp” ou raiz com nome aleatório para leitura e escrita. O arquivo é excluído após fclose() ser usado no arquivo.

## Exemplos

```c
// Crie um fluxo de arquivos temporário
new File:t_handle = ftemp();

// Declare a variável "handle"
new File:handle;

// Declare a variável "g_char"
new g_char;

// Verifique se o fluxo de arquivos temporários está aberto
if (t_handle)
{
    // Sucesso

    // Abra "file.txt" no modo "somente leitura" e verifique se o arquivo está aberto
    if (handle = fopen("file.txt", io_read))
    {
        // Obtenha todos os caracteres de "file.txt"
        while((g_char = fgetchar(handle, 0, false)) != EOF)
        {
            // Escreva caracteres em letras minúsculas no fluxo de arquivos temporários
            fputchar(t_handle, tolower(g_char), false);
        }

        // Feche "file.txt"
        fclose(handle);

        // Defina o ponteiro do arquivo do fluxo de arquivo temporário para o primeiro byte
        fseek(t_handle, _, seek_begin);

        // Abra "file1.txt" no modo "somente escrita" e verifique se o arquivo está aberto
        if (handle = fopen("file1.txt", io_write))
        {
            // Sucesso

            // Obtenha todos os caracteres do fluxo de arquivos temporários
            while((g_char = fgetchar(t_handle, 0, false)) != EOF)
            {
                // Escreva o caractere em "file1.txt"
                fputchar(handle, g_char, false);
            }

            // Feche "file1.txt"
            fclose(handle);

            // Defina o ponteiro do arquivo do fluxo de arquivo temporário para o primeiro byte
            fseek(t_handle, _, seek_begin);
        }
        else
        {
            // Erro
            print("Failed to open file \"file1.txt\".");
        }

        // Abra "file2.txt" no modo "somente escrita" e verifique se o arquivo está aberto
        if (handle = fopen("file2.txt", io_write))
        {
            // Sucesso

            // Obtenha todos os caracteres do fluxo de arquivos temporários
            while((g_char = fgetchar(t_handle, 0, false)) != EOF)
            {
                // Escreva o caractere em "file2.txt"
                fputchar(handle, g_char, false);
            }

            // Feche "file2.txt"
            fclose(handle);
        }
        else
        {
            // Erro
            print("Failed to open file \"file2.txt\".");
        }
    }
    else
    {
        // Erro
        print("Failed to open file \"file.txt\".");
    }

    // Feche o fluxo de arquivos temporários
    fclose(t_handle);
}
else
{
    // Erro
    print("Failed to create a temporary file stream.");
}
```
## Notas

:::warning

Esta função pode travar o servidor quando o diretório correto não for criado.

:::

## Funções Relacionadas

- [fopen](fopen): Abra um arquivo.
- [fclose](fclose): Fecha um arquivo.
- [fremove](fremove): Remove um arquivo.
- [fwrite](fwrite): Grava em um arquivo.
- [fread](fread): Leia um arquivo.
- [fputchar](fputchar): Coloca um caractere em um arquivo.
- [fgetchar](fgetchar): Obtenha um caractere de um arquivo.
- [fblockwrite](fblockwrite): Grava blocos de dados em um arquivo.
- [fblockread](fblockread): Lê blocos de dados de um arquivo.
- [fseek](fseek): Salta para um caractere específico em um arquivo.
- [flength](flength): Obtenha o comprimento do arquivo.
- [fexist](fexist): Verifica se existe um arquivo.
- [fmatch](fmatch): Verifica se os padrões com um nome de arquivo correspondem.
- [ftell](ftell): Obtenha a posição atual no arquivo.
- [fflush](fflush): Descarregue um arquivo no disco (certifique-se de que todas as gravações foram concluídas).
- [fstat](fstat): Retorna o tamanho e o carimbo de data/hora de um arquivo.
- [frename](frename): Renomeia um arquivo.
- [fcopy](fcopy): Copia um arquivo.
- [filecrc](filecrc): Retorna o valor CRC de 32 bits de um arquivo.
- [diskfree](diskfree): Retorna o espaço livre em disco.
- [fattrib](fattrib): Defina os atributos do arquivo.
- [fcreatedir](fcreatedir): Crie um diretório.
