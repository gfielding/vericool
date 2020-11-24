const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

exports.corsEnabledFunction = (req, res) => {
	res.set('Access-Control-Allow-Origin', '*');
	if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  } else {
    res.set('Access-Control-Allow-Origin', '*');
    res.send('Hello World!');
  }
}

exports.newApplicationEmail = functions.firestore
  .document('applications/{id}').onUpdate((change, context) => {
  const beforeData = change.before.data()
  const afterData = change.after.data()

    let phone = afterData.phone.replace(/[^0-9]+/g, "");
    let name = afterData.name;
    let email = afterData.email;
    let date = afterData.created;
    let availability = afterData.availability;
    let docUrl = afterData.docUrl;
    let experience = afterData.experience;
    let job = afterData.job;
    let why = afterData.why;


    const mailObject = {
       to: [`tHitchan@vericoolpackaging.com`,`info@vericoolpackaging.com`],
       message: {
        subject: `New Job Application: ${name} for ${job.title}.`,
        text: 'Hi ${name}. You are scheduled to work on ${date}. Your location and shift assignment will be coming soon. Thanks! - The Team at CrewBright',
        html: `<html>
                <head>
                  <title>New Job Application: ${name} for ${job.title}.</title>
                </head>
                <body>
                  <table> 
                    <tr>
                    	<td>Name: </td>
                    	<td>${name}</td>
                    </tr>
                    <tr>
                    	<td>Email: </td>
                    	<td>${email}</td>
                    </tr>
                    <tr>
                    	<td>Phone: </td>
                    	<td>${phone}</td>
                    </tr>
                    <tr>
                    	<td>Position: </td>
                    	<td>${job.title}</td>
                    </tr>
                    <tr>
                    	<td>Experience: </td>
                    	<td>${experience}</td>
                    </tr>
                    <tr>
                    	<td>Why Vericool: </td>
                    	<td>${why}</td>
                    </tr>
                    <tr>
                    	<td>Availability: </td>
                    	<td>${availability}</td>
                    <tr>
                      <td>Resumé</td>
                      <td><a href="${docUrl}" target="_blank">Open in new window</a></td>
                    </tr>
                    <tr>
                      <td>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        - Vericool Bots
                      </td>
                    </tr>
                  </table>
                </body>
              </html>`,
      }
    }
    return admin.firestore().collection('mail').add(mailObject);
})

exports.newLeadEmail = functions.firestore
  .document('leads/{id}').onUpdate((change, context) => {
  const beforeData = change.before.data()
  const afterData = change.after.data()

    let phone = afterData.phone.replace(/[^0-9]+/g, "");
    let name = afterData.name;
    let email = afterData.email;
    let date = afterData.created;
    let availability = afterData.availability;
    let docUrl = afterData.docUrl;
    let experience = afterData.experience;
    let job = afterData.job;
    let why = afterData.why;


    const mailObject = {
       to: [`tHitchan@vericoolpackaging.com`,`info@vericoolpackaging.com`],
       message: {
        subject: `New Job Application: ${name} for ${job.title}.`,
        text: 'Hi ${name}. You are scheduled to work on ${date}. Your location and shift assignment will be coming soon. Thanks! - The Team at CrewBright',
        html: `<html>
                <head>
                  <title>New Job Application: ${name} for ${job.title}.</title>
                </head>
                <body>
                  <table> 
                    <tr>
                    	<td>Name: </td>
                    	<td>${name}</td>
                    </tr>
                    <tr>
                    	<td>Email: </td>
                    	<td>${email}</td>
                    </tr>
                    <tr>
                    	<td>Phone: </td>
                    	<td>${phone}</td>
                    </tr>
                    <tr>
                    	<td>Position: </td>
                    	<td>${job.title}</td>
                    </tr>
                    <tr>
                    	<td>Experience: </td>
                    	<td>${experience}</td>
                    </tr>
                    <tr>
                    	<td>Why Vericool: </td>
                    	<td>${why}</td>
                    </tr>
                    <tr>
                    	<td>Availability: </td>
                    	<td>${availability}</td>
                    <tr>
                      <td>Resumé</td>
                      <td><a href="${docUrl}" target="_blank">Open in new window</a></td>
                    </tr>
                    <tr>
                      <td>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        - Vericool Bots
                      </td>
                    </tr>
                  </table>
                </body>
              </html>`,
      }
    }
    return admin.firestore().collection('mail').add(mailObject);
})