import React from 'react';

import Svg, {
  Path,
  Circle,
  Defs,
  ClipPath,
  Rect,
  G,
  Line,
  LinearGradient, Stop
} from 'react-native-svg';


export const Logo = () => {
  return (
    <Svg width="97" height="79" viewBox="0 0 97 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M48.5 0C33.9347 0 22.1228 11.8069 22.1228 26.3772C22.1228 40.9475 33.9297 52.7544 48.5 52.7544C63.0702 52.7544 74.8772 40.9475 74.8772 26.3772C74.8772 11.8069 63.0653 0 48.5 0ZM30.3684 41.2676C30.201 41.376 30.0138 41.4252 29.8315 41.4252C29.5064 41.4252 29.1912 41.2676 29.004 40.977C28.7085 40.5189 28.8365 39.9081 29.2946 39.6126C37.4713 34.3027 42.6877 25.663 46.9385 17.9789C47.0814 17.7227 47.2291 17.4518 47.3868 17.1661C49.8644 12.6443 53.603 5.80742 58.3169 5.65472C60.5286 5.58576 62.5678 6.99944 64.3953 9.87113C64.6859 10.3292 64.5529 10.94 64.0948 11.2356C63.6367 11.5262 63.0259 11.3932 62.7304 10.9351C61.3068 8.69389 59.8439 7.58068 58.3859 7.62993C54.8 7.74815 51.1057 14.4915 49.1256 18.1168C48.9679 18.4025 48.8202 18.6783 48.6773 18.9344C44.2984 26.8254 38.9293 35.7114 30.3684 41.2676ZM47.6675 23.3824C47.2833 22.9982 47.2833 22.3726 47.6675 21.9884C48.0517 21.6042 48.6773 21.6042 49.0615 21.9884L55.9772 28.9041L43.6432 34.6376C43.5102 34.7016 43.3674 34.7312 43.2295 34.7312C42.8551 34.7312 42.5005 34.5194 42.333 34.1598C42.1015 33.6672 42.3182 33.0811 42.8108 32.8496L52.5883 28.3081L47.6675 23.3824ZM59.2134 28.0027C57.0215 32.6969 52.1598 38.8294 41.4513 41.4006C41.3725 41.4203 41.2986 41.4302 41.2198 41.4302C40.7765 41.4302 40.3676 41.1248 40.2593 40.6716C40.1312 40.1396 40.4563 39.6077 40.9883 39.4796C48.9729 37.5635 54.4995 33.416 57.4254 27.1653C59.6025 22.5105 59.4449 18.4123 59.44 18.3729C59.4154 17.8262 59.839 17.3681 60.3808 17.3434C60.9276 17.3287 61.3856 17.7424 61.4103 18.2842C61.4201 18.4714 61.5925 22.9144 59.2134 28.0027ZM69.848 16.5258C69.7052 16.6391 69.5328 16.6932 69.3604 16.6932C69.1289 16.6932 68.8924 16.5898 68.7397 16.3928C68.656 16.2844 68.5673 16.181 68.4787 16.0825L60.1247 15.8657C59.7011 15.8559 59.371 15.4914 59.3809 15.0579C59.3907 14.6294 59.7306 14.2895 60.1444 14.2895C60.1493 14.2895 60.1591 14.2895 60.1641 14.2895L66.5823 14.457C63.7401 12.728 60.8192 13.5999 60.6665 13.6492C60.2527 13.7772 59.8094 13.5506 59.6764 13.132C59.5434 12.7182 59.7749 12.2749 60.1887 12.1419C60.2478 12.1222 66.0011 10.3588 69.981 15.4224C70.2519 15.7623 70.1928 16.2549 69.848 16.5258Z" fill="white" />
      <Path d="M0 78.7795V63.6509H12.1949C13.3327 63.6509 14.149 63.8834 14.6487 64.3435C15.1484 64.8085 15.4007 65.5506 15.4007 66.5846V69.9635C15.4007 70.9827 15.1484 71.7247 14.6487 72.1898C14.149 72.6548 13.3278 72.8824 12.1949 72.8824H9.97853L16.8898 78.7795H13.1398L6.98547 72.8824H2.53298V78.7795H0ZM11.2054 65.61H2.53298V70.9183H11.2054C11.8337 70.9183 12.2641 70.8045 12.4917 70.577C12.7193 70.3494 12.8331 69.9487 12.8331 69.3748V67.1683C12.8331 66.5945 12.7143 66.1938 12.4818 65.9612C12.2493 65.7287 11.8238 65.61 11.2054 65.61Z" fill="white" />
      <Path d="M35.3131 75.9645L36.8765 78.7795H39.9784L31.0239 63.6509H28.4068L19.6602 78.7795H22.5147L24.4491 75.2422H24.454L25.6562 73.0605L25.8838 72.6499L25.8887 72.6449L25.8838 72.6499L29.6634 65.8623L33.3441 72.4421L33.3343 72.4272L33.3441 72.4421L33.6905 73.0605L34.9075 75.2422L35.3131 75.9645Z" fill="white" />
      <Path d="M47.0035 78.7795L38.2865 63.6509H41.3538L48.1314 75.8161L54.6321 63.6509H57.4569L49.1803 78.7795H47.0035Z" fill="white" />
      <Path d="M72.0661 69.7855H64.6057V72.0315H72.0661V69.7855Z" fill="white" />
      <Path d="M63.1215 76.5631V73.2633V72.0315V69.7854V68.7811V65.8969H75.4945V63.6509H60.262V78.7795H75.633V76.5631H63.1215Z" fill="white" />
      <Path d="M81.9407 66.6835C82.01 67.1238 82.0644 67.574 82.099 68.0242C82.1336 68.4794 82.1534 68.9296 82.1534 69.3847V78.7795H79.5215V63.6509H81.6983L92.7998 73.5354C93.1263 73.8125 93.438 74.1241 93.7299 74.4605C94.0267 74.797 94.3186 75.1828 94.6105 75.6132C94.5313 75.1581 94.467 74.703 94.4275 74.2379C94.3879 73.7729 94.3681 73.293 94.3681 72.7933V63.6608H97V78.7894H95.0459L83.7167 68.7663C83.321 68.3953 82.9796 68.044 82.6976 67.7125C82.4107 67.3712 82.1584 67.0298 81.9407 66.6835Z" fill="white" />
    </Svg>

  );
};


