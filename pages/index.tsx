import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
<div className="App">
  <div className="header">
    <input type="text" placeholder="Task..." />
    <input type="number" placeholder="Dead line (in days)" />
  </div>
  <div className="todoList"></div>
</div>
  )
}
