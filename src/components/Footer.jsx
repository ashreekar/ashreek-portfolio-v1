function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-white/10">
      <div className="mx-auto w-full lg:w-1/2 px-6 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>
          © {new Date().getFullYear()} Ashreek A R · Built with React & Tailwind
        </p>
        <p className="mt-1">
          Learning. Building. Shipping 🚀
        </p>
      </div>
    </footer>
  );
}

export default Footer;