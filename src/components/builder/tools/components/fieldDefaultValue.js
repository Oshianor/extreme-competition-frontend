export const defVal = {
	// !start----hold on this
	name: {
		type: "name",
		name: "Name",
		instruction: "",
		size: "m",
		nameElement: {
			first: "First",
			last: "Last"
		},
		required: false,
		visible: true
	},
	address: {
		type: "address",
		name: "Address",
		instruction: "",
		size: "m",
		addressElement: {
			streetAddress: { visible: "yes", label: "Street Address" },
			addressLine: { visible: "yes", label: "Address Line" },
			city: { visible: "yes", label: "City" },
			state: { visible: "yes", label: "State" },
			zip: { visible: "yes", label: "Zip" },
			country: { visible: "yes", label: "Country" },
		},
		required: false,
		visible: true
	},
	// !end ---hold on this

	single_line: {
		type: "single_line",
			name: "Single Line",
			instruction: "",
			size: "m",
			initialValue: "",
			range: {
				min: 0,
				max: 225
			},
			required: true,
			duplicates: true,
			visible: true
	},
	multi_line: {
		type: "multi_line",
		name: "Multi Line",
		instruction: "",
		size: "m",
		initialValue: "",
		range: {
			min: 0,
			max: 6000,
			format: "characters" // word
		},
		required: true,
		visible: true
	},
	number: {
		type: "number",
		name: "Number",
		instruction: "",
		size: "m",
		initialValue: "",
		range: {
			min: 0,
			max: 18,
			format: "digits" // values
		},
		required: true,
		duplicates: false,
		allowNegativeValue: false,
		visible: true
	},
	decimal: {
		type: "decimal",
		name: "Decimal",
		instruction: "",
		size: "m",
		initialValue: "",
		decimalFormat: "1234567.89",
		decimalPoint: 2,
		range: {
			min: 0,
			max: 18,
			format: "digits" // values
		},
		required: false,
		duplicates: false,
		visible: true
	},
	time: {
		type: "time",
		name: "Time",
		instruction: "",
		timeFormat: "12", // 24
		minuteInterval: "1", // 1,5,10,15,30
		required: false,
		duplicates: false,
		visible: true
	},
	website: {
		type: "website",
		name: "Website",
		instruction: "",
		size: "m",
		initialValue: "",
		required: false,
		visible: true
	},
	checkbox: {
		type: "checkbox",
		name: "Checkbox",
		instruction: "",
		display: "1 column", // 2 column, 3 column, side by side
		choice: [
			{ checked: false, label: "First choice" },
			{ checked: false, label: "Second Choice" },
			{ checked: false, label: "Third Choice" },
			{ checked: false, label: "Fourth Choice" }
		],
		limit: {
			min: "",
			max: ""
		},
		required: false,
		visible: true
	},
	decision_box: {
		type: "decision_box",
		name: "Decision Box",
		instruction: "",
		initialState: false,
		required: false,
		visible: true
	},
	date_time: {
		type: "date_time",
		name: "Date Time",
		instruction: "",
		initialValue: "",
		range: {
			from: "",
			to: ""
		},
		required: false,
		duplicates: false,
		visible: true
	},
	multi_choice: {
		type: "multi_choice",
		name: "Multi Choice",
		instruction: "",
		size: "m",
		choice: [
			{ checked: false, label: "First choice" },
			{ checked: false, label: "Second Choice" },
			{ checked: false, label: "Third Choice" },
			{ checked: false, label: "Fourth Choice" }
		],
		limit: {
			min: "",
			max: ""
		},
		required: false,
		visible: true
	},
	phone: {
		type: "phone",
		name: "Phone",
		instruction: "",
		size: "m",
		format: "international", // "###-###-####"
		initialValue: "",
		required: false,
		duplicates: false,
		visible: true
	},
	email: {
		type: "email",
		name: "Email",
		instruction: "",
		size: "m",
		initialValue: "",
		allowedDomains: "",
		required: false,
		duplicates: false,
		visible: true
	},
	radio: {
		type: "radio",
		name: "Radio",
		instruction: "",
		display: "1 column", // 2 column, 3 column, side by side
		choice: ["First choice", "Second Choice", "Third Choice"],
		other: false,
		required: false,
		visible: true
	},
	currency: {
		type: "currency",
		name: "Currency",
		instruction: "",
		size: "m",
		currency: "NGN",
		decimalFormat: "1234567.89",
		decimalPoint: 2,
		initialValue: "",
		range: {
			min: 0,
			max: 50,
			format: "digits" // value
		},
		required: false,
		duplicates: false,
		visible: true
	},
	date: {
		type: "date",
		name: "Date",
		instruction: "",
		initialValue: "",
		range: {
			from: "",
			to: ""
		},
		required: false,
		duplicates: false,
		visible: true
	},
	file_upload: {
		type: "file_upload",
		name: "File Upload",
		instruction: "",
		allowedMaxSize: "20mb",
		allowedFileType: "",
		required: false,
		duplicates: false,
		visible: true
	},
	dropdown: {
		type: "dropdown",
		name: "Dropdown",
		instruction: "",
		size: "m",
		checked: "null",
		choice: [
			"First choice", "Second Choice", "Third Choice", "Fourth Choice"
		],
		required: false,
		visible: true
	},
	section: {
		type: "section",
		name: "Section",
		instruction: "",
	},
	slider: {
		type: "slider",
		name: "Slider",
		instruction: "",
		size: "m",
		range: {
			min: 0,
			max: 100
		},
		required: false,
		visible: true
	},
	rating: {
		type: "rating",
		name: "Rating",
		instruction: "",
		count: 5,
		required: false,
		visible: true
	},
	unique_id: {
		type: "unique_id",
		name: "Unique ID",
		instruction: "(Note: This field will not show up on the form)",
		startFrom: 1,
		prefix: "",
		suffix: ""
	},
	terms_and_conditions: {
		type: "terms_and_conditions",
		name: "Terms and Conditions",
		showLabel: true,
		terms: "",
		declaration: "",
		status: "I agree to the terms and condition",
		required: false,
	},
	signature: {
		type: "signature",
		name: "Signature",
		instruction: "",
		allowedMaxSize: "20MB",
		required: false,
	},
	gps: {
		type: "gps",
		name: "GPS",
	}
} 