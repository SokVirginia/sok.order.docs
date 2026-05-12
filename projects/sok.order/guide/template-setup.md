# Настройка шаблона

## Структура шаблона

```
sok.order/
├── template.php
├── style.css
├── script.js
├── result_modifier.php
└── lang/ru/template.php
```

## Переменные шаблона

| Переменная | Описание |
|---|---|
| `$arResult` | Данные заказа |
| `$arParams` | Параметры компонента |
| `$arDeliveryList` | Список доставок |
| `$arPaySystemList` | Список платёжных систем |

## Стили

```css
.order-button {
    background-color: #e63946;
    color: #fff;
}
```

## Языковые фразы

```php
$MESS['SOK_ORDER_SUBMIT_BUTTON'] = 'Оформить заказ';
$MESS['SOK_ORDER_DELIVERY_TITLE'] = 'Способ доставки';
```
