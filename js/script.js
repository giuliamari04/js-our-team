"use strict";

const team = [
  {
    name:'Wayne Barnett',
    role:'Founder & CEO',	        
    picture: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: 'Angela Caroll',
    role:'Chief Editor',
    picture:"angela-caroll-chief-editor.jpg",
  },
  {
    name:' Walter Gordon ',
    role:'	Office Manager ',
    picture:"walter-gordon-office-manager.jpg ",        
  },
  {
    name:'Angela Lopez ',
    role:'Social Media Manager ',
    picture:"angela-lopez-social-media-manager.jpg ", 		
  },
  {
    name:' Scott Estrada ',
    role:'	Developer ',
    picture:"scott-estrada-developer.jpg ",
   	            
  },
  {
    name:' Barbara Ramos ',
    role:'Graphic Designer ',
    picture:"barbara-ramos-graphic-designer.jpg ",	    
  },
   
];

const rowEl = document.querySelector(".row");
console.log(rowEl);



for (let i = 0; i < team.length; i++) {
 printCol(team[i]);
 console.log(team[i]);
}



function printCol(team) {
  const col = document.createElement("div");
  col.classList.add("col-4");
  const template = `
        <div class="card text-start m-3 border-0">
          <img class="card-img-top" src="img/${team.picture}" alt="foto team">
          <div class="card-body text-center">
            <h5 class="card-title">${team.name}</h5>
            <p class="card-text">${team.role}</p>
            </div>
        </div>
    `;
    col.innerHTML = template;

    rowEl.append(col);
}

const btn = document.querySelector('button');
btn.addEventListener('click',()=> {
  const newteam = {
    name: document.getElementById('name').value,
    role: document.getElementById('role').value,
    picture: document.getElementById('picture').value,
  }

  console.log(newteam);
  console.log(newteam);
  team.push(newteam);
  printCol(newteam);
  reset();
});

function reset(){
    document.getElementById('name').value = '';
    document.getElementById('role').value = '';
    document.getElementById('picture').value= '';
}


