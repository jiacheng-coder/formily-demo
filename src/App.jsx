import Test from '@/pages/Test'
import Login from '@/pages/Login'
import LinkageEffectTest from '@/pages/LinkageEffectTest'
import AsynchronousDataValidation from '@/pages/AsynchronousDataValidation'

export default function App() {
  return (
    <main>
      <header>
        <h1 style={{ textAlign: 'center' }}>Formily</h1>
      </header>
      <section style={{ padding: '0 50px' }}>
        {/* <Test /> */}
        <Login />
        {/* <LinkageEffectTest /> */}
        {/* <AsynchronousDataValidation /> */}
      </section>
    </main>
  )
}
