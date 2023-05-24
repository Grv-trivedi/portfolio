import Image from 'next/image'
import Navbar from './components/Navbar'
import Content from './Content'
import './globals.css'
import Introduction from './components/introduction'

export default function Home() {
  return (
    <main className="">
      <Introduction/>
      <h1>hello gaurav</h1>
      <Content/>
    </main>
  )
}
