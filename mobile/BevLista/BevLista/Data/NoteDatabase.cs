using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using SQLite;

namespace BevLista.Data
{
    public class NoteDatabase
    {
        readonly SQLiteAsyncConnection database;

        public NoteDatabase(string dbPath)
        {
            database = new SQLiteAsyncConnection(dbPath);
          
            database.CreateTableAsync<Note>().Wait();
            database.CreateTableAsync<User>().Wait();
         
        }

        public Task<int> GetUserCount()
        {
            return database.Table<User>().CountAsync();
        }

        public Task<List<Note>> GetNoteAsync()
        {
            return database.Table<Note>().Where(x => x.userName == App.logedUser.UserName).ToListAsync();
        }

        public Task<Note> GetNoteAsync(int id)
        {
            return database.Table<Note>().Where(x => x.ID == id).FirstOrDefaultAsync();
        }

        public Task<int> SaveNoteAsync(Note note)
        {
            if(note.ID != 0)
            {
                return database.UpdateAsync(note);
            }
            else
            {
                return database.InsertAsync(note);
            }
        }

        public Task<int> DeleteNotAsync(Note note)
        {
            return database.DeleteAsync(note);
        }

        public Task<int> SaveUserAsync(User user)
        {
            return database.InsertAsync(user);
        }

        public User GetSpecificUser(string userName)
        {
            return database.Table<User>().Where(x => x.UserName == userName).FirstOrDefaultAsync().Result;
        }

    }
}
