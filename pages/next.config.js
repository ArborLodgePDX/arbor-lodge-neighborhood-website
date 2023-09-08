/** @type {import('next').NextConfig} */

module.exports = {
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
    ];
  },
};