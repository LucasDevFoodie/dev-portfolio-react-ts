import './assets/normalize.css'
import './assets/index.css'
import './assets/shared.css'
import {Header} from './sections/Header'
import {Main} from './sections/Main'
import {Footer} from './sections/Footer'

function App():React.JSX.Element {
  return (
    <>
      <Header/>
      <Main />
      <Footer />
    </>
  )
}

export default App
