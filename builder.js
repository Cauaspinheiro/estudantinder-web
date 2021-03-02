const copy = require('copy')

copy('src/*.html', 'public', {}, () => {})

copy('src/assets/**', 'public/assets', {}, () => {})