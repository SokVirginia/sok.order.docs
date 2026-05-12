# Типовые сценарии

Примеры решения частых задач с помощью модуля.

## Добавить скидку при выборе определённой доставки

```php
use Bitrix\Main\Event;
use Bitrix\Main\EventResult;

public static function onOrderBeforeSaved(Event $event): EventResult
{
    $order = $event->getParameter('ORDER');
    $shipmentCollection = $order->getShipmentCollection();

    foreach ($shipmentCollection as $shipment) {
        if ($shipment->getDeliveryId() === MY_DELIVERY_ID) {
            // Применяем скидку через купон или напрямую
        }
    }

    return new EventResult(EventResult::SUCCESS);
}
```

## Отправить уведомление менеджеру при новом заказе

```php
public static function onOrderSaved(Event $event): void
{
    $order  = $event->getParameter('ORDER');
    $isNew  = $event->getParameter('IS_NEW');

    if (!$isNew) {
        return;
    }

    $orderId    = $order->getId();
    $totalPrice = $order->getPrice();

    \CEvent::Send('SOK_NEW_ORDER_MANAGER', 's1', [
        'ORDER_ID'    => $orderId,
        'ORDER_TOTAL' => $totalPrice,
    ]);
}
```

## Скрыть способ оплаты для определённого региона

```php
public static function onResultPrepared(Event $event): EventResult
{
    $result = $event->getParameter('RESULT');
    $userCity = $_SESSION['CITY'] ?? '';

    if ($userCity === 'Москва') {
        // Убираем из списка нужную платёжную систему
        $result['PAY_SYSTEM_LIST'] = array_filter(
            $result['PAY_SYSTEM_LIST'],
            fn($ps) => $ps['ID'] !== HIDDEN_PAYSYSTEM_ID
        );
    }

    return new EventResult(EventResult::SUCCESS, ['RESULT' => $result]);
}
```

## Заполнить поле заказа автоматически

```php
public static function onOrderBeforeSaved(Event $event): EventResult
{
    $order      = $event->getParameter('ORDER');
    $propertyCollection = $order->getPropertyCollection();

    // Находим свойство по коду
    $prop = $propertyCollection->getItemByOrderPropertyCode('COMMENT_MANAGER');
    if ($prop) {
        $prop->setValue('Авто-комментарий от SOK модуля');
    }

    return new EventResult(EventResult::SUCCESS);
}
```