export const LogoRed = () => {
  return (
    <Svg width="97" height="50" viewBox="0 0 97 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M48.5 0C33.9347 0 22.1228 11.8069 22.1228 26.3772C22.1228 40.9475 33.9297 52.7544 48.5 52.7544C63.0702 52.7544 74.8772 40.9475 74.8772 26.3772C74.8772 11.8069 63.0653 0 48.5 0ZM30.3684 41.2676C30.201 41.376 30.0138 41.4252 29.8315 41.4252C29.5064 41.4252 29.1912 41.2676 29.004 40.977C28.7085 40.5189 28.8365 39.9081 29.2946 39.6126C37.4713 34.3027 42.6877 25.663 46.9385 17.9789C47.0814 17.7227 47.2291 17.4518 47.3868 17.1661C49.8644 12.6443 53.603 5.80742 58.3169 5.65472C60.5286 5.58576 62.5678 6.99944 64.3953 9.87113C64.6859 10.3292 64.5529 10.94 64.0948 11.2356C63.6367 11.5262 63.0259 11.3932 62.7304 10.9351C61.3068 8.69389 59.8439 7.58068 58.3859 7.62993C54.8 7.74815 51.1057 14.4915 49.1256 18.1168C48.9679 18.4025 48.8202 18.6783 48.6773 18.9344C44.2984 26.8254 38.9293 35.7114 30.3684 41.2676ZM47.6675 23.3824C47.2833 22.9982 47.2833 22.3726 47.6675 21.9884C48.0517 21.6042 48.6773 21.6042 49.0615 21.9884L55.9772 28.9041L43.6432 34.6376C43.5102 34.7016 43.3674 34.7312 43.2295 34.7312C42.8551 34.7312 42.5005 34.5194 42.333 34.1598C42.1015 33.6672 42.3182 33.0811 42.8108 32.8496L52.5883 28.3081L47.6675 23.3824ZM59.2134 28.0027C57.0215 32.6969 52.1598 38.8294 41.4513 41.4006C41.3725 41.4203 41.2986 41.4302 41.2198 41.4302C40.7765 41.4302 40.3676 41.1248 40.2593 40.6716C40.1312 40.1396 40.4563 39.6077 40.9883 39.4796C48.9729 37.5635 54.4995 33.416 57.4254 27.1653C59.6025 22.5105 59.4449 18.4123 59.44 18.3729C59.4154 17.8262 59.839 17.3681 60.3808 17.3434C60.9276 17.3287 61.3856 17.7424 61.4103 18.2842C61.4201 18.4714 61.5925 22.9144 59.2134 28.0027ZM69.848 16.5258C69.7052 16.6391 69.5328 16.6932 69.3604 16.6932C69.1289 16.6932 68.8924 16.5898 68.7397 16.3928C68.656 16.2844 68.5673 16.181 68.4787 16.0825L60.1247 15.8657C59.7011 15.8559 59.371 15.4914 59.3809 15.0579C59.3907 14.6294 59.7306 14.2895 60.1444 14.2895C60.1493 14.2895 60.1591 14.2895 60.1641 14.2895L66.5823 14.457C63.7401 12.728 60.8192 13.5999 60.6665 13.6492C60.2527 13.7772 59.8094 13.5506 59.6764 13.132C59.5434 12.7182 59.7749 12.2749 60.1887 12.1419C60.2478 12.1222 66.0011 10.3588 69.981 15.4224C70.2519 15.7623 70.1928 16.2549 69.848 16.5258Z" fill="#9E005D" />
      <Path d="M0 78.7795V63.6509H12.1949C13.3327 63.6509 14.149 63.8834 14.6487 64.3435C15.1484 64.8085 15.4007 65.5506 15.4007 66.5846V69.9635C15.4007 70.9827 15.1484 71.7247 14.6487 72.1898C14.149 72.6548 13.3278 72.8824 12.1949 72.8824H9.97853L16.8898 78.7795H13.1398L6.98547 72.8824H2.53298V78.7795H0ZM11.2054 65.61H2.53298V70.9183H11.2054C11.8337 70.9183 12.2641 70.8045 12.4917 70.577C12.7193 70.3494 12.8331 69.9487 12.8331 69.3748V67.1683C12.8331 66.5945 12.7143 66.1938 12.4818 65.9612C12.2493 65.7287 11.8238 65.61 11.2054 65.61Z" fill="#CF113A" />
      <Path d="M35.3131 75.9645L36.8765 78.7795H39.9784L31.0239 63.6509H28.4068L19.6602 78.7795H22.5147L24.4491 75.2422H24.454L25.6562 73.0605L25.8838 72.6499L25.8887 72.6449L25.8838 72.6499L29.6634 65.8623L33.3441 72.4421L33.3343 72.4272L33.3441 72.4421L33.6905 73.0605L34.9075 75.2422L35.3131 75.9645Z" fill="#ED1C24" />
      <Path d="M47.0035 78.7795L38.2865 63.6509H41.3538L48.1314 75.8161L54.6321 63.6509H57.4569L49.1803 78.7795H47.0035Z" fill="#ED1C28" />
      <Path d="M72.0661 69.7855H64.6057V72.0315H72.0661V69.7855Z" fill="#ED1D47" />
      <Path d="M63.1215 76.5631V73.2633V72.0315V69.7854V68.7811V65.8969H75.4945V63.6509H60.262V78.7795H75.633V76.5631H63.1215Z" fill="#ED1D61" />
      <Path d="M81.9407 66.6835C82.01 67.1238 82.0644 67.574 82.099 68.0242C82.1336 68.4794 82.1534 68.9296 82.1534 69.3847V78.7795H79.5215V63.6509H81.6983L92.7998 73.5354C93.1263 73.8125 93.438 74.1241 93.7299 74.4605C94.0267 74.797 94.3186 75.1828 94.6105 75.6132C94.5313 75.1581 94.467 74.703 94.4275 74.2379C94.3879 73.7729 94.3681 73.293 94.3681 72.7933V63.6608H97V78.7894H95.0459L83.7167 68.7663C83.321 68.3953 82.9796 68.044 82.6976 67.7125C82.4107 67.3712 82.1584 67.0298 81.9407 66.6835Z" fill="#ED1E79" />
    </Svg>
  );
};

