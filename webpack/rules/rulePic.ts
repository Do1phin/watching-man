import webpack from 'webpack';

export const rulePic: webpack.RuleSetRule = {
  generator: {
    filename: './images/[name][query][ext]',
  },
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
};
