---
title: Tempos de Espera (Cooldowns)
sidebar_label: Tempos de Espera (Cooldowns)
description: Um tutorial para escrever tempos de espera para limitar ações do usuário usando contagem de ticks e evitando o uso de timers.
---

Este tutorial aborda a escrita de uma mecânica de gameplay comumente usada em jogos de ação: tempos de espera (cooldowns). Um cooldown é uma ferramenta para limitar a frequência com que um jogador pode fazer algo. Isso pode ser algo como usar uma habilidade, como cura, ou escrever mensagens no chat. Ele permite que você diminua a taxa com que os jogadores fazem coisas, seja para fins de balanceamento de gameplay ou para prevenir spam.

Primeiro, vou exemplificar a forma _ruim_ de fazer um cooldown usando `SetTimer` para atualizar o estado.

## Usando Timers

Digamos, por exemplo, que você tenha uma ação específica que só pode ser executada uma vez a cada tantos segundos. Eu vejo muitas pessoas (incluindo Southclaws, muitos anos atrás) fazendo algo assim:

```pawn
static bool:IsPlayerAllowedToDoThing[MAX_PLAYERS];

OnPlayerInteractWithServer(playerid)
/* Isso pode ser qualquer tipo de evento de entrada que um jogador faz, como:
 *  Inserir um comando
 *  Pegar um pickup
 *  Entrar em um checkpoint
 *  Pressionar um botão
 *  Entrar em uma área
 *  Usar um diálogo
 */
{
    // Isso só funciona quando o jogador tem permissão
    if (IsPlayerAllowedToDoThing[playerid])
    {
        // Faz o que o jogador solicitou
        DoTheThingThePlayerRequested();

        // Remove a permissão do jogador
        IsPlayerAllowedToDoThing[playerid] = false;

        // Permite que o jogador faça a coisa novamente em 10 segundos
        SetTimerEx("AllowPlayer", 10000, false, "d", playerid);

        return 1;
    }
    else
    {
        SendClientMessage(playerid, -1, "Você ainda não pode fazer isso!");

        return 0;
    }
}

// Chamado 10 segundos após o jogador fazer a coisa
public AllowPlayer(playerid)
{
    IsPlayerAllowedToDoThing[playerid] = true;
    SendClientMessage(playerid, -1, "Você pode fazer a coisa novamente! :D");
}
```

Isso está tudo bem, funciona, o jogador não poderá fazer aquela coisa novamente por 10 segundos após usá-la.

Veja outro exemplo aqui, este é um cronômetro que mede quanto tempo leva para um jogador fazer uma corrida simples de ponto a ponto:

```pawn
static
    StopWatchTimerID[MAX_PLAYERS],
    StopWatchTotalTime[MAX_PLAYERS];

StartPlayerRace(playerid)
{
    // Chama uma função a cada segundo
    StopWatchTimerID[playerid] = SetTimerEx("StopWatch", 1000, true, "d", playerid);
}

public StopWatch(playerid)
{
    // Incrementa o contador de segundos
    StopWatchTotalTime[playerid]++;
}

OnPlayerFinishRace(playerid)
{
    new str[128];

    format(str, 128, "Você levou %d segundos para fazer isso", StopWatchTotalTime[playerid]);
    SendClientMessage(playerid, -1, str);

    KillTimer(StopWatchTimerID[playerid]);
}
```

Esses dois exemplos são comuns e funcionam bem. No entanto, há uma forma muito melhor de alcançar ambos os resultados, que é muito mais precisa e pode dar tempos de cronômetro até o milissegundo!

## Usando `GetTickCount()` e `gettime()`

`GetTickCount()` é uma função que retorna o tempo em milissegundos desde que o processo do servidor foi aberto. `gettime()` retorna o número de segundos desde 1º de janeiro de 1970, também conhecido como Timestamp Unix.

Se você chamar qualquer uma dessas funções em dois momentos diferentes e subtrair o primeiro tempo do segundo, de repente você tem um intervalo entre esses dois eventos em milissegundos ou segundos respectivamente! Veja este exemplo:

### Um Cooldown

```pawn
static PlayerAllowedTick[MAX_PLAYERS];

OnPlayerInteractWithServer(playerid)
{
   if (GetTickCount() - PlayerAllowedTick[playerid] > 10000)
   // Isso só funciona quando o tick atual menos o último tick é superior a 10000.
   // Em outras palavras, só funciona quando o intervalo entre as ações é superior a 10 segundos.
   {
       DoTheThingThePlayerRequested();
       PlayerAllowedTick[playerid] = GetTickCount(); // Atualiza a contagem de ticks com o tempo mais recente.

       return 1;
   }
   else
   {
       SendClientMessage(playerid, -1, "Você ainda não pode fazer isso!");

       return 0;
   }
}
```

Ou, alternativamente, a versão com `gettime()`:

