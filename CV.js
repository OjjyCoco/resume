const rocket = document.getElementById("fusée");
const rocketlaunchbtn = document.getElementById("rocketlaunchbtn");
const liste_titre_categ = document.querySelectorAll("#btn_choices a");
const main = document.getElementById("main")
const liste_categ = document.querySelectorAll(".categ");
const photo = document.getElementById("photo_div");
const container = document.getElementById("container");
const croix = document.getElementById("cross");
const btn_choices_div = document.getElementById("btn_choices");
const list_icon = document.getElementById("list_icon_btn");
const backgnd_photo = document.getElementById("fond");
const lien_portefolio = document.getElementById("lien_portefolio");
const txt_presentation = document.querySelectorAll("#présentation p");
const presentation = document.getElementById("présentation");
const fleche_pr_cacher = document.querySelectorAll(".fleche_pr_cacher");
const h1 = document.querySelector("#présentation h1");
const sur_mon_cv = document.querySelector("#présentation h3");
const bodyy = document.querySelector("body");
const outer_loader = document.getElementById("outer_loading");
let largeur_fenêtre = window.innerWidth;
let hauteur_fenêtre = window.innerHeight;


if(largeur_fenêtre > 900){
    apparition_text()
    rocket_btn()
    afficher_categ()
    // changer_photo()
    afficher_sidebar_ou_pas()
    loader()
}
else if(largeur_fenêtre < 900){
    afficher_sidebar_ou_pas_petite_reso()
    apparition_text_petite_reso()
    afficher_categ_petite_reso()
    loader()
}


/* Normal screen */

function loader(){

    window.addEventListener("load", function(){
        outer_loader.style.display = "none";
    });

}

function apparition_text(){

    window.addEventListener("mouseover", function(){
        h1.style.animation = "letter 1s ease-in-out forwards";


        setTimeout(function(){
            for(texte of txt_presentation){
                texte.style.animation = "opa 7s ease forwards";
            };
            h1.style.background = "transparent";
        }, 500);

        sur_mon_cv.style.transform = "translateY(0%)";

    });

}



function rocket_btn(){

    rocketlaunchbtn.addEventListener("click", function(e){
        rocket.style.visibility = "visible";
        rocketlaunchbtn.innerHTML = "<i class='fas fa-exclamation-triangle'></i> LIFT OFF ! <i class='fas fa-exclamation-triangle'></i>";
        e.target.style.transformOrigin = "center";
        e.target.style.color = "white";
        e.target.style.backgroundImage = "-webkit-linear-gradient(right, #0f2027,#203a43, #2c5364)";

        setTimeout(function(){
            e.target.style.transform = "translateX(80%) rotate(90deg)";
        }, 1250)

        setTimeout(function(){
            e.target.style.top = "150%";
        }, 3000)

        rocket.style.top = "-50%";

        setTimeout(function(){
            rocket.style.display = "none";
            e.target.style.display = "none";
        }, 3500)
    });

}

function afficher_categ(){
    for(let i = 0; i < 4; i++){
        ((i) => {
            liste_titre_categ[i].addEventListener("click", function(){
                for(var categ of liste_categ){
                    categ.style.right = "-100%";
                };
                liste_categ[i].style.right = "0%";
            })
        })(i)
    }

    for(var fleche of fleche_pr_cacher){
        fleche.addEventListener("click", (e) => {
            e.currentTarget.parentElement.style.right = "-100%";
        });
    };
}

// function changer_photo(){

//     var liste_photo = [
//     "url('test.png')",
//     "url('test2.png')",
//     ];

//     croix.addEventListener("click", function(){
//         photo.style.backgroundImage = liste_photo[0];
//         backgnd_photo.style.backgroundColor = "rgb(157,41,42)"
//     });

//     for(var titre of liste_titre_categ){
//         titre.addEventListener("click", function(){
//             photo.style.backgroundImage = liste_photo[1];
//             backgnd_photo.style.backgroundColor = "rgb(141,94,114)"
//         });
//     };
// }

function afficher_sidebar_ou_pas(){
    container.style.transform = "translateX(0) scale(1)"

    rocketlaunchbtn.addEventListener("click", function(){
        container.style.transform = "translateX(-180px) scale(0.9)";
        list_icon.style.display = "block";
    });

    croix.addEventListener("click", function(){
        container.style.transform = "translateX(0) scale(1)";
    });

    list_icon.addEventListener("click", function(){
        if(container.style.transform == "translateX(-180px) scale(0.9)"){
            container.style.transform = "translateX(0) scale(1)"
        }
        else{
            container.style.transform = "translateX(-180px) scale(0.9)"
        }
    });
}

/* low resolution */

function loader(){

    outer_loader.style.display = "none";

}

function afficher_sidebar_ou_pas_petite_reso(){

    rocketlaunchbtn.addEventListener("click", function(){
        let i = 3;
        var take_off = setInterval(function(){
            rocketlaunchbtn.innerHTML = i;
            if(i <= 0){
                rocketlaunchbtn.innerHTML = "<i class='fas fa-exclamation-triangle'></i> DÉCOLLAGE <i class='fas fa-exclamation-triangle'></i>";
                rocket.style.visibility = "visible";
                rocket.style.top = "-60%";
            }
            i--;
        }, 860)
        setTimeout(function(){
            clearInterval(take_off);
            rocketlaunchbtn.style.display = "none";
            container.style.height = "1500px";
            btn_choices_div.style.display = "flex";
            btn_choices_div.style.zIndex = "3";
        }, 7000)
    });
}

function apparition_text_petite_reso(){
    window.addEventListener("DOMContentLoaded", function(){
        setTimeout(function(){
            h1.style.animation = "letter 1s ease-in-out forwards";
            for(texte of txt_presentation){
                texte.style.animation = "opa 7s ease forwards";
            };
            h1.style.background = "transparent";
        }, 1000);
        sur_mon_cv.style.transform = "translateY(0%)";

    });
}

/* On garde la version sale car on ajoute un overflow différent pour certaines catégories*/
function afficher_categ_petite_reso(){

    liste_titre_categ[0].addEventListener("click", function(e){
        btn_choices_div.style.display = "none";
        for(var categ of liste_categ){
            categ.style.right = "-100%";
        };
        liste_categ[0].style.right = "0%";
    });

    liste_titre_categ[1].addEventListener("click", function(e){
        bodyy.style.overflow = "hidden";
        btn_choices_div.style.display = "none";
        for(var categ of liste_categ){
            categ.style.right = "-100%";
        };
        liste_categ[1].style.right = "0%";
    });

    liste_titre_categ[2].addEventListener("click", function(e){
        btn_choices_div.style.display = "none";
        for(var categ of liste_categ){
            categ.style.right = "-100%";
        };
        liste_categ[2].style.right = "0%";
    });

    liste_titre_categ[3].addEventListener("click", function(e){
        bodyy.style.overflow = "hidden";
        btn_choices_div.style.display = "none";
        for(var categ of liste_categ){
            categ.style.right = "-100%";
        };
        liste_categ[3].style.right = "0%";
    });

    for(var fleche of fleche_pr_cacher){
        fleche.addEventListener("click", function(e){
            bodyy.style.overflow = "scroll";
            btn_choices_div.style.display = "flex";
            e.currentTarget.parentElement.style.right = "-100%";
        });
    };
}
