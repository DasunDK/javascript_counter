//get elements
// const value = document.getElementById("value");
// document.querySelectorAll(".btn").forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//         const styles = e.currentTarget.classList;
//         if (styles.contains("decrease")) {
//             count--;
//         } else if (styles.contains("increase")) {
//             count++;
//         } else {
//             count = 0;
//         }
//         if (count > 0) {
//             value.style.color = "green";
//         }
//         if (count < 0) {
//             value.style.color = "red";
//         }
//         if (count === 0) {
//             value.style.color = "#222";
//         }
//         value.textContent = count;
//     });
// })

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const style = e.target.classList;
        let count = value.textContent;

        //count logic
        if (style.contains("decrease")) {
            count--;
        } else if (style.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        //text color change
        if (count < 0) {
            value.style.color = "red";
        } else if (count > 0) {
            value.style.color = "green";
        } else {
            value.style.color = "#222";
        }

        value.textContent = count;
    });
});
