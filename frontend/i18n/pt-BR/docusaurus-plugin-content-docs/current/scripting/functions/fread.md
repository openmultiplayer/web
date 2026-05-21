---
title: fread
sidebar_label: fread
description: "Leia uma única linha de um arquivo."
tags: ["file management"]
---


<LowercaseNote />

## Descrição

Leia uma única linha de um arquivo.

| Nome | Descrição |
| ---------------------- | -------------------------------------------------------------- |
| File:handle | O identificador do arquivo a ser lido (retornado por fopen).       |
| string[] | Uma matriz de strings para armazenar o texto lido, passado por referência. |
| size = sizeof (string) | O número de bytes a serem lidos.                                   |
| bool:pack | A string deve ser embalada? (padrão: false).                 |

## Retornos

O comprimento da string (o texto lido) como um número inteiro.

## Exemplos

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
## Notas

:::warning

Usar um identificador inválido irá travar seu servidor! Obtenha um identificador válido usando [fopen](fopen) ou [ftemp](ftemp).

:::

## Funções Relacionadas

- [fopen](fopen): Abra um arquivo.
- [fclose](fclose): Fecha um arquivo.
- [ftemp](ftemp): Crie um fluxo de arquivo temporário.
- [fremove](fremove): Remove um arquivo.
- [fwrite](fwrite): Grava em um arquivo.
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
