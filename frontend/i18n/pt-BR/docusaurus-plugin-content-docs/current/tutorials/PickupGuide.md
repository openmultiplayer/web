---
title: Guia de Pickup
sidebar_label: Guia de Pickup
---

Um breve tutorial que ensina como utilizar pickups

## Defina o Pickup

A primeira coisa a ser feita ao criar pickups é criar uma variável para armazenar o ID da Pickup, Isso será feito em uma variável global para que possa ser definido quando você criar o pickup e ler quando você pegar um pickup, chamando um retorno de chamada com o ID do pickup que você pegou, para este exemplo, usaremos o nome "gMyPickup". 

```pawn
new gMyPickup;
```

## Criando a Pickup

Existem duas maneiras de criar Pickups. [CreatePickup](../scripting/functions/CreatePickup) é [AddStaticPickup](../scripting/functions/AddStaticPickup). A Função `AddStaticPickup` não retorna um ID quando é criado, não pode ser destruído e só pode ser usado na Callback `OnGameModeInit`, portanto, para este exemplo, usaremos... [CreatePickup](../scripting/functions/CreatePickup).

** Sintaxe Para [CreatePickup](../scripting/functions/CreatePickup) e:**

**Parâmetros:**

| model        | Modelo da Pickup.                                                               |
| ------------ | --------------------------------------------------------------------------------------------------------- |
| type         | O Tipo de Spawn da Pickup.                                                    |
| Float:X      | Posicao x que a Pickup Será Criada.                                                              |
| Float:Y      | Posicao y que a Pickup Será Criada.                                                                  |
| Float:Z      | Posicao z que a Pickup Será Criada.                                                                  |
| Virtualworld | O ID do virtualworld da pickup. O valor -1 fará com que o pickup seja exibido em todos os virtualworlds. |

Para este exemplo, criaremos uma pickup de dinheiro na Grove Street. 

Agora precisamos decidir sobre um modelo para aparecer no mundo, há muitos modelos para escolher, alguns estão listados no site externo [here](https://dev.prineside.com/en/gtasa_samp_model_id), Aqui Iremos Pegar o Modelo 1274, que é um cifrão(Representa o Dinheiro) . 

Agora, Precisamos de um [Type](../scripting/resources/pickuptypes) Para a Pickup, Na mesma página com os modelos de pickups está uma lista de tipos de pickups descrevendo o que os vários fazem. Queremos que esse pickups desapareça quando você o pegar, para que você não possa pegá-lo repetidamente, mas para reaparecer depois de alguns minutos para que você possa pegá-lo novamente, o tipo 2 faz exatamente isso. 

As Pickups são mais comumente criados quando o script é iniciado, em [OnGameModeInit](../scripting/callbacks/OnGameModeInit) ou [OnFilterScriptInit](../scripting/callbacks/OnFilterScriptInit) dependendo do tipo de script, no entanto, ele pode ir em qualquer função (por exemplo, você pode criar um script de queda de arma que usaria OnPlayerDeath para criar captadores de armas). 

Então, aqui está o código para criar nossa coleta e armazenar o ID em 'gMyPickup': 

```pawn
gMyPickup = CreatePickup(1274, 2, 2491.7900, -1668.1653, 13.3438, -1);
```

### Escolhendo oque a Pickup ira Fazer ao ser Coletada

Quando você pega uma pickup,  [OnPlayerPickUpPickup](../scripting/callbacks/OnPlayerPickUpPickup) é chamado, passando playerid (o jogador que pegou um pickup) e pickupid (o ID do pickup que foi pego). 

Alguns tipos de coleta são projetados para funcionar automaticamente, portanto, não há necessidade de fazer nada em OnPlayerPickUpPickup. Confira as [Pickup Types](.. /scripting/resources/pickuptypes) para obter mais informações. 

Quando um jogador pega nosso pickup, queremos dar a ele R$100, para fazer isso primeiro precisamos verificar se ele pegou nosso pickup de cifrão e não um diferente. Quando tivermos feito isso, podemos dar a eles os R$100: 

```pawn
public OnPlayerPickUpPickup(playerid, pickupid)
{
    // Verifica se o ID da pickup coletada é gMyPickup 
    if(pickupid == gMyPickup)
    {
        // Mensagem Para o Player
        SendClientMessage(playerid, 0xFFFFFFFF, "Voce Recebeu R$100!");
        // Dar Dinheiro ao Player
        GivePlayerMoney(playerid, 100);
    }
    // Se você precisar adicionar mais coletas, basta fazer o seguinte: 
    else if (pickupid == (algum outro pickup))
    {
        // Outra Pickup, fazer outra coisa 
    }
    return 1;
}
```

Parabéns, agora você sabe como criar e lidar com pickups! 

## Leitura Adicional 

Você pode usar o [Streamer](https://github.com/samp-incognito/samp-streamer-plugin) plugin para criar pickups ilimitados com [CreateDynamicPickup](<https://github.com/samp-incognito/samp-streamer-plugin/wiki/Natives-(Pickups)>)

Você também pode criar uma coleta por jogador com [CreatePlayerPickup](../scripting/functions/CreatePlayerPickup).
