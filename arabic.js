let next = document.querySelector(".next");
let question = [
   {
       qText:"ما مرتبةاللغة العربية بين لغات العالم؟",
       aOption:[
            {answerText:"1",isCorrecte:false},
            {answerText:"4",isCorrecte:true},
            {answerText:"2",isCorrecte:false},
            {answerText:"3",isCorrecte:false},
       ],
   },
   {
      qText:"مامعنى كلمة فرعون في اللغة العربية ؟",
      aOption:[
            {answerText:"البيت الصغير",isCorrecte:false},
            {answerText:"البيت الاسود",isCorrecte:false},
            {answerText:"البيت الابيض",isCorrecte:false},
            {answerText:"البيت الكبير",isCorrecte:true},
      ],
   },
   {
       qText:"     مامعنى كلمة (دكتور )",
       aOption:[
           {answerText:"معلم",isCorrecte:true},
           {answerText:"صحفي",isCorrecte:false},
           {answerText:"طبيب",isCorrecte:false},
           {answerText:"طائر",isCorrecte:false},
       ],
   },
   {
       qText:"   ماذا يطلق على مجموعة الخيل؟",
       aOption:[
           {answerText:"مشاة",isCorrecte:false},
           {answerText:"رعيل",isCorrecte:true},
           {answerText:"رعاة",isCorrecte:false},
           {answerText:"رحيل",isCorrecte:false},
       ],
   },
   {
       qText:" ماذا تعني كلمة العراق؟",
       aOption:[
           {answerText:"شاطيء الماء",isCorrecte:true},
           {answerText:"البحر الميت",isCorrecte:false},
           {answerText:"شاطيء الازرق",isCorrecte:false},
           {answerText:" شاطيء الابيض",isCorrecte:false},
       ],
   },
   {
    qText:"ما معنى اسم دولة أسبانيا؟",
    aOption:[
        {answerText:"بلد ديوك",isCorrecte:false},
        {answerText:"بلد الأرانب",isCorrecte:true},
        {answerText:"بلد فئران",isCorrecte:false},
        {answerText:"بلد سلحفاة",isCorrecte:false},
    ],
},
{
    qText:"مَن صاحب أقدم كتاب في علم النحو ؟",
    aOption:[
        {answerText:"لحلو ",isCorrecte:false},
        {answerText:"سيبويه",isCorrecte:true},
        {answerText:" نجيب محفوض",isCorrecte:false},
        {answerText:"عبد الكريم خطابي",isCorrecte:false},
    ],
},
{
    qText:"ماهو أقدم خطوط اللغه العربية؟",
    aOption:[
        {answerText:" الخط العربي",isCorrecte:false},
        {answerText:"الخط الاسلامي",isCorrecte:false},
        {answerText:" الخط الكوفي",isCorrecte:true},
        {answerText:"الخط الاصيل",isCorrecte:false},
    ],
},
{
    qText:" متى عرف العرب الكتابة؟",
    aOption:[
        {answerText:" منذ القرن السادس الميلادي",isCorrecte:false},
        {answerText:"منذ القرن الخامس الميلادي",isCorrecte:false},
        {answerText:" منذ القرن الرابع الميلادي",isCorrecte:false},
        {answerText:"منذ القرن الثالث الميلادي",isCorrecte:true},
    ],
},
{
    qText:" كم معنى ل “من” ؟",
    aOption:[
        {answerText:3,isCorrecte:false},
        {answerText:5,isCorrecte:true},
        {answerText:4,isCorrecte:false},
        {answerText:6,isCorrecte:false},
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




