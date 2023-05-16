const rating_nums = document.querySelectorAll('.rating-nums li');
const sub_button = document.querySelector ('.rating-state button');
const point = document.getElementById ("point");
const rating_state = document.querySelector('.rating-state');
const thank_state = document.querySelector('.thank-state');

let rate = null;

rating_nums.forEach((rating_num) =>{
    rating_num.addEventListener('click', (e) => {
        const active = document.querySelector('.active');

        if (active){
            active.classList.remove('active');
        }
        const card = e.target;
        card.classList.add ('active');
        rate = e.target.innerText;

    })
}); 

sub_button.addEventListener('click',() => {
    if(rate){
        point.innerText = rate;
        rating_state.classList.add("hide");
        thank_state.classList.remove("hide");
    }
});





