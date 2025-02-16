---
title: OnDialogResponse
description: Этот коллбэк вызывается, когда игрок взаимодействует с диалогом, показанным ему через ShowPlayerDialog.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Описание

Этот коллбэк вызывается, когда игрок взаимодействует с диалогом, показанным ему через ShowPlayerDialog.

| Аргумент        | Описание                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| playerid    | ID игрока, взаимодействующего с диалогом.                                                                      |
| dialogid    | ID диалога, показанного через ShowPlayerDialog, с которым взаимодействует игрок.                                             |
| response    | 1 - нажатие на левую кнопку диалога (Enter), 0 нажатие на правую кнопку диалога (ESC) (всегда 1, если показана только 1 кнопка)                                           |
| listitem    | ID элемента списка, выбранного игроком (начинается с 0) (если у диалога выбран стиль списка, иначе всегда будет -1). |
| inputtext[] | Текст, введённый игроком в диалог или текст элемента списка, если у диалога выбран стиль списка.                                       |

## Результат

Коллбэк всегда срабатывает в filterscript'ах первее, поэтому `return 1` не позволяет другим фильтрскриптам вызвать этот коллбэк

## Пример

```c
// Макрос ID диалога, с которым будет взаимодействие
#define DIALOG_RULES 1

// В каком-либо месте кода
ShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "Правила сервера", "- Нет читам!\n- Не спамить\n- Уважать администрации\n\nВы принимаете данные правила?", "Да", "Нет");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_RULES)
    {
        if (response) // Если игрок нажал на 'Да' или нажал Enter
        {
            SendClientMessage(playerid, COLOR_GREEN, "Thank you for agreeing to the server rules!");
        }
        else // Если игрок нажал на 'Нет' или нажал Esc
        {
            Kick(playerid);
        }
        return 1; // Мы обработали диалог, поэтому возвращаем 1. Прямо как в OnPlayerCommandText.
    }

    return 0; // Вы ДОЛЖНЫ возвращать 0 здесь! Прямо как в OnPlayerCommandText.
}

#define DIALOG_LOGIN 2

// В каком-либо месте кода
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Авторизация", "Введите ваш пароль:", "Войти", "Отмена");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_LOGIN)
    {
        if (!response) // Если игрок нажал 'Отмена' или Esc
        {
            Kick(playerid);
        }
        else // Если игрок нажал 'Войти' или Enter
        {
            if (CheckPassword(playerid, inputtext))
            {
                SendClientMessage(playerid, COLOR_RED, "Вы успешно авторизовались!");
            }
            else
            {
                SendClientMessage(playerid, COLOR_RED, "НЕ УДАЛОСЬ АВТОРИЗОВАТЬСЯ.");

                // Показ диалога авторизации заново
                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Авторизация", "Введите ваш пароль:", "Войти", "Отмена");
            }
        }
        return 1; // Мы обработали диалог, поэтому возвращаем 1. Прямо как в OnPlayerCommandText.
    }

    return 0; // Вы ДОЛЖНЫ возвращать 0 здесь! Прямо как в OnPlayerCommandText.
}
#define DIALOG_WEAPONS 3

// In some command
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Оружие", "Desert Eagle\nAK-47\nБоевой дробовик", "Выбрать", "Закрыть");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // Если игрок нажал 'Выбрать' или сделал двойной клик по оружию
        {
            // Выдаём ему оружие
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // Выдаём desert eagle
                case 1: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Выдаём AK-47
                case 2: GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // Выдаём Боевой дробовик
            }
        }
        return 1; // Мы обработали диалог, поэтому возвращаем 1. Прямо как в OnPlayerCommandText.
    }

    return 0;// Вы ДОЛЖНЫ возвращать 0 здесь! Прямо как в OnPlayerCommandText.
}
#define DIALOG_WEAPONS 3

// In some command
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons",
"Weapon\tAmmo\tPrice\n\
M4\t120\t500\n\
MP5\t90\t350\n\
AK-47\t120\t400",
"Выбрать", "Закрыть");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // Если игрок нажал 'Выбрать' или сделал двойной клик по оружию
        {
            // Выдаём ему оружие
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_M4, 120); // Выдаём M4
                case 1: GivePlayerWeapon(playerid, WEAPON_MP5, 90); // Выдаём MP5
                case 2: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Выдаём AK-47
            }
        }
        return 1; // Мы обработали диалог, поэтому возвращаем 1. Прямо как в OnPlayerCommandText.
    }

    return 0; // Вы ДОЛЖНЫ возвращать 0 здесь! Прямо как в OnPlayerCommandText.
}
```

## Примечания

:::tip

Параметры могут отличаться в зависимости от стиля диалога ([см. больше примеров](../resources/dialogstyles.md)).

:::

:::tip

Это нормально переключаться между диалогами, если у вас их много.

:::

:::warning

Диалог, показанный игроку, не скрывается при рестарте сервера, что приводит к предупреждению: "Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn't match last sent dialog ID" if a player responded to this dialog after restart."

:::

## Функции

- [ShowPlayerDialog](../functions/ShowPlayerDialog.md): Показать диалог игроку.
