import webpack from 'webpack';

export const loaderPostCss: webpack.RuleSetUseItem = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        ['postcss-preset-env'],
        [
          'css-declaration-sorter',
          {
            map: false,
            order: 'smacss',
          },
        ],
      ],
    },
  },
};
