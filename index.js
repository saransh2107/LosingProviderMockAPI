const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Endpoint to handle Salesforce request
app.post("/getAssetandServiceDetails", (req, res) => {
  if (req.body.services == null) {
    // Response for requestStructure1
    return res.status(200).json({
      sourceCorrelationId: req.body.sourceCorrelationId,
      accountName: "Ben's Bread Factory Ltd",
      sfdcAccount: "CO000743312",
      firstName: "",
      lastName: "",
      emailId: ""
    });
  } else if (req.body.services!=null) {
    // Response for requestStructure2
    return res.status(200).json({
        "sourceCorrelationId": "xxxxxxx",
        "accountName": "Ben's Bread Factory Ltd",
        "sfdcAccount": "CO000743893",
        "firstName": "Saransh",
        "lastName": "Batham",
        "emailId": "saransh.batham@infosys.com",
        "assetBlock": {
          "siteDetails": [
            {
              "siteAddress": "39 Cypress Street, Glasgow, SW1P 3UX",
              "accountDetails": [
                {
                  "accountNumber": "123456789",
                  "serviceDetails": [
                    {
                      "data": [
                        {
                          "serviceIdentifier": "123456789",
                          "services": [
                            {
                              "serviceCode": "FBBEL17",
                              "productName": "Voom 400 + BEL 21CV",
                              "servicetype": "Core",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "4GBUVOM",
                              "productName": "4G Back-up Service",
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "FAIP105",
                              "productName": "5 static IP addresses",
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "voice": [
                        {
                          "serviceIdentifier": "01234567891",
                          "cupId": "",
                          "isPrimary": "Y",
                          "services": [
                            {
                              "serviceCode": "BELBUEX",
                              "productName": "BEL 21CV Line Rental",
                              "servicetype": "Core",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "BBELICB",
                              "productName": "Call Barring Incoming",
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "BBELCDR",
                              "productName": "Admin Call Divert",
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            }
                          ]
                        },
                        {
                          "serviceIdentifier": "01234567892",
                          "cupId": "",
                          "services": [
                            {
                              "serviceCode": "BELBUEX",
                              "productName": "BEL 21CV Line Rental",
                              "servicetype": "Core",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "BBELICB",
                              "productName": "Call Barring Incoming",
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "BBELCDR",
                              "productName": "Admin Call Divert",
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "accountNumber": "123456790",
                  "serviceDetails": [
                    {
                      "data": [
                        {
                          "serviceIdentifier": "123456790",
                          "services": [
                            {
                              "serviceCode": "FBBEC19",
                              "productName": "Voom 800",
                              "servicetype": "Core",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "4GBUVOM",
                              "productName": "4G Back-up Service",
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "FAIP105",
                              "productName": "5 static IP addresses",
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "siteAddress": "322 Cheshunt Mews, Glasgow, SW2R 5AF",
              "accountDetails": [
                {
                  "accountNumber": "123456791",
                  "serviceDetails": [
                    {
                      "data": [
                        {
                          "serviceIdentifier": "123456791",
                          "services": [
                            {
                              "serviceCode": "FBBEL20",
                              "productName": "Voom Gig1 + BEL 21CV",
                              "servicetype": "Core",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "4GBUVOM",
                              "productName": "4G Back-up Service",
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "FAIP105",
                              "productName": "5 static IP addresses",
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "voice": [
                        {
                          "serviceIdentifier": "01234567893",
                          "services": [
                            {
                              "serviceCode": "BELBUEX",
                              "productName": "BEL 21CV Line Rental",
                              "cupId": "",
                              "servicetype": "Core",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "BBELICB",
                              "productName": "Call Barring Incoming",
                              "cupId": "",
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "BBELCDR",
                              "productName": "Admin Call Divert",
                              "cupId": "",
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        "serviceBlock": {
          "siteDetails": [
            {
              "siteAddress": "39 Cypress Street, Glasgow, SW1P 3UX",
              "accountDetails": [
                {
                  "accountNumber": "123456789",
                  "contractstartdate": "12/02/2023",
                  "contractTerm": 24,
                  "billingSystem": "RBM/ICOMS",
                  "areaReference": "31",
                  "serviceDetails": [
                    {
                      "data": [
                        {
                          "serviceIdentifier": "123456789",
                          "services": [
                            {
                              "serviceCode": "FBBEL17",
                              "productName": "Voom 400 + BEL 21CV",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 40,
                              "servicetype": "Core",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "4GBUVOM",
                              "productName": "4G Back-up Service",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 0,
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "FAIP105",
                              "productName": "5 static IP addresses",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 7,
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "voice": [
                        {
                          "serviceIdentifier": "01011113334",
                          "cupId": "",
                          "isPrimary": "Y",
                          "services": [
                            {
                              "serviceCode": "BELBUEX",
                              "productName": "BEL 21CV Line Rental",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 0,
                              "servicetype": "Core",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "BBELICB",
                              "productName": "Call Barring Incoming",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 5,
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "BBELCDR",
                              "productName": "Admin Call Divert",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 5,
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            }
                          ]
                        },
                        {
                          "serviceIdentifier": "01011113335",
                          "cupId": "",
                          "isPrimary": "N",
                          "services": [
                            {
                              "serviceCode": "BELBUEX",
                              "productName": "BEL 21CV Line Rental",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 27.5,
                              "servicetype": "Core",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "BBELICB",
                              "productName": "Call Barring Incoming",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 5,
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "BBELCDR",
                              "productName": "Admin Call Divert",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 5,
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "accountNumber": "123456691",
                  "contractstartdate": "12/02/2023",
                  "contractTerm": 24,
                  "billingSystem": "RBM/ICOMS",
                  "areaReference": "32",
                  "serviceDetails": [
                    {
                      "data": [
                        {
                          "serviceIdentifier": "123456691",
                          "services": [
                            {
                              "serviceCode": "FBBEC19",
                              "productName": "Voom 800",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 51,
                              "servicetype": "Core",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "4GBUVOM",
                              "productName": "4G Back-up Service",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 7,
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "FAIP105",
                              "productName": "5 static IP addresses",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 5,
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "voice": [
                        {
                          "serviceIdentifier": "01011113337",
                          "cupId": "",
                          "isPrimary": "Y",
                          "services": [
                            {
                              "serviceCode": "BELBUEX",
                              "productName": "BEL 21CV Line Rental",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 0,
                              "servicetype": "Core",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "BBELICB",
                              "productName": "Call Barring Incoming",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 5,
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "BBELCDR",
                              "productName": "Admin Call Divert",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 5,
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            }
                          ]
                        },
                        {
                          "serviceIdentifier": "01011113338",
                          "cupId": "",
                          "isPrimary": "N",
                          "services": [
                            {
                              "serviceCode": "BELBUEX",
                              "productName": "BEL 21CV Line Rental",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 27.5,
                              "servicetype": "Core",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "BBELICB",
                              "productName": "Call Barring Incoming",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 5,
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "BBELCDR",
                              "productName": "Admin Call Divert",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 5,
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "siteAddress": "322 Cheshunt Mews, Glasgow, SW2R 5AF",
              "accountDetails": [
                {
                  "accountNumber": "123456892",
                  "contractstartdate": "12/02/2023",
                  "contractTerm": 24,
                  "billingSystem": "RBM/ICOMS",
                  "areaReference": "33",
                  "serviceDetails": [
                    {
                      "data": [
                        {
                          "serviceIdentifier": "123456892",
                          "services": [
                            {
                              "serviceCode": "FBBEL20",
                              "productName": "Voom Gig1 + BEL 21CV",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 67,
                              "servicetype": "Core",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "4GBUVOM",
                              "productName": "4G Back-up Service",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 0,
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "FAIP105",
                              "productName": "5 static IP addresses",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 5,
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "voice": [
                        {
                          "serviceIdentifier": "01011113336",
                          "cupId": "",
                          "isPrimary": "Y",
                          "services": [
                            {
                              "serviceCode": "BELBUEX",
                              "productName": "BEL 21CV Line Rental",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 0,
                              "servicetype": "Core",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "BBELICB",
                              "productName": "Call Barring Incoming",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 5,
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "BBELCDR",
                              "productName": "Admin Call Divert",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 5,
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "siteAddress": "322 Cheshunt Mews, Glasgow, SW2R 5AF",
              "accountDetails": [
                {
                  "accountNumber": "123456892",
                  "contractstartdate": "12/02/2023",
                  "contractTerm": 24,
                  "billingSystem": "RBM/ICOMS",
                  "areaReference": "33",
                  "serviceDetails": [
                    {
                      "data": [
                        {
                          "serviceIdentifier": "123456893",
                          "services": [
                            {
                              "serviceCode": "FBBEL20",
                              "productName": "Voom Gig1 + BEL 21CV",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 67,
                              "servicetype": "Core",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "4GBUVOM",
                              "productName": "4G Back-up Service",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 0,
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "FAIP105",
                              "productName": "5 static IP addresses",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 5,
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "voice": [
                        {
                          "serviceIdentifier": "01011113339",
                          "cupId": "",
                          "isPrimary": "Y",
                          "services": [
                            {
                              "serviceCode": "BELBUEX",
                              "productName": "BEL 21CV Line Rental",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 0,
                              "servicetype": "Core",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "BBELICB",
                              "productName": "Call Barring Incoming",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 5,
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            },
                            {
                              "serviceCode": "BBELCDR",
                              "productName": "Admin Call Divert",
                              "billingStartDate": "DD-MM-YYYY",
                              "MRC": 5,
                              "servicetype": "Add-On",
                              "serviceStatus": "Active"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
      );
  } else {
    return res.status(400).json({ message: "Invalid request structure" });
  }
});

// Endpoint to handle getServiceStatus request
app.post("/getServiceStatus", (req, res) => {
  if (req.body.services!=null) {
    // Response for request
    return res.status(200).json(
      {
        "sourceCorrelationId":"TTB-001",
         "services": [
              {
                 "serviceType": "IAS",
                 "serviceIdentifier": "123456789",
                 "status": "A"
              },
              {
                 "serviceType": "NBICS",
                 "serviceIdentifier": "01011113334",
                 "status": "AC"
              },
              {
                 "serviceType": "NBICS",
                 "serviceIdentifier": "01011113335",
                 "status": "A"
              },
              {
                 "serviceType": "IAS",
                 "serviceIdentifier": "123456691",
                "status": "AC"
              },
              {
                 "serviceType": "NBICS",
                 "serviceIdentifier": "01011113337",
                "status": "Inactive"
              },
              {
                 "serviceType": "NBICS",
                 "serviceIdentifier": "01011113338",
                "status": "PD"
              },
              {
                 "serviceType": "IAS",
                 "serviceIdentifier": "123456892",
                "status": "A"
              },
              {
                 "serviceType": "NBICS",
                 "serviceIdentifier": "01011113336",
                "status": "AC"
              },
              {
                 "serviceType": "IAS",
                 "serviceIdentifier": "123456893",
                "status": "Inactive"
              },
              {
                 "serviceType": "NBICS",
                 "serviceIdentifier": "01011113339",
                "status": "Inactive"
              }
           ]
        }        
    );
  }
});

//Endpoint to handle order request
app.post("/getOrderConfirmation", (req, res) => {
  if(req.body!=null){
    return res.status(202).json();
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
