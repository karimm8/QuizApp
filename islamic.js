let next = document.querySelector(".next");
let question = [
    {
        qText:"أين ولد رسول الله محمد صلى الله عليه وسلم",
        aOption:[
             {answerText:"دمام",isCorrecte:false},
             {answerText:"مكة المكرمة",isCorrecte:true},
             {answerText:"مدينة منورة",isCorrecte:false},
             {answerText:"الرياض",isCorrecte:false},
        ],
    },
    {
       qText:"ما هو نسب محمد عليه الصلاة والسلام ",
       aOption:[
             {answerText:"الى نوح بن ابراهيم عليهما السلام",isCorrecte:false},
             {answerText:"الى حمزة بن ابراهيم عليهما السلام",isCorrecte:false},
             {answerText:"الى احمد بن ابراهيم عليهما السلام",isCorrecte:false},
             {answerText:"إلى إسماعيل بن إبراهيم عليهما السلام ",isCorrecte:true},
       ],
    },
    {
        qText:"من هي الزوجة الأولى للرسول صلى الله عليه وسلم",
        aOption:[
            {answerText:"خديجة بنت خويلد رضي الله عنها",isCorrecte:true},
            {answerText:"امينة بنت وهب رضي الله عنها",isCorrecte:false},
            {answerText:"ثويبة",isCorrecte:false},
            {answerText:"حليمة السعدية",isCorrecte:false},
        ],
    },
    {
        qText:"كم عدد مرضعات محمد صلى الله عليه وسلم",
        aOption:[
            {answerText:1,isCorrecte:false},
            {answerText:2,isCorrecte:true},
            {answerText:3,isCorrecte:false},
            {answerText:4,isCorrecte:false},
        ],
    },
    {
        qText:"ماهو لقب محمد صلى الله عليه وسلم",
        aOption:[
            {answerText:"الصادق الامين",isCorrecte:true},
            {answerText:"الصادق",isCorrecte:false},
            {answerText:"الامين",isCorrecte:false},
            {answerText:"الامين الصادق",isCorrecte:false},
        ],
    },
    {
        qText:"أين يوجد مقام سيدنا إبراهيم عليه السلام ؟",
        aOption:[
            {answerText:"في مكة المكرمة",isCorrecte:true},
            {answerText:"في مدينة المنورة",isCorrecte:false},
            {answerText:"في مدينة الدمام",isCorrecte:false},
            {answerText:"في مدينة الرياض",isCorrecte:false},
        ],
    },
    {
        qText:"ما هو البلد العربي الذي تقع فيه مدينة مكة المكرمة ؟",
        aOption:[
            {answerText:"قطر",isCorrecte:false},
            {answerText:" المملكة العربية السعودية",isCorrecte:true},
            {answerText:"المملكة العربية البحرينية",isCorrecte:false},
            {answerText:"الامارات",isCorrecte:false},
        ],
    },
    {
        qText:"ما هي السورة التي تقع في نصف القرآن ؟",
        aOption:[
            {answerText:"سورة الحديد",isCorrecte:false},
            {answerText:"سورة الملك",isCorrecte:false},
            {answerText:"سورة النمل",isCorrecte:false},
            {answerText:"سورة الكهف",isCorrecte:true},
        ],
    },
    {
        qText:"ما هو اسم النبي الذي إذا غيرنا حرفًا منه أصبح اسم دولة عربية ؟",
        aOption:[
            {answerText:"يونس",isCorrecte:true},
            {answerText:"عيسى",isCorrecte:false},
            {answerText:"يوسف",isCorrecte:false},
            {answerText:"موسى",isCorrecte:false},
        ],
    },
    {
        qText:"لماذا سمي سيدنا عمر ابن الخطاب بالفاروق ؟",
        aOption:[
            {answerText:"لانه يفرق بين زوجاته",isCorrecte:false},
            {answerText:"لانه يفرق بين الناس",isCorrecte:false},
            {answerText:"لأنه يفرق بين الحق والباطل",isCorrecte:true},
            {answerText:"لانه كان يشارك كثيرا في غزواة",isCorrecte:false},
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
       numb.aOption.forEach((opt,index)=>{
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




