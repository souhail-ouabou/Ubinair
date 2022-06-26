module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
 
 ],
  mode: 'jit',
  theme: {
    extend: {
      boxShadow: {
        'box-sh':'0px 0px 8px rgb(255,255,255)',
      },
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif']
      },
      width: {
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        80: "80px",
        150: "150px",
        225: "225px",
        300: "300px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        650: "650px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primaryColor: "#f5f3f3",
        headingColor: "#2e2e2e",
        textColor: "#515151",
        cartNumBg: "#e80013",
        primary: "#f5f3f3",
        cardOverlay: "rgba(256,256,256,0.4)",
        lighttextGray: "#9ca0ab",
        card: "rgba(256,256,256,0.8)",
        cartBg: "#282a2c",
        cartItem: "#2e3033",
        cartTotal: "#343739",
      },
      scale: {
        '110': '1.1',
      },
      borderColor:theme=>({
      DEFAULT:theme('colors.gray.300','currentColor'),
      'neon':'#ccff00',
      }),
      backgroundColor:theme=>({
        'neon':'#ccff00',
      }),
    },
  },
    variants:{
      extend:{
        backgroundColor:['checked'],
        display: ["group-hover"],
      },
    },
  plugins: [ ],
}
