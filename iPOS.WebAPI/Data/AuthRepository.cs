using iPOS.WebAPI.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace iPOS.WebAPI.Data
{
    public class AuthRepository : IDisposable
    {
        private AuthContext _context;

        private UserManager<IdentityUser> _userManager;

        public AuthRepository()
        {
            _context = new AuthContext();
            _userManager = new UserManager<IdentityUser>(new UserStore<IdentityUser>(_context));
        }

        public async Task<IdentityResult> RegisterUser(User user)
        {
            IdentityUser iuser = new IdentityUser
            {
                UserName = user.UserName
            };

            var result = await _userManager.CreateAsync(iuser, user.Password);

            return result;
        }

        public async Task<IdentityUser> FindUser(string userName, string password)
        {
            IdentityUser iuser = await _userManager.FindAsync(userName, password);

            return iuser;
        }

        public void Dispose()
        {
            _context.Dispose();
            _userManager.Dispose();

        }
    }
}