const reducer = (state, action) => {
    
    const { currentNum } = state;

    try{
        switch(action.type)
        {
            case 'INSERT_OPERATOR': {
                if(currentNum === "0"){
                    return {...state}
                }

                if(action.payload === 'x'){
                    action.payload = '*'
                }

                if(action.payload === '÷'){
                    action.payload = '/'
                }

                if(currentNum[currentNum.length - 1] === action.payload){
                    return {...state}
                }

                let text = currentNum + action.payload
                let sliced = text.slice(-3)
                
                let regex = /[-+*]/gi
                let matchRegex = sliced.match(regex)
                
                if(matchRegex !== null && matchRegex.length >= 3){
                    return {...state, currentNum: currentNum.slice(0, -2) + action.payload}
                }

                return {...state, currentNum: currentNum + action.payload}
            }

            case 'INSERT_NUMBER': {
                if (action.payload === "0" && currentNum === "") {
                    return { ...state, operator: "", currentNum: "0" };
                } else if (action.payload === "0" && currentNum === "0") {
                    return { ...state, operator: "",};
                } else if (action.payload !== "0" && currentNum === "0") {
                    return { ...state, operator: "", currentNum: action.payload };
                } else {
                    return { ...state, operator: "", currentNum: currentNum + action.payload };
                }
            }

            case 'PERFORM_EVALUATE': {
                const total = eval(currentNum);
                return {...state, currentNum: total, calculated: total}
            }

            case 'INSERT_PERIOD' : {
                const str = currentNum;
                const split = str.split(new RegExp("[-+*/]+"));

                if (!split[split.length-1].includes(".")) 
                    return { ...state, currentNum: currentNum + "." }

                return { ...state };
            }

            case 'PERFORM_CLEAR': {
                return {...state, currentNum: "0", calculated: "0"}
            }

            case 'PERFORM_BACKSPACE': {
                return (currentNum.length !== 1) 
                    ? {...state, currentNum: currentNum.slice(0, -1)}
                    : {...state, currentNum: "0"}
            }
            default:
                return
        }
    }
    catch(error){
        return console.log(error)
    }
}

export default reducer