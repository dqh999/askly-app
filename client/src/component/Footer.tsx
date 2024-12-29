export function Footer() {
  return (
    <footer className="bg-white text-black py-8 border-t border-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">StudyX</h3>
            <p className="text-gray-600">Improve your language skills with our interactive translation exercises.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <p className="text-gray-600 mb-2">Stay updated with our latest news and offers.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="text-gray-500 px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-black" 
              />
              <button 
                type="submit" 
                className="bg-black text-white hover:bg-gray-700 px-4 py-2 rounded-r-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-5 pt-3 border-t border-gray-300 text-center text-gray-600">
          <p>&copy; 2024 STUDYX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
