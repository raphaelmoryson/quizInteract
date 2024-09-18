
const quizQuestions = [
    "Quelle est la capitale de la France ?",
    "Qui a écrit 'Les Misérables' ?",
    "Combien y a-t-il de continents sur Terre ?",
    "Quelle est la plus grande planète du système solaire ?",
    "Quel est le plus petit pays du monde ?",
    "Qui a peint la 'Mona Lisa' ?",
    "En quelle année a eu lieu la Révolution française ?",
    "Quel est le symbole chimique de l'or ?",
    "Qui a découvert la théorie de la relativité ?",
    "Quelle est la langue la plus parlée au monde ?",
    "Combien de joueurs y a-t-il dans une équipe de football ?",
    "Quel est l’animal le plus rapide sur terre ?",
    "Quelle est la capitale de l’Espagne ?",
    "Quel est le plus long fleuve du monde ?",
    "Quelle est la monnaie utilisée au Japon ?",
    "Combien d'os possède le corps humain adulte ?",
    "Qui a écrit 'Roméo et Juliette' ?",
    "Quel est le pays le plus peuplé du monde ?",
    "Quelle est la ville la plus peuplée du monde ?",
    "Quel est le plus haut sommet du monde ?",
    "Quelle est la couleur du sang des poulpes ?",
    "Combien de côtés a un hexagone ?",
    "En quelle année l'homme a-t-il marché sur la Lune pour la première fois ?",
    "Quelle est la plus longue chaîne de montagnes du monde ?",
    "Quelle planète est connue sous le nom de la planète rouge ?",
    "Quelle est la capitale de l'Italie ?",
    "Quel pays est le plus grand producteur de café ?",
    "Dans quelle ville se trouve le Colisée ?",
    "Combien de couleurs y a-t-il dans un arc-en-ciel ?",
    "Quel est l’océan le plus grand du monde ?",
    "Qui a écrit 'Harry Potter' ?",
    "Quel est le plus grand mammifère marin ?",
    "Quel est l’animal emblème de l’Australie ?",
    "Quel sport est connu comme 'le roi des sports' ?",
    "Quelle est la planète la plus proche du Soleil ?",
    "Quel fruit est traditionnellement utilisé pour faire du cidre ?",
    "Quelle est la capitale de la Grèce ?",
    "Quel est le plus grand désert du monde ?",
    "Quel est le nom de l'ouragan le plus dévastateur de l'histoire des États-Unis ?",
    "Quelle est la formule chimique de l'eau ?",
    "Quel pays a inventé le papier ?",
    "Combien de doigts a un humain ?",
    "Quel est le plus vieux des Jeux Olympiques modernes ?",
    "Quel est le nom de la guerre entre le Nord et le Sud des États-Unis ?",
    "Quel est l’organe humain le plus grand ?",
    "Quel est le plus petit océan du monde ?",
    "Qui a écrit 'Le Seigneur des Anneaux' ?",
    "Quel pays est célèbre pour le kimchi et le barbecue coréen ?",
    "Quelle est la distance entre la Terre et la Lune en kilomètres (approximativement) ?",
    "Qui a inventé le téléphone ?",
    "Quelle est la devise du Canada ?",
    "Quel est le nom scientifique des chats ?",
    "Combien y a-t-il de jours dans une année bissextile ?",
    "Quelle est la capitale de la Chine ?",
    "Quel est le pays avec le plus grand nombre de volcans actifs ?",
    "Quel est l’aliment principal de la population asiatique ?",
    "Quelle est la langue officielle du Brésil ?",
    "Quelle ville est connue comme la 'Grosse Pomme' ?",
    "Quel est le nom de la reine d’Angleterre décédée en 2022 ?",
    "Quel est le plus grand océan du monde ?",
    "Dans quel pays le Taj Mahal est-il situé ?",
    "Quel est le nombre de provinces au Canada ?",
    "Quel animal peut changer de couleur pour se camoufler ?",
    "Quel pays est le berceau des Jeux Olympiques ?",
    "Quel est l’élément chimique le plus léger ?",
    "Quelle est la capitale de l’Australie ?",
    "Quel est le plus grand continent du monde ?",
    "Quel pays est appelé 'le pays du Soleil Levant' ?",
    "Quelle est la planète la plus froide du système solaire ?",
    "Quel pays a offert la Statue de la Liberté aux États-Unis ?",
    "Combien de dents a un adulte moyen ?",
    "Quel est le plus grand pays du monde par superficie ?",
    "Quel est l’ingrédient principal de la soupe miso ?",
    "Quel est le nom scientifique de l’être humain ?",
    "Qui a été le premier président des États-Unis ?",
    "Quel est le plus grand lac d’Afrique ?",
    "Quelle est la capitale de l’Allemagne ?",
    "Quel est le plus grand animal terrestre ?",
    "Quelle est la principale langue parlée en Égypte ?",
    "Dans quelle ville se trouve la tour Eiffel ?",
    "Qui a peint 'La Cène' ?",
    "Quel est l’animal le plus grand au monde ?",
    "Quel est le nom de la montagne la plus haute d’Afrique ?",
    "Quel est le pays le plus chaud de la planète ?",
    "Dans quel pays le jeu de société 'Monopoly' a-t-il été inventé ?",
    "Combien de temps la lumière du soleil met-elle pour atteindre la Terre ?",
    "Quel est le plus gros œil du règne animal ?",
    "Quel pays produit le plus de chocolat ?",
    "Quel pays est connu pour sa tradition de la sieste ?",
    "Quel océan borde la côte est des États-Unis ?",
    "Qui a écrit 'Le Petit Prince' ?",
    "Quel est le nom de la galaxie dans laquelle nous vivons ?",
    "Quelle est la capitale de la Russie ?",
    "Quel est le sport le plus pratiqué dans le monde ?",
    "Quel est le prénom de Shakespeare ?",
    "Combien y a-t-il d'océans sur Terre ?",
    "Quel métal est liquide à température ambiante ?"
];


