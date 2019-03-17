var vierkant = document.querySelectorAll(".vierkant");
var titel = document.querySelector("h1 span");
var resultaat = document.querySelector("#resultaat");
var header = document.getElementsByTagName("h1")[0];
var reset = document.querySelector("#reset");
var makBtn = document.querySelector("#makBtn");
var moeBtn = document.querySelector("#moeBtn");
var aantVierk = 6;
var kleuren = genereerWillKleur(aantVierk);
var gekozenKleur = kieskleur();
//genereert string van winnende kleur
titel.textContent = gekozenKleur;

		for(i=0; i < vierkant.length; i++){
			//voegt de eerte kleuren toe
			vierkant[i].style.background = kleuren[i];
			//zorgt voor interactie met de vlakken
			vierkant[i].addEventListener("click", function(){
				var gekozen = this.style.backgroundColor;
				if (gekozen === gekozenKleur){

				correcteKleur(gekozenKleur);
				resultaat.textContent = "Correct!!!";
				header.style.backgroundColor = gekozenKleur;

			}
			else {
				this.style.backgroundColor = "#232323";
				resultaat.textContent = "Probeer nog eens!";

			}
			})
		};
		//de makkelijkknop
		makBtn.addEventListener("click", function(){
			// eenmaal geklikt is geselecteerd
			makBtn.classList.add("selected");
			moeBtn.classList.remove("selected");
			aantVierk = 3;
            kleuren = genereerWillKleur(aantVierk);
            gekozenKleur = kieskleur();
            titel.textContent = gekozenKleur;
            resultaat.textContent = "";
            header.style.backgroundColor = "steelblue";
            for(var i = 0; i < vierkant.length; i++){
            	if (kleuren[i]){
            		vierkant[i].style.backgroundColor = kleuren[i];
            } 
            else{
            	vierkant[i].style.display = "none";
            }
		}
	});
		// de moeilijkknop
		moeBtn.addEventListener("click", function(){
			// eenmaal geklikt is selecteren
			moeBtn.classList.add("selected");
			makBtn.classList.remove("selected");
			aantVierk = 6;
            kleuren = genereerWillKleur(aantVierk);
            gekozenKleur = kieskleur();
            titel.textContent = gekozenKleur;
            resultaat.textContent = "";
            header.style.backgroundColor = "steelblue";
            for(var i = 0; i< vierkant.length; i++){
            	vierkant[i].style.backgroundColor = kleuren[i];
            	vierkant[i].style.display = "block";
            }
		});
		//de reset knop
		reset.addEventListener("click",function(){
			kleuren = genereerWillKleur(aantVierk);
			gekozenKleur = kieskleur();
			header.style.backgroundColor = "steelblue";
			titel.textContent = gekozenKleur;
			resultaat.textContent = "";
			for(i=0; i < vierkant.length; i++){
			//kleur
			vierkant[i].style.background = kleuren[i];
			
		}});
    //maakt alle vlakken de winnende kleur
	function correcteKleur(kleur){
	
		for(i = 0; i<vierkant.length;i++){
			vierkant[i].style.backgroundColor = kleur;
		}
	}
    //kiest een kleur uit
	function kieskleur(){
		var kleur = Math.floor(Math.random() * kleuren.length);
		return kleuren[kleur];
	}
    //pakt de kleuren van functie rgb en stopt ze in array
	function genereerWillKleur(num){
		var arr = [];

		for(var i = 0; i < num; i++){
			arr.push(rgb());
		}
		return arr;
	}
    //genereert de kleuren
	function rgb(){
		//creert een random nummer en .floor maakt er een heel getal van
		var r = Math.floor(Math.random() * 265);
		var g = Math.floor(Math.random() * 265);
		var b = Math.floor(Math.random() * 265);
		return "rgb(" + r +", "+g +", " + b +")";
	}