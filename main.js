var song=""
leftWristx=0
leftWristy=0
rightWristx=0
rightWristy=0
function preload() {
song=loadSound("music.mp3")
}
function setup() {
canvas=createCanvas(600,500)
canvas.center()
video=createCapture(VIDEO)
video.hide()
poseNet=ml5.poseNet(video,modelloded)
poseNet.on('pose',gotposes)
}
function gotposes(results) {
if(results.length>0)
{
leftWristx=results[0].pose.leftWrist.x
leftWristy=results[0].pose.leftWrist.y
rightWristx=results[0].pose.rightWrist.x
rightWristy=results[0].pose.rightWrist.y
}
}
function modelloaded() {
    console.log("modelisloaded")
}
function draw() {
    image(video,0,0,600,500)
}
function play(){
    song.play()
}
