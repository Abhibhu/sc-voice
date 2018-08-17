(typeof describe === 'function') && describe("po-parser", function() {
    const should = require("should");
    const fs = require('fs');
    const path = require('path');
    const {
        PoParser,
        SegDoc,
        Words,
    } = require("../index");

    it("TESTTESTparse(lines)", function(done) {
        var parser = new PoParser();
        var lines = [
            'msgctxt "mn1:1.1"',
            'msgid ""',
            '"a1id"',
            '"a2id"',
            'msgstr ""',
            '"a1"',
            '"a2"',
            '',
            'msgctxt "mn1:1.2"',
            'msgid ""',
            '"b1id"',
            '"b2id"',
            'msgstr "b1 b2"',
        ];
        (async function() { try {
            var segDoc = await parser.parseLines(lines);
            should.deepEqual(segDoc, new SegDoc({
                segments: [{
                    scid: 'mn1:1.1',
                    pli: 'a1id a2id',
                    en: 'a1 a2',
                },{
                    scid: 'mn1:1.2',
                    pli: 'b1id b2id',
                    en: 'b1 b2',
                }],
            }));
            done();
        } catch(e) {done(e)} })();
    });
    it("TESTTESTparse(filePath) creates a SegDoc", function(done) {
        (async function() { try {
            var parser = new PoParser();
            var fname = path.join(__dirname, '../local/mn/en/mn001.po');
            var segDoc = await parser.parse(fname);
            should(segDoc).instanceOf(SegDoc);
            should(segDoc.segments.length).equal(334);
            var segments = segDoc.findSegments(/mn1:172-194.25/,{prop:'scid'});
            should(segments.length).equal(1);
            should(segments[0]).properties({
                en: 'Why is that?',
                scid: 'mn1:172-194.25',
            });
            done();
        } catch(e) {done(e)} })();
    });
    it("TESTTESTparse(filePath)", function(done) {
        var parser = new PoParser();
        var fname = path.join(__dirname, '../local/mn/en/mn001.po');
        var words = new Words();
        var normalPat
        var normalPat = new RegExp("^[ a-zA-Z.<>/:;,?!\"'"+
            "\u2026\u2010\u2011\u2012\u2013\u2014\u2015\u201b\u201c\u201d\u2018\u2019-]*$",
            "u");
        (async function() { try {
            var segDoc = await parser.parse(fname);
            true && segDoc.segments.forEach(seg => {
                if (seg.en && !words.isWord(seg) && !normalPat.test(seg.en)) {
                    console.log(`${seg.scid}\t${seg.en}`);
                }
            });
            should(segDoc.segments.length).equal(334);
            var text = 'hello\u2026';
            console.log('\u2026', normalPat, text);
            should(normalPat.test(text)).equal(true);
            done();
        } catch(e) {done(e)} })();
    });

})
