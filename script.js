var weatherContainer=document.getElementById('weatherContainer')

//https://api.covid19api.com/dayone/country/india

async function getWeatherData(){
  var countryName=document.getElementById('cityName').value
  console.log(countryName)
    let data=await fetch(`https://api.covid19api.com/dayone/country/${countryName}`)
    let res=await data.json()
    console.log(res)


weatherContainer.innerHTML=`
<div class="row g-0">
            <div class="col-md-4">
                <img src="covid.jpg" class="img-fluid rounded-start image" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Covid Update: ${res[0].Country}</h5>
                    <p class="card-text m-0"><small class="text-muted">Confirmed Cases: ${res[0].Confirmed}</small></p>
                    <p class="card-text m-0"><small class="text-muted">Recovered cases: ${res[0].Recovered}</small></p>
                    <p class="card-text m-0"><small class="text-muted">ContryCode: ${res[0].CountryCode}</small></p>
                   
                </div>
            </div>
        </div>
`
}
