
import type { Config } from "tailwindcss";


export default {
	darkMode: ["class"],
	safelist: ["animate-wobble"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
  colors: {
    bg: "#080708",
    text: "#e6e8e6",

    primary: "#3772ff",
    accent: "#fdca40",
    danger: "#df2935",

    muted: "#a1a1aa",
    card: "#111111",
    border: "#1f1f1f",
  },

  fontFamily: {
    sans: ["Montserrat", "sans-serif"],
    serif: ["Instrument Serif", "serif"],
  },

  keyframes: {
    float: {
      "0%, 100%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-40px)" },
    },
    fadeIn: {
      "0%": { opacity: "0", transform: "translateY(20px)" },
      "100%": { opacity: "1", transform: "translateY(0)" },
    },

	 marquee: {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(-50%)" },
  	},

	 scrollHint: {
    "0%, 80%, 100%": { transform: "translateY(0)", opacity: "0.5" },
    "40%": { transform: "translateY(10px)", opacity: "1" },
  	},

	wobble: {
    "0%": { transform: "translateY(0px) rotate(0deg)", color: "#080708"  },
    "25%": { transform: "translateY(-4px) rotate(-2deg)", color: "#3772ff"  },
    "50%": { transform: "translateY(4px) rotate(2deg)", color: "#3772ff"  },
    "75%": { transform: "translateY(-2px) rotate(-1deg)", color: "#3772ff"  },
    "100%": { transform: "translateY(0px) rotate(0deg)",  color: "#080708"  },
  },

  },

  animation: {
    float: "float 8s ease-in-out infinite",
    fadeIn: "fadeIn 0.6s ease-out",
	wobble: "wobble 0.6s ease-in-out",
	marquee: "marquee 20s linear infinite",
	scrollHint: "scrollHint 4s ease-in-out infinite",
  },
}
	},
	
} satisfies Config;
