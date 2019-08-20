routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/about/',
    url: './about.html',
  },
  {
    path: '/gallery/',
    url: './gallery.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
