let next = document.querySelector(".next");
let question = [
    {
        qText:"في أنف الإنسان يوجد ما يسمي بالجيوب الأنفية فما عدد هذه الجيوب ؟",
        aOption:[
             {answerText:6,isCorrecte:false},
             {answerText:8,isCorrecte:true},
             {answerText:7,isCorrecte:false},
             {answerText:5,isCorrecte:false},
        ],
    },
    {
       qText:"ما هي أصغر دولة عربية من حيث المساحة ؟",
       aOption:[
             {answerText:"كويت",isCorrecte:false},
             {answerText:"تونس",isCorrecte:false},
             {answerText:"قطر",isCorrecte:false},
             {answerText:"البحرين",isCorrecte:true},
       ],
    },
    {
        qText:"ما هي المدينة التي تسمى بمدينة الضباب ؟",
        aOption:[
            {answerText:"لندن",isCorrecte:true},
            {answerText:"باريس",isCorrecte:false},
            {answerText:"مدريد",isCorrecte:false},
            {answerText:"روما",isCorrecte:false},
        ],
    },
    {
        qText:"ما هي نسبة المياه من الكرة الأرضية ؟",
        aOption:[
            {answerText:"60%",isCorrecte:false},
            {answerText:"71%",isCorrecte:true},
            {answerText:"90%",isCorrecte:false},
            {answerText:"80%",isCorrecte:false},
        ],
    },
    {
        qText:"من هو مكتشف أمريكا ؟",
        aOption:[
            {answerText:"كريستوفر كولومبوس",isCorrecte:true},
            {answerText:"اينشتاين",isCorrecte:false},
            {answerText:"ماسك",isCorrecte:false},
            {answerText:"كيلو باترا",isCorrecte:false},
        ],
    },
    {
        qText:"ما هو الشيء الذي كلما ذبحته بكيت منه ؟",
        aOption:[
            {answerText:"البصل",isCorrecte:true},
            {answerText:"الطماطم",isCorrecte:false},
            {answerText:"الزيتون",isCorrecte:false},
            {answerText:"الفلفل",isCorrecte:false},
        ],
    },
    {
        qText:"إلى ماذا يشير مصطلح الذهب الأسود ؟",
        aOption:[
            {answerText:"الفوسفاط",isCorrecte:false},
            {answerText:"البترول",isCorrecte:true},
            {answerText:"النفط",isCorrecte:false},
            {answerText:"الغاز",isCorrecte:false},
        ],
    },
    {
        qText:"ما هو أكبر بحار العالم ؟ ",
        aOption:[
            {answerText:"المحيط الهادي",isCorrecte:false},
            {answerText:"المحيط الاطلسي",isCorrecte:false},
            {answerText:"البحر الميت",isCorrecte:false},
            {answerText:"البحر الأبيض المتوسط",isCorrecte:true},
        ],
    },
    {
        qText:"أشتريه بمالي ولا أدخله داري ؟",
        aOption:[
            {answerText:"السيارة",isCorrecte:true},
            {answerText:"الملابس",isCorrecte:false},
            {answerText:"الدراجة",isCorrecte:false},
            {answerText:"الاتاث",isCorrecte:false},
        ],
    },
    {
        qText:"ما هو أثقل الحيوانات الموجودة على كوكب الأرض ؟",
        aOption:[
            {answerText:"القرش",isCorrecte:false},
            {answerText:"الدولفين",isCorrecte:false},
            {answerText:"الحوت الأزرق",isCorrecte:true},
            {answerText:"الفيل",isCorrecte:false},
        ],
    },
    {
        qText:"ما هو الشيء الذي تحمله ويحملك ؟",
        aOption:[
            {answerText:"الملابس",isCorrecte:false},
            {answerText:"الغطاء",isCorrecte:false},
            {answerText:" الحذاء",isCorrecte:true},
            {answerText:"الكرسي",isCorrecte:false},
        ],
    },
    {
        qText:"أول دولة قامت باستخدام الطابع البريدي فما هي ؟",
        aOption:[
            {answerText:"اسبانيا",isCorrecte:false},
            {answerText:"برتغال",isCorrecte:false},
            {answerText:"بريطانيا",isCorrecte:true},
            {answerText:"المغرب",isCorrecte:false},
        ],
    },
    {
        qText:"ما هو جمع كلمة امرأة ؟",
        aOption:[
            {answerText:"انيسات",isCorrecte:false},
            {answerText:"انسة",isCorrecte:false},
            {answerText:"نساء",isCorrecte:true},
            {answerText:"اناس",isCorrecte:false},
        ],
    },
    {
        qText:"من هو مؤذن الرسول ؟",
        aOption:[
            {answerText:"حمزة",isCorrecte:false},
            {answerText:"يوسف",isCorrecte:false},
            {answerText:"بلال",isCorrecte:true},
            {answerText:"زكرياء",isCorrecte:false},
        ],
    },
    {
        qText:"ما هو اسم الحيوان المحرم أكله ؟",
        aOption:[
            {answerText:"الغزال",isCorrecte:false},
            {answerText:"الثعلب",isCorrecte:false},
            {answerText:"الخنزير",isCorrecte:true},
            {answerText:"القنفد",isCorrecte:false},
        ],
    },
    {
        qText:" دولة يطلق عليها بلد المليون شهيد ؟",
        aOption:[
            {answerText:"مصر",isCorrecte:false},
            {answerText:"تونس",isCorrecte:false},
            {answerText:"الجزائر",isCorrecte:true},
            {answerText:"ليبيا",isCorrecte:false},
        ],
    },
    {
        qText:"من الذي قاد المسلمين في معركة عين جالوت ؟",
        aOption:[
            {answerText:"عيسى بن مريم",isCorrecte:false},
            {answerText:"عمر بن خطاب",isCorrecte:false},
            {answerText:"سيف الدين قطز",isCorrecte:true},
            {answerText:"عثمان بن عفان",isCorrecte:false},
        ],
    },
    {
        qText:"ماهي دولة الاوروبية التي تقع في وسط البحر الابيض المتوسط قرب تركيا",
        aOption:[
            {answerText:"مالطا",isCorrecte:false},
            {answerText:"جوهنسبروغ",isCorrecte:false},
            {answerText:"قبرص",isCorrecte:true},
            {answerText:"يونان",isCorrecte:false},
        ],
    },
    {
        qText:"ماهي الدولة العربية التي تطل على البحر الابيض المتوسط و الاطلسي",
        aOption:[
            {answerText:"الجزائر",isCorrecte:false},
            {answerText:"موريتانيا",isCorrecte:false},
            {answerText:"المغرب",isCorrecte:true},
            {answerText:"تونس",isCorrecte:false},
        ],
    },
    {
        qText:"ماهي اكبر دولة عربية من حيث مساحة",
        aOption:[
            {answerText:"الجزائر",isCorrecte:false},
            {answerText:"السودان",isCorrecte:false},
            {answerText:"السعودية",isCorrecte:true},
            {answerText:"المغرب",isCorrecte:false},
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
       quiz.innerHTML = `<h1 style="font-size:32px;">النتيجة هي ${score * 1}/${question.length * 1}</h1>
       <h2 style="margin-bottom:40px;font-size:32px;">${score * 1 >= 10 ? "نجحت":"فشلت" }</h2>
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




