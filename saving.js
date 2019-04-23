function savings(){
    //[P(1+r/n)^(nt)] + [PMT × (((1 + r/n)^(nt) - 1) / (r/n))]
            //Principal
        var p = (parseFloat((document.getElementById("ID").value).replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,''), 10));
            //Monthly Payment
        var pmt = (parseFloat((document.getElementById("MD").value).replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,''), 10));
            //Number of Years the Account is open
        var t = (parseFloat((document.getElementById("years").value).replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,''), 10));
            //Interest Rate - changed to a decimal
        var r = (parseFloat((document.getElementById("IR").value).replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,''), 10)) / 100;
            //Compounded monthly (change to 365 for daily)
        const n = 12
            //Compound interest for principal
        var cipTotal = p * (1 +(r / n))**(n * t);
            //Future value of a series
        var fvsTotal = pmt * (((1 + (r/n))**(n * t) - 1) / (r / n));
            //TOTAL
        let finalTotal = cipTotal + fvsTotal;
        document.getElementById("total").innerHTML = "$" + finalTotal.toFixed(2);
        if NaN(finalTotal){
            alert("Please complete all forms correctly.")
        }
        }
