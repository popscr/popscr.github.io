Prism.languages.popscript = {
    comment: {
        pattern: /[$]\/[^\r\n]*/,
        greedy: true
    },

    string: {
        pattern: /"(?:\\.|[^"\\])*"/,
        greedy: true
    },

    keyword: /\b(?:lib|import|int|float|string|bool|list|if|elif|else|stop|when|for|with|func|return|armemory|free|alloc|ref|deref|and|or|not)\b/,

    boolean: /\b(?:true|false)\b/,

    function: /\b(?:print|number|num|time|file|ui|random)\b(?=\s*\()/,

    number: /\b\d+(?:\.\d+)?\b/,

    operator: /(?:==|!=|<=|>=|=|\+|-|\*|\/|<|>)/,

    punctuation: /[()[\]{},;.]/
};

document.addEventListener("DOMContentLoaded", function () {
    const code = document.getElementById("popscript-code");

    if (code) {
        Prism.highlightElement(code);
    }

    const button = document.getElementById("copy-code");

    if (button && code) {
        button.addEventListener("click", async function () {
            try {
                await navigator.clipboard.writeText(code.textContent);

                button.textContent = "Copied";

                setTimeout(function () {
                    button.textContent = "Copy";
                }, 1500);
            } catch (error) {
                button.textContent = "Error";

                setTimeout(function () {
                    button.textContent = "Copy";
                }, 1500);
            }
        });
    }
});
