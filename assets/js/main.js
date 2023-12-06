
const $ = document;

$.addEventListener('DOMContentLoaded', () => {
    const button = $.querySelector("#section1-button");
    const form = $.querySelector("#form");

    button.addEventListener('click', e => {
        form.classList.toggle("visible-form");

        // Désactiviation du scroll sur la page
        $.documentElement.style.overflow = 'hidden';
        // Désactivation du boutton 
        button.disabled = true;
        // Color the page
        $.documentElement.style.filter = "brightness(0.8)";
    });

    form.addEventListener("submit", async (e) => {
            e.preventDefault();

            // hide the form
            form.classList.toggle("visible-form");
            $.documentElement.style.overflow = 'visible';
            button.disabled = false;
            $.documentElement.style.filter = "brightness(1)";

            // take data from the form
            const data = {
                firstname: $.querySelector("#firstname").value,
                lastname: $.querySelector("#lastname").value,
                email: $.querySelector("#email").value,
                subject: $.querySelector("#subject").value,
                message: $.querySelector("#message").value
            };
            console.log(data);

            // send data to backend
            const response = await axios.post("http://localhost:3000/form", data);
            console.log(response);
        });
});


