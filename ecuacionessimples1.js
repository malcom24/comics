<script>
  const ecuaciones = [
    [
      "Tenemos la ecuación: x + 3 = 7",
      "Restamos 3 en ambos lados: x + 3 - 3 = 7 - 3",
      "Se simplifica a: x = 4",
      "✅ x vale 4. Excelente trabajo",
    ],
    [
      "Ecuación: x - 2 = 6",
      "Sumamos 2 en ambos lados: x - 2 + 2 = 6 + 2",
      "Se simplifica a: x = 8",
      "🎉 x vale 8",
    ],
    [
      "Ecuación: 2x = 10",
      "Dividimos ambos lados por 2: (2x)/2 = 10/2",
      "Se simplifica a: x = 5",
      "🏆 x vale 5",
    ],
    [
      "Ecuación: x / 2 = 3",
      "Multiplicamos ambos lados por 2: (x / 2) * 2 = 3 * 2",
      "Se simplifica a: x = 6",
      "🎊 x vale 6",
    ],
    [
      "Ecuación: x + 5 = 12",
      "Restamos 5 a ambos lados: x + 5 - 5 = 12 - 5",
      "Se simplifica a: x = 7",
      "🏅 x vale 7",
    ],
    [
      "Ecuación: 3x = 9",
      "Dividimos ambos lados por 3: (3x)/3 = 9/3",
      "Se simplifica a: x = 3",
      "🥇 x vale 3",
    ],
    [
      "Ecuación: x - 4 = 1",
      "Sumamos 4 en ambos lados: x - 4 + 4 = 1 + 4",
      "Se simplifica a: x = 5",
      "🌟 x vale 5",
    ]
  ];

  const emojisPorPaso = [
    ["🧠", "➖", "🧮", "✅"],
    ["🔍", "➕", "🧮", "🎉"],
    ["🔢", "➗", "🧮", "🏆"],
    ["📏", "✖️", "🧮", "🎊"],
    ["🧠", "➖", "🧮", "🏅"],
    ["🔢", "➗", "🧮", "🥇"],
    ["🔍", "➕", "🧮", "🌟"]
  ];

  let ecuacionActual = 0;
  let pasoActual = 0;

  function actualizarContador() {
    const contador = document.getElementById("contadorProgreso");
    contador.textContent = `Ejercicio ${ecuacionActual + 1} de ${ecuaciones.length}`;
  }

  function renderPasos() {
    const contenedor = document.getElementById("contenedorPasos");
    const emoji = document.getElementById("emojiPaso");
    contenedor.innerHTML = "";

    for (let i = 0; i < pasoActual; i++) {
      const pasoDiv = document.createElement("div");
      pasoDiv.className = "paso-linea";
      pasoDiv.textContent = emojisPorPaso[ecuacionActual][i] + " " + ecuaciones[ecuacionActual][i];
      contenedor.appendChild(pasoDiv);
    }

    emoji.textContent = emojisPorPaso[ecuacionActual][pasoActual - 1] || "😊";
    actualizarContador();
  }

  function agregarPaso() {
    if (pasoActual < ecuaciones[ecuacionActual].length) {
      pasoActual++;
      renderPasos();
    } else {
      const contenedor = document.getElementById("contenedorPasos");
      const extra = document.createElement("div");
      extra.className = "paso-linea";
      extra.textContent = "🔁 Puedes volver a intentarlo o pasar a otra ecuación.";
      contenedor.appendChild(extra);
    }
  }

  function siguienteEcuacion() {
    ecuacionActual = (ecuacionActual + 1) % ecuaciones.length;
    pasoActual = 0;
    renderPasos();
  }

  function anteriorEcuacion() {
    ecuacionActual = (ecuacionActual - 1 + ecuaciones.length) % ecuaciones.length;
    pasoActual = 0;
    renderPasos();
  }

  renderPasos();
</script>
