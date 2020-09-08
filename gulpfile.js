const {src, dest, series, watch} = require('gulp')
const sass = require('gulp-sass')
const csso = require('gulp-csso')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const pug = require('gulp-pug')
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp')
const webphtml = require('gulp-webp-html')
const webpcss = require('gulp-webp-css')
const sync = require('browser-sync').create()


function html() {
    return src('src/**.pug')
        .pipe(pug())
        .pipe(webphtml())
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(dest('dist'))
}

function js() {
    return src('src/js/**.js')
        .pipe(concat('index.min.js'))
        .pipe(dest('dist'))
}

function scss() {
    return src('src/scss/style.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(csso())
        .pipe(webpcss())
        .pipe(csso())
        .pipe(concat('style.css'))
        .pipe(dest('dist'))
}

function images() {
    return src('src/images/**.*')
        .pipe(
            webp({
                quality: 80
            })
        )
        .pipe(dest('dist/img'))
        .pipe(src('src/images/**.*'))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeVievBox: false}],
            interlaced: true,
            optimizationLevel: 3 //0 to 7
        }))
        .pipe(dest('dist/img'))
}

function clear() {
    return del('dist')
}

function serve() {
    sync.init({
        server: './dist'
    })

    watch('src/**.pug', series(html)).on('change', sync.reload)
    watch('src/scss/**.scss', series(scss)).on('change', sync.reload)
    watch('src/js/**.js', series(js)).on('change', sync.reload)
}

exports.serve = series(clear, scss, html, js, images, serve)