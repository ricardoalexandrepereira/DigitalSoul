
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    
}
const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.js');

const withTM = require("next-transpile-modules")(["gsap"]);

module.exports = withTM({});

module.exports = withNextIntl(nextConfig);

