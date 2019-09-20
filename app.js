window.onload = function () {

  let firstValue
  let selectedOperator
  let secondValue
  let memoryNumber=0

  const display  = document.getElementById('display')
  const btnMC    = document.getElementById('btnMC')
  const btnMas   = document.getElementById('btnMas')
  const btnMenos = document.getElementById('btnMenos')
  const btnDiv   = document.getElementById('btnDiv')
  const btnSeven = document.getElementById('btnSeven')
  const btnEigth = document.getElementById('btnEigth')
  const btnNine  = document.getElementById('btnNine')
  const btnMult  = document.getElementById('btnMult')
  const btnFour  = document.getElementById('btnFour')
  const btnFive  = document.getElementById('btnFive')
  const btnSix   = document.getElementById('btnSix')
  const btnResta = document.getElementById('btnResta')
  const btnOne   = document.getElementById('btnOne')
  const btnTwo   = document.getElementById('btnTwo')
  const btnThree = document.getElementById('btnThree')
  const btnSuma  = document.getElementById('btnSuma')
  const btnC     = document.getElementById('btnC')
  const btn0     = document.getElementById('btn0')
  const btnPunto = document.getElementById('btnPunto')
  const btnEqual = document.getElementById('btnEqual')
  const btnMM    = document.getElementById('btnMM')

  const buttonOnClick = function(event){
    display.innerText += event.target.textContent
    //console.log(event.target.textContent)
  }

  const operatorFuntion = function(event){
    firstValue = parseFloat(display.innerText)
    selectedOperator = event.target.textContent
    display.innerText=""
    console.log("firstValue", firstValue)
    console.log("selectedOperator", selectedOperator)
  }

  btnMas.onclick = function(event){
    memoryNumber +=parseFloat(display.innerText)
    console.log("memoryNumber+",memoryNumber)
  }

  btnMenos.onclick = function(event){
    memoryNumber -=parseFloat(display.innerText)
    console.log("memoryNumber-",memoryNumber)
  }
  
  btnMM.onclick = function(event){
    display.innerText = memoryNumber
  }

  btnMC.onclick = function(event){
    memoryNumber = ""
    console.log("memoryNumberC",memoryNumber)
  }
  
  btnSeven.onclick = buttonOnClick
  btnEigth.onclick = buttonOnClick
  btnNine.onclick = buttonOnClick
  btnFour.onclick = buttonOnClick
  btnFive.onclick = buttonOnClick
  btnSix.onclick = buttonOnClick

  btnOne.onclick = buttonOnClick
  btnTwo.onclick = buttonOnClick
  btnThree.onclick = buttonOnClick

  btnC.onclick = function(){
    display.innerText = "";
    secondValue = 0
    firstValue = 0
  }

  btn0.onclick = buttonOnClick
  btnPunto.onclick = buttonOnClick

  btnMult.onclick = operatorFuntion
  btnDiv.onclick = operatorFuntion
  btnSuma.onclick = operatorFuntion
  btnResta.onclick = operatorFuntion

  btnEqual.onclick = function(){
    let result
    secondValue = parseFloat(display.innerText)
    console.log(firstValue, secondValue)
    switch (selectedOperator) {
      case '+':
        result = firstValue + secondValue
        break;
    case '-':
        result = firstValue - secondValue
        break;
    case '*':
        result = firstValue * secondValue
        break;
    case '/':
        result = firstValue / secondValue
        break;
    default:
    }
    display.innerText = result
  }
}
