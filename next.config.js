/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
}

const withTM = require("next-transpile-modules")(["gsap"]);

module.exports = withTM({});

module.exports = nextConfig

