let path = require('path'); // модуль для абсолютного пути из относительного

let ExtractTextPlugin = require('extract-text-webpack-plugin'); // достает css из файла js
let CopyWebpackPlugin = require('copy-webpack-plugin');

let conf = {
    entry: './src/index.js',  /* откуда берем точку входа*/ 
    output: {
        path: path.resolve(__dirname, './dist'),    /* куда ложим */
        filename: 'bundle.js',
        publicPath: 'dist/'     /* относительная ссылка на файл из браузера*/
    },
    devServer: {          // вывод ошибок на черном экране
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,              // все файлы с расширением js  экранируем точку и $ - конец строки
                loader: 'babel-loader',     // скармливаем js бабел лоадеру
                exclude: '/node_modules/'   // чтобы не прогонялось через бабел лоадер 
            },
            {
                test: /\.css$/,              // все файлы с расширением css  экранируем точку и $ - конец строки
                
             /*    use: [
                    'style-loader',
                    'css-loader'
                ] */
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",     // отменяем действие стайл-лоадера ( он помещал в head стили )
                    use: "css-loader"
                })

            },
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/styles.css"),
        new CopyWebpackPlugin([
           /*  {
                from: './src/fonts',
                to: './fonts'
            }, */
            {
                from: './src/img',
                to: './img'
            },
           
        ]),
    ]
};

module.exports = conf;