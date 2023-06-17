function Projets()
        {
            //Makes the pop up
            var header = document.getElementById("header");
            header.className = "minvisible";
            var fieldset = document.getElementById("body");
            fieldset.className = "visible";

            var close = document.createElement("close");
            close.innerHTML = "X";
            close.className = "close";

            
            var Project_div = document.createElement("Project_div");
            Project_div.className = "box";
            Project_div.id = "Project_div";

            
            //Title for the first part
            var unit2 = document.createElement("unit2");
            unit2.innerText = "Unité 2: Algorithme";
            unit2.className = "Title";


            var top_div = document.createElement("top_div");
            top_div.className = "top_div";
            Project_div.append(top_div);
            top_div.append(unit2);
            top_div.append(close);

            
            //Seperates the button in groups of 4 
            var unit2_cotainer = document.createElement("unit2_cotainer");
            unit2_cotainer.className = "Project_container";

            //Creating the buttons

                //Unité 2
                var Calculatrice1 = document.createElement("Calculatrice1");
                Calculatrice1.innerHTML = "Calculatrice";
                Calculatrice1.className = "button";

                var Moyenne = document.createElement("Moyenne");
                Moyenne.innerHTML = "Moyenne";
                Moyenne.className = "button";

                var nature_du_produit = document.createElement("nature_du_produit");
                nature_du_produit.innerHTML = "Nature Du Produit";
                nature_du_produit.className = "button";

                var sqr = document.createElement("sqr");
                sqr.innerHTML = "Square Root";
                sqr.className = "button";

                var second_power_1_to_50 = document.createElement("second_power_1_to_50");
                second_power_1_to_50.innerHTML = "Second Power of 1 to 50";
                second_power_1_to_50.className = "button";

                var cubes_inferior_5000 = document.createElement("cubes_inferior_5000");
                cubes_inferior_5000.innerHTML = "Cubes Inferior to 5000";
                cubes_inferior_5000.className = "button";

                var triange_rectangle = document.createElement("triange_rectangle");
                triange_rectangle.innerHTML = "Triange Rectangle";
                triange_rectangle.className = "button";

            //Adding the buttons
            unit2_cotainer.append(Calculatrice1);
            unit2_cotainer.append(Moyenne);
            unit2_cotainer.append(nature_du_produit);
            unit2_cotainer.append(second_power_1_to_50);
            unit2_cotainer.append(sqr);
            unit2_cotainer.append(cubes_inferior_5000);
            unit2_cotainer.append(triange_rectangle);

            //Adding the functions to the button
                Calculatrice1.onclick = function Calculatrice1() 
                    {
                        var PN = 0, SN = 0, TN = 0, Opération = "", Réponse = "";
                        Réponse = String(prompt("Que veux-tu fair, une conversion ou une opération"));
                        
                        if (Réponse == "Une conversion") 
                            {
                                Réponse = prompt("Que voulez-vous convertir, une distance, la température ou une masse?");
                                
                                if (Réponse == "distance") 
                                    {
                                        PN = parseFloat(prompt("Entrer le nombre de pied que vous convertir en mètre."));
                                        TN = PN / 3.28084;
                                        alert(PN + "pied = " + TN + "m");
                                    }
                                else if (Réponse == "température") 
                                    {
                                        PN = parseFloat(prompt("Entrer le nombre en degrée farenheit que vous convertir en degrée celcius."));
                                        TN = (PN - 32) * 5 / 9;
                                        alert(PN + "°F = " + TN + "°C");
                                    }
                                else if (Réponse == "masse") 
                                    {
                                        PN = parseFloat(prompt("Entrer la masse en livre que vous convertir en kilogramme."));
                                        TN = PN / 2.205;
                                        alert(PN + "lbs = " + TN + "kg");
                                    }
                            }

                        if (Réponse == "Une opération" || Réponse == "opération" || Réponse == "Opération" || Réponse == "une opération") 
                            {
                                PN = parseFloat(prompt("Quel est le premier chiffre?"));
                                
                                SN = parseFloat(prompt("Quel est le deuxième chiffre?"));
                                
                                Opération = prompt("Quel est le signe de l'opération dont vous voulez effectuez?");

                                if (Opération == "+") 
                                    {
                                        TN = PN + SN;
                                        alert(PN + "+" + SN + "= " + TN);
                                    }

                                else if (Opération == "-") 
                                    {
                                        TN = PN - SN;
                                        alert(PN + "-" + SN + "= " + TN);
                                    }
                                else if (Opération == "*" || Opération == "x") 
                                    {
                                        TN = PN * SN;
                                        alert(PN + "*" + SN + "= " + TN);
                                    }
                                else if (Opération == "/") 
                                    {
                                        TN = PN / SN;
                                        alert(PN + "/" + SN + "= " + TN);
                                    }
                            }
                    }
            
                Moyenne.onclick = function Moyenne()
                    {
                        var PN = 0, SN = 0, TN = 0, Moyenne = 0;
                        PN = parseFloat(prompt("Quelle est le premier chiifre?"));
                        
                        SN = parseFloat(prompt("Quelle est le deuxième chiffre?"));
                        
                        TN = parseFloat(prompt("Quelle est le troisième chiffre?"));
                        
                        Moyenne = (PN + SN + TN) / 3;
                        alert("La moyenne est " + Moyenne);
                    }

                nature_du_produit.onclick = function nature_du_produit()
                    {
                        var PN = 0, SN = 0, a = 0, Produit = 0;
                        PN = parseFloat(prompt("Quelle est le premier chiifre?"));
                        
                        SN = parseFloat(prompt("Quelle est le deuxième chiffre?"));
                        
                        Produit = PN * SN;

                        if (Produit < 0) 
                            {
                                alert("Le produit des deux chiffres est négatif");
                            } 

                        else 
                            {
                                a = PN + SN;
                                alert("Le produit des deux chiffres est positif et leur somme est " + a);
                            }
                    }

                second_power_1_to_50.onclick = function second_power_1_to_50()
                    {
                        var A = 0, B = 0;
                        A = parseFloat(prompt("Entrer le nombre dont vous voulez avoir la racine carré"));
                        
                        B = Math.sqrt(A);

                        if (A > 0) 
                            {
                                alert("La racine carré de " + A + " est " + B);
                            } 
                        
                        else 
                            {
                                alert(A + " n'a pas de racine carré");
                            }
                    }

                sqr.onclick = function sqr()
                    {
                        var B = 0;
                        alert("Voici les carrés des nombres entre 1 et 50: ");

                        for (var i=0; i <= 50; i++) 
                            {
                                B = Math.pow(i, 2);
                                alert(i + "^2= " + B + ", ");
                            }
                    }

                cubes_inferior_5000.onclick = function cubes_inferior_5000()
                    {
                        var B = 0, i = 0;
                        alert("Voici tout les chiffres dont leur cube est inférieur à 5000: ");
                        
                        while (Math.pow(i, 3) < 5000) 
                            {
                                B = Math.pow(i, 3);
                                alert(i + "^3= " + B + ", ");
                                i = i + 1;
                            }
                    }

                triange_rectangle.onclick = function triange_rectangle()
                    {
                        var X1 = 0, Y1 = 0, X2 = 0, X3 = 0, Y2 = 0, Y3 = 0, A = 0, B = 0, C = 0;
                        alert("Ce code ci vous aidra à savoir si 3 points forment un triangle rectangle ");
                        
                        X1 = parseFloat(prompt("Quel est l'abscisse du point A"));
                        
                        Y1 = parseFloat(prompt("Quel est l'ordonnée du point A"));
                        
                        X2 = parseFloat(prompt("Quel est l'abscisse du point B"));
                        
                        Y2 = parseFloat(prompt("Quel est l'ordonnée du point B"));
                        
                        X3 = parseFloat(prompt("Quel est l'abscisse du point C"));
                        
                        Y3 = parseFloat(prompt("Quel est l'ordonnée du point C"));
                        
                        A = Math.pow((X2 - X1),2) + Math.pow((Y2 - Y1),2); 
                        B = Math.pow((X3 - X2),2) + Math.pow((Y3 - Y2),2);
                        C = Math.pow((X3 - X1),2) + Math.pow((Y3 - Y1),2);

                        
                        if (A+B == C || C+B == A || A+C == B) 
                            {
                                alert("Votre triangle ABC est un triangle rectangle");
                            } 

                        else 
                            {
                                alert("Votre triangle ABC n'est pas un triangle rectangle");
                            }
                    }

            Project_div.append(unit2_cotainer);
            
            fieldset.append(Project_div);



            //Title for the second part
            var unit3 = document.createElement("unit3");
            unit3.innerText = "Unité 3: Python";
            unit3.className = "Title";
            Project_div.append(unit3);
            
            //Seperates the button in groups of 4 
            var unit3_cotainer = document.createElement("unit3_cotainer");
            unit3_cotainer.className = "Project_container";
            
            //Creating the buttons
                    
                //Unité 3 -> Exercice 1
                var Exercice_1 = document.createElement("Exercice_1");
                Exercice_1.innerHTML = "Exercice 1";
                Exercice_1.className = "button";

                Exercice_1.onclick = function Exercice_1()
                {
                    var a = parseFloat(prompt("Enter the value a"));
                    a = (a*0,08) + Math.sqrt(Math.pow(a,2)-8+12);
                    alert("The result is: " + a);
                }

                unit3_cotainer.append(Exercice_1);
                Project_div.append(unit3_cotainer);
                fieldset.append(Project_div);

                //Exercice 2
                var Division_de_pizza = document.createElement("Division_de_pizza");
                Division_de_pizza.innerHTML = "Division de Pizza";
                Division_de_pizza.className = "button";

                Division_de_pizza.onclick = function Division_de_pizza()
                    {
                        var kids = parseInt(prompt("Enter the number of kids attending the party"));
                        var pizza_boxes = parseInt(prompt("How many boxes of pizzas were bought?"));

                        var pizza_slices = pizza_boxes*12;//Every box contains 12 pizza
                        
                        //d reprsents the number of slices each child is allowed
                        
                        var d = Math.floor(pizza_slices/kids);//Math.floor rounds to the nearest integer
                        
                        var e = pizza_slices%kids;
                        //e reprsents the number of pizzas in excess
                        
                        alert("Puisque vous avez commendez "+ pizza_boxes + " boîtes de pizza, il y aura "+ pizza_slices + " tranches de pizza en tout. Afin"
                                + " que chaque enfant puisse recevoir un nombre égale de pizza chaque enfant à droit à "+ d + 
                                " pizzas et il y aura "+ e+ " pizzas en excess.");
                    }

                unit3_cotainer.append(Division_de_pizza);
                
                //Exercice 3
                var Cfinf = document.createElement("Cfinf");
                Cfinf.innerHTML = "Conversion des Fractions...";
                Cfinf.className = "button";

                Cfinf.onclick = function Cfinf()
                    {
                        var check=0;
                        //Check verifies the numerator is greater than the denomanotor
                        while (check==0)
                            {
                                var a = parseFloat(prompt("Entrer le numérateur"));
                                var b = parseFloat(prompt("Entrer le denomateur"));

                                if (a>b)
                                {
                                    var c = Math.floor(a/b); //c represents the whole number in a/b
                                    
                                    var d = a%b; //d represents the excess in a/b
                                    alert(a +"/"+ b + " est égale à "+ c + " et " + d + "/" + b);
                                    check=1;
                                }

                                else
                                {
                                    alert("Le numérateur doit être supérieur")
                                    check=0;
                                }
                            }
                    }
                unit3_cotainer.append(Cfinf);


                var M4e9 = document.createElement("M4e9");
                M4e9.innerHTML = "Chercher les Multiples de 4...";
                M4e9.className = "button";

                M4e9.onclick = function M4e9()
                    {
                        alert("Ce code vous dit si un chiffre saisi est un multiple de 4 ou 9,"
                                + " la pareté du nombre, et si elle est positif/négatif")
                        var a = parseFloat(prompt("Input your number"));
                        var u = a/2; var b = a/4; var c = a/9; var d = b/9;
                        //u checks if a is an even number

                        b = String(b);
                        c = String(c); 
                        d = String(d); 
                        u = String(u);
                        
                        if (parseInt(u) == u) //If a is an even number than...
                            { 
                        
                                if (parseInt(d) == d)
                                    {
                                        alert("The even number " + a + " is a multiple of 4 & 9");
                                    }

                                else if (parseInt(b) == b)
                                    {
                                        alert("The even number " + a + " is a multiple of 4");
                                    }

                                else if (parseInt(c) == c)
                                    {
                                        alert("The even number " + a + " is a multiple of 9");
                                    }

                                else  
                                    {
                                        alert(a + " is an even number");
                                    }
                            }

                        else 
                            {
                                alert(a + " is an odd number");
                            }

                        if (a>0) //Checks if a is positive
                            {
                                alert(a + " is a positive number");
                            }

                        else
                            {
                                alert(a + " is a negative number");
                            }
                    }
                unit3_cotainer.append(M4e9);


                var Exercice_5 = document.createElement("Exercice_5");
                Exercice_5.innerHTML = "Facteur?";
                Exercice_5.className = "button";

                Exercice_5.onclick = function Exercice_5()
                    {
                        alert("Ce code cherche à voir si un des 3 chiffres saisi est un multiple d'un autre");
                        a = parseFloat(prompt("Entrer votre premier chiffe: "));
                        b = parseFloat(prompt("Entrer votre deuxième chiffe: "));
                        c = parseFloat(prompt("Entrer votre dernier chiffe: "));

                        while (a/b == Math.floor(a/b) || a/c==Math.floor(a/c) || b/c== Math.floor(b/c) || b/a==Math.floor(b/a) || c/a == Math.floor(c/a) || c/b == Math.floor(c/b))
                            {    
                                alert("One of the inputed numbers is a factor of an other inputed number");
                                break;
                            }
                    }
                unit3_cotainer.append(Exercice_5);


                var Chiffre_supérieur = document.createElement("Chiffre_supérieur");
                Chiffre_supérieur.innerHTML = "Le Chiffre Supérieure";
                Chiffre_supérieur.className = "button";

                Chiffre_supérieur.onclick = function Chiffre_supérieur()
                    {
                        var restart = 0;
                        while (restart == 0)
                            {
                                var d = parseInt(prompt("Voulez-vous comparer deux chiffres ou trois?"));

                                if (d==2)
                                    {
                                        var a = parseInt(prompt("Entrer le premier chiffre: "));
                                        var b = parseInt(prompt("Entrer le deuxième chiffre: "));

                                        if (a>b)
                                            {
                                                alert(a+ " est supérieur à "+ b);
                                            }

                                        if (b>a)
                                            {
                                                alert(b+ " est supérieur à "+ a);
                                            }

                                        else if (a==b)
                                            {
                                                alert("Vos deux chiffres sont tous égaux");
                                            }
                                        
                                        var r = prompt("Voulez-vous recommencez? ");

                                        if (r=="non" || r=="Non")
                                            {restart=1}
                                        else {restart=0}
                                    }

                                else if (d==3)
                                    {
                                        var a = parseInt(prompt("Entrer le premier chiffre: "));
                                        var b = parseInt(prompt("Entrer le deuxième chiffre: "));
                                        var c = parseInt(prompt("Entrer le dernier chiffre: "));

                                        if (a>b && a>c)
                                            {
                                                alert(a+ " est le chiffre supérieure");
                                            }

                                        else if (b>a && b>c)
                                            {
                                                alert(b+ " est le chiffre supérieure");
                                            }

                                        else if (c>b && c>a)
                                            {
                                                alert(c+ " est le chiffre supérieure");
                                            }

                                        else if (a==b && a == c)
                                            {
                                                alert("Vos trois chiffres sont tous égaux");
                                            }

                                            if (r=="non" || r=="Non")
                                            {restart=1}
                                        else {restart=0}
                                    }
                                else
                                {
                                    alert("Erreur, vous n'avez pas saisi 2 ou 3, recommencez");
                                    restart = 0;
                                }
                            }
                    }
                unit3_cotainer.append(Chiffre_supérieur);


                var Rabais = document.createElement("Rabais");
                Rabais.innerHTML = "Rabais";
                Rabais.className = "button";

                Rabais.onclick = function Rabais()
                    {
                        var Rabais = 0;
                        var purchase = prompt("Entrer le prix totale de vos achat: ");
                        purchase = parseFloat(purchase);
                        
                        if (purchase >0)
                            {
                                if (purchase >= 50)
                                    {
                                        Rabais = Rabais +5;
                                        
                                        if (purchase >=100)
                                            {
                                                Rabais = Rabais + 10;

                                                if (purchase>=150)
                                                    {
                                                        Rabais = Rabais + 15;
                                                    }
                                            }
                }
                        
            var p = purchase/(1+(Rabais/100));
            var taxed = p*1.13;
            alert("Le coût totale est " + taxed.toFixed(2));
        }
                    }
                unit3_cotainer.append(Rabais);


                var Exercice_8 = document.createElement("Exercice_8");
                Exercice_8.innerHTML = "Exercice 8";
                Exercice_8.className = "button";

                Exercice_8.onclick = function Exercice_8()
                    {
                        var c = parseInt(prompt("Entrer le nombre de cones qu'Ian a vendu cette semaine: "));
                        var a = 10;
                        var count3 = 0;

                        if (c >= 150)
                            {
                                var count = (c-150)*0.1+a;
                                count3 = count;

                                if (c >=250)
                                    {
                                        var count2 = (c-250)*0.25+ count;
                                        count3 = count2;

                                        if (c>=350)
                                            {
                                                count3 = (c-350)*0.35 + count2;
                                                alert("Ian a droit a un boni de "+ count3.toFixed(2));
                                            } 
                                        else
                                            {
                                                alert("Ian a droit a un boni de "+ count3.toFixed(2));
                                            }
                                    }
                                else
                                    {
                                        alert("Ian a droit a un boni de "+ count3.toFixed(2));
                                    }
                            }
                        else
                            {
                                alert("Ian a droit a un boni de "+ count3.toFixed(2));
                            }
                    }
                unit3_cotainer.append(Exercice_8);


                var Formule_Quadractique = document.createElement("Formule_Quadractique");
                Formule_Quadractique.innerHTML = "Formule Quadractique";
                Formule_Quadractique.className = "button";

                Formule_Quadractique.onclick = function Formule_Quadractique()
                    {
                        alert("Ce programme vous permet de trouver les absciesses d'une fonction polynôme du second degrée, "
                                + " sans plus tarder veullez: ");

                        a = prompt("Entrer la valeur de a: ");
                        b = prompt("Entrer la valeur de b: ");
                        c = prompt("Entrer la valeur de c: ");

                        a=parseFloat(a);
                        b=parseFloat(b);
                        c=parseFloat(c);

                        x1 = ((b*-1) + Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a) * -1;
                        x2 = ((b*-1) - Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a) * -1;

                        alert("Les absicess du polynôme "+ a + "x^2 + "+ b + "x + "+ c + " sont: x="+ x1 + " et x2= "+ c);
                    }
                unit3_cotainer.append(Formule_Quadractique);


                var dés_v1 = document.createElement("dés_v1");
                dés_v1.innerHTML = "Jeux de Dés (version 1)";
                dés_v1.className = "button";

                dés_v1.onclick = function dés_v1()
                    {
                        var a = Math.floor(Math.random()*11)+2;
                        alert(a); 
                    }
                unit3_cotainer.append(dés_v1);


                var dés_v2 = document.createElement("dés_v2");
                dés_v2.innerHTML = "Jeux de Dés (version 2)";
                dés_v2.className = "button";

                dés_v2.onclick = function dés_v2()
                    {
                        var a = Math.floor(Math.random()*11)+2;

                        var dés_1 = Math.floor(Math.random()*6)+1;
                        var dés_2 = Math.floor(Math.random()*6)+1;

                        var somme = dés_1 + dés_2;
                        alert("Puisque le premier dés a joué un " + dés_1 + " et le deuxième a joué un " + dés_2 + " la somme des deux est " +  somme);
                        alert(a);
                    }
                unit3_cotainer.append(dés_v2);


                var Taxe_alléatoire = document.createElement("Taxe_alléatoire");
                Taxe_alléatoire.innerHTML = "Taxe Alléatoire";
                Taxe_alléatoire.className = "button";

                Taxe_alléatoire.onclick = function Taxe_alléatoire()
                    {
                        var taxe = Math.floor(Math.random()*10)+10;

                        var a = prompt("Entrer le montant dont vous voulez taxé à " + String(taxe)+ "%: ");
                        a = parseFloat(a);
                        a = (1+(taxe/100))*a;
                        alert("Votre montant sur une taxe de "+ String(taxe)+ "% ce retrouve à " + a.toFixed(2)); 
                    }
                unit3_cotainer.append(Taxe_alléatoire);


                var Claic = document.createElement("Claic");
                Claic.innerHTML = "Lettres Alléotoires Identique";
                Claic.className = "button";

                Claic.onclick = function Claic()
                    {
                        var letters = "ANIYSN";
                        var a = [];
                        
                        for (var i =0; i<2; i++)
                            {
                                var randomIndex = Math.floor(Math.random()*letters.length);
                                a.push(letters[randomIndex]);
                            }

                        if (a[0]== a[1])
                            {
                                alert("The two generated letters " + a + " are identical")
                            }

                        else
                            {
                                alert("The two generated letters are not identical");
                            }
                    }
                unit3_cotainer.append(Claic);


                var Vlav = document.createElement("Vlav");
                Vlav.innerHTML = "Lettres Alléoatoire sont des Vowels";
                Vlav.className = "button";

                Vlav.onclick = function Vlav()
                    {
                        var vowels = "aeiouy"; 
                        var abc = "abcdefghijklmnopqrstuvwxyz";
                        var a = []; var b = [];
                        
                        for (var i =0; i<2; i++)
                            {
                                var randomIndex = Math.floor(Math.random()*vowels.length);
                                a.push(vowels[randomIndex]);

                                var l = Math.floor(Math.random()*abc.length);
                                b.push(abc[l]);
                            }

                        if (vowels.includes(b[1]) && vowels.includes(b[0]))
                            {
                        
                                alert("The two generated vowels are: " + b);
                            }

                        else
                            {
                                alert("The generated letters do not contain two vowels.");
                            }
                    }
                unit3_cotainer.append(Vlav);


                var NA5e15 = document.createElement("NA5e15");
                NA5e15.innerHTML = "Nombre Alléoitoire entre 5 ...";
                NA5e15.className = "button";

                NA5e15.onclick = function NA5e15()
                    {
                        var count = 0;

                        while (count == 0)
                            {
                                count=1;
                                var a = 15*Math.random();

                                if (a>=5)
                                    {
                                        alert(a);
                                    }

                                else
                                    {
                                        count=0;
                                    }
                            }
                    }
                unit3_cotainer.append(NA5e15);


                var Rpc = document.createElement("Rpc");
                Rpc.innerHTML = "Roche, Papier & Ciseaux";
                Rpc.className = "button";

                Rpc.onclick = function Rpc()
                    {
                        var a =[];
                        var utilisateur = prompt("Choisi roche, papier ou ciseaux: ")
                        var ordinateur = "rpc";
                        for (var i =0; i<1; i++)
                            {
                                var randomIndex = Math.floor(Math.random()*ordinateur.length);
                                a.push(ordinateur[randomIndex]);
                            }

                        if (utilisateur == a)
                            {
                                alert("C'est une égalité.");
                            }

                        else if  ((utilisateur  == "roche" && a == "c") || (utilisateur  == "ciseaux" && a == "p") 
                                    || (utilisateur  == "papier" && a == "r"))
                                    {
                                        alert("Tu as gagner!");
                                    }

                        else
                            {
                                alert("Tu as perdu!");
                            }
                    }
                unit3_cotainer.append(Rpc);


                var Factorielle = document.createElement("Factorielle");
                Factorielle.innerHTML = "Factorielle des Nombres";
                Factorielle.className = "button";

                Factorielle.onclick = function Factorielle()
                    {
                        var a = parseInt(prompt("Entrer le chiffre dont vous voulez connaître son factorielle: "));
                        var f = 1;

                        for (var i = 0; i<a; i++)
                            { 
                                f = f*(i+1);
                                b = f/a;
                            }

                        if (parseInt(f/a) == f/a && a!=0)
                            {
                                alert("The factorielle of " + a + " is " + f);
                            }
                    }
                unit3_cotainer.append(Factorielle);


                var Moyenne = document.createElement("Moyenne");
                Moyenne.innerHTML = "Moyenne des Chiffres ...";
                Moyenne.className = "button";

                Moyenne.onclick = function Moyenne()
                    {
                        var n = []; var count =0; n2 =[];
                        var a = parseInt(prompt("Entrer le nombre de chiffre dans la liste"));

                        for (var i =0; i<a; i++)
                            {
                                count = count +1;
                                var num = parseInt(prompt("Entrer le " + count  + " nombre: "));
                                n.push(num);
                                n2.push(num);

                                if (num == 100 || num ==0)
                                {
                                    alert(num);
                                }
                            }

                        var p = n2.length - 1;
                        var m=0;

                        for (var i=0; i<p; i++)
                            {
                                var q = n2.length -1;
                                m = m + n2[q];
                                n2.pop(n2[q]);
                            }

                            m = (m + n[0])/(p+1);
                        n.sort();

                        alert(n[0]+ " est le nombre le plus petit, " + n[p] + " est le nombre le plus grand & la moyenne de tout les " + (p+1) + " chiffres est " + m);
                    }
                unit3_cotainer.append(Moyenne);


                var Fibonacci_Sequence = document.createElement("Fibonacci_Sequence");
                Fibonacci_Sequence.innerHTML = "Fibonacci Sequence";
                Fibonacci_Sequence.className = "button";

                Fibonacci_Sequence.onclick = function Fibonacci_Sequence()
                    {
                        var a = parseInt(prompt("Saisissez la valeur de n afin de savoir les n premier chiffre"
                                                + " de la séquence Fibonacci: ")); // Prompt user for input and convert it to an integer

                        var fib = [0, 1]; // Initialize the Fibonacci sequence with the first two numbers

                        for (var i = 2; i < a; i++) 
                        {
                        // Loop from the third number up to the input number
                        fib[i] = fib[i-1] + fib[i-2]; // Calculate the next Fibonacci number by adding the previous two
                        }

                        alert(fib.slice(0, a)); // Print the first "a" Fibonacci numbers
                    }
                unit3_cotainer.append(Fibonacci_Sequence);


                var CPGL = document.createElement("CPGL");
                CPGL.innerHTML = "Chiffres les Plus Grands...";
                CPGL.className = "button";

                CPGL.onclick = function CPGL()
                    {
                        alert("Ce programme vous permez de choisir le montant de nombre entier que voulez dans une liste.");
                        var a = parseInt(prompt("Entrez le nombre chiffres que vous voulez avoir dans la liste "));
                        var n = [];

                        for (var i =0; i<a; i++)
                            {
                                var num = parseInt(prompt("Entrez le "+ (i+1) + " chiffres: "));
                                
                                if (num>=0)
                                {
                                    n.push(num);
                                }
                                    
                                else if (num<0)
                                {
                                    alert("Puisque le chiffre saisi et négatif la liste à été discontinué");
                                    break;
                                }
                            }

                        n.sort(function(a, b){return a -b});
                        var p = n.length;
                        alert("Les deux plus grands entiers du liste sont: " + n[p-1] + " et " + n[p-2]);
                    }
                unit3_cotainer.append(CPGL);


                var Fna = document.createElement("Fna");
                Fna.innerHTML = "Facteur d'un Nombre Alléatoire";
                Fna.className = "button";

                Fna.onclick = function Fna()
                    {
                        var p=0;
                        while (p==0)
                            {
                                var a = parseInt((Math.random()*100)+1);
                                var n = []; var c = 0;
                                
                                for (var i=0; i<a; i++)
                                {
                                    c = c+1;

                                    if ((a/c) == parseInt(a/c))
                                    {
                                        n.push(c);
                                    }
                                }

                                alert("Les facteurs de " + a + " sont: " + n);

                                r = prompt("Voulez-vous recommencer?: ");

                                if (r == "oui" || r == "Oui")
                                    {
                                        p=0;
                                    }
                                else
                                    {
                                        p=1;
                                    }
                            }
                    }
                unit3_cotainer.append(Fna);


                var Exercice_22 = document.createElement("Exercice_22");
                Exercice_22.innerHTML = "Exercice 22";
                Exercice_22.className = "button";

                Exercice_22.onclick = function Exercice_22()
                    {   alert("Ce code vous dit combien de group de 7 sont dans un nombre saisi");
                        var a = parseInt(prompt("Entrer un entier positif: "));
                        var n =[]; var p =[];
                        var b = parseInt(a/7); var c=0;
                        alert("Il y a " + b + "# de sept dans " + a);

                        for (var i=0; i<a; i++)
                            {
                                c = c + 1;

                                if ((c/2) == parseInt(c/2))
                                    {
                                        p.push(c);
                                    }

                                else
                                    {
                                        n.push(c);
                                    }
                            }

                        alert("Il y a " + String(p.length) + " nombre paire dans " + a + " les voici " + p);

                        alert("Il y a " + String(n.length) + " nombre impaire dans " + a + " les voici " + n);
                    }
                unit3_cotainer.append(Exercice_22);

                
                var sum_cubes = document.createElement("sum_cubes");
                sum_cubes.innerHTML = "Sum of Cubes";
                sum_cubes.className = "button";

                sum_cubes.onclick = function sum_cubes()
                    {
                        alert("Ce Programme calcule la somme des n premiers cubes");
                        var n = parseFloat(prompt("Entrer la valeure de n: "));
                        var a =0; var sum_cubes = 0; var l = [];
                    
                        for (var i=0; i<n; i++)
                            {
                                a = a+1;
                                sum_cubes = Math.pow(a,3) + sum_cubes;
                                l.push(a);
                            
                            }
                            alert("La somme des cubes de " + l + " est " + sum_cubes.toFixed(2)); 
                    }
                unit3_cotainer.append(sum_cubes);


                var sphere = document.createElement("sphere");
                sphere.innerHTML = "Sphere";
                sphere.className = "button";

                sphere.onclick = function sphere()
                    {   alert("Ce code cherche l'aire et le volume d'un sphère apartir du rayon saisi");
                        var r = parseFloat(prompt("Entrer le rayon du sphere: "));

                        var aire_sphere = Math.pow(r,2)*Math.PI*4;
                        var volume_sphere = Math.pow(r,3)*Math.PI*(4/3);

                        alert("Aire= " + aire_sphere.toFixed(2) + ", Volume= " + volume_sphere.toFixed(2));
                    }
                unit3_cotainer.append(sphere);


                var swap = document.createElement("swap");
                swap.innerHTML = "Swap";
                swap.className = "button";

                swap.onclick = function swap()
                    {   alert("Ce code inverse deux chaîne de string");
                        var a = prompt("Entrer vos chaîne: ");
                        var r = a.split(" ");
                        r = r.reverse();
                        r = r.join(" ");
                        alert(r);
                    }
                unit3_cotainer.append(swap);


                var approximation_de_pi = document.createElement("approximation_de_pi");
                approximation_de_pi.innerHTML = "Approximation de PI";
                approximation_de_pi.className = "button";

                approximation_de_pi.onclick = function approximation_de_pi()
                    {   alert("Ce code à comme output un chiffre près à pi dépendemment de n")
                        var n = parseInt(prompt("Entrer une valeure de n: "));
                        var count =1; var approximate_pi = 0; var next_opperation = 0;

                        for (var i=0; i<n; i++)
                        {

                            if (Math.floor(next_opperation/2) == next_opperation/2)
                                {    
                                    approximate_pi = approximate_pi + (4/count);
                                }
                            
                            else
                                approximate_pi = approximate_pi - (4/count);

                            next_opperation = next_opperation + 1;
                            count = count+2;
                        }
                        
                    alert(approximate_pi);
                    }
                unit3_cotainer.append(approximation_de_pi);


                var sum_moyenne = document.createElement("sum_moyenne");
                sum_moyenne.innerHTML = "Sum moyenne";
                sum_moyenne.className = "button";

                sum_moyenne.onclick = function sum_moyenne()
                    {   alert("Ce code vous donne la somme, la moyenne, etc. de 10 chiffres entrer")
                        var f=[]; var s=[]; var n =[]; var sum=0; var count=0;

                        for (var i=0; i<10; i++)
                            {
                                a = parseInt(prompt("Entrer le " + (i+1) + " chiffre: "));
                                n.push(a);
                                sum = a + sum;

                                if (a/2 == Math.floor(a/2))
                                    {
                                        f.push(a);
                                    }

                                else
                                    {
                                        s.push(a);
                                    }
                            }
                        n.sort();

                        alert("La somme de " + n + " est " + sum + ". La moyenne est " + (sum/10).toFixed(2) + " la valeur le plus élevé et"
                            + " la valeur la plus petite sont " + n[-1] + " et " + n[0] + " respectivement. " + s + " sont"
                            + " les chiffres impaire de la liste et " + f + " sont les chiffres paires.");
                    }
                unit3_cotainer.append(sum_moyenne);


                var liste_décroissant = document.createElement("liste_décroissant");
                liste_décroissant.innerHTML = "Liste Décroissant";
                liste_décroissant.className = "button";

                liste_décroissant.onclick = function liste_décroissant()
                    {   alert("Ce code vous dit si l'odre des chiffres saisi d'une chaîne sont ont ordre décroissant");
                        var a = parseInt(prompt("Combien de chiffres sont dans votre liste? "));
                        var list = []; var is_descending =[];

                        for (var i=0; i<a; i++)
                            {
                                num = parseInt(prompt("Entrer le " + (i+1) + " chiffre: "));
                                list.push(num);
                                is_descending.push(num);
                            }

                            is_descending = is_descending.sort();
                            is_descending = is_descending.reverse();
                            alert(is_descending);
                            alert(list);

                        if (list == is_descending)
                            {
                                alert("True");
                            }

                        else
                            {
                                alert("False");
                            }
                    }
                unit3_cotainer.append(liste_décroissant);


                var Fibonacci_sequence_v2 = document.createElement("Fibonacci_sequence_v2");
                Fibonacci_sequence_v2.innerHTML = "Fibonacci Sequence (version 2)";
                Fibonacci_sequence_v2.className = "button";

                Fibonacci_sequence_v2.onclick = function Fibonacci_sequence_v2()
                    {
                        var a = parseInt(prompt("Entrer le nombre de chiffres de la séquence Fibonacci que vous voulez sortir: "));
                        var b = 1; var c = 1; var n=[b,c];

                        alert("Fibonacci sequence up to "+ a + ":");

                        for (var i=2; i<a; i++)
                            {
                                var d = b + c;
                                n.push(d);
                                b = c;
                                c = d;
                            }
                        alert(n);
                    }
                unit3_cotainer.append(Fibonacci_sequence_v2);


                var sum_list = document.createElement("sum_list");
                sum_list.innerHTML = "Somme d'une liste";
                sum_list.className = "button";

                sum_list.onclick = function sum_list()
                    {   var n =[];
                        var a = parseInt(prompt("Combien de chiffre sont dans la liste? "));
                        
                        var cumulative_sum =0;

                        for (var i=0; i<a; i++)
                            {
                                var num = parseFloat(prompt("Entrer le " +(i+1) + " chiffre: "));
                                n.push(num.toFixed(2));
                                cumulative_sum = cumulative_sum + num;
                            }
    
                        alert("La somme de " + n + " est " + cumulative_sum);
                    }
                unit3_cotainer.append(sum_list);

                
                var no_duplicates = document.createElement("no_duplicates");
                no_duplicates.innerHTML = "Remove Duplicates";
                no_duplicates.className = "button";

                no_duplicates.onclick = function no_duplicates()
                    {
                        var a = parseInt(prompt("Combien de chiffre sont dans la liste? ")); 
                            
                            var n = [];
                            var count = 0;

                            for (var i=0; i<a; i++)
                                {
                            
                                    function removeDuplicates(arr) 
                                        {
                                            var uniqueArr = [...new Set(arr)];
                                            return uniqueArr;
                                        }
                                    
                                    var num = parseFloat(prompt("Entrer le " + (i+1) + " chiffre: "));
                                    count = count +1;
                                    n.push(num);
                                    n = removeDuplicates(n);
                                    
                                }
                         alert("Voici la liste des chiffres saisi sans de duplicate " + n);
                    }
                unit3_cotainer.append(no_duplicates);


                var Prime = document.createElement("Prime");
                Prime.innerHTML = "Prime";
                Prime.className = "button";

                Prime.onclick = function Prime()
                    {
                        var count = 0;
        
                        while (count == 0) 
                            {
                                var n = [];
                                var s = 0; // s = sum of numbers
                                alert("Ce programme vous donne une liste des nombres primes nombre entier débutant de votre" +
                                    " premier chiffre à votre deuxième chiffre en ordre croissant.");
                                
                                function isPrime(number) {
                                    if (number < 2) 
                                        {
                                            return false;
                                        }
                                
                                    for (var i = 2; i <= Math.sqrt(number); i++) 
                                        {
                                            if (number % i == 0) 
                                                {
                                                    return false;
                                                }
                                        }
                                
                                    return true;
                                }
                                
                                var a = parseInt(prompt("Enter the first number: "));
                                var b = parseInt(prompt("Enter the second number: "));
                                
                                if (a > b) 
                                    {
                                        alert("Invalid input");
                                        count = 1;
                                    }
                                
                                alert("Voici les chiffres primes entre " + a + " et " + b);
                                for (var num = a; num <= b; num++) 
                                    {
                                        if (isPrime(num)) 
                                            {
                                                s += num;
                                                n.push(num);
                                            }
                                    }
                                
                                a = s / n.length; // a = average
                                
                                alert(n + " leur somme est " + s + " et leur moyenne est " + a);
                                
                                var rst = prompt("Voulez-vous recommencer? ");
                                if (rst.toLowerCase() == "non") {
                                    alert("Merci d'avoir jouer!");
                                    count = 1;
                                }
                        }
                    }
                unit3_cotainer.append(Prime);


                var Facteurs = document.createElement("Facteurs");
                Facteurs.innerHTML = "Trouver les Facteurs";
                Facteurs.className = "button";

                Facteurs.onclick = function Facteurs()
                    {
                        function get_positive_int(number) 
                            {   var Try = 0;
                                while (Try == 0)
                                    {
                                        if (number<0)
                                            {
                                                number = parseInt(prompt("Entrer une valeure"));
                                            }

                                        else
                                            {return number;}
                                    }
                                
                            }

                        function findFactors(number) 
                            {
                                var factors = 0;
                                var factorsList = [];

                                for (var i = 1; i <= number; i++) 
                                    {
                                        if (number % i == 0) 
                                            {
                                                factorsList.push(i);
                                            }
                                    }

                                alert("Voici les facteurs de " + number + ":");
                                return factorsList;
                            }

                        function main() 
                            {
                                var a = parseInt(prompt("Entrer une valeure"));
                                a = get_positive_int(a);
                                var factors = findFactors(a);
                                alert(factors);

                            }

                        main();

                    }
                unit3_cotainer.append(Facteurs);

            Project_div.append(unit3_cotainer);
            fieldset.append(Project_div);


            var unit4 = document.createElement("unit4");
            unit4.innerText = "Unité 4: Python - Les Classes";
            unit4.className = "Title";
            Project_div.append(unit4);
            
            //Seperates the button in groups of 4 
            var unit4_cotainer = document.createElement("unit4_cotainer");
            unit4_cotainer.className = "Project_container";
            
            //Creating the buttons
                    
                //Unité 4 -> Exercice 1
                var Exercice_1 = document.createElement("Exercice_1");
                Exercice_1.innerHTML = "Exercice 1";
                Exercice_1.className = "button";

                Exercice_1.onclick = function Exercice_1()
                    {
                        class Student {
                            constructor(name) {
                              this.name = name;
                            }
                          
                            greet() {
                              alert(this.name + " says hi");
                            }
                          }
                          
                          var s1 = new Student("Toshan");
                          s1.greet();
                          
                          // The solution
                          var stud = new Student("Yannis");
                          stud.greet();
                          
                          
                    }
                unit4_cotainer.append(Exercice_1);


                var Exercice_2 = document.createElement("Exercice_2");
                Exercice_2.innerHTML = "Exercice 2";
                Exercice_2.className = "button";

                
                Exercice_2.onclick = function Exercice_2()
                    {
                        var randomChar = () => 
                            {
                                var characters = "abcdefghijklmnopqrstuvwxyz";
                                var randomIndex = Math.floor(Math.random() * characters.length);
                                return characters[randomIndex];
                            };

                        var bot = Array.from({ length: 4 }, () => randomChar()).join("");

                        n = []; g = []; d = []; m=[]; average = []
                        alert("Hey I am " + bot + " today I'll be greeting the names of people you choose!");
                        
                        function continueGame() 
                            {
                                var answer = prompt("Do you want to restart? ").toLowerCase();
                                if (answer === "yes" || answer === "y" || answer === "oui") 
                                    {
                                        return true;
                                    }
                                return false;
                            }

                        class Teenager 
                            {
                                constructor() 
                                    {
                                        this.name = prompt("Who should I first greet? ");
                                        this.age = null;
                                        this.grade = null;
                                        this.marks = null;
                                    }
                                
                                greet() 
                                    {
                                        if (this.name) 
                                            {
                                                n.push(this.name);
                                            }
                                    
                                        if (this.age) 
                                            {
                                                g.push(this.age);
                                            }
                                    
                                        if (this.grade) 
                                            {
                                                d.push(this.grade);
                                            }
                                    
                                        if (this.marks) 
                                            {
                                                m.push(this.marks);
                                            } 

                                        else 
                                            {
                                                alert("Hey");
                                            }
                                    }
                                
                                setName(name) 
                                    {
                                        this.name = name;
                                    }
                                
                                setAge(age) 
                                    {
                                        this.age = age;
                                    }
                                
                                setGrade(grade) 
                                    {
                                        this.grade = grade;
                                    }
                                
                                setMarks(marks) 
                                    {
                                        this.marks = marks;
                                    }
                                
                                getName() 
                                    {
                                        return this.name;
                                    }
                                
                                getAge() 
                                    {
                                        return this.age;
                                    }
                                
                                getGrade() 
                                    {
                                        return this.grade;
                                    }
                                
                                getMarks() 
                                    {
                                        return this.marks;
                                    }
                            }
                        
                        function get_list(a) 
                            {
                                var p = new Teenager();
                                        
                                if (a === 1) 
                                    {
                                        p.greet();
                                    } 
                                
                                else if (a % 2 === 0) 
                                    {
                                    var count = 1;
                                        p.greet();
                                
                                    for (var i = 0; i<a; i++) 
                                        {
                                            var new_name =  prompt("Who is the " + (i + 1) + " person I should greet? ");
                                            p.setName(new_name);
                                                p.greet();
                                        }
                                    } 

                                else 
                                    {
                                        var b = Math.floor(a / 2);
                                        var count = 1;
                                    
                                            p.greet();
                                    
                                        for (var i = 0; i < a; i++) 
                                            {
                                                if (count + 1 === 2) 
                                                    {
                                                        var new_name = prompt("Who is the 2nd person I should greet? ");
                                                        p.setName(new_name);
                                                    } 
                                                
                                                else if (count + 1 === 3) 
                                                    {
                                                        var new_name = prompt("Who is the 3rd person I should greet? ");
                                                        p.setName(new_name);
                                                    } 
                                                
                                                else 
                                                    {
                                                        var new_name = prompt("Who is the " + (i + 1) + "th person I should greet? ");
                                                        p.setName(new_name);
                                                    }
                                        
                                                p.greet();
                                                count = count + 1;
                                            }
                                    }
                            }
                                
                        function add() 
                            {
                                var a = n.length;
                                
                                for (var i = 0; i < a; i++) 
                                    {
                                        var marks = [];
                                        var p = 0;
                                        var k = String(n[i]);
                                    
                                        var age = parseInt(prompt("How old is " + (k) + ": "));
                                        var grade = parseInt(prompt("What grade is " + (k) + " in: "));
                                    
                                        for (var j = 0; j < 6; j++) 
                                            {
                                                var mark = parseInt(prompt("What is " + (k) + " 's " + (j + 1) + " best grade: "));
                                                marks.push(mark);
                                                p = mark + p;
                                            }
                                    
                                        average.push((p / 6).toFixed(2));
                                        m.push(marks);
                                    
                                        if (age <= 19 && age >= 13) 
                                            {
                                                g.push(age);
                                            } 
                                        
                                        else 
                                            {
                                                alert("Les seules âges accepter sont de 13 ans à 19 ans.");
                                            }
                                    
                                        if (grade >= 1 && grade <= 12) 
                                            {
                                                d.push(grade);
                                            } 
                                        
                                        else 
                                            {
                                                alert(grade + " ne compte pas comme une année scolaire.");
                                            }
                                    }
                            }
                                
                        function main() 
                            {
                                var a = parseInt(prompt("How many people am I greeting today? "));
                                get_list(a);
                                add();
                                alert("Hey, " + n.join(", "));
                                alert("You're all " + g + " years old & in " + d + " grade respectively.");
                                alert("Your grades are " + m + " with an average of " + average + " respectfully");
                                        
                                
                                var play = continueGame();
                                    while (play)
                                        {
                                            n,g,d = [];
                                            var a = parseInt(prompt("How many people am I greeting today? "));
                                            get_list(a);
                                            add();
                                            alert("Hey, " + n);
                                            alert("You're all " + g + " years old & in " + d + " grade respectively.");
                                            alert("Your grades are " + m + " with an average of " + average + " respectfully");
                                                    
                                            play = continueGame();
                                        }
                                
                                alert("Thank you for playing!");
                            }
                            
                        main();
                    }

                unit4_cotainer.append(Exercice_2);
                
                
                var Exercice_3 = document.createElement("Exercice_3");
                Exercice_3.innerHTML = "Exercice 3";
                Exercice_3.className = "button";

                Exercice_3.onclick = function Exercice_3()
                    {   alert("Ceci est une addition simple de 2 chiffre")
                        function add(x, y) 
                            {
                                alert(x + y);
                            }
                          
                          var x = parseFloat(prompt("Enter x: "));
                          var y = parseFloat(prompt("Enter y: "));
                          add(x, y);
                    }
                unit4_cotainer.append(Exercice_3);


                var Exercice_4 = document.createElement("Exercice_4");
                Exercice_4.innerHTML = "Exercice 4";
                Exercice_4.className = "button";

                Exercice_4.onclick = function Exercice_4()
                    {
                        var x2 = 0;
                        var y2 = 0;
                        var mode = parseInt(prompt("Voulez vous entrer 1 point ou 2? "));

                        if (mode == 1) 
                            {
                                var x1 = parseFloat(prompt("x1: "));
                                var y1 = parseFloat(prompt("y1: "));

                                var a = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                                alert("La longeur du segment AB est " + a);
                            } 
                        
                        else if (mode == 2) 
                            {
                                var x1 = parseFloat(prompt("x1: "));
                                var y1 = parseFloat(prompt("y1: "));
                                x2 = parseFloat(prompt("x2: "));
                                y2 = parseFloat(prompt("y2: "));

                                var a = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                                alert("La longeur du segment AB est " + a);
                            }

                    }
                unit4_cotainer.append(Exercice_4);


                var Exercice_5 = document.createElement("Exercice_5");
                Exercice_5.innerHTML = "Exercice 5";
                Exercice_5.className = "button";

                Exercice_5.onclick = function Exercice_5()
                    {
                        var n = []; var l = [];

                        function add(x, y) 
                            {
                                n.push(x + y);
                            }

                        function modL(number) 
                            {
                                l.push(number);
                            }

                        function main() 
                            {
                                var a = parseInt(prompt("How many numbers are you adding: "));

                                var x = parseFloat(prompt("Enter your first number: "));
                                var y = parseFloat(prompt("Enter your second number: "));
                                l.push(x);
                                modL(y);
                                add(y, x);

                                for (var i = 0; i < a - 2; i++) 
                                    {
                                        x = parseFloat(prompt("Enter the " + (i + 3) + " number: "));
                                        modL(x);
                                        add(n[i], x);
                                    }

                                alert("The sum of " + l + " is " + n[n.length - 1]);
                            }

                        main();
                    }
                unit4_cotainer.append(Exercice_5);


                var Exercice_6 = document.createElement("Exercice_6");
                Exercice_6.innerHTML = "Exercice 6";
                Exercice_6.className = "button";

                Exercice_6.onclick = function Exercice_6()
                    {
                        class Vehicule 
                            {
                                constructor(name, color) 
                                    {
                                        this.name = name;
                                        this.color = color;
                                    }
                            
                                honk() 
                                    {
                                        alert("Beep!");
                                    }
                            }
                          
                          class Car extends Vehicule 
                                {
                                    constructor(name, color) 
                                        {
                                            super(name, color);
                                        }
                                }
                          
                          function main() 
                                {
                                    var a = parseInt(prompt("How many cars are you checking in? "));
                                
                                    for (var i = 0; i < a; i++) 
                                        {
                                            var brand = prompt(`What is the car brand of the ${i + 1} car? `);
                                            var color = prompt(`What color is the ${i + 1} car? `);
                                            var car = new Car(brand, color);
                                            alert(`${car.name} ${car.color} has been checked in.`);
                                        }
                                }
                          
                          main();
                          
                    }
                unit4_cotainer.append(Exercice_6);


                var Exercice_7 = document.createElement("Exercice_7");
                Exercice_7.innerHTML = "Exercice 7";
                Exercice_7.className = "button";

                Exercice_7.onclick = function Exercice_7()
                    {
                        class Vehicle 
                            {
                                constructor(name, kilométrage, capacity) 
                                    {
                                    this.name = name;
                                    this.kilométrage = kilométrage;
                                    this.capacity = capacity;
                                    }
                            }
                          
                          function tpe(t) 
                            {
                                if (t == "Car" || t == "car") 
                                    {
                                        class Car extends Vehicle 
                                            {
                                                constructor(name, kilométrage, capacity) 
                                                    {
                                                        super(name, kilométrage, capacity);
                                                    }
                                                
                                                car(number) 
                                                    {
                                                        for (var i = 0; i < number; i++) 
                                                            {
                                                                var brand = prompt("What is the " + (i+1) + " car brand?");
                                                                var mileage = parseInt(prompt("What is the car's mileage?"));
                                                                var capacity = prompt("What is the seating capacity?");
                                                                alert("The " + brand + " has a capacity of " + capacity + " seats");
                                                                alert("The car's mileage is " + mileage);
                                                            }
                                                    }
                                            }
                                    
                                        var a = parseInt(prompt("How many Vehicles are you checking in?"));
                                        var carInstance = new Car();
                                        carInstance.car(a);
                                    } 
                                
                                else if (t == "Bus" || t == "bus") 
                                    {
                                        class Bus extends Vehicle 
                                            {
                                                constructor(name, kilométrage, capacity) 
                                                    {
                                                        super(name, kilométrage, capacity);
                                                    }
                                                
                                                bus(number) 
                                                    {
                                                        for (var i = 0; i < number; i++) 
                                                            {
                                                                var mileage = parseInt(prompt("What is the bus' mileage?"));
                                                                var capacity = parseInt(prompt("What is the seating capacity?"));
                                                                
                                                                function fare(number) 
                                                                    {
                                                                        var f = 5 * number;
                                                                        return f;
                                                                    }
                                                                
                                                                var f = fare(capacity);
                                                                alert("The " + (i + 1) + " bus is a " + capacity + " seat bus with a $5 bus fare");
                                                                alert("The bus' mileage is " + mileage);
                                                                alert("When full, the total revenue for a full bus is " + f);
                                                            }
                                                    }
                                            }
                                    
                                        var a = parseInt(prompt("How many buses are you checking in?"));
                                        var busInstance = new Bus();
                                        busInstance.bus(a);
                                    }
                            }
                          
                          function continue_game() 
                            {
                                var answer = prompt("Do you want to restart?").toLowerCase();
                                return answer == "yes" || answer == "y" || answer == "oui";
                            }
                          
                          function main() 
                            {
                                var a = prompt("Are you checking in a car or a bus?");
                            
                                if (a.toLowerCase() == "bus" || a.toLowerCase() == "car") 
                                    {
                                        tpe(a.toLowerCase());
                                    }
                            
                                var play = continue_game();
                            
                                while (play) 
                                    {
                                    a = prompt("Are you checking in a car or a bus?");
                                    tpe(a.toLowerCase());
                                    play = continue_game();
                                    }
                            }
                          
                          main();   
                    }
                unit4_cotainer.append(Exercice_7);
                
                Project_div.append(unit4_cotainer);
                fieldset.append(Project_div);
        
        close.onclick = function close()
            {
                Project_div.remove();
                header.className = "visible";
                
            }
    }