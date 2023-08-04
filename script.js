document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".question");

    questions.forEach(question => {
        question.addEventListener("click", function() {
            const answer = this.nextElementSibling;

            // Toggle the 'active' class to control the display
            if (answer.classList.contains("active")) {
                answer.classList.remove("active");
            } else {
                // Close other open answers
                questions.forEach(otherQuestion => {
                    const otherAnswer = otherQuestion.nextElementSibling;
                    otherAnswer.classList.remove("active");
                });

                answer.classList.add("active");
            }
        });
    });
});
