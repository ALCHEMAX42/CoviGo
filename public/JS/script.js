const covidURL = "https://api.covid19api.com/summary";
const blogURL = "./blogAPI";
const indianStatsURL = "https://api.covid19india.org/data.json";
let app = angular.module("MyApp",[]);

app.controller('MyCtrl',($scope , $http)=>{
    $scope.countries = [];
    $http.get(covidURL)
    .then((response)=>{
      console.log(response);
      $scope.countries = response.data.Countries;
      $scope.all_data = response.data;
    },  (error)=>{
        console.log(error);
    })
});

app.controller('MyBlog', ($scope, $http) => {
  $http.get(blogURL).then((response)=>{
    console.log(response);
    $scope.blogs = response.data;
  })
})


app.controller('indianStats', ($scope, $http)=>{
  $http.get(indianStatsURL).then((response)=>{
    console.log(response);
    $scope.statewise = response.data.statewise;
  })
})




