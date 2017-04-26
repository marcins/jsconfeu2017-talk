var G = 9.54;

(function (Fireworks) {
    var Emitter = function (id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;

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

        this.maxParticles = 10;
        this.particles = [];
        this.writeBuffer = [];
    }

    Emitter.prototype.write = function (i, x, y) {
        if (document.layers) {
            var newLayer = '<layer id="particle-' + i + '" left=' + x + ' top=' + y + ' width=10 height=10>#</layer>';
            this.writeBuffer.push(newLayer);
        } else {
            var existing = document.getElementById('particle-' + i);
            if (existing) {
                existing.style.left = x + 'px';
                existing.style.top = y + 'px';
            } else {
                var el = document.createElement('div');
                el.className = 'particle';
                el.id = "particle-" + i;
                el.innerHTML = '#';
                document.getElementById(this.id).appendChild(el);
            }
        }
    }

    Emitter.prototype.flush = function () {
        if (!document.layers) {
            return;
        }
        var buf = this.writeBuffer.join('');
        var doc = document.layers[this.id].document;
        doc.write(buf);
        doc.close();
        this.writeBuffer = [];
    }

    Emitter.prototype.remove = function (i) {
        if (document.getElementById) {
            var el = document.getElementById('particle-' + i);
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

        document.layers.debug.document.write(msg);
        document.layers.debug.document.close();

    }

    Emitter.prototype.step = function () {
        var i;
        if (this.particles.length < this.maxParticles) {
            var newCount = this.maxParticles - this.particles.length;
            for (i = 0; i < newCount; i++) {
                this.particles.push({
                    x: this.x,
                    y: this.y,
                    vx: 10 + (Math.random() * 10),
                    vy: -20 + (Math.random() * 10)
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
                particle.x < this.size.w &&
                particle.x > 0) {
                newParticles.push(particle);
                this.write(i, particle.x, particle.y);
            } else {
                this.remove(i);
            }
        }

        this.particles = newParticles;
        this.flush();

    }

    Fireworks.init = function(id, x, y) {
        var emitter = new Emitter(id, x, y);

        var timer = setInterval(function () {
            emitter.step()
        }, 16);

        emitter.step();

        return function () {
            clearInterval(timer);
        }
    }

})(window.Fireworks = window.Fireworks || {});

var stop = Fireworks.init("fireworks", 0, 300);
setTimeout(function () {
    stop();
}, 1000);