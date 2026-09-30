```js
document.addEventListener("DOMContentLoaded", () => {

    /*
     * popscript syntax highlighting
     */

    Prism.languages.popscript = {

        comment: {
            pattern: /\$\/[^\r\n]*/,
            greedy: true
        },

        string: {
            pattern: /"(?:\\.|[^"\\])*"/,
            greedy: true
        },

        keyword: {
            pattern: /\b(?:lib|import|int|if|stop)\b/
        },

        function: {
            pattern: /\b[a-zA-Z_][a-zA-Z0-9_]*(?=\()/,
            alias: "function"
        },

        number: {
            pattern: /\b\d+(?:\.\d+)?\b/
        },

        boolean: {
            pattern: /\b(?:true|false)\b/
        },

        operator: {
            pattern: /<=|>=|==|!=|[+\-*\/=<>]/
        },

        punctuation: {
            pattern: /[();,.]/
        },

        parameter: {
            pattern: /\b(?:from|to)\b/,
            alias: "property"
        }

    };


    /*
     * Highlight code
     */

    const codeElement =
        document.getElementById("popscript-code");

    if (codeElement) {
        Prism.highlightElement(codeElement);
    }


    /*
     * Copy button
     */

    const copyButton =
        document.getElementById("copyButton");

    if (copyButton && codeElement) {

        copyButton.addEventListener("click", async () => {

            const code =
                codeElement.textContent;

            try {

                await navigator.clipboard.writeText(code);

                copyButton.textContent = "Copied!";

                setTimeout(() => {

                    copyButton.textContent = "Copy";

                }, 1500);

            } catch (error) {

                console.error(
                    "Failed to copy code:",
                    error
                );

                copyButton.textContent = "Failed";

                setTimeout(() => {

                    copyButton.textContent = "Copy";

                }, 1500);

            }

        });

    }

});
```
