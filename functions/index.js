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
       to: [`chardy@vericoolpackaging.com`,`info@vericoolpackaging.com`],
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
       to: [`chardy@vericoolpackaging.com`,`info@vericoolpackaging.com`, 'gregpfielding@gmail.com'],
       message: {
        subject: `New Job Application: ${name} for ${job.title}.`,
        text: 'New Application from ${name}',
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
    let company = afterData.company;
    let location = afterData.location;
    let currentProduct = afterData.currentProduct;
    let currentPackagingType = afterData.currentPackagingType;
    let currentMonthlyQuantitiesPerSize = afterData.currentMonthlyQuantitiesPerSize;
    let currentPayloadSizes = afterData.currentPayloadSizes;
    let currentInsulationThickness = afterData.currentInsulationThickness;
    let currentInnerShipperDimensions = afterData.currentInnerShipperDimensions;
    let currentOuterShipperDimensions = afterData.currentOuterShipperDimensions;
    let dryIceOrGelPacks = afterData.dryIceOrGelPacks;
    let weightOfCoolant = afterData.weightOfCoolant;
    let preconditionedCoolantTemperature = afterData.preconditionedCoolantTemperature;
    let preconditionedProductTemperature = afterData.preconditionedProductTemperature;
    let currentDistributionLocations = afterData.currentDistributionLocations;
    let currentMonthlyGrowthRate = afterData.currentMonthlyGrowthRate;
    let desiredControlledTemperature = afterData.desiredControlledTemperature;
    let durationOfTransit = afterData.durationOfTransit;
    let ambientTestProfile = afterData.ambientTestProfile;
    let biggestCustomerComplaint = afterData.biggestCustomerComplaint;
    let currentDesiredCost = afterData.currentDesiredCost;

    const mailObject = {
       to: [`Dj@vericool-sol.com `,`info@vericoolpackaging.com`],
       message: {
        subject: `New Lead: ${name} from ${company}.`,
        text: 'New Lead: ${name}',
        html: `<html>
                <head>
                  <title>New Lead: ${name} from ${company}.</title>
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
                      <td>Date: </td>
                      <td>${date}</td>
                    </tr>
                    <tr>
                      <td>Company: </td>
                      <td>${company}</td>
                    </tr>
                    <tr>
                      <td>Location: </td>
                      <td>${location}</td>
                    </tr>
                    <tr>
                      <td>currentProduct: </td>
                      <td>${currentProduct}</td>
                    </tr>
                    <tr>
                      <td>currentPackagingType: </td>
                      <td>${currentPackagingType}</td>
                    </tr>
                    <tr>
                      <td>currentMonthlyQuantitiesPerSize: </td>
                      <td>${currentMonthlyQuantitiesPerSize}</td>
                    </tr>
                    <tr>
                      <td>currentPayloadSizes: </td>
                      <td>${currentPayloadSizes}</td>
                    </tr>
                    <tr>
                      <td>currentInsulationThickness: </td>
                      <td>${currentInsulationThickness}</td>
                    </tr>
                    <tr>
                      <td>currentInnerShipperDimensions: </td>
                      <td>${currentInnerShipperDimensions}</td>
                    </tr>
                    <tr>
                      <td>currentOuterShipperDimensions: </td>
                      <td>${currentOuterShipperDimensions}</td>
                    </tr>
                    <tr>
                      <td>dryIceOrGelPacks: </td>
                      <td>${dryIceOrGelPacks}</td>
                    </tr>
                    <tr>
                      <td>weightOfCoolant: </td>
                      <td>${weightOfCoolant}</td>
                    </tr>
                    <tr>
                      <td>preconditionedCoolantTemperature: </td>
                      <td>${preconditionedCoolantTemperature}</td>
                    </tr>
                    <tr>
                      <td>preconditionedProductTemperature: </td>
                      <td>${preconditionedProductTemperature}</td>
                    </tr>
                    <tr>
                      <td>currentDistributionLocations: </td>
                      <td>${currentDistributionLocations}</td>
                    </tr>
                    <tr>
                      <td>currentMonthlyGrowthRate: </td>
                      <td>${currentMonthlyGrowthRate}</td>
                    </tr>
                    <tr>
                      <td>desiredControlledTemperature: </td>
                      <td>${desiredControlledTemperature}</td>
                    </tr>
                    <tr>
                      <td>durationOfTransit: </td>
                      <td>${durationOfTransit}</td>
                    </tr>
                    <tr>
                      <td>ambientTestProfile: </td>
                      <td>${ambientTestProfile}</td>
                    </tr>
                    <tr>
                      <td>biggestCustomerComplaint: </td>
                      <td>${biggestCustomerComplaint}</td>
                    </tr>
                    <tr>
                      <td>currentDesiredCost: </td>
                      <td>${currentDesiredCost}</td>
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