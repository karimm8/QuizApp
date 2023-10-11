let next = document.querySelector(".next");
let question = [
   {
       qText:"كم عدد ايام شهر غشت",
       aOption:[
            {answerText:30,isCorrecte:false},
            {answerText:31,isCorrecte:true},
            {answerText:29,isCorrecte:false},
            {answerText:28,isCorrecte:false},
       ],
   },
   {
    qText:"ماهو قياس كل زاوية من زوايا مثلت متساوي الاضلاع",
    aOption:[
         {answerText:"90°",isCorrecte:false},
         {answerText:"60°",isCorrecte:true},
         {answerText:"100°",isCorrecte:false},
         {answerText:"180°",isCorrecte:false},
    ],
},
{
    qText:"ماهو عدد ميليمترات موجودة في كيلومتر واحد",
    aOption:[
         {answerText:10000000,isCorrecte:false},
         {answerText:1000000,isCorrecte:true},
         {answerText:100000,isCorrecte:false},
         {answerText:10000,isCorrecte:false},
    ],
},
{
    qText:"ماهي مجموعة النقط التي تبعد بنفس المسافة عن نقطة الواحدة",
    aOption:[
         {answerText:"المربع",isCorrecte:false},
         {answerText:"الدائرة",isCorrecte:true},
         {answerText:"المثلت",isCorrecte:false},
         {answerText:"المستطيل",isCorrecte:false},
    ],
},
{
    qText:"من هو مخترع الالة الحاسبة",
    aOption:[
         {answerText:"اينشتاين",isCorrecte:false},
         {answerText:"باسكال",isCorrecte:true},
         {answerText:"ماسك",isCorrecte:false},
         {answerText:"كلومبوس",isCorrecte:false},
    ],
},
{
    qText:"ماهو عدد ثواني موجود في اليوم",
    aOption:[
         {answerText:86000,isCorrecte:false},
         {answerText:86400,isCorrecte:true},
         {answerText:86000,isCorrecte:false},
         {answerText:86300,isCorrecte:false},
    ],
},
{
    qText:"كم عدد ايام في السنة الكبيسة",
    aOption:[
         {answerText:368,isCorrecte:false},
         {answerText:366,isCorrecte:true},
         {answerText:367,isCorrecte:false},
         {answerText:369,isCorrecte:false},
    ],
},
{
    qText:"ماهو عدد محاورالتماثل في مربع",
    aOption:[
         {answerText:3,isCorrecte:false},
         {answerText:4,isCorrecte:true},
         {answerText:2,isCorrecte:false},
         {answerText:0,isCorrecte:false},
    ],
},
{
    qText:"من هو العالم الرياضي الذي اكتشف جدول ضرب",
    aOption:[
         {answerText:"باسكال",isCorrecte:false},
         {answerText:"فيتاغورس",isCorrecte:true},
         {answerText:"ابوجبر",isCorrecte:false},
         {answerText:"اينشتاين",isCorrecte:false},
    ],
},
{
    qText:"متى يتم الاحتفال باليوم العالمي للرياضيات",
    aOption:[
         {answerText:"14 فبراير",isCorrecte:false},
         {answerText:"14 مارس",isCorrecte:true},
         {answerText:"14 ماي",isCorrecte:false},
         {answerText:"14 يناير",isCorrecte:false},
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




