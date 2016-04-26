var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://robfz729%40gmail.com:pass@smtp.gmail.com');

// setup e-mail data with unicode symbols
var mailOptions1 = {
    from: 'Pollo 1', // sender address
    to: 'pabloarmandofierrocastro@gmail.com', // list of receivers
    subject: 'Pollo 1 ✔', // Subject line
    text: 'Pollo 1', // plaintext body
    html: '<b>Pollo 1</b>' // html body
};

var mailOptions2 = {
    from: 'Pollo 2', // sender address
    to: 'pabloarmandofierrocastro@gmail.com', // list of receivers
    subject: 'Pollo 2 ✔', // Subject line
    text: 'Pollo 2', // plaintext body
    html: '<b>Pollo 2</b>' // html body
};

var mailOptions3 = {
    from: 'Pollo 3', // sender address
    to: 'pabloarmandofierrocastro@gmail.com', // list of receivers
    subject: 'Pollo 3 ✔', // Subject line
    text: 'Pollo 3', // plaintext body
    html: '<b>Pollo 3</b>' // html body
};

var queue = new Array();

queue.push(mailOptions1);
queue.push(mailOptions2);
queue.push(mailOptions3);

for (var i = queue.length - 1; i >= 0; i--) {
	// send mail with defined transport object
	transporter.sendMail(queue[i], function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);
	});
}

