using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;
using System.Security.Cryptography;
using Plugin.Fingerprint;
using Plugin.Fingerprint.Abstractions;

namespace BevLista
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
            
        }

        private async void OnRegisterButtonClicked(object sender, EventArgs e)
        {
           await Navigation.PushModalAsync(new NavigationPage(new Views.RegisterPage()));
        }

        private async void LoginButtonClicked(object sender, EventArgs e)
        {
            User user = App.Database.GetSpecificUser(Entry_fNev.Text);
            if (user != null)
            {
                if (Entry_fNev.Text == user.UserName && (App.CreateMD5(Entry_pw.Text) == user.Password))
                {
                    App.logedUser = user;
                    await Navigation.PushModalAsync(new NavigationPage(new Views.NotePage()));
                    
                }
            }
        }

        private async void AuthButtonClicked(object sender, EventArgs e)
        {
            bool isFingerprintAvailable = await CrossFingerprint.Current.IsAvailableAsync(false);
            if(!isFingerprintAvailable)
            {
                await DisplayAlert("HIBA!", "Ez a készülék nem támogatja az ujjlenyomat olvasást!", "OK");
                return;
            }

            AuthenticationRequestConfiguration conf = new AuthenticationRequestConfiguration("Ellenőrzés", "Ellenőrzés a belépéshez");
            try
            {
                var authResult = await CrossFingerprint.Current.AuthenticateAsync(conf);
                if (authResult.Authenticated)
                {
                    await Navigation.PushModalAsync(new NavigationPage(new Views.NotePage()));
                }
                else
                {
                    await DisplayAlert("Hiba!", "Az ellenőrzés sikertelen!", "OK");
                }
            }
            catch(Exception)
            {
                throw new Exception();
            }
           
            

        }
    }
}
