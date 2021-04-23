import React,{useState} from 'react';
import './App.css';

import Peca from './Peca/index';

var numbers = [ [1,2,3],
                [4,5,6],
                [7,8,0] 
              ];
var copiaNums = numbers;

var maxNumbers;
let list = [];

let randomNumber;
let tmp;

function App() {
  

  const [embaralharCliked, setEmbaralharCliked] = useState(false);
  const [checarCliked, setChecarCliked] = useState(false);
  const [resolverCliked, setResolverCliked] = useState(false);

  const [valor0, setValor0] = useState("parte-0");
  
  //const [parte , setParte ] = useState ([["parte-1","parte-2","parte-3"],["parte-4","parte-5","parte-6"],["parte-7","parte-8", "parte-0"]])
  const [parte1, setParte1 ]= useState( "parte-1" );
  const [parte2, setParte2 ]= useState( "parte-2" );
  const [parte3, setParte3 ]= useState( "parte-3" );
  const [parte4, setParte4 ]= useState( "parte-4" );
  const [parte5, setParte5 ]= useState( "parte-5" );
  const [parte6, setParte6 ]= useState( "parte-6" );
  const [parte7, setParte7 ]= useState( "parte-7" );
  const [parte8, setParte8 ]= useState( "parte-8" );
  const [parte0, setParte0 ]= useState( "parte-0" );

  function checarNumbers() {
    if(numbers[0][0] == 1 && numbers[0][1] == 2 && numbers[0][2] == 3 && numbers[1][0] == 4 && numbers[1][1] == 5 && numbers[1][2] == 6 && numbers[2][0] == 7 && numbers[2][1] == 8 && numbers[2][2] == 0){
      console.log("tudo certo meu patrão");
      window.alert("tudo certo meu patrão");
    }else{
      console.log("Algo de errado não está certo");
      window.alert("Algo de errado não está certo");
    }
  }

  function resetTudo(){
    numbers = copiaNums;
    list = [];

    setValor0("parte-0");
  }

  function geraListaValoresAleatorios() {
    list = [];
    maxNumbers = 8;
    for (let i = 0; i < maxNumbers; i++) {
      list[i] = i + 1;
    }
    console.log(list); // [1, 2, 3, 4, 5, 6, 7, 8]

    for (let i = list.length; i;) {
      randomNumber = Math.random() * i-- | 0;
      tmp = list[randomNumber];
      // troca o número aleatório pelo atual
      list[randomNumber] = list[i];
      // troca o atual pelo aleatório
      list[i] = tmp;
    } 
    list.push(0);
    console.log(list); // 2, 3, 7, 1, 6, 8, 4, 5
  }

  function IntToString(valorMatriz){
    if(valorMatriz === 1){
      return("parte-1");
    }
    if(valorMatriz === 2){
      return("parte-2");
    }
    if(valorMatriz === 3){
      return("parte-3");
    }
    if(valorMatriz === 4){
      return("parte-4");
    }
    if(valorMatriz === 5){
      return("parte-5");
    }
    if(valorMatriz === 6){
      return("parte-6");
    }
    if(valorMatriz === 7){
      return("parte-7");
    }
    if(valorMatriz === 8){
      return("parte-8");
    }
  }

  
  function randomMatriz() {
    var k = 0;
    for(var i = 0; i<3;i++){
      for(var j = 0; j<3; j++){
        numbers[i][j] = list[k];
        k = k+1;
      }
    }
    console.log(numbers);
  }


  function randomCards () {
    resetTudo();
    geraListaValoresAleatorios();
    randomMatriz();

    var k = 1;
    for(var i = 0; i<3; i++){
      for (var j = 0; j<3; j++){
        if ( IntToString(numbers[i][j]) === `parte-1`) {
          setParte1(`parte-${k}`);
          k = k+1;
        }
        if ( IntToString(numbers[i][j]) === `parte-2`) {
          setParte2(`parte-${k}`);
          k = k+1;
        }
        if ( IntToString(numbers[i][j]) === `parte-3`) {
          setParte3(`parte-${k}`);
          k = k+1;
        }
        if ( IntToString(numbers[i][j]) === `parte-4`) {
          setParte4(`parte-${k}`);
          k = k+1;
        }
        if ( IntToString(numbers[i][j]) === `parte-5`) {
          setParte5(`parte-${k}`);
          k = k+1;
        }
        if ( IntToString(numbers[i][j]) === `parte-6`) {
          setParte6(`parte-${k}`);
          k = k+1;
        }
        if ( IntToString(numbers[i][j]) === `parte-7`) {
          setParte7(`parte-${k}`);
          k = k+1;
        }
        if ( IntToString(numbers[i][j]) === `parte-8`) {
          setParte8(`parte-${k}`);
          k = k+1;
        }
      }
    }
    
  }


  function busca (n) {
    var i, j; 
    for(i=0;i<3;i++){
      for(j=0;j<3;j++){
        if(numbers[i][j] == n){
          return [i,j];
        }
      }
    }
  }


  function testaEsquerda (valores){
    if( numbers[valores[0]][valores[1]-1] == 0){
      return true;
    }else {
      return false;
    }
  }

  function testaDireita(valores){
    if(numbers[valores[0]][valores[1]+1] == 0){
      return true;
    }else {
      return false;
    }
  }

  function testaAbaixo(valores){
    if(numbers[valores[0]+1][valores[1]] == 0){
      return true;
    }else {
      return false;
    }
  }

  function testaAcima(valores){
    if(numbers[valores[0]-1][valores[1]] == 0){
      return true;
    }else {
      return false;
    }
  }

  function trocaCards(valores){
    var auxParte;
    if(numbers[valores[0]][valores[1]] === 1) {
      auxParte = parte1;
      setParte1(valor0);
      setParte0(auxParte);
      setValor0(auxParte);
    }
    if(numbers[valores[0]][valores[1]] === 2) {
      auxParte = parte2;
      setParte2(valor0);
      setParte0(auxParte);
      setValor0(auxParte);
    }
    if(numbers[valores[0]][valores[1]] === 3) {
      auxParte = parte3;
      setParte3(valor0);
      setParte0(auxParte);
      setValor0(auxParte);
    }
    if(numbers[valores[0]][valores[1]] === 4) {
      auxParte = parte4;
      setParte4(valor0);
      setParte0(auxParte);
      setValor0(auxParte);
    }
    if(numbers[valores[0]][valores[1]] === 5) {
      auxParte = parte5;
      setParte5(valor0);
      setParte0(auxParte);
      setValor0(auxParte);
    }
    if(numbers[valores[0]][valores[1]] === 6) {
      auxParte = parte6;
      setParte6(valor0);
      console.log(parte6);
      setParte0(auxParte);
      setValor0(auxParte);
      console.log(parte0);
    }
    if(numbers[valores[0]][valores[1]] === 7) {
      auxParte = parte7;
      setParte7(valor0);
      setParte0(auxParte);
      setValor0(auxParte);
    }
    if(numbers[valores[0]][valores[1]] === 8) {
      auxParte = parte8;
      setParte8(valor0);
      setParte0(auxParte);
      setValor0(auxParte);
    }
  }

  function moverADireita(valores) {
    var aux = numbers[valores[0]][valores[1]];
    
    trocaCards(valores)

    numbers[valores[0]][valores[1]] = 0;
    numbers[valores[0]][valores[1]+1] = aux;
    console.log(numbers);
  }
  
  function moverAEsquerda(valores) {
    var aux = numbers[valores[0]][valores[1]];
    
    trocaCards(valores)

    numbers[valores[0]][valores[1]] = 0;
    numbers[valores[0]][valores[1]-1] = aux;
    console.log(numbers);
  }

  
  
  function moverParaBaixo(valores) {
    var aux = numbers[valores[0]][valores[1]];

    trocaCards(valores)

    numbers[valores[0]][valores[1]] = 0;
    numbers[valores[0]+1][valores[1]] = aux;
  }
  
  function moverParaCima(valores) {
    var aux = numbers[valores[0]][valores[1]];
    
    trocaCards(valores);

    numbers[valores[0]][valores[1]] = 0;
    numbers[valores[0]-1][valores[1]] = aux;
    console.log(numbers);

  }


  function testeClick (n) {
    var valores = busca(n);
    console.log(valores);
    
    if(valores[1] == 0){//se o valor passado estiver na primeira coluna irá
      var situacao = testaDireita(valores); //testar se o valor a direita dele é zero
      if(situacao){
        moverADireita(valores);
      }

      if(valores[0] == 0 || valores[0] == 1 ){ //se o valor estiver na primeira ou segunda linha irá
        var situacao = testaAbaixo(valores); // testar se o valor abaixo dele é zero
        if(situacao){
          moverParaBaixo(valores);
        }
      }

      if(valores[0] == 1 || valores[0] == 2 ){ //se o valor estiver segunda ou terceira linha irá
        var situacao = testaAcima(valores); // testar se o valor acima dele é zero
        if(situacao){
          moverParaCima(valores);
        }
      }

    }

    if(valores[1] == 1){//se o valor passado estiver na segunda coluna
      var situacao = testaDireita(valores); //testa se o valor zero está ou a esquerda
      if(situacao){
        moverADireita(valores);
      }

      var situacao = testaEsquerda(valores); // ou a direita do valor 
      if(situacao){
        moverAEsquerda(valores);
      }

      if(valores[0] == 0 ){ //se o valor passado estiver na primeira linha da segunda coluna
        var situacao = testaAbaixo(valores); // testa abaixo dela
        if(situacao){
          moverParaBaixo(valores);
        }
      }

      if(valores[0] == 1 ){ 
        var situacao = testaAbaixo(valores);
        if(situacao){
          moverParaBaixo(valores);
        }

        var situacao = testaAcima(valores);
        if(situacao){
          moverParaCima(valores);
        }
      }

      if(valores[0] == 2 ){
        var situacao = testaAcima(valores);
        if(situacao){
          moverParaCima(valores);
        }
      }
    }

    if(valores[1] == 2){//se o valor passado estiver na terceira coluna irá
      var situacao = testaEsquerda(valores); //testar se o valor a esquerda dele é zero
      if(situacao){
        moverAEsquerda(valores);
      }

      if(valores[0] == 0 || valores[0] == 1 ){ //se o valor estiver na primeira ou segunda linha irá
        var situacao = testaAbaixo(valores); // testar se o valor abaixo dele é zero
        if(situacao){
          moverParaBaixo(valores);
        }
      }

      if(valores[0] == 1 || valores[0] == 2 ){ //se o valor estiver segunda ou terceira linha irá
        var situacao = testaAcima(valores); // testar se o valor acima dele é zero
        if(situacao){
          moverParaCima(valores);
        }
      }
    }
    
  }

  return (
    <div id="App">
      <div className="sombra"></div> 
      <div className="card-numbers">
        <div className="grade">
          <div onClick={ () => testeClick(1)} className={parte1}><Peca number='1' /></div>
          <div onClick={ () => testeClick(2)} className={parte2}><Peca number='2' /></div>
          <div onClick={ () => testeClick(3)} className={parte3}><Peca number='3' /></div>
          <div onClick={ () => testeClick(4)} className={parte4}><Peca number='4' /></div>
          <div onClick={ () => testeClick(5)} className={parte5}><Peca number='5' /></div>
          <div onClick={ () => testeClick(6)} className={parte6}><Peca number='6' /></div>
          <div onClick={ () => testeClick(7)} className={parte7}><Peca number='7' /></div>
          <div onClick={ () => testeClick(8)} className={parte8}><Peca number='8' /></div>
          
        </div>
      </div>
      <div className="buttons">
        <div className="button-shadow" onMouseDown={()=> setEmbaralharCliked(true)} onMouseUp={()=> setEmbaralharCliked(false)}>
          <button className={embaralharCliked ? "button-click": null } onClick={() => randomCards()} >Embaralhar</button>
        </div>

        <div className="button-shadow" onMouseDown={()=> setChecarCliked(true)} onMouseUp={()=> setChecarCliked(false)}>
          <button className={checarCliked ? "button-click": null } onClick={() => checarNumbers()} >Checar</button>
        </div>

        <div className="button-shadow" onMouseDown={()=> setResolverCliked(true)} onMouseUp={()=> setResolverCliked(false)}>
          <button id="button-green" className={resolverCliked ? "button-click": null }>Resolver</button>
        </div>
      </div>
    </div>
  );
}

export default App;
