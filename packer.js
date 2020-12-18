

let bgfv = 8.79 // 1
let swbi = 17.90 // 1
let vsto  = 20.79 // 2
let spwh = 12.5 // 2
let oln = 25 // 1



let values = [bgfv, swbi, vsto, spwh, oln]

let sum = 0
for(let t = 0;t<values.length;t++){
    sum+=values[t]
}
console.log(sum)
let total = 118

let remainder = 118.35-sum

let result = []


for(let t = 0; t< 1000;t++){
    let lump = 118.35-sum
    let temparr = []
    for(let k = 0; lump>0; k++){
        let index = Math.floor(Math.random()*5)
        if(lump-values[index] >= 0){
            lump-= values[index]
            temparr.push(values[index])
            if(lump<remainder){
                remainder = lump
            }
        }
        if(k>1000){
            break
        }
    }
    
    temparr.unshift([lump])
    result.push(temparr)
}
console.log(result)