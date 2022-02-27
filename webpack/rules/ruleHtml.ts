import webpack from 'webpack';

import { loaderHtml } from '../loaders/loaderHtml';

export const ruleHtml: webpack.RuleSetRule = {
  test: /\.html/i,
  use: loaderHtml,
};
