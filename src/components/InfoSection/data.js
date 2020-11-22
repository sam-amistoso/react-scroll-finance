import Svg1 from '../../images/svg-1.svg';
import Svg2 from '../../images/svg-2.svg';
import Svg3 from '../../images/svg-3.svg';
import Svg4 from '../../images/svg-4.svg';
import Svg5 from '../../images/svg-5.svg';
import Svg6 from '../../images/svg-6.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headline: 'Unlimited Transaction with zero fees',
  description:
    'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
  buttonLabel: 'Get Started',
  imgStart: false,
  img: Svg1,
  alt: 'Wallet',
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Premium Bank',
  headline: 'Login to your account at any time',
  description:
    'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: Svg4,
  alt: 'Wallet',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join Our Team',
  headline: 'Create an account fast and easy',
  description: `Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.`,
  buttonLabel: 'Start Now',
  imgStart: false,
  img: Svg3,
  alt: 'Papers',
  dark: false,
  primary: false,
  darkText: true,
};
