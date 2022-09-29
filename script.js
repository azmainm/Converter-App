/*Kg converter*/
document.getElementById('kgoutput').style.visibility='hidden';
document.getElementById('kgInput').addEventListener('input', 
    function(e){
        if(e.target.value==""){
            document.getElementById('kgoutput').style.visibility='hidden';
        }
        else{
        document.getElementById('kgoutput').style.visibility='visible';
        let kg = e.target.value;
        document.getElementById('gramsOutput').innerHTML = kg*1000;
        document.getElementById('lbsOutput').innerHTML = kg*2.20462;
        document.getElementById('ozOutput').innerHTML = kg*35.274;
        }
    }
);
/*lbs converter*/
document.getElementById('lbsoutput').style.visibility='hidden';
document.getElementById('lbsInput').addEventListener('input', 
    function(e){
        if(e.target.value==""){
            document.getElementById('lbsoutput').style.visibility='hidden';
        }
        else{
        document.getElementById('lbsoutput').style.visibility='visible';
        let lbs = e.target.value;
        document.getElementById('gramOutput').innerHTML = lbs*453.592;
        document.getElementById('kgOutput').innerHTML = lbs*0.453592;
        document.getElementById('ounOutput').innerHTML = lbs*16;
        }
    }
);
/*metre converter*/
document.getElementById('moutput').style.visibility='hidden';
document.getElementById('mInput').addEventListener('input', 
    function(e){
        if(e.target.value==""){
            document.getElementById('moutput').style.visibility='hidden';
        }
        else{
        document.getElementById('moutput').style.visibility='visible';
        let m = e.target.value;
        document.getElementById('cmOutput').innerHTML = m*100;
        document.getElementById('iOutput').innerHTML = m*39.3701;
        document.getElementById('mmOutput').innerHTML = m*1000;
        }
    }
);
/*inch converter*/
document.getElementById('inoutput').style.visibility='hidden';
document.getElementById('inInput').addEventListener('input', 
    function(e){
        if(e.target.value==""){
            document.getElementById('inoutput').style.visibility='hidden';
        }
        else{
        document.getElementById('inoutput').style.visibility='visible';
        let i = e.target.value;
        document.getElementById('ftOutput').innerHTML = i*0.0833333;
        document.getElementById('meOutput').innerHTML = i*0.0254;
        document.getElementById('cenOutput').innerHTML = i*2.54;
        }
    }
);
/*Steps converter*/
document.getElementById('soutput').style.visibility='hidden';
document.getElementById('sInput').addEventListener('input', 
    function(e){
        if(e.target.value==""){
            document.getElementById('soutput').style.visibility='hidden';
        }
        else{
        document.getElementById('soutput').style.visibility='visible';
        let i = e.target.value;
        document.getElementById('kmOutput').innerHTML = i*0.0007623;
        document.getElementById('metOutput').innerHTML = i*0.762;
        }
    }
);