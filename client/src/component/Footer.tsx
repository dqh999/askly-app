export function Footer() {
  return (
    <footer className="bg-white border-t py-4 text-center text-sm text-gray-500 mt-auto">
      <div className="max-w-5xl mx-auto px-4">
        <p className="font-semibold text-gray-700">Askly</p>
        <p className="mt-1">&copy; 2024 Askly. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}

