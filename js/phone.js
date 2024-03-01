const loadPhone = async(searchText, isShowALl) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones,isShowALl);
}

const displayPhones = (phones, isShowALl) =>{
    console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    //clear container 
    phoneContainer.textContent = '';
    //display show all button
    const showAllButton = document.getElementById('show-all-button');
    if(phones.length>12 && !isShowALl){
      showAllButton.classList.remove('hidden')
    }else{
      showAllButton.classList.add('hidden')
    }
    //display first 12 phones & not show all
    if(!isShowALl){
      phones = phones.slice(0,12)
    }
    
    //support session
    if(phones.length===0){
      const notFound = document.getElementById('not-found');
      notFound.innerText= 'Opps! Not Found'
      loadingSpinner(false)
      return
    }
    const notFound = document.getElementById('not-found');
    notFound.innerText= ''
    //support session

    phones.forEach(phones => {
        // console.log(phones);
        const div = document.createElement('div');
        div.classList = `card shadow-xl shadow-yellow-300 border-2 border-yellow-100`;
        div.innerHTML = `
        <figure><img class="mt-5 bg-[#0d6efd0d] p-8 rounded-xl" src="${phones.image}" alt="Shoes" /></figure>
        <div class="card-body text-center">
          <h2 class="card-title mx-auto">${phones.phone_name}</h2>
          <p>${phones.slug}</p>
          <div class="card-actions justify-center">
            <button onclick="handleShowDetails('${phones.slug}')" class="btn bg-[#0D6EFD] text-[#FFFFFF]">Show Details</button>
          </div>
        </div>
        `
        phoneContainer.appendChild(div);
    });
    //hide loading spinner
    loadingSpinner(false)
}

//handle modal
const handleShowDetails = async (id) =>{
  // console.log('clicked', id);
  //load single data
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  const data = await res.json();
  console.log(data);
  showPhoneDetails(data);
}

//show phone details
const showPhoneDetails = (phones) => {
  // const phoneDetails = document.getElementById('modal-phone-details');
  // phoneDetails.innerText = phones.data.name;
  const showDetailsContainer = document.getElementById('showDetailsContainer');
  showDetailsContainer.innerHTML = `
  <img class="mx-auto bg-[#0d6efd0d] px-[100px] py-6 rounded-xl" src="${phones.data.image}" alt="">
  <h2 class="text-2xl font-extrabold">${phones.data.name}</h2>
  <h4>Storeg: ${phones.data.mainFeatures.storage}</h4>
  <h4>Display Size: ${phones.data.mainFeatures.displaySize}</h4>
  <h4>Chipset: ${phones.data.mainFeatures.chipSet}</h4>
  <h4>Memory: ${phones.data.mainFeatures.memory}</h4>
  <h4>Slug: ${phones.data.slug}</h4>
  <h4>Release Date: ${phones.data.releaseDate}</h4>
  <h4>Brand: ${phones.data.brand}</h4>
  <h4>GPS: ${phones.data?.others?.GPS}</h4>
  `
  //display modal
  showDetailsModal.showModal()
}

//handle search
const handleSearch = (isShowALl) =>{
    loadingSpinner(true);
    const searchText = document.getElementById('search-field').value;
    // console.log(searchText);
    loadPhone(searchText, isShowALl);
}

const loadingSpinner = (isLoading) =>{
  const spinner = document.getElementById('loading-spinner');
  if(isLoading){
    spinner.classList.remove('hidden');
  }else{
    spinner.classList.add('hidden')
  }
}

//handle sow all
const handleShowAll = () => {
  handleSearch(true);
}

loadPhone('iphone')