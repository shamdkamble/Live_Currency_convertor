function convert(){
    var frm,to,amt;
    frm= document.getElementById('from');
    to = document.getElementById('to');
    amt = document.getElementById('amt');
    var curlogo = document.getElementById('symbol');
    
    var z = 'https://v6.exchangerate-api.com/v6/eab7e00d7c6c00617e242dee/latest/'+frm.value;
    fetch(z).then(function(res){
        return res.json();
    }).then(function(data){
        // document.write(data,"<br>");            
        // document.write(data['result'],"<br>");
        // document.write(data['conversion_rates'],"<br>");
        var cr = data['conversion_rates'];
        var cf = cr[to.value];
        var fam = cf * amt.value;
        var currsymbol =to.value;
        // document.write("The Conversion is : ", fam);
        document.getElementById('result').innerHTML= fam;
        curlogo.innerHTML = currsymbol;

    
    
    })
}
