import webpack from 'webpack';

import { loaderStyle } from '../loaders/loaderStyle';
import { loaderCss } from '../loaders/loaderCss';
import { loaderSass } from '../loaders/loaderSass';

export const ruleCss: webpack.RuleSetRule = {
  test: /\.(scss|sass|css)$/i,
  use: [loaderStyle, loaderCss, loaderSass],
  generator: {
    filename: './assets/css/[name].[contenthash:8].[ext]',
  },
};
