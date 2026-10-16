const questions = [
{q:"What is interaction?",o:["Communication between user and system","A type of computer hardware","A programming language","A database table"],a:0,e:"The PowerPoint introduces interaction as communication between the user and the system."},
{q:"What does domain mean in interaction?",o:["The user's final result","The area of work under study","A computer's operating system","The system's output"],a:1,e:"Example from the PowerPoint: graphic design."},
{q:"What is a goal?",o:["A series of interface errors","A computer command","What you want to achieve","A physical characteristic"],a:2,e:"Example: create a solid red triangle."},
{q:"What is a task?",o:["The area of work under study","The final result only","The user's motivation","How you go about achieving a goal through actions"],a:3,e:"A task involves the operations or actions used to achieve a goal."},
{q:"Whose view does Norman's model concentrate on?",o:["The user's view","The programmer's view","The manager's view","The manufacturer's view"],a:0,e:"The PowerPoint says Norman's model concentrates on the user's view of the interface."},
{q:"How many stages are in Norman's model?",o:["Four","Seven","Three","Ten"],a:1,e:"Norman's model contains seven stages."},
{q:"Which is the first stage of Norman's model?",o:["Executes action","Perceives system state","User establishes the goal","Evaluates system state"],a:2,e:"The process begins when the user establishes a goal."},
{q:"Which stage follows specifying actions at the interface?",o:["Evaluates system state","Interprets system state","Establishes the goal","Executes action"],a:3,e:"After specifying actions, the user executes the action."},
{q:"What is the Gulf of Execution?",o:["A mismatch between the user's formulation of actions and the actions allowed by the system","A mismatch between screen colors","A problem with computer hardware","A difference between two databases"],a:0,e:"It occurs when the user's formulation of actions does not match the actions allowed by the system."},
{q:"What is the Gulf of Evaluation?",o:["A user cannot type a command","A mismatch between expected and actually presented system states","A system has no menu","A user forgets a password"],a:1,e:"It concerns the difference between the user's expectations and the system's actual presentation of its state."},
{q:"Who developed the interaction framework that extends Norman's model?",o:["Alan Turing and Charles Babbage","Abowd and Beale","Bill Gates and Steve Jobs","Tim Berners-Lee and Donald Knuth"],a:1,e:"The PowerPoint identifies the Abowd and Beale framework as an extension of Norman's model."},
{q:"How many parts does the Abowd and Beale framework have?",o:["Two","Three","Four","Seven"],a:2,e:"Its four parts are user, input, system, and output."},
{q:"According to Abowd and Beale, each part has its own unique what?",o:["Database","Screen size","Operating system","Language"],a:3,e:"Interaction involves translation between the languages of the four parts."},
{q:"What happens to user intentions first in the Abowd and Beale framework?",o:["They are translated into actions at the interface","They are immediately deleted","They become system output","They are converted into database tables"],a:0,e:"User intentions are first translated into interface actions."},
{q:"What is ergonomics?",o:["The study of programming languages","The study of physical characteristics of interaction","The study of databases","The study of network security"],a:1,e:"The PowerPoint describes ergonomics as the study of physical characteristics of interaction."},
{q:"Which is an example of ergonomics?",o:["Writing Java code","Creating a database query","Arranging controls according to function or frequency of use","Installing an operating system"],a:2,e:"Control and display arrangement is one example of ergonomics."},
{q:"Why does context matter when designing interfaces?",o:["All interfaces must look identical","Only office workers use computers","Context changes the programming language","Office and industrial environments have different needs"],a:3,e:"The PowerPoint contrasts office and industrial interfaces in data type, rate of change, and environment."},
{q:"What is a glass interface in the PowerPoint?",o:["A screen-based interface that replaces traditional physical dials and knobs","A transparent computer case","A type of database","A paper-based interface"],a:0,e:"The slides describe industrial interfaces moving from traditional dials and knobs to screens and keypads."},
{q:"What is indirect manipulation in an industrial setting?",o:["Typing a document","Interacting with the real world through an interface","Using a mouse without a screen","Writing a program without testing"],a:1,e:"The user interacts with the real world through the interface."},
{q:"Which issue is associated with indirect manipulation?",o:["Font selection only","Screen resolution only","Feedback and delays","Keyboard color"],a:2,e:"The PowerPoint lists feedback and delays as issues."},
{q:"What is a command-line interface?",o:["A screen filled with pictures only","A way to express instructions directly to the computer","A paper form","A physical control panel"],a:1,e:"Commands may use function keys, characters, abbreviations, or whole words."},
{q:"Which users generally benefit more from command-line interfaces?",o:["Users who never use computers","Only young users","Expert users","Users who cannot read"],a:2,e:"The PowerPoint says command-line interfaces are better for expert users than novices."},
{q:"What is a menu?",o:["A set of options displayed on the screen","A type of computer memory","A hardware cable","A programming variable"],a:0,e:"Visible options support recognition, reducing the need to remember commands."},
{q:"What is one problem with natural-language interfaces?",o:["They cannot display text","They require a physical mouse","They only work with spreadsheets","Natural language can be vague and ambiguous"],a:3,e:"The slides note that natural language is familiar but difficult to handle accurately."},
{q:"What is a question-and-answer interface?",o:["An interface used only by experts to write code","An interface that guides the user through a series of questions","A menu with no options","A 3D workspace"],a:1,e:"It can suit novice users, although functionality may be restricted."},
{q:"What is SQL used for in the PowerPoint's discussion of query languages?",o:["Drawing icons","Changing screen brightness","Retrieving information from a database","Controlling a mouse"],a:2,e:"Query languages such as SQL are used to retrieve database information."},
{q:"What are form-fills primarily used for?",o:["Data entry or data retrieval","Creating 3D games only","Playing audio","Controlling industrial machinery exclusively"],a:0,e:"A form resembles a paper form, with data entered in relevant places."},
{q:"What does a spreadsheet's grid of cells contain?",o:["Only pictures","Only menu options","Only computer commands","Values or formulas"],a:3,e:"Formulas can use values from other cells."},
{q:"What does WIMP stand for?",o:["Web, Internet, Media, Programs","Windows, Icons, Menus, Pointers","Windows, Input, Memory, Processing","Widgets, Images, Mouse, Pages"],a:1,e:"WIMP stands for Windows, Icons, Menus, and Pointers."},
{q:"Which interface style is commonly used in web browsers and multimedia?",o:["Command line only","Question-and-answer only","Point and click","Form-fill only"],a:2,e:"Point-and-click interfaces let users select icons, text links, or locations on a map."},
{q:"What is a window in a WIMP interface?",o:["A type of programming language","A small picture representing an object","An area of the screen that behaves as if independent","A physical computer switch"],a:2,e:"Windows can contain text or graphics and can be moved, resized, overlapped, or tiled."},
{q:"What is an icon?",o:["A small picture representing an object or action","A database query","A keyboard shortcut only","A type of error"],a:0,e:"Icons often represent an object or action in the interface."},
{q:"What is the primary role of a pointer?",o:["Store database information","Compile programs","Display a warning message","Point to and select interface elements"],a:3,e:"Pointers work with devices such as mice, trackpads, and trackballs."},
{q:"What is a cascading menu?",o:["A menu that is always circular","A hierarchical menu where a selection opens another menu","A menu that cannot be selected","A menu used only for typing"],a:1,e:"Cascading menus create a hierarchy of options."},
{q:"What is the difference between radio buttons and check boxes?",o:["They are always identical","Radio buttons allow unlimited choices only","Radio buttons are mutually exclusive; check boxes allow non-exclusive choices","Check boxes cannot be selected"],a:2,e:"Radio buttons normally allow one selection from a group; check boxes can allow several."},
{q:"What is the purpose of a toolbar?",o:["Provide fast access to common actions","Replace all system output","Store all user files","Prevent all user errors"],a:0,e:"Toolbars display icons for common actions and are often customizable."},
{q:"What is a dialogue box?",o:["A permanent desktop background","A kind of database","A spreadsheet formula","A pop-up information window that informs the user or requests information"],a:3,e:"For example, a dialogue box may ask for a filename and location when saving."},
{q:"In the PowerPoint, who usually has the initiative in a traditional question-and-answer interface?",o:["The user only","The computer","The keyboard","The network"],a:1,e:"The slides contrast the computer-led traditional question-and-answer interface with the user-led WIMP interface."},
{q:"What is a modal dialogue box useful for?",o:["Making every menu circular","Removing all user choices","Errors or essential steps, although it should be used carefully","Replacing every window"],a:2,e:"Modal dialogue boxes require attention before the user can continue."},
{q:"According to the PowerPoint, what makes people use a system?",o:["Perceived value that exceeds its cost","The number of icons alone","The most complicated interface","The largest number of menus"],a:0,e:"The slides say people generally use something if it has perceived value and that value exceeds its cost."}
];
let activeQuestions = [];
function shuffleArray(array){
  const copy = [...array];
  for(let i=copy.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [copy[i],copy[j]]=[copy[j],copy[i]];
  }
  return copy;
}
const quiz = document.getElementById('quiz');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const result = document.getElementById('result');
function render(){
  quiz.innerHTML = '';
  // Every new attempt randomizes question order and answer-option order.
  activeQuestions = shuffleArray(questions).map(item=>{
    const shuffledOptions = shuffleArray(item.o.map((text,index)=>({text,correct:index===item.a})));
    return {...item,o:shuffledOptions.map(option=>option.text),a:shuffledOptions.findIndex(option=>option.correct)};
  });
  activeQuestions.forEach((item,i)=>{
    const card = document.createElement('section');
    card.className='question';
    card.id='q'+i;
    const top=document.createElement('div');top.className='qtop';
    const number=document.createElement('span');number.className='number';number.textContent=String(i+1).padStart(2,'0');
    const content=document.createElement('div');content.style.flex='1';
    const title=document.createElement('h2');title.textContent=item.q;
    const options=document.createElement('div');options.className='options';
    item.o.forEach((opt,j)=>{
      const label=document.createElement('label');label.className='option';label.dataset.choice=j;
      const input=document.createElement('input');input.type='radio';input.name='question'+i;input.value=j;
      input.addEventListener('change',updateProgress);
      const text=document.createElement('span');text.textContent=String.fromCharCode(65+j)+'. '+opt;
      label.append(input,text);options.append(label);
    });
    const exp=document.createElement('div');exp.className='explanation';exp.textContent='Explanation: '+item.e;
    content.append(title,options,exp);top.append(number,content);card.append(top);quiz.append(card);
  });
  updateProgress();
}
function updateProgress(){
  const count=activeQuestions.filter((_,i)=>document.querySelector('input[name="question'+i+'"]:checked')).length;
  progressText.textContent=count+' of '+activeQuestions.length+' answered';
  progressBar.style.width=(count/activeQuestions.length*100)+'%';
}
function checkAnswers(){
  let score=0;
  activeQuestions.forEach((item,i)=>{
    const card=document.getElementById('q'+i);
    const chosen=card.querySelector('input:checked');
    card.classList.add('revealed');
    card.querySelectorAll('.option').forEach(label=>{
      const n=Number(label.dataset.choice);
      if(n===item.a)label.classList.add('correct');
      if(chosen && n===Number(chosen.value) && n!==item.a)label.classList.add('wrong');
    });
    if(chosen && Number(chosen.value)===item.a)score++;
  });
  const unanswered=activeQuestions.filter((_,i)=>!document.querySelector('input[name="question'+i+'"]:checked')).length;
  document.getElementById('scoreTitle').textContent='Your score: '+score+' / '+activeQuestions.length;
  document.getElementById('scoreDetail').textContent='You answered '+(activeQuestions.length-unanswered)+' of '+activeQuestions.length+' questions. '+(unanswered?unanswered+' question(s) left unanswered. ':'')+'Correct answers are highlighted in green.';
  document.getElementById('feedback').textContent=score>=36?'Excellent work!':score>=28?'Good job. Review the explanations for missed questions.': 'Keep practicing. Read the explanations and try again.';
  result.style.display='block';
  result.scrollIntoView({behavior:'smooth',block:'start'});
}
document.getElementById('checkTop').addEventListener('click',checkAnswers);
document.getElementById('retry').addEventListener('click',()=>{
  render();result.style.display='none';window.scrollTo({top:0,behavior:'smooth'});
});
document.getElementById('showAll').addEventListener('click',()=>{
  document.querySelectorAll('.question').forEach(c=>c.classList.add('revealed'));
});
render();
