using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_SQLServer.Models
{

    public enum Permissao
    {
        Administrador = 'A',
        Basico = 'B'
    }

    public class User
    {
        [Key]
        public int UserId { get; private set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Nome { get; private set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Email { get; private set; }
        [Required]
        [Column(TypeName = "varchar(1)")]
        //[EnumDataType(typeof(Permissao))]
        public string Permissao { get; private set; }
        [Required]
        [Column(TypeName = "nvarchar(8)")]
        public string Senha { get; private set; }
    }
}
