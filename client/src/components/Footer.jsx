const Footer = () => {
  return (
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a href="/" class="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>

          <li class="nav-item">
            <a href="/cart" class="nav-link px-2 text-body-secondary">
              Cart
            </a>
          </li>
        </ul>
        <p class="text-center text-body-secondary">© 2024 Muhammad Ali, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
