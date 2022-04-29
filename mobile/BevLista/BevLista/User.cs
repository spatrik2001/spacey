using SQLite;
using System;
using System.Collections.Generic;
using System.Text;

namespace BevLista
{
    public class User
    {
        
        [PrimaryKey]
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
