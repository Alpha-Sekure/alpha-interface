import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import LangIcon from '@material-ui/icons/Language';
// import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
// import Select from '@material-ui/core/Select';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import logo from '~/public/images/Logo_normal.png';
import brand from '~/public/text/brand';
import { withTranslation } from '~/i18n';
import useStyles from './footer-style';

function Copyright() {
  const text = ' 2022. All Rights reserved';

  return (
    <Typography variant="body2" display="block" color="textSecondary">
      &copy;&nbsp;
      {brand.crypto.footerText}
      {text}
    </Typography>
  );
}

const footer = {
  description: ['Discord', 'Services', 'Team', 'Security', 'Investors', 'Faq'],
  link: ['#resource', '#another-resource', '#final-resource', '#privacy-policy', '#terms-of-use'],
};

function Footer(props) {
  // const [] = useState(null);
  const classes = useStyles();
  const { t, invert } = props;
  // const [] = useState({
  //   lang: 'eng',
  // });

  useEffect(() => {
    // setValues({ lang: i18n.language });
    // setCtn(document.getElementById('main-wrap'));
  }, []);

  // function handleChange(event) {
  //   setValues(oldValues => ({
  //     ...oldValues,
  //     [event.target.name]: event.target.value,
  //   }));
  //   if (event.target.value === 'ara') {
  //     i18n.changeLanguage('ara');
  //     props.toggleDir('rtl');
  //   } else {
  //     i18n.changeLanguage(event.target.value);
  //     props.toggleDir('ltr');
  //   }
  // }

  return (
    <Container fixed component="footer">
      <div className={clsx(classes.footer, invert && classes.invert)}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={3}>
            <div className={classes.logo}>
              <img src={logo} alt="logo" />
              <Typography variant="h6" color="textPrimary">
                {brand.crypto.projectName}
              </Typography>
              {/* <Typography color="textPrimary" className={classes.footerDesc} gutterBottom>
                {t('common:crypto-landing.banner_title')}
              </Typography> */}
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.quickLinks}>
              <Typography variant="h6" className={classes.title} color="textPrimary" gutterBottom>
                {t('common:crypto-landing.footer_link')}
              </Typography>
              <ul>
                {footer.description.map((item, index) => (
                  <li key={item}>
                    <Link href={footer.link[index]} variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.socmed}>
              <IconButton aria-label="FB" className={classes.margin} size="small">
                <i className="ion-logo-twitter" />
              </IconButton>
              <IconButton aria-label="TW" className={classes.margin} size="small">
                <i className="ion-logo-facebook" />
              </IconButton>
              <IconButton aria-label="IG" className={classes.margin} size="small">
                <i className="ion-logo-instagram" />
              </IconButton>
              <IconButton aria-label="LI" className={classes.margin} size="small">
                <i className="ion-logo-linkedin" />
              </IconButton>
            </div>
            <Copyright />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

Footer.propTypes = {
  t: PropTypes.func.isRequired,
  invert: PropTypes.bool,
  // toggleDir: PropTypes.func,
};

Footer.defaultProps = {
  invert: false,
  toggleDir: () => {},
};

export default withTranslation(['crypto-landing'])(Footer);
