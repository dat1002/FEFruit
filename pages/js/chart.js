var getDoanhThu = "http://localhost:8080/statistical";
var dataX = new Array();
function start() {
    getDoanhThuNam(function (dt) {
      renderDoanhThuNam(dt);
    });
  }
  start();
  // get-all
  // fix cứng data phần doanh thu năm trước
  function getDoanhThuNam(callback){
    var options = {
      method: 'GET',
      headers: {'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                },
    };
    fetch(getDoanhThu,options)
    .then(function(response){
      return response.json();
    })
    .then(callback);
  }
  
  function renderDoanhThuNam(dt){
    sessionStorage.setItem('datainput',dt.result)
      dataX = dt.result;
      var tongThu = 0;
      for(var i=0; i<dataX.length; i++){
        tongThu =tongThu+ dataX[i];
      }
      console.log(tongThu);
      sessionStorage.setItem("doanhSoHT",tongThu/1000000);
      document.querySelector("#doanhSoNam").innerHTML = tongThu/1000000;
        // đồ thị theo năm
      $(function () {
        'use strict'
      
        var ticksStyle = {
          fontColor: '#495057',
          fontStyle: 'bold'
        }
      
        var mode      = 'index'
        var intersect = true
      
        var $salesChart = $('#sales-chart1')
        var salesChart  = new Chart($salesChart, {
          type   : 'bar',
          data   : {
            labels  : [ 'Tháng 1','Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10' , 'Tháng 11', 'Tháng 12'],
            datasets: [
              {
                backgroundColor: '#007bff',
                borderColor    : '#007bff',
                data           : dataX
              },
              {
                backgroundColor: '#ced4da',
                borderColor    : '#ced4da',
                data           : [0, 0, 0, 0, 0, 0, 0, 0, 0,0, 13000000,43000000]
              }
            ]
          },
          options: {
            maintainAspectRatio: false,
            tooltips           : {
              mode     : mode,
              intersect: intersect
            },
            hover              : {
              mode     : mode,
              intersect: intersect
            },
            legend             : {
              display: false
            },
            scales             : {
              yAxes: [{
                // display: false,
                gridLines: {
                  display      : true,
                  lineWidth    : '4px',
                  color        : 'rgba(0, 0, 0, .2)',
                  zeroLineColor: 'transparent'
                },
                ticks    : $.extend({
                  beginAtZero: true,
      
                  // Include a dollar sign in the ticks
                  callback: function (value, index, values) {
                    if (value >= 1000) {
                      value /= 1000000
                    
                    }
                    return value+'M'
                  }
                }, ticksStyle)
              }],
              xAxes: [{
                display  : true,
                gridLines: {
                  display: false
                },
                ticks    : ticksStyle
              }]
            }
          }
        })


      })
      return dataX = dt.result;
  }


$(function () {
    'use strict'
  
    var ticksStyle = {
      fontColor: '#495057',
      fontStyle: 'bold'
    }
  
    var mode      = 'index'
    var intersect = true
  
    var $salesChart = $('#sales-chart')
    var salesChart  = new Chart($salesChart, {
      type   : 'bar',
      data   : {
        labels  : ['Hello', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [
          {
            backgroundColor: '#007bff',
            borderColor    : '#007bff',
            data           : [13000000, 20550000, 4200000, 89550000, 34000000, 28000000, 34000000]
          },
          {
            backgroundColor: '#ced4da',
            borderColor    : '#ced4da',
            data           : [29550000, 12000000, 4200000, 13000000, 14000000, 25000000, 38900000]
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        tooltips           : {
          mode     : mode,
          intersect: intersect
        },
        hover              : {
          mode     : mode,
          intersect: intersect
        },
        legend             : {
          display: false
        },
        scales             : {
          yAxes: [{
            // display: false,
            gridLines: {
              display      : true,
              lineWidth    : '4px',
              color        : 'rgba(0, 0, 0, .2)',
              zeroLineColor: 'transparent'
            },
            ticks    : $.extend({
              beginAtZero: true,
  
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                if (value >= 1000) {
                  value /= 1000000
                 
                }
                return value+'M'
              }
            }, ticksStyle)
          }],
          xAxes: [{
            display  : true,
            gridLines: {
              display: false
            },
            ticks    : ticksStyle
          }]
        }
      }
    })


  })
  

  // đồ thị theo năm
  // $(function () {
  //   'use strict'
  
  //   var ticksStyle = {
  //     fontColor: '#495057',
  //     fontStyle: 'bold'
  //   }
  
  //   var mode      = 'index'
  //   var intersect = true
  
  //   var $salesChart = $('#sales-chart1')
  //   var salesChart  = new Chart($salesChart, {
  //     type   : 'bar',
  //     data   : {
  //       labels  : [ 'Tháng 1','Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10' , 'Tháng 11', 'Tháng 12'],
  //       datasets: [
  //         {
  //           backgroundColor: '#007bff',
  //           borderColor    : '#007bff',
  //           data           : [sessionStorage.getItem('thang1'), 20550000, 4200000, 19550000, 65550000, 0, 0, 0, 0, 0, 0, 0]
  //         },
  //         {
  //           backgroundColor: '#ced4da',
  //           borderColor    : '#ced4da',
  //           data           : [0, 0, 0, 0, 0, 0, 0, 0, 0,0, 13000000,43000000]
  //         }
  //       ]
  //     },
  //     options: {
  //       maintainAspectRatio: false,
  //       tooltips           : {
  //         mode     : mode,
  //         intersect: intersect
  //       },
  //       hover              : {
  //         mode     : mode,
  //         intersect: intersect
  //       },
  //       legend             : {
  //         display: false
  //       },
  //       scales             : {
  //         yAxes: [{
  //           // display: false,
  //           gridLines: {
  //             display      : true,
  //             lineWidth    : '4px',
  //             color        : 'rgba(0, 0, 0, .2)',
  //             zeroLineColor: 'transparent'
  //           },
  //           ticks    : $.extend({
  //             beginAtZero: true,
  
  //             // Include a dollar sign in the ticks
  //             callback: function (value, index, values) {
  //               if (value >= 1000) {
  //                 value /= 1000000
                 
  //               }
  //               return value+'M'
  //             }
  //           }, ticksStyle)
  //         }],
  //         xAxes: [{
  //           display  : true,
  //           gridLines: {
  //             display: false
  //           },
  //           ticks    : ticksStyle
  //         }]
  //       }
  //     }
  //   })


  // })
  


  $(function () {
    'use strict'
  
    var ticksStyle = {
      fontColor: '#495057',
      fontStyle: 'bold'
    }
  
    var mode      = 'index'
    var intersect = true
  
    var $salesChart = $('#sales-chart-nv')
    var salesChart  = new Chart($salesChart, {
      type   : 'bar',
      data   : {
        labels  : ['Trần Thị Mai', 'Nguyễn Thi Ngọc', 'Ngô Ngọc Sáng', 'Nguyễn Văn Đạt', 'Trần Thị Mai'],
        datasets: [
          {
            backgroundColor: '#007bff',
            borderColor    : '#007bff',
            data           : [25825000, 20450000, 8850000, 4950000, 4400000]
          },
          {
            backgroundColor: '#ced4da',
            borderColor    : '#ced4da',
            data           : [10800000, 4500000, 0, 0, 0]
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        tooltips           : {
          mode     : mode,
          intersect: intersect
        },
        hover              : {
          mode     : mode,
          intersect: intersect
        },
        legend             : {
          display: false
        },
        scales             : {
          yAxes: [{
            // display: false,
            gridLines: {
              display      : true,
              lineWidth    : '4px',
              color        : 'rgba(0, 0, 0, .2)',
              zeroLineColor: 'transparent'
            },
            ticks    : $.extend({
              beginAtZero: true,
  
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                if (value >= 1000) {
                  value /= 1000000
                 
                }
                return value+'M'
              }
            }, ticksStyle)
          }],
          xAxes: [{
            display  : true,
            gridLines: {
              display: false
            },
            ticks    : ticksStyle
          }]
        }
      }
    })


  })


  $(function () {
    'use strict'
  
    var ticksStyle = {
      fontColor: '#495057',
      fontStyle: 'bold'
    }
  
    var mode      = 'index'
    var intersect = true
  
    var $salesChart = $('#sales-chart-nv-min')
    var salesChart  = new Chart($salesChart, {
      type   : 'bar',
      data   : {
        labels  : ['Nguyễn Thị Ngọc Ánh', 'Nguyễn Thị Ánh Vy', 'Nguyễn văn A', 'Nguyễn Văn Đạt', 'Trần Thị Mai'],
        datasets: [
          {
            backgroundColor: '#007bff',
            borderColor    : '#007bff',
            data           : [0, 0, 1520000, 4400000, 4950000]
          },
          {
            backgroundColor: '#ced4da',
            borderColor    : '#ced4da',
            data           : [0, 0, 6852000, 0, 0]
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        tooltips           : {
          mode     : mode,
          intersect: intersect
        },
        hover              : {
          mode     : mode,
          intersect: intersect
        },
        legend             : {
          display: false
        },
        scales             : {
          yAxes: [{
            // display: false,
            gridLines: {
              display      : true,
              lineWidth    : '4px',
              color        : 'rgba(0, 0, 0, .2)',
              zeroLineColor: 'transparent'
            },
            ticks    : $.extend({
              beginAtZero: true,
  
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                if (value >= 1000) {
                  value /= 1000000
                 
                }
                return value+'M'
              }
            }, ticksStyle)
          }],
          xAxes: [{
            display  : true,
            gridLines: {
              display: false
            },
            ticks    : ticksStyle
          }]
        }
      }
    })


  })