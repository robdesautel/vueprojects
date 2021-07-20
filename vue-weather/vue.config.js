module.export ={
    publicPath: process.env.NODE_ENV === 'production'
    ? '/vueweather'
    : '/',
    configureWebpack:{
        devtool: "source-map"
    }
}