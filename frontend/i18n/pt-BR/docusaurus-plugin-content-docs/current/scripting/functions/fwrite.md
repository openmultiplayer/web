---
title: fwrite
sidebar_label: fwrite
description: "Escreva texto em um arquivo."
tags: ["file management"]
---


<LowercaseNote />

## Descrição

Escreva texto em um arquivo.

| Nome | Descrição |
| -------------- | ------------------------------------------------------- |
| File:handle | O identificador do arquivo no qual gravar (retornado por fopen). |
| const string[] | A sequência de texto a ser gravada no arquivo.             |

## Retornos

O comprimento da string escrita como um número inteiro.

## Exemplos

```c
// Abra "file.txt" no modo "somente escrita"
new File:handle = fopen("file.txt", io_write);

// Verifique se o arquivo está aberto
if (handle)
{
    // Sucesso

    // Escreva "I just wrote here!" neste arquivo
    fwrite(handle, "I just wrote here!");

    // Feche o arquivo
    fclose(handle);
}
else
{
    // Erro
    print("Failed to open file \"file.txt\".");
}
```
<br />

```c
// Abra "file.txt" no modo "leitura e escrita"
new File:handle = fopen("file.txt");

// Inicialize "buf"
new buf[128];

// Verifique se o arquivo está aberto
if (handle)
{
    // Sucesso

    // Leia o arquivo inteiro
    while(fread(handle, buf))
    {
        print(buf);
    }

    // Defina o ponteiro do arquivo para o primeiro byte
    fseek(handle, _, seek_begin);

    // Escreva "I just wrote here!" neste arquivo
    fwrite(handle, "I just wrote here!");

    // Feche o arquivo
    fclose(handle);
}
else
{
    // Erro
    print("The file \"file.txt\" does not exists, or can't be opened.");
}
```
<br />

```c
// Abra "file.txt" no modo "somente acréscimo"
new File:handle = fopen("file.txt", io_append);

// Verifique se o arquivo está aberto
if (handle)
{
    // Sucesso

    // Anexar "Isto é um texto.\r\n"
    fwrite(handle, "This is a test.\r\n");

    // Feche o arquivo
    fclose(handle);
}
else
{
    // Erro
    print("Failed to open file \"file.txt\".");
}
```
## Notas

:::tip

Esta função grava no arquivo em UTF-8, que não suporta alguns símbolos de idioma localizados.

:::

:::warning

Usar um identificador inválido irá travar seu servidor! Obtenha um identificador válido usando [fopen](fopen) ou [ftemp](ftemp).

:::

## Funções Relacionadas

- [fopen](fopen): Abra um arquivo.
- [fclose](fclose): Fecha um arquivo.
- [ftemp](ftemp): Crie um fluxo de arquivo temporário.
- [fremove](fremove): Remove um arquivo.
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
