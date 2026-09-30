/*
 * popscript syntax highlighting
 */

Prism.languages.popscript = {

    /*
     * Comments
     *
     * Example:
     * $/ this is a comment
     */

    comment: {
        pattern: /\$\/[^\r\n]*/,
        greedy: true
    },


    /*
     * Strings
     */

    string: {
        pattern: /"(?:\\.|[^"\\])*"/,
        greedy: true
    },


    /*
     * Keywords
     */

    keyword: /\b(?:lib|import|int|if|stop)\b/,


    /*
     * Functions
     *
     * Example:
     * print()
     * number()
     */

    function: {
        pattern: /\b[a-zA-Z_][a-zA-Z0-9_]*(?=\()/,
        alias: "function"
    },


    /*
     * Boolean values
     */

    boolean: /\b(?:true|false)\b/,


    /*
     * Numbers
     */

    number: /\b\d+(?:\.\d+)?\b/,


    /*
     * Operators
     */

    operator: /<=|>=|==|!=|[+\-*\/=<>]/,


    /*
     * Punctuation
     */

    punctuation: /[();,.]/

};


/*
 * Highlight code
 */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const code =
            document.getElementById(
                "popscript-code"
            );


        if (code) {

            Prism.highlightElement(code);

        }


        /*
         * Copy button
         */

        const copyButton =
            document.getElementById(
                "copyButton"
            );


        if (copyButton && code) {

            copyButton.addEventListener(
                "click",
                async function () {

                    try {

                        await navigator.clipboard.writeText(
                            code.textContent
                        );

                        copyButton.textContent =
                            "Copied!";


                        setTimeout(
                            function () {

                                copyButton.textContent =
                                    "Copy";

                            },
                            1500
                        );

                    } catch (error) {

                        console.error(
                            "Copy failed:",
                            error
                        );

                        copyButton.textContent =
                            "Failed";


                        setTimeout(
                            function () {

                                copyButton.textContent =
                                    "Copy";

                            },
                            1500
                        );

                    }

                }
            );

        }

    }
);
