let next = document.querySelector(".next");
let question = [
    {
        qText:"كم لاعب يتكون فريق كرة السلة ؟",
        aOption:[
             {answerText:6,isCorrecte:false},
             {answerText:5,isCorrecte:true},
             {answerText:7,isCorrecte:false},
             {answerText:8,isCorrecte:false},
        ],
    },
    {
       qText:"من هي أول بلد تشرع في الألعاب الأولمبية ؟",
       aOption:[
             {answerText:"فرنسا",isCorrecte:false},
             {answerText:"المغرب",isCorrecte:false},
             {answerText:"البرازيل",isCorrecte:false},
             {answerText:"اليونان",isCorrecte:true},
       ],
    },
    {
        qText:"من هو أول منتخب عربي صعد إلى كأس العالم ؟",
        aOption:[
            {answerText:"مصر",isCorrecte:true},
            {answerText:"المغرب",isCorrecte:false},
            {answerText:"الكويت",isCorrecte:false},
            {answerText:"تونس",isCorrecte:false},
        ],
    },
    {
        qText:"من هو منتخب عربي تاهل الى نصف نهائي كاس العالم",
        aOption:[
            {answerText:"مصر",isCorrecte:false},
            {answerText:"المغرب",isCorrecte:true},
            {answerText:"السعودية",isCorrecte:false},
            {answerText:"ليبيا",isCorrecte:false},
        ],
    },
    {
        qText:"ماهي الرياضة مشهورة بها دولة البرازيل",
        aOption:[
            {answerText:"كرة قدم",isCorrecte:true},
            {answerText:"كرة مضرب",isCorrecte:false},
            {answerText:"كرة سلة",isCorrecte:false},
            {answerText:"كرة اليد",isCorrecte:false},
        ],
    },
    {
        qText:"ماهي الدولة اكبر عدد من حيت ميداليات تم تحقيقها في الالعاب الاولمبية",
        aOption:[
            {answerText:"امريكا",isCorrecte:true},
            {answerText:"الصين",isCorrecte:false},
            {answerText:"روسيا",isCorrecte:false},
            {answerText:"فرنسا",isCorrecte:false},
        ],
    },
    {
        qText:"من اي دولة ظهرت رياضة التايكواندو",
        aOption:[
            {answerText:"اليابان",isCorrecte:false},
            {answerText:"كورية الجنوبية",isCorrecte:true},
            {answerText:"الصين",isCorrecte:false},
            {answerText:"فرنسا",isCorrecte:false},
        ],
    },
    {
        qText:"في اي مدينة يقع ملعب محمد الخامس",
        aOption:[
            {answerText:"اكادير",isCorrecte:false},
            {answerText:"الرباط",isCorrecte:false},
            {answerText:"طنجة",isCorrecte:false},
            {answerText:"الدارالبيضاء",isCorrecte:true},
        ],
    },
    {
        qText:"ماهي الرياضة اكثر شعبية للملكة المغربية الحبيبة",
        aOption:[
            {answerText:"كرة قدم",isCorrecte:true},
            {answerText:"السباحة",isCorrecte:false},
            {answerText:"ركوب خيل",isCorrecte:false},
            {answerText:"كرة سلة",isCorrecte:false},
        ],
    },
    {
        qText:"كم عدد مشاركات المغرب في كاس العالم",
        aOption:[
            {answerText:6,isCorrecte:false},
            {answerText:4,isCorrecte:false},
            {answerText:5,isCorrecte:true},
            {answerText:7,isCorrecte:false},
        ],
    },
]

let counter = 0;
let score = 0;
const answer = document.createElement("div");
dis = () => {
    reset();
   const quiz = document.getElementById("quiz");
   const numb = question[counter];
   if(counter < question.length){
       const ele = document.createElement("div");
       ele.innerHTML = `<h1 style="font-size:32px;">سؤال ${counter+1} من ${question.length}</h1>
       <h1 style="font-size:22px;margin-bottom:60px;margin-top:20px;">${numb.qText}</h1>
       `;
       numb.aOption.forEach((opt)=>{
           const btn = document.createElement("button");
           btn.innerHTML = opt.answerText;
           btn.classList.add("active");
           answer.appendChild(btn);
           if(opt.isCorrecte){
            btn.dataset.isCorrecte = opt.isCorrecte;
           }
           btn.addEventListener("click",checkAnswer);
       });
       quiz.innerHTML = "";
       quiz.appendChild(ele);
       quiz.appendChild(answer);
   }else {
       quiz.innerHTML = `<h1 style="font-size:32px;">النتيجة هي ${score * 2}/${question.length * 2}</h1>
       <h2 style="margin-bottom:40px;font-size:32px;">${score * 2 >= 10 ? "نجحت":"فشلت" }</h2>
       <a href="game.html" >الرجوع</a>
       `;
       next.style.display = "none";
   }
}
checkAnswer = (e) => {
   const selectBtn = e.target;
   const correct = selectBtn.dataset.isCorrecte === "true";
   if(correct){
    swal("الجواب صحيح","","success");
    selectBtn.classList.add("correct");
    score++;
   }
   else{
    swal("الجواب خاطئ","","error");
    selectBtn.classList.add("incorrect");
   }
   Array.from(answer.children).forEach(b=>{
    if(b.dataset.isCorrecte === "true"){
        b.classList.add("correct");
    }
    b.disabled = true;
   });
}

reset = () => {
    while(answer.firstChild){
        answer.removeChild(answer.firstChild);
    }
}

next.addEventListener("click",()=>{
   counter++;
   dis();
})

dis();




