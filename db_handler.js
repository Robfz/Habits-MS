var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport('smtps://robfz729%40gmail.com:Kenanykel13@smtp.gmail.com');

var url = 'mongodb://localhost:27017/arqui';
var collection_name = 'email_sender_test';

var send_email = function(doc, dest) {

	var mailOptions = {
    from: 'Tasky',
    to: dest,
    subject: 'Remainder',
    text: 'Remainder',
    html: '<b>Remainder</b>'
	};

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);
	});
}

var need_send = function(doc) {

	// Tell if notification needs to be sent

	return true;
}

var get_user = function(doc) {

	// Get the task's owner email

	return 'roberto.fierros.zepeda@live.com';
}

var send_notifications = function(db, callback) {
	var cursor = db.collection(collection_name).find();
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      if (need_send(doc)) {

      	send_email(doc, get_user(doc));
      }
    } else {
      callback();
    }
  });
}

var service = function() {
	MongoClient.connect(url, function(err, db) {
	  assert.equal(null, err);
	  send_notifications(db, function() {
	      db.close();
	  });
	});
}


setInterval(function() {
	service();
}, 5000);