const quizAnswers = [
    "paris", // 1. Quelle est la capitale de la France ?
    "victor hugo", // 2. Qui a écrit 'Les Misérables' ?
    "7", // 3. Combien y a-t-il de continents sur Terre ?
    "jupiter", // 4. Quelle est la plus grande planète du système solaire ?
    "vatican", // 5. Quel est le plus petit pays du monde ?
    "léonard de vinci", // 6. Qui a peint la 'Mona Lisa' ?
    "1789", // 7. En quelle année a eu lieu la Révolution française ?
    "au", // 8. Quel est le symbole chimique de l'or ?
    "albert einstein", // 9. Qui a découvert la théorie de la relativité ?
    "mandarin", // 10. Quelle est la langue la plus parlée au monde ?
    "11", // 11. Combien de joueurs y a-t-il dans une équipe de football ?
    "guépard", // 12. Quel est l’animal le plus rapide sur terre ?
    "madrid", // 13. Quelle est la capitale de l’Espagne ?
    "nil", // 14. Quel est le plus long fleuve du monde ?
    "yen", // 15. Quelle est la monnaie utilisée au Japon ?
    "206", // 16. Combien d'os possède le corps humain adulte ?
    "william shakespeare", // 17. Qui a écrit 'Roméo et Juliette' ?
    "chine", // 18. Quel est le pays le plus peuplé du monde ?
    "tokyo", // 19. Quelle est la ville la plus peuplée du monde ?
    "everest", // 20. Quel est le plus haut sommet du monde ?
    "bleu", // 21. Quelle est la couleur du sang des poulpes ?
    "6", // 22. Combien de côtés a un hexagone ?
    "1969", // 23. En quelle année l'homme a-t-il marché sur la Lune pour la première fois ?
    "andes", // 24. Quelle est la plus longue chaîne de montagnes du monde ?
    "mars", // 25. Quelle planète est connue sous le nom de la planète rouge ?
    "rome", // 26. Quelle est la capitale de l'Italie ?
    "brésil", // 27. Quel pays est le plus grand producteur de café ?
    "rome", // 28. Dans quelle ville se trouve le Colisée ?
    "7", // 29. Combien de couleurs y a-t-il dans un arc-en-ciel ?
    "pacifique", // 30. Quel est l’océan le plus grand du monde ?
    "j.k. rowling", // 31. Qui a écrit 'Harry Potter' ?
    "baleine bleue", // 32. Quel est le plus grand mammifère marin ?
    "kangourou", // 33. Quel est l’animal emblème de l’Australie ?
    "football", // 34. Quel sport est connu comme 'le roi des sports' ?
    "mercure", // 35. Quelle est la planète la plus proche du Soleil ?
    "pomme", // 36. Quel fruit est traditionnellement utilisé pour faire du cidre ?
    "athènes", // 37. Quelle est la capitale de la Grèce ?
    "sahara", // 38. Quel est le plus grand désert du monde ?
    "katrina", // 39. Quel est le nom de l'ouragan le plus dévastateur de l'histoire des États-Unis ?
    "h₂o", // 40. Quelle est la formule chimique de l'eau ?
    "chine", // 41. Quel pays a inventé le papier ?
    "10", // 42. Combien de doigts a un humain ?
    "1896", // 43. Quel est le plus vieux des Jeux Olympiques modernes ?
    "sécession", // 44. Quel est le nom de la guerre entre le Nord et le Sud des États-Unis ?
    "peau", // 45. Quel est l’organe humain le plus grand ?
    "arctique", // 46. Quel est le plus petit océan du monde ?
    "j.r.r. tolkien", // 47. Qui a écrit 'Le Seigneur des Anneaux' ?
    "corée du sud", // 48. Quel pays est célèbre pour le kimchi et le barbecue coréen ?
    "384 400 km", // 49. Quelle est la distance entre la Terre et la Lune en kilomètres (approximativement) ?
    "alexander graham bell", // 50. Qui a inventé le téléphone ?
    "mari usque ad mare", // 51. Quelle est la devise du Canada ?
    "felis catus", // 52. Quel est le nom scientifique des chats ?
    "366", // 53. Combien y a-t-il de jours dans une année bissextile ?
    "pékin", // 54. Quelle est la capitale de la Chine ?
    "indonésie", // 55. Quel est le pays avec le plus grand nombre de volcans actifs ?
    "riz", // 56. Quel est l’aliment principal de la population asiatique ?
    "portugais", // 57. Quelle est la langue officielle du Brésil ?
    "new york", // 58. Quelle ville est connue comme la 'Grosse Pomme' ?
    "elizabeth ii", // 59. Quel est le nom de la reine d’Angleterre décédée en 2022 ?
    "pacifique", // 60. Quel est le plus grand océan du monde ?
    "inde", // 61. Dans quel pays le Taj Mahal est-il situé ?
    "10", // 62. Quel est le nombre de provinces au Canada ?
    "caméléon", // 63. Quel animal peut changer de couleur pour se camoufler ?
    "grèce", // 64. Quel pays est le berceau des Jeux Olympiques ?
    "hydrogène", // 65. Quel est l’élément chimique le plus léger ?
    "canberra", // 66. Quelle est la capitale de l’Australie ?
    "asie", // 67. Quel est le plus grand continent du monde ?
    "japon", // 68. Quel pays est appelé 'le pays du Soleil Levant' ?
    "uranus", // 69. Quelle est la planète la plus froide du système solaire ?
    "france", // 70. Quel pays a offert la Statue de la Liberté aux États-Unis ?
    "32", // 71. Combien de dents a un adulte moyen ?
    "russie", // 72. Quel est le plus grand pays du monde par superficie ?
    "soja", // 73. Quel est l’ingrédient principal de la soupe miso ?
    "homo sapiens", // 74. Quel est le nom scientifique de l’être humain ?
    "george washington", // 75. Qui a été le premier président des États-Unis ?
    "lac victoria", // 76. Quel est le plus grand lac d’Afrique ?
    "berlin", // 77. Quelle est la capitale de l’Allemagne ?
    "éléphant d'afrique", // 78. Quel est le plus grand animal terrestre ?
    "arabe", // 79. Quelle est la principale langue parlée en Égypte ?
    "paris", // 80. Dans quelle ville se trouve la tour Eiffel ?
    "léonard de vinci", // 81. Qui a peint 'La Cène' ?
    "baleine bleue", // 82. Quel est l’animal le plus grand au monde ?
    "kilimandjaro", // 83. Quel est le nom de la montagne la plus haute d’Afrique ?
    "koweït", // 84. Quel est le pays le plus chaud de la planète ?
    "états-unis", // 85. Dans quel pays le jeu de société 'Monopoly' a-t-il été inventé ?
    "8 minutes", // 86. Combien de temps la lumière du soleil met-elle pour atteindre la Terre ?
    "calmar colossal", // 87. Quel est le plus gros œil du règne animal ?
    "suisse", // 88. Quel pays produit le plus de chocolat ?
    "espagne", // 89. Quel pays est connu pour sa tradition de la sieste ?
    "atlantique", // 90. Quel océan borde la côte est des États-Unis ?
    "antoine de saint-exupéry", // 91. Qui a écrit 'Le Petit Prince' ?
    "voie lactée", // 92. Quel est le nom de la galaxie dans laquelle nous vivons ?
    "moscou", // 93. Quelle est la capitale de la Russie ?
    "football", // 94. Quel est le sport le plus pratiqué dans le monde ?
    "william", // 95. Quel est le prénom de Shakespeare ?
    "5", // 96. Combien y a-t-il d'océans sur Terre ?
    "mercure", // 97. Quel métal est liquide à température ambiante ?
];

