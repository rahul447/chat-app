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
      "_id": 0,
      "PatientName": "$name.text",
      "Patient_Id": "$identifier.value"
    },
    "appointment": {
      "_id": 0,
      "AppointmentId": "$identifier.value",
      "WorkingDate": "$identifier.period.start"
    },
    "location": {
      "_id": 0,
      "LocationName": "$name",
      "Facility_Code": "$identifier.value"
    },
    "practitioner": {
      "_id": 0,
      "PractitionerName": "$name.text"
    }
  },
  "TechnicianProductivity": {
    "patient": {
      "_id": 0,
      "PatientName": "$name.text",
      "Patient_Id": "$identifier.value"
    },
    "appointment": {
      "_id": 0,
      "AppointmentId": "$identifier.value",
      "WorkingDate": "$identifier[1].period.start"
    },
    "location": {
      "_id": 0,
      "LocationName": "$name",
      "Facility_Code": "$identifier.value"
    },
    "practitioner": {
      "_id": 0,
      "TechnicianName": "$name.text"
    }
  },
  "CounsellorProductivity": {
    "patient": {
      "_id": 0,
      "PatientName": "$name.text",
      "Patient_Id": "$identifier.value"
    },
    "practitioner": {
      "_id": 0,
      "PractitionerName": "$name.text"
    },
    "ProcedureRequest": {
      "_id": 0,
      "WorkingDate": "$scheduledDateTime",
      "VisitId": "$identifier.value"
    }
  },
  "OpthalmologistProductivity": {
    "patient": {
      "_id": 0,
      "PatientName": "$name.text",
      "Patient_Id": "$identifier.value"
    },
    "appointment": {
      "_id": 0,
      "AppointmentId": "$identifier.value",
      "WorkingDate": "$identifier[1].period.start"
    },
    "location": {
      "_id": 0,
      "LocationName": "$name",
      "Facility_Code": "$identifier.value"
    },
    "practitioner": {
      "_id": 0,
      "PractitionerName": "$name.text"
    }
  },
  "LensUtilization": {
    "patient": {
      "_id": 0,
      "PatientName": "$name.text",
      "Patient_Id": "$identifier.value"
    },
    "location": {
      "_id": 0,
      "LocationName": "$name",
      "Facility_Code": "$identifier.value"
    },
    "practitioner": {
      "_id": 0,
      "PractitionerName": "$name.text"
    },
    "Procedure": {
      "_id": 0,
      "SurgeryDate": "$performedDateTime"
    },
    "Device": {
      "_id": 0,
      "LensType": "$model",
      "Eye": "$note.text"
    }
  },
  "ORComplications": {
    "patient": {
      "_id": 0,
      "PatientName": "$name.text",
      "Patient_DOB": "$birthDate"
    },
    "appointment": {
      "_id": 0,
      "AppointmentId": "$identifier.value",
      "Description": "$description"
    },
    "practitioner": {
      "_id": 0,
      "PractitionerName": "$name.text",
      "Complications": "$comment"
    },
    "Procedure": {
      "_id": 0,
      "ProcedureDate": "$performedDateTime"
    }
  },
  "ClaimErrorRate": {
    "patient": {
      "_id": 0,
      "PatientName": "$name.text",
      "Patient_Id": "$identifier.value"
    },
    "ClaimResponse": {
      "ClaimId": "$identifier.value",
      "ClaimEntryDate": "$created",
      "ClaimStatus": "$disposition"
    },
    "ProcedureRequest": {
      "CPTCode": "$code.text"
    },
    "DiagnosticReport": {
      "ICDCode": "$codedDiagnosis.text"
    }
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

export default projections;
