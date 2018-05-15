var pgp = require('pg-promise')({ });
var db = pgp({database: 'music_db', user: 'postgres'});
var prompt = require('prompt-promise');


//CREATE ALBUM

var attr = {};
var q = "INSERT INTO albums VALUES (${id}, ${name}, ${release_date}, ${artist_id}, ${song_id})";

function createAlbum () {
    var promise = new Promise(function (resolve, reject) {
        try {
            prompt('id: ')
            .then(function (val) {
                attr.id =Number(val);
                return prompt('name: ');
            })
            .then(function (val) {
                attr.name = val;
                return prompt('release_date(mm/dd/yyyy): ')
            })
            .then(function (val) {
                attr.release_date = val;
                return prompt('artist_id: ')
            })
            .then(function (val) {
                attr.artist_id = Number(val);
                return prompt('song_id: ')
            })
            .then(function (val) {
                attr.song_id = Number(val);
                prompt.done()
                return attr
            })
            .then(function(attr){
                console.log(attr)
                return db.result(q, attr);
            })
            .then(function () {
                pgp.end();
            })
            .catch(function(error){
                console.error(error)
                prompt.finish();
            })
        }
        catch (error) {
            reject(error);
          }
    })
};
// createAlbum()



//CREATE ARTIST

var attr2 = {};
var q2 = "INSERT INTO artists VALUES ($(id), $(name), $(bandname), $(lead_bol), $(collaborator_bol), $(album_id))"

function createArtist(){
    var promise = new Promise (function (resolve, reject){
        try {
            prompt('id: ')
            .then(function (val){
                attr2.id = Number(val)
                return prompt('name: ')
            })
            .then(function(val){
                attr2.name = val
                return prompt('bandname: ')
            })
            .then(function(val){
                attr2.bandname = val
                return prompt('lead_bol (true or false: ')
            })
            .then(function(val){
                attr2.lead_bol = Boolean(val)
                return prompt('collaborator_bol (true or false): ')
            })
            .then(function(val){
                attr2.collaborator_bol = val
                return prompt('album_id: ')
            })
            .then(function(val){
                attr2.album_id = val
                prompt.done()
                return attr2
            })
            .then(function(attr2){
                console.log(attr2)
                return db.result(q2, attr2)
            })
            .then(function(){
                pgp.end();
            })
        } catch (error){
            reject(error)
            prompt.finish();
        }
    })
};
// createArtist()


//CREATE SONG/TRACK

var attr3 = {}
var q3 = "INSERT INTO songs VALUES($(id), $(name), $(duration), $(track), $(album_id), $(songwriter_id))"

function createSong() {
    var promise = new Promise (function(resolve, reject){
        try {
            prompt('id: ')
            .then(function(val){
                attr3.id = Number(val)
                return prompt('name: ')
            })
            .then(function(val){
                attr3.name = val
                return prompt('duration: ')
            })
            .then(function(val){
                attr3.duration = Number(val)
                return prompt('track (true or false): ')
            })
            .then(function(val){
                attr3.track = Boolean(val)
                return prompt('album_id: ')
            })
            .then(function(val){
                attr3.album_id = Number(val)
                return prompt('songwriter_id: ')
            })
            .then(function(val){
                attr3.songwriter_id = Number(val)
                prompt.done()
                return attr3
            })
            .then(function(attr3){
                console.log(attr3)
                return db.result(q3, attr3)
            })
            .then(function(){
                pgp.end();
            })
        } catch(error){
            reject(error)
            prompt.finish();
        }
    });
}
// createSong();