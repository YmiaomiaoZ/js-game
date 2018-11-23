//创建全局变量
let arrays = [
    [8 ,2 ,0 ,1 ,0 ,6 ,0 ,11,10,6 ],
    [1 ,1 ,1 ,1 ,7 ,1 ,1 ,1 ,3 ,0 ],
    [1 ,0 ,1 ,0 ,3 ,1 ,5 ,1 ,1 ,7 ],
    [2 ,5 ,11,1 ,1 ,1 ,0 ,4 ,3 ,0 ],
    [1 ,0 ,1 ,4 ,7 ,2 ,1 ,1 ,1 ,5 ],
    [11,1 ,1 ,2 ,1 ,0 ,1 ,3 ,11,4 ],
    [1 ,0 ,3 ,0 ,1 ,1 ,1 ,0 ,10,0 ],
    [1 ,1 ,1 ,1 ,1 ,7 ,1 ,5 ,0 ,6 ],
    [0 ,3 ,1 ,0 ,3 ,0 ,1 ,0 ,4 ,5 ],
    [13,11,1 ,6 ,7 ,2 ,1 ,1 ,11,9 ],
];
let arrays1 = [
    [17,1 ,1 ,1 ,11,1 ,1 ,1 ,1 ,8 ],
    [1 ,1 ,19,19,1 ,19,19,1 ,1 ,20],
    [1 ,19,11,1 ,1 ,1 ,19,19,1 ,20],
    [1 ,19,10,19,19,1 ,19,19,1 ,20],
    [1 ,1 ,19,17,12,1 ,19,1 ,11,1 ],
    [20,11,1 ,19,9 ,19,1 ,1 ,19,1 ],
    [21,21,1 ,18,19,1 ,1 ,18,18,16],
    [21,21,1 ,1 ,1 ,1 ,20,20,20,20],
    [21,21,1 ,20,1 ,20,20,20,20,20],
    [16,11,1 ,20,1 ,11,1 ,1 ,1 ,13],
];
let arrays2 = [
    [8 ,1 ,1 ,1 ,11,1 ,1 ,1 ,1 ,16],
    [1 ,19,19,19,19,19,19,19,19,1 ],
    [1 ,19,1 ,1 ,1 ,1 ,1 ,12,19,1 ],
    [1 ,19,1 ,19,19,19,19,9 ,19,1 ],
    [11,19,1 ,19,1 ,13,19,19,19,1 ],
    [1 ,19,12,1 ,14,1 ,19,1 ,1 ,11],
    [1 ,19,1 ,19,19,19,19,12,19,1 ],
    [1 ,19,1 ,1 ,1 ,1 ,1 ,1 ,19,1 ],
    [1 ,19,19,19,19,19,19,19,19,1 ],
    [16,1 ,1 ,1 ,1 ,11,1 ,1 ,1 ,16],
];
let arrays3 = [
    [1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,8 ],
    [1 ,21,21,21,21,1 ,24,24,24,1 ],
    [1 ,21,21,21,21,1 ,24,24,24,1 ],
    [1 ,21,21,21,21,14,24,24,24,1 ],
    [1 ,1 ,14,16,17,9 ,24,24,24,1 ],
    [1 ,20,20,20,13,17,16,14,1 ,1 ],
    [1 ,20,20,20,14,23,23,23,23,1 ],
    [1 ,20,20,20,1 ,23,23,23,23,1 ],
    [1 ,20,20,20,1 ,23,23,23,23,1 ],
    [1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ],
];
let arrays4 = [
    [8 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ],
    [1 ,21,21,21,21,21,21,21,21,1 ],
    [1 ,21,21,21,1 ,1 ,21,21,21,1 ],
    [1 ,21,21,1 ,15,15,1 ,21,21,1 ],
    [1 ,21,1 ,15,13,9 ,15,1 ,1 ,1 ],
    [1 ,21,21,1 ,15,15,1 ,21,21,1 ],
    [14,21,21,21,1 ,1 ,21,21,21,1 ],
    [16,21,21,21,21,21,21,21,21,10],
    [25,25,25,25,25,25,25,25,25,25],
    [25,25,25,25,25,25,25,25,25,25],
];
let arrays5 = [
    [25,25,25,25,1 ,8 ,25,25,25,25],
    [25,25,26,25,1 ,1 ,25,25,25,25],
    [25,25,25,25,1 ,1 ,25,25,26,25],
    [25,26,25,25,1 ,1 ,25,25,25,25],
    [25,25,25,25,14,14,25,25,25,25],
    [25,25,26,25,9 ,9 ,25,25,25,25],
    [25,25,25,25,15,15,25,26,25,25],
    [25,26,25,25,1 ,1 ,25,25,25,25],
    [25,25,25,25,1 ,1 ,25,25,25,26],
    [25,25,25,25,13,1 ,25,25,25,25],
];
let arrays6 = [
    [20,20,20,20,20,8 ,20,20,20,20],
    [20,16,1 ,1 ,1 ,1 ,1 ,1 ,16,20],
    [20,20,20,20,1 ,1 ,20,20,20,20],
    [25,25,25,25,15,17,25,25,25,25],
    [25,26,25,25,1 ,1 ,25,26,25,25],
    [25,25,25,25,17,15,25,25,25,25],
    [20,20,20,20,1 ,1 ,20,20,20,20],
    [20,1 ,1 ,1 ,1 ,1 ,22,1 ,1 ,20],
    [20,1 ,25,25,25,25,25,25,1 ,20],
    [13,1 ,1 ,1 ,1 ,1 ,22,1 ,9 ,20],
];
let arrays7 = [
    [8 ,19,17,1 ,1 ,1 ,1 ,1 ,1 ,13],
    [1 ,19,19,1 ,25,25,25,25,25,25],
    [1 ,19,19,1 ,25,26,25,25,25,25],
    [1 ,1 ,1 ,1 ,25,25,25,25,26,25],
    [1 ,17,19,1 ,25,25,25,25,25,25],
    [1 ,19,19,1 ,19,1 ,1 ,1 ,1 ,1 ],
    [1 ,19,19,1 ,19,1 ,19,19,19,1 ],
    [1 ,19,19,1 ,19,1 ,22,9 ,19,1 ],
    [15,19,19,1 ,19,19,19,19,19,1 ],
    [16,19,19,1 ,1 ,1 ,1 ,1 ,1 ,1 ],
];
let arrays8 = [
    [16,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,8 ],
    [1 ,20,20,20,20,20,20,20,20,1 ],
    [1 ,1 ,1 ,1 ,1 ,1 ,20,20,20,1 ],
    [19,19,19,19,19,1 ,20,20,20,1 ],
    [19,19,19,19,1 ,1 ,1 ,1 ,20,1 ],
    [19,19,19,1 ,15,1 ,19,1 ,20,1 ],
    [19,19,1 ,15,1 ,19,19,1 ,20,1 ],
    [19,1 ,22,1 ,19,19,19,1 ,20,1 ],
    [1 ,22,1 ,19,19,19,19,1 ,20,1 ],
    [27,1 ,19,19,19,19,19,1 ,1 ,16],
];
let arrayAll = [arrays,arrays1,arrays2,arrays3,arrays4,arrays5,arrays6,arrays7,arrays8];
let box = document.getElementsByClassName("box")[0];
let lv =document.getElementById("lv")
let hp = document.getElementById("hp-now");
let hpMax = document.getElementById("hp-max");
let lowAtk = document.getElementById("low-atk");
let highAtk = document.getElementById("high-atk");
let def = document.getElementById("def");
let expNow = document.getElementById("exp-now");
let expNeed = document.getElementById("exp-need");
let key = document.getElementById("key");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let smBlood = document.getElementById("sm-blood");
let lgBlood = document.getElementById("lg-blood");
let deadCount = document.getElementById("dead");
let deadcountNum =0;
let hpNum = 100;
let hpMaxNum = 100;
let lowAtkNum = 10;
let highAtkNum = 20;
let defNum = 5;
let expNowNum = 0;
let expNeedNum = 100;
let keyNum = 0;
let lvNum = 1;
let smbloodNum = 2;
let lgbloodNum = 1;
let passNum = 0;
let monster1 = {
    name:"小幽灵",
    hp:100,
    atk:parseInt(Math.random()*10)+lvNum*8,
    def:5,
    exp:40
};
let monster2 = {
    name:"小火球",
    hp:200,
    atk:parseInt(Math.random()*10)+10+lvNum*10,
    def:15,
    exp:90
};
let monster3 = {
    name:"小青蛇",
    hp:350,
    atk:parseInt(Math.random()*10)+15+lvNum*10,
    def:15,
    exp:120
};
let monster4 = {
    name:"盗贼",
    hp:500,
    atk:parseInt(Math.random()*10)+20+lvNum*10,
    def:20,
    exp:150
};
let monster5 = {
    name:"盗贼法师",
    hp:700,
    atk:parseInt(Math.random()*6)+30+lvNum*10,
    def:30,
    exp:200
}
let x = 0;
let y = 0;

