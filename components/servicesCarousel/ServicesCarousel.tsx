import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import { data } from '../../constants/servicesCarousel';

import { ServicesCard } from './ServicesCard';

export function ServicesCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <ServicesCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize='25%'
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      slideGap='md'
      loop
      align='start'
      slidesToScroll={mobile ? 1 : 4}
      dragFree
      controlSize={40}
    >
      {slides}
    </Carousel>
  );
}
