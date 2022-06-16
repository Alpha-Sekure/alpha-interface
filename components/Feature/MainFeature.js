import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import YouTube from 'react-youtube';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Zoom from '@material-ui/core/Zoom';
import imgAPI from '~/public/images/imgAPI';
import { withTranslation } from '~/i18n';
import yt from '~/youtube';
import { useText } from '~/theme/common';
import Title from '../Title';
import useStyles from './feature-style';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Zoom ref={ref} {...props} />;
});

function MainFeature(props) {
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = props;
  const [player, setPlayer] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  const handleClickOpen = () => {
    if (yt.use) {
      setOpenPopup(true);
      player[0].playVideo();
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    player[0].pauseVideo();
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const opts = {
    height: '360',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 1,
      mute: 0,
      origin: 'https://localhost:3008'
    }
  };

  return (
    <div className={classes.mainFeature}>
      <Dialog
        open={openPopup}
        TransitionComponent={Transition}
        keepMounted
        classes={{ paper: classes.videoPopup }}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {t('common:crypto-landing.mainfeature_title')}
          <IconButton onClick={handleClose} className={classes.closeBtn}>
            <CloseIcon className={classes.icon} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {yt.use && (
            <YouTube
              videoId="QPMkYyM2Gzg"
              onReady={_onReady}
              opts={opts}
            />
          )}
        </DialogContent>
      </Dialog>
      <Container fixed>
        <Grid container spacing={6}>
          <Grid item md={6} xs={12}>
            <Title text={t('common:crypto-landing.mainfeature_title')} align={isMobile ? 'center' : 'left'} />
            <Typography display="block" gutterBottom align={isMobile ? 'center' : 'left'} className={text.subtitle2}>
              {t('common:crypto-landing.mainfeature_subtitle')}
            </Typography>
            <Paper className={classes.video}>
              <figure>
                <img src={imgAPI.crypto[4]} alt="cover" />
              </figure>
              <IconButton className={classes.playBtn} onClick={handleClickOpen}>
                <span className="ion-ios-play" />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item md={6} xs={12} className={classes.featureWrap}>
            <div className={classes.deco}>
              <svg width="404px" height="452px" viewBox="0 0 404 452" version="1.1">
                <defs>
                  <linearGradient x1="34.1218989%" y1="15.1303808%" x2="20.0910756%" y2="110.664023%" id="featureLinearGradient-1">
                    <stop stopColor={theme.palette.primary.light} offset="0%" />
                    <stop stopColor={theme.palette.primary.light} offset="100%" />
                  </linearGradient>
                </defs>
                <g id="Feature-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <path d="M2,136.921005 L2,314.197531 C2,330.732338 10.8296846,346.011946 25.1636364,354.27935 L178.836364,442.917242 C193.170315,451.184645 210.829685,451.184645 225.163636,442.917242 L378.836364,354.27935 C393.170315,346.011946 402,330.732338 402,314.197531 L402,136.921005 C402,120.385457 393.170315,105.10659 378.836364,96.8384449 L225.163636,8.2005525 C210.829685,-0.066850833 193.170315,-0.066850833 178.836364,8.2005525 L25.1636364,96.8384449 C10.8296846,105.10659 2,120.385457 2,136.921005" id="FeatureFill-1" stroke="url(#featureLinearGradient-1)" strokeWidth="4" />
                </g>
              </svg>
            </div>
            <div className={classes.counter}>
              <div className={classes.lower}>
                <Paper className={classes.paper}>
                  <span className="ion-ios-ionic-outline" />
                  <Typography variant="h6">
                    95%
                  </Typography>
                  <Typography style={{fontSize: '10px'}} display="block">
                    {t('common:crypto-landing.mainfeature_supported')}
                  </Typography>
                </Paper>
                <Paper className={classes.paper}>
                  <span className="ion-ios-people-outline" />
                  <Typography variant="h6">
                    90%
                  </Typography>
                  <Typography style={{fontSize: '10px'}} display="block">
                    {t('common:crypto-landing.mainfeature_registered')}
                  </Typography>
                </Paper>
              </div>
              <div className={classes.higher}>
                <Paper className={classes.paper}>
                  <span className="ion-ios-archive-outline" />
                  <Typography variant="h6">
                    75%
                  </Typography>
                  <Typography style={{fontSize: '10px'}} display="block">
                    {t('common:crypto-landing.mainfeature_open')}
                  </Typography>
                </Paper>
                <Paper className={classes.paper}>
                  <span className="ion-ios-heart-outline" />
                  <Typography variant="h6">
                    60%
                  </Typography>
                  <Typography style={{fontSize: '10px'}} display="block">
                    {t('common:crypto-landing.mainfeature_invested')}
                  </Typography>
                </Paper>
              </div>
            </div>
            <p>Stats taken from <a href='#'>AssureDefi survey</a></p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

MainFeature.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['crypto-landing'])(MainFeature);
