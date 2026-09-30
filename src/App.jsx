import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';

function Home() {
  return (
    <>
      <Hero />

      <section
        id="farm"
        style={{
          minHeight: '500px',
          padding: '120px 24px',
          background: '#F7F4EC',
        }}
      >
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <p className="eyebrow">Our farm</p>

          <h2
            className="serif"
            style={{
              marginTop: '20px',
              fontSize: 'clamp(42px, 6vw, 72px)',
              fontWeight: 500,
              color: '#193B2B',
            }}
          >
            Where every drop begins
            <br />
            with care.
          </h2>
        </div>
      </section>

    </>
  );
}

function OurFarm() {
  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '180px 24px',
        background: '#F7F4EC',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <p className="eyebrow">Our Farm</p>

        <h1
          className="serif"
          style={{
            marginTop: '20px',
            fontSize: 'clamp(56px, 8vw, 100px)',
            fontWeight: 500,
            color: '#193B2B',
          }}
        >
          A farm built
          <br />
          around care.
        </h1>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/our-farm"
          element={<OurFarm />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;