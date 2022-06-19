import webpack from 'webpack';

export const LoaderFiles: webpack.RuleSetUseItem = {
  loader: 'file-loader',
  options: {
    emitFile: true,
    name: '[contenthash].[ext]',
    outputPath: 'images',
  },
};
