var path = require('path');
module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-preset-env')({
            stage: 1,
        }),
        require('postcss-nested'),
        require('postcss-for'),
        require('postcss-mixins'),
        require('postcss-simple-vars'),
        require('postcss-strip-units'),
        require('postcss-hexrgba'),
        require('postcss-nested'),
        require('postcss-extend-rule'),
        require('postcss-url'),
        require('postcss-calc'),
    ],
};