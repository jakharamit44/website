<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="CourseCard.ascx.cs" Inherits="ClgWebsite.UserControl.WebUserControl1" %>
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link href="style.css" rel="stylesheet" />
</head>
<body>
<div ID="news-slider" class="wrapper">
    <div id="cardWrapper" class="card-wrapper">
        <asp:Repeater ID="Repeater2" runat="server" DataSourceID="SqlDataSource1">
            <ItemTemplate>
                <div class="card-item">
                    <div class="card">
                        <div class="card-image">
                            <img src="../img1.jpg" />
                        </div>
                        <div class="card-text">
                            <div class="card-footer">
                            <span class="date">Duration: <%#Eval("Duration") %></span>
                                </div>
                            <h5><%#Eval("CourseName") %></h5>
                        </div>
                        <div class="card-footer">
                            <button class="create-account">MORE INFO</button>
                        </div>
                    </div>
                </div>
            </ItemTemplate>
        </asp:Repeater>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:WebV3ConnectionString2 %>"
            SelectCommand="SELECT [CourseName], [Description], [Duration] FROM [C_Course] WHERE (([IsActive] = @IsActive) AND ([IsEnabled] = @IsEnabled))" ProviderName="<%$ ConnectionStrings:WebV3ConnectionString2.ProviderName %>">
            <SelectParameters>
                <asp:Parameter DefaultValue="1" Name="IsActive" Type="String" />
                <asp:Parameter DefaultValue="1" Name="IsEnabled" Type="String" />
            </SelectParameters>
        </asp:SqlDataSource>
    </div>
</div>


</body>

</html>