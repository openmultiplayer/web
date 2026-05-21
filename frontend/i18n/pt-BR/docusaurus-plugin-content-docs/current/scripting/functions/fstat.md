---
title: fstat
sidebar_label: fstat
description: "Retorna o tamanho e o carimbo de data/hora de um arquivo."
tags: ["file management"]
---


<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## Descrição

Retorna o tamanho e o carimbo de data/hora de um arquivo.

| Nome | Descrição |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| const filename[] | O nome do arquivo.                                                                                                                                                                                                                            |
| &size | Se a função for bem-sucedida, esse parâmetro mantém o tamanho do arquivo no retorno.                                                                                                                                                             |
| &timestamp | Se a função for bem-sucedida, este parâmetro mantém a hora da última modificação do arquivo no retorno.                                                                                                                                     |
| &attrib | Se a função for bem-sucedida, esse parâmetro conterá os atributos do arquivo.                                                                                                                                                                         |
| &inode | Se a função for bem-sucedida, este parâmetro contém o número do inode do arquivo. Um número de inode é um número que identifica exclusivamente um arquivo e geralmente indica a posição física (o início) do arquivo no disco ou cartão de memória. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. (Arquivo não existe)

## Exemplos

```c
new
    size,
    timestamp,
    attrib,
    inode;

if (fstat("file.txt", size, timestamp, attrib, inode))
{
    // Sucesso

    printf("size = %d, timestamp = %d, attrib = %d, inode = %d", size, timestamp, attrib, inode);
}
else
{
    // Erro
    print("The file \"file.txt\" does not exists, or can't be opened.");
}
```
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
- [frename](frename): Renomeia um arquivo.
- [fcopy](fcopy): Copia um arquivo.
- [filecrc](filecrc): Retorna o valor CRC de 32 bits de um arquivo.
- [diskfree](diskfree): Retorna o espaço livre em disco.
- [fattrib](fattrib): Defina os atributos do arquivo.
- [fcreatedir](fcreatedir): Crie um diretório.
