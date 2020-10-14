var app = angular.module("app", []); 
app.controller('mycontroller', ['$scope','$filter', function ($scope, $filter) { 
    $scope.products = [ 
    {
        "Active": "1",
        "Name": "APPE COOKER",
        "Category": "Cookers",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "APPE COOKER.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "BEER MUG 400ml",
        "Category": "Mugs",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "BEER MUG 400ml.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "BHAGONA 3-5 ltrs",
        "Category": "BHAGONAS",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "BHAGONA 3-5 ltrs.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "BOWL SET FOR MICROWAVE",
        "Category": "Bowls",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "BOWL SET FOR MICROWAVE.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "BUTTER POT GLASS LID",
        "Category": "Bowls",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "BUTTER POT GLASS LID.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "CHAPATI BOX",
        "Category": "CHAPATI BOX",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "CHAPATI BOX.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "COOKER 3 ltrs",
        "Category": "Cookers",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "COOKER 3 ltrs.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "COOKER 4 Ltr",
        "Category": "Cookers",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "COOKER 4 Ltr.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "COOKER 5 Ltrs",
        "Category": "Cookers",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "COOKER 5 Ltrs.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "CUP SAUCER",
        "Category": "Mugs",
        "Description": "Set of 6 Unglazed and porous retains all benefits of clay.",
        "image_url": "CUP SAUCER.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "DAHI PYALA",
        "Category": "Bowls",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "DAHI PYALA.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "DAL HANDI FLAT BOTTOM 2.5L",
        "Category": "Handi",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "DAL HANDI FLAT BOTTOM 2.5L.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "DAL HANDI FLAT with Handle",
        "Category": "Handi",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "DAL HANDI FLAT with Handle.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "DAL HANDI ROUND BOTTOM 2.5L",
        "Category": "Handi",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "DAL HANDI ROUND BOTTOM 2.5L.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "DAL HANDI ROUND with Handle",
        "Category": "Handi",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "DAL HANDI ROUND with Handle.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "DEGCHI SET LARGE with Handle",
        "Category": "Handi",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "DEGCHI SET LARGE with Handle.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "DEGCHI SET LARGE",
        "Category": "Handi",
        "Description": "Set of 3 (700ml, 1 litre, 1.8 litres)   Unglazed and porous retains all benefits of clay.",
        "image_url": "DEGCHI SET LARGE.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "DEGCHI SET SMALL",
        "Category": "Handi",
        "Description": "Set of 3 (250ml, 400 ml, 600ml)   Unglazed and porous retains all benefits of clay.",
        "image_url": "DEGCHI SET SMALL.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "DEGCHI SET WITH HANDLE",
        "Category": "Handi",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "DEGCHI SET WITH HANDLE.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "DINNER SET LARGE",
        "Category": "Dinners Set",
        "Description": "Thal-13inchs, 4 bowl-150ml,glass-250ml,2 chatni bowl-50ml Unglazed and porous retains all benefits of clay.",
        "image_url": "DINNER SET LARGE.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "DINNER SET SMALL",
        "Category": "Dinners Set",
        "Description": "Thal-13inchs, 2 bowl-200ml,glass-250ml,1 chatni bowl-50ml Unglazed and porous retains all benefits of clay.",
        "image_url": "DINNER SET SMALL.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "DUBAI DONGA",
        "Category": "Bowls",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "DUBAI DONGA.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "FRYING PAN LARGE glass Lid 1.5L",
        "Category": "Frying-Sauce Pan",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "FRYING PAN LARGE glass Lid 1.5L.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "FRYING PAN SMALL",
        "Category": "Frying-Sauce Pan",
        "Description": "1 Ltr Unglazed and porous retains all benefits of clay.",
        "image_url": "FRYING PAN SMALL.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "IDLI SET",
        "Category": "Dinners Set",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "IDLI SET.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "KADAI CATERING SET 3L",
        "Category": "Kadhai",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "KADAI CATERING SET 3L.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "KADAI CATERING SET 5L",
        "Category": "Kadhai",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "KADAI CATERING SET 5L.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "KADAI CATERING SET",
        "Category": "Kadhai",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "KADAI CATERING SET.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "KADAI LARGE glass Lid 2L",
        "Category": "Kadhai",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "KADAI LARGE glass Lid 2L.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "KADAI MEDIUM glass Lid 1.5L",
        "Category": "Kadhai",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "KADAI MEDIUM glass Lid 1.5L.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "KADAI MITTI LID 2 ltrs",
        "Category": "Kadhai",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "KADAI MITTI LID 2 ltrs.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "KULLAD T-6 175ml",
        "Category": "Kullad",
        "Description": "set of 6 Unglazed and porous retains all benefits of clay.",
        "image_url": "KULLAD T-6 175ml.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "KULLAD T-7 125ml",
        "Category": "Kullad",
        "Description": "set of 6 Unglazed and porous retains all benefits of clay.",
        "image_url": "KULLAD T-7 125ml.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "LUNCH BOX",
        "Category": "LUNCH BOXES",
        "Description": "Air tight Unglazed and porous retains all benefits of clay.",
        "image_url": "LUNCH BOX.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "M-1 GLASS 300ml",
        "Category": "Mugs",
        "Description": "set of 6 Unglazed and porous retains all benefits of clay.",
        "image_url": "M-1 GLASS 300ml.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "M-2 GLASS 250ml",
        "Category": "Mugs",
        "Description": "set of 6 Unglazed and porous retains all benefits of clay.",
        "image_url": "M-2 GLASS 250ml.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "M-3 GLASSES 250ml",
        "Category": "Mugs",
        "Description": "set of 6 Unglazed and porous retains all benefits of clay.",
        "image_url": "M-3 GLASSES 250ml.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "MATHANI CATERING SET 4 Ltrs",
        "Category": "Handi",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "MATHANI CATERING SET 4 Ltrs.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "MATHANI SET",
        "Category": "Handi",
        "Description": "Set of 3 (700ml, 1 litre, 1.8 litres) Unglazed and porous retains all benefits of clay.",
        "image_url": "MATHANI SET.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "PAHAL HANDI SET WITH HANDLE",
        "Category": "Handi",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "PAHAL HANDI SET WITH HANDLE.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "PIPE MUG 150ml",
        "Category": "Mugs",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "PIPE MUG 150ml.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "PLATE 11 INCH",
        "Category": "Plates",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "PLATE 11 INCH.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "PLATE 8 INCH",
        "Category": "Plates",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "PLATE 8 INCH.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "ROUND HANDI SET WITH HANDLE",
        "Category": "Handi",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "ROUND HANDI SET WITH HANDLE.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "ROUND HANDI SET",
        "Category": "Handi",
        "Description": "Set of 3 (500ml, 1 litre, 2 litres) Unglazed and porous retains all benefits of clay.",
        "image_url": "ROUND HANDI SET.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "RUCHI MORNING SET",
        "Category": "Mugs",
        "Description": "set of 6 Unglazed and porous retains all benefits of clay.",
        "image_url": "RUCHI MORNING SET.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "RUCHI MUG LARGE 150 ml",
        "Category": "Mugs",
        "Description": "set of 6 Unglazed and porous retains all benefits of clay.",
        "image_url": "RUCHI MUG LARGE 150 ml.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "RUCHI MUG SMALL 125ml",
        "Category": "Mugs",
        "Description": "set of 6 Unglazed and porous retains all benefits of clay.",
        "image_url": "RUCHI MUG SMALL 125ml.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "SMALL BOTTLE 400gm",
        "Category": "Mugs",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "SMALL BOTTLE 400gm.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "SOUP BOWL SET",
        "Category": "Bowls",
        "Description": "Soup Set of 6 Bowls(250ml) with Serving Spoons Unglazed and porous retains all benefits of clay.",
        "image_url": "SOUP BOWL SET.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "SQUARE DONGA",
        "Category": "Bowls",
        "Description": " Unglazed and porous retains all benefits of clay.",
        "image_url": "SQUARE DONGA.jpeg",
        "Price": "0"
    },
    {
        "Active": "1",
        "Name": "Tea Set",
        "Category": "COMBOS",
        "Description": "6 Cups, 1 Milk Bowl, 1 large Kettle, 1 Sugar bowl Unglazed and porous retains all benefits of clay.",
        "image_url": "Tea Set.jpeg",
        "Price": "0"
    }
]; 
    // var values = [ 
    // {name: 'Binary Search'}, 
    // {name: 'Linear Search'}, 
    // {name: 'Interpolation Search'} 
    // ];   
    // angular.forEach(values, function (value, key) { 
    //     $scope.names.push(value.name); 
    // });   

    $scope.categories=$filter('unique')($scope.products,"Category");
}]); 


app.filter('unique', function() {

    return function (arr, field) {
      var o = {}, i, l = arr.length, r = [];
      for(i=0; i<l;i+=1) {
        o[arr[i][field]] = arr[i];
      }
      for(i in o) {
        r.push(o[i]);
      }
      return r;
    };
  })
  