let question = 0
let testQuestion = 10

function startQuiz() {
    let levelQuiz = document.getElementById('levelQuiz').value
    // level not select
    if (levelQuiz == "") {
        const alert = document.getElementById('alertHome')
        const alertText = document.getElementById('alertHome').textContent
        if (!alertText) {
            let textAlert = `Aucun niveau séléctionner`;
            alert.insertAdjacentText("beforeend", textAlert);
        }
        return
    }

    // DISABLE HOME

    var disableStartQuiz = document.getElementById("start-screen")
    disableStartQuiz.classList.add('hidden')

    // SHOW QUIZ

    var showQuiz = document.getElementById("quiz-container");
    showQuiz.classList.remove("hidden");
    // ADD LEVEL DIFFICUL

    const levelDifficult = document.getElementById("levelDifficult");
    let text = `Niveau de difficulté : ${levelQuiz}`;
    levelDifficult.insertAdjacentText("afterend", text);

    // INITIAL questionSuccessful 
    refreshQuestionCount()



    // Compte à rebours
    let count = 5;
    const timerElement = document.getElementById("timerStart");
    const countdown = setInterval(() => {
        timerElement.textContent = `${count} secondes`;
        if (count === 0) {
            clearInterval(countdown);
            timerElement.textContent = "Go!";
            let questionRandom = Math.floor(Math.random() * 100);
            showQuestion(questionRandom);
        }
        count--;
    }, 1000);

}

