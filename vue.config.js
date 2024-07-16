module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/application/roulette/' : '/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/css/style.sass";`
            }
        }
    }
}
