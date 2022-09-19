//client_word_slider
let move = 0;
function client_words(courdination){
    const word_part_list = document.querySelector(".client_word .word_part .wrapper");
    const card_word_part = word_part_list.querySelectorAll(".card_word_part");
    if (courdination){
        console.log(6);
        if (move < (card_word_part.length-1) * 850){
            move += 850;
        }
    }
    else {
        move -= 850;
    }
    word_part_list.style.right = move + "px";
    console.log(move);
    if (courdination){
        console.log(6);
        if (move > (card_word_part.length-1) * 850){
            move -= 850;
        }
    }
    else {
        move += 850;
    }
    word_part_list.style.le = move + "px";
}
let timer_start = true;
//pages_menu
const get_page_sub = document.querySelector(".navigation_line_container .link_choice .page_sub");
function open_menu_link(){
    get_page_sub.classList.add("page_sub_css");
}
function close_menu_link(){
    get_page_sub.classList = "page_sub";
}
//mobile_menu
const get_mobile_version = document.querySelector(".phone_version_sub");
const get_img_menu = document.querySelector(".navigation_line_container .img_menu img.menu_icon");
const get_img_cross = document.querySelector(".navigation_line_container .img_menu img.cross_icon");
function open_menu_link_mobile(){
    get_mobile_version.classList.toggle("phone_version_sub_css");
}
//get_new_icon
function get_new_icon(){
    get_img_menu.classList.add("menu_icon_anim");
    get_img_cross.classList.add("cross_icon_anim");
}
function get_new_icon_back(){
    get_img_menu.classList = "menu_icon";
    get_img_cross.classList = "cross_icon";
}
//scrolls_navigation_line
const get_navigation_line_container = document.querySelector(".navigation_line_container");
window.addEventListener('scroll', function() {
    // console.log(pageYOffset);
    //menu
    const scroll = document.querySelector(".life_enjoy_container").offsetTop;
    // console.log(pageYOffset);
    if (pageYOffset > 60){
        get_navigation_line_container.classList.add("navigation_line_css");
    }
    else {
        get_navigation_line_container.classList = "navigation_line_container"
    }
    //enjoy_block_anim
    if (pageYOffset > 170){
        const get_option_part_one = document.querySelector(".life_enjoy_container .option_part_one");
            get_option_part_one.classList.add("option_part_anim");
        setTimeout(()=>{
            const get_option_part_two = document.querySelector(".life_enjoy_container .option_part_two");
                get_option_part_two.classList.add("option_part_anim");
        }, 1000);
        setTimeout(()=>{
            const get_option_part_thee = document.querySelector(".life_enjoy_container .option_part_three");
                get_option_part_thee.classList.add("option_part_anim");
        }, 2000);
    }
    //Questions
    if (pageYOffset > 5230){
        const get_contact_us = document.querySelector(".questions_container .contact_us");
        get_contact_us.classList.add("contact_us_anim");
    }
    //scrolls_blue_shapes
    const get_blue_shape_one = document.querySelector(".life_enjoy_container .blue_shape");
    if (pageYOffset > 300){
        setTimeout(()=>{
            get_blue_shape_one.classList.add("blue_shape_css");
        }, 3000);
    }
    const get_blue_shape_two = document.querySelector(".why_us .blue_shape");
    if (pageYOffset > 3292){
        get_blue_shape_two.classList.add("blue_shape_css");
    }
    //work_progress_container
    const get_work_progress_img = document.querySelector(".work_progress_container .img img");
    if (pageYOffset > 900){
        get_work_progress_img.classList = "work_progress_img_css";
        setTimeout(()=>{
            const get_work_card_one = document.querySelector(".work_progress_container .work_card_one");
                get_work_card_one.classList.add("work_card_anim");
        }, 1000);
        setTimeout(()=>{
            const get_work_card_two = document.querySelector(".work_progress_container .work_card_two");
                get_work_card_two.classList.add("work_card_anim");
        }, 2000);
        setTimeout(()=>{
            const get_work_card_three = document.querySelector(".work_progress_container .work_card_three");
            get_work_card_three.classList.add("work_card_anim");
        }, 3000);
    }
    // problem_decision_part
    if (pageYOffset > 1546){
        const get_problem_part_one = document.querySelector(".problem_decision_container .problem_decision_part_one");
            get_problem_part_one.classList.add("problem_decision_part_anim");
        setTimeout(()=>{
            const get_problem_part_two = document.querySelector(".problem_decision_container .problem_decision_part_two");
            const get_line_one = document.querySelector(".why_us .line .blue_line_one");
            get_problem_part_two.classList.add("problem_decision_part_anim");
            get_line_one.classList.add("blue_line_one_anim");
        }, 500);
        setTimeout(()=>{
            const get_problem_part_three = document.querySelector(".problem_decision_container .problem_decision_part_three");
            const get_line_two = document.querySelector(".why_us .line .blue_line_two");
            get_problem_part_three.classList.add("problem_decision_part_anim");
            get_line_two.classList.add("blue_line_two_anim");
        }, 1000);
        setTimeout(()=>{
            const get_problem_part_four = document.querySelector(".problem_decision_container .problem_decision_part_four");
            const get_line_three = document.querySelector(".why_us .line .blue_line_three");
            get_problem_part_four.classList.add("problem_decision_part_anim");
            get_line_three.classList.add("blue_line_three_anim");
        }, 1500);
        //blue_line_anim - setTimeout
    }
    // percent_part_anim
    if (pageYOffset > 3682){
        const get_percent = document.querySelector(".why_us .percent");
        const get_percent_part = document.querySelector(".why_us .percent_part");
            get_percent_part.classList = "percent_part_anim";
            get_percent.classList.add("percent_anim");
    }
    //set
    const get_believe_container_span_one = document.querySelector(".believe_container span.ninety");
    const get_believe_container_span_two = document.querySelector(".believe_container span.fifty");
    const get_believe_container_span_three = document.querySelector(".believe_container span.twenty_four");
    const get_believe_container_span_four = document.querySelector(".believe_container span.eighty_seven");
    function company_information_part_start(){}
    if (pageYOffset > 2821 && timer_start){
        let count_number = 0;
        // console.log("da da da");
        const interval_one = setInterval(()=>{
            get_believe_container_span_one.innerHTML = count_number + "%";
            if (count_number >= 90){
                clearInterval(interval_one);
            }
            count_number++;
        }, 4000/(1000/90));
        const interval_two = setInterval(()=>{
            get_believe_container_span_two.innerHTML = count_number + "h";
            if (count_number >= 24){
                clearInterval(interval_two);
            }
        }, 4000/(1000/24));
        const interval_three = setInterval(()=>{
            get_believe_container_span_three.innerHTML = count_number + "+";
            if (count_number >= 50){
                clearInterval(interval_three);
            }
        }, 8000/50);
        const interval_four = setInterval(()=>{
            get_believe_container_span_four.innerHTML = count_number + "%";
            if (count_number >= 87){
                clearInterval(interval_four);
            }
        }, 8000/87);
        timer_start = false;
        //company_information_anim
        const company_block_one = document.querySelector(".believe_container .company_information_part div.company_information_part_one");
            company_block_one.classList.add("anim");
        setTimeout(()=>{
            const company_block_two = document.querySelector(".believe_container .company_information_part div.company_information_part_two");
                company_block_two.classList.add("anim");
        }, 500);
        setTimeout(()=>{
            const company_block_three = document.querySelector(".believe_container .company_information_part div.company_information_part_three");
                company_block_three.classList.add("anim");
        }, 1000);
        setTimeout(()=>{
            const company_block_four = document.querySelector(".believe_container .company_information_part div.company_information_part_four");
                company_block_four.classList.add("anim");
        }, 1500);
    }
});
//scroll = 0
//header_part
const get_information_p = document.querySelector(".about_us_part p.information");
    get_information_p.classList.add("information_css");
//h_one
const get_h_one = document.querySelector(".about_us h1");
    get_h_one.classList = "h_one";
// about_us_p
setTimeout(()=>{
    const get_description_block = document.querySelector(".about_us .description");
        get_description_block.classList.add("description_anim");
}, 1300);
//proposal_container
setTimeout(()=>{
    const get_proposal_container = document.querySelector(".proposal_container");
    get_proposal_container.classList.add("proposal_container_anim");
}, 1600);