export const LogoNoText = () => {
  return (
    <Svg  width="97" height="50"  viewBox="0 0 97 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M48.5 0C33.9347 0 22.1228 11.8069 22.1228 26.3772C22.1228 40.9475 33.9297 52.7544 48.5 52.7544C63.0702 52.7544 74.8772 40.9475 74.8772 26.3772C74.8772 11.8069 63.0653 0 48.5 0ZM30.3684 41.2676C30.201 41.376 30.0138 41.4252 29.8315 41.4252C29.5064 41.4252 29.1912 41.2676 29.004 40.977C28.7085 40.5189 28.8365 39.9081 29.2946 39.6126C37.4713 34.3027 42.6877 25.663 46.9385 17.9789C47.0814 17.7227 47.2291 17.4518 47.3868 17.1661C49.8644 12.6443 53.603 5.80742 58.3169 5.65472C60.5286 5.58576 62.5678 6.99944 64.3953 9.87113C64.6859 10.3292 64.5529 10.94 64.0948 11.2356C63.6367 11.5262 63.0259 11.3932 62.7304 10.9351C61.3068 8.69389 59.8439 7.58068 58.3859 7.62993C54.8 7.74815 51.1057 14.4915 49.1256 18.1168C48.9679 18.4025 48.8202 18.6783 48.6773 18.9344C44.2984 26.8254 38.9293 35.7114 30.3684 41.2676ZM47.6675 23.3824C47.2833 22.9982 47.2833 22.3726 47.6675 21.9884C48.0517 21.6042 48.6773 21.6042 49.0615 21.9884L55.9772 28.9041L43.6432 34.6376C43.5102 34.7016 43.3674 34.7312 43.2295 34.7312C42.8551 34.7312 42.5005 34.5194 42.333 34.1598C42.1015 33.6672 42.3182 33.0811 42.8108 32.8496L52.5883 28.3081L47.6675 23.3824ZM59.2134 28.0027C57.0215 32.6969 52.1598 38.8294 41.4513 41.4006C41.3725 41.4203 41.2986 41.4302 41.2198 41.4302C40.7765 41.4302 40.3676 41.1248 40.2593 40.6716C40.1312 40.1396 40.4563 39.6077 40.9883 39.4796C48.9729 37.5635 54.4995 33.416 57.4254 27.1653C59.6025 22.5105 59.4449 18.4123 59.44 18.3729C59.4154 17.8262 59.839 17.3681 60.3808 17.3434C60.9276 17.3287 61.3856 17.7424 61.4103 18.2842C61.4201 18.4714 61.5925 22.9144 59.2134 28.0027ZM69.848 16.5258C69.7052 16.6391 69.5328 16.6932 69.3604 16.6932C69.1289 16.6932 68.8924 16.5898 68.7397 16.3928C68.656 16.2844 68.5673 16.181 68.4787 16.0825L60.1247 15.8657C59.7011 15.8559 59.371 15.4914 59.3809 15.0579C59.3907 14.6294 59.7306 14.2895 60.1444 14.2895C60.1493 14.2895 60.1591 14.2895 60.1641 14.2895L66.5823 14.457C63.7401 12.728 60.8192 13.5999 60.6665 13.6492C60.2527 13.7772 59.8094 13.5506 59.6764 13.132C59.5434 12.7182 59.7749 12.2749 60.1887 12.1419C60.2478 12.1222 66.0011 10.3588 69.981 15.4224C70.2519 15.7623 70.1928 16.2549 69.848 16.5258Z" fill="#9E005D" />
    </Svg>
  )
}

