<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ImageSlideBar.ascx.cs" Inherits="ClgWebsite.UserControl.ImageSlideBar" %>
<head>
    <title>MDU</title>
</head>
<body>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <ol class="carousel-indicators">
    <asp:Repeater ID="Repeater1" runat="server" DataSourceID="SqlDataSource1">
      <ItemTemplate>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="<%# Container.ItemIndex %>"
          <%# (Container.ItemIndex == 0) ? "class=\"active\"" : "" %>></li>
      </ItemTemplate>
    </asp:Repeater>
  </ol>
  <div class="carousel-inner">
    <asp:Repeater ID="Repeater2" runat="server" DataSourceID="SqlDataSource1">
      <ItemTemplate>
        <div class="carousel-item <%# (Container.ItemIndex == 0) ? "active" : "" %>">
          <img class="d-block w-100" src='<%#Eval("ImageUrl") %>' alt="Slide <%# Container.ItemIndex %>">
          <div class="carousel-caption d-none d-md-block">
            <h5 class="ImgHeader"><%#Eval("ImageName") %></h5>
            <p class="ImgContent"><%#Eval("ImageInfoText") %></p>
          </div>
        </div>
      </ItemTemplate>
    </asp:Repeater>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:WebV3ConnectionString %>"
  SelectCommand="SELECT ImageUrl, ImageName, ImageInfoText FROM Z_MasterImage WHERE (IsApproved = 1) AND (IsEnabled = 1)">
</asp:SqlDataSource>

        <script>
            var pic = document.getElementsByClassName("carousel-item");
            pic[0].classList.add("active");
        </script>
</body>