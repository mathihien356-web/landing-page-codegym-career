// Cuộn mượt và nút trở về đầu trang
(function () {
  const backToTop = document.getElementById('backToTop');

  function updateBackToTop() {
    if (window.scrollY > 450) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', updateBackToTop);
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Đóng menu điều hướng trên thiết bị nhỏ sau khi chọn một mục
  document.querySelectorAll('.cg-navbar .nav-link, .cg-navbar .btn').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth < 992 && window.jQuery) {
        window.jQuery('#mainNav').collapse('hide');
      }
    });
  });

  updateBackToTop();
})();
