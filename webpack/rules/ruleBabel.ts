import * as webpack from 'webpack';

import { loaderBabel } from '../loaders/loaderBabel';

export const ruleBabel: webpack.RuleSetRule = {
  test: /\.(ts|tsx|js|jsx)$/i,
  use: [loaderBabel],
  exclude: [/node_modules/],
};
