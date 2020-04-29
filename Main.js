let myModel;

$( document ).ready(function() {
    var video = $('video#cam')[0]
    var canvas = $('canvas#canvas')[0]

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video: true})
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (err0r) {
                console.log(err0r);
            });
    }

    // Load the model.
    const modelParams = {
        flipHorizontal: true,   // flip e.g for video
        imageScaleFactor: 0.2,  // reduce input image size for gains in speed.
        maxNumBoxes: 1,        // maximum number of boxes to detect
        iouThreshold: 0.3,      // ioU threshold for non-max suppression
        scoreThreshold: 0.85,    // confidence threshold for predictions.
    }

    handTrack.load(modelParams).then(model => {
        myModel = model;
    });

    handTrack.startVideo(video).then(function (status) {
        if (status) {
            console.log("Video started")
            run()
        } else {
            console.log("Please enable video")
        }
    });

    function run() {
        myModel.detect(video).then(predictions => {
            if(predictions.length > 0) {
                let x = map(predictions[0].bbox[0], 0 ,350, 50, 550)
                xPos = x;
                xPos2 = x;
                console.log('Predictions: ', predictions[0].bbox[0]);
            }
            myModel.renderPredictions(predictions, canvas, canvas.getContext("2d"), video)
            setTimeout(function() {
                requestAnimationFrame(run);
            }, 50)

        });
    }
});