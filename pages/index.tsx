import { Features } from '../components/features/Features';
import { ServicesCarousel } from '../components/servicesCarousel/ServicesCarousel';

export default function Home() {
  return (
    <div>
      <h1>This is the index page</h1>
      <ServicesCarousel />
      <Features />
    </div>
  );
}
