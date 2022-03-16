import webpack from 'webpack';

export const LoaderFiles: webpack.RuleSetUseItem = {
  loader: 'file-loader',
  options: {
    name: '[contenthash].[ext]',
    outputPath: 'images',
    emitFile: true,
  },
}
