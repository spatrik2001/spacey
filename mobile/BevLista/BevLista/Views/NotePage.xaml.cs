using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace BevLista.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class NotePage : ContentPage
    {

        protected override async void OnAppearing()
        {
            base.OnAppearing();
            collectionView.ItemsSource = await App.Database.GetNoteAsync();
        }

        public NotePage()
        {
            InitializeComponent();
           
        }

        private async void OnSelectionChange(object sender, SelectionChangedEventArgs e)
        {
            if (e.CurrentSelection != null)
            {
                Note note = (Note)e.CurrentSelection.FirstOrDefault();  
                await Navigation.PushModalAsync(new NavigationPage(new Views.NoteEntryPage(note.ID.ToString())));
            }

        }

        private async void OnAddClickChange(object sender, EventArgs e)
        {
            await Navigation.PushModalAsync(new NavigationPage(new Views.NoteEntryPage()));
           
        }

        private async void OnLogOutClicked(object sender, EventArgs e)
        {
            Leave();
        }

        protected override bool OnBackButtonPressed()
        {
            Leave();
            return true;
        }

        private async void Leave()
        {
            bool answer = await DisplayAlert("MEGERŐSÍTÉS", "Biztosan kilép?", "Igen", "Nem");
            if(answer)
            {
                await Navigation.PopModalAsync();
                await Navigation.PushModalAsync(new NavigationPage(new MainPage()));
            }
        }

        private async void OnQrClicked(object sender, EventArgs e)
        {
            await Navigation.PushModalAsync(new NavigationPage(new QRPage()));
        }
    }
}