# Обзор событий

Модуль расширяет стандартную бизнес-логику оформления заказа через механизм событий Битрикс. Все обработчики подключаются в файле `/local/modules/sok.order/lib/EventHandlers.php`.

## Как работают события

```php
// Битрикс вызывает событие в нужный момент
$event = new \Bitrix\Main\Event('sale', 'OnSaleOrderBeforeSaved', ['ORDER' => $order]);
$event->send();

// Модуль слушает и реагирует
\Bitrix\Main\EventManager::getInstance()->addEventHandler(
    'sale',
    'OnSaleOrderBeforeSaved',
    ['\Sok\Order\EventHandlers', 'onOrderBeforeSaved']
);
```

## Список событий модуля

### `OnSaleOrderBeforeSaved`

Вызывается **до сохранения заказа**. Позволяет модифицировать данные заказа.

```php
public static function onOrderBeforeSaved(\Bitrix\Main\Event $event): \Bitrix\Main\EventResult
{
    $order = $event->getParameter('ORDER');
    
    // Ваша логика здесь
    
    return new \Bitrix\Main\EventResult(\Bitrix\Main\EventResult::SUCCESS);
}
```

**Параметры:**

| Параметр | Тип | Описание |
|---|---|---|
| `ORDER` | `Sale\Order` | Объект заказа |

---

### `OnSaleOrderSaved`

Вызывается **после успешного сохранения заказа**.

```php
public static function onOrderSaved(\Bitrix\Main\Event $event): void
{
    $order = $event->getParameter('ORDER');
    $isNew = $event->getParameter('IS_NEW');
    
    if ($isNew) {
        // Новый заказ создан
    }
}
```

**Параметры:**

| Параметр | Тип | Описание |
|---|---|---|
| `ORDER` | `Sale\Order` | Объект заказа |
| `IS_NEW` | `bool` | `true` если заказ создан впервые |

---

### `OnSaleComponentOrderResultPrepared`

Вызывается перед отправкой данных в шаблон компонента. Позволяет модифицировать `$arResult`.

```php
public static function onResultPrepared(\Bitrix\Main\Event $event): \Bitrix\Main\EventResult
{
    $result = $event->getParameter('RESULT');
    
    // Добавляем свои данные в шаблон
    $result['MY_CUSTOM_DATA'] = 'value';
    
    return new \Bitrix\Main\EventResult(
        \Bitrix\Main\EventResult::SUCCESS,
        ['RESULT' => $result]
    );
}
```
