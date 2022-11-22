

fetch('https://api.covid19api.com/summary').then((data)=>{
  return data.json();

}).then((completedData)=>{
  console.log(completedData)
  let data1=""
  completedData.map((el)=>{
  let data1=`        <div>
  <h1>${el.NewConfirmed}</h1>
  <p>${el.NewDeaths}</p>
  <p>${el.TotalDeaths}</p>
  <p>${el.NewRecovered}</p>
</div>`
    
  });
  document.getElementsByClassName('table table-dark table-hover').innerHTML=data1
  console.log(data1)
}).catch=(e)=>{
  console.log(e)
}


// fetch('https://api.covid19api.com/summary').then((data)=>{
//   return data.json();
//   // console.log(data)
// }).then((completedData)=>{
//   console.log(completedData.Global);
//  let data1="";
//      completedData.map((ele)=>{
//       return(
//         data1+=`<div>${ele.Global}</div>`
//       )
//      })
//  document.getElementById("cards").innerHTML=data1
// }).catch=(err)=>{
//   console.log(err)
// }





// fetch('https://api.covid19api.com/summary').then((data)=>{
// //    console.log(data)
// return data.json();
// }).then((completedData)=>{
//     let data1="";
//     completedData.map((values)=>{
//         data1+=` <thead>
//         <tr>
//           <th scope="col">#</th>
//           <th scope="col">Total Cases</th>
//           <th scope="col">Total Deaths</th>
//           <th scope="col">Total Recovered</th>
//         </tr>
//       </thead>
//       <tbody class="table-group-divider">
//         <tr id="data">
            
//         </tr>
//       </tbody>`
//     });
//     document.getElementsByClassName('table table-dark table-hover'). innerHtml=data1
// }).catch=(err)=>{console.log(err)}