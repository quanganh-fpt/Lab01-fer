export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <div className="container">
        <p className="mb-1">&copy; 2025 My Website. All rights reserved.</p>
        <p className="mb-0">
          <a href="/about" className="text-white text-decoration-none me-3">
            About
          </a>
          <a href="/contact" className="text-white text-decoration-none me-3">
            Contact
          </a>
          <a href="/privacy" className="text-white text-decoration-none">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}