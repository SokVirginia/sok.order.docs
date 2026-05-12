# Обзор событий

Модуль расширяет бизнес-логику через события Битрикс. Все обработчики в `/local/modules/sok.order/lib/EventHandlers.php`.

## `OnSaleOrderBeforeSaved`

Вызывается до сохранения заказа.

```php
public static function onOrderBeforeSaved(\Bitrix\Main\Event $event): \Bitrix\Main\EventResult
{
    $order = $event->getParameter('ORDER');
    return new \Bitrix\Main\EventResult(\Bitrix\Main\EventResult::SUCCESS);
}
```

## `OnSaleOrderSaved`

Вызывается после сохранения заказа.

```php
public static function onOrderSaved(\Bitrix\Main\Event $event): void
{
    $isNew = $event->getParameter('IS_NEW');
}
```

## `OnSaleComponentOrderResultPrepared`

Модификация `$arResult` перед отправкой в шаблон.

```php
public static function onResultPrepared(\Bitrix\Main\Event $event): \Bitrix\Main\EventResult
{
    $result = $event->getParameter('RESULT');
    $result['MY_DATA'] = 'value';
    return new \Bitrix\Main\EventResult(
        \Bitrix\Main\EventResult::SUCCESS,
        ['RESULT' => $result]
    );
}
```
