const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// PRENDO LA CARD DA HTML
const cardEmpty = document.getElementById("card-empty");

// IMPOSTO LA FUNZIONE GENERICA CHE CREA LE CARD
 function cardCreator(member) {
  const {name, role, email, img} = member;
   return `
  <img src="${img}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">${role}</p>
                  <p class="card-text">${email}</p>
                  </div>
                  </div>
                  
   `;

 };

// FACCIO CICLO FOR CHE MI PRENDE TUTTI GLI OGGETTI NELL ARRAY

let items ="";
for (let i = 0; i < teamMembers.length; i++ ){
  const curMember = teamMembers[i];
    items += cardCreator(curMember); 
      
};
 
// invio gli elementi nelle card create

cardEmpty.innerHTML = items;








