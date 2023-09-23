module: {
    rules: [
        {
            test: /\.mp3$/,
    loader: 'file-loader',
            exclude: /node_modules(?!\/foundation-sites)|bower_components/,
            options: {
            name: '[path][name].[ext]'
        }
        }
    ]
}