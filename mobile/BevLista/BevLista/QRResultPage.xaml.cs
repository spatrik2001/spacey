using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace BevLista
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class QRResultPage : ContentPage
    {
        public QRResultPage(string qrCodeText)
        {
            InitializeComponent();
            if(int.TryParse(qrCodeText, out int resultId))
            {
                string bejegyzes = App.Database.GetNoteAsync(resultId).Result.Text;
                resultLabel.Text = bejegyzes;
            }
            else
            {
                DisplayAlert("HIBA", "Nem számot tároló QR kódot olvasott be!", "OK");
            }
           
        }
    }
}