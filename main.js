nosex=0;
nosey=0;

function preload(){
    clown_nose=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotposes);
}

function modelloaded(){
    console.log("model has loaded");
}

function gotposes(results){
    if(results.length>0){
        console.log("results");
        nosex=results[0].pose.nose.x-22;
        nosey=results[0].pose.nose.y-17;
    }
}

function draw(){
    image(video,0,0,500,500);
    image(clown_nose,nosex,nosey,50,50);
}

function take_snapshot(){
    save("clown.png");
}






































