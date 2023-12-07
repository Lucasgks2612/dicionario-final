
const modal = document.querySelector('.modal1');
const fmodal = document.querySelector('.buttonM');
const audioButton1 = document.querySelector('#audiobutton1')
const audioButton2 = document.querySelector('#audiobutton2')
const audioButton3 = document.querySelector('#audiobutton3')
const audioButton4 = document.querySelector('#audiobutton4')
const audioButton5 = document.querySelector('#audiobutton5')
const audioButton6 = document.querySelector('#audiobutton6')
const audioButton7 = document.querySelector('#audiobutton7')
const audioButton8 = document.querySelector('#audiobutton8')
const audioButton9 = document.querySelector('#audiobutton9')
const audioButton10 = document.querySelector('#audiobutton10')
const p1 = document.querySelector('#palavra1');
const p2 = document.querySelector('#palavra2');
const p3 = document.querySelector('#palavra3');
const p4 = document.querySelector('#palavra4');
const p5 = document.querySelector('#palavra5');
const p6 = document.querySelector('#palavra6');
const p7 = document.querySelector('#palavra7');
const p8 = document.querySelector('#palavra8');
const p9 = document.querySelector('#palavra9');
const p10 = document.querySelector('#palavra10');
const a1 = document.querySelector('#audio1');
const a2 = document.querySelector('#audio2');
const a3 = document.querySelector('#audio3');
const a4 = document.querySelector('#audio4');
const a5 = document.querySelector('#audio5');
const a6 = document.querySelector('#audio6');
const a7 = document.querySelector('#audio7');
const a8 = document.querySelector('#audio8');
const a9 = document.querySelector('#audio9');
const a10 = document.querySelector('#audio10');
const tmodal = document.querySelector('.tModal');
const cmodal = document.querySelector('.cModal');
const tmodal2 = document.querySelector('.tModal2');
const cmodal2 = document.querySelector('.cModal2');
const mp1 = document.querySelector('#mp1')
const mp2 = document.querySelector('#mp2')
const mp3 = document.querySelector('#mp3')
const mg1 = document.querySelector('#mg1')
const mg2 = document.querySelector('#mg2')
const mg3 = document.querySelector('#mg3')
const overlay = document.querySelector('.overlay')

p1.addEventListener('click', function () {
    modal.style.display = 'flex'
    overlay.style.display = 'flex'
    tmodal.textContent = 'Colonel'
    cmodal.textContent = 'an army officer of high rank, in particular (in the US Army, Air Force, and Marine Corps) an officer above a lieutenant colonel and below a brigadier general.'
    tmodal2.textContent = 'Coronel'
    cmodal2.textContent = 'posto superior do Exército e da Aeronáutica (hierarquicamente acima de tenente-coronel e abaixo de general de brigada, no Exército; acima de tenente-coronel-aviador e abaixo de brigadeiro do ar, na Aeronáutica).'
    mp1.textContent = 'Hey, did you know that the pronunciation of "colonel" is totally different from its spelling?'
    mg1.textContent = 'Yeah, its so confusing! I always thought it was pronounced "co-lon-el," but its actually "kernel."'
    mp2.textContent = 'Right? English can be tricky with its silent letters. By the way, have you ever wondered why its spelled that way?'
    mg2.textContent = 'Absolutely! Apparently, it has roots in Old Italian and Middle French. The evolution of words can be fascinating.'
    audioButton1.style.display = 'flex'
    audioButton2.style.display = 'none'
    audioButton3.style.display = 'none'
    audioButton4.style.display = 'none'
    audioButton5.style.display = 'none'
    audioButton6.style.display = 'none'
    audioButton7.style.display = 'none'
    audioButton8.style.display = 'none'
    audioButton9.style.display = 'none'
    audioButton10.style.display = 'none'
});

