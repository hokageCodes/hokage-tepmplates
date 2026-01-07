export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full py-8 mt-auto border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <p>© {year} Hokage Creative Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-900 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-neutral-900 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-neutral-900 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}