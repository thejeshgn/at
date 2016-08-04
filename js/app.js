var version = 0.1;
var db;
var vm;
var help_document_id = "welcome_documet_v0.1";

function initialize(){

  db = new PouchDB('documents');

  db.get(help_document_id).then(function(doc) {

  }).then(function(response) {
    // handle response
  }).catch(function (err) {
      return db.put({
        _id: help_document_id,
        title: "#Welcome to AT Editor",
        body:help_content
      });
  });


  vm = new Vue({
    el: '#document',
    data: {
      doc_body: '## A new way to edit',
      doc_title:"Welcome to AT"
    },
    filters: {
      marked: marked
    },
    methods: {
      updateDocument: function (doc) {
        this.doc_body = doc.body;
        this.doc_title = doc.title;
      }
    }


  });

  //showHelp();

}

function showHelp(){
    db.get(help_document_id).then(function(doc) {
        vm.updateDocument(doc);
    }).then(function(response) {
    }).catch(function (err) {
    });
}

initialize();
