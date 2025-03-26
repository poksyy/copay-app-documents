import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Spend freely with your friends',
        Svg: require('@site/static/img/step_1.svg').default,
        description: (
            <>
                Go out for dinner, buy tickets, take a trip... No need to worry about
                who pays upfront. Copay helps you keep track.
            </>
        ),
    },
    {
        title: 'Let one person pay, no worries',
        Svg: require('@site/static/img/step_2.svg').default,
        description: (
            <>
                One friend covers the bill? No problem! Copay records who spent what and
                keeps everything organized.
            </>
        ),
    },
    {
        title: 'Split expenses effortlessly with Copay',
        Svg: require('@site/static/img/step_3.svg').default,
        description: (
            <>
                Copay does the math for you. It automatically divides expenses and
                adjusts who owes what—no stress!
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
