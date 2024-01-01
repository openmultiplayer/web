---
title: "دکمه ها"
---

<div dir="rtl" style={{ textAlign: "right" }}>

:::note نکته
میتوانید در [GetPlayerKeys](../functions/GetPlayerKeys) و [OnPlayerKeyStateChange](../callbacks/OnPlayerKeyStateChange) استفاده کنید.
سمپ از bitmasking برای تعیین کردم کلید فشرده شده یا فشرده نشده استفاده میکند. این یک مقاله درباره bitmasking است: [https://en.wikipedia.org/wiki/Mask\_(computing)](<https://en.wikipedia.org/wiki/Mask_(computing)>)

:::

| کلان‌دستور (ماکرو)                    | مقدار     | کد جایگذاری (روی زمین) (7) | کد جایگذاری (در ماشین) (7) | کلید پیشفرض (روی زمین)                                    | کلید پیشفرض (در ماشین) |
| ------------------------ | --------- | ---------------------------- | ------------------------------- | -------------------------------------------------------- | ------------------------ |
| KEY_ACTION               | 1         | ~k~~PED_ANSWER_PHONE~        | ~k~~VEHICLE_FIREWEAPON_ALT~     | TAB                                                      | ALT GR / LCTRL / NUM0    |
| KEY_CROUCH               | 2         | ~k~~PED_DUCK~                | ~k~~VEHICLE_HORN~               | C                                                        | H / CAPSLOCK             |
| KEY_FIRE                 | 4         | ~k~~PED_FIREWEAPON~          | ~k~~VEHICLE_FIREWEAPON~         | LCTRL / LMB (دکمه چپ ماوس)                          | LALT                     |
| KEY_SPRINT               | 8         | ~k~~PED_SPRINT~              | ~k~~VEHICLE_ACCELERATE~         | SPACE                                                    | W                        |
| KEY_SECONDARY_ATTACK     | 16        | ~k~~VEHICLE_ENTER_EXIT~      | ~k~~VEHICLE_ENTER_EXIT~         | ENTER                                                    | ENTER                    |
| KEY_JUMP                 | 32        | ~k~~PED_JUMPING~             | ~k~~VEHICLE_BRAKE~              | LSHIFT                                                   | S                        |
| KEY_LOOK_RIGHT           | 64        | -                            | ~k~~VEHICLE_LOOKRIGHT~          | -                                                        | E                        |
| KEY_HANDBRAKE/KEY_AIM(1) | 128       | ~k~~PED_LOCK_TARGET~         | ~k~~VEHICLE_HANDBRAKE~          | RMB (دکمه راست ماوس)                                 | SPACE                    |
| KEY_LOOK_LEFT            | 256       | -                            | ~k~~VEHICLE_LOOKLEFT~           | -                                                        | Q                        |
| KEY_LOOK_BEHIND          | 512       | ~k~~PED_LOOKBEHIND~          | ~k~~VEHICLE_LOOKBEHIND~         | NUM1 / MMB (دکمه وسط ماوس - فشردن دکمه چرخش ماوس) | 2                        |
| KEY_SUBMISSION           | 512       | -                            | ~k~~TOGGLE_SUBMISSIONS~         | NUM1 / MMB (دکمه وسط ماوس - فشردن دکمه چرخش ماوس) | 2 / NUMPAD +             |
| KEY_WALK                 | 1024      | ~k~~SNEAK_ABOUT~             | -                               | LALT                                                     | -                        |
| KEY_ANALOG_UP            | 2048      | -                            | ~k~~VEHICLE_TURRETUP~           | NUM8(6)                                                  | NUM8                     |
| KEY_ANALOG_DOWN          | 4096      | -                            | ~k~~VEHICLE_TURRETDOWN~         | NUM2(6)                                                  | NUM2                     |
| KEY_ANALOG_LEFT          | 8192      | ~k~~VEHICLE_LOOKLEFT~        | ~k~~VEHICLE_TURRETLEFT~         | NUM4                                                     | NUM4                     |
| KEY_ANALOG_RIGHT         | 16384     | ~k~~VEHICLE_LOOKRIGHT~       | ~k~~VEHICLE_TURRETRIGHT~        | NUM6                                                     | NUM6                     |
| KEY_YES(2)               | 65536     | ~k~~CONVERSATION_YES~        | ~k~~CONVERSATION_YES~           | Y                                                        | Y                        |
| KEY_NO(2)                | 131072    | ~k~~CONVERSATION_NO~         | ~k~~CONVERSATION_NO~            | N                                                        | N                        |
| KEY_CTRL_BACK(2)         | 262144(4) | ~k~~GROUP_CONTROL_BWD~       | ~k~~GROUP_CONTROL_BWD~          | H                                                        | H                        |
| UNDEFINED(3)             | -         | ~k~~GROUP_CONTROL_FWD~       | ~k~~GROUP_CONTROL_FWD~          | G                                                        | G                        |
| KEY_UP                   | -128      | ~k~~GO_FORWARD~              | ~k~~VEHICLE_STEERUP~            | UP                                                       | UP                       |
| KEY_DOWN                 | 128       | ~k~~GO_BACK~                 | ~k~~VEHICLE_STEERDOWN~          | DOWN                                                     | DOWN                     |
| KEY_LEFT                 | -128      | ~k~~GO_LEFT~                 | ~k~~VEHICLE_STEERLEFT~          | LEFT                                                     | LEFT                     |
| KEY_RIGHT                | 128       | ~k~~GO_RIGHT~                | ~k~~VEHICLE_STEERRIGHT~         | RIGHT                                                    | RIGHT                    |

**(1)** این دکمه در include های سمپ تعریف نشده. شما باید
</div>

```c
#define KEY_AIM KEY_HANDBRAKE
```
<div dir="rtl" style={{ textAlign: "right" }}>
یا از KEY_HANDBRAKE استفاده کنید.

**(2)** در نسخه 0.3d به بعد پشتیبانی میشود. در نسخه های قدیمی تر تشخیص داده نمیشود. این کلید وقتی که پلیر در [حالت تماشاگر](../functions/TogglePlayerSpectating) تشخیص داده نمیشود.

**(3)** GROUP_CONTROL_FWD را نمیتوان در سمپ تشخیص داد، این کلید برای ورود به ماشین به عنوان مسافر به کار میرود. با این حال میتوانید از آن در gametext استفاده کنید.

**(4)** اگر شماره دکمه "262144" کار نکر از شماره دکمه "2" استفاده کنید.

**(6)** فقط وقتی تشخیص داده میشود که که پیکربندی "JOYPAD" برای کنترل کننده انتخاب شده باشد.

**(7)** کد های جاگذاری فقط برای [پیام های کلاینت](../functions/SendDeathMessage)، [textdraw ها](../functions/TextDrawCreate) و [gametext ها](../functions/GameTextForPlayer) به کار میروند.

</div>