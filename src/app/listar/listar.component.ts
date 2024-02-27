import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})



export class ListarComponent implements OnInit {
  userList: any[] = []; 
  usuariosSelecionados: any[] = [];
  selectedUsers: any[] = [];
  showCadastro: boolean = false;
 
  constructor(
    private http: HttpClient,

  
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.setUserListStatusAtivo();
  }

  getAllUsers(): void {
    this.http.get<any[]>('http://localhost:8080/usuarios/getAll')
      .subscribe(
        (response) => {
          this.userList = response;
        },
        (error) => {
          console.error('Ocorreu um erro ao buscar os usuários:', error);
        }
      );
  }

  


 
  selecionarUsuario(user: any) {
    const index = this.selectedUsers.indexOf(user);
    if (index === -1) {
      this.selectedUsers.push(user); 
    } else {
      this.selectedUsers.splice(index, 1);
    }
  }

  excluirUsuario() {
  
    for (const user of this.selectedUsers) {
 
      fetch(`http://localhost:8080/usuarios/${user.codigoExterno}`, {
        method: 'DELETE'
      })
      .then(response => {
        if (response.ok) {
   
          const index = this.userList.indexOf(user);
          if (index !== -1) {
            this.userList.splice(index, 1);
          }
        } else {
          
          console.error('Erro ao excluir usuário:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Erro ao excluir usuário:', error);
      });
    }
 
    this.selectedUsers = [];
  }
  
  setUserListStatusAtivo(): void {
   
    this.userList.forEach(user => {
      user.status = 'ativo'; 
    });
  }


  
}
