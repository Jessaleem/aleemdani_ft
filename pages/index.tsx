import { Features } from '../components/features/Features';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>This is the index page</h1>
      <Features />
    </div>
  );
}
