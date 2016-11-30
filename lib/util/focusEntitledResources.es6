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
        "Id": "$_id",
        "PatientName": {
          "$arrayElemAt": ["$name.text", 0]
        },
        "street": {
          "$arrayElemAt": [
            {
              "$arrayElemAt": ["$address.line", 0]
            }, 0]
        },
        "city": {
          "$arrayElemAt": ["$address.city", 0]
        },
        "state": {
          "$arrayElemAt": ["$address.state", 0]
        }
      },
      "Procedure": {
        "Id": "$_id",
        "_id": 0,
        "ProcedureDate": "$performedDateTime"
      }
    },
    "CataractConversionRate": {
      "Patient": {
        "Id": "$_id",
        "PatientName": {
          "$arrayElemAt": ["$name.text", 0]
        },
        "street": {
          "$arrayElemAt": [
            {
              "$arrayElemAt": ["$address.line", 0]
            }, 0]
        },
        "city": {
          "$arrayElemAt": ["$address.city", 0]
        },
        "state": {
          "$arrayElemAt": ["$address.state", 0]
        }
      },
      "Procedure": {
        "Id": "$_id",
        "_id": 0,
        "ProcedureDate": "$performedDateTime"
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
      "Practitioner": {
        "Id": "$_id",
        "PractitionerName": "$name.text"
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
      "Practitioner": {
        "Id": "$_id",
        "PractitionerName": "$name.text"
      },
      "ProcedureRequest": {
        "Id": "$_id",
        "ScheduledDate": "$scheduledDateTime",
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
    "OTReturn": {
      "Patient": {
        "Id": "$_id",
        "_id": 0,
        "PatientName": {
          "$arrayElemAt": ["$name.text", 0]
        },
        "Patient_Id": {
          "$arrayElemAt": ["$identifier.value", 0]
        }
      },
      "Practitioner": {
        "Id": "$_id",
        "_id": 0,
        "PractitionerName": "$name.text"
      },
      "Procedure": {
        "Id": "$_id",
        "_id": 0,
        "ProcedureDate": "$performedDateTime"
      }
    },
    "PostCataractVAI": {
      "Patient": {
        "Id": "$_id",
        "PatientName": {
          "$arrayElemAt": ["$name.text", 0]
        },
        "Patient_Id": {
          "$arrayElemAt": ["$identifier.value", 0]
        }
      },
      "Practitioner": {
        "Id": "$_id",
        "PractitionerName": "$name.text"
      },
      "Observation": {
        "Id": "$_id",
        "postVisitDate": "$effectiveDateTime",
        "vision": "$valueString",
        "code": {
          "$arrayElemAt": ["$code.coding.code", 0]
        }
      },
      "Procedure": {
        "Id": "$_id",
        "surgeryDate": "$performedDateTime"

      }
    },
    "PatientTurnover": {
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
        "Facility_Code": {
          "$arrayElemAt": ["$identifier.value", 0]
        },
        "Location": "$name"
      },
      "Appointment": {
        "Id": "$_id",
        "AppointmentId": {
          "$arrayElemAt": ["$identifier.value", 0]
        },
        "WorkingDate": {
          "$arrayElemAt": ["$identifier.period.start", 0]
        }
      }
    },
    "TotalExamTime": {
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
        "LocationName": "$name"
      }
    },
    "DelayedDischarges": {
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
        "AppointmentDate": {
          "$arrayElemAt": ["$identifier.period.start", 0]
        },
        "EnterTime": "$start",
        "LeaveTime": "$end"
      }
    },
    "OpticNerveEvaluation": {
      "Patient": {
        "Id": "$_id",
        "PatientName": {
          "$arrayElemAt": ["$name.text", 0]
        },
        "Patient_Id": {
          "$arrayElemAt": ["$identifier.value", 0]
        }
      },
      "Practitioner": {
        "Id": "$_id",
        "PractitionerName": "$name.text"
      },
      "Procedure": {
        "Id": "$_id",
        "ProcedureDate": "$performedDateTime"
      },
      "DiagnosticReport": {
        "Id": "$_id",
        "CPT Code": {
          "$arrayElemAt": ["$codedDiagnosis.text", 0]
        }
      }
    }
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
    "Claimresponse": "ClaimResponse",
    "Observation": "Observation"
  };

export {projections, resources};