p2.addEventListener('click', function () {
    modal.style.display = 'flex'
    tmodal.textContent = 'Lieutenant'
    cmodal.textContent = 'a naval officer of a high rank, in particular a commissioned officer in the US Navy or Coast Guard ranking above lieutenant junior grade and below lieutenant commander.'
    tmodal2.textContent = 'Tenente'
    cmodal2.textContent = 'designação genérica para oficiais de Marinha subalternos e intermediários (dos postos de segundo, primeiro e capitão-tenente).'
    mp1.textContent = 'Hey, did you hear about the new lieutenant in our unit?'
    mg1.textContent = 'Yeah, Lieutenant Anderson, right? I heard hes got an impressive background.'
    mp2.textContent = 'Absolutely, Lieutenant Anderson brings a fresh perspective, and Im looking forward to working with him.'
    mg2.textContent = ' Its always good to have strong leadership. I hope Lieutenant Anderson helps us achieve our goals efficiently.'
    audioButton2.style.display = 'flex'
    audioButton1.style.display = 'none'
    audioButton3.style.display = 'none'
    audioButton4.style.display = 'none'
    audioButton5.style.display = 'none'
    audioButton6.style.display = 'none'
    audioButton7.style.display = 'none'
    audioButton8.style.display = 'none'
    audioButton9.style.display = 'none'
    audioButton10.style.display = 'none'
});

p3.addEventListener('click', function () {
    modal.style.display = 'flex'
    tmodal.textContent = 'Oath'
    cmodal.textContent = 'a solemn promise, often invoking a divine witness, regarding ones future action or behavior.'
    tmodal2.textContent = 'Juramento'
    cmodal2.textContent = 'afirmação ou promessa solene que se faz invocando como penhor de sua boa-fé um valor moral reconhecido.'
    mp1.textContent = 'Hey, have you heard about the oath ceremony happening tomorrow?'
    mg1.textContent = ' Yeah, I have. Im honored to witness my friend taking the oath of allegiance.'
    mp2.textContent = ' Its a significant moment, symbolizing commitment and loyalty to a cause or country.'
    mg2.textContent = 'Absolutely. Taking the oath is not just a formality; its a promise to uphold certain values and responsibilities.'
    audioButton3.style.display = 'flex'
    audioButton1.style.display = 'none'
    audioButton2.style.display = 'none'
    audioButton4.style.display = 'none'
    audioButton5.style.display = 'none'
    audioButton6.style.display = 'none'
    audioButton7.style.display = 'none'
    audioButton8.style.display = 'none'
    audioButton9.style.display = 'none'
    audioButton10.style.display = 'none'
});

p4.addEventListener('click', function () {
    modal.style.display = 'flex'
    tmodal.textContent = 'Cabbage'
    cmodal.textContent = 'a cultivated plant eaten as a vegetable, having thick green or purple leaves surrounding a spherical heart or head of young leaves.'
    tmodal2.textContent = 'Repolho'
    cmodal2.textContent = 'design. comum aos cultivares da couve ( Brassica oleracea ), do grupo Capitata, de folhas imbricadas, lisas ou crespas, esverdeadas, esbranquiçadas ou roxas, ricas em vitaminas, ferro e cálcio, mundialmente us. na alimentação, cruas ou cozidas, e como forragem; couve-coco, couve-repolho, couve-repolhuda.'
    mp1.textContent = 'Hey, have you ever tried coleslaw?'
    mg1.textContent = 'Yeah, I love it! Cabbage adds a nice crunch to it.'
    mp2.textContent = 'Absolutely! I heard you can make kimchi with cabbage too.'
    mg2.textContent = 'Oh, definitely! Cabbage is so versatile in different cuisines.'
    audioButton4.style.display = 'flex'
    audioButton1.style.display = 'none'
    audioButton2.style.display = 'none'
    audioButton3.style.display = 'none'
    audioButton5.style.display = 'none'
    audioButton6.style.display = 'none'
    audioButton7.style.display = 'none'
    audioButton8.style.display = 'none'
    audioButton9.style.display = 'none'
    audioButton10.style.display = 'none'
});

