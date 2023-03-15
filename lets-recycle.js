function recycle(array) {
    let result = [];
    let materials = ["paper", "glass", "organic", "plastic"];
        for (let n = 0; n < materials.length; n++) {
            let subResult = [];
            for (let i = 0; i < array.length; i++) {
                if (materials[n] === array[i].material || materials[n] === array[i].secondMaterial) {
                    subResult.push(array[i].type);
                }
            }
            result.push(subResult);
        }
    return result;    
}

function recycle2(array) {
    let materials = ["paper", "glass", "organic", "plastic"];
    return materials.map(el => array.filter(obj => obj.material == el || obj.secondMaterial == el).map(el => el.type));    
}

let input = [
    {type: "rotten apples", material: "organic"},
    {type: "out of date yogurt", material: "organic", secondMaterial: "plastic"},
    {type: "wine bottle", material: "glass", secondMaterial: "paper"},
    {type: "amazon box", material: "paper"},
    {type: "beer bottle", material: "glass", secondMaterial: "paper"}
]
  
console.log(recycle(input));
console.log(recycle2(input));
/*
  output = [
    ["wine bottle", "amazon box", "beer bottle"],   //glass
    ["wine bottle", "beer bottle"],                 //paper
    ["rotten apples", "out of date yogurt"],        //organic
    ["out of date yogurt"]                          //plastic
  ]
*/