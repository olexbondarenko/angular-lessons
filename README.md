## Why should we use getter and setter instead of just setting the variable in the service?
- Геттеры и сеттеры позволяют контролировать доступ к важным переменным и их обновление в коде. Мы можем проверить значение в установщике перед фактической установкой значения.

## How to set a default value for @Input() property?
- @Input() PropertyName = "Default Value"

## What is the difference between @ViewChild() і @ContentChild()?
- ViewChild используется для выбора элемента из шаблона компонента, а ContentChild используется для выбора проецируемого содержимого.

## Why do we add providedIn: ‘root’?
- Это самый простой и наиболее эффективный способ предоставления данных, сервис будет доступен для всего приложения, без необходимости добавлять его в массив providers.