p5.addEventListener('click', function () {
    modal.style.display = 'flex'
    tmodal.textContent = 'Awry'
    cmodal.textContent = 'away from the appropriate, planned, or expected course; amiss.'
    tmodal2.textContent = 'Desajustado'
    cmodal2.textContent = 'que está fora da devida medida ou do grau certo de ajustamento.'
    mp1.textContent = 'Hey, I heard your plan to surprise Sarah went awry. What happened?'
    mg1.textContent = 'Yeah, it did. I wanted to organize a dinner, but the restaurant closed unexpectedly. Everything went awry from there.'
    mp2.textContent = ' Thats unfortunate. Did you manage to come up with a backup plan?'
    mg2.textContent = 'Thankfully, yes. We ended up having a cozy picnic in the park, and she loved it. So, it turned out okay despite the initial hiccups.'
    audioButton5.style.display = 'flex'
    audioButton1.style.display = 'none'
    audioButton2.style.display = 'none'
    audioButton3.style.display = 'none'
    audioButton4.style.display = 'none'
    audioButton6.style.display = 'none'
    audioButton7.style.display = 'none'
    audioButton8.style.display = 'none'
    audioButton9.style.display = 'none'
    audioButton10.style.display = 'none'
});

p6.addEventListener('click', function () {
    modal.style.display = 'flex'
    tmodal.textContent = 'Genuinely'
    cmodal.textContent = 'in a truthful way, to the fullest degree; properly.'
    tmodal2.textContent = 'Genuinamente'
    cmodal2.textContent = 'De modo genuíno ou verdadeiro; puramente; legitimamente:'
    mp1.textContent = ' Hey, have you heard about the new restaurant downtown?'
    mg1.textContent = 'Yeah, I went there last night. The food was genuinely amazing.'
    mp2.textContent = ' Really? Ive been meaning to try it. What did you order?'
    mg2.textContent = ' I had the seafood pasta, and it was genuinely the best Ive ever had.'
    audioButton6.style.display = 'flex'
    audioButton1.style.display = 'none'
    audioButton2.style.display = 'none'
    audioButton3.style.display = 'none'
    audioButton4.style.display = 'none'
    audioButton5.style.display = 'none'
    audioButton7.style.display = 'none'
    audioButton8.style.display = 'none'
    audioButton9.style.display = 'none'
    audioButton10.style.display = 'none'
});

p7.addEventListener('click', function () {
    modal.style.display = 'flex'
    tmodal.textContent = 'Hierarchy'
    cmodal.textContent = 'the clergy of the Catholic or Episcopal Church; the religious authorities noun: the hierarchy'
    tmodal2.textContent = 'Hierarquia'
    cmodal2.textContent = 'organização fundada sobre uma ordem de prioridade entre os elementos de um conjunto ou sobre relações de subordinação entre os membros de um grupo, com graus sucessivos de poderes, de situação e de responsabilidades.'
    mp1.textContent = 'Hey, have you ever thought about the importance of hierarchy in organizations?'
    mg1.textContent = 'Absolutely, it plays a crucial role in maintaining order and ensuring tasks are efficiently carried out.'
    mp2.textContent = ' I agree. A well-defined hierarchy fosters better communication and accountability among team members.'
    mg2.textContent = 'Plus, it helps in decision-making and streamlining processes for overall organizational success.'
    audioButton7.style.display = 'flex'
    audioButton1.style.display = 'none'
    audioButton2.style.display = 'none'
    audioButton3.style.display = 'none'
    audioButton4.style.display = 'none'
    audioButton5.style.display = 'none'
    audioButton6.style.display = 'none'
    audioButton8.style.display = 'none'
    audioButton9.style.display = 'none'
    audioButton10.style.display = 'none'
});

p8.addEventListener('click', function () {
    modal.style.display = 'flex'
    tmodal.textContent = 'Moisturizer'
    cmodal.textContent = 'a lotion or cream used to prevent dryness in the skin.'
    tmodal2.textContent = 'Hidrantante'
    cmodal2.textContent = 'diz-se de ou produto us. sobre a pele a fim de hidratá-la.'
    mp1.textContent = 'Hey, do you have any recommendations for a good moisturizer?'
    mg1.textContent = 'Absolutely! I swear by this new hydrating gel. It keeps my skin so soft and refreshed.'
    mp2.textContent = 'Nice! Where did you get it?'
    mg2.textContent = 'I picked it up at the beauty store downtown. They have a whole section dedicated to skincare products.'
    audioButton8.style.display = 'flex'
    audioButton1.style.display = 'none'
    audioButton2.style.display = 'none'
    audioButton3.style.display = 'none'
    audioButton4.style.display = 'none'
    audioButton5.style.display = 'none'
    audioButton6.style.display = 'none'
    audioButton7.style.display = 'none'
    audioButton9.style.display = 'none'
    audioButton10.style.display = 'none'
});

