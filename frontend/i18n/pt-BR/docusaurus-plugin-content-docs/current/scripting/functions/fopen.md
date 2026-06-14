---
title: fopen
sidebar_label: fopen
description: "Abra um arquivo (para ler ou gravar)."
tags: ["file management"]
---


<LowercaseNote />

## Descrição

Abra um arquivo (para ler ou gravar).

| Nome | Descrição |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| const filename[] | O caminho para o arquivo a ser aberto (se apenas um nome de arquivo for especificado, ele abrirá o arquivo com o nome especificado na pasta 'scriptfiles'). |
| [filemode:mode](../resources/file-modes) | O modo para abrir o arquivo (padrão: io_readwrite).                                                                                    |

## Retornos

Retorna o identificador do arquivo. Este identificador é usado para leitura e escrita.

0 se não conseguir abrir o arquivo.

## Exemplos

**modo io_read:**

```c
// Abra "file.txt" no modo "somente leitura"
new File:handle = fopen("file.txt", io_read);

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

**modo io_write:**

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

**modo io_readwrite:**

```c
// Abra "file.txt" no modo "leitura e escrita"

new File:handle = fopen("file.txt", io_readwrite);

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

**modo io_append:**

```c
// Abra "file.txt" no modo "somente acréscimo"
new File:handle = fopen("file.txt", io_append);

// Verifique se o arquivo está aberto
if (handle)
{
    // Sucesso

    // Anexar "Isto é um texto.\r\n"
    fwrite(handle, "This is a text.\r\n");

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

:::warning

Se você usar `io_read` e o arquivo não existir, ele retornará uma referência NULL. Usar referências inválidas em funções de arquivo irá travar seu servidor!

:::

## Funções Relacionadas

- [fclose](fclose): Fecha um arquivo.
- [ftemp](ftemp): Crie um fluxo de arquivo temporário.
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

## Recursos relacionados

- [Modos de arquivo](../resources/file-modes)
