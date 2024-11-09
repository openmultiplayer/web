---
title: "Chaves"
---

:::note

Aqui você pode encontrar informações sobre constantes de entrada de teclas usadas por [GetPlayerKeys](../functions/GetPlayerKeys) e [OnPlayerKeyStateChange](../callbacks/OnPlayerKeyStateChange).

SA-MP usa bitmasking para determinar quais teclas estão pressionadas e quais não estão. Aqui está um artigo sobre bitmasking: [http://en.wikipedia.org/wiki/Mask\_(computing)](<http://en.wikipedia.org/wiki/Mask_(computing)>)

:::

---

| Macro                    | Valor     | Código Embedding (A pé) <sup>(6)</sup> | Código Embedding (No Veículo) <sup>(6)</sup> | Tecla Padrão (A pé)                                    | Tecla Padrão (No Veículo) |
| ------------------------ | --------- | ---------------------------- | ------------------------------- | -------------------------------------------------------- | ------------------------ |
| KEY_ACTION               | 1         | \~k~\~PED_ANSWER_PHONE~        | \~k~\~VEHICLE_FIREWEAPON_ALT~     | TAB                                                      | ALT GR / LCTRL / NUM0    |
| KEY_CROUCH               | 2         | \~k~\~PED_DUCK~                | \~k~\~VEHICLE_HORN~               | C                                                        | H / CAPSLOCK             |
| KEY_FIRE                 | 4         | \~k~\~PED_FIREWEAPON~          | \~k~\~VEHICLE_FIREWEAPON~         | LCTRL / LMB (Botão Esquerdo do Mouse)                    | LALT                     |
| KEY_SPRINT               | 8         | \~k~\~PED_SPRINT~              | \~k~\~VEHICLE_ACCELERATE~         | ESPAÇO                                                   | W                        |
| KEY_SECONDARY_ATTACK     | 16        | \~k~\~VEHICLE_ENTER_EXIT~      | \~k~\~VEHICLE_ENTER_EXIT~         | ENTER                                                    | ENTER                    |
| KEY_JUMP                 | 32        | \~k~\~PED_JUMPING~             | \~k~\~VEHICLE_BRAKE~              | LSHIFT                                                   | S                        |
| KEY_LOOK_RIGHT           | 64        | -                            | \~k~\~VEHICLE_LOOKRIGHT~          | -                                                        | E                        |
| KEY_HANDBRAKE/KEY_AIM<sup>(1)</sup> | 128       | \~k~\~PED_LOCK_TARGET~         | \~k~\~VEHICLE_HANDBRAKE~          | RMB (Botão Direito do Mouse)                             | ESPAÇO                    |
| KEY_LOOK_LEFT            | 256       | -                            | \~k~\~VEHICLE_LOOKLEFT~           | -                                                        | Q                        |
| KEY_LOOK_BEHIND          | 512       | \~k~\~PED_LOOKBEHIND~          | \~k~\~VEHICLE_LOOKBEHIND~         | NUM1 / MMB (Botão do Meio do Mouse - Clique na roda do mouse) | 2                        |
| KEY_SUBMISSION           | 512       | -                            | \~k~\~TOGGLE_SUBMISSIONS~         | NUM1 / MMB (Botão do Meio do Mouse - Clique na roda do mouse) | 2 / NUMPAD +             |
| KEY_WALK                 | 1024      | \~k~\~SNEAK_ABOUT~             | -                               | LALT                                                     | -                        |
| KEY_ANALOG_UP            | 2048      | -                            | \~k~\~VEHICLE_TURRETUP~           | NUM8<sup>(5)</sup>                                                  | NUM8                     |
| KEY_ANALOG_DOWN          | 4096      | -                            | \~k~\~VEHICLE_TURRETDOWN~         | NUM2<sup>(5)</sup>                                                  | NUM2                     |
| KEY_ANALOG_LEFT          | 8192      | \~k~\~VEHICLE_LOOKLEFT~        | \~k~\~VEHICLE_TURRETLEFT~         | NUM4                                                     | NUM4                     |
| KEY_ANALOG_RIGHT         | 16384     | \~k~\~VEHICLE_LOOKRIGHT~       | \~k~\~VEHICLE_TURRETRIGHT~        | NUM6                                                     | NUM6                     |
| KEY_YES<sup>(2)</sup>               | 65536     | \~k~\~CONVERSATION_YES~        | \~k~\~CONVERSATION_YES~           | Y                                                        | Y                        |
| KEY_NO<sup>(2)</sup>                | 131072    | \~k~\~CONVERSATION_NO~         | \~k~\~CONVERSATION_NO~            | N                                                        | N                        |
| KEY_CTRL_BACK<sup>(2)</sup>         | 262144<sup>(4)</sup> | \~k~\~GROUP_CONTROL_BWD~       | \~k~\~GROUP_CONTROL_BWD~          | H                                                        | H                        |
| UNDEFINED<sup>(3)</sup>             | -         | \~k~\~GROUP_CONTROL_FWD~       | \~k~\~GROUP_CONTROL_FWD~          | G                                                        | G                        |
| KEY_UP                   | -128      | \~k~\~GO_FORWARD~              | \~k~\~VEHICLE_STEERUP~            | CIMA                                                     | CIMA                     |
| KEY_DOWN                 | 128       | \~k~\~GO_BACK~                 | \~k~\~VEHICLE_STEERDOWN~          | BAIXO                                                    | BAIXO                    |
| KEY_LEFT                 | -128      | \~k~\~GO_LEFT~                 | \~k~\~VEHICLE_STEERLEFT~          | ESQUERDA                                                 | ESQUERDA                 |
| KEY_RIGHT                | 128       | \~k~\~GO_RIGHT~                | \~k~\~VEHICLE_STEERRIGHT~         | DIREITA                                                  | DIREITA                  |

---

**(1):** Tecla não definida nos includes do SA:MP. Você deve definir

```c
#define KEY_AIM KEY_HANDBRAKE
```

ou usar KEY_HANDBRAKE.

**(2):** Essa tecla não pode ser detectada quando o jogador está no [modo espectador](../functions/TogglePlayerSpectating).

**(3):** GROUP_CONTROL_FWD não pode ser detectado no SA-MP, pois é usado internamente para entrar em veículos como passageiro. No entanto, a definição de gametext ainda existe.

**(4):** Se o número da tecla "262144" não funcionar, apenas use o número "2".

**(5):** Só é detectado quando a configuração "JOYPAD" está selecionada para o controle.

**(6)** Códigos de embedding só funcionam para [mensagens do cliente](../functions/SendDeathMessage), [textdraws](../functions/TextDrawCreate) e [gametexts](../functions/GameTextForPlayer).