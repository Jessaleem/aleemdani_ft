import {
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  Col,
} from '@mantine/core';
import { featData, mainData } from '../../constants/featuresData';
import { useFeaturesStyles } from './useFeaturesStyles';

export function Features() {
  const { classes } = useFeaturesStyles();

  const items = featData.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius='md'
        variant='gradient'
        gradient={{ deg: 133, from: '#03045E', to: '#0096C7' }}
      >
        <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text size='lg' mt='sm' weight={500}>
        {feature.title}
      </Text>
      <Text color='dimmed' size='sm'>
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            {mainData.title}
          </Title>
          <Text color='dimmed'>{mainData.body}</Text>

          <Button
            variant='gradient'
            gradient={{ deg: 133, from: '#03045E', to: '#0096C7' }}
            size='lg'
            radius='md'
            mt='xl'
          >
            About us
          </Button>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid
            cols={2}
            spacing={30}
            breakpoints={[{ maxWidth: 'md', cols: 1 }]}
          >
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
  );
}
