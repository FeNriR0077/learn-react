import { useState } from 'react'
import AddCities from './components/cities/AddCities'
import Cities from './components/cities/Cities';
import MainForm from './components/form/MainForm';
import Heading from './components/Heading'

function App() {

  return (
    <div className="App">
      
      <header>
        <Heading />
      </header>
    
     <main>
      
      <section>
        <Cities />
      </section>

      <section>
        <MainForm />
      </section>
      
     </main>
      
    </div>
  )
}

export default App;
