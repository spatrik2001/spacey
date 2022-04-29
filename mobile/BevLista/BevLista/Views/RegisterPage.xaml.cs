using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Security.Cryptography;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace BevLista.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class RegisterPage : ContentPage
    {
        public RegisterPage()
        {
            InitializeComponent();

            BindingContext = new User();
        }

        private async void RegButtonClicked(object sender, EventArgs e)
        {
            
            User user = (User)BindingContext;
            if (App.Database.GetSpecificUser(user.UserName) == null)
            {
                user.Password = App.CreateMD5(user.Password);
                await App.Database.SaveUserAsync(user);
                await Navigation.PopModalAsync();
                await Navigation.PushModalAsync(new MainPage());
            }
            else
            {
                await DisplayAlert("HIBA!", "Már létezik a megadott néven felhasználó!", "OK");
            }
        }

       
    }
}
