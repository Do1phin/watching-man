import webpack from 'webpack';

import { loaderBabel } from '../loaders/loaderBabel';

export const ruleBabel: webpack.RuleSetRule = {
  exclude: [/node_modules/],
  test: /\.(ts|tsx|js|jsx)$/i,
  use: [loaderBabel],
};
