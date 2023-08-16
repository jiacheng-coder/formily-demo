import Test from './pages/Test'
import AsynchronousDataValidation from '@/pages/AsynchronousDataValidation'
import LinkageEffectTest from '@/pages/LinkageEffectTest'
import Login from './pages/Login'

export default function App() {
  return (
    <>
      <header>
        <h1 style={{ textAlign: 'center' }}>Formily</h1>
      </header>
      <section style={{ padding: '0 50px' }}>
        {/* <Test /> */}
        {/* <Login /> */}
        <LinkageEffectTest />
        {/* <AsynchronousDataValidation /> */}
      </section>
    </>
  )
}
