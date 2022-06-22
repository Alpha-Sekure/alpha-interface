import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Avatar from '@material-ui/core/Avatar';
// import LinearProgress from '@material-ui/core/LinearProgress';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import Title from '../Title';
import useStyles from './feature-style';

function MoreFeature(props) {
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = props;

  return (
    <div className={classes.moreFeature}>
      <Container fixed={isDesktop}>
        <div className={classes.item}>
          <Grid container spacing={6} alignItems="center">
            <Grid item md={6} xs={12}>
              <div className={clsx(classes.text, isMobile && classes.center)}>
                <span className="ion-ios-lock-outline" />
                <Title text={t('common:crypto-landing.morefeature_title1')} align={isMobile ? 'center' : 'left'} />
                <Typography className={text.subtitle2} display="block" align={isMobile ? 'center' : 'left'}>
                  {t('common:crypto-landing.morefeature_subtitle1')}
                </Typography>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInLeftShort"
                delay={300}
                duration={0.3}
              >
                <figure className={classes.illustration}>
                  <img src="/images/crypto/illustration1.png" alt="feature" />
                </figure>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid
            container
            direction={isMobile ? 'column-reverse' : 'row'}
            spacing={6}
            alignItems="center"
          >
            <Grid item md={6} xs={12}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInRightShort"
                offset={-100}
                delay={300}
                duration={0.3}
              >
                <figure className={classes.illustration}>
                  <img src="/images/crypto/illustration2.png" alt="feature" />
                </figure>
              </ScrollAnimation>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={clsx(classes.text, isMobile && classes.center)}>
                <span className="ion-ios-analytics-outline" />
                <Title text={t('common:crypto-landing.morefeature_title2')} align={isMobile ? 'center' : 'left'} />
                <Typography className={text.subtitle2} display="block" align={isMobile ? 'center' : 'left'}>
                  {t('common:crypto-landing.morefeature_subtitle2')}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid container spacing={6} alignItems="center">
            <Grid item md={6} xs={12}>
              <div className={clsx(classes.text, isMobile && classes.center)}>
                <span className="ion-ios-lock-outline" />
                <Title text={t('common:crypto-landing.morefeature_title4')} align={isMobile ? 'center' : 'left'} />
                <Typography className={text.subtitle2} display="block" align={isMobile ? 'center' : 'left'}>
                  {t('common:crypto-landing.morefeature_subtitle')}
                </Typography>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInLeftShort"
                delay={300}
                duration={0.3}
              >
                <figure className={classes.illustration}>
                  <img src="/images/crypto/illustration1.png" alt="feature" />
                </figure>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid container>
            <Grid item sm={12}>
              <div className={clsx(classes.text, classes.center)}>
                <span className="ion-ios-flash-outline" />
                <Title className={text.subtitle2} text={t('common:crypto-landing.morefeature_title3')} align="center" />
                <Typography display="block" align="center" className={text.subtitle2}>
                  {t('common:crypto-landing.morefeature_subtitle3')}
                </Typography>
              </div>
              <Container maxWidth="md">
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeIn"
                  offset={-100}
                  duration={1}
                  // afterAnimatedIn={handlePlay}
                />
              </Container>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

MoreFeature.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['crypto-landing'])(MoreFeature);
