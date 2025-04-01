// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",  // Certifique-se de que o conteúdo está configurado corretamente
      "./public/index.html",
    ],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")], // Adicione o DaisyUI como plugin
  }
  