```pawn
static PlayerAllowedSeconds[MAX_PLAYERS];

OnPlayerInteractWithServer(playerid)
{
   if (gettime() - PlayerAllowedSeconds[playerid] > 10)
   // Isso só funciona quando os segundos atuais menos os últimos segundos é superior a 10.
   // Em outras palavras, só funciona quando o intervalo entre as ações é superior a 10 segundos.
   {
       DoTheThingThePlayerRequested();
       PlayerAllowedSeconds[playerid] = gettime(); // Atualiza a contagem de segundos com o tempo mais recente.

       return 1;
   }
   else
   {
       SendClientMessage(playerid, -1, "Você ainda não pode fazer isso!");

       return 0;
   }
}
```

Há muito menos código ali, sem necessidade de uma função pública ou um timer. Se você realmente quiser, pode colocar o tempo restante na mensagem de erro:

(Estou usando SendFormatMessage neste exemplo)

```pawn
SendFormatMessage(
    playerid,
    -1,
    "Você ainda não pode fazer isso! Pode novamente em %d ms",
    10000 - (GetTickCount() - PlayerAllowedTick[playerid])
);
```

Esse é um exemplo muito básico, seria melhor converter esse valor em MS para uma string de `minutos:segundos.milissegundos`, mas vou postar esse código no final.

### Um Cronômetro

Espero que você consiga ver como isso é poderoso para obter intervalos entre eventos, vamos olhar outro exemplo

```pawn
static Stopwatch[MAX_PLAYERS];

StartPlayerRace(playerid)
{
    Stopwatch[playerid] = GetTickCount();
}

OnPlayerFinishRace(playerid)
{
    new
        interval,
        str[128];

    interval = GetTickCount() - Stopwatch[playerid];

    format(str, 128, "Você levou %d milissegundos para fazer isso", interval);
    SendClientMessage(playerid, -1, str);
}
```

Neste exemplo, a contagem de ticks é salva na variável do jogador quando ele inicia a corrida. Quando ele termina, o tick atual (de quando ele terminou) tem aquele tick inicial (o valor menor) subtraído dele e assim nos deixa com a quantidade de milissegundos entre o início e o fim da corrida.

#### Detalhamento

Agora vamos detalhar o código um pouco.

```pawn
new Stopwatch[MAX_PLAYERS];
```

Esta é uma variável global, precisamos usá-la para poder salvar a contagem de ticks e recuperar o valor em outro momento (em outras palavras, usá-la em outra função, posteriormente)

```pawn
StartPlayerRace(playerid)
{
    Stopwatch[playerid] = GetTickCount();
}
```

Isso é quando o jogador inicia a corrida, a contagem de ticks do momento é registrada. Se isso acontecer 1 minuto após o servidor iniciar, o valor dessa variável será 60.000 porque são 60 segundos e cada segundo tem mil milissegundos.

Ok, agora temos a variável desse jogador definida em 60.000, agora ele termina a corrida 1 minuto e 40 segundos depois:

```pawn
OnPlayerFinishRace(playerid)
{
    new
        interval,
        str[128];

    interval = GetTickCount() - Stopwatch[playerid];

    format(str, 128, "Você levou %d milissegundos para fazer isso", interval);
    SendClientMessage(playerid, -1, str);
}
```

Aqui é onde o cálculo do intervalo acontece, bom, eu digo cálculo, mas é apenas subtrair dois valores!

GetTickCount() retorna a contagem de ticks atual, então será maior que a contagem de ticks inicial, o que significa que você subtrai a contagem de ticks inicial da contagem de ticks atual para obter seu intervalo entre as duas medidas.

Então, como dissemos, o jogador termina a corrida 1 minuto e 40 segundos depois (100 segundos, ou 100.000 milissegundos), GetTickCount retornará 160.000. Subtraia o valor inicial (que é 60.000) do novo valor (que é 160.000) e você obtém 100.000 milissegundos, que é 1 minuto e 40 segundos, que é o tempo que o jogador levou para fazer a corrida!

## Recapitulação e Notas

Então! Aprendemos que:

- GetTickCount retorna a quantidade de tempo em milissegundos desde que o sistema de computador em que o servidor está rodando foi iniciado.
- E podemos usar isso chamando-o em dois intervalos, salvando o primeiro em uma variável e comparando os dois valores, podemos obter um intervalo preciso em milissegundos entre esses dois eventos.

Por último, você não quer ficar dizendo aos seus jogadores valores de tempo em milissegundos! E se eles levarem uma hora para completar uma corrida?

É melhor usar uma função que recebe os milissegundos e os converte em um formato legível, por exemplo, no exemplo anterior o jogador levou 100.000 milissegundos para fazer a corrida, se você dissesse ao jogador que ele levou tanto tempo, levaria mais tempo para ler aqueles 100.000 e descobrir o que significa em tempo legível para humanos.

[Este pacote](https://github.com/ScavengeSurvive/timeutil) contém uma função para formatar milissegundos em uma string.

Espero que isso tenha ajudado! Eu escrevi porque ajudei algumas pessoas recentemente que não sabiam como usar `GetTickCount()` ou `gettime()` como alternativa para timers ou para obter intervalos etc.
