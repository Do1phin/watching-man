import webpack from 'webpack';

import { loaderStyle } from '../loaders/loaderStyle';
import { loaderCss } from '../loaders/loaderCss';
import { loaderSass } from '../loaders/loaderSass';
import { loaderPostCss } from '../loaders/loaderPostCss';

export const ruleCss: webpack.RuleSetRule = {
  generator: {
    filename: './css/[name][query][ext]',
  },
  test: /\.(scss|sass|css)$/i,
  use: [loaderStyle, loaderCss, loaderPostCss, loaderSass],
};
