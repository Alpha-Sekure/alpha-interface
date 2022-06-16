import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import ButtonBase from '@material-ui/core/ButtonBase';
import NextIcon from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Slider from 'react-animated-slider';
import useStyles from './promotion-style';
import imgAPI from '~/public/images/imgAPI';
import { withTranslation } from '~/i18n';

const sliderData = [
  {
    image: imgAPI.services[0],
    title: 'Fraud Protection',
    desc: 'Working together with local authorities, partners, advisory panel and the experts in the team we offer missing fund location and fraud tracking services.',
    date: '12 Jul - 10 Aug'
  },
  {
    image: imgAPI.services[1],
    title: 'KYC verification',
    desc: 'The most rigorous KYC process on the planet, you will be able to show off you have undergone the best of the best, including face/id/personal document verification and more.',
    date: '12 Jul - 10 Aug'
  },
  {
    image: imgAPI.services[2],
    title: 'Smart Contract Audits',
    desc: 'Verification and security insurance on web 3 and web 2 smart contracts and programmes, world leading developers sieving through each code line by line.',
    date: '12 Jul - 10 Aug'
  }
];

function Promotion(props) {
  const classes = useStyles();
  // const { t } = props;
  return (
    <div className={classes.root}>
      <div className={classes.sliderWrap}>
        <Slider
          className="slider-wrapper"
          previousButton={(
            <NextIcon />
          )}
          nextButton={(
            <NextIcon />
          )}
        >
          {sliderData.map((item, index) => (
            <div className={clsx(classes.item, index % 2 === 1 ? classes.odd : classes.even)} key={index.toString()}>
              <Grid container>
                <Grid item xs={12} lg={4}>
                  &nbsp;
                </Grid>
                <Grid item xs={12} lg={7}>
                  <Hidden mdDown>
                    <section>
                      <div className={classes.imgWrap}>
                        <div className={classes.decoration}>
                          <svg>
                            <use xlinkHref="/images/crypto/deco-promo.svg#main" />
                          </svg>
                        </div>
                        <figure className={classes.image}>
                          <img src={item.image} alt={item.title} />
                        </figure>
                      </div>
                    </section>
                  </Hidden>
                  <Paper className={classes.paper}>
                    <Typography variant="h1">
                      <ButtonBase>
                        {item.title}
                      </ButtonBase>
                    </Typography>
                    <Typography component="p">
                      {item.desc}
                    </Typography>
                    {/* <section className={classes.time}>
                      <Typography component="h6">
                        {t('common:crypto-landing.promo_periode')}
                        :&nbsp;
                        {item.date}
                      </Typography>
                    </section> */}
                  </Paper>
                </Grid>
              </Grid>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

Promotion.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['crypto-landing'])(Promotion);