//运行地图资源加载函数和人物移动函数
Map(arrayAll[passNum]);
move();

//使用小血瓶点击事件
btn1.onclick=()=>{
    if (smbloodNum<=0){
        alert("你已经没有小血瓶了!");
    }else if(hpNum==hpMaxNum){
        alert("你已经是满血了");
    }else{
        smbloodNum--;
        hpNum += 50;
        if (hpNum>hpMaxNum){
            hpNum=hpMaxNum;
        }
        hp.innerHTML = hpNum;
        smBlood.innerHTML = smbloodNum;
    }
}

//使用大血瓶点击事件
btn2.onclick=()=>{
    if(lgbloodNum<=0){
        alert("你已经没有大血瓶了!")
    }else if(hpNum==hpMaxNum){
        alert("你已经是满血了");
    }else {
        lgbloodNum--;
        hpNum=hpMaxNum;
        hp.innerHTML = hpNum;
        lgBlood.innerHTML = lgbloodNum;
    }
}

//地图资源加载
function Map(arrays) {
    box.innerHTML="";
    if (arrayAll.indexOf(arrays) == 0){
        box.style.backgroundImage = "url(img/土地.png)";
    }else{
        box.style.backgroundImage = "url(img/草地.png)";
    }
    for (let i = 0;i < arrays.length;i++){
        for (let j =0;j < arrays[i].length;j++){
            let odiv = document.createElement("div");
            odiv.style.width = `${(parseInt(box.offsetWidth)-6)/arrays[i].length}px`;
            odiv.style.height = `${(parseInt(box.offsetHeight)-6)/arrays.length}px`;
            odiv.style.backgroundSize = "100% 100%";
            odiv.style.backgroundRepeat = "no-repeat";
            odiv.style.float = "left";
            if (arrays[i][j]==0){
                odiv.style.backgroundImage = "url(img/陷阱.png)";
            }else if(arrays[i][j]==1){
                odiv.style.backgroundImage = "";
            }else if(arrays[i][j]==2){
                odiv.style.backgroundImage = "url(img/陷阱2.png)";
            }else if(arrays[i][j]==7){
                odiv.style.backgroundImage = "url(img/陷阱3.png)";
            }else if(arrays[i][j]==3){
                odiv.style.backgroundImage = "url(img/石头.png)";
            }else if(arrays[i][j]==4){
                odiv.style.backgroundImage = "url(img/石头2.png)";
            }else if(arrays[i][j]==5){
                odiv.style.backgroundImage = "url(img/石头3.png)";
            }else if(arrays[i][j]==6){
                odiv.style.backgroundImage = "url(img/石头4.png)";
            }else if(arrays[i][j]==8){
                odiv.style.backgroundImage = "url(img/hero.png)";
            }else if(arrays[i][j]==9){
                odiv.style.backgroundImage = "url(img/宝箱.png)";
            }else if(arrays[i][j]==10){
                odiv.style.backgroundImage = "url(img/宝箱2.png)";
            }else if(arrays[i][j]==11){
                odiv.style.backgroundImage = "url(img/怪.png)";
            }else if(arrays[i][j]==12){
                odiv.style.backgroundImage = "url(img/怪3.png)";
            }else if(arrays[i][j]==13){
                odiv.style.backgroundImage = "url(img/传送.png)";
            }else if(arrays[i][j]==14){
                odiv.style.backgroundImage = "url(img/怪4.png)";
            }else if(arrays[i][j]==15){
                odiv.style.backgroundImage = "url(img/盗贼1.png)";
            }else if(arrays[i][j]==16){
                odiv.style.backgroundImage = "url(img/宝箱3.png)";
            }else if(arrays[i][j]==17){
                odiv.style.backgroundImage = "url(img/石头5.png)";
            }else if(arrays[i][j]==18){
                odiv.style.backgroundImage = "url(img/河.png)";
            }else if(arrays[i][j]==19){
                odiv.style.backgroundImage = "url(img/树.png)";
            }else if(arrays[i][j]==20){
                odiv.style.backgroundImage = "url(img/树2.png)";
            }else if(arrays[i][j]==21){
                odiv.style.backgroundImage = "url(img/玉米.png)";
            }else if(arrays[i][j]==22){
                odiv.style.backgroundImage = "url(img/盗贼2.png)";
            }else if(arrays[i][j]==23){
                odiv.style.backgroundImage = "url(img/植物.png)";
            }else if(arrays[i][j]==24){
                odiv.style.backgroundImage = "url(img/草堆.png)";
            }else if(arrays[i][j]==25){
                odiv.style.backgroundImage = "url(img/河水.png)";
            }else if(arrays[i][j]==26){
                odiv.style.backgroundImage = "url(img/小岛.png)";
            }else if(arrays[i][j]==27){
                odiv.style.backgroundImage = "url(img/boss.png)";
            }
            box.appendChild(odiv);
        }
    }
}

