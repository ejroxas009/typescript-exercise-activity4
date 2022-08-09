export const moveZerosToEnd = (data:(string | number | boolean)[])=>{
    let counter = 0
    let filteredData= data.filter((data:(string | number | boolean))=>{
        if(data !== 0){
            counter++
            return data
            
        }

    })
    
    const numberOfZeros: number = data.length - counter

    for(let i = 0; i<numberOfZeros; i++){

        filteredData.push(0)
    }

    console.log("Input data: " + data)
    console.log("Output Data:" + filteredData)

}

moveZerosToEnd([1,2,4,0,0,0,"abc", true])