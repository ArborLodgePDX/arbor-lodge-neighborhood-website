module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/venmo',
        destination: 'https://account.venmo.com/u/ArborLodgePDX',
        permanent: true,
        basePath: false
      },
      {
        source: '/paypal',
        destination: 'https://www.paypal.com/donate?hosted_button_id=UY3SHVCSZZRZA',
        permanent: true,
      },
      {
        source: '/survey',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLScccKWR3GQDFQwvDLvRGmFEoj-wDqHfLP0q2ReF3lIs4a0PQQ/viewform',
        permanent: true,
      },
    ];
  },
};