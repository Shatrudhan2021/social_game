"use strict";

export default class lng {

    constructor(){
        this.lg = localStorage.getItem("language") ?? 'EN';

        this.languageBank();
    }

     verifyLanguage() {
       
        this.lgOptions = ["EN", "NL" , "FR"];

        if(this.lg in this.lgOptions){
            return true;
        }

        return false;
    }

    languageBank(){
        this.EN = {
            "HOW_TO_PLAY":" How To Play",
            "WELCOME" : "welcome",
            "CONTENTINTRO" : `EN The perfect poop "memory game
            requires you to find the most pairs of
            matching cards as fast as possible.
            Best scores will be rewarded with
            1 of over 200 Hill's Food’s bag! `,
            "PRIZE_MONEY" :"Prize money",
            "PRIZE_MONEY_PARA": "1 of over 200 Hill's Food’s bag:For a cat or small dog: 3kg bag  For a medium or large breed 12kg bag",
            "BACK" : "Back",
            "HOW_TO_PLAY" : "How to Play",
            "ACCEPTRULES": "I've read and accept the " ,
            "RULES": "Rules",
            "PLAY": " Play" ,
            "HOW_TO_PLAY_CONTENT": "Flip a card and try to match it with another card using your memory",
            "MOVE_COUNT": "Move count",
            "TRY_TO_PARA": " Try to win the level as fast as possible",
            "TIME": "Times",
            "STORE_PARA": " Now, to check if you have the score of the day, we need to know from where you are playing:",
            "Next" : "Next",
            "NEW_GAME": "",
            "PRIVACY" : "Privacy",
            "THANK_YOU": "Thank You",
            "THANK_YOU_PARA": "To everyone who participated  in our contest! Winners will be shipped within the month!",
            "THANK_YOU_COPYRIGHT" : "© 2021 Hill's Pet Nutrition, B.V. Het gebruik van deze    website valt onder de voorwaarden.",
            "THANK_YOU_COPYRIGHT_L":"van onze ",
            "THANK_YOU_COPYRIGHT_L_U":"Algemene Voorwaarden",
            "BRAVO": "BRAVO !  ",
            "PET_PARA": "You've won one bag of Hills Food for your     pet. Tell us more about you pet to receive the perfect bag!",
            "PET_OPTION_CAT": " I own a cat",
            "PET_OPTION_DOG" : "I own a dog  ",
            "PET_OPTION_KITTEN": "Kitten / Puppy",
            "PET_OPTION_10": "Adult less than 10 kg",
            "PET_OPTION_10-25" : "Adult between 10-25 kg",
            "PET_OPTION_25":" Adult more than 25kg",
            "BRAVO-OWNER-PARA":"You've won one bag of Hills Food for your      pet. Tell us who you are  to be delivered at the right place! ",
            "NEWSLETTER_SUBSCRIBE" : " I want to subscribe to the newsletter",
            "WINNER_READ_ACCCEPT":"I've read and accept the ",
            "GAME": "Game",
            "RULES": "Rules",
            "SUBMIT": "Submit",
            "GAMES_RULES": " Game Rules",
            "PRIVACY_POLICY": "Privacy Policy ",
            "COOKIES_POLICY": "Cookies Policy ",
            "CONTACT": "Contact",
            "OH-SORRY":"OOH SORRY!",
            "OH-SORRY-PARA": "You were not the player of the day… Sign up for ongoing TIPS & TOOLSPlus useful pet news, reminders  and more!",
            "ALREADY_PLAYED" : "You Have been already  Played during this contest session we will notify you when the next contest will there",
            "PRIZE_MONEY": "Prize MONEY",
            "MINIMIZE_PARA" :"Minimize the move count and beat the record of the day ? ",
            "LEMAIL" : "",
            "LFIRSTNAME" : "",
            "LLASTNAME" : "",
            "LADDRESS" : "",
            "LCITY": "",
            "LZIP" : "",
            "DOG_BABY" : "",
            "CAT_BABY" : ""


           
        }
        this.NL = {
            "HOW_TO_PLAY":"HOE HET SPEL TE SPELEN",
            "WELCOME" : "WELKOM!",

            "CONTENTINTRO" : `Het doel van het "perfecte poep"-spel is om zo snel mogelijk dezelfde kaarten te vinden. Doe mee en maak kans op 1 van de meer dan 200 zakken Hill's voer *.`,
            "SMALL_TEXT_INTRO" : "*meer details in de",
            "GAME_RULES_LINK_INTRO": "spelregels",
            "PRIZE_MONEY" :"PRIJZEN",
            "PRIZE_MONEY_PARA_LI_1": "WIN 1 van de 200 zakken Hill's voer*: ",
            "PRIZE_MONEY_PARA_LI_2" : "kat / kleine hond: zak van 3 kg",
            "PRIZE_MONEY_PARA_LI_3" :"middelgrote / grote hond: zak van 12 kg",
            "SMALL_TEXT_PRIZE":"*meer details in de",
            "SMALL_TEXT_PRIZE_U":"spelregels",
            "BACK" : "TERUG",
            "HOW_TO_PLAY" : "HOE SPEEL JE HET SPEL",
            "ACCEPTRULES": "ik heb de voorwaarden gelezen en aanvaard",
            "RULES": "Reglement",
            "PLAY": "SPELEN",
            "HOW_TO_PLAY_CONTENT":"Draai een kaart om en probeer 2 dezelfde kaarten te vinden.",
            "MOVE_COUNT": "AANTAL ZETTEN",
            "TRY_TO_PARA": "Probeer zo snel mogelijk te winnen.",
            "TIME": "SPEELTIJD",
            "STORE_PARA": "Om te bepalen of je gewonnen hebt, moeten we weten vanuit welke winkel je het spel speelt:",
            "Next" : "VOLGENDE",
            "NEW_GAME": "",
            "PRIVACY" : "het privacybeleid.",
            "THANK_YOU": "DANK JE WEL.",
            "THANK_YOU_PARA": "Voor jouw deelname aan deze wedstrijd!",
            "THANK_YOU_COPYRIGHT" : "2021 Hill's Pet Nutrition, B.V. Het gebruik van deze website valt onder de voorwaarden ",
            "THANK_YOU_COPYRIGHT_L":"van onze ",
            "THANK_YOU_COPYRIGHT_L_U":"Algemene Voorwaarden.",
            "BRAVO": "BRAVO !",
            "PET_PARA" : "Je hebt een zak Hill's voer gewonnen voor je huisdier. Vertel ons meer over je huisdier om de perfecte zak te ontvangen!",
            "PET_OPTION_CAT": "ik heb een kat",
            "PET_OPTION_DOG" : "ik heb een hond",
            "PET_OPTION_KITTEN": "Kitten / Pup",
            "PET_OPTION_10": "Volwassen hond tot 10 kg",
            "PET_OPTION_10-25" : "Volwassen hond van 10-25 kg",
            "PET_OPTION_25":"Volwassen hond vanaf 25 kg",
            "BRAVO-OWNER-PARA":"Graag ontvangen we  jouw gegevens om het op de juiste plek te bezorgen! Je kunt jezelf ook inschrijven voor onze nieuwsbrief om tips & tricks  en nuttige informatie over jouw huisdier te ontvangen.",
            "NEWSLETTER_SUBSCRIBE" : "Ik wil me inschrijven voor de nieuwsbrief",
            "WINNER_READ_PRIVACY":"ik heb de voorwaarden gelezen en aanvaard",
            "WINNER_READ_RULES":"ik heb de voorwaarden gelezen en aanvaard",
            "GAME": "",
            "RULES": "de spelregels.",
            "SUBMIT": "BEVESTIGEN",
            "GAMES_RULES":"Spelregels",
            "PRIVACY_POLICY": "Privacybeleid",
            "COOKIES_POLICY": "Cookiebeleid",
            "CONTACT": "Contact",
            "OH-SORRY":"OOOH SORRY!",
            "OH-SORRY-PARA":"Je hebt niet gewonnen, maar je kunt jezelf wel inschrijven voor onze nieuwsbrief om tips & trucs  en nuttige informatie over jouw huisdier te ontvangen.",
            "PRIZE_MONEY": "PRIJZEN ",
            "MINIMIZE_PARA" :"Beperk het aantal zetten en versla het record.",
            "WELL_DONE": "GOED GEDAAN! ",
            "ALREADY_PLAYED" : "Het lijkt erop dat je ons spel al eerder hebt gespeeld, maar als je jezelf hebt ingeschreven voor onze nieuwsbrief, houden we je op de hoogte. Tot gauw! ",
            "COOKIES_POLICY_WELCOME" : "Door deze site te gebruiken, gaat u akkoord met ons privacy- en cookiebeleid",
            "LEMAIL" : "email",
            "LFIRSTNAME" : "voornaam",
            "LLASTNAME" : "achternaam",
            "LADDRESS" : "adres",
            "LCITY": "plaats",
            "LZIP" : "postcode",
            "DOG_BABY" : "Puppy",
            "CAT_BABY" : "Kitten",
            "CHOICE_BABY":"Selecteer een optie",
            "weightValue": "Selecteer gewichtswaarde",
            "PET_NAME" : "Naam van huisdier",
            "Adult":"Volwassen kat",
            "NOT_INTERESTED":"niet geïnteresseerd",
            "PET_AGE":"Geboortedatum huisdier",
            "YEAR":"Jaar",
            "MONTH":"Maand"

        }
        this.FR = {
            "HOW_TO_PLAY":"COMMENT JOUER",
            "WELCOME" : "BIENVENUE",
            "CONTENTINTRO" : `Le jeu "Perfect Poop" nécessite de trouver le plus de paires de cartes, le plus rapidement possible. Participez et tentez de gagner 1 des 200 sacs de nourriture Hill's*. 
`,
            "SMALL_TEXT_INTRO" : "*plus de détails dans les",
            "GAME_RULES_LINK_INTRO": "Regles du jeu",
            "PRIZE_MONEY" :"PRIX",
            "PRIZE_MONEY_PARA_LI_1": "1 des 200 sachets de nourriture Hill's:",
            "PRIZE_MONEY_PARA_LI_2":"chat / petit chien : sac de 3kg ",
            "PRIZE_MONEY_PARA_LI_3":"chien de moyenne / grande race : sac de 12 kg*.",
            "SMALL_TEXT_PRIZE": " *plus de détails dans",
            "SMALL_TEXT_PRIZE_U":"les règles du jeu.",
            "BACK" : "RETOUR",
            "HOW_TO_PLAY" : "COMMENT JOUER?",
            "ACCEPTRULES": "J'ai lu et j'accepte",
            "RULES": "RÈGLES",
            "PLAY": "jouer",
            "HOW_TO_PLAY_CONTENT": "Retournez les cartes et essayez de trouver toutes les paires en utilisant votre mémoire.",
            "MOVE_COUNT": "NOMBRE DE COUPS",
            "TRY_TO_PARA": "Essayez de gagner le niveau aussi vite que possible.",
            "TIME": "CHRONO",
            "STORE_PARA": "Maintenant, pour déterminer si vous êtes le joueur du jour, nous devons savoir depuis quel magasin vous jouez",
            "Next" : "Suivant",
            "NEW_GAME": "",
            "PRIVACY" : "la politique de confidentialité",
            "THANK_YOU": "MERCI ! ",
            "THANK_YOU_PARA": "D'avoir participé à ce concours ! ",
            "THANK_YOU_COPYRIGHT" : "© 2021 Hill's Pet Nutrition, Inc. L'utilisation de ce site est soumise aux conditions décrites ",
            "THANK_YOU_COPYRIGHT_L":"dans nos ",
            "THANK_YOU_COPYRIGHT_L_U":"Conditions d'Utilisation.",
            "BRAVO": "BRAVO ! ",
            "PET_PARA" : "Vous avez gagné un sac de nourriture Hills pour votre  animal de compagnie. Dites-nous en plus sur lui pour recevoir le sac parfait ! ",
            "PET_OPTION_CAT": "Je possède un chat",
            "PET_OPTION_DOG" : "Je possède un chien",
            "PET_OPTION_KITTEN": "Kitten / Puppy",
            "PET_OPTION_10": "Chien adulte de moins de 10 kg",
            "PET_OPTION_10-25" : "Chien adulte entre 10-25 kg",
            "PET_OPTION_25":"Chien adulte de plus de 25 kg",
            "BRAVO-OWNER-PARA":"Dites-nous qui vous êtes pour être livré au bon endroit ! ",
            "NEWSLETTER_SUBSCRIBE" : "Je souhaite m'inscrire à la newsletter",
            "WINNER_READ_PRIVACY":"J'ai lu et j'accepte",
            "WINNER_READ_RULES":"J'ai lu et j'accepte",
            "GAME": "",
            "RULES": "les règles du jeu",
            "SUBMIT": "VALIDER",
            "GAMES_RULES": "règles du jeu ",
            "PRIVACY_POLICY": "politique de confidentialité",
            "COOKIES_POLICY": "Politique en matière de cookies",
            "CONTACT": "Contact",
            "OH-SORRY":"OOH DÉSOLÉ !",
            "OH-SORRY-PARA":"Vous n'êtes pas le champion du jour mais vous pouvez vous Inscrire à notre newsletter pour recevoir des trucs & astuces, ainsi que des infos utiles sur votre animal de compagnie.",
            "ALREADY_PLAYED" : "On dirait que vous avez déjà joué mais si vous êtes inscrit à notre newsletter, vous serez informé de la tenue des prochain concours. À bientôt!",
            "MINIMIZE_PARA" :"Minimisez le nombre de coups et battez le record du jour. ",
            "WELL_DONE": "PAS MAL!",
            "COOKIES_POLICY_WELCOME" : "En utilisant ce site, vous acceptez notre politique de confidentialité et de cookies ",
            "LEMAIL" : "email",
            "LFIRSTNAME" : "prénom",
            "LLASTNAME" : "nom",
            "LADDRESS" : "adresse",
            "LCITY": "ville",
            "LZIP" : "code postal",
            "DOG_BABY" : "Chiot",
            "CAT_BABY" : "Chaton",
            "CHOICE_BABY":"Sélectionnez une option",
            "weightValue": "Selecteer gewichtswaarde",
            "PET_NAME" : "Nom d'animal domestique",
            "Adult":"Chat adulte",
            "NOT_INTERESTED":"pas intéressé",
            "PET_AGE":"date de naissance de votre animal",
            "YEAR":"Année",
            "MONTH":"Mois"

        }
    }

    trans(varName){
        if(this.lg == 'EN') {
            return this.EN[varName];
        } else if (this.lg == 'NL') {
            return this.NL[varName];
        }
        else if (this.lg == 'FR') {
            return this.FR[varName];
        }
    }
   

}