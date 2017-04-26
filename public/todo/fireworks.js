var G = 9.54;

(function (Fireworks) {
    var Emitter = function (id, origins) {
        this.id = id;
        this.origins = origins;

        this.size = {
            h: document.height || document.body.scrollHeight,
            w: document.width || document.body.scrollWidth,
        };

        if (document.layers) {
            document.layers[this.id].x = 0;
            document.layers[this.id].y = 0;
            document.layers[this.id].width = this.size.w;
            document.layers[this.id].height = this.size.h;
        }

        this.maxParticles = 20;
        this.particles = [];
        this.writeBuffer = [];
        this.count = 0;
    }

    Emitter.prototype.write = function (particle) {
        if (document.layers) {
            var existing = document.layers[this.id].document.layers[particle.id];
            if (false) {
                this.debug('reusing ' + particle.id);
                existing.left = particle.x;
                existing.top = particle.y;
            } else {
                this.debug('??');
                var newLayer = '<layer id="' + particle.id + '" left=' + particle.x +
                    ' top=' + particle.y + ' width=10 height=10 style="background-color:#' +
                    particle.c +';color:' + particle.c + '">#</layer>';
                this.writeBuffer.push(newLayer);
            }
        } else {
            var existing = document.getElementById(particle.id);
            if (existing) {
                existing.style.left = particle.x + 'px';
                existing.style.top = particle.y + 'px';
            } else {
                var el = document.createElement('div');
                el.className = 'particle';
                el.id = particle.id;
                el.innerHTML = '';
                el.style.backgroundColor = '#' + particle.c;
                document.getElementById(this.id).appendChild(el);
            }
        }
    }

    Emitter.prototype.flush = function () {
        if (!document.layers || this.writeBuffer.length === 0) {
            return;
        }
        var buf = this.writeBuffer.join('');
        var doc = document.layers[this.id].document;
        doc.write(buf);
        doc.close();
        this.writeBuffer = [];
    }

    Emitter.prototype.remove = function (particle) {
        if (document.getElementById) {
            var el = document.getElementById(particle.id);
            if (el) {
                document.getElementById(this.id).removeChild(el);
            }
        }
    }

    Emitter.prototype.debug = function (msg) {
        if (window.console) {
            console.log(msg);
            return;
        }

        if (!document.layers.debug) {
            return;
        }

        document.layers.debug.document.write(msg);
        document.layers.debug.document.close();

    }

    function randomColor() {
        function randomColorPart() {
            var n = Math.floor(Math.random() * 255);
            return (n < 10 ? '0' : '') + (new Number(n).toString(16));
        }
        return randomColorPart() + randomColorPart() + randomColorPart();
    }

    Emitter.prototype.step = function () {
        var i;
        if (this.particles.length < this.maxParticles) {
            var newCount = this.maxParticles - this.particles.length;
            for (i = 0; i < newCount; i++) {
                var origin = this.origins[this.count % this.origins.length];
                this.particles.push({
                    id: this.id + (this.count++),
                    x: origin.x,
                    y: origin.y + ((Math.random() * 40) - 20),
                    vx: (10 + (Math.random() * 10)) * origin.direction,
                    vy: -20 + (Math.random() * 10),
                    c: randomColor()
                });
            }
        }

        var newParticles = [];
        for(i = 0; i < this.particles.length; i++) {
            var particle = this.particles[i];
            particle.x = Math.floor(particle.x + particle.vx);
            particle.y = Math.floor(particle.y + particle.vy);
            particle.vy = Math.floor(particle.vy + 1);

            if (particle.y < this.size.h &&
                particle.x <= this.size.w &&
                particle.x >= 0) {
                newParticles.push(particle);
                this.write(particle);
            } else {
                this.remove(particle);
            }
        }

        this.particles = newParticles;

        this.flush();
    }

    Fireworks.init = function(emitter) {
        var timer = setInterval(function () {
            emitter.step();
        }, 16);

        return function () {
            clearInterval(timer);
        }
    }

    Fireworks.Emitter = Emitter;
})(window.Fireworks = window.Fireworks || {});

setTimeout(function () {
    var emitter = new Fireworks.Emitter("fireworks", [
        { x: 0, y: 300, direction: 1 },
        { x: document.width || document.body.scrollWidth, y: 300, direction: -1 },
    ]);
    var stop = Fireworks.init(emitter);
    setTimeout(function () {
        stop();
    }, 1000);
});