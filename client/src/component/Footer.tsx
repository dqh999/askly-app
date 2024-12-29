export function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-4 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          <span className="font-bold text-gray-800">StudyX</span> &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}