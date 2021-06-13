noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    canvas = createCanvas(650, 500);
    canvas.position(575,165);

    video = createCapture(VIDEO);
    video.size(550, 475);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', getPoses);
}

function draw() {
    background("#808080");
    textSize(difference);
    fill("#FFFF00");
    text("Hi", noseX, noseY);
    document.getElementById("size").innerHTML = difference+ "px";
}

function modelloaded() {
    console.log("PoseNet has been initialized!");
}

function getPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X is " + noseX + " and Nose Y is " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);
        console.log("Left Wrist X = " + leftWristX + " , Right Wrist X = " + rightWristX + " and the Difference = " + difference);
    }
}