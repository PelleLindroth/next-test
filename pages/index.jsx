import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <header>
        <div className="inner-container">
          <Image src="/logo.png" alt="24Gossip Logo" width={100} height={50} />
        </div>
      </header>

      <main>
        <h1>Skaffa 24gossip</h1>
        <h2>Testa gratis i 30 dagar. Därefter bara 79kr/månad</h2>
        <button>STARTA DEN KOSTNADSFRIA TESTPERIODEN</button>
      </main>
    </>
  )
}

export default Home