function refreshQuestionCount() {
    const questionSuccessful = document.getElementById("questionSuccessful")
    const remainingQuestion = document.getElementById("remainingQuestion")
    questionSuccessful.innerHTML = `${question}`;
    remainingQuestion.innerHTML = `${testQuestion}`;
}

function submitAnswer() {
    const answer = document.getElementById("answerQuestion").value;
    const getQuestion = document.getElementById("question-text").textContent;

    let answerTransform = answer.toLowerCase();
    let answerWords = answerTransform.split(" ");

    let correctAnswer = quizAnswers[quizQuestions.indexOf(getQuestion)].toLowerCase();
    let correctAnswerWords = correctAnswer.split(" ");


    let isCorrect = correctAnswerWords.every(word => answerWords.includes(word));
    console.log(isCorrect)
    if (isCorrect && answerWords.length === correctAnswerWords.length) {
        let questionRandom = Math.floor(Math.random() * 100);
        showQuestion(questionRandom);
        question += 1;
        testQuestion -= 1;
        refreshQuestionCount();
    } else {
        console.log("question non trouvée");
    }


    if (testQuestion == 10) {
        var disableStartQuiz = document.getElementById("start-screen")
        disableStartQuiz.classList.remove('hidden')
    }

}



function showQuestion(questionRandom) {
    const questionText = document.getElementById("question-text");
    questionText.innerHTML = `${quizQuestions[questionRandom]}`;

    // Compte à rebours
    startTimer()
}


function startTimer() {
    let count = 30;
    const timerElement = document.getElementById("timer");
    const countdown = setInterval(() => {
        timerElement.textContent = `${count} secondes`;
        if (count === 0) {
            clearInterval(countdown);
            let questionRandom = Math.floor(Math.random() * 100);
            testQuestion -= 1;
            showQuestion(questionRandom);
        }
        count--;
    }, 1000);
}