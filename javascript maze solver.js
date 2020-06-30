var p = [];
var d = 1000;

function contains(list,item){
for(i=0;i<list.length;i++){
if(list[i][0]==item[0]&&list[i][1]==item[1]){return true};
}return false};

map =
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
h=function(){return map.length};
w=function(){return map[0].length}; //do these need to be functions?
end=[15,22];

var maze = 
{
solve:function(r,c){
if(d<=0){console.log("recursion error!");return []}else{d--;}
if(c>w()-1|r>h()-1|c<0|r<0){return false};
if(map[r][c]!=0){return false};
if(contains(p,[r,c])){return false};
p = p.concat([[r,c]]); //concat or push??
if(contains([end],[r,c])){return [[r,c]]};
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

for(q=0;q<h();q++){
row[q] = document.createElement("tr");
table.appendChild(row[q]);
for(r=0;r<w();r++){row[q].appendChild(document.createElement("td"))};
}

//SETTING WALL COLOR
for(y=0;y<h();y++){for(x=0;x<w();x++){
if(map[y][x]==1){document.getElementsByTagName("tr")[y].getElementsByTagName("td")[x].style.backgroundColor="black"}
}}

}//end script()


function solve(){
var solution = maze.solve(0,0);
//SETTING PATHWAY COLOR
for(y=0;y<solution.length;y++){
document.getElementsByTagName("tr")[solution[y][0]].getElementsByTagName("td")[solution[y][1]].style.backgroundColor="chartreuse"
}
}
