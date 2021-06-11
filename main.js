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
}

function modelloaded() {
    console.log("PoseNet has been initialized!");
}

function getPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}