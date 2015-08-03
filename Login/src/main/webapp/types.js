wm.types = {
	"types": {
		"boolean": {
			"internal": true,
			"primitiveType": "Boolean"
		},
		"byte": {
			"internal": true,
			"primitiveType": "Number"
		},
		"char": {
			"internal": true,
			"primitiveType": "String"
		},
		"com.wavemaker.runtime.security.WMCurrentUser": {
			"liveService": false,
			"internal": false,
			"service": "securityService",
			"fields": {
				"authenticated": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"type": "boolean",
					"isList": false,
					"required": true
				},
				"loginTime": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"type": "long",
					"isList": false,
					"required": true
				},
				"securityEnabled": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"type": "boolean",
					"isList": false,
					"required": true
				},
				"tenantId": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"type": "int",
					"isList": false,
					"required": true
				},
				"userId": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": true
				},
				"userName": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": true
				},
				"userRoles": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": true,
					"required": true
				}
			}
		},
		"double": {
			"internal": true,
			"primitiveType": "Number"
		},
		"float": {
			"internal": true,
			"primitiveType": "Number"
		},
		"int": {
			"internal": true,
			"primitiveType": "Number"
		},
		"java.lang.Boolean": {
			"internal": false,
			"primitiveType": "Boolean"
		},
		"java.lang.Byte": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Character": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.Double": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Float": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Integer": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Long": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Short": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.String": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.StringBuffer": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.math.BigDecimal": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.math.BigInteger": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.sql.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Time": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Timestamp": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.util.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"long": {
			"internal": true,
			"primitiveType": "Number"
		},
		"short": {
			"internal": true,
			"primitiveType": "Number"
		}
	}
};