//键盘点击事件，控制人物移动
function move(){
    window.onkeydown=(e)=> {
        switch (e.keyCode) {
            case 37://left
                if (x <= 0) {
                }else {
                    compared(37,arrayAll[passNum]);
                }
                break;
            case 38://up
                if (y <= 0) {
                }else {
                    compared(38,arrayAll[passNum]);
                }
                break;
            case 39://right
                if (x > arrayAll[passNum][y].length-2) {
                }else {
                    compared(39,arrayAll[passNum]);
                }
                break;
            case 40://down
                if (y > arrayAll[passNum].length-2) {
                }else {
                    compared(40,arrayAll[passNum]);
                }
                break;
        }
    }
}

//人物触发事件
function compared(keycode,arrays) {
    let xtype;
    let ytype;
    if (keycode==37){
        xtype = 0;
        ytype = 0;
    }else if(keycode ==38){
        xtype = 2;
        ytype = 0;
    }else if(keycode ==39){
        xtype = 1;
        ytype = 0;
    }else if(keycode ==40){
        xtype = 2;
        ytype = 1;
    };
    let a =checkXY(xtype,ytype);
    if(arrays[a[0]][a[1]]==11 || arrays[a[0]][a[1]]==12 || arrays[a[0]][a[1]]==14 || arrays[a[0]][a[1]]==15 || arrays[a[0]][a[1]]==22){
        battle(xtype,ytype,arrays);
    }else if(arrays[a[0]][a[1]]==9 || arrays[a[0]][a[1]]==10 || arrays[a[0]][a[1]]==16){
        treasure(xtype,ytype,arrays);
    }else if(arrays[a[0]][a[1]]==13){
        transfer();
    }else if(arrays[a[0]][a[1]]==1){
        mapClear(xtype,ytype,arrays);
    }
}

