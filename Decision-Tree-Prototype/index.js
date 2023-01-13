// true ba

const finalStates = [
    "Glycopeel Cleaning",
    "Retamax Cleaning",
    "PCA/TCA Peel",
    "Botanicals Facial",
    "Powerpeel",
    "Micropeel Cleaning",
    "Spanish Peel",
    "Honey Almond Cleaning",
    "Jet Peel",

    "LuminoVitaGlow",
    "Belo Exomes",
    "BioNutriGlow",
    

    "Glycopeel",
    "Air Dissector",
    "Inara",
    "Agnes RF",
    "Fractional Microneedling",
    "Aurora Photofacial",
    "Picosure Pro",
    "Wet & Dry Dermabrasion",
    "Mesoilluminate",
    "Fraxel Thulium",
    "Firm Plus",
    "Enerjet Kinetic Facelift",
    "Thermage FLX",
    "Thermilift",
];

let choice; 
let possible = "";


/* Step 1 */
document.getElementById("myButton").onclick = function(){
    choice = parseInt(document.getElementById("myText").value);
    console.log(choice);

    if (choice == 1) {
        // choice = 1 -> skin quality
        // represents state = ST 
        document.getElementById("steps").innerHTML = "STEP 2: I want something…";
        document.getElementById("titles").innerHTML = "Skin Quality and Cleansing";

        for (i=0; i<12; i++){
            possible += finalStates[i] + '\n<br>';
        }    
        console.log(possible);
        document.getElementById("treats").innerHTML = possible;
        console.log("check");
        
        /* Step 2 */
        document.getElementById("myButton").onclick = function(){
            choice = parseInt(document.getElementById("myText").value);
            console.log(choice);
            if(choice == 2){
                // choice = 2 -> with no to moderate downtime
                // represents state = FP
                document.getElementById("steps").innerHTML = "STEP 3: What is your skin type?";
                document.getElementById("titles").innerHTML = "with no to moderate downtime";
                possible = '';
                for (i=0; i<9; i++){
                    possible += finalStates[i] + '\n<br>';
                }    
                console.log(possible);
                document.getElementById("treats").innerHTML = possible;
                
                /* Step 3 */
                document.getElementById("myButton").onclick = function(){
                    choice = parseInt(document.getElementById("myText").value);
                    console.log(choice);
                    if(choice == 4){
                        // choice = 4 -> Normal/Combination
                        // represents state = NC1
                        document.getElementById("steps").innerHTML = "STEP 4: Select what you want to target?";
                        document.getElementById("titles").innerHTML = "normal/combination";
                        possible = '';
                        possible = finalStates[0] + '\n<br>' + finalStates[1] + '\n<br>' + finalStates[2];
                        document.getElementById("treats").innerHTML = possible;

                        /* Step 4 */    
                        document.getElementById("myButton").onclick = function(){
                            choice = parseInt(document.getElementById("myText").value);
                            console.log(choice);    
                            if(choice == 8){
                                // choice = 8 -> Exfoliate Dead Skin
                                // represents final state = Glycopeel Cleaning
                                document.getElementById("pt").innerHTML = "Recommended Treatment:";
                                possible = finalStates[0];
                                document.getElementById("treats").innerHTML = possible;
                            }
                            else if (choice == 9){
                                // choice = 4 -> Normal/Combination
                                // represents state = NC1
                                document.getElementById("pt").innerHTML = "Recommended Treatment:";
                                possible = finalStates[1];
                                document.getElementById("treats").innerHTML = possible;

                            }
                            else if (choice == 10){
                                // choice = 4 -> Normal/Combination
                                // represents state = NC1
                                document.getElementById("pt").innerHTML = "Recommended Treatment:";
                                possible = finalStates[2];
                                document.getElementById("treats").innerHTML = possible;
                            }
                        }
                    }

                    else if (choice == 5){
                        // choice = 5 -> Dry
                        // represents state = Dry1
                        document.getElementById("steps").innerHTML = "STEP 4: Select what you want to target?";
                        document.getElementById("titles").innerHTML = "dry";
                        possible = '';
                        possible = finalStates[3] + '\n<br>' + finalStates[4] + '\n<br>' + finalStates[5];
                        document.getElementById("treats").innerHTML = possible;

                        /* Step 4 */    
                        document.getElementById("myButton").onclick = function(){
                            choice = parseInt(document.getElementById("myText").value);
                            console.log(choice);    
                            if(choice == 8){
                                document.getElementById("pt").innerHTML = "Recommended Treatment:";
                                possible = finalStates[3];
                                document.getElementById("treats").innerHTML = possible;
                            }
                            else if (choice == 9){
                                document.getElementById("pt").innerHTML = "Recommended Treatment:";
                                possible = finalStates[4];
                                document.getElementById("treats").innerHTML = possible;
                            }
                            else if (choice == 10){
                                document.getElementById("pt").innerHTML = "Recommended Treatment:";
                                possible = finalStates[5];
                                document.getElementById("treats").innerHTML = possible;
                            }
                        }

                    }

                    else if(choice == 6){
                        // choice = 6 -> Oily
                        // represents state = Oily1
                        document.getElementById("steps").innerHTML = "STEP 4: Select what you want to target?";
                        document.getElementById("titles").innerHTML = "oily";
                        possible = '';
                        possible = finalStates[4] + '\n<br>' + finalStates[6] + '\n<br>' + finalStates[2];
                        document.getElementById("treats").innerHTML = possible;

                        /* Step 4 */    
                        document.getElementById("myButton").onclick = function(){
                            choice = parseInt(document.getElementById("myText").value);
                            console.log(choice);    
                            if(choice == 8){
                                document.getElementById("pt").innerHTML = "Recommended Treatment:";
                                possible = finalStates[4];
                                document.getElementById("treats").innerHTML = possible;
                            }
                            else if (choice == 9){
                                document.getElementById("pt").innerHTML = "Recommended Treatment:";
                                possible = finalStates[6];
                                document.getElementById("treats").innerHTML = possible;

                            }
                            else if (choice == 10){
                                document.getElementById("pt").innerHTML = "Recommended Treatment:";
                                possible = finalStates[2];
                                document.getElementById("treats").innerHTML = possible;
                            }

                        }
                    }

                    else if(choice == 7){
                        // choice = 7 -> Sensitive
                        // represents state = Sens1
                        document.getElementById("steps").innerHTML = "STEP 4: Select what you want to target?";
                        document.getElementById("titles").innerHTML = "sensitive";
                        possible = '';
                        possible = finalStates[7] + '\n<br>' + finalStates[3] + '\n<br>' + finalStates[8];
                        document.getElementById("treats").innerHTML = possible;

                        /* Step 4 */    
                        document.getElementById("myButton").onclick = function(){
                            choice = parseInt(document.getElementById("myText").value);
                            console.log(choice);    
                            if(choice == 8){
                                document.getElementById("pt").innerHTML = "Recommended Treatment:";
                                possible = finalStates[7];
                                document.getElementById("treats").innerHTML = possible;
                            }
                            else if (choice == 9){
                                document.getElementById("pt").innerHTML = "Recommended Treatment:";
                                possible = finalStates[3];
                                document.getElementById("treats").innerHTML = possible;
                            }
                            else if (choice == 10){
                                document.getElementById("pt").innerHTML = "Recommended Treatment:";
                                possible = finalStates[8];
                                document.getElementById("treats").innerHTML = possible;
                            }
                        }
                    }


                }
            }


            else if (choice == 3) {
                // choice = 2 -> with moderat to prolonged downtime
                // represents state = SQP
                document.getElementById("steps").innerHTML = "STEP 3: What is your skin type?";
                document.getElementById("titles").innerHTML = "with moderate to prolonged downtime";
                
            } 


         }
        

    }
}







