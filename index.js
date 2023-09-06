const checkbox = document.querySelector('ir-checkbox');
const select = document.querySelector('ir-select')
const data = [{
    optgrouplabel: "Alaskan/Hawaiian Time Zone",
    options: [{
        title: "Alaska",
        value: "AK",
    }, {
        title: "Hawaii",
        value: "HI",
    },
    ],
},

{
    optgrouplabel: "Pacific Time Zone",
    options: [{
        title: "California",
        value: "CA",
    }, {
        title: "Nevada",
        value: "NV",
    },
    {
        title: "Oregon",
        value: "OR",
    },
    {
        title: "WA",
        value: "Washington",
    },
    ],
},
{
    optgrouplabel: "Mountain Time Zone",
    options: [{
        title: "Arizona",
        value: "AZ",
    }, {
        title: "Colorado",
        value: "CO",
    },
    {
        title: "Idaho",
        value: "ID",
    },
    {
        title: "Montana",
        value: "MT",
    },
    {
        title: "Nebraska",
        value: "NE",
    },
    {
        title: "New Mexica",
        value: "NM",
    },
    {
        title: "North Dakota",
        value: "ND",
    }, {
        title: "Utah",
        value: "UT",
    }, {
        title: "Wyaoming",
        value: "WY",
    },
    ],
},
]
select.data = JSON.stringify(data)
// $(document).ready(function () {
//     $('.select2').select2();
// });
checkbox.addEventListener('oncheckchange', (e) => {
    console.log(e.detail)
})
