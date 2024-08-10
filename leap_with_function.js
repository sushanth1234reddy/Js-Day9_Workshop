function leap(year){
    if (year>=500 && year<=2024) {
            if(year%4==0 || year%400==0){
                console.log(`${year} is a leap year`);
            }
            else{
                console.log(`${year} not a leap year`);
            }

        }
        else{
            console.log("Enter year ranging from 500 to 2024");
        }
}

leap(1900);