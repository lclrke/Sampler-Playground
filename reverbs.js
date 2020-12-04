/**
* @fileoverview A sample library and quick-loader for tone.js
*
* @author N.P. Brosowsky (nbrosowsky@gmail.com)
* https://github.com/nbrosowsky/tonejs-impResponses
*/

var ReverbLibrary = {
    minify: false,
    ext: '.[wav]', // use setExt to change the extensions on all files // do not change this variable //
    baseUrl: '/impulse/',
    list: ['ambient'],
    onload: null,

    setExt: function (newExt) {
        var i
        for (i = 0; i <= this.list.length - 1; i++) {
            for (var property in this[this.list[i]]) {

                this[this.list[i]][property] = this[this.list[i]][property].replace(this.ext, newExt)
            }


        }
        this.ext = newExt;
        return console.log("sample extensions set to " + this.ext)
    },

    load: function (arg) {
        var t, rt, i;
        (arg) ? t = arg: t = {};
        t.impResponses = t.impResponses || this.list;
        t.baseUrl = t.baseUrl || this.baseUrl;
        t.onload = t.onload || this.onload;

        // update extensions if arg given
        if (t.ext) {
            if (t.ext != this.ext) {
                this.setExt(t.ext)
            }
            t.ext = this.ext
        }

        rt = {};

        // if an array of impResponses is passed...
        if (Array.isArray(t.impResponses)) {
            for (i = 0; i <= t.impResponses.length - 1; i++) {
                var newT = this[t.impResponses[i]];
                //Minimize the number of samples to load




                rt[t.impResponses[i]] = new Tone.Convolver(
                    newT, {
                        baseUrl: t.baseUrl  + t.impResponses[i] + "/",
                        onload: t.onload
                    }

                )
            }

            return rt

            // if a single instrument name is passed...
        } else {
            newT = this[t.impResponses];






            var s = new Tone.Convolver(
                newT, {
                    baseUrl: t.baseUrl + t.impResponses + "/",
                    onload: t.onload
                }
            )

            return s
        }

    },

    'ambient': {
   'stairwell': 'stairwell.[wav]'

    }


}



var impResponses = ReverbLibrary.load({
        impResponses: ['stairwell']
        });

var convolver = impResponses["stairwell"];
