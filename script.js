Prism.languages.popscript = {
    comment: {
        pattern: /\$\/[^\r\n]*/,
        greedy: true
    },
    string: {
        pattern: /"(?:\\.|[^"\\])*"/,
        greedy: true
    },
    keyword: /\b(?:lib|import|int|if|stop)\b/,
    function: {
        pattern: /\b[a-zA-Z_][a-zA-Z0-9_]*(?=\()/,
        alias: "function"
    },
    boolean: /\b(?:true|false)\b/,
    number: /\b\d+(?:\.\d+)?\b/,
    operator: /<=|>=|==|!=|[+\-*\/=<>]/,
    punctuation: /[();,.]/

};

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
