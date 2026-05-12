# Типовые сценарии

## Скидка при выборе доставки

```php
foreach ($order->getShipmentCollection() as $shipment) {
    if ($shipment->getDeliveryId() === MY_DELIVERY_ID) {
        // применяем скидку
    }
}
```

## Уведомление менеджеру

```php
if ($event->getParameter('IS_NEW')) {
    \CEvent::Send('SOK_NEW_ORDER_MANAGER', 's1', [
        'ORDER_ID' => $order->getId(),
    ]);
}
```

## Скрыть способ оплаты для региона

```php
$result['PAY_SYSTEM_LIST'] = array_filter(
    $result['PAY_SYSTEM_LIST'],
    fn($ps) => $ps['ID'] !== HIDDEN_PAYSYSTEM_ID
);
```
