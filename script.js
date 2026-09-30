const copyButton = document.getElementById("copyButton");

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


copyButton.addEventListener("click", async () => {

    try {

        await navigator.clipboard.writeText(code);

        copyButton.textContent = "Copied!";

        setTimeout(() => {

            copyButton.textContent = "Copy";

        }, 1500);

    } catch (error) {

        copyButton.textContent = "Failed";

        setTimeout(() => {

            copyButton.textContent = "Copy";

        }, 1500);

    }

});
