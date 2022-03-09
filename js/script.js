const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

for (let i = 0; i < team.length; i++) {
  const container=document.querySelector(".row");
  const newDiv = document.createElement("div");
  const newImg= document.createElement("img");
  const newText=document.createElement("div");
  newImg.src=`img/${team[i].image}`;
  newImg.alt=`photo of ${team[i].name}`;
  newImg.classList.add("img-fluid", "rounded-3");
  newDiv.classList.add("col", "p-5");
  newText.classList.add("bg-secondary","rounded-3","mt-1", "text-capitalize","px-1", "text")
  container.appendChild(newDiv);
  newDiv.appendChild(newImg);
  newDiv.appendChild(newText);

  console.log(newImg);

  for(let key in team[i]){
    console.log(key , ":",team[i][key])

    newText.innerHTML+=` ${key} : 
    ${team[i][key]}<br>`;
  }
}
