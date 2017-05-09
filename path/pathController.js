var app = angular.module("site");

app.controller("PathController",
 ['PathService',
 function(PathService){
   this.pathPage = "./path/path.html";

   this.freebieMode = freebieMode();
   function freebieMode(){
     return PathService.freebieMode;
   }

   this.pathList = pathList();
   function pathList(){
     return PathService.pathList;
   }

   this.selectedPath = selectedPath();
   function selectedPath(){
     return PathService.selectedPath;
   }
}]);
