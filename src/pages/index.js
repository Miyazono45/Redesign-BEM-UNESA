import Navbar from './components/Navbar.js'
import TentangKami from "./components/tentangKami.js";

import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['cyrillic-ext'] })
export default function tentangKami() {

  return (
    <main className={raleway.className}>
      <Navbar />
      <TentangKami />
    </main>
  )
}