//获取点击键盘后的x值和y值，并返回该值组成的数组
function checkXY(xtype,ytype) {
    let x0;
    let y0;

    if(xtype==0){
        x0=x-1;
        y0=y;
    }
    if(xtype==1){
        x0=x+1;
        y0=y;
    }
    if(xtype==2){
        if(ytype==0){
            x0=x;
            y0=y-1
        }
        if(ytype==1){
            x0=x;
            y0=y+1;
        }
    }
    return [y0,x0];
}

//地图资源改变并重新加载
function mapClear(xtype,ytype,arrays) {
    let a =checkXY(xtype,ytype);
    arrays[y][x] = 1;
    arrays[a[0]][a[1]] = 8;
    y=a[0];
    x=a[1];
    Map(arrays);
}

//判断怪物类型，进入战斗结算，并重新加载地图资源
function battle(xtype,ytype,arrays) {
    let a =checkXY(xtype,ytype);
    if (arrays[a[0]][a[1]]==11){
        battleClear(monster1);
    }else if(arrays[a[0]][a[1]]==12){
        battleClear(monster2);
    }else if(arrays[a[0]][a[1]]==14){
        battleClear(monster3);
    }else if(arrays[a[0]][a[1]]==15){
        battleClear(monster4);
    }else if(arrays[a[0]][a[1]]==22){
        battleClear(monster5);
    }
    mapClear(xtype,ytype,arrays);
}

