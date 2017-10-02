$(document).ready(function () {

    let cols = 45;
    let rows = 45;
    let xw, xh, delay;
    let canvas = $('#canvas')[0];
    let context = canvas.getContext('2d');
    let img1 = $('#img1')[0];
    let img2 = $('#img2')[0];
    let newcanvas = $("<canvas></canvas>")[0];
    let newcontext = newcanvas.getContext('2d');
    let state = {
        pos: 0
    };


    $('body').click(function (e) {
        let tl = new TimelineMax();
        if (state.pos === 0) {
            tl.to(state, 1, {
                pos: 2
            });
        } else {
            tl.to(state, 1, {
                pos: 0
            });
        }
    });

    setInterval(function(){
        let tl = new TimelineMax();
        if (state.pos === 0) {
            tl.to(state, 1, {
                pos: 2
            });
        } else {
            tl.to(state, 1, {
                pos: 0
            });
        }
    },
    3000);

    setCanvasSize(canvas);
    setCanvasSize(newcanvas);

    function setCanvasSize(canvas) {
        canvas.width = 600;
        canvas.height = 400;
        $(canvas).css({
            width: 600,
            height: 400,
        });

    }

    function render(t) {
        context.clearRect(0, 0, 600, 600);

        context.drawImage(img1, 0, 0);

        RenderTempCanvas(t);

        context.drawImage(newcanvas, 0, 0);


    }

    function clamp(a, b, c) {
        return Math.max(b, Math.min(c, a));
    }

    function RenderTempCanvas(t) {
        newcontext.clearRect(0, 0, 600, 600);
        newcontext.drawImage(img2, 0, 0);

        xw = 600 / cols;
        xh = 400 / rows;
        for (var i = 0; i < cols; i++) {
            for (var j = 0; j < rows; j++) {
                delay = (j * i) / (cols * rows);
                newcontext.clearRect(i * xw, j * xh, xw * clamp(state.pos - delay, 0, 1), xh * clamp(state.pos - delay, 0, 1));
            }
        }
    }

    function draw(t) {
        render(t);
        window.requestAnimationFrame(draw);
    }

    draw();


});