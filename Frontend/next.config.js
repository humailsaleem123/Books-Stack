/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  trailingSlash: true,

  images: {
    domains: ['firebasestorage.googleapis.com'],
    unoptimized: true,

  },
  // async exportPathMap(defaultPathMap) {
  //   const pathMap = {
  //     '/': { page: '/' },
  //     '/about': { page: '/about' },
  //     '/contact': { page: '/contact' },
  //     '/register': { page: '/register' },
  //     '/login': { page: '/login' },
  //     '/books': { page: '/books' },
  //   };
  //   // now get the dynamic stuff:
  //   const getBooks = await loadData();
  //   getBooks.map(item => {
  //     pathMap[`/books/${item.book_category}`] = { page: '/books/[book_category]' };
  //     pathMap[`/books/${item.book_category}/${item._id}`] = { page: '/books/[book_category]/[id]' };
  //   });
  //   return pathMap;
  // }

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/register': { page: '/register' },
      '/login': { page: '/login' },
      '/books': { page: '/books' },
      '/books/book_category': { page: '/books/[book_category]' },
      // '/books/[book_category]/[_id]': { page: '/books/[book_category]/[_id]' },
    }
  },
}


module.exports = nextConfig
