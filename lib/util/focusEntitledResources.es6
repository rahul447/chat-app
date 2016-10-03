"use strict";

let projections = {
    "LossesByLocation": {
      "Patient": {
        "_id": 0,
        "name": "$name.text",
        "gender": 1,
        "street": "$address.line",
        "city": "$address.city",
        "state": "$address.state"
      },
      "appointment": {
        "_id": 0,
        "value": "$identifier.value",
        "status": "$status",
        "description": "$description",
        "text": "$reason.text"
      },
      "Location": {
        "_id": 0,
        "LocationName": "$name"
      },
      "Practitioner": {
        "_id": 0
      }
    },
    "LossesByPayer": {
      "Patient": {
        "_id": 0,
        "name": "$name.text",
        "gender": 1,
        "street": "$address.line",
        "city": "$address.city",
        "state": "$address.state"
      },
      "Appointment": {
        "_id": 0,
        "value": "$identifier.value",
        "status": "$status",
        "description": "$description",
        "text": "$reason.text"
      },
      "Location": {
        "_id": 0,
        "LocationName": "$name"
      },
      "Practitioner": {
        "_id": 0
      }
    },
    "AverageWatingTime/Location": {
      "Patient": {
        "_id": 0,
        "name": "$name.text",
        "gender": 1,
        "street": "$address.line",
        "city": "$address.city",
        "state": "$address.state"
      },
      "Appointment": {
        "_id": 0,
        "value": "$identifier.value",
        "status": "$status",
        "description": "$description",
        "text": "$reason.text"
      },
      "Location": {
        "_id": 0,
        "LocationName": "$name"
      },
      "Practitioner": {
        "_id": 0
      }
    },
    "LasikConversionRate": {
      "Patient": {
        "_id": 0,
        "name": "$name.text",
        "gender": 1,
        "street": "$address.line",
        "city": "$address.city",
        "state": "$address.state"
      },
      "Appointment": {
        "_id": 0,
        "value": "$identifier.value",
        "status": "$status",
        "description": "$description",
        "text": "$reason.text"
      },
      "Location": {
        "_id": 0,
        "LocationName": "$name"
      },
      "Practitioner": {
        "_id": 0
      }
    },
    "CataractConversionRate": {
      "Patient": {
        "_id": 0,
        "name": "$name.text",
        "gender": 1,
        "street": "$address.line",
        "city": "$address.city",
        "state": "$address.state"
      },
      "Appointment": {
        "_id": 0,
        "value": "$identifier.value",
        "status": "$status",
        "description": "$description",
        "text": "$reason.text"
      },
      "Location": {
        "_id": 0,
        "LocationName": "$name"
      },
      "Practitioner": {
        "_id": 0
      }
    },
    "ExternalReferralsByPayer": {
      "Patient": {
        "_id": 0,
        "name": "$name.text",
        "gender": 1,
        "street": "$address.line",
        "city": "$address.city",
        "state": "$address.state"
      },
      "Appointment": {
        "_id": 0,
        "value": "$identifier.value",
        "status": "$status",
        "description": "$description",
        "text": "$reason.text"
      },
      "Location": {
        "_id": 0,
        "LocationName": "$name"
      },
      "Practitioner": {
        "_id": 0
      }
    },
    "ReferralMix": {
      "Patient": {
        "_id": 0,
        "name": "$name.text",
        "gender": 1,
        "street": "$address.line",
        "city": "$address.city",
        "state": "$address.state"
      },
      "Appointment": {
        "_id": 0,
        "value": "$identifier.value",
        "status": "$status",
        "description": "$description",
        "text": "$reason.text"
      },
      "Location": {
        "_id": 0,
        "LocationName": "$name"
      },
      "Practitioner": {
        "_id": 0
      }
    },
    "MissedDiabeticConsult-Ref.PQRS Measure19": {
      "Patient": {
        "_id": 0,
        "name": "$name.text",
        "gender": 1,
        "street": "$address.line",
        "city": "$address.city",
        "state": "$address.state"
      },
      "Appointment": {
        "_id": 0,
        "value": "$identifier.value",
        "status": "$status",
        "description": "$description",
        "text": "$reason.text"
      },
      "Location": {
        "_id": 0,
        "LocationName": "$name"
      },
      "Practitioner": {
        "_id": 0
      }
    },
    "OptometristProductivity": {
      "Patient": {
        "Id": "$_id",
        "PatientName": {
          "$arrayElemAt": ["$name.text", 0]
        },
        "Patient_Id": {
          "$arrayElemAt": ["$identifier.value", 0]
        }
      },
      "Appointment": {
        "Id": "$_id",
        "AppointmentId": {
          "$arrayElemAt": ["$identifier.value", 0]
        },
        "WorkingDate": {
          "$arrayElemAt": ["$identifier.period.start", 0]
        }
      },
      "Location": {
        "Id": "$_id",
        "LocationName": "$name",
        "Facility_Code": {
          "$arrayElemAt": ["$identifier.value", 0]
        }
      },
      "practitioner": {
        "Id": "$_id",
        "PractitionerName": {
          "$arrayElemAt": ["$name.text", 0]
        }
      }
    },
    "TechnicianProductivity": {
      "Patient": {
        "Id": "$_id",
        "PatientName": {
          "$arrayElemAt": ["$name.text", 0]
        },
        "Patient_Id": {
          "$arrayElemAt": ["$identifier.value", 0]
        }
      },
      "Appointment": {
        "Id": "$_id",
        "AppointmentId": {
          "$arrayElemAt": ["$identifier.value", 0]
        },
        "WorkingDate": {
          "$arrayElemAt": ["$identifier.period.start", 0]
        }
      },
      "Location": {
        "Id": "$_id",
        "LocationName": "$name",
        "Facility_Code": {
          "$arrayElemAt": ["$identifier.value", 0]
        }
      },
      "Practitioner": {
        "Id": "$_id",
        "TechnicianName": "$name.text"
      }
    },
    "CounsellorProductivity": {
      "Patient": {
        "Id": "$_id",
        "PatientName": {
          "$arrayElemAt": ["$name.text", 0]
        },
        "Patient_Id": {
          "$arrayElemAt": ["$identifier.value", 0]
        }
      },
      "appointment": {
        "Id": "$_id",
        "AppointmentId": {
          "$arrayElemAt": ["$identifier.value", 0]
        },
        "WorkingDate": {
          "$arrayElemAt": ["$identifier.period.start", 0]
        }
      },
      "Practitioner": {
        "Id": "$_id",
        "PractitionerName": "$name.text"
      },
      "ProcedureRequest": {
        "Id": "$_id",
        "WorkingDate": "$scheduledDateTime",
        "VisitId": {
          "$arrayElemAt": ["$identifier.value", 0]
        }
      }
    },
    "OpthalmologistProductivity": {
      "Patient": {
        "Id": "$_id",
        "PatientName": {
          "$arrayElemAt": ["$name.text", 0]
        },
        "Patient_Id": {
          "$arrayElemAt": ["$identifier.value", 0]
        }
      },
      "Appointment": {
        "Id": "$_id",
        "AppointmentId": {
          "$arrayElemAt": ["$identifier.value", 0]
        },
        "WorkingDate": {
          "$arrayElemAt": ["$identifier.period.start", 0]
        }
      },
      "Location": {
        "Id": "$_id",
        "LocationName": "$name",
        "Facility_Code": {
          "$arrayElemAt": ["$identifier.value", 0]
        }
      },
      "Practitioner": {
        "Id": "$_id",
        "PractitionerName": "$name.text"
      }
    },
    "LensUtilization": {
      "Patient": {
        "Id": "$_id",
        "PatientName": {
          "$arrayElemAt": ["$name.text", 0]
        },
        "Patient_Id": {
          "$arrayElemAt": ["$identifier.value", 0]
        }
      },
      "Location": {
        "Id": "$_id",
        "LocationName": "$name",
        "Facility_Code": {
          "$arrayElemAt": ["$identifier.value", 0]
        }
      },
      "Practitioner": {
        "Id": "$_id",
        "PractitionerName": "$name.text"
      },
      "Device": {
        "Id": "$_id",
        "LensType": "$model",
        "Eye": {
          "$arrayElemAt": ["$note.text", 0]
        },
        "SurgeryDate": "$manufactureDate"
      }
    },
    "ORComplications": {
      "Patient": {
        "Id": "$_id",
        "PatientName": {
          "$arrayElemAt": ["$name.text", 0]
        },
        "Patient_DOB": "$birthDate"
      },
      "Appointment": {
        "Id": "$_id",
        "AppointmentId": {
          "$arrayElemAt": ["$identifier.value", 0]
        },
        "Description": "$description",
        "AppointmentDate": {
          "$arrayElemAt": ["$identifier.period.start", 0]
        }
      },
      "Practitioner": {
        "Id": "$_id",
        "PractitionerName": "$name.text",
        "Complications": "$comment"
      }

      /* ,
       "procedure": {
       "Id": "$_id",
       "ProcedureDate": "$performedDateTime"
       }*/
    },
    "ClaimErrorRate": {
      "Patient": {
        "Id": "$_id",
        "PatientName": {
          "$arrayElemAt": ["$name.text", 0]
        },
        "Patient_Id": {
          "$arrayElemAt": ["$identifier.value", 0]
        }
      },
      "ClaimResponse": {
        "Id": "$_id",
        "ClaimId": {
          "$arrayElemAt": ["$identifier.value", 0]
        },
        "ClaimEntryDate": "$created",
        "ClaimStatus": "$disposition",
        "CPTCode": "$code.text",
        "ICDCode": "$codedDiagnosis.text"
      }
    },
    "ClaimDeniedByPayer": {
      "Patient": {
        "_id": 0,
        "PatientName": "$name.text",
        "Patient_Id": "$identifier.value"
      },
      "ClaimResponse": {
        "ClaimId": "$identifier.value",
        "ClaimEntryDate": "$created",
        "ClaimStatus": "$disposition"
      }
    },
    "OTReturns": {
      "Patient": {
        "_id": 0,
        "PatientName": "$name.text",
        "Patient_Id": "$identifier.value"
      },
      "Practitioner": {
        "_id": 0,
        "PractitionerName": "$name"
      },
      "Procedure": {
        "ProcedureDate": "$performedDateTime"
      }
    },
    "PostCataractVAI": {}
  },
  resources = {
    "Procedurerequest": "ProcedureRequest",
    "Appointment": "Appointment",
    "Device": "Device",
    "Diagnosticreport": "DiagnosticReport",
    "Encounter": "Encounter",
    "Location": "Location",
    "Organization": "Organization",
    "Patient": "Patient",
    "Paymentreconciliation": "PaymentReconciliation",
    "Practitioner": "Practitioner",
    "Procedure": "Procedure",
    "Claimresponse": "ClaimResponse"
  },
  focusResources = [
    "Patient",
    "Appointment"
  ];

export {projections, resources, focusResources};
