import "../(main)/layout.js";
import "./game.css"
import { Atma  } from "next/font/google";


const atma = Atma({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})


export const metadata = {
  title: 'ElShamadan - Memory Game',
  description: 'Egyptian local brand for wafer and biscuits',
}

export default function GameLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${atma.variable}`}>{children}</body>
    </html>
  )
}
