using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_SQLServer.Models
{
    public enum SimNao
    {
        Sim = 'S',
        Nao = 'N'
    }

    public class ToDoList
    {
        [Key]
        public int ToDoListId { get; private set; }
        [Required]
        [Column(TypeName ="nvarchar(100)")]
        public string Titulo { get; private set; }
        [Required]
        [Column(TypeName = "varchar(1)")]
        //[EnumDataType(typeof(SimNao))]
        public string Concluido { get; private set; }
        //public User User { get; private set; }
    }
}
