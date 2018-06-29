function contains(list,item){
for(i=0;i<list.length;i++){
if(!(list[i][0]==item[0]&&list[i][1]==item[1])){return false;}else{return true;}
}}

var maze = 
{map:
[
[0,0,0,0],
[1,1,1,0],
[0,0,1,0],
[1,1,1,0]
],
h:function(){return this.map.length},
w:function(){return this.map[0].length},
end:[3,3],

solve:function(r,c,p){
if(d<=0){return "recursion error!"}else{d--;}
if(c>this.w-1|r>this.h-1|c<0|r<0){return false};
if(contains(p,[r,c])){return false};
if(this.map[r][c]!=0){return false};
p.push([r,c]);
if(contains([this.end],[r,c])){return [[r,c]]};
if(a=this.solve(r,c+1,p)){return [[r,c]].concat(a)};
if(a=this.solve(r+1,c,p)){return [[r,c]].concat(a)};
if(a=this.solve(r,c-1,p)){return [[r,c]].concat(a)};
if(a=this.solve(r-1,c,p)){return [[r,c]].concat(a)};
return false;
}
}
var d = 40;
console.log(maze.solve(0,0,[]));