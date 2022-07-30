/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 靛蓝（浅）
        themecolor: '#7d7ff5',
        // 银白
        titlcolor: '#f7f7ef',
        // 紫蓝色
        bordcolor: '#483d8b'
      }
    }
  },
  plugins: []
};
