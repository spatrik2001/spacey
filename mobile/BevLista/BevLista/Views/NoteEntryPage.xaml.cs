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
    public partial class NoteEntryPage : ContentPage
    {
        public string ItemId {
            set
            {
                LoadNote(value);
            }
        }

        public NoteEntryPage()
        {
            InitializeComponent();
            BindingContext = new Note();
        }

        public NoteEntryPage(string id)
        {
            InitializeComponent();

            BindingContext = new Note();
            LoadNote(id);
        }

        private async void LoadNote(string itemId)
        {
            try
            {
                int id = Convert.ToInt32(itemId);
                Note note = await App.Database.GetNoteAsync(id);
                BindingContext = note;
            }
            catch (Exception)
            {
                Console.WriteLine("Nem sikerült letölteni a bejegyzést!");
            }
        }

        private async void OnSaveButtonClicked(object sender, EventArgs e)
        {
            Note note = (Note)BindingContext;
            note.Date = DateTime.Now;
            note.userName = App.logedUser.UserName;
            if(!string.IsNullOrWhiteSpace(note.Text))
            {
                await App.Database.SaveNoteAsync(note);
            }
            await Navigation.PopModalAsync();
            await Navigation.PushModalAsync(new NavigationPage(new NotePage()));
            
        }

        private async void OnDeleteButtonClicked(object sender, EventArgs e)
        {
            Note note = (Note)BindingContext;
            await App.Database.DeleteNotAsync(note);
            await Navigation.PopModalAsync();
            await Navigation.PushModalAsync(new NavigationPage(new NotePage()));
            

        }
    }
}