import { Features } from '../components/features/Features';
import { ServicesCarousel } from '../components/servicesCarousel/ServicesCarousel';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>This is the index page</h1>
      <ServicesCarousel />
      <Features />
    </div>
  );
}
