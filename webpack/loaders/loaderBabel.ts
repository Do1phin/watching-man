import webpack from 'webpack';

export const loaderBabel: webpack.RuleSetUseItem = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  },
};
