const display = document.getElementById('display');
const preview = document.getElementById('preview');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.textContent.trim();
        if (content === "=") {
            try {
                let expr = display.textContent
                    .replaceAll('×', '*')
                    .replaceAll('÷', '/')
                    .replaceAll('−', '-');
                const result = Function(`"use strict"; return (${expr})`)();
                display.textContent = result;
                preview.textContent = expr;
            } catch (e) {
                display.textContent = 'Error';
            }
        } else if (content === "C") {
            display.textContent = '';
            preview.textContent = '';
        } else if (content === "CE") {
            display.textContent = display.textContent.slice(0, -1);
            preview.textContent = preview.textContent.slice(0, -1);
        } else {
            display.textContent += content;
            preview.textContent += content;
        }
    });
});
