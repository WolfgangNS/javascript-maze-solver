var p = [];
var d = 1000;

function contains(list,item){
for(i=0;i<list.length;i++){
if(list[i][0]==item[0]&&list[i][1]==item[1]){return true};
}return false};

var maze = 
{map:
[
[0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0],
[0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0],
[0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1],
[0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0],
[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0],
[1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0],
[0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1],
[0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0],
[0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0],
[0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0],
[0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0],
[1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1],
[1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0],
[0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1],
[0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0],
[0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0],
[0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0],
[0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0],
[0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0],
[1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0],
[0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0],
[0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0],
[0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0]
],
h:function(){return this.map.length},
w:function(){return this.map[0].length},
end:[15,22],

solve:function(r,c){
if(d<=0){console.log("recursion error!");return []}else{d--;}
if(c>this.w()-1|r>this.h()-1|c<0|r<0){return false};
if(this.map[r][c]!=0){return false};
if(contains(p,[r,c])){return false};
p = p.concat([[r,c]]); //concat or push??
if(contains([this.end],[r,c])){return [[r,c]]};
if(a=this.solve(r,c+1)){return [[r,c]].concat(a)};
if(a=this.solve(r+1,c)){return [[r,c]].concat(a)};
if(a=this.solve(r,c-1)){return [[r,c]].concat(a)};
if(a=this.solve(r-1,c)){return [[r,c]].concat(a)};
return false;
}
}


function script(){
var table = document.getElementById("table");
while(table.firstChild){table.removeChild(table.firstChild);}
var row = [];

for(q=0;q<maze.h();q++){
row[q] = document.createElement("tr");
table.appendChild(row[q]);
for(r=0;r<maze.w();r++){row[q].appendChild(document.createElement("td"))};
}

//SETTING WALL COLOR
for(v=0;v<maze.h();v++){for(w=0;w<maze.w();w++){
if(maze.map[v][w]==1){document.getElementsByTagName("tr")[v].getElementsByTagName("td")[w].style.backgroundColor="black"}
}}

}//end script()


function solve(){
var solution = maze.solve(0,0);
//SETTING PATHWAY COLOR
for(v=0;v<solution.length;v++){
document.getElementsByTagName("tr")[solution[v][0]].getElementsByTagName("td")[solution[v][1]].style.backgroundColor="chartreuse"
}
}