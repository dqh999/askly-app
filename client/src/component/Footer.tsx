export function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">StudyX</h3>
              <p className="text-gray-400">Improve your language skills with our interactive translation exercises.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
              <p className="text-gray-400 mb-2">Stay updated with our latest news and offers.</p>
              <form className="flex">
                <input type="email" placeholder="Enter your email" className="text-gray-500 px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 " />
                <button type="submit" className="bg-primary hover:bg-primary/90  text-white px-4 py-2 rounded-r-md  transition duration-300">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 STUDYX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  