p9.addEventListener('click', function () {
    modal.style.display = 'flex'
    tmodal.textContent = 'Pseudonym'
    cmodal.textContent = 'a fictitious name, especially one used by an author.'
    tmodal2.textContent = 'Pseudónimo'
    cmodal2.textContent = 'nome adotado por autor ou responsável por uma obra (literária ou de qualquer outra natureza), que não usa o seu nome civil verdadeiro ou o seu nome consuetudinário, por modéstia ou conveniência ocasional ou permanente, com ou sem real encobrimento de sua pessoa.'
    mp1.textContent = 'Hey, have you read that new book by the author with the pseudonym Crimson Quill?'
    mg1.textContent = 'Oh, you mean the mystery novel? Yeah, I loved it! The pseudonym adds an intriguing layer of mystery to the whole experience.'
    mp2.textContent = 'I heard the author chose the pseudonym to explore a different genre without any preconceived expectations from readers.'
    mg2.textContent = 'Smart move. Sometimes a pseudonym allows writers to experiment freely without being tied to a specific writing style or genre.'
    audioButton9.style.display = 'flex'
    audioButton1.style.display = 'none'
    audioButton2.style.display = 'none'
    audioButton3.style.display = 'none'
    audioButton4.style.display = 'none'
    audioButton5.style.display = 'none'
    audioButton6.style.display = 'none'
    audioButton7.style.display = 'none'
    audioButton8.style.display = 'none'
    audioButton10.style.display = 'none'
});

p10.addEventListener('click', function () {
    modal.style.display = 'flex'
    tmodal.textContent = 'jewelry'
    cmodal.textContent = 'personal ornaments, such as necklaces, rings, or bracelets, that are typically made from or contain jewels and precious metal.'
    tmodal2.textContent = 'jóias'
    cmodal2.textContent = 'objeto de material precioso finamente trabalhado, us. como adorno.'
    mp1.textContent = ' Hey, have you seen my new jewelry?'
    mg1.textContent = 'Oh, wow! Its stunning. Where did you get it?'
    mp2.textContent = 'I found it at a local boutique downtown. They have a great selection.'
    mg2.textContent = 'Thats awesome! Ive been looking for unique jewelry pieces. Ill check out that boutique sometime.'
    audioButton10.style.display = 'flex'
    audioButton1.style.display = 'none'
    audioButton2.style.display = 'none'
    audioButton3.style.display = 'none'
    audioButton4.style.display = 'none'
    audioButton5.style.display = 'none'
    audioButton6.style.display = 'none'
    audioButton7.style.display = 'none'
    audioButton8.style.display = 'none'
    audioButton9.style.display = 'none'
});

audioButton1.addEventListener('click', function(){
    a1.play()
})

audioButton2.addEventListener('click', function(){
    a2.play()
})

audioButton3.addEventListener('click', function(){
    a3.play()
})

audioButton4.addEventListener('click', function(){
    a4.play()
})
audioButton5.addEventListener('click', function(){
    a5.play()
})

audioButton6.addEventListener('click', function(){
    a6.play()
})

audioButton7.addEventListener('click', function(){
    a7.play()
})

audioButton8.addEventListener('click', function(){
    a8.play()
})

audioButton9.addEventListener('click', function(){
    a9.play()
})

audioButton10.addEventListener('click', function(){
    a10.play()
})

fmodal.addEventListener('click', function () {
    modal.style.display = 'none'
    overlay.style.display = "none"
    mp1.textContent = ''
    mg1.textContent = ''
    mp2.textContent = ''
    mg2.textContent = ''
    audioButton1.style.display = 'none'
    audioButton2.style.display = 'none'
    audioButton3.style.display = 'none'
    audioButton4.style.display = 'none'
    audioButton5.style.display = 'none'
    audioButton6.style.display = 'none'
    audioButton7.style.display = 'none'
    audioButton8.style.display = 'none'
    audioButton9.style.display = 'none'
    audioButton10.style.display = 'none'
})