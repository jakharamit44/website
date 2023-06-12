<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="MainNavBar.ascx.cs" Inherits="ClgWebsite.UserControl.MainNavBar" %>
<head>
<title>MDU</title>
</head>

<body>
  <div class="AmitNavbar">
    <div class="logo">
      <img src="../MduLogo.png" />
      <div>MDU</div>
    </div>
    <input type="checkbox" id="click" />
      <button type="button" class="btn login-btn btn-outline-primary me-2">Login</button>
    <label for="click" class="menu-btn">
      <li><i class="bi bi-gear-wide-connected"></i></li>
    </label>
    <ul>
      <li><i class="bi bi-sun-fill" onclick="switchTheme();"></i></li>
      <li><i class="bi bi-chat-right-dots"></i></li>
      <li><i class="bi bi-plus" id="increase-font"></i></li>
      <li><i class="bi bi-dash" id="decrease-font"></i></li>
    </ul>
  </div>
    <script>
        window.addEventListener('scroll', function () {
            var firstNavbarHeight = document.querySelector('.navbar').offsetHeight;
            var secondNavbar = document.querySelector('.second-navbar');

            if (window.pageYOffset >= firstNavbarHeight) {
                secondNavbar.classList.add('sticky');
            } else {
                secondNavbar.classList.remove('sticky');
            }
        });

    </script>

</body>

