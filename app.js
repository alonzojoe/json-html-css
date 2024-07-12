const fetchData = async () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const content = document.getElementById("content");

      data.categories.forEach((category) => {
        console.log(category);
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");

        const categoryTitle = document.createElement("h2");

        const totalSpan = document.createElement("span");
        totalSpan.classList.add("category-total");
        totalSpan.textContent = category.total;

        const typeText = document.createTextNode(` ${category.type}`);

        categoryTitle.appendChild(totalSpan);
        categoryTitle.appendChild(typeText);

        categoryDiv.appendChild(categoryTitle);

        const countryList = document.createElement("div");
        countryList.classList.add("country-list");

        category.countries.forEach((country) => {
          const countryItem1 = document.createElement("div");
          countryItem1.classList.add("country-item");

          const countryName1 = document.createElement("div");
          countryName1.classList.add("country-name");
          countryName1.textContent = country.name;

          const countryValue1 = document.createElement("div");
          countryValue1.classList.add("country-value");
          countryValue1.textContent = country.value;

          countryItem1.appendChild(countryName1);
          countryItem1.appendChild(countryValue1);

          const countryItem2 = document.createElement("div");
          countryItem2.classList.add("country-item");

          const countryName2 = document.createElement("div");
          countryName2.classList.add("country-name");
          countryName2.textContent = country.person;

          const countryValue2 = document.createElement("div");
          countryValue2.classList.add("country-value");
          countryValue2.textContent = country.personValue;

          countryItem2.appendChild(countryName2);
          countryItem2.appendChild(countryValue2);

          countryList.appendChild(countryItem1);
          countryList.appendChild(countryItem2);
        });

        categoryDiv.appendChild(countryList);
        content.appendChild(categoryDiv);
      });
    })
    .catch((error) => console.error("Error loading JSON data:", error));
};

fetchData();
