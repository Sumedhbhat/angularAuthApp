using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace SimpleAPI.Helpers
{
    public class JwtService
    {
        private readonly string SECURE_KEY = "this is a very secure keyabcdefg";
        public string Generate(int id)
        {
            var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(SECURE_KEY));
            var credentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256Signature);
            var header = new JwtHeader(credentials);
            var payload = new JwtPayload(id.ToString(), null, null, null, DateTime.Today.AddDays(1));
            var securityToken = new JwtSecurityToken(header, payload);
            return new JwtSecurityTokenHandler().WriteToken(securityToken);
        }

        public JwtSecurityToken Verify(string jwt)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key= Encoding.ASCII.GetBytes(SECURE_KEY);
            tokenHandler.ValidateToken(jwt, new TokenValidationParameters{
                IssuerSigningKey=new SymmetricSecurityKey(key),
                ValidateIssuerSigningKey=true,
                ValidateIssuer=false,
                ValidateAudience=false,
            }, out SecurityToken validatedToken);
            return (JwtSecurityToken)validatedToken;
        }
    }
}
