export const getWinner = (arr, icon) => {
    for(let i = 0; i < arr.length; i++){
        const row = [], col = [], d1 = [], d2 = [];
        arr.map((_,n) => {
            row.push(arr[i][n])
            col.push(arr[n][i])
            d1.push(arr[n][n])
            d2.push(arr[n][arr.length - (n + 1)])
        })
        if (
            row.every(item => item === icon) || 
            col.every(item => item === icon) || 
            d1.every(item => item === icon) || 
            d2.every(item => item === icon)
        )   
        return "hay un ganador"
    }
    if (arr.flat().every(item => item !== "")) return "Empate"
}