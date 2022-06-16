import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-slick';
import clsx from 'clsx';
import imgApi from '~/public/images/imgAPI';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import Title from '../Title';
import TestiCard from '../Cards/Testimonial';
import useStyle from './testi-style';

const testiContent = [
  {
    text: 'Victim of rug - pulls, Yusuph aims to stop fraud, combining both real-world skills, on-chain ability, being a real world racing driver himself he is the perfect driving force for the future of Alpha Sekure. He has over a decade of experience in running businesses and organisations, as well as an avid investor, providing some of the industry\'s best marketing expertise to a variety of projects.',
    name: 'Yusuph',
    avatar: imgApi.team[2],
    title: 'Chief Executive Officer',
  },
  {
    text: 'A financial adviser in the real world, has years of experience in the crypto sector and is a well known youtuber and influencer with over 11 thousand subscribers on YouTube,   his invaluable insights and contacts within the crypto space, market expertise, and finance management abilities.  Keep Alpha on the road and climbing. ',
    name: 'Qris Monocle',
    avatar: imgApi.team[0],
    title: 'Chief Operating Officer (COO)',
  },
  {
    text: 'One of the biggest and most influential people in the crypto space with over 45 thousand subscribers on his channel channel and a self made millionaire businessman previously. He heads up our advisory panel at Alpha and provides some of the worlds best consultation.',
    name: 'James Pelton',
    avatar: imgApi.avatar[1],
    title: 'Senior Advisor (SA)',
  },
  {
    text: 'A Software Developer and former National Team Sprinter, Chase aims to bring fresh ideas, youth and enthusiasm to the Alpha Sekure team. Expert in cryptocurrency tokenomics, mathematical modelling and engineering he is sure to spot ponzi scheme a mile off! With a strong level of professionalism and charismatic personality, he will provide the fuel to power Alpha Sekure\'s path.',
    name: 'Chase Maxwell Kluck',
    avatar: imgApi.avatar[3],
    title: 'Chief technical officer (CTO)',
  },
  {
    text: 'Boasting a wide array of skills from graphic design to digital marketing and more, Jayden has multiple years experience in the space and a passion for blockchain technology. Jayden\'s primary role within Alpha Sekure is managing business partners and relations to develop professional relationships and meet company goals. ',
    name: 'Jayden Holloway',
    avatar: imgApi.team[2],
    title: 'Partnership Manager (PM)',
  }
];

function Testimonials(props) {
  const slider = useRef(null);
  const classes = useStyle();
  const text = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const { t } = props;
  const [active, setActive] = useState(0);
  const [activeTransition, setActiveTransition] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    afterChange: (current) => setActive(current),
    beforeChange: (current, next) => setActiveTransition(next),
  };
  const slideState = index => {
    if (index === activeTransition - 1 || index === active - 1) {
      return classes.past;
    }
    if (index === activeTransition + 1 || index === active + 1) {
      return classes.future;
    }
    if (index === activeTransition || index === active) {
      return classes.current;
    }
    return classes.slide;
  };
  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Title text={t('common:crypto-landing.testi_title')} align="center" />
        <Typography className={text.subtitle2} align="center">
          {/* {t('common:crypto-landing.testi_subtitle')} */}
        </Typography>
        <Grid container spacing={6}>
          <Grid item md={1} xs={12} />
          <Grid item md={10} xs={12}>
            <div className={classes.sliderWrap}>
              <div className={classes.carousel}>
                <button
                  type="button"
                  className={clsx(classes.nav, classes.prev)}
                  onClick={() => slider.current.slickPrev()}
                >
                  <i className="ion-ios-arrow-back" />
                </button>
                <Carousel ref={slider} {...settings}>
                  {testiContent.map((item, index) => (
                    <div key={index.toString()} className={clsx(classes.item, slideState(index))}>
                      <div className={classes.slideContent}>
                        <TestiCard
                          text={item.text}
                          name={item.name}
                          title={item.title}
                          avatar={item.avatar}
                          active={index === active}
                        />
                      </div>
                    </div>
                  ))}
                </Carousel>
                <button
                  type="button"
                  className={clsx(classes.nav, classes.next)}
                  onClick={() => slider.current.slickNext()}
                >
                  <i className="ion-ios-arrow-forward" />
                </button>
              </div>
              <div className={classes.pagination}>
                <ul>
                  {[...Array(testiContent.length)].map((e, index) => (
                    <li
                      key={index.toString()}
                      className={index === active ? classes.active : ''}
                    >
                      <button type="button" onClick={() => slider.current.slickGoTo(index)}>&nbsp;</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Testimonials.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['crypto-landing'])(Testimonials);
