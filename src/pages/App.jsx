import '../styles/App.scss'
import { Header } from '../components/Header.jsx'
import { Aside } from '../components/Aside.jsx'
import { MainSection } from '../components/MainSection.jsx'

function App() {


  return (
    <div className='content'>
      <header>
        <Header />
      </header>
      <section className='section'>
        <aside>
          <Aside />
        </aside>
        <main>
          <MainSection />
        </main>
      </section>

    </div>
  )
}

export default App