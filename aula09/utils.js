function Adulto(idade){
    if(idade >= 18){
        document.write(idade + ", Maior de Idade")
    }else{
        document.write(idade + ", Menor de Idade")
    }
}

function formataEmail(pnome, pdominio){
    pnome = window.prompt("Digite o Nome")
    pdominio = window.prompt("Digite o Dominio")
    email= pnome + "@" + pdominio
    document.write("Email: " + email)
}

function gerarUsername(pnome, pstringnumber){
    pnome = window.prompt("Digite o Nome")
    pstringnumber = window.prompt("Digite o número")
    var username = pnome + "_" + pstringnumber
    document.write("UserName: " + username)
}

function calcularIMC(ppeso, paltura){
    ppeso = window.prompt("Digite seu Peso")
    paltura = window.prompt("digite sua Altura")
    var imc = ppeso / (paltura * paltura)
    document.write("Imc=" + imc)
}

function calcularAreaTriangulo(pbase, paltura){
    pbase = window.prompt("Digite a base")
    paltura = window.prompt("Digite a altura")
    var area = (pbase * paltura) / 2
    document.write("Area = " + area)
}

function fahrenheitParaCelsius(pf){
    pf = window.prompt("digite a Temperatura para conversão")
    var c = (pf - 32) * 5/9
    document.writeln("Fahrenheit - " + pf)
    document.write("Celsius - " + c)
}

function calcularPerimetrodoRetangulo(pcomprimento, plargura){
    pcomprimento = window.prompt("Digite o Comprimento")
    plargura = window.prompt("Digite a Largura")
    var perimetro = 2 * (pcomprimento + plargura)
    document.write("Perímetro = " + perimetro)
}

function subtrair(pa, pb){
    pa = window.prompt("Digite o valor 1")
    pb = window.prompt("Digite o valor 2")
    var diferenca = pa - pb
    document.write("Diferença = " + diferenca)
}

function validaCPF(cpf) {
    var Soma = 0
    var Resto
  
    var strCPF = String(cpf).replace(/[^\d]/g, '')
    
    if (strCPF.length !== 11)
       return false
    
    if ([
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
      ].indexOf(strCPF) !== -1)
      return false
  
    for (i=1; i<=9; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  
    Resto = (Soma * 10) % 11
  
    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0
  
    if (Resto != parseInt(strCPF.substring(9, 10)) )
      return false
  
    Soma = 0
  
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)
  
    Resto = (Soma * 10) % 11
  
    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0
  
    if (Resto != parseInt(strCPF.substring(10, 11) ) )
      return false
  
    return true
  }