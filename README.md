# Calculadora Web (tema oscuro) con Bootstrap

Una calculadora web simple, responsive y estilizada en tema oscuro, construida con **Bootstrap 5** y JavaScript vanilla. Soporta operaciones encadenadas, vista previa de la operación, control por teclado y normalización de operadores visuales.

## 🚀 Qué hace

- Operaciones básicas: suma (`+`), resta (`−`), multiplicación (`×`) y división (`÷`).
- Porcentaje (`%`) y cambio de signo (`±`).
- Borrar último dígito (`CE`) y limpiar todo (`C`).
- Encadenado de operaciones (se calculan parcialmente cuando se encadenan operadores).
- Vista previa de la operación en curso (se muestra al seleccionar un operador).
- Normalización visual a lógica: convierte `×`, `÷`, `−` en `*`, `/`, `-` para que JavaScript pueda evaluar.
- Manejo básico de errores (ej. división por cero).
- Interfaz oscura, responsive y accesible con Bootstrap 5.
- Separación de la UI y la lógica usando atributos `data-action` / `data-value`.

## 🛠 Tecnologías

- HTML5
- CSS (variables custom y Bootstrap 5)
- JavaScript vanilla (archivo `./js/calculadora.js`)
- Diseño responsive con Bootstrap 5 desde CDN

## 📁 Estructura del proyecto (según lo que está ahora)

- `index.html` – interfaz completa de la calculadora, markup y estilos base embebidos.
- `styles.css` – hoja externa enlazada para personalizaciones adicionales (puede contener overrides).
- `./js/calculadora.js` – lógica de la calculadora (manejo de botones, evaluación, preview, etc.).

## 🔧 Cómo usar

1. Cloná el repo:
   ```bash
   git clone https://github.com/GinoSarubbi/calculator.git
   cd calculator
