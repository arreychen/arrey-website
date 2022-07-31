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
        bordcolor: '#483d8b',
        // 落日黄
        yellowcolor: '#ffc05c',
        // 暗蓝
        bgcolor: '#1a1a26'
      }
    }
  },
  plugins: []
};
