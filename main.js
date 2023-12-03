music="";
music2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
music=loadSound("music.mp3");
music2=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(500,350);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
   
}

function draw(){
    image(video, 0,0,500,350);
}

function modelLoaded(){
console.log('model is ready');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log('left wrist X is', leftWristX, 'and left wrist Y is', leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log('right wrist X is', rightWristX, 'and right wrist Y is', rightWristY);
    }
}