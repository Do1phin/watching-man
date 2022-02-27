import webpack from 'webpack';

export const loaderCss: webpack.RuleSetUseItem = {
  loader: 'css-loader',
  options: {
    import: true,
    modules: false,
  },
};
