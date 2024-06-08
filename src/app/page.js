import { FaBeer ,FaMandalorian} from 'react-icons/fa';
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      Hello
      
      <FaMandalorian color='#123' />
      Lets go for a <FaBeer />
      <a href='ImgUploader'></a>
    </main>
  )
}
