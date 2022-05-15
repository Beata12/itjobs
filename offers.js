const dayOffers = document.querySelector(".bestday-job-offers");
const searchInputElement = document.querySelector(".text-box");

searchInputElement.addEventListener("keyup", search); // callback function

function search(event) {
	const value = event.target.value;

	const filteredOffers = [];

	for (let i = 0; i < offers.length; i++) {
		// .includes(value)
		if (offers[i].name.includes(value)) {
			filteredOffers.push(offers[i]);
		}
	}

	render(filteredOffers);
}

// .sort [1, 6, 8, 3]
const offers = [
	{
		name: "Front-end React Engineer",
		salary: "5000 - 8000 PLN",
		form: "zdalna",
		logo: "https://img.redro.pl/obrazy/kostka-logo-firmy-abstrakcyjne-logo-firmy-700-143179253.jpg",
	},
	{
		name: "Remote Project Manager",
		salary: "5000 - 8000 PLN",
		form: "zdalna",
		logo: "https://pesi.pl/img/offers/projektowanie-logo-1.png",
	},
	{
		name: "Machine Learning Engineer",
		salary: "5000 - 8000 PLN",
		form: "zdalna",
		logo: "https://static.oferteo.pl/images/portfolio/1601883/orig/376_znak.png",
	},
	{
		name: "Scala (Java) Debeloper",
		salary: "5000 - 8000 PLN",
		form: "zdalna",
		logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKWTi3mAzfGVL7noHN1rhR64bl4RGTrEOc70R7YjuFTHOnKQI1oh7kh2b9YG0ieoV4RSk&usqp=CAU",
	},
	{
		name: "Scrum Master",
		salary: "5000 - 8000 PLN",
		form: "zdalna",
		logo: "https://crello-wordpress.s3.eu-west-1.amazonaws.com/create/wp-content/uploads/2020/04/941d9d71-0e99-42f7-8b41-673cac7d1755_10246-546x546.jpg",
	},
];

const backendOffers = [
	{
		name: "Senior Ruby on Rails Developer",
		salary: "5000 - 8000 PLN",
		form: "zdalna",
		logo: "https://img.redro.pl/obrazy/kostka-logo-firmy-abstrakcyjne-logo-firmy-700-143179253.jpg",
	},
	{
		name: "Ruby on Rails Developer",
		salary: "5000 - 8000 PLN",
		form: "zdalna",
		logo: "https://static.oferteo.pl/images/portfolio/1601883/orig/376_znak.png",
	},
	{
		name: "Remote Python Developer",
		salary: "5000 - 8000 PLN",
		form: "zdalna",
		logo: "https://pesi.pl/img/offers/projektowanie-logo-1.png",
	},
	{
		name: "Senior Java Engineer, Horizon Cloud",
		salary: "5000 - 8000 PLN",
		form: "zdalna",
		logo: "https://crello-wordpress.s3.eu-west-1.amazonaws.com/create/wp-content/uploads/2020/04/941d9d71-0e99-42f7-8b41-673cac7d1755_10246-546x546.jpg",
	},
	{
		name: "Java Developer",
		salary: "5000 - 8000 PLN",
		form: "zdalna",
		logo: "https://www.grupapns.pl/wp-content/uploads/2020/04/projektowanie-logo-dla-firm-1.png",
	},
];

const frontendOffers = [
	{
		name: "Senior JavaScript Engineer",
		salary: "5000 - 8000 PLN",
		form: "zdalna",
		logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKWTi3mAzfGVL7noHN1rhR64bl4RGTrEOc70R7YjuFTHOnKQI1oh7kh2b9YG0ieoV4RSk&usqp=CAU",
	},
	{
		name: "Mid Frontend Developer",
		salary: "5000 - 8000 PLN",
		form: "zdalna",
		logo: "https://img.redro.pl/obrazy/kostka-logo-firmy-abstrakcyjne-logo-firmy-700-143179253.jpg",
	},
	{
		name: "JavaScript Engineer",
		salary: "5000 - 8000 PLN",
		form: "zdalna",
		logo: "https://pesi.pl/img/offers/projektowanie-logo-1.png",
	},
	{
		name: "React Developer",
		salary: "5000 - 8000 PLN",
		form: "zdalna",
		logo: "https://crello-wordpress.s3.eu-west-1.amazonaws.com/create/wp-content/uploads/2020/04/941d9d71-0e99-42f7-8b41-673cac7d1755_10246-546x546.jpg",
	},
	{
		name: "Frontend Developer",
		salary: "5000 - 8000 PLN",
		form: "zdalna",
		logo: "https://static.oferteo.pl/images/portfolio/1601883/orig/376_znak.png",
	},
];

const fullStackOffers = [
	{
		name: "Fullstack .Net Engineer",
		salary: "5000 - 8000 PLN",
		form: "zdalna",
		logo: "https://img.redro.pl/obrazy/kostka-logo-firmy-abstrakcyjne-logo-firmy-700-143179253.jpg",
	},
	{
		name: "Senior Web Developer",
		salary: "5000 - 8000 PLN",
		form: "zdalna",
		logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKWTi3mAzfGVL7noHN1rhR64bl4RGTrEOc70R7YjuFTHOnKQI1oh7kh2b9YG0ieoV4RSk&usqp=CAU",
	},
	{
		name: "Junior Web Developer",
		salary: "5000 - 8000 PLN",
		form: "zdalna",
		logo: "https://pesi.pl/img/offers/projektowanie-logo-1.png",
	},
	{
		name: "Fullstack Developer",
		salary: "5000 - 8000 PLN",
		form: "zdalna",
		logo: "https://static.oferteo.pl/images/portfolio/1601883/orig/376_znak.png",
	},
	{
		name: "Junior Web Developer",
		salary: "5000 - 8000 PLN",
		form: "zdalna",
		logo: "https://www.grupapns.pl/wp-content/uploads/2020/04/projektowanie-logo-dla-firm-1.png",
	},
];

function render(offersToRender) {
	dayOffers.innerHTML = "";

	for (let i = 0; i < offersToRender.length; i++) {
		const obj = offersToRender[i];

		const trElement = document.createElement("tr");
		trElement.classList.add("job-offer");

		dayOffers.appendChild(trElement);

		const tdImgElement = document.createElement("td");
		trElement.appendChild(tdImgElement);

		const imgElement = document.createElement("img");
		imgElement.classList.add("company-img");
		imgElement.setAttribute("src", obj.logo);
		tdImgElement.appendChild(imgElement);

		const tdNameElement = document.createElement("td");
		tdNameElement.classList.add("column-name");
		trElement.appendChild(tdNameElement);
		tdNameElement.textContent = obj.name;

		const tdSalaryElement = document.createElement("td");
		tdSalaryElement.classList.add("column-salary");
		trElement.appendChild(tdSalaryElement);
		tdSalaryElement.textContent = obj.salary;

		const tdFormElement = document.createElement("td");
		tdFormElement.classList.add("column");
		trElement.appendChild(tdFormElement);
		tdFormElement.textContent = obj.form;

		const tdLikeElement = document.createElement("td");
		tdLikeElement.classList.add("column-like");
		trElement.appendChild(tdLikeElement);
		tdLikeElement.textContent = "🤍";
	}
}

render(offers);
render(backendOffers);
render(frontendOffers);
render(fullStackOffers);
