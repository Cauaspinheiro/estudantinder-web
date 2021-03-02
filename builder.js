const copy = require('copy')

copy('src/*.html', 'public', {}, () => {})

copy('assets/**', 'public', {}, () => {})