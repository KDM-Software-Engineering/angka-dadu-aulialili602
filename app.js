function main() {
  let hasilDadu = [1,5, 2, 6, 2, 3]
      
  let kemunculanGAnjil = 0
  let kemunculanGenap = 0
      
  for(let i =0; i<hasilDadu.length; i++) {
    if (hasilDadu[i] % 2 == 1) {
    kemunculanGAnjil++
    }
      
    else if (hasilDadu[i] % 2 == 0) {
    kemunculanGenap++
    }
}
        
    console.log(`Raka mendapatkan angka ganjil sebanyak ${kemunculanGAnjil} kali dan angka genap sebanyak ${kemunculanGenap} kali` );
        
}

main()

module.exports = main