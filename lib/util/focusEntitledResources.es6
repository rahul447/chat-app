"use strict";

let projections = {
  "LossesByLocation": {
    "patient": {
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
    "location": {
      "_id": 0,
      "LocationName": "$name"
    },
    "practitioner": {
      "_id": 0
    }
  },
  "LossesByPayer": {
    "patient": {
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
    "location": {
      "_id": 0,
      "LocationName": "$name"
    },
    "practitioner": {
      "_id": 0
    }
  },
  "AverageWatingTime/Location": {
    "patient": {
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
    "location": {
      "_id": 0,
      "LocationName": "$name"
    },
    "practitioner": {
      "_id": 0
    }
  },
  "LasikConversionRate": {
    "patient": {
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
    "location": {
      "_id": 0,
      "LocationName": "$name"
    },
    "practitioner": {
      "_id": 0
    }
  },
  "CataractConversionRate": {
    "patient": {
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
    "location": {
      "_id": 0,
      "LocationName": "$name"
    },
    "practitioner": {
      "_id": 0
    }
  },
  "ExternalReferralsByPayer": {
    "patient": {
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
    "location": {
      "_id": 0,
      "LocationName": "$name"
    },
    "practitioner": {
      "_id": 0
    }
  },
  "ReferralMix": {
    "patient": {
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
    "location": {
      "_id": 0,
      "LocationName": "$name"
    },
    "practitioner": {
      "_id": 0
    }
  },
  "MissedDiabeticConsult-Ref.PQRS Measure19": {
    "patient": {
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
    "location": {
      "_id": 0,
      "LocationName": "$name"
    },
    "practitioner": {
      "_id": 0
    }
  },
  "OptometristProductivity": {
    "patient": {
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
    "location": {
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
    "patient": {
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
    "location": {
      "Id": "$_id",
      "LocationName": "$name",
      "Facility_Code": {
        "$arrayElemAt": ["$identifier.value", 0]
      }
    },
    "practitioner": {
      "Id": "$_id",
      "TechnicianName": "$name.text"
    }
  },
  "CounsellorProductivity": {
    "patient": {
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
    "practitioner": {
      "Id": "$_id",
      "PractitionerName": "$name.text"
    },
    "procedurerequest": {
      "Id": "$_id",
      "WorkingDate": "$scheduledDateTime",
      "VisitId": {
        "$arrayElemAt": ["$identifier.value", 0]
      }
    }
  },
  "OpthalmologistProductivity": {
    "patient": {
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
    "location": {
      "Id": "$_id",
      "LocationName": "$name",
      "Facility_Code": {
        "$arrayElemAt": ["$identifier.value", 0]
      }
    },
    "practitioner": {
      "Id": "$_id",
      "PractitionerName": "$name.text"
    }
  },
  "LensUtilization": {
    "patient": {
      "Id": "$_id",
      "PatientName": {
        "$arrayElemAt": ["$name.text", 0]
      },
      "Patient_Id": {
        "$arrayElemAt": ["$identifier.value", 0]
      }
    },
    "location": {
      "Id": "$_id",
      "LocationName": "$name",
      "Facility_Code": {
        "$arrayElemAt": ["$identifier.value", 0]
      }
    },
    "practitioner": {
      "Id": "$_id",
      "PractitionerName": "$name.text"
    },
    "device": {
      "Id": "$_id",
      "LensType": "$model",
      "Eye": {
        "$arrayElemAt": ["$note.text", 0]
      },
      "SurgeryDate": "$manufactureDate"
    }
  },
  "ORComplications": {
    "patient": {
      "Id": "$_id",
      "PatientName": {
        "$arrayElemAt": ["$name.text", 0]
      },
      "Patient_DOB": "$birthDate"
    },
    "appointment": {
      "Id": "$_id",
      "AppointmentId": {
        "$arrayElemAt": ["$identifier.value", 0]
      },
      "Description": "$description"
    },
    "practitioner": {
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
    "patient": {
      "Id": "$_id",
      "PatientName": {
        "$arrayElemAt": ["$name.text", 0]
      },
      "Patient_Id": {
        "$arrayElemAt": ["$identifier.value", 0]
      }
    },
    "claimresponse": {
      "Id": "$_id",
      "ClaimId": {
        "$arrayElemAt": ["$identifier.value", 0]
      },
      "ClaimEntryDate": "$created",
      "ClaimStatus": "$disposition"
    }

    /*  ,
    "ProcedurseRequest": {
      "CPTCode": "$code.text"
    },
    "DiagnosticReport": {
      "ICDCode": "$codedDiagnosis.text"
    }*/
  },
  "ClaimDeniedByPayer": {
    "patient": {
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
    "patient": {
      "_id": 0,
      "PatientName": "$name.text",
      "Patient_Id": "$identifier.value"
    },
    "practitioner": {
      "_id": 0,
      "PractitionerName": "$name"
    },
    "Procedure": {
      "ProcedureDate": "$performedDateTime"
    }
  },
  "PostCataractVAI": {}
};

  /* resources = {
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
    "Procedure": "Procedure"
  };*/

export default projections;

/* export default resources;*/
