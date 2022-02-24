const calculator = () => {
    const calcBlock = document.querySelector('#calc')
    const calcType = document.querySelector('#calc-type')
    const calcTypeMaterial = document.querySelector('#calc-type-material')
    const calcSquare = document.querySelector('#calc-input')
    const calcTotal = document.querySelector('#calc-total')

    const countCalc = () => {
        let totalValue = 0

        const calcTypeValue = +calcType.options[calcType.selectedIndex].value
        const calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value
        const calcSquareValue = +calcSquare.value

        totalValue = calcSquareValue * calcTypeValue * calcTypeMaterialValue
        calcTotal.placeholder = totalValue + ' ' + 'Руб'
    }
    try{
        calcBlock.addEventListener('input', (e) => {
            if (e.target === calcType || e.target === calcSquare ||
                e.target === calcTypeMaterial) {
                    countCalc()
                }
        })
    } catch (error) {
        
    }
}

export default calculator