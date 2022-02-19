import * as webpack from 'webpack';

export const rulePic: webpack.RuleSetRule = {
  test: /\.(jpg|png|svg|jpeg)$/i,
  type: 'asset/resource',
  generator: {
    filename: './images/[name][query][ext]',
  },
};