//战斗结算
function battleClear(monster) {
    if((monster.atk-defNum)*parseInt(monster.hp/((lowAtkNum+highAtkNum)/2-monster.def))<=0){
    }else{
        hpNum=hpNum-(monster.atk-defNum)*parseInt(monster.hp/((lowAtkNum+highAtkNum)/2-monster.def));
    }
    expNowNum+=monster.exp;
    if (hpNum<=0){
        alert("战斗失败，YOU LOSS!经验减少30！")
        alert("恭喜你获得天使的庇护，生命值回复一半！请继续游戏")
        deadcountNum++;
        expNowNum=expNowNum-20;
        hpNum=hpMaxNum/2;
    }
    if(expNowNum>=expNeedNum){
        alert("升级，战斗提升！")
        lvNum+=1;
        expNowNum=expNowNum-expNeedNum;
        expNeedNum+=10*lvNum;
        hpMaxNum+=100;
        hpNum=hpMaxNum;
        defNum+=2;
        highAtkNum+=5;
        lowAtkNum+=2;
        lowAtk.innerHTML = lowAtkNum;
        highAtk.innerHTML = highAtkNum;
        def.innerHTML = defNum;
        lv.innerHTML = lvNum;

    }
    expNow.innerHTML = expNowNum;
    expNeed.innerHTML = expNeedNum;
    hpMax.innerHTML = hpMaxNum;
    hp.innerHTML = hpNum;
    deadCount.innerHTML = deadcountNum;
}

//判断宝箱类型，获取宝箱内容，并重新加载地图资源
function treasure(xtype,ytype,arrays) {
    let a =checkXY(xtype,ytype);
    if(arrays[a[0]][a[1]]==9){
        alert("恭喜你获得传送宝石*1，现在你可以通过传送阵进入下一关了");
        keyNum++;
        key.innerHTML = keyNum;
    }else if (arrays[a[0]][a[1]]==10){
        alert("恭喜你获得小血瓶*1");
        smbloodNum++;
        smBlood.innerHTML = smbloodNum;
     }else if (arrays[a[0]][a[1]]==16){
        alert("恭喜你获得大血瓶*1");
        lgbloodNum++;
        lgBlood.innerHTML = lgbloodNum;
    }
    mapClear(xtype,ytype,arrays);
}

//传送判定
function transfer() {
    if (keyNum<=0){
        alert("你还没有传送宝石，请收集后再进行传送!")
    }else {
        keyNum--;
        key.innerHTML = keyNum;
        alert("恭喜进入下一个区域");
        passNum++;
        for (let i = 0;i < arrayAll[passNum].length;i++){
            for (let j =0;j < arrayAll[passNum][i].length;j++){
                if(arrayAll[passNum][i][j]==8){
                    x=j;
                    y=i;
                }
            }
        }
        Map(arrayAll[passNum]);
    }
}

//Boss构造函数
function Boss() {
    this.name = `神秘怪物 ${lvNum}级`;
    this.hp = hpNum*10*lvNum;
    this.atk = (parseInt(Math.random()*6)+10)*lvNum*2;
    this.def = lvNum*2;
    this.exp = 70*2*lvNum;
}
