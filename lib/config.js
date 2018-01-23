const getConfig = () => {
  if (typeof window === 'undefined') {
    // Load environment variables on server
    return {
      title: 'HELLO WORLD'
    }
  }
  else return window.config;
}

export default getConfig();
