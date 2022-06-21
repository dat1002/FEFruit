var getTopFruitByDate = "http://localhost:8080/statistical/fruit-asc";


function start() {
    getTopFruit(function (tf) {
    //   console.log( renderTopFruit(dt));
    //   console.log(dt);
      renderTopFruit(tf);
      
    });
  }
  start();
  // get-all
  
  function getTopFruit(callback){
    var options = {
      method: 'GET',
      headers: {'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                },
    };
    fetch(getTopFruitByDate+"?start=2022-01-01&end=2022-12-31",options)
    .then(function(response){
        console.log(response);
      return response.json();
    })
    .then(callback);
  }
  
  function  renderTopFruit(tf){
    var dataX = new Array();
    var dataY = tf;
    console.log("dataY: ",dataY);
    dataX = tf;
    console.log(dataX[1]);
    console.log(tf);
      return `
      <h3>${tf}</h3>
        `;
  }
  