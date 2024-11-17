import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { CnpjService } from './cnpj.service';

@Component({
  selector: 'app-cnpj',
  templateUrl: './cnpj.component.html',
  styleUrls: ['./cnpj.component.css']
})
export class CnpjComponent implements OnInit {

  @Input() titleHome = 'Consultando CNPJ';
  buscacnpj: string = '';
  buscar: boolean = false;
  razao_social: string | null = null;
  nome_fantasia: string | null = null;
  situacao_cadastral: string | null = null;
  descricao_situacao_cadastral: string | null = null;
  data_inicio_atividade: string | null = null;
  cnae_fiscal: string | null = null;
  codigo_municipio: string | null = null;
  municipio: string | null = null;
  uf: string | null = null;
  cep: string | null = null;
  bairro: string | null = null;
  logradouro: string | null = null;
  
  constructor(
    private cnpjService: CnpjService,
    private messageService: MessageService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Buscando CNPJ');
  }

  buscarCNPJ(buscacnpj: any, form: any) {
    if (buscacnpj !== null && buscacnpj !== '' && buscacnpj >= 14) {
      this.cnpjService.consultaCNPJ(buscacnpj).subscribe({
        next: (dados: any) => {
          this.buscar = true;
          setTimeout(() => {
            this.populaCNPJForm(dados, form);
            console.log('cheguei aqui');
          }, 100);
        },
        error: (e: any) => {
          this.resetaCNPJForm(form);
          this.buscar = false;
          this.messageService.add({
            severity: 'error',
            summary: 'Atenção',
            detail: 'Erro ao buscar CNPJ!'
          });
        }
      })
    }
  }

  populaCNPJForm(dados: any, formulario: any) {

    this.razao_social = dados.razao_social || null;
    this.nome_fantasia = dados.nome_fantasia || null;
    this.situacao_cadastral = dados.situacao_cadastral || null;
    this.descricao_situacao_cadastral = dados.descricao_situacao_cadastral || null;
    this.data_inicio_atividade = dados.data_inicio_atividade || null;
    this.cnae_fiscal = dados.cnae_fiscal || null;
    this.codigo_municipio = dados.codigo_municipio || null;
    this.municipio = dados.municipio || null;
    this.uf = dados.uf || null;
    this.cep = dados.cep || null;
    this.bairro = dados.bairro || null;
    this.logradouro = dados.logradouro || null;

    formulario.form.patchValue({

      razao_social: dados.razao_social,
      nome_fantasia: dados.nome_fantasia,
      situacao_cadastral: dados.situacao_cadastral,
      descricao_situacao_cadastral: dados.descricao_situacao_cadastral,
      data_inicio_atividade: dados.data_inicio_atividade,
      cnae_fiscal: dados.cnae_fiscal,
      codigo_municipio: dados.codigo_municipio,
      municipio: dados.municipio,
      uf: dados.uf,
      cep: dados.cep,
      bairro: dados.bairro,
      logradouro: dados.logradouro
    })
  }

  resetaCNPJForm(formulario: any) {
    formulario.form.patchValue({
      
      razao_social: null,
      nome_fantasia: null,
      situacao_cadastral: null,
      descricao_situacao_cadastral: null,
      data_inicio_atividade: null,
      cnae_fiscal: null,
      codigo_municipio: null,
      municipio: null,
      uf: null,
      cep: null,
      bairro: null,
      logradouro: null
      
    })
    this.buscar = false;
  }
}