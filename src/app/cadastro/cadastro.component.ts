import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  userForm: FormGroup;

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      codigoExterno: [''],
      nome: [''],
      email: [''],
      cpf: [''],
      sexo: [''],
      estadoCivil: [''],
      conjuge: [''],
      documentoIdentificacao: [''], 
      observacao: [''], 
      condicaoPessoal: [''], 
      telefone: [''], 
      telefoneCelular: [''], 
      validadeFicha: [''], 
      dataNascimento: [''], 
      token: [''], 
      politicamenteExposta: [''], 
      assinaturaDigital: [''] 
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;

      this.httpClient.post<any>('http://localhost:8080/usuarios', formData).subscribe(
        (response) => {
          console.log('Sucesso!', response);
        },
        (error) => {
          console.error('Erro!', error);
        }
      );
    } else {
      console.log('Formulário inválido');
    }
  }
}
