```js
document.addEventListener("DOMContentLoaded", () => {

    const codeElement =
        document.getElementById("popscript-code");

    const copyButton =
        document.getElementById("copyButton");


    /*
     * Исходный код popscript
     */

    const code = `$/ PopScript 1.0.4 example program
lib import random
lib import random.number

int min_val = 0 $/ you can don’t use that
int max_val = 100 $/ just from=0, to=100
int x = number(from=min_val, to=max_val)
int y = x + 5

if x > 50;
    print(x)
    print("high value")
stop;

if x <= 50;
    print(x)
    print("low value")
stop;`;


    /*
     * HTML-экранирование
     */

    function escapeHTML(text) {

        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");

    }


    /*
     * Подсветка popscript
     */

    function highlightPopScript(source) {

        let html =
            escapeHTML(source);


        /*
         * Временные placeholders.
         *
         * Они нужны, чтобы комментарии и строки
         * не были изменены следующими regex.
         */

        const protectedParts = [];


        function protect(value, className) {

            const id =
                `___POPSCRIPT_${protectedParts.length}___`;

            protectedParts.push(
                `<span class="token ${className}">${value}</span>`
            );

            return id;

        }


        /*
         * Комментарии
         *
         * PopScript:
         * $/ comment
         */

        html = html.replace(
            /\$\/[^\n\r]*/g,
            match => protect(
                match,
                "comment"
            )
        );


        /*
         * Строки
         */

        html = html.replace(
            /&quot;(?:\\.|[^&]|&(?!quot;))*?&quot;/g,
            match => protect(
                match,
                "string"
            )
        );


        /*
         * Ключевые слова
         */

        html = html.replace(
            /\b(?:lib|import|int|if|stop)\b/g,
            match => protect(
                match,
                "keyword"
            )
        );


        /*
         * Функции
         *
         * print(...)
         * number(...)
         */

        html = html.replace(
            /\b[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,
            match => protect(
                match,
                "function"
            )
        );


        /*
         * Параметры функций
         *
         * from=
         * to=
         */

        html = html.replace(
            /\b(?:from|to)(?==)/g,
            match => protect(
                match,
                "property"
            )
        );


        /*
         * Числа
         */

        html = html.replace(
            /\b\d+(?:\.\d+)?\b/g,
            match => protect(
                match,
                "number"
            )
        );


        /*
         * Операторы
         */

        html = html.replace(
            /&lt;=|&gt;=|==|!=|[+\-*\/=&lt;&gt;]/g,
            match => protect(
                match,
                "operator"
            )
        );


        /*
         * Скобки и другие знаки
         */

        html = html.replace(
            /[();,.]/g,
            match => protect(
                match,
                "punctuation"
            )
        );


        /*
         * Возвращаем защищённые элементы
         */

        html = html.replace(
            /___POPSCRIPT_(\d+)___/g,
            (_, index) => protectedParts[index]
        );


        return html;

    }


    /*
     * Применяем подсветку
     */

    if (codeElement) {

        codeElement.innerHTML =
            highlightPopScript(code);

    }


    /*
     * Кнопка Copy
     */

    if (copyButton) {

        copyButton.addEventListener(
            "click",
            async () => {

                try {

                    await navigator.clipboard.writeText(code);

                    copyButton.textContent =
                        "Copied!";

                    setTimeout(() => {

                        copyButton.textContent =
                            "Copy";

                    }, 1500);

                } catch (error) {

                    console.error(
                        "Failed to copy:",
                        error
                    );

                    copyButton.textContent =
                        "Failed";

                    setTimeout(() => {

                        copyButton.textContent =
                            "Copy";

                    }, 1500);

                }

            }
        );

    }

});
```
