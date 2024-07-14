let smd = 0;
let cdis = 0;

for (let i = 1; i <= 20; i++){
    if (i % 2 === 0) {
        console.log(i);
    }else {
        smd += i;
        cdis++;        
    }
}
if (cdis > 0) {
    const md = smd / cdis;
    console.log(`La media dei numeri dispari è: ${md}`);

}