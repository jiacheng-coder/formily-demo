import Test from '@/pages/Test.jsx'
import AsynchronousDataValidation from './pages/AsynchronousDataValidation'
import LinkageTest from './pages/linkageTest'
import Login from '@/pages/Login'

export default function App() {
  return (
    <>
      <header>
        <h1 style={{ textAlign: 'center' }}>Formily</h1>
      </header>
      <section style={{ padding: '0 50px' }}>
        {/* <Test /> */}
        {/* <Login /> */}
        {/* <LinkageTest /> */}
        <AsynchronousDataValidation />
      </section>
    </>
  )
}
