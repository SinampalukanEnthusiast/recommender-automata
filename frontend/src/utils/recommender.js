// Take in options e.g [1, 2, 3]
// Output List based on option selected
// List Items = []
/**
 * This function implements the decision tree for the recommended services
 * @param {string} options The selected option from the quiz
 * @param {string} step The current step where in the option is selected from
 * @returns masterList The current list of services depending on the options selected and the step
 */
export default function recommender(options, step) {
    // Find out first how to send selected option from frontend - DONE
    // Each step outputs a list
    // Need to know what step it is currently at

    const selected = parseInt(options);
    const currentStep = parseInt(step || 3);
    // console.log("Received: ", selected, "typeof: ", typeof selected);

    let masterList = [
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
        "BioNutriGlow",
        "Belo Exomes",

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

    // Q: Tells us your general skin needs = [Skin Quality and Cleansing, Skin Treatments]
    const firstStep = (selected) => {
        if (selected === 1) {
            let removeFromMasterList = [
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
            masterList = masterList.filter(
                (item) => !removeFromMasterList.includes(item)
            );
            console.log(masterList);
            return masterList;
        }
        if (selected === 2) {
            let removeFromMasterList = [
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
                "BioNutriGlow",
                "Belo Exomes",
            ];
            masterList = masterList.filter(
                (item) => !removeFromMasterList.includes(item)
            );
            console.log(masterList);
            return masterList;
        }
    };
    const secondStep = (selected) => {
        if (selected === 1) {
            let removeFromMasterList = [
                "LuminoVitaGlow",
                "BioNutriGlow",
                "Belo Exomes",

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
            masterList = masterList.filter(
                (item) => !removeFromMasterList.includes(item)
            );
            return masterList;
        }
        if (selected === 2) {
            let removeFromMasterList = [
                "Glycopeel Cleaning",
                "Retamax Cleaning",
                "PCA/TCA Peel",
                "Botanicals Facial",
                "Powerpeel",
                "Micropeel Cleaning",
                "Spanish Peel",
                "Honey Almond Cleaning",
                "Jet Peel",

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
            masterList = masterList.filter(
                (item) => !removeFromMasterList.includes(item)
            );
            return masterList;
        }
        if (selected === 3) {
            let removeFromMasterList = [
                "Picosure Pro",
                "Wet & Dry Dermabrasion",
                "Mesoilluminate",
                "Fraxel Thulium",
                "Firm Plus",
                "Enerjet Kinetic Facelift",
                "Thermage FLX",
                "Thermilift",

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
                "BioNutriGlow",
                "Belo Exomes",
            ];
            masterList = masterList.filter(
                (item) => !removeFromMasterList.includes(item)
            );
            return masterList;
        }
        if (selected === 4) {
            let removeFromMasterList = [
                "Glycopeel",
                "Air Dissector",
                "Inara",
                "Agnes RF",
                "Fractional Microneedling",
                "Aurora Photofacial",
                "Firm Plus",
                "Enerjet Kinetic Facelift",
                "Thermage FLX",
                "Thermilift",

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
                "BioNutriGlow",
                "Belo Exomes",
            ];
            masterList = masterList.filter(
                (item) => !removeFromMasterList.includes(item)
            );
            return masterList;
        }
        if (selected === 5) {
            let removeFromMasterList = [
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
                "BioNutriGlow",
                "Belo Exomes",
            ];
            masterList = masterList.filter(
                (item) => !removeFromMasterList.includes(item)
            );
            return masterList;
        }
    };

    // Q: What is your skin type? [Dry, Oily, Sensitive, Normal/Combination,
    // With no to moderate downtime ,
    // With moderate to prolonged downtime]
    const thirdStep = (selected) => {
        if (selected === 1) {
            let removeFromMasterList = [
                "Botanicals Facial",
                "Powerpeel",
                "Micropeel Cleaning",
                "Spanish Peel",
                "Honey Almond Cleaning",
                "Jet Peel",
                "LuminoVitaGlow",
                "BioNutriGlow",
                "Belo Exomes",

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
            masterList = masterList.filter(
                (item) => !removeFromMasterList.includes(item)
            );
            return masterList;
        }
        if (selected === 2) {
            let removeFromMasterList = [
                "Glycopeel Cleaning",
                "Retamax Cleaning",
                "PCA/TCA Peel",
                "Spanish Peel",
                "Honey Almond Cleaning",
                "Jet Peel",
                "LuminoVitaGlow",
                "BioNutriGlow",
                "Belo Exomes",

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
            masterList = masterList.filter(
                (item) => !removeFromMasterList.includes(item)
            );
            return masterList;
        }
        if (selected === 3) {
            let removeFromMasterList = [
                "Glycopeel Cleaning",
                "Retamax Cleaning",
                "Botanicals Facial",
                "Micropeel Cleaning",
                "Honey Almond Cleaning",
                "Jet Peel",
                "LuminoVitaGlow",
                "BioNutriGlow",
                "Belo Exomes",

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
            masterList = masterList.filter(
                (item) => !removeFromMasterList.includes(item)
            );
            return masterList;
        }
        if (selected === 4) {
            let removeFromMasterList = [
                "Glycopeel Cleaning",
                "Retamax Cleaning",
                "PCA/TCA Peel",
                "Powerpeel",
                "Micropeel Cleaning",
                "Spanish Peel",
                "LuminoVitaGlow",
                "BioNutriGlow",
                "Belo Exomes",

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
            masterList = masterList.filter(
                (item) => !removeFromMasterList.includes(item)
            );
            return masterList;
        }
        if (selected === 5) {
            let removeFromMasterList = [
                "Glycopeel Cleaning",
                "Retamax Cleaning",
                "PCA/TCA Peel",
                "Botanicals Facial",
                "Powerpeel",
                "Micropeel Cleaning",
                "Spanish Peel",
                "Honey Almond Cleaning",
                "Jet Peel",

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
            masterList = masterList.filter(
                (item) => !removeFromMasterList.includes(item)
            );
            return masterList;
        }
        if (selected === 6) {
            let removeFromMasterList = [
                "Glycopeel Cleaning",
                "Retamax Cleaning",
                "PCA/TCA Peel",
                "Botanicals Facial",
                "Powerpeel",
                "Micropeel Cleaning",
                "Spanish Peel",
                "Honey Almond Cleaning",
                "Jet Peel",
                "Belo Exomes",

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
            masterList = masterList.filter(
                (item) => !removeFromMasterList.includes(item)
            );
            return masterList;
        }
        if (selected === 7) {
            let removeFromMasterList = [
                "Glycopeel Cleaning",
                "Retamax Cleaning",
                "PCA/TCA Peel",
                "Botanicals Facial",
                "Powerpeel",
                "Micropeel Cleaning",
                "Spanish Peel",
                "Honey Almond Cleaning",
                "Jet Peel",
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
            masterList = masterList.filter(
                (item) => !removeFromMasterList.includes(item)
            );
            return masterList;
        }
        if (selected === 8) {
            let removeFromMasterList = [
                "Glycopeel Cleaning",
                "Retamax Cleaning",
                "PCA/TCA Peel",
                "Botanicals Facial",
                "Powerpeel",
                "Micropeel Cleaning",
                "Spanish Peel",
                "Honey Almond Cleaning",
                "Jet Peel",
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
            masterList = masterList.filter(
                (item) => !removeFromMasterList.includes(item)
            );
            return masterList;
        } // Until here
        if (selected === 9) {
            let removeFromMasterList = [
                "Retamax Cleaning",
                "PCA/TCA Peel",
                "Botanicals Facial",
                "Powerpeel",
                "Micropeel Cleaning",
                "Spanish Peel",
                "Honey Almond Cleaning",
                "Jet Peel",
                "LuminoVitaGlow",
                "BioNutriGlow",
                "Belo Exomes",

                "Glycopeel",
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
            masterList = masterList.filter(
                (item) => !removeFromMasterList.includes(item)
            );
            return masterList;
        }
        if (selected === 10) {
            let removeFromMasterList = [
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
                "BioNutriGlow",
                "Belo Exomes",

                "Glycopeel",
                "Air Dissector",
                "Inara",
                "Picosure Pro",
                "Wet & Dry Dermabrasion",
                "Mesoilluminate",
                "Fraxel Thulium",
                "Firm Plus",
                "Enerjet Kinetic Facelift",
                "Thermage FLX",
                "Thermilift",
            ];
            masterList = masterList.filter(
                (item) => !removeFromMasterList.includes(item)
            );
            return masterList;
        }
        if (selected === 11) {
            let removeFromMasterList = [
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
                "BioNutriGlow",
                "Belo Exomes",

                "Glycopeel",
                "Air Dissector",
                "Inara",
                "Agnes RF",
                "Fractional Microneedling",
                "Aurora Photofacial",
                "Mesoilluminate",
                "Fraxel Thulium",
                "Firm Plus",
                "Enerjet Kinetic Facelift",
                "Thermage FLX",
                "Thermilift",
            ];
            masterList = masterList.filter(
                (item) => !removeFromMasterList.includes(item)
            );
            return masterList;
        }
        if (selected === 12) {
            let removeFromMasterList = [
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
                "BioNutriGlow",
                "Belo Exomes",

                "Glycopeel",
                "Air Dissector",
                "Inara",
                "Agnes RF",
                "Fractional Microneedling",
                "Aurora Photofacial",
                "Picosure Pro",
                "Wet & Dry Dermabrasion",
                "Firm Plus",
                "Enerjet Kinetic Facelift",
                "Thermage FLX",
                "Thermilift",
            ];
            masterList = masterList.filter(
                (item) => !removeFromMasterList.includes(item)
            );
            return masterList;
        }
        if (selected === 13) {
            let removeFromMasterList = [
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
                "BioNutriGlow",
                "Belo Exomes",

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
                "Thermage FLX",
                "Thermilift",
            ];
            masterList = masterList.filter(
                (item) => !removeFromMasterList.includes(item)
            );
            return masterList;
        }
        if (selected === 14) {
            let removeFromMasterList = [
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
                "BioNutriGlow",
                "Belo Exomes",

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
            ];
            masterList = masterList.filter(
                (item) => !removeFromMasterList.includes(item)
            );
            return masterList;
        }
    };

    // Select what you want to target: [Acne Prone, Acne Scars and Large Pores,
    // Skin Redness and Inflamation, Exfoliate Dead Skin,
    // Target Blemishes, Improve Skin Complexion,]
    // NOT DONE YET. TOO LONG NEED CONFIRMATION MUNA SHAHAHAS
    const fourthStep = (selected) => {
        if (selected === 1) {
        }
        if (selected === 2) {
        }
        if (selected === 3) {
        }
        if (selected === 4) {
        }
        if (selected === 5) {
        }
        if (selected === 6) {
        }
        if (selected === 7) {
        }
        if (selected === 8) {
        }
        if (selected === 9) {
        }
        if (selected === 10) {
        }
        if (selected === 11) {
        }
        if (selected === 12) {
        }
        if (selected === 13) {
        }
        if (selected === 14) {
        }

        if (selected === 15) {
        }
        if (selected === 16) {
        }
        if (selected === 17) {
        }
        if (selected === 18) {
        }
        if (selected === 19) {
        }
        if (selected === 20) {
        }
        if (selected === 21) {
        }
        if (selected === 22) {
        }
        if (selected === 23) {
        }
        if (selected === 24) {
        }
        if (selected === 25) {
        }
        if (selected === 26) {
        }
        if (selected === 27) {
        }
        if (selected === 28) {
        }

        if (selected === 29) {
        }
        if (selected === 30) {
        }
        if (selected === 31) {
        }
        if (selected === 32) {
        }
        if (selected === 33) {
        }
        if (selected === 34) {
        }
        if (selected === 35) {
        }
        if (selected === 36) {
        }
        if (selected === 37) {
        }
        if (selected === 38) {
        }
        if (selected === 39) {
        }
        if (selected === 40) {
        }
        if (selected === 41) {
        }
        if (selected === 42) {
        }
    };

    // Vibe checks what step the quiz is currently on
    if (currentStep === 1) {
        return firstStep(selected);
    } else if (currentStep === 2) {
        return secondStep(selected);
    } else if (currentStep === 3) {
        return thirdStep(selected);
    } else if (currentStep === 4) {
        return fourthStep(selected);
    }

    return [];
}
