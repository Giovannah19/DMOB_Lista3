/*EXERCÍCIO 01 - ALTERAR A COR DE FUNDO CLICANDO NOS BOTÕES */
/* cada função 'seta' no corpo do documento a respectiva cor ao clicar nos botões*/
function bg_color_red(){
	document.body.style.backgroundColor = "red";
	}
function bg_color_green(){
	document.body.style.backgroundColor = "green";
}
function bg_color_blue(){
	document.body.style.backgroundColor = "blue";
}
function bg_color_yellow(){
	document.body.style.backgroundColor = "yellow";
}

/*EXERCÍCIO 02 - ALTERAR A COR DE FUNDO CLICANDO NOS LINKS */
/* cada função 'seta' no corpo do documento a respectiva cor ao colcoar o mouse sobre os links*/
function bg_color_black(){
	document.body.style.backgroundColor = "black";
}
function bg_color_lightGreen (){
	document.body.style.backgroundColor = "lightGreen";
}

function bg_color_fuchsia (){
	document.body.style.backgroundColor = "fuchsia";
}
function bg_color_cyan(){
	document.body.style.backgroundColor = "cyan";
}

/*EXERCÍCIO 03 - SELECIONAR A COR E  ALTERAR O BACKGROUD DE ACORDO COM A COR SELECIONADA */
/* a função altera a cor do documento de acordo com o valor recebido no elemento de id "cores" (no caso a tag 'Select')*/
function alterar_bg(){
	var x = document.getElementById("cores").value;
	document.body.style.backgroundColor = x;
}

/*EXERCÍCIO 04 - OCULTAR / MOSTRAR UM ELEMENTO (alterar sua visibilidade)*/
/* altera a visibilidade do elemento de id "paragraph" entre hidden (oculto) e visible (visível)*/
function on_off(){
	var x = document.getElementById("paragraph");
		if (x.style.visibility==="hidden"){
			x.style.visibility = "visible";
		}
		else{
			x.style.visibility = "hidden";
		}
}

/*EXERCÍCIO 05 - VALIDAÇÕES DE INPUTS COM JAVASCRIPT*/
/*valida as entradas do usuário de acordo com as regras estabelecidas: senhas entre 6 e 10 caracteres, nenhum campo pode estar vazio e 
a senha precisa ser igual a sua confirmação */
function salvar(){
	nome = document.getElementById("user").value;
	senha = document.getElementById("password").value;
	conf_senha = document.getElementById("password_again").value;

	if (nome == "") {
			alert( "Você precisa digitar um nome de usuário!" );
			return false;
		}
	if (senha == "" || conf_senha == "") {
			alert( "Você precisa digitar uma senha e confirmá-la" );
			return false;
		}
	if (senha != conf_senha) {
			alert( "As senhas não coincidem!" );
			return false;
		}
	if ((senha.length < 6 || senha.length > 10) || (conf_senha.length < 6 || conf_senha.length > 10)) {
			alert( "As senhas precisam ter entre 6 e 10 caracteres!" );
			return false;
		}	
		return true
	}

/*EXERCÍCIO 06 - RECEBE UM CONJUNTO DE STRINGS E VERIFICA SE ELAS SÃO PALÍNDROMAS*/
function inverter() {
/* recebe e armazena o valor do que foi inserido pelo usuário*/
	var nome_digitado = document.getElementById("name").value;

/*transforma todas as letras em minusculas e remove caracteres e espaços*/
	nome_digitado = nome_digitado.toLowerCase().replace(/\s/g, "");

/*cria uma matriz de substrings divididas por "," e inverte a ordem da palavra*/
	texto = nome_digitado.split("").reverse().toString();

/*realiza a contagem de caracteres da palavra invertida e remove espaços e caracteres*/
	for (var i = 0; i < ((texto.length) - 1); i++) {
		texto = texto.replace(",", "");
	};
	if (nome_digitado == texto) {
		document.getElementById("paragrafo").innerHTML = "É um Palíndromo"
   
	} else {
		document.getElementById("paragrafo").innerHTML = "Não é um Palíndromo"
		}
}

/*EXERCÍCIO 07 - RECEBE NOMES DIGITADOS E INVERTE A ORDEM DELES NOS INPUTS*/
function inverter_nomes() {

/*cria  variáveis para receber o valor de cada nome digitado*/
    var nome1 = document.getElementById('nome1').value;
    var nome2 = document.getElementById('nome2').value;
    var nome3 = document.getElementById('nome3').value;
    var nome4 = document.getElementById('nome4').value;
    var nome5 = document.getElementById('nome5').value;

 /*cria um array que recebe esses valores, insere os dados no array (método push) e os inverte com o uso do "reverse*/
    var nomes = [];
    nomes.push(nome1, nome2, nome3, nome4, nome5); 
    nomes.reverse(); 

 /*inclui os valores recebidos novamente aos inputs, agora invertidos*/
    document.getElementById('nome1').value = nomes[0];
    document.getElementById('nome2').value = nomes[1];
    document.getElementById('nome3').value = nomes[2];
    document.getElementById('nome4').value = nomes[3];
    document.getElementById('nome5').value = nomes[4];

}