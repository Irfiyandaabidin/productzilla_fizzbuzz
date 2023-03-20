// Buat loop sampai 1000
// Jika ketemu angka habis dibagi 3 outputkan => Fizz
// Jika ketemu angka habis dibagi 5 outputkan => Buzz
// Jika ketemu angka habis dibagi 3 dan 5 outputkan => Fizzbuzz


for (let i = 1; i <= 10000; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log('Fizzbuzz')
    } else if (i % 3 == 0){
        console.log('Fizz')
    } else if (i % 5 == 0){
        console.log('Buzz')
    } else {
        console.log(i)
    }
}