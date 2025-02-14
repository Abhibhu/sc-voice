
(typeof describe === 'function') && describe("sutta-duration", function() {
    const should = require("should");
    const fs = require('fs');
    const path = require('path');
    const { logger } = require('rest-bundle');
    const {
        SuttaDuration,
        Sutta,
        SuttaCentralApi,
        SuttaFactory,
        SuttaStore,
    } = require("../index");
    const suttaCentralApi = new SuttaCentralApi();
    const TOLERANCE = 33;
    const logLevel = false;

    function testTolerance(actual, expected, e = TOLERANCE) {
        should(actual).above(expected-e);
        should(actual).below(expected+e);
    }

    it("constructor", function() {
        var scd = new SuttaDuration();
        should(scd.name).equal('amy');
    });
    it("TESTTESTmeasure(sutta, lang) measures thag1.2", function(done) {
        (async function() { try {
            var store = await new SuttaStore({logLevel}).initialize();
            var sutta = await store.loadSutta('thag1.2');
            var factory = new SuttaFactory({logLevel});
            sutta = factory.sectionSutta(sutta);
            var scd = new SuttaDuration();
            var resMeasure = scd.measure(sutta);
            should(resMeasure).properties({
                text: 264,
                lang: 'en',
                nSegments: 9,
                nSections: 3,
                nEmptySegments: 0,
            });
            testTolerance(resMeasure.seconds, 24);

            done();
        } catch(e) { done(e); } })();
    });
    it("measure(sutta, lang) measures thig1.1", function(done) {
        (async function() { try {
            var factory = await new SuttaFactory({
                suttaCentralApi,
            }).initialize();
            var scd = new SuttaDuration();

            var sutta = await factory.loadSutta('thig1.1');
            sutta = factory.sectionSutta(sutta);
            var resMeasure = scd.measure(sutta);
            should(resMeasure).properties({
                text: 342,
                lang: 'en',
                nSegments: 9,
                nEmptySegments: 0,
                nSections: 3,
            });
            testTolerance(resMeasure.seconds, 31);

            done();
        } catch(e) { done(e); } })();
    });
    it("measure(sutta, lang) measures sn2.2", function(done) {
        (async function() { try {
            var factory = await new SuttaFactory({
                suttaCentralApi,
            }).initialize();
            var scd = new SuttaDuration();

            var sutta = await factory.loadSutta('sn2.2');
            sutta = factory.sectionSutta(sutta);
            var resMeasure = scd.measure(sutta);
            should(resMeasure).properties({
                text: 354,
                lang: 'en',
                nSegments: 9,
                nEmptySegments: 0,
                nSections: 2,
            });
            testTolerance(resMeasure.seconds, 31);

            done();
        } catch(e) { done(e); } })();
    });
    it("measure(sutta, lang) measures thig5.1", function(done) {
        (async function() { try {
            var factory = await new SuttaFactory({
                suttaCentralApi,
            }).initialize();
            var scd = new SuttaDuration();

            var sutta = await factory.loadSutta('thig5.1');
            sutta = factory.sectionSutta(sutta);
            var resMeasure = scd.measure(sutta);
            should(resMeasure).properties({
                text: 722,
                lang: 'en',
                nSegments: 27,
                nEmptySegments: 2,
                nSections: 3,
            });
            testTolerance(resMeasure.seconds, 69);

            done();
        } catch(e) { done(e); } })();
    });
    it("measure(sutta, lang) measures sn1.1", function(done) {
        (async function() { try {
            var factory = await new SuttaFactory({
                suttaCentralApi,
            }).initialize();
            var scd = new SuttaDuration();

            var sutta = await factory.loadSutta('sn1.1');
            sutta = factory.sectionSutta(sutta);
            var resMeasure = scd.measure(sutta);
            should(resMeasure).properties({
                text: 938,
                lang: 'en',
                nSegments: 20,
                nEmptySegments: 1,
                nSections: 2,
            });
            testTolerance(resMeasure.seconds, 85);

            done();
        } catch(e) { done(e); } })();
    });
    it("measure(sutta, lang) measures sn56.21", function(done) {
        (async function() { try {
            var factory = await new SuttaFactory({
                suttaCentralApi,
            }).initialize();
            var scd = new SuttaDuration();

            var sutta = await factory.loadSutta('sn56.21');
            sutta = factory.sectionSutta(sutta);
            var resMeasure = scd.measure(sutta);
            should(resMeasure).properties({
                text: 1097,
                lang: 'en',
                nSegments: 23,
                nEmptySegments: 1,
                nSections: 2,
            });
            testTolerance(resMeasure.seconds, 111);

            done();
        } catch(e) { done(e); } })();
    });
    it("measure(sutta, lang) measures thag9.1", function(done) {
        (async function() { try {
            var factory = await new SuttaFactory({
                suttaCentralApi,
            }).initialize();
            var scd = new SuttaDuration();

            var sutta = await factory.loadSutta('thag9.1');
            sutta = factory.sectionSutta(sutta);
            var resMeasure = scd.measure(sutta);
            should(resMeasure).properties({
                text: 1779,
                lang: 'en',
                nSegments: 48,
                nSections: 3,
                nEmptySegments: 8,
            });
            testTolerance(resMeasure.seconds, 168);

            done();
        } catch(e) { done(e); } })();
    });
    it("measure(sutta, lang) measures sn36.11", function(done) {
        (async function() { try {
            var factory = await new SuttaFactory({
                suttaCentralApi,
            }).initialize();
            var scd = new SuttaDuration();

            var sutta = await factory.loadSutta('sn36.11');
            sutta = factory.sectionSutta(sutta);
            var resMeasure = scd.measure(sutta);
            should(resMeasure).properties({
                text: 2998,
                lang: 'en',
                nSegments: 50,
                nEmptySegments: 4,
                nSections: 2,
            });
            testTolerance(resMeasure.seconds, 270);

            done();
        } catch(e) { done(e); } })();
    });
    it("measure(sutta, lang) measures sn42.11", function(done) {
        (async function() { try {
            var factory = await new SuttaFactory({
                suttaCentralApi,
            }).initialize();
            var scd = new SuttaDuration();

            var sutta = await factory.loadSutta('sn42.11');
            sutta = factory.sectionSutta(sutta);
            var resMeasure = scd.measure(sutta);
            should(resMeasure).properties({
                text: 3315,
                lang: 'en',
                nSegments: 55,
                nEmptySegments: 1,
                nSections: 2,
            });
            testTolerance(resMeasure.seconds, 292);

            done();
        } catch(e) { done(e); } })();
    });
    it("measure(sutta, lang) measures an2.1", function(done) {
        (async function() { try {
            var factory = await new SuttaFactory({
                suttaCentralApi,
            }).initialize();
            var scd = new SuttaDuration();

            var sutta = await factory.loadSutta('an2.1');
            sutta = factory.sectionSutta(sutta);
            var resMeasure = scd.measure(sutta);
            should(resMeasure).properties({
                text: 6564,
                lang: 'en',
                nSegments: 124,
                nEmptySegments: 25,
                nSections: 11,
            });
            testTolerance(resMeasure.seconds, 596);

            done();
        } catch(e) { done(e); } })();
    });
    it("measure(sutta, lang) measures sn12.51", function(done) {
        (async function() { try {
            var factory = await new SuttaFactory({
                suttaCentralApi,
            }).initialize();
            var scd = new SuttaDuration();

            var sutta = await factory.loadSutta('sn12.51');
            sutta = factory.sectionSutta(sutta);
            var resMeasure = scd.measure(sutta);
            should(resMeasure).properties({
                text: 6789,
                lang: 'en',
                nSegments: 92,
                nEmptySegments: 1,
                nSections: 2,
            });
            testTolerance(resMeasure.seconds, 719);

            done();
        } catch(e) { done(e); } })();
    });
    it("measure(sutta, lang) measures dn33", function(done) {
        (async function() { try {
            var factory = await new SuttaFactory({
                suttaCentralApi,
            }).initialize();
            var scd = new SuttaDuration();

            var sutta = await factory.loadSutta('dn33');
            sutta = factory.sectionSutta(sutta);
            var resMeasure = scd.measure(sutta);
            should(resMeasure).properties({
                text: 84664,
                lang: 'en',
                nSegments: 1158,
                nEmptySegments: 38,
                nSections: 12,
            });
            testTolerance(resMeasure.seconds, 7418);

            done();
        } catch(e) { done(e); } })();
    });
    it("measure(sutta, lang) measures mn1", function(done) {
        (async function() { try {
            var factory = await new SuttaFactory({
                suttaCentralApi,
            }).initialize();
            var scd = new SuttaDuration();

            var sutta = await factory.loadSutta('mn1');
            sutta = factory.sectionSutta(sutta);

            // unexpanded
            var resMeasure = scd.measure(sutta);
            should(resMeasure).properties({
                text: 14238,
                lang: 'en',
                nSegments: 334,
                nSections: 2,
                nEmptySegments: 9,
            });
            testTolerance(resMeasure.seconds, 1250);

            // expanded
            sutta = factory.expandSutta(sutta);
            var resMeasure = scd.measure(sutta);
            should(resMeasure).properties({
                text: 76661,
                lang: 'en',
                nSegments: 840,
                nSections: 10,
                nEmptySegments: 9,
            });
            testTolerance(resMeasure.seconds, 12051);

            done();
        } catch(e) { done(e); } })